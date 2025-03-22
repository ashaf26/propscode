<template>
  <nav ref="navbar" class="navbar navbar-expand-lg bg-biru-muda sticky-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          src="/public/img/ic_props.png"
          alt="Logo"
          width="160"
          height="45"
          class="d-inline-block align-text-top ic_props"
        />
      </a>

      <!-- Navbar biasa di desktop -->
      <div
        class="collapse navbar-collapse align-items-lg-center d-none d-lg-block mt-1 justify-content-end"
      >
        <ul class="navbar-nav">
          <li class="nav-item pe-3">
            <RouterLink to="/" class="nav-link active poppins-medium" href="#">Home</RouterLink>
          </li>
          <li class="nav-item pe-3">
            <RouterLink to="/bootcamp" class="nav-link poppins-regular" href="">Kelas</RouterLink>
          </li>
          <li class="nav-item pe-3">
            <RouterLink to="/sourscode" class="nav-link poppins-regular" href="#"
              >Source Code</RouterLink
            >
          </li>
          <li class="nav-item pe-3">
            <a class="nav-link poppins-regular" href="#">Build Website</a>
          </li>
          <li class="nav-item pe-3">
            <a class="nav-link poppins-regular" href="#">Distributor</a>
          </li>
        </ul>
      </div>

      <!-- Toggle button hanya muncul di HP -->
      <button
        class="navbar-toggler d-lg-none p-3 pt-4 pb-4 align-items-center d-flex roboto-bold btn-togle fs-6"
        type="button"
        @click="toggleMenu"
      >
        Menu
        <span class="navbar-toggler-icon ms-3 burger" :class="{ rotate: isMenuOpen }"></span>
      </button>

      <!-- Sidebar menu untuk mobile -->
      <div class="mobile-menu" :class="{ 'show-menu': isMenuOpen }">
        <button class="close-btn" @click="toggleMenu">&times;</button>
        <div class="container">
          <div class="row row-cols-2 row-cols-md-3 g-3 mt-5 ms-1 me-1">
            <div class="col">
              <div class="bg-menu-hp p-3 pb-3 pt-3 text-center rounded-4 shadow-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/18813/18813522.png"
                  class="img-fluid w-50 w-md-75 mb-2"
                  alt="Bootcamp"
                />
                <br />
                <RouterLink href="" class="link-hp mt-2 roboto-medium fs-6">Bootcamp</RouterLink>
              </div>
            </div>
            <div class="col">
              <div class="bg-menu-hp p-3 pb-3 pt-3 text-center rounded-4 shadow-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1567/1567341.png"
                  class="img-fluid w-50 w-md-75 mb-2"
                  alt="Bootcamp"
                />
                <br />
                <RouterLink href="" class="link-hp mt-2 roboto-medium fs-6">Source Code</RouterLink>
              </div>
            </div>
            <div class="col">
              <div class="bg-menu-hp p-3 pb-3 pt-3 text-center rounded-4 shadow-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1055/1055666.png"
                  class="img-fluid w-50 w-md-75 mb-2"
                  alt="Bootcamp"
                />
                <br />
                <RouterLink href="" class="link-hp mt-2 roboto-medium fs-6">Custom Web</RouterLink>
              </div>
            </div>
            <div class="col">
              <div class="bg-menu-hp p-3 pb-3 pt-3 text-center rounded-4 shadow-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/12695/12695898.png"
                  class="img-fluid w-50 w-md-75 mb-2"
                  alt="Bootcamp"
                />
                <br />
                <RouterLink href="" class="link-hp mt-2 roboto-medium fs-6"
                  >Tips & Trick</RouterLink
                >
              </div>
            </div>
            <div class="col">
              <div class="bg-menu-hp p-3 pb-3 pt-3 text-center rounded-4 shadow-sm">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4689/4689134.png"
                  class="img-fluid w-50 w-md-75 mb-2"
                  alt="Bootcamp"
                />
                <br />
                <RouterLink href="" class="link-hp mt-2 roboto-medium fs-6">Testimoni</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lastScrollTop: 0,
      isScrolling: false,
      isMenuOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      let currentScroll = window.scrollY
      const navbar = this.$refs.navbar

      if (currentScroll > this.lastScrollTop) {
        navbar.style.transform = 'translateY(-100%)'
      } else {
        navbar.style.transform = 'translateY(0)'
      }

      this.lastScrollTop = currentScroll

      clearTimeout(this.isScrolling)
      this.isScrolling = setTimeout(() => {
        navbar.style.transform = 'translateY(0)'
      }, 200)
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
.navbar-nav .nav-link {
  color: rgb(93, 95, 112);
  transition: color 0.3s ease-in-out; /* Efek transisi */
}

.navbar-nav .nav-link:hover {
  color: rgb(30, 44, 135); /* Warna ungu saat hover */
}

.navbar-nav .nav-link.router-link-active {
  color: rgb(30, 44, 135) !important; /* Warna ungu saat aktif */
  font-weight: bold; /* Tambahkan efek tebal jika ingin lebih menonjol */
}

.btn-togle {
  color: rgb(30, 44, 135);
}
.bg-menu-hp {
  background-color: rgb(246, 248, 253);
}
.burger {
  color: rgb(30, 44, 135) !important;
}
.navbar {
  background-color: rgb(246, 248, 253);
  transition: transform 0.3s ease-in-out;
}
.navbar-toggler {
  background: transparent;
  border: none;
  border-radius: 8px;
  font-size: 22px;
  cursor: pointer;
  display: block;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.navbar-toggler:active {
  transform: scale(0.95);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}

.navbar-toggler:focus {
  box-shadow: none;
}

/* Animasi Toggle */
.navbar-toggler-icon {
  display: inline-block;
  width: 25px;
  height: 3px;
  background-color: rgb(30, 44, 135);
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: '';
  display: block;
  width: 25px;
  height: 3px;
  background-color: rgb(30, 44, 135);
  position: absolute;
  left: 0;
  transition: transform 0.3s ease-in-out;
}

.navbar-toggler-icon::before {
  top: -7px;
}

.navbar-toggler-icon::after {
  top: 7px;
}

/* Efek Rotasi saat Toggle diklik */
.rotate {
  transform: rotate(90deg);
}

/* Sidebar menu */
.mobile-menu {
  position: fixed;
  top: 20vh;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transform: translateY(100%);
  transition: transform 0.3s ease-in-out;
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
}

.mobile-menu li {
  margin: 12px 0;
}

.mobile-menu a {
  text-decoration: none;
  font-size: 18px;
  color: #000;
  font-weight: 600;
}

/* Tombol close */
.mobile-menu .close-btn {
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
}

/* Tampilkan menu saat aktif */
.show-menu {
  transform: translateX(0);
}

/* Ukuran logo di HP */
@media (max-width: 768px) {
  .ic_props {
    width: 130px;
    height: 40px;
  }
}

@media (max-width: 378px) {
  .link-hp {
    font-size: 12px !important;
  }
}

/* Toggle button hanya di HP */
@media (min-width: 992px) {
  .navbar-toggler {
    display: none !important;
  }
}
</style>
