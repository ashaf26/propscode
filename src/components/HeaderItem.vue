<script></script>

<template>
  <div class="d-block d-lg-none">
    <img
      src="https://storage.googleapis.com/fastwork-static/4760ce4d-05f6-4745-90d6-125a288dba2e.jpg"
      class="img-fluid mt-2"
      alt=""
    />
  </div>

  <div class="container mt-lg-0 pt-0 pt-lg-5">
    <div class="row mt-lg-5">
      <div class="col-12 col-lg-6 order-lg-2 d-none d-lg-block">
        <img src="/public/img/bg-baru.png" class="img-fluid" alt="" />
      </div>

      <div class="col-12 col-lg-6 mt-3">
        <div class="col-lg-10">
          <h1 class="poppins-bold lh-base">
            <span class="span-1" style="color: #1e2c87; font-size: 50px">Build Websites</span>
            <br />
            <span class="span-2" style="color: #f39604; font-size: 50px">Level Up Your Skills</span>
          </h1>
          <p class="lh-base poppins-normal text-hp">
            Professional solutions for web development, source code, and learning. A place to build
            and refine digital skills.
          </p>

          <div class="d-none d-lg-block">
            <h4 class="hastag poppins-medium fs-5">Social Media</h4>
            <div class="d-flex justify-content-lg-start gap-3 mt-4">
              <a
                href="#"
                class="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center p-3"
                style="width: 50px; height: 50px"
              >
                <i class="bi bi-github" style="font-size: 24px"></i>
              </a>
              <a
                href="#"
                class="btn btn-outline-danger rounded-circle d-flex justify-content-center align-items-center p-3"
                style="width: 50px; height: 50px"
              >
                <i class="bi bi-instagram" style="font-size: 24px"></i>
              </a>
              <a
                href="#"
                class="btn btn-outline-dark rounded-circle d-flex justify-content-center align-items-center p-3"
                style="width: 50px; height: 50px"
              >
                <i class="bi bi-tiktok" style="font-size: 20px"></i>
              </a>

              <a
                href="#"
                class="btn btn-outline-primary rounded-circle d-flex justify-content-center align-items-center p-3"
                style="width: 50px; height: 50px"
              >
                <i class="bi bi-linkedin" style="font-size: 24px"></i>
              </a>
            </div>

            <div class="btn-start mt-4 d-flex gap-3 mb-5 col-lg-9">
              <button
                style="background-color: #081fb5; color: white; border: #081fb5"
                type="button"
                class="btn w-25 roboto-medium col p-4 pt-3 pb-3 rounded-5"
              >
                Order Now
              </button>
              <button
                style="border: 1.5px solid #081fb5; color: #081fb5"
                type="button"
                class="btn w-25 roboto-medium col p-4 pt-3 pb-3 rounded-5"
              >
                Pilih Paket
              </button>
            </div>
          </div>

          <div
            class="d-flex d-block d-lg-none konsultasi p-3 rounded-5 align-items-center justify-content-between mt-4"
          >
            <div class="d-flex bungkus-kons2 align-items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/9750/9750857.png"
                class="img-fluid rounded-circle img-kons"
                width="50px"
                alt=""
              />
              <div class="ms-3">
                <h3 class="roboto-bold fs-6 mt-2 m-0">Tanya Minprops</h3>
                <p class="roboto-regular mt-1 m-0 teks-kons">Konsultasi Bersama Minprops</p>
              </div>
            </div>
            <div class="align-items-center chat-wa p-3 pt-2 pb-2 pb-0 d-flex rounded-5">
              <a
                href="https://api.whatsapp.com/send/?phone=6285609826022&text&type=phone_number&app_absent=0"
                class="fs-6 roboto-bold d-flex text-decoration-none"
                >Chat<i class="bi bi-whatsapp ms-2"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 368px) {
  .chat-wa h4 {
    font-size: 11px !important;
  }
  .img-kons {
    width: 40px;
  }
  .konsultasi h3 {
    font-size: 13px !important;
  }
  .konsultasi p {
    font-size: 12px !important;
  }
}

@media (max-width: 768px) {
  .text-hp {
    width: 90%;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Batasi teks ke 2 baris */
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .ic_props {
    width: 100px;
  }

  .span-1 {
    font-size: 28px !important;
  }

  .span-2 {
    font-size: 25px !important;
  }
}
.konsultasi {
  background-color: white;
}

.konsultasi h3 {
  color: rgb(30, 44, 135);
}
.konsultasi p {
  color: rgb(108, 108, 108);
  font-size: 14px;
}

.chat-wa {
  background-color: rgb(33, 193, 33);
}

.chat-wa a {
  color: white;
}
</style>
