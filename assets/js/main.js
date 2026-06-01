
const $=(s,root=document)=>root.querySelector(s);const $$=(s,root=document)=>[...root.querySelectorAll(s)];
$('#menuToggle')?.addEventListener('click',()=>$('#mainMenu')?.classList.toggle('open'));
const current=location.pathname.split('/').pop()||'index.html';$$('#mainMenu a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
// Contact form becomes a mailto draft so the website stays fully static.
$('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;const subject=encodeURIComponent('Website enquiry from '+f.name.value);const body=encodeURIComponent(`Name: ${f.name.value}\nEmail: ${f.email.value}\nPhone: ${f.phone.value}\n\nMessage:\n${f.message.value}`);location.href=`mailto:info@directsell.co.in?subject=${subject}&body=${body}`});
// Gallery filter/search
$('#gallerySearch')?.addEventListener('input',e=>{const q=e.target.value.toLowerCase();$$('[data-gallery-item]').forEach(el=>{el.style.display=el.dataset.galleryItem.toLowerCase().includes(q)?'block':'none'})});
// Simple slider
const slider=$('.slides');if(slider){const slides=$$('.slide',slider);const controls=$('.slider-controls');let index=0;function go(i){index=i%slides.length;slider.style.transform=`translateX(-${index*100}%)`;$$('button',controls).forEach((b,n)=>b.classList.toggle('active',n===index));}slides.forEach((_,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Show slide '+(i+1));b.addEventListener('click',()=>go(i));controls.appendChild(b)});go(0);setInterval(()=>go(index+1),4500)}
