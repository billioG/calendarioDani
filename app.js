// ====== CONFIGURA AQUÍ TUS DÍAS (ID o LINK DE GOOGLE DRIVE) ======
// Puedes poner solo el ID del archivo o cualquier enlace de Drive; el código extrae el ID.
const playlist = [
  { phrase: "Día 1: Me encanta descubrir todo lo que te hace única.", drive: "https://drive.google.com/file/d/1EO0oU_lWMDeOy5S5u0NMQEdW5Yyx5HlJ/view?usp=drive_link" },
  { phrase: "Día 2: Si el universo me puso en tu camino, fue por una razón.", drive: "https://drive.google.com/file/d/1xnV31_IQiOjlGrkNAHsw5V4tnjHpFwpj/view?usp=drive_link" },
  { phrase: "Día 3: Cada vez que te miro, encuentro un nuevo motivo para sonreír.", drive: "https://drive.google.com/file/d/1cAuKhwSgOZTxfPPm8m6MzFc_9_lmsq5V/view?usp=drive_link" },
  { phrase: "Día 4: Tu sonrisa tiene algo que me inspira todos los días.", drive: "https://drive.google.com/file/d/1v1qe1tuoQ9WIpodcGd1ob9i9udauloDE/view?usp=sharing" },
  { phrase: "Día 5: Busco a alguien tan especial como tú.", drive: "https://drive.google.com/file/d/1b-2QW4yqExt6niHAk4z0YS0cJIiCyxA9/view?usp=sharing" },
  { phrase: "Día 6: Tus ojos lindos me enamoran cada día.", drive: "https://drive.google.com/file/d/1map-oPwAtNlPrT8gUaOmoqZwa9JU0nkK/view?usp=drive_link" },
  { phrase: "Día 7: Eres perfecta tal como eres.", drive: "https://drive.google.com/file/d/1ZgHvYlPfv_Jl2Y7APm-oOWwvpSHVgJu_/view?usp=drive_link" },
  { phrase: "Día 8: Energía, deseo de estar juntos, alegría sencilla.", drive: "https://drive.google.com/file/d/1N8iI0OjmHKQ55xKZdIlAIEcbQ4IMHqlB/view?usp=drive_link" },
  { phrase: "Día 9: Todo lo bueno eres tú.", drive: "https://drive.google.com/file/d/1Mzwwpb4tECSVhhdIp2bz7d7U9tEMH9vD/view?usp=drive_link" },
  { phrase: "Día 10: Quiero pasar mis domingos a tu lado.", drive: "https://drive.google.com/file/d/1aT_4QpetS6Xn5k9r5TIVLNbErSLlyvJb/view?usp=drive_link" },
  { phrase: "Día 11: Eres esa curita que llego en el momento justo.", drive: "https://drive.google.com/file/d/1pTowTbdl9DR0NAqEonFBDytw0_uKPWRb/view?usp=drive_link" },

  { phrase: "Día 12: Eres ese rayo de luz que alumbra mis días.", drive: "https://drive.google.com/file/d/1D2OgeHYS2NYvDLea3d46kRXR_B8XIHj_/view?usp=drive_link" },
  { phrase: "Día 13: Quiero pintar una linda sonrisa en tu rostro cada día.", drive: "https://drive.google.com/file/d/1gG6DYpiMz1SYc5-rkMXDKOppNuVGEjet/view?usp=drive_link" },
  
  // ...agrega todos tus días con su 'drive' (ID o link)
];

// ====== UTILIDADES GOOGLE DRIVE ======
function getDriveId(input) {
  if (!input) return null;
  // formatos soportados:
  // https://drive.google.com/file/d/FILE_ID/view
  // https://drive.google.com/open?id=FILE_ID
  // FILE_ID directo
  const m1 = input.match(/\/d\/([A-Za-z0-9_-]+)/);
  if (m1) return m1[1];
  const m2 = input.match(/[?&]id=([A-Za-z0-9_-]+)/);
  if (m2) return m2[1];
  // si ya parece un id
  if (/^[A-Za-z0-9_-]+$/.test(input)) return input;
  return null;
}

