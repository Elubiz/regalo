const photosCouple = [
  {src:"img/halloween_1.jpg",name:"Halloween 1"},
  {src:"img/halloween_2.jpg",name:"Halloween 2"},
  {src:"img/cumple_juanca.jpg",name:"Cumple JuanCa"},
  {src:"img/1000092913.jpg",name:"1000092913.jpg"},{src:"img/1000092914.jpg",name:"1000092914.jpg"},{src:"img/1000092936.jpg",name:"1000092936.jpg"},{src:"img/1000092941.jpg",name:"1000092941.jpg"},{src:"img/1000092942.jpg",name:"1000092942.jpg"},{src:"img/1000092943.jpg",name:"1000092943.jpg"},{src:"img/1000092945.jpg",name:"1000092945.jpg"},{src:"img/1000092946.jpg",name:"1000092946.jpg"},{src:"img/1000092947.jpg",name:"1000092947.jpg"},{src:"img/1000092948.jpg",name:"1000092948.jpg"}
];
const photosElla = [
  {src:"img/cabello_liso.jpg",name:"Cabello liso"},
  {src:"img/flores_mujer.jpg",name:"Flores día de la mujer"},
  {src:"img/1000092922.jpg",name:"Selfie espejo"},
  {src:"img/1000092926.jpg",name:"Dibujo del gato"},
  {src:"img/1000092927.jpg",name:"Daniela bebé"},
  {src:"img/1000092916.jpg",name:"1000092916.jpg"},{src:"img/1000092918.jpg",name:"1000092918.jpg"},{src:"img/1000092920.jpg",name:"1000092920.jpg"},{src:"img/1000092933.jpg",name:"1000092933.jpg"},{src:"img/1000092934.jpg",name:"1000092934.jpg"},{src:"img/1000092940.jpg",name:"1000092940.jpg"},{src:"img/1000092944.jpg",name:"1000092944.jpg"},{src:"img/1000092949.jpg",name:"1000092949.jpg"},{src:"img/1000092950.jpg",name:"1000092950.jpg"}
];
const photosGatos = [{src:"img/1000092915.jpg",name:"1000092915.jpg"},{src:"img/1000092919.jpg",name:"1000092919.jpg"},{src:"img/1000092925.jpg",name:"1000092925.jpg"}];
const photosSalidas = [{src:"img/1000092928.jpg",name:"1000092928.jpg"},{src:"img/1000092929.jpg",name:"1000092929.jpg"},{src:"img/1000092921.jpg",name:"1000092921.jpg"},{src:"img/1000092931.jpg",name:"1000092931.jpg"}];
const photosEspeciales = [
  {src:"img/carta_valentin.jpg",name:"Carta San Valentín"},
  {src:"img/regalos.jpg",name:"Regalos"},
  {src:"img/1000092917.jpg",name:"Dexter"}
];
const photosCialy = [
  {src:"img/cialy_1.jpg",name:"Gala 1"},
  {src:"img/cialy_2.jpg",name:"Gala 2"},
  {src:"img/cialy_3.jpg",name:"Gala 3"}
];

// Llenar álbumes
function fillAlbum(albumId, photos, countId) {
  const grid = document.getElementById(albumId);
  if (!grid) return;
  photos.forEach((p,i) => {
    const img = document.createElement('img');
    img.src = p.src;
    img.className = 'album-thumb';
    img.alt = '';
    img.onclick = () => openLightbox(photos.map(x=>x.src), i);
    grid.appendChild(img);
  });
  document.getElementById(countId).textContent = photos.length + ' fotos';
}

fillAlbum('album-juntos', photosCouple, 'count-juntos');
fillAlbum('album-ella', photosElla, 'count-ella');
fillAlbum('album-chess', photosGatos, 'count-chess');
fillAlbum('album-momentos', photosEspeciales, 'count-momentos');
fillAlbum('album-cialy', photosCialy, 'count-cialy');

