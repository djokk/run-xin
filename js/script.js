
$(document).ready(function () { 
  $('.scrollDown').click(function (event) {
  // $('#scrollDown').on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    // if($('.burger').hasClass('open')){
    //   $('.burger').removeClass('open');
    //   $('.nav__item').css('display', 'none');
    //   $('body').removeClass('overflow-y');
    // }
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href');

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    let topId = $(id).offset().top - 50;
    // let topIdTwo = topId + 150;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: topId
    }, 1000);
  });

  //////////////////// MENU BURGER ////////////////////////////////////
  // if($('body').width() < 991) {
    // $('.nav__item').css('display', 'none');
    // $('.nav__item').attr('style','display: none');
  // }

  $(window).on('resize', function(e){
    if(window.innerWidth > 991){
      $('.nav__item').attr('style','');
    }
    else {
      $('.nav__item').attr('style','display: none');
    }
  });

  $('.burger').click(function () {
    if($('.burger').hasClass('open')){
      $('body').removeClass('overflow-y');
      $('.burger').removeClass('open');
      if($('body').width() <= 575){
        $('.nav__item').fadeOut(50);
      }
      else {
        $('.nav__item').fadeOut(300);
      }
      // $('.nav__item').css('display', 'none');
    }else{
      $('body').addClass('overflow-y');
      $('.burger').addClass('open');
      if($('body').width() <= 575){
        $('.nav__item').fadeIn(50);
      }
      else {
        // $('.nav__item').fadeIn('slow','linear');
        $('.nav__item').fadeIn(300);
      }
      $('.nav__item').css('display', 'flex');
    }
  });

  //////////////////// SCROLL UP //////////////////////////////////////
  $(window).scroll(function(){
    let scroll = $(this).scrollTop();
    if (scroll > 500){
      $('#top').fadeIn();
    }
    else{
      $('#top').fadeOut();
    }
  });
  $('#top').click(function(){
      $('html').animate({
          scrollTop: 0
      }, 1000)
  });

  //////////////////// KATEGORY MENU ///////////////////////////////////
  // if($('body').width() <= 991) {
  //   // $('.filter').css('display', 'none');
  //   $('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
  // }
  // else {
  //   $('.filter').attr('style','');
  // }
  $(window).on('resize', function(e){
    if(window.innerWidth > 991){
      $('.filter').attr('style','');
    }
    else {
      $('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
  });
  $('.filter-btn__link').click(function (event) {
    event.preventDefault();
    if($('body').width() <= 991) {
      if($('.filter-btn__link').hasClass('open')){
        $('.filter-btn__link').removeClass('open');
        $('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        // $('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        // $('.filter').css('display', 'none');
        $('.filter').slideUp({
          duration: 'slow',
          easing: 'linear'
        });
      }else{
        $('.filter-btn__link').addClass('open');
        $('.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-up');
        // $('.fa-angle-up').removeClass('fa-angle-up').addClass('fa-angle-down');
        // $('.filter').css('display', 'block');
        $('.filter').slideDown({
          duration: 'slow',
          easing: 'linear'
        });
      }
    }
  })

  /////////////////////Galery////////////////////////////////////////////////////////////////
  function imageGallery() {
    const highlight = document.querySelector(".gallery__hightlight");
    const previews = document.querySelectorAll(".gallery__preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("gallery__active"));
        highlight.src = bigSrc;
        preview.classList.add("gallery__active");
      });
    });
  }
  
  imageGallery();
  /////////////////// Current Copyright Year ///////////////////////////
  var dteNow = new Date();
  var intYear = dteNow.getFullYear();

  $('#copyright').each(function() {
      var text = $(this).text();
      $(this).text(text.replace('CurrentCopyrightYear', intYear)); 
  });
});