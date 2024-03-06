document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 300,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true
    },
  });

  $(function () {
    $("#accordion").accordion({
      heightStyle: "content",
      active: false,
      collapsible: true,
      animate: 300,
      icons: false,
      create: function (event, ui) {
        $('.questions-heading__wrap').attr('tabIndex', '0');
      }
    });
  });
  ///tabs///
  document.querySelectorAll('.work-tabs__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      path = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs-content__items').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
    })
  })

})
///burger///
document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector(".header-mobil__menu").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function () {
  document.querySelector(".header-mobil__menu").classList.remove("active");
})
////search
document.querySelector(".form-btn__open").addEventListener("click", function () {
  document.querySelector(".header-search").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".header-search__close").addEventListener("click", function () {
  document.querySelector(".header-search").classList.remove("form__active");
  this.classList.remove("active");
})

document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header-search");
  if (!target.closest(".form-container")) {
    form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})
