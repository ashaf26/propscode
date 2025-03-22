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

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
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

