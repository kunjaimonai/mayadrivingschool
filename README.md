# Maya Driving School Website

A responsive, modern website for Maya Driving School, built with HTML, Tailwind CSS, and GSAP. The site features a hero image slideshow, full-screen section layout, pricing details, animated training section, and a separate Progressive Web App (PWA) for booking.

---

## 🚀 Features

* **Hero Slideshow:** GSAP-animated full-screen image rotation
* **Mobile-Responsive Navbar:** With animated hamburger toggle
* **Full-Screen Sections:** About, Pricing, and Training, all using `100vh`
* **Animated Learners Training Section:** Horizontal scroll of slides and videos
* **Booking App:** Hosted as a separate PWA at `/pwa/`
* **Sticky Header + Scroll Interaction:** Seamless navigation
* **Footer with Contact & Google Maps Embed**

---

## 📁 Project Structure

```
/maya-driving-school/
├── index.html              # Main website
├── /Images/                # All visual assets (hero slideshow, logos)
├── /pwa/                   # Booking Progressive Web App
│   ├── index.html
│   ├── manifest.json
│   └── service-worker.js
└── README.md               # Project documentation
```

---

## 🧑‍💻 Setup Instructions

1. **Clone or Download** the repository.
2. Ensure all slideshow images (`img1.png` to `img5.png`) are placed in `/Images/`.
3. Open `index.html` in a browser to view the site.
4. Navigate to `/pwa/index.html` to test the booking application.

---

## 🛠 Tech Stack

* **HTML5**
* **Tailwind CSS** – modern utility-first design
* **GSAP** – animations and transitions
* **JavaScript** – dynamic logic for menus and slideshow
* **PWA** – for booking functionality (offline-ready)

---

## 📌 Future Improvements

* Add contact form integration (email or WhatsApp)
* Enhance accessibility (ARIA, alt text improvements)
* Backend support for booking history & confirmations
* SEO optimization

---