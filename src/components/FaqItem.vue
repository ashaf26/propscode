<template>
  <div class="container mt-5 mt-lg-5">
    <h4 class="hastag roboto-bold fs-5 text-center pt-lg-5 mt-lg-5">Question For Propscode</h4>
    <h1 class="subjudul roboto-bold fs-2 text-center">Tanya Seputar PropsCode</h1>
    <div class="justify-content-center d-flex mt-5 mb-3 row">
      <img src="/public/img/faq-props.png" class="img-fluid col-8 col-lg-4" alt="" />
    </div>
    <div class="row justify-content-center">
      <div class="accordion accordion-flush col-12 col-lg-9" id="accordionFlushExample">
        <div class="accordion-item rounded-5 mt-4">
          <h2 class="accordion-header">
            <button
              class="accordion-button bg-transparent collapsed roboto-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Menyediakan Layanan Apa Saja ?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse bg-transparent"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the first item's accordion body.
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-5 mt-3">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-transparent roboto-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Apakah Bisa Akses Sourscode Selamanya ?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse bg-transparent"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the second item's accordion body. Let's
              imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-5 mt-3">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-transparent roboto-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Berapakah Harga Kisaran Bikin Website Custom ?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse bg-transparent"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
              more exciting happening here in terms of content, but just filling up the space to
              make it look, at least at first glance, a bit more representative of how this would
              look in a real-world application.
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-5 mt-3">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-transparent roboto-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Kalau Rekomendasi Design Bisa ?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse bg-transparent"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
              more exciting happening here in terms of content, but just filling up the space to
              make it look, at least at first glance, a bit more representative of how this would
              look in a real-world application.
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-5 mt-3">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-transparent roboto-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Apakah Bisa Hanya Order Landing Page ?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse bg-transparent"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
              more exciting happening here in terms of content, but just filling up the space to
              make it look, at least at first glance, a bit more representative of how this would
              look in a real-world application.
            </div>
          </div>
        </div>
        <div class="accordion-item rounded-5 mt-3">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed bg-transparent roboto-medium"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              Apakah Ada Garansi Uang Kembali ?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            class="accordion-collapse collapse bg-transparent"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing
              more exciting happening here in terms of content, but just filling up the space to
              make it look, at least at first glance, a bit more representative of how this would
              look in a real-world application.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.accordion-item {
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
.accordion-header {
  background-color: transparent;
}

.accordion-button:focus {
  box-shadow: none;
  outline: none;
}

.accordion-button:not(.collapsed) {
  border: none;
  box-shadow: none;
}

@media (max-width: 768px) {
  button {
    font-size: 12px;
    padding-right: 10px;
    line-height: 18px;
  }
}
</style>
