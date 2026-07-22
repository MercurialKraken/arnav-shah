# Open items deferred to the design pass

Working notes. Outside `docs/`, never served.

These came out of the pre-deploy review and were deliberately deferred rather than patched,
because each one is really a layout question and patching it now would mean guessing ahead
of the design work. Do not fix these piecemeal; do them when the layout is being touched.

---

## 1. `overflow-x: hidden` masks overflow instead of preventing it

`docs/style.css`, on both `html` and `body`.

Nothing currently overflows at 320px. That was checked: `.wrap` leaves 272px of content,
the widest tag needs about 168px, the nav wraps correctly via `flex-wrap`, and the 16:9
media items clamp to the column exactly as the media system intends. So the guard is doing
nothing today.

The problem is what it does tomorrow. With it in place, the next long unbroken string or
oversized element gets silently clipped instead of producing a visible scrollbar. It turns
a bug you would notice into one you would not.

Resolve it during the design pass by removing it and confirming in a real browser at 320px
that nothing overflows. If something does, fix the actual cause. If the guard is kept
deliberately, it needs a comment saying so, otherwise the next person reads it as a
leftover.

Arnav's call: defer and resolve properly when the layout is touched, rather than mask now.

---

## 2. The race clip's control bar is cramped

`docs/projects.html`, the CMR entry.

Every video now carries native `controls`, which is what fixes the WCAG 2.2.2 pause
requirement. But the shared-height media system renders the portrait race clip at roughly
192px wide, and a native control bar at that width is tight. Some browsers drop buttons.

Do not solve this with custom control CSS. The WebKit and Blink media-control
pseudo-elements are non-standard and diverge, so restyling them tends to produce a
half-broken player rather than a restrained one. The honest fix is a wider treatment for
portrait media specifically, which is a layout decision and belongs in the design pass.

---

## 3. The og:image does not exist yet

Tracked separately in `tasks/social-meta-outstanding.md`, noted here so the design pass
sees all three items in one place. The image needs designing, and adding it means
switching `twitter:card` from `summary` to `summary_large_image` in the same edit.
