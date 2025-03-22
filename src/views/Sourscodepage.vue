<template>
  <div class="container mt-lg-5 pt-3">
    <div class="row row-cols-lg-2 row-cols-1">
      <div class="col mt-4">
        <h1 class="poppins-bold lh-base">
          <span class="span-1" style="color: #1e2c87; font-size: 50px"
            >An Outstanding Solution for</span
          >
          <br />
          <span class="span-2" style="color: #f39604; font-size: 50px"
            >Developers High Quality</span
          >
        </h1>
        <p class="lh-base poppins-normal text-hp">
          Dapatkan source code berkualitas untuk mempercepat pengembangan proyekmu.
        </p>
        <button class="btn btn-primary btn-1 me-3 poppins-regular ps-4 pe-4 rounded-4">
          Buy Source
        </button>
        <button class="btn btn-outline-primary btn-2 poppins-regular ps-4 pe-4 rounded-4">
          Choice Source
        </button>
      </div>
      <div class="col mt-3">
        <img
          src="https://storage.googleapis.com/fastwork-static/4760ce4d-05f6-4745-90d6-125a288dba2e.jpg"
          class="img-fluid"
          alt=""
        />
      </div>
    </div>
  </div>

  <CardSourceCode />
</template>

<script setup>
import CardSourceCode from '@/components/CardSourceCode.vue'
</script>

<style scoped>
@media (max-width: 768px) {
  .span-1 {
    font-size: 28px !important;
  }

  .span-2 {
    font-size: 25px !important;
  }
  .btn-1 {
    font-size: 13px;
  }
  .btn-2 {
    font-size: 13px;
  }
}
.btn-1 {
  background-color: #1e2c87;
  color: white;
  border: 1px solid #1e2c87;
}
.btn-2 {
  background-color: #f39604;
  color: white;
  border: 1px solid #f39604;
}
</style>
