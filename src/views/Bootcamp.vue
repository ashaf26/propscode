<script setup>
import PelatihanCodingItem from '../components/PelatihanCodingItem.vue'
import HeaderBootcamp from '../components/HeaderBootcamp.vue'
import SkillItem from '../components/SkillItem.vue'
import { onMounted, nextTick } from 'vue'

onMounted(async () => {
  await nextTick() // Pastikan DOM sudah diupdate oleh Vue sebelum kode dijalankan

  const buttons = document.querySelectorAll('.filter-btn')
  const productCards = document.querySelectorAll('.product-card')

  if (buttons.length && productCards.length) {
    buttons.forEach((button) => {
      button.removeEventListener('click', handleFilter) // Hapus event listener sebelumnya
      button.addEventListener('click', handleFilter)
    })
  }

  function handleFilter() {
    const filter = this.getAttribute('data-filter')

    productCards.forEach((card) => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.classList.remove('hidden')
        card.classList.add('fade-in')
      } else {
        card.classList.add('hidden')
        card.classList.remove('fade-in')
      }
    })

    // Mengubah warna tombol yang aktif
    buttons.forEach((btn) => btn.classList.remove('active'))
    this.classList.add('active')
  }

  // --- Auto Scroll ---
  const container = document.querySelector('.row')
  const cardWidth = document.querySelector('.col')?.offsetWidth || 0

  if (container) {
    container.addEventListener('wheel', (event) => {
      event.preventDefault()
      container.scrollBy({ left: event.deltaY > 0 ? cardWidth : -cardWidth, behavior: 'smooth' })
    })
  }

  let currentIndex = 0
  const row = document.getElementById('productContainer')
  const cards = document.querySelectorAll('.card')
  let autoScrollInterval
  let userInteracting = false
  let timeoutId

  function scrollNextCard() {
    if (!userInteracting && cards.length) {
      currentIndex = (currentIndex + 1) % cards.length
      const scrollLeft = cards[currentIndex].offsetLeft
      row.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  function restartAutoScroll() {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      userInteracting = false
      startAutoScroll()
    }, 5000)
  }

  function startAutoScroll() {
    clearInterval(autoScrollInterval)
    autoScrollInterval = setInterval(scrollNextCard, 3000)
  }

  function stopAutoScroll() {
    userInteracting = true
    clearInterval(autoScrollInterval)
    restartAutoScroll()
  }

  if (row) {
    row.addEventListener('touchstart', stopAutoScroll)
    row.addEventListener('mousedown', stopAutoScroll)
    row.addEventListener('wheel', stopAutoScroll)

    startAutoScroll()
  }
})
</script>

