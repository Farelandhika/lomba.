// Data tempat (dummy)
const PLACES = [
  {id:1,name:'Wisata Alam Grape',
    category:'Alam',
    city:'Madiun',
    rating:4.3,
    image:'grape.jpg',
    jam: "07.00-17.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, taman bermain anak, musholla, MCK, aula pertemuan.',
    tags:['Wisata','Alam','Nyaman'],
    link:'https://maps.app.goo.gl/KPpq23VDGzt1aVMn9'
  },

  {id:2,name:'Taman Bantaran Madiun',
    category:'Alam',
    city:'Madiun',
    rating:4.4,
    image:'Bantaran.jpg',
    jam:"BUKA 24 JAM",
    desc:'Ingin mencari tempat wisata yang buka 24 jam di Kota Madiun? Taman Bantaran Madiun bisa menjadi pilihan terbaik untuk bersantai bersama keluarga. Taman Bantaran Madiun, Wisata Kota 24 Jam dengan Fasilitas Lengkap dan Suasana Asri, cocok untuk menikmati senja pada sore hari.',
    tags:['Wisata','Nyaman','Estestik'],
    link:'https://maps.app.goo.gl/mvCd4Kru7ZPLWvNS7'
  },
    

  {id:3,name:'Air Terjun Kertoembo',
    category:'Alam',
    city:'Madiun',
    rating:4.5,
    image:'nongko ijo madiun.jpg',
    jam:"09.00-15.00 BUKA SETIAP HARI",
    desc:'Tempat wisata ini menawarkan suasana alam yang sejuk dengan pohon pinus yang menjulang tinggi, serta berbagai spot foto menarik seperti rumah pohon dan ayunan.',
    tags:['keluarga','luar-ruangan'],
    link:'https://maps.app.goo.gl/hjpTq6RPu78nKvrA6'
  },

  {id:4,name:'Waduk Bening Widas',
    category:'Alam',
    city:'Madiun',
    rating:4.4,
    image:'Waduk bening widas.jpg',
    jam:"24 JAM",
    desc:'fasilitas seperti tempat pemancingan, tempat wisata kuliner, taman bermain untuk anak, hingga fasilitas penginapan yang bisa Anda sewa jika ingin menikmati pemandangan malam Waduk Bening Widas ini.',
    tags:['Alam','Waduk'],
    link:'https://maps.app.goo.gl/8FMktYGAiZrJ24mW6'
},

  {id:5,name:'Pahlawan Street Center',
    category:'Rekreasi',
    city:'Madiun',
    rating:4.7,
    image:'jalan pahlawan.jpg',
    jam:"24 JAM",
    desc:'Tempat ini menghadirkan suasana terbuka dengan area pedestrian yang lebar, pepohonan rindang, serta penataan yang rapi dan estetik, membuat pengunjung betah berjalan kaki menikmati suasana kota, Tak hanya berfungsi sebagai ruang publik, PSC juga menjadi destinasi wisata yang menampilkan berbagai miniatur ikon dunia.',
    tags:['estestik','nyaman'],
    link:'https://maps.app.goo.gl/9vHKpFFHb5DF4we16'
  },

  {id:6,name:'Taman gulun',
    category:'Rekreasi',
    city:'Madiun',
    rating:4.5,
    image:'taman gulun.jpg',
    jam:"24 JAM",
    desc:'Memiliki fasilitas olahraga, taman bermain anak, tempat jajanan dan kuliner.',
    tags:['Olahraga','Kuliner'],
    link:'https://maps.app.goo.gl/5MSrzCSCcqjJrGnH8'
  },

  {id:7,name:'Alun Alun Madiun',
    category:'Rekreasi',
    city:'Madiun',
    rating:4.6,
    image:'Alun-Alun-Madiun.jpg',
    jam:"24 JAM",
    desc:'Memiliki fasilitas olahraga, spot foto yang menarik dan menyedikan jajanan dan kuliner yang khas.',
    tags:['Wisata','Asixx'],
    link:'https://maps.app.goo.gl/m72PGC6juABogJSYA'
  },
  
  {id:8,name:'Air Terjun Srambang',
    category:'Alam',
    city:'Ngawi',
    rating:4.5,
    image:'srambang.jpg',
    jam:"08.00-15.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, taman bermain anak, musholla, air terjun, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Alam','Nyaman'],
    link:'https://maps.app.goo.gl/2x2FSyy9cadfrj657'
  },

  {id:9,name:'Wisata Kebun Teh Jamus',
    category:'Alam',
    city:'Ngawi',
    rating:4.5,
    image:'kebun-teh-jamus-ngawi-jawa-timur.jpg',
    jam:"08.00-17.00 BUKA SETIAP HARI",
    desc:'Tidak hanya hadir sebagai wisata kebun teh, perkebunan satu ini punya banyak fasilitas dan wahana, contohnya: Berbagai spot foto alam, Arena offroad bagi kamu pecinta medan berat, Flying fox, Arena camping, Kolam renang dan cafe, Musala dan toilet umum, Lahan parkir dan lain lain.',
    tags:['Wisata','Alam','Nyaman'],
    link:'https://maps.app.goo.gl/dvJStjRZVdfstV1L7'
  },

  {id:10,name:'Wisata Sumber Nogo',
    category:'Alam',
    city:'Ngawi',
    rating:4.5,
    image:'sumber nogo.jpg',
    jam:"08.00-16.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, tersedianya pohon pinus yang rindang, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Alam','Nyaman'],
    link:'https://maps.app.goo.gl/SYJGTKSQUygpJXwT7'
  },

  {id:11,name:'Wisata Sumber koso',
    category:'Alam',
    city:'Ngawi',
    rating:4.6,
    image:'sumber koso.jpg',
    jam:"08.00-15.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, suasana yang masih asri, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Alam','Nyaman'],
    link:'https://maps.app.goo.gl/T2UJUtFrjwvhSvn5A'
  },

  {id:12,name:'Wisata Sengon Hills',
    category:'Rekreasi',
    city:'Ngawi',
    rating:4.5,
    image:'sengon.jpg',
    jam:"08.00-17.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, suasana yang asri, tempat camp, kolam renang dan tempat bermain untuk anak anak, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Rekreasi','Nyaman'],
    link:'https://maps.app.goo.gl/w4mxipc5rNE4Asx76'
  },

  {id:13,name:'Air Terjun Pengantin',
    category:'Alam',
    city:'Ngawi',
    rating:4.3,
    image:'atp.jpg',
    jam:"08.00-15.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, air terjun yang besih, suasana asri, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Alam','Nyaman'],
    link:'https://maps.app.goo.gl/J3ymzazScta7xRCz5'
  },

  {id:14,name:'Benteng Van Den Bosch',
    category:'Tempat Bersejarah',
    city:'Ngawi',
    rating:4.5,
    image:'Benteng-Van-Den-Bosch.jpg',
    jam:"08.00-17.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, tempat bermain, galeri sejarah indonesia, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','sejarah'],
    link:'https://maps.app.goo.gl/nuPjNHt3SPyfUgN27'
  },

  {id:15,name:'Monumen Kresek',
    category:'Tempat Bersejarah',
    city:'Madiun',
    rating:4.6,
    image:'monumen.jpg',
    jam:"06.00-21.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, galeri sejarah PKI, dan tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Sejarah','Nyaman'],
    link:'https://maps.app.goo.gl/NS941651iNvheMbdA'
  },

  {id:16,name:'Monumen Soerjo',
    category:'Tempat Bersejarah',
    city:'Ngawi',
    rating:4.4,
    image:'suryo.jpg',
    jam:"07.00-21.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, adanya galeri sejarah indonesia, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Sejarah','Asik'],
    link:'https://maps.app.goo.gl/biAeA6iqFkAQHUkM8'
  },

  {id:17,name:'Alun Alun Ngawi',
    category:'Rekreasi',
    city:'Ngawi',
    rating:4.4,
    image:'ngawi.jpg',
    jam:"24 JAM BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, tersedianya toilet, fasilitas untuk olahraga, taman bermain, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','Alun alun','Nyaman'],
    link:'https://maps.app.goo.gl/xBrRt7ddGQKFJ3eQ6'
  },

  {id:18,name:'Taman Candi',
    category:'Rekreasi',
    city:'Ngawi',
    rating:4.3,
    image:'taman candi.jpg',
    jam:"06.00-21.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, suasana asri, tempat bersih, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','ngawi','Nyaman'],
    link:'https://maps.app.goo.gl/DNEVEunqxGgKHN1V9'
  },

  {id:19,name:'Wisata Tawun',
    category:'Rekreasi',
    city:'Ngawi',
    rating:4.2,
    image:'tawun.jpg',
    jam:"07.00-17.00 BUKA SETIAP HARI",
    desc:'Fasilitas : area parkir, spot foto yang menarik, suasana asri, tempat bersih, tersedia aneka kuliner dan jajanan yang khas, adanya kolam renang untuk anak anak dan dewasa.',
    tags:['Wisata','ngawi','Nyaman'],
    link:'https://maps.app.goo.gl/r2SNfZyoxbsQafay7'
  },

  {id:20,name:'Museum Trinil',
    category:'Tempat Bersejarah',
    city:'Ngawi',
    rating:4.4,
    image:'trinil.jpg',
    jam:"08.00-16.00 TUTUP HARI SENIN",
    desc:'Fasilitas : area parkir, spot foto yang menarik, menyimpan galeri sejarah jaman purba, tempat bersih, tersedia aneka kuliner dan jajanan yang khas.',
    tags:['Wisata','sejarah','Nyaman'],
    link:'https://maps.app.goo.gl/NCcE67zkn3faNRQbA'
  }
];

  let state = {
  q: "",
  category: null,
  city: null,
  sort: "rating",
  showFav: false,
};

