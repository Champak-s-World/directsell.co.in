async function loadPartials() {
  const includeTargets = [...document.querySelectorAll('[data-include]')];
  await Promise.all(includeTargets.map(async target => {
    const file = target.getAttribute('data-include');
    try {
      const response = await fetch(file, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`Could not load ${file}`);
      target.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
      target.innerHTML = '';
    }
  }));
}

function setActiveNavLink() {
  const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav a').forEach(link => {
    const href = (link.getAttribute('href') || '').toLowerCase();
    const isActive = href === page || (page === '' && href === 'index.html');
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function initMenu() {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.textContent = isOpen ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
      });
    });
  }
}

function initSlider() {
  const slides = [...document.querySelectorAll('.slide')];
  const controls = document.querySelector('.slider-controls');
  let currentSlide = 0;
  function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
    if (controls) [...controls.children].forEach((button, i) => button.classList.toggle('active', i === currentSlide));
  }
  if (slides.length && controls) {
    controls.innerHTML = '';
    slides.forEach((_, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('aria-label', 'Show slide ' + (i + 1));
      button.addEventListener('click', () => showSlide(i));
      controls.appendChild(button);
    });
    showSlide(0);
    setInterval(() => showSlide(currentSlide + 1), 4500);
  }
}

function initGallerySearch() {
  const search = document.querySelector('#gallerySearch');
  if (search) {
    search.addEventListener('input', () => {
      const value = search.value.trim().toLowerCase();
      document.querySelectorAll('[data-gallery-item]').forEach(item => {
        const text = item.dataset.galleryItem.toLowerCase();
        item.style.display = text.includes(value) ? '' : 'none';
      });
    });
  }
}

function initContactForm() {
  const form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent('Website enquiry - Directsell Buildcon');
      const body = encodeURIComponent(`Name: ${data.get('name')}
Email: ${data.get('email')}
Phone: ${data.get('phone')}

Message:
${data.get('message')}`);
      window.location.href = `mailto:info@directsell.co.in?subject=${subject}&body=${body}`;
    });
  }
}

async function initSite() {
  await loadPartials();
  setActiveNavLink();
  initMenu();
  initSlider();
  initGallerySearch();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', initSite);