<template>
  <HeaderBootcamp />
  <div class="container">
    <div class="d-flex justify-content-around">
      <!-- <div class="search-container">
        <input type="text" class="search-input" placeholder="Cari sesuatu..." />
        <button class="search-btn">🔍</button>
      </div> -->
      <div
        class="justify-content-center justify-content-lg-end mb-4 mb-lg-5 gap-2 gap-lg-3 d-flex mt-4 mt-lg-5 bungkus-btn"
      >
        <button class="btn ps-3 pe-3 roboto-medium filter-btn active" data-filter="all">
          Semua
        </button>
        <button class="btn ps-3 pe-3 roboto-medium filter-btn" data-filter="cewek">Frontend</button>
        <button class="btn ps-3 pe-3 roboto-medium filter-btn" data-filter="cowok">Backend</button>
        <button class="btn ps-3 pe-3 roboto-medium filter-btn" data-filter="anak">Design</button>
      </div>
    </div>

    <!-- Produk List -->
    <div
      class="row row-cols-1 row-cols-lg-4 gap-3 gap-lg-2 justify-content-lg-center"
      id="productContainer"
    >
      <!-- Produk Cewek -->
      <div class="card p-3 rounded-4 col ms-3 ms-lg-0 product-card cewek">
        <img
          src="https://images.media-outreach.com/544455/image_1.jpeg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 fs-5 star">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>

      <div class="card p-3 rounded-4 col product-card cewek">
        <img
          src="https://edusora.com/wp-content/uploads/2024/07/PEMROGRAMAN-1.png"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>
      <div class="card p-3 rounded-4 col product-card cowok">
        <img
          src="https://wrapmarketusercontent.com/assets/items/thumb/54c1ab5a1d4b74c01e67e79b93ae1773805969726322be56c88e11c6bfec7d79.webp?v=1716120036"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>
      <div class="card p-3 rounded-4 col product-card cewek">
        <img
          src="https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/622b17998bd4652eb461fcf5_7%20Cara%20Belajar%20Coding%20yang%20Efektif%20untuk%20Pemula%20-%20Binar%20Academy.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>
      <div class="card p-3 rounded-4 col product-card anak">
        <img
          src="https://dicoding-assets.sgp1.cdn.digitaloceanspaces.com/blog/wp-content/uploads/2022/09/BLOG-Banner-Blog-Cara-Bangun-Kebiasan-Programming-Setiap-Hari.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>
      <div class="card p-3 rounded-4 col product-card cowok">
        <img
          src="https://apps.codepolitan.com/sites/learn/uploads/original/202308/Tips_Belajar_Programming_Untuk_Pemula_Usia_30+_Wajib_Coba!.png"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>
      <div class="card p-3 rounded-4 col product-card anak">
        <img
          src="https://www.jagoanhosting.com/blog/wp-content/uploads/2024/04/aplikasi-coding.png"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>
      <div class="card p-3 rounded-4 col product-card cewek">
        <img
          src="https://i.ytimg.com/vi/CN_Kt91GtqM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDXVCP9hP5RynFD2xhbx4jaZLle5w"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body ps-1 pb-1">
          <a href="" class="text-desk card-text roboto-bold mb-1 m-0 text-decoration-none">
            Bootcamp Back - End Laravel Fillament 5.....
          </a>
          <div class="d-flex">
            <h5 class="card-title fs-6 roboto-regular diskon mt-2 me-3"><s>Rp 40.000</s></h5>
            <h5 class="card-title fs-6 roboto-medium mt-2">Rp 30.000</h5>
          </div>
          <div class="d-flex align-items-center mt-1">
            <div class="text-warning me-3 star fs-5">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star me-1"></i>
            </div>
            <p class="card-text roboto-medium text-secondary time-up">
              <i class="bi bi-person me-1"></i>140
            </p>
          </div>
        </div>
      </div>

      <!-- Produk Cowok -->
      <!-- <div class="col-md-4 mb-4 product-card cowok">
        <div class="card">
          <img src="https://via.placeholder.com/300" class="card-img-top" alt="Produk Cowok" />
          <div class="card-body">
            <h5 class="card-title">Jaket Pria</h5>
            <p class="card-text">Gaya keren untuk pria.</p>
          </div>
        </div>
      </div> -->

      <!-- Produk Anak -->
      <!-- <div class="col-md-4 mb-4 product-card anak">
        <div class="card">
          <img src="https://via.placeholder.com/300" class="card-img-top" alt="Produk Anak" />
          <div class="card-body">
            <h5 class="card-title">Baju Anak</h5>
            <p class="card-text">Nyaman dan lucu untuk si kecil.</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <SkillItem />
  <PelatihanCodingItem />
</template>

<style scoped>
.card {
  transition: 0.3s;
}
.hidden {
  display: none;
}
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}
button {
  background-color: transparent;
  border-bottom: 2px solid rgb(199, 199, 199) !important;
  color: rgb(199, 199, 199);
  border: none;
  border-radius: 0px;
  padding-bottom: 8px !important;
}
button:hover {
  color: rgb(253, 155, 3);
}
.active {
  border-color: rgb(253, 155, 3) !important;
  color: rgb(253, 155, 3);
}
.star {
  font-size: 18px !important;
}
img {
  transition:
    transform 0.5s ease,
    filter 0.5s ease;
  height: 150px !important;
}

img:hover {
  filter: contrast(150%) saturate(150%); /* Menajamkan warna */
}
.diskon {
  color: rgb(188, 0, 0);
}

.card {
  box-shadow: 2px -1px 5px rgba(0, 0, 0, 0.01);
  border: none; /* Menghilangkan border */
  transition: all 0.3s ease-in-out; /* Animasi smooth */
  max-width: 290px !important;
}

.card-body {
  background: white; /* Background putih */
}

.text-desk {
  color: rgb(15, 23, 74);
}

.search-container {
  display: flex;
  align-items: center;
  border: 2px solid #0d6efd;
  border-radius: 50px;
  overflow: hidden;
  background: white;
  transition: box-shadow 0.3s ease-in-out;
}
.search-container:focus-within {
  box-shadow: 0px 0px 8px rgba(13, 110, 253, 0.5);
}
.search-input {
  border: none;
  padding: 10px 15px;
  outline: none;
  flex: 1;
}
.search-btn {
  background: #0d6efd;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-btn:hover {
  background: #0a58ca;
}
.search-btn:active {
  transform: scale(0.9);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .card {
    margin: 0%;
    max-width: 280px !important;
  }
  .star {
    font-size: 20px !important;
  }

  img {
    height: auto;
  }
  .row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px; /* Biar ada ruang di bawah */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .row::-webkit-scrollbar {
    display: none; /* Hilangkan scrollbar untuk tampilan bersih */
  }

  .card {
    scroll-snap-align: center;
  }
}

@media (max-width: 568px) {
  h1 {
    font-size: 20px;
  }
  button {
    font-size: 13px !important;
    padding: 3px 3px;
  }
  img {
    height: 160px;
  }
}

@media (max-width: 368px) {
  button {
    font-size: 10px !important;
    padding: 3px 3px;
  }
  img {
    height: 140px !important;
  }
}

@media (min-width: 768px) {
  img {
    height: auto;
  }
}
</style>
