const mapList = document.getElementById("mapList");
const mapFrame = document.getElementById("mapFrame");

maps.forEach(m => {
  const card = document.createElement("div");
  card.className = "map-card";

  // adiciona classe full-width quando definido no maps.js
  if (m.full) {
    card.classList.add("full-width");
  }

  card.innerHTML = `
    <p class="map-card-title">${m.icon} ${m.name}</p>
    <small>Toque para abrir o mapa abaixo</small>
  `;

  card.addEventListener("click", () => {
    mapFrame.src = m.embed;
    mapFrame.scrollIntoView({ behavior: "smooth" });
  });

  mapList.appendChild(card);
});

// mantém o comportamento original de abrir "Hotéis" inicialmente
const initial = maps.find(m => m.name === "Hotéis");
if (initial) mapFrame.src = initial.embed;
