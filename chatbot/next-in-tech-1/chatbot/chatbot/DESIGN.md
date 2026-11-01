---
name: Jade Conversational Interface
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006947'
  on-tertiary: '#ffffff'
  tertiary-container: '#00855b'
  on-tertiary-container: '#f5fff6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
  caption:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
---

## Brand & Style

This design system establishes a high-trust, editorial-grade conversational environment tailored for an Italian audience. The visual ethos combines Italian industrial clarity with Swiss graphic rigor—balancing generous negative space with authoritative typography.

### Emotional Response & Target Audience
- **Target Audience:** Modern Italian professionals, knowledge workers, and executives who expect effortless intelligence without theatrical digital ornament.
- **Emotional Response:** Lucidity, confidence, quiet efficiency, and absolute privacy. Interactions feel instantaneous, composed, and discreet.

### Design Movement: Modern Minimalist Neumorphism & Crisp Utility
The aesthetic eliminates decorative gradient noise in favor of pristine white planes, precise 1px micro-borders, deep maritime navy, and singular emerald accents that denote active intelligence. Surfaces remain tactile through ultra-fine diffusion shadows rather than heavy skeuomorphism.

## Colors

The palette operates on purposeful chromatic restraint: functional neutrality across wide canvas planes, punctuated by deep architectural slate for user identity and a focused jade emerald for mechanical life and action states.

### Palette Architecture
- **Primary (`#059669` / Jade Deep):** Reserved strictly for high-leverage interactive elements: the circular transmission action (`Invia`), active input states, and the system live-status dot (`Online`).
- **Secondary (`#0F172A` / Slate 900):** Anchors user-generated dialogue bubbles, prominent headline copy, and definitive action items. It supplies heavy visual weight to ground the lightweight interface.
- **Tertiary (`#10B981` / Emerald 500):** Highlights the "AI" intelligence chip, secondary affirmative tags, and non-blocking success feedback.
- **Neutral Canvas (`#F8FAFC` / Slate 50):** The base atmospheric stage across the main conversational viewport.

### Text Contrast Tiers
- **Dominant (`#0F172A`):** Core conversational transcripts, header titles, and primary input text.
- **Supportive (`#334155`):** Subheadings, markdown quotes within assistant cards, and contextual options.
- **Subdued (`#64748B`):** Timestamps (e.g., *14:32*), Italian status copy (*"In attesa di risposta..."*), placeholder cues, and character metrics.
- **Structural Border (`#E2E8F0`):** 1px structural division lines across navigation bars, prompt starters, and assistant card boundaries.

## Typography

The type system is rendered exclusively in **Inter** to prioritize structural neutrality, legibility in multi-paragraph prose, and clear rendering of dense Italian linguistic structures (including accented characters such as *à, è, é, ì, ò, ù*).

### Hierarchical Roles
- **App Bar Header (`headline-sm` / 16px, Semibold):** Anchors the current thread identity (e.g., *"Sessione Strategica"* or assistant title).
- **Dialogue Transcript (`body-md` / 15px, Regular):** The default optical size for reading assistant responses and composed user text. Line height is tuned to `22px` to permit comfortable paragraph scanning without vertical compression.
- **Context & Meta (`caption` / 11px, Regular):** Discrete chronological tracking and status alerts (*"Oggi alle 09:41"*, *"Modificato"*).
- **Interface Badging (`label-sm` / 11px, Semibold):** Capitalized tracking for classification tokens such as the `"AI"` identifier pill and quick-command tags.

## Layout & Spacing

The layout is built for vertical thumb-driven mobile ergonomics, structured around a continuous thread flanked by two persistent structural anchors.

### Structural Shell
1. **Fixed Header Zone:** 56px fixed height with `env(safe-area-inset-top)` offset. Houses system back-navigation, interlocutor avatar with online indicator, thread title, and secondary session utilities.
2. **Dynamic Chat Viewport:** Stretches from the header edge to the bottom bar. Message nodes stack vertically with dynamic asymmetric row spacing:
   - `space-xs` (4px) between sequential messages from the same sender.
   - `space-lg` (16px) between alternating sender handoffs.
3. **Fixed Bottom Action Bar:** Multi-line expansion bar padded `space-md` above `env(safe-area-inset-bottom)`. The active input surface stretches horizontally, terminating at the fixed 40px circular submission button.

