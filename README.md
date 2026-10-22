# Halbert Insurance Services: Website

Starter website for **Halbert Insurance Services, LLC**, an independent health and life insurance broker in Melbourne, FL. It replaces the current WordPress site at halbertins.com.

**Feel:** Simple, Clean, Sharp. Navy, white and one teal accent.

## Pages

| File | Contents |
|---|---|
| `index.html` | Hero, who we help, why an independent broker, carriers, testimonials |
| `services.html` | Medicare, Individual & Family, Small Business, Life, Ancillary |
| `team.html` | Agency story and the 5 team members |
| `contact.html` | Call / text / book / email options and the quote request form |

## Running locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Placeholders to replace before launch

Search the code for `TODO` to find each one.

- [ ] **Formspree form ID:** `contact.html`, `YOUR_FORM_ID`. Until it's set, the form shows a "call or text us" message.
- [ ] **Scheduling link:** `contact.html`, `https://calendly.com/halbertins`.
- [ ] **Office address:** footer on every page and `contact.html`. Currently `1234 Placeholder Blvd`.
- [ ] **Office hours:** footer and `contact.html`.
- [ ] **Florida license number:** footer and `contact.html`. Currently `#W000000`.
- [ ] **Ameristead Health logo:** shown as a text badge in the carriers grid on `index.html`.
- [ ] **Hero / social sharing image:** optional.

## Notes

- The header and footer are copied into every page. If you change one, change it on all four.
- Colors, spacing and fonts are CSS variables at the top of `css/styles.css`.
- Team photos, the logo and carrier logos were pulled from the current halbertins.com site.
