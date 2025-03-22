<template>
  <div class="container pt-5">
    <h4 class="hastag poppins-medium fs-5 text-center pt-3">Materi Class Update</h4>
    <h1 class="subjudul poppins-bold fs-2 text-center">Materi Kelas Online Propscode</h1>

    <div class="scroller" data-direction="right" data-speed="fast">
      <div class="scroller__inner">
        <div class="container mt-5" data-direction="right" data-speed="slow">
          <div class="row">
            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Vue</h4>
                  <p class="mt-1 roboto-light">Front - End</p>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1846px-Laravel.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Laravel</h4>
                  <p class="mt-1 roboto-light">Back - End</p>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">React</h4>
                  <p class="mt-1 roboto-light">Front - end</p>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Python</h4>
                  <p class="mt-1 roboto-light">Data Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroller" data-direction="left" data-speed="fast">
      <div class="scroller__inner">
        <div class="container mt-5" data-direction="right" data-speed="slow">
          <div class="row">
            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Bootstrap</h4>
                  <p class="mt-1 roboto-light">Responsive</p>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://images.seeklogo.com/logo-png/35/2/flutter-logo-png_seeklogo-354671.png?v=1957300474038936160"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Flutter</h4>
                  <p class="mt-1 roboto-light">Build Beautiful</p>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Figma</h4>
                  <p class="mt-1 roboto-light">UI / UX Design</p>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="d-flex pt-4 ps-4 bungkus-skill">
                <img
                  style="object-fit: contain"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                  class="img-fluid w-25 mb-4"
                  alt=""
                />
                <div class="ms-3 leanguage">
                  <h4 class="card-title roboto-bold">Tailwind</h4>
                  <p class="mt-1 roboto-light">Web Styling</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const scrollers = document.querySelectorAll('.scroller')

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation()
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute('data-animated', true)

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerInner.addEventListener('mouseenter', () => {
        scrollerInner.style.animationPlayState = 'paused' // Pause animasi
        scrollerInner.style.transition = 'transform 0.5s ease-in-out'
      })

      scrollerInner.addEventListener('mouseleave', () => {
        scrollerInner.style.animationPlayState = 'running' // Lanjutkan animasi
        scrollerInner.style.transition = 'none'
      })

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
      })
    })
  }
})
</script>

<style lang="scss" scoped></style>
