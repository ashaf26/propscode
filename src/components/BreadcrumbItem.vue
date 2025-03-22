<template>
  <div class="container mt-5 d-block d-lg-none">
    <h4 class="hastag roboto-bold fs-6 mt-3 m-0">Layanan Props Code</h4>
    <h1 class="subjudul roboto-bold fs-5 lh-base">Kategori Layanan</h1>
    <div class="row row-cols-2 mt-4">
      <RouterLink to="/bootcamp" class="col mb-3 text-decoration-none">
        <div class="card p-2 pt-2 pb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/18813/18813522.png"
            class="img-fluid rounded-circle"
            alt=""
          />
          <h3 class="roboto-bold fs-6 mt-2 m-0">Bootcamp</h3>
          <p class="roboto-regular mt-1 m-0">Pelatihan Terbaik</p>
        </div>
      </RouterLink>
      <div class="col mb-2">
        <div class="card p-2 pt-2 pb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3262/3262393.png"
            class="img-fluid rounded-circle"
            alt=""
          />
          <h3 class="roboto-bold fs-6 mt-2 m-0">Source Code</h3>
          <p class="roboto-regular mt-1 m-0">Website Interaktif</p>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card p-2 pt-2 pb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4260/4260895.png"
            class="img-fluid rounded-circle"
            alt=""
          />
          <h3 class="roboto-bold fs-6 mt-2 m-0">Custom Website</h3>
          <p class="roboto-regular mt-1 m-0">Design Modern</p>
        </div>
      </div>
      <div class="col mb-2">
        <div class="card p-2 pt-2 pb-2">
          <img
            src="https://cdn-icons-png.flaticon.com/128/702/702797.png"
            class="img-fluid rounded-circle"
            alt=""
          />
          <h3 class="roboto-bold fs-6 mt-2 m-0">Tips & Trick</h3>
          <p class="roboto-regular mt-1 m-0">Social Media</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.card {
  border: none;
  border-radius: 15px;
}
.card img {
  width: 40px;
}
h3 {
  color: rgb(30, 44, 135);
}
p {
  color: rgb(108, 108, 108);
  font-size: 14px;
}
</style>
