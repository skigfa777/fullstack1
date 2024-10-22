$('.slick-carousel').slick({
  slidesToShow: 4,
  // rows: 0,// удаляет div
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      }
    }, 
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },  
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }, 
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.5,
      }
    }, 
    {
      breakpoint: 410,
      settings: {
        slidesToShow: 1,
      }
    }]
});
