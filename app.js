const data = [
  // Días 1-10: Para enamorarla (coqueteo y primeros sentimientos)
  { phrase: "Día 1: Me encanta descubrir todo lo que te hace única.", video: "https://youtu.be/wmox3Sxn8BU?si=FiWwt4r7_O9HRRkt" },
  { phrase: "Día 2: No sé si lo notas, pero contigo todo se vuelve especial.", video: "https://www.youtube.com/embed/M0K9YbXyCNc" },
  { phrase: "Día 3: Tu sonrisa tiene algo que me inspira todos los días.", video: "https://www.youtube.com/embed/pa14VNsdSYM" },
  { phrase: "Día 4: Eres como un mar tranquilo que quiero explorar.", video: "https://www.youtube.com/embed/Dz_0LyoaF1c" },
  { phrase: "Día 5: Me gustaría ser esa razón que te haga sonreír sin pensarlo.", video: "https://www.youtube.com/embed/Y5YQwQLJULw" },
  { phrase: "Día 6: Contigo, los días pasan volando.", video: "https://www.youtube.com/embed/EiY7F0ohEAA" },
  { phrase: "Día 7: A veces me descubro pensando en ti sin razón.", video: "https://www.youtube.com/embed/lilZhuuYmvI" },
  { phrase: "Día 8: No hay distancia cuando pienso en ti.", video: "https://www.youtube.com/embed/NGz_Bd7lM4o" },
  { phrase: "Día 9: Cada día a tu lado es una nueva aventura.", video: "https://www.youtube.com/embed/V9kPntpNNDw" },
  { phrase: "Día 10: Si te veo feliz, me siento afortunado.", video: "https://www.youtube.com/embed/wqrmvA20qN0" },

  // Días 11-20: Nos estamos enamorando (crece el vínculo)
  { phrase: "Día 11: Hay algo mágico en cada momento a tu lado.", video: "https://www.youtube.com/embed/gocJpIwr7Co" },
  { phrase: "Día 12: No necesito mucho, solo verte sonreír.", video: "https://www.youtube.com/embed/YL2i4w6ua5Y" },
  { phrase: "Día 13: Hay algo en ti que me hace querer quedarme para siempre.", video: "https://www.youtube.com/embed/vGJTaP6anOU" },
  { phrase: "Día 14: Eres perfectamente imperfecta para mí.", video: "https://www.youtube.com/embed/450p7goxZqg" },
  { phrase: "Día 15: Quisiera ser quien te dé calma y abrigo.", video: "https://www.youtube.com/embed/wslLDwRjYhQ" },
  { phrase: "Día 16: Me pierdo en tus ojos cada vez que te miro.", video: "https://www.youtube.com/embed/vKpfrbK4g_A" },
  { phrase: "Día 17: Hay secretos que solo se entienden con el corazón.", video: "https://www.youtube.com/embed/j3nTdQkecq0" },
  { phrase: "Día 18: Siento que juntos podríamos bailar por horas.", video: "https://www.youtube.com/embed/_JPfZ-mTWrA" },
  { phrase: "Día 19: Poco a poco, te vas volviendo mi lugar favorito.", video: "https://www.youtube.com/embed/MKkxazCN3Zk" },
  { phrase: "Día 20: A veces me atrevo a imaginar un futuro contigo.", video: "https://www.youtube.com/embed/HkR_1BzjAZQ" },

  // Días 21-31: Demostrar amor y confesión
  { phrase: "Día 21: Ojalá pueda decirte todo lo que siento.", video: "https://www.youtube.com/embed/F1E9n5ZqdCw" },
  { phrase: "Día 22: Gracias por hacer que todo valga la pena.", video: "https://www.youtube.com/embed/XHQePPYyxMo" },
  { phrase: "Día 23: No hay palabras suficientes para expresar lo que siento por ti.", video: "https://www.youtube.com/embed/cL_Vg6EcNsM" },
  { phrase: "Día 24: Estar contigo es mi mejor momento del día.", video: "https://www.youtube.com/embed/wvBNB7jCWJs" },
  { phrase: "Día 25: Eres, sin duda, mi persona favorita.", video: "https://www.youtube.com/embed/E2wM3w1Ll2g" },
  { phrase: "Día 26: Me doy cuenta que te necesito más de lo que imaginaba.", video: "https://www.youtube.com/embed/cqkxr_4JwXY" },
  { phrase: "Día 27: Me enamoro de ti un poco más cada día.", video: "https://www.youtube.com/embed/vGJTaP6anOU" },
  { phrase: "Día 28: Todo lo que soy, quiero dártelo a ti.", video: "https://www.youtube.com/embed/450p7goxZqg" },
  { phrase: "Día 29: Si hay un cuento que quiero vivir, es el nuestro.", video: "https://www.youtube.com/embed/XLwnQ_WyLWQ" },
  { phrase: "Día 30: Ya no quiero imaginarlo, quiero vivirlo contigo.", video: "https://www.youtube.com/embed/F1E9n5ZqdCw" },
  { phrase: "Día 31: Hoy solo quiero confesarte que te quiero, de verdad y sin miedo. Gracias por dejarme estar en tu vida. 💛", video: "https://www.youtube.com/embed/LS3mCwT3wBo" }
];

// Animación de corazones para el día 31
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

const calendar = document.getElementById('calendar');
const mensajeEspera = document.getElementById('mensaje-espera');
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const ADVENT_MONTH = month; // Puedes fijar a otro mes si quieres

function createCard(idx, unlocked) {
  const info = data[idx];
  const card = document.createElement('div');
  card.className = 'card' + (unlocked ? '' : ' locked');
  card.innerHTML = `
    <div class="number">${idx + 1}</div>
    <div class="phrase" style="display: none;">${info.phrase}</div>
    <div class="video"></div>
  `;
  if (unlocked) {
    card.addEventListener('click', function() {
      if (!card.classList.contains('open')) {
        card.classList.add('open');
        card.querySelector('.phrase').style.display = 'block';
        card.querySelector('.video').innerHTML = `
          <iframe width="100%" height="160" src="${info.video}" 
            frameborder="0" allowfullscreen></iframe>
        `;
        if (idx === 30) throwHearts();
      }
    });
  }
  return card;
}

// Muestra solo las casillas correspondientes al día actual o anteriores
let cardsCreadas = 0;
for (let i = 0; i < data.length; i++) {
  if (day >= (i + 1) && month === ADVENT_MONTH) {
    calendar.appendChild(createCard(i, true));
    cardsCreadas++;
  }
}

// Si faltan días, muestra mensaje de "vuelve mañana"
if (cardsCreadas < data.length) {
  mensajeEspera.style.display = 'block';
}
