# ShipOnClick Design System

> **ATTENTION AI AGENTS:** You MUST follow these design principles when adding or modifying any frontend component in this repository. DO NOT fall back on generic "AI slop" defaults.

## 1. The Aesthetic
**Apple-Style, Premium SaaS, "Direct & Physical"**
- The UI should feel like a native app extension of the user. 
- Fluid, interruptible, physical, and deliberate. 
- Eliminate all unnecessary noise, hairline borders, and generic defaults.

## 2. Banned "AI Slop" Defaults
You are **STRICTLY FORBIDDEN** from using the following common AI code-generation tropes:
- 🚫 **Generic Purple/Indigo Gradients**: Do not use `bg-gradient-to-r from-purple-500 to-indigo-500` to signify "AI" or "Premium". It is cheap.
- 🚫 **Bouncy Framer Motion**: No naive spring animations or elastic hover effects (e.g. `whileHover={{ scale: 1.05 }}`). 
- 🚫 **Identical Card Grids**: Do not stack perfectly symmetrical cards with `01`, `02`, `03` labels unless the sequence fundamentally requires it.
- 🚫 **Pure White / Pure Black**: Do not use `#000` or `#fff` for massive backgrounds. Use `#0A0B0A` (dark) or `#FAFAFA` (light) equivalents.
- 🚫 **Z-Index Soup & Arbitrary Blurs**: Do not use massive decorative blurred blobs behind text that hurts legibility.

## 3. Typography & Spacing
- **Fonts**: Use the configured Google fonts (`Inter` for UI, but `Outfit` or `Plus Jakarta Sans` for display if configured). Avoid default system fonts when building marketing headers.
- **Hierarchy**: Use extreme contrast. Display text should be huge, tight tracking (`tracking-tight`), and strong. Body text should be legible, soft, and breathable.
- **Spacing**: Use a standard 4pt/8pt grid. Avoid arbitrary margins like `mt-7` or `mb-11`. Prefer `gap-4`, `gap-8`, `gap-16`.

## 4. Materials & Depth (Apple-Style)
- **Glassmorphism**: Use translucent surfaces with backdrop-blur (`bg-background/60 backdrop-blur-xl border border-white/10`). 
- **Shadows**: Use multiple soft shadow layers to create physical elevation (`shadow-[0_8px_30px_rgb(0,0,0,0.12)]`).
- **Dim to focus**: When a modal or drawer opens, use a dark, blurred scrim (`bg-black/40 backdrop-blur-sm`).

## 5. Motion & Physics
- **Interruptibility**: Animations MUST animate from their current live presentation value. Avoid standard CSS `transition-all duration-300` on elements driven by pointer gestures.
- **Springs over Easing**: Prefer critically damped springs (`stiffness: 400, damping: 30`) over cubic-bezier. Bounce is ONLY allowed if a user gesture carried real physical momentum.
- **Micro-interactions**: Use `opacity` and `transform` exclusively for layout-thrashing performance. Pressing a button should yield immediate feedback (scale down slightly on `:active` or pointer down).

## 6. Execution Commandment
**Prefer delete-and-simplify over more decoration.** If a component feels empty, fix the typography scale and whitespace before you add arbitrary borders, icons, or background colors.
