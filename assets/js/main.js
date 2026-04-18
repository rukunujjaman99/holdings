
new Swiper(".heroSwiper", {
  loop: true,
  speed: 1200,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  effect: "fade",   // 🔥 smooth one-by-one cinematic feel
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



gsap.registerPlugin(ScrollTrigger);

// animate text inside hero
gsap.utils.toArray(".reveal").forEach((text) => {
  gsap.from(text, {
    y: 60,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
    }
  });
});