### Form Factor Behavior
- **Mobile (Base, 360px – 480px):** Single-column fluid stream. Bubbles observe an 82% maximum horizontal width relative to the screen plane to preserve vertical distinction.
- **Tablet / Split View (481px+):** Centralized message channel pinned at `max-width: 640px` with outer whitespace fluidly expanding to prevent extended, fatiguing eye travel.

## Elevation & Depth

Depth is established via crisp, low-opacity micro-shadows coupled with physical border perimeters to eliminate muddy gradients on clean mobile displays.

### Elevation Levels
- **Canvas Base (Level 0):** `#F8FAFC`. Zero elevation, zero shadows.
- **Assistant Message Bubbles & Cards (Level 1):** `#FFFFFF` paired with a 1px border (`#E2E8F0`) and an ambient drop shadow:
  - `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Top Header & Fixed Floating Elements (Level 2):** `#FFFFFF` background with 92% opacity and `backdrop-filter: blur(12px)`.
  - Border bottom: 1px solid `rgba(226, 232, 240, 0.8)`.
  - Ambient drop shadow: `0 4px 6px -1px rgba(15, 23, 42, 0.03)`.
- **Floating Input Dock (Level 3):** `#FFFFFF` container with `box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.06), 0 4px 6px -4px rgba(15, 23, 42, 0.04)`.
- **Primary Action (Send Button):** Ambient jade glow in active state:
  - `box-shadow: 0 4px 12px 0 rgba(5, 150, 105, 0.25)`.

## Shapes

The interface balances organic, conversational softness with technical precision. 

### Corner Radius System
- **Assistant Message Bubbles:** `16px` (`rounded-2xl`) across top-left, top-right, and bottom-right; `4px` on the bottom-left corner to anchor the speech direction toward the assistant avatar.
- **User Message Bubbles:** `16px` (`rounded-2xl`) across top-left, top-right, and bottom-left; `4px` on the bottom-right corner directing back toward the user.
- **Text Area Container:** `20px` to maintain an elongated capsule appearance that harmonizes with the circular send button.
- **Circular Components (Full Pill):** `9999px` (`rounded-full`) applied to the 40px send button, avatar frames, online status indicators, and the compact `"AI"` identity badge.

## Components

### Chat Bubbles & Avatars
- **Assistant Bubble:** 
  - Canvas: Pure white (`#FFFFFF`) with 1px border (`#E2E8F0`).
  - Text: Slate 900 (`#0F172A`) for primary copy; Slate 500 (`#64748B`) for code blocks and metadata.
  - Avatar: 32px circular container displaying the brand jade glyph or neural icon, positioned at the bottom-left margin of the message cluster.
- **User Bubble:**
  - Canvas: Deep navy (`#0F172A`).
  - Text: Pure white (`#FFFFFF`).
  - Alignment: Right-aligned; avatar is omitted to streamline the user side of the viewport.
- **AI Indicator Badge:**
  - Positioned beside assistant responses: a miniature pill with `#ECFDF5` fill, `#059669` text, 10px type weight 600, spelling `"AI"`.

### Input Assembly (Bottom Fixed Bar)
- **Container:** Pinned to viewport bottom with safe-area spacing. Surface is pure white, bounded top-side by 1px `#E2E8F0`.
- **Text Area:** Multi-line expanding field without native borders. Placeholder copy reads: *"Scrivi un messaggio..."* in `#94A3B8`.
- **Send Trigger:**
  - Inactive State: 40px circle, `#E2E8F0` background, `#94A3B8` arrow icon, non-clickable.
  - Active State (Text Entered): 40px circle, `#059669` fill, white `#FFFFFF` arrow icon, ambient emerald shadow (`0 4px 12px rgba(5, 150, 105, 0.25)`).

### Status Indicators
- **Online Indicator:** 8px absolute circle in `#10B981`, bordered by 2px pure white background ring, positioned at the bottom-right coordinate of the header avatar.
- **Thinking / Typing Feedback:** Three 6px `#059669` dots inside a white Level 1 bubble, executing a continuous staggered wave animation.

### Suggestion Chips (Prompt Starters)
- Single-row horizontal scroll area directly above the input bar.
- Rounded pill (`rounded-full`), white background, 1px border (`#E2E8F0`), text in `#334155` (`label-md`). 
- Pressed state: transitions to `#F1F5F9`.
- Example labels: *"Riassumi documento"*, *"Traduci in inglese"*, *"Bozza email formale"*.

### System Notifications & Error Alerts
- Inline lightweight banners with a 1px border in `#FEE2E2` and background `#FEF2F2`. Text uses `#991B1B`. Dismiss action anchored cleanly to the right.