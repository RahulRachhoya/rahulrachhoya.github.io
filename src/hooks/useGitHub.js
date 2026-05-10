/**
 * useGitHub.js
 * Fetches live data from the GitHub public API.
 * No auth needed — public repos, stats, activity.
 * Rate limit: 60 req/hr unauthenticated. We cache in sessionStorage.
 */

import { useState, useEffect } from 'react';

const USERNAME = 'RahulRachhoya';
const BASE = 'https://api.github.com';
const CACHE_TTL = 5 * 60 * 1000; // 5 min

function cached(key, fetcher) {
  const raw = sessionStorage.getItem(key);
  if (raw) {
    try {
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts < CACHE_TTL) return Promise.resolve(data);
    } catch (_) {}
  }
  return fetcher().then((data) => {
    try { sessionStorage.setItem(key, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
    return data;
  });
}

async function ghFetch(path) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { Accept: 'application/vnd.github+json' },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}: ${path}`);
  return res.json();
}

/* ── Profile stats ─────────────────────────────────────────────────────── */
export function useGitHubProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cached(`gh_profile_${USERNAME}`, () => ghFetch(`/users/${USERNAME}`))
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  return { profile: data, loading };
}

/* ── Pinned / top repos ─────────────────────────────────────────────────── */
export function useGitHubRepos({ limit = 6, exclude = [] } = {}) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cached(`gh_repos_${USERNAME}`, () =>
      ghFetch(`/users/${USERNAME}/repos?per_page=100&sort=updated&type=owner`)
    )
      .then((all) => {
        const filtered = all
          .filter((r) => !r.fork && !r.archived && !exclude.includes(r.name))
          .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
          .slice(0, limit);
        setRepos(filtered);
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, [limit]);

  return { repos, loading };
}

/* ── Recent activity (public events) ───────────────────────────────────── */
export function useGitHubActivity({ limit = 10 } = {}) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cached(`gh_events_${USERNAME}`, () =>
      ghFetch(`/users/${USERNAME}/events/public?per_page=30`)
    )
      .then((all) => setEvents(all.slice(0, limit)))
      .catch(() => setEvents([]))
      .finally(() => setLoading(false));
  }, [limit]);

  return { events, loading };
}

/* ── Aggregate stats (total stars, forks) ──────────────────────────────── */
export function useGitHubStats() {
  const [stats, setStats] = useState({ stars: 0, forks: 0, repos: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cached(`gh_repos_${USERNAME}`, () =>
      ghFetch(`/users/${USERNAME}/repos?per_page=100&sort=updated&type=owner`)
    )
      .then((all) => {
        const stars = all.reduce((s, r) => s + r.stargazers_count, 0);
        const forks = all.reduce((s, r) => s + r.forks_count, 0);
        setStats({ stars, forks, repos: all.length });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { stats, loading };
}

/* ── Event display helpers ─────────────────────────────────────────────── */
export function formatEvent(event) {
  const repo = event.repo?.name?.split('/')[1] ?? event.repo?.name ?? '';
  const repoUrl = `https://github.com/${event.repo?.name}`;
  const date = new Date(event.created_at).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short',
  });

  switch (event.type) {
    case 'PushEvent': {
      const n = event.payload?.commits?.length ?? 1;
      return { icon: '⚡', label: `Pushed ${n} commit${n > 1 ? 's' : ''} to`, repo, repoUrl, date, color: 'var(--rp-cyan)' };
    }
    case 'CreateEvent':
      return { icon: '📦', label: `Created ${event.payload?.ref_type ?? 'branch'} in`, repo, repoUrl, date, color: 'var(--rp-gold)' };
    case 'IssuesEvent':
      return { icon: '🐛', label: `${event.payload?.action} issue in`, repo, repoUrl, date, color: 'var(--rp-purple)' };
    case 'PullRequestEvent':
      return { icon: '🔀', label: `${event.payload?.action} PR in`, repo, repoUrl, date, color: 'var(--rp-cyan)' };
    case 'ForkEvent':
      return { icon: '🍴', label: 'Forked', repo, repoUrl, date, color: 'var(--rp-gold)' };
    case 'WatchEvent':
      return { icon: '⭐', label: 'Starred', repo, repoUrl, date, color: 'var(--rp-gold)' };
    case 'ReleaseEvent':
      return { icon: '🚀', label: 'Released in', repo, repoUrl, date, color: 'var(--rp-purple)' };
    case 'DeleteEvent':
      return { icon: '🗑', label: `Deleted ${event.payload?.ref_type ?? 'ref'} in`, repo, repoUrl, date, color: 'var(--rp-gray)' };
    default:
      return { icon: '🎮', label: `${event.type?.replace('Event', '') ?? 'Action'} in`, repo, repoUrl, date, color: 'var(--rp-gray)' };
  }
}
