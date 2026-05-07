# TypeUI-Inspired Bento Portfolio Design System

## Design Philosophy
Modern, minimalist portfolio with bento grid layout, soft shadows, and refined typography.
Focus: Readability, hierarchy, and professional presentation.

## Color Palette

### Primary Colors
- **Surface**: `#FAFAFA` (off-white, reduces eye strain)
- **Elevated**: `#FFFFFF` (pure white for cards)
- **Text Primary**: `#0F172A` (slate-900, high contrast)
- **Text Secondary**: `#475569` (slate-600)
- **Text Tertiary**: `#94A3B8` (slate-400)

### Accent Colors
- **Primary**: `#6366F1` (indigo-500, trust & tech)
- **Primary Hover**: `#4F46E5` (indigo-600)
- **Secondary**: `#8B5CF6` (violet-500, creativity)
- **Success**: `#10B981` (emerald-500)
- **Warning**: `#F59E0B` (amber-500)

### Borders & Shadows
- **Border**: `#E2E8F0` (slate-200, subtle)
- **Shadow SM**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **Shadow MD**: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- **Shadow LG**: `0 10px 15px -3px rgb(0 0 0 / 0.1)`
- **Shadow Hover**: `0 20px 25px -5px rgb(0 0 0 / 0.1)`

## Typography

### Font Stack
- **Primary**: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`
- **Mono**: `'JetBrains Mono', 'Fira Code', monospace`

### Scale (Type Hierarchy)
- **Display**: 72px / 64px / 56px (hero headlines)
- **H1**: 48px (section titles)
- **H2**: 36px (subsection)
- **H3**: 24px (card titles)
- **H4**: 20px (labels)
- **Body**: 16px (default)
- **Small**: 14px (meta)
- **Tiny**: 12px (captions)

### Line Height
- **Tight**: 1.2 (headings)
- **Normal**: 1.5 (body)
- **Relaxed**: 1.75 (long-form)

### Font Weight
- **Regular**: 400 (body text)
- **Medium**: 500 (emphasis)
- **Semibold**: 600 (headings)
- **Bold**: 700 (display)

## Spacing System (8pt grid)
- **0**: 0px
- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **5**: 20px
- **6**: 24px
- **8**: 32px
- **10**: 40px
- **12**: 48px
- **16**: 64px
- **20**: 80px
- **24**: 96px
- **32**: 128px

## Border Radius
- **SM**: 8px (small elements, tags)
- **MD**: 12px (buttons, inputs)
- **LG**: 16px (cards)
- **XL**: 24px (large sections)
- **2XL**: 32px (hero cards)
- **Full**: 9999px (pills)

## Bento Grid System

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Grid
- **Columns**: 12
- **Gap**: 16px (mobile) / 24px (desktop)
- **Max Width**: 1280px

### Bento Patterns
1. **Spotlight** (span-12): Full-width hero or featured project
2. **Split** (span-6 + span-6): Balanced content
3. **Featured** (span-8 + span-4): Primary + sidebar
4. **Gallery** (span-4 × 3): Equal cards
5. **Mosaic** (mixed): Dynamic sizes

## Component Patterns

### Card (Bento Item)
```
- Background: white (#FFFFFF)
- Border: 1px solid #E2E8F0
- Border Radius: 16px
- Padding: 24px (mobile) / 32px (desktop)
- Shadow: 0 1px 2px rgba(0,0,0,0.05)
- Hover Shadow: 0 10px 15px rgba(0,0,0,0.1)
- Transition: all 0.3s ease
```

### Button Primary
```
- Background: linear-gradient(135deg, #6366F1, #8B5CF6)
- Color: white
- Padding: 12px 24px
- Border Radius: 12px
- Font Weight: 600
- Shadow: 0 4px 6px rgba(99,102,241,0.3)
- Hover: transform translateY(-2px) + shadow 0 8px 12px
```

### Tag/Badge
```
- Background: rgba(99,102,241,0.1)
- Color: #6366F1
- Padding: 6px 12px
- Border Radius: 9999px (pill)
- Font Size: 14px
- Font Weight: 500
```

## Animation Principles

### Timing
- **Fast**: 150ms (micro-interactions)
- **Normal**: 300ms (state changes)
- **Slow**: 500ms (page transitions)

### Easing
- **Standard**: `cubic-bezier(0.4, 0.0, 0.2, 1)`
- **Decelerate**: `cubic-bezier(0.0, 0.0, 0.2, 1)`
- **Accelerate**: `cubic-bezier(0.4, 0.0, 1, 1)`

### Effects
- **Hover**: translateY(-2px) + shadow increase
- **Active**: scale(0.98)
- **Focus**: ring 2px primary color
- **Fade In**: opacity 0 → 1 (300ms)

## Accessibility

### Contrast Ratios
- **Text on Surface**: 14.5:1 (AAA)
- **Text Secondary**: 7.4:1 (AA)
- **Interactive Elements**: Minimum 3:1

### Focus States
- **Ring**: 2px solid #6366F1
- **Offset**: 2px
- **Border Radius**: Match element

### Motion
- Respect `prefers-reduced-motion`
- Disable animations for users who prefer reduced motion
