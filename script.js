// Data tempat (dummy)
const PLACES = [
   
    {id:1,name:'Wisata Alam Grape',category:'Alam',city:'Madiun',rating:4.3,image:'grape.jpg',desc:'Fasilitas : area parkir, taman bermain anak, musholla, MCK, aula pertemuan.',tags:['Wisata','Alam','Nyaman']},
    {id:2,name:'Taman Bantaran Madiun',category:'Alam',city:'Madiun',rating:4.4,image:'Bantaran.jpg',desc:'Ingin mencari tempat wisata yang buka 24 jam di Kota Madiun? Taman Bantaran Madiun bisa menjadi pilihan terbaik untuk bersantai bersama keluarga. Taman Bantaran Madiun, Wisata Kota 24 Jam dengan Fasilitas Lengkap dan Suasana Asri, cocok untuk menikmati senja pada sore hari.',tags:['padang','pedas','tradisional']},
    {id:3,name:'Air Terjun Kertoembo',category:'Alam',city:'Madiun',rating:4.5,image:'nongko ijo madiun.jpg',desc:'Tempat wisata ini menawarkan suasana alam yang sejuk dengan pohon pinus yang menjulang tinggi, serta berbagai spot foto menarik seperti rumah pohon dan ayunan.',tags:['keluarga','luar-ruangan']},
    {id:4,name:'Waduk Bening Widas',category:'Alam',city:'Madiun',rating:4.4,image:'Waduk bening widas.jpg',desc:'fasilitas seperti tempat pemancingan, tempat wisata kuliner, taman bermain untuk anak, hingga fasilitas penginapan yang bisa Anda sewa jika ingin menikmati pemandangan malam Waduk Bening Widas ini.',tags:['Alam','Waduk']},
    {id:5,name:'pahlawan street center',category:'Rekreasi',city:'Madiun',rating:4.7,image:'jalan pahlawan.jpg',desc:'Tempat ini menghadirkan suasana terbuka dengan area pedestrian yang lebar, pepohonan rindang, serta penataan yang rapi dan estetik, membuat pengunjung betah berjalan kaki menikmati suasana kota, Tak hanya berfungsi sebagai ruang publik, PSC juga menjadi destinasi wisata yang menampilkan berbagai miniatur ikon dunia.',tags:['bakso']},
    {id:6,name:'Taman gulun',category:'Rekreasi',city:'Madiun',rating:4.5,image:'taman gulun.jpg',desc:'Memiliki fasilitas olahraga, taman bermain anak, tempat jajanan dan kuliner.',tags:['Alam','Waduk']},
    {id:7,name:'Alun Alun Madiun',category:'Rekreasi',city:'Madiun',rating:4.6,image:'Alun-Alun-Madiun.jpg',desc:'Memiliki fasilitas olahraga, spot foto yang menarik dan menyedikan jajanan dan kuliner yang khas.',tags:['Alam','Waduk']},
    {id:8,name:'Air Terjun Srambang',category:'Alam',city:'Ngawi',rating:4.5,image:'srambang.jpg',desc:'Fasilitas : area parkir, taman bermain anak, musholla, air terjun, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Alam','Nyaman']},
    {id:9,name:'Wisata Kebun Teh Jamus',category:'Alam',city:'Ngawi',rating:4.5,image:'kebun-teh-jamus-ngawi-jawa-timur.jpg',desc:'Tidak hanya hadir sebagai wisata kebun teh, perkebunan satu ini punya banyak fasilitas dan wahana, contohnya: Berbagai spot foto alam, Arena offroad bagi kamu pecinta medan berat, Flying fox, Arena camping, Kolam renang dan cafe, Musala dan toilet umum, Lahan parkir dan lain lain.',tags:['Wisata','Alam','Nyaman']},
    {id:10,name:'Wisata Sumber Nogo',category:'Alam',city:'Ngawi',rating:4.5,image:'sumber nogo.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, tersedianya pohon pinus yang rindang, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Alam','Nyaman']},
    {id:11,name:'Wisata Sumber koso',category:'Alam',city:'Ngawi',rating:4.6,image:'sumber koso.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, suasana yang masih asri, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Alam','Nyaman']},
    {id:12,name:'Wisata Sengon Hills',category:'Rekreasi',city:'Ngawi',rating:4.6,image:'sengon.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, suasana yang asri, tempat camp, kolam renang dan tempat bermain untuk anak anak, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Rekreasi','Nyaman']},
    {id:13,name:'Air Terjun Pengantin',category:'Alam',city:'Ngawi',rating:4.5,image:'atp.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, air terjun yang besih, suasana asri, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Alam','Nyaman']},
    {id:14,name:'Benteng Van Den Bosch',category:'Tempat Bersejarah',city:'Ngawi',rating:4.6,image:'Benteng-Van-Den-Bosch.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, tempat bermain, galeri sejarah indonesia, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','sejarah',]},
    {id:15,name:'Monumen Kresek',category:'Tempat Bersejarah',city:'Madiun',rating:4.6,image:'monumen.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, galeri sejarah PKI, dan tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Sejarah','Nyaman']},
    {id:16,name:'Monumen Suryo',category:'Tempat Bersejarah',city:'Ngawi',rating:4.5,image:'suryo.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, adanya galeri sejarah indonesia, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Sejarah','Asik']},
    {id:17,name:'Alun Alun Ngawi',category:'Rekreasi',city:'Ngawi',rating:4.5,image:'ngawi.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, tersedianya toilet, fasilitas untuk olahraga, taman bermain, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','Alun alun','Nyaman']},
    {id:18,name:'Taman Candi',category:'Rekreasi',city:'Ngawi',rating:4.5,image:'taman candi.jpg',desc:'Fasilitas : area parkir, spot foto yang menarik, suasana asri, tempat bersih, tersedia aneka kuliner dan jajanan yang khas.',tags:['Wisata','ngawi','Nyaman']},
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
    modalDesc: document.getElementById("modalDesc"),
    modalTags: document.getElementById("modalTags"),
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
  
    if (state.sort === "rating") list.sort((a,b)=>b.rating-a.rating);
    if (state.sort === "rating_asc") list.sort((a,b)=>a.rating-b.rating);
    if (state.sort === "name") list.sort((a,b)=>a.name.localeCompare(b.name));
  
    els.resultCount.textContent = `Menampilkan ${list.length} tempat`;
    els.placeGrid.innerHTML = "";
    els.empty.style.display = list.length ? "none" : "block";
  
    list.forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <img class="thumb" src="${p.image}">
        <div>
          <h3>${p.name}</h3>
          <div class="meta">★ ${p.rating} • ${p.category} • ${p.city}</div>
        </div>
      `;
  
      card.onclick = () => openModal(p);
      els.placeGrid.appendChild(card);
    });
  }
  
  function openModal(p) {
    els.modalTitle.textContent = p.name;
    els.modalImage.src = p.image;
    els.modalMeta.textContent = `${p.category} • ${p.city} • ★ ${p.rating}`;
    els.modalDesc.textContent = p.desc;
    els.modalTags.textContent = "#" + p.tags.join(" #");
  
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
  