function driveEmbedUrl(id) {
  return `https://drive.google.com/file/d/${id}/preview`;
}
function driveViewUrl(id) {
  return `https://drive.google.com/file/d/${id}/view`;
}
function driveThumbUrl(id) {
  // Miniatura de alta resolución (si está disponible para el tipo de archivo)
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}

// ====== ANIMACIÓN CORAZONES DÍA 31 ======
function throwHearts() {
  const container = document.getElementById('hearts-container');
  if (!container) return;
  for(let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.bottom = '-40px';
    heart.style.animationDelay = (Math.random() * 0.7) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

// ====== RENDER DEL DÍA ======
function mostrarDia(idx) {
  const info = playlist[idx];
  const fileId = getDriveId(info.drive);

  // HTML base (frase + contenedor de video + fallback)
  document.getElementById('dia-container').innerHTML = `
    <div class="frase-dia">${info.phrase}</div>
    <div class="video-dia">
      ${fileId ? `
        <iframe
          id="love-iframe"
          src="${driveEmbedUrl(fileId)}"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      ` : `
        <div class="video-fallback" id="iframe-fallback" style="display:flex;">
          <img src="https://i.imgur.com/fS5Zqom.png" alt="Frase de amor"/>
          <div>El video no está configurado. ¡Pero igual quiero que leas la frase de hoy! 💛</div>
        </div>
      `}
      <div class="video-fallback" id="iframe-fallback" style="display:none;">
        <img src="${fileId ? driveThumbUrl(fileId) : 'https://i.imgur.com/fS5Zqom.png'}" alt="Vista previa"/>
        <div style="margin-bottom:0.8rem;">No se pudo mostrar el video aquí.<br/>Ábrelo directamente en Google Drive.</div>
        ${fileId ? `<a class="btn-open-drive" href="${driveViewUrl(fileId)}" target="_blank">Abrir en Drive</a>` : ''}
      </div>
    </div>
  `;

  // Detección de error de carga (algunos navegadores no disparan onerror para iframes de Drive)
  setTimeout(() => {
    const iframe = document.getElementById('love-iframe');
    const fallback = document.getElementById('iframe-fallback');
    if (iframe) {
      // Si el iframe no ocupa espacio (posible bloqueo/permisos), mostramos fallback
      const tooSmall = iframe.offsetHeight < 40 || iframe.offsetWidth < 40;
      if (tooSmall) {
        iframe.style.display = 'none';
        fallback.style.display = 'flex';
      }
    }
  }, 2000);

  if (idx === 30) throwHearts();

  // Actualizar estado de botones
  const botones = navDias.querySelectorAll('.btn-dia');
  botones.forEach((btn, i) => {
    if (i === idx) btn.classList.add('active');
    else btn.classList.remove('active');
  });
}

// ====== INICIALIZACIÓN Y NAVEGACIÓN ======
const container = document.getElementById('dia-container');
const mensajeEspera = document.getElementById('mensaje-espera');
const navDias = document.getElementById('nav-dias');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const ADVENT_MONTH = month; // puedes fijarlo a un mes concreto si quieres

let diaActual = Math.min(day, playlist.length);

function renderNavDias() {
  navDias.innerHTML = "";
  for (let i = 0; i < diaActual; i++) {
    const btn = document.createElement('button');
    btn.className = "btn-dia" + (i === diaActual - 1 ? " active" : "");
    btn.textContent = `Día ${i + 1}`;
    btn.onclick = () => mostrarDia(i);
    navDias.appendChild(btn);
  }
}

if (day >= 1 && day <= playlist.length && month === ADVENT_MONTH) {
  renderNavDias();
  mostrarDia(diaActual - 1);
  mensajeEspera.style.display = 'none';
} else {
  container.style.display = 'none';
  navDias.style.display = 'none';
  mensajeEspera.style.display = 'block';
}


