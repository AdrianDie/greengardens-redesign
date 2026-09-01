// Footer year
document.getElementById('footer-year').textContent = `© ${new Date().getFullYear()} Green Gardens AS`;

// Mobile drawer
const menuToggle = document.getElementById('menu-toggle');
const drawer = document.getElementById('mobile-drawer');
const drawerClose = document.getElementById('drawer-close');
const drawerOverlay = document.getElementById('drawer-overlay');

function openDrawer() {
  drawer.classList.add('open');
  drawerOverlay.classList.add('open');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawerOverlay.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
menuToggle.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// Header shadow on scroll
const header = document.getElementById('site-header');
function onScroll() {
  header.style.boxShadow = window.scrollY > 8 ? '0 8px 24px -18px rgba(35,38,29,0.4)' : 'none';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// GSAP scroll reveals
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce) {
    gsap.from('.hero-copy > *', {
      y: 24, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'expo.out', delay: 0.1
    });
    gsap.from('.hero-visual', {
      y: 30, opacity: 0, duration: 1, ease: 'expo.out', delay: 0.25
    });

    gsap.utils.toArray('.section-head').forEach(el => {
      gsap.from(el, {
        y: 26, opacity: 0, duration: 0.8, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.service-card').forEach((el, i) => {
      gsap.from(el, {
        y: 22, opacity: 0, duration: 0.7, ease: 'expo.out',
        delay: (i % 3) * 0.06,
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });

    gsap.utils.toArray('.team-card').forEach((el, i) => {
      gsap.from(el, {
        y: 20, opacity: 0, duration: 0.7, ease: 'expo.out',
        delay: (i % 4) * 0.06,
        scrollTrigger: { trigger: el, start: 'top 92%' }
      });
    });

    gsap.from('.om-photo', {
      opacity: 0, x: -20, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: '.om-grid', start: 'top 80%' }
    });
    gsap.from('.om-copy', {
      opacity: 0, x: 20, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: '.om-grid', start: 'top 80%' }
    });

    gsap.from('.project-feature', {
      opacity: 0, y: 30, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: '.project-feature', start: 'top 85%' }
    });
    gsap.utils.toArray('.project-gallery img').forEach((el, i) => {
      gsap.from(el, {
        opacity: 0, y: 24, duration: 0.7, ease: 'expo.out', delay: i * 0.08,
        scrollTrigger: { trigger: el, start: 'top 90%' }
      });
    });

    gsap.from('.kontakt-info', {
      opacity: 0, y: 24, duration: 0.9, ease: 'expo.out',
      scrollTrigger: { trigger: '.kontakt-grid', start: 'top 85%' }
    });
    gsap.from('.map-frame', {
      opacity: 0, y: 24, duration: 0.9, ease: 'expo.out', delay: 0.1,
      scrollTrigger: { trigger: '.kontakt-grid', start: 'top 85%' }
    });

    gsap.to('.ring-1', {
      y: -40, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 }
    });
    gsap.to('.ring-2', {
      y: 30, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 }
    });
  }
}
