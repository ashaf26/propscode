<template>
  <div class="container mt-0 mt-lg-5 pt-lg-5 pt-3 bg-transparent">
    <div class="d-lg-flex align-items-center justify-content-lg-end">
      <div class="search-container order-2">
        <input type="text" class="search-box poppins-medium ps-4" placeholder="Search Source" />
      </div>
      <div class="cat-container me-lg-4 me-0 order-1 gap-3 gap-lg-2">
        <button class="btn ps-3 pe-3 roboto-medium filter-btn active" data-filter="all">
          Semua
        </button>
        <button class="btn ps-3 pe-3 roboto-medium filter-btn" data-filter="cewek">Frontend</button>
        <button class="btn ps-3 pe-3 roboto-medium filter-btn" data-filter="cowok">Backend</button>
        <button class="btn ps-3 pe-3 roboto-medium filter-btn" data-filter="anak">Design</button>
      </div>
    </div>
    <div class="row mt-lg-5 bg-transparent gap-3 row-cols-lg-4 row-cols-1">
      <div class="card col p-3 rounded-4 ms-3 ms-lg-0 product-card cewek">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card cowok">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card anak">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card cowok">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card anak">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card cewek">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card cewek">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card col p-3 rounded-4 product-card anak">
        <img
          src="https://www.funnelenvy.com/wp-content/uploads/landing-page.jpg"
          class="img-fluid rounded-4"
          alt="Image"
        />
        <div class="card-body p-0 pt-3 ps-1">
          <div class="d-flex justify-content-between">
            <h5 class="card-title fs-5 poppins-bold dolar">
              IDR<span class="fs-4 harga"> 10.000</span>
            </h5>
          </div>
          <p class="card-text text-desk poppins-medium mb-1">
            Website E-Commerce Berserta Dashboard Admin...
          </p>
          <div class="d-flex align-items-center mb-3 justify-content-between">
            <p class="card-text poppins-medium text-primary time-up m-0">Garansi 1 Bulan</p>
            <div class="text-warning me-3 fs-6">
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star-fill me-1"></i>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="col-2">
              <img
                src="https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-casual-man-flat-design-avatar-profile-picture-vector-png-image_12593008.png"
                class="img-fluid rounded-circle w-75 distributor"
                alt=""
              />
            </div>
            <div class="col-10">
              <h4 style="font-size: 13px" class="poppins-medium mb-0">Amelia Syahdini</h4>
              <p style="font-size: 12px" class="poppins-regular text-secondary mb-0">Distributor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
})
</script>

<style scoped>
.hidden {
  display: none;
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.search-box {
  width: 300px;
  padding: 12px 40px 12px 15px;
  border: none;
  border-radius: 25px;
  outline: none;
  font-size: 16px;
  transition: 0.3s ease;
}
.search-box:focus {
  width: 350px;
  box-shadow: 0 2px 8px rgba(171, 171, 171, 0.15);
}
.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #555;
  cursor: pointer;
}
button {
  border: none;
  border-radius: 0px;
  color: grey;
}
button:hover {
  color: #1e2c87;
}
.active {
  border-bottom: 1px solid #1e2c87 !important;
  color: #1e2c87;
}

.cat-card {
  font-size: 15px;
  color: white;
  background-color: rgb(241, 245, 255);
}

.time-up {
  font-size: 15px;
}

img {
  transition:
    transform 0.5s ease,
    filter 0.5s ease;
  height: 180px;
}

img:hover {
  filter: contrast(150%) saturate(150%);
  /* Menajamkan warna */
}

.tesk-desk {
  color: rgb(15, 23, 74);
}

.btn-buy:hover {
  background-color: transparent;
  border: 1px solid rgb(243, 150, 3);
  color: rgb(243, 150, 3);
}

.dolar {
  color: rgb(30, 44, 135);
}

.harga {
  color: rgb(243, 150, 3);
}

.card {
  border: none;
  /* Menghilangkan border */
  transition: all 0.3s ease-in-out;
  /* Animasi smooth */
  max-width: 280px;
}

.card-body {
  background: white;
  /* Background putih */
  box-shadow: 2px -1px 5px rgba(0, 0, 0, 0.01);
  padding: 20px;
  /* Memberi jarak isi ke tepi card */
}

@media (max-width: 768px) {
  .card {
    margin: 0%;
    margin-top: 30px;
    max-width: 280px;
  }

  .distributor {
    height: 40px;
  }

  img {
    height: auto;
  }

  .row {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
    /* Biar ada ruang di bawah */
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .row::-webkit-scrollbar {
    display: none;
    /* Hilangkan scrollbar untuk tampilan bersih */
  }

  .card {
    scroll-snap-align: center;
  }
  .roboto-medium {
    font-size: 12px;
    padding-left: 2% !important;
    padding-right: 2% !important;
  }
  .cat-container {
    justify-content: center;
    display: flex;
    margin-top: 5%;
  }
  .search-box {
    width: 200px;
    font-size: 13px;
  }
  .search-box:focus {
    width: 250px;
  }
  .search-container {
    justify-content: center !important;
    display: flex;
  }
}

@media (max-width: 568px) {
  img {
    height: 160px;
  }
  .search-box {
    padding: 10px 10px;
  }

  .cat-card {
    font-size: 12px;
  }
  .distributor {
    height: 33px;
  }
}

@media (min-width: 768px) {
  img {
    height: auto;
  }
}

@media (max-width: 368px) {
  .cat-card {
    font-size: 10px;
  }
  .distributor {
    height: 32px;
  }
  .roboto-medium {
    font-size: 12px;
    padding-left: 2% !important;
    padding-right: 2% !important;
  }
  .cat-container {
    justify-content: center;
    display: flex;
    margin-top: 5%;
  }
  .search-box {
    width: 200px;
    font-size: 13px;
  }
  .search-box:focus {
    width: 250px;
  }
  .search-container {
    justify-content: center !important;
    display: flex;
  }
}

/*
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.15);
} */
</style>