const els = {
  search: document.getElementById("search"),
  placeGrid: document.getElementById("placeGrid"),
  resultCount: document.getElementById("resultCount"),
  categoryList: document.getElementById("categoryList"),
  cityList: document.getElementById("cityList"),
  sort: document.getElementById("sort"),
  empty: document.getElementById("empty"),
  favToggle: document.getElementById("favToggle"),
  activeFilters: document.getElementById("activeFilters"),
  modalBackdrop: document.getElementById("modalBackdrop"),
  modalTitle: document.getElementById("modalTitle"),
  modalImage: document.getElementById("modalImage"),
  modalMeta: document.getElementById("modalMeta"),
  modalJam: document.getElementById("modalJam"),
  modalDesc: document.getElementById("modalDesc"),
  modalTags: document.getElementById("modalTags"),
  modalMapBtn: document.getElementById("modalMapBtn"), // 🔹 TAMBAHKAN INI
  closeModal: document.getElementById("closeModal"),
  clearFilters: document.getElementById("clearFilters"),
};

const FAVORITES_KEY = "rt_favorites_v1";

function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
}

function saveFavorites(arr) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(arr));
}

function renderFilters() {
  const cats = [...new Set(PLACES.map(p => p.category))];
  const cities = [...new Set(PLACES.map(p => p.city))];

  els.categoryList.innerHTML = "";
  els.cityList.innerHTML = "";

  cats.forEach(c => {
    const node = document.createElement("div");
    node.className = "chip";
    node.textContent = c;
    if (state.category === c) node.classList.add("active");
    node.onclick = () => {
      state.category = state.category === c ? null : c;
      render();
    };
    els.categoryList.appendChild(node);
  });

  cities.forEach(c => {
    const node = document.createElement("div");
    node.className = "chip";
    node.textContent = c;
    if (state.city === c) node.classList.add("active");
    node.onclick = () => {
      state.city = state.city === c ? null : c;
      render();
    };
    els.cityList.appendChild(node);
  });
}
function render() {
  let list = PLACES.filter(p => {
    if (state.q && !p.name.toLowerCase().includes(state.q.toLowerCase())) return false;
    if (state.category && p.category !== state.category) return false;
    if (state.city && p.city !== state.city) return false;
    return true;
  });

  // Jika mode favorit aktif
  if (state.showFav) {
    const favs = getFavorites();
    list = list.filter(p => favs.includes(p.id));
  }

  // Sorting
  if (state.sort === "rating") list.sort((a,b)=>b.rating-a.rating);
  if (state.sort === "rating_asc") list.sort((a,b)=>a.rating-b.rating);
  if (state.sort === "name") list.sort((a,b)=>a.name.localeCompare(b.name));

  // Update UI
  els.resultCount.textContent = `Menampilkan ${list.length} tempat`;
  els.placeGrid.innerHTML = "";
  els.empty.style.display = list.length ? "none" : "block";

  const favs = getFavorites();

  list.forEach(p => {
    const isFav = favs.includes(p.id);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="thumb" src="${p.image}">
      <button class="fav" data-id="${p.id}">${isFav ? "❤️" : "🤍"}</button>
      <div>
        <h3>${p.name}</h3>
        <div class="meta">★ ${p.rating} • ${p.category} • ${p.city}</div>
      </div>
    `;

    // Klik kartu (bukan tombol favorit)
    card.addEventListener("click", e => {
      if (e.target.classList.contains("fav")) return;
      openModal(p);
    });

    // Klik tombol favorit
    card.querySelector(".fav").onclick = () => toggleFavorite(p.id);

    els.placeGrid.appendChild(card);
  });

  // Update badge filter aktif
  const active = [];
  if (state.category) active.push(state.category);
  if (state.city) active.push(state.city);
  if (state.showFav) active.push("Favorit");
  els.activeFilters.textContent = active.length ? active.join(" • ") : "Tidak ada filter aktif";
}
function toggleFavorite(id) {
  let favs = getFavorites();

  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
  } else {
    favs.push(id);
  }

  saveFavorites(favs);
  render();
}
els.favToggle.onclick = () => {
  state.showFav = !state.showFav;
  els.favToggle.classList.toggle("active", state.showFav);
  els.favToggle.textContent = state.showFav ? "Tampilkan Semua" : "Lihat Favorit";
  render();
};
    


function openModal(p) {
  els.modalTitle.textContent = p.name;
  els.modalImage.src = p.image;
  els.modalMeta.textContent = `${p.category} • ${p.city} • ★ ${p.rating}`;
  els.modalJam.textContent = p.jam ? `Jam buka: ${p.jam}` : "Jam buka: -"; //jam buka
  els.modalDesc.textContent = p.desc;
  els.modalTags.textContent = "#" + p.tags.join(" #");

  // 🔹 Cek apakah p.link ada dan bukan null/undefined/string kosong
  if (p.link && typeof p.link === "string" && p.link.trim() !== "") {
    els.modalMapBtn.style.display = "block";
    els.modalMapBtn.onclick = () => {
      window.open(p.link, "_blank", "noopener,noreferrer");
    };
  } else {
    els.modalMapBtn.style.display = "none";
  }

  els.modalBackdrop.style.display = "flex";
}

els.closeModal.onclick = () => (els.modalBackdrop.style.display = "none");

els.search.addEventListener("input", e => {
  state.q = e.target.value;
  render();
});

els.sort.onchange = e => {
  state.sort = e.target.value;
  render();
};

els.clearFilters.onclick = () => {
  state = { q: "", category: null, city: null, sort: "rating" };
  els.search.value = "";
  render();
};

renderFilters();
render();