// Llenar salidas con fotos reales
const salidasData = [
  {foto: photosSalidas[0].src, nombre: 'Aquel Ramen', desc: 'Nuestra cita favorita, donde los sabores se mezclan con risas y cocktails 🍜'},
  {foto: photosSalidas[1].src, nombre: 'Cena Especial', desc: 'Compartir el mismo plato, la misma mirada y el mismo amor 🥢'},
  {foto: photosSalidas[2].src, nombre: 'Vuelo compartido', desc: 'El cielo se ve más azul cuando estamos juntos sobre las nubes ✈️'},
  {foto: photosSalidas[3].src, nombre: 'Ciudad de noche', desc: 'Ibagué bajo las estrellas, siendo cómplice de nuestras historias 🌙'},
  {foto: "img/cialy_1.jpg", nombre: 'Gala de 15', desc: 'Una noche de baile y elegancia que guardaremos por siempre 🎉'},
  {foto: "img/halloween_1.jpg", nombre: 'Nuestro Halloween', desc: 'De trampa o trato a un hogar cálido con tus padres 🎃'},
  {foto: "img/bar_papa.jpg", nombre: 'Noche de Padres', desc: 'Finales de noviembre, mi primera salida a un bar con mi papá 🍻'},
  {foto: "img/cabello_liso.jpg", nombre: 'Belleza Radiante', desc: 'Inicios de diciembre, cuando tu cabello liso iluminó mis días ✨'},
  {foto: "img/viaje_abuela.jpg", nombre: 'Kilómetros Juntos', desc: 'El viaje a ver a mi abuela, nuestra primera gran aventura en ruta 🛣️'},
  {foto: "img/salado.jpg", nombre: 'Reunión en El Salado', desc: 'Madrugadas de risas familiares que no queríamos que terminaran 🏠'},
  {foto: "img/carta_valentin.jpg", nombre: 'San Valentín a distancia', desc: 'Cuatro días en Cartagena que se sintieron cortos con tu carta 💌'},
  {foto: "img/regalos.jpg", nombre: 'Mar de Regalos', desc: '3 de marzo, el día que me hiciste sentir el más afortunado 🎁'},
  {foto: "img/flores_mujer.jpg", nombre: 'Flores para Ti', desc: '8 de marzo, un pequeño detalle para la mujer que lo es todo 💐'},
  {foto: "img/cumple_juanca.jpg", nombre: 'Tarde de Cumple', desc: '19 de abril, celebrando la vida de JuanCa siempre a tu lado 🎂'}
];

const sGrid = document.getElementById('salidas-grid');
salidasData.forEach(s => {
  const card = document.createElement('div');
  card.className = 'salida-card';
  if (s.foto) {
    card.innerHTML = `<img src="${s.foto}" class="salida-img" alt="${s.nombre}">
      <div class="salida-info"><div class="salida-nombre">${s.nombre}</div><div class="salida-desc">${s.desc}</div></div>`;
  } else {
    card.innerHTML = `<div class="salida-img-placeholder">📍</div>
      <div class="salida-info"><div class="salida-nombre">${s.nombre}</div><div class="salida-desc">${s.desc}</div></div>`;
  }
  sGrid.appendChild(card);
});

// Contador
function updateCounter() {
  const start = new Date('2025-04-28T00:00:00');
  const now = new Date();
  const diff = now - start;
  if (diff < 0) return;
  const days = Math.floor(diff / 86400000);
  const hrs = Math.floor((diff % 86400000) / 3600000);
  const min = Math.floor((diff % 3600000) / 60000);
  const seg = Math.floor((diff % 60000) / 1000);
  document.getElementById('cnt-days').textContent = days;
  document.getElementById('cnt-hrs').textContent = hrs;
  document.getElementById('cnt-min').textContent = min;
  document.getElementById('cnt-seg').textContent = seg;
}
updateCounter();
setInterval(updateCounter, 1000);

// Nav
function showSection(id, btn) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
  document.querySelector('nav').scrollIntoView({behavior:'smooth'});
}

// Álbumes
function toggleAlbum(gridId, header) {
  const grid = document.getElementById(gridId);
  grid.classList.toggle('open');
  header.classList.toggle('open');
}

// Lightbox
let lbPhotos = [], lbIdx = 0;
function openLightbox(photos, idx) {
  lbPhotos = photos; lbIdx = idx;
  document.getElementById('lb-img').src = photos[idx];
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
}
function lbNav(dir) {
  lbIdx = (lbIdx + dir + lbPhotos.length) % lbPhotos.length;
  document.getElementById('lb-img').src = lbPhotos[lbIdx];
}
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});