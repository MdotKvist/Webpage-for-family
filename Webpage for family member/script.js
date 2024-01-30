document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.getElementById('menu');
    const closeIcon = document.getElementById('close-icon');
    const body = document.body;
    var popupButton = document.getElementById('booking');
    var overlay = document.getElementById('overlay');
    var popup = document.getElementById('popup');
    var closePopup = document.getElementById('closePopup');
    
  
  
    // burger menu script


    burgerIcon.addEventListener('click', function () {
      menu.style.right = menu.style.right === '0px' ? '-250px' : '0px';
    });
  
    closeIcon.addEventListener('click', function () {
      menu.style.right = '-250px';
    });
  
    // Luk menuen, når der klikkes uden for den
    body.addEventListener('click', function (event) {
      if (event.target !== burgerIcon && event.target !== closeIcon && !menu.contains(event.target)) {
        menu.style.right = '-250px';
      }
    });
  });

    // JavaScript for parallax-scrolling-effekten
    window.addEventListener('scroll', function() {
        var scrolled = window.scrollY;
        var parallaxIndhold = document.getElementById('parallaxIndhold');
        parallaxIndhold.style.backgroundPositionY = -(scrolled * 0.3) + 'px';
    });

    popupButton.addEventListener('click', function () {
        overlay.style.display = 'block';
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', function () {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    });

