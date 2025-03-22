<template>
  <div class="container mt-3 mt-lg-5">
    <div class="pt-0 pt-lg-4">
      <button class="btn p-1 ps-3 fs-6 roboto-bold pe-3 btn-bootcamp rounded-5 mb-3 d-flex">
        Bootcamp
      </button>
      <h1 class="roboto-bold lh-base text-center">
        Level Up! Kembangkan Kemampuan <br />
        Coding & IT di PropsCode
      </h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h4 {
  color: rgb(253, 155, 3);
}
h1 {
  color: rgb(36, 53, 157);
}
img {
  height: 60vh !important;
}
.btn-bootcamp {
  background-color: #ff9131;
  color: white;
  justify-self: center;
}

@media (max-width: 768px) {
  h4,
  h1 {
    text-align: start !important;
  }
  h1 {
    font-size: 20px;
  }
  .btn-bootcamp {
    justify-self: start !important;
    font-size: 10px !important;
  }
}
@media (max-width: 368px) {
  h1 {
    font-size: 18px;
  }
  .btn-bootcamp {
    font-size: 10px !important;
  }
  .btn-bootcamp {
    justify-content: start !important;
  }
}
</style>
