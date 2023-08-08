$(document).ready(function(){

  $('.slider').slick({
    arrows: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  }); 
});

const btn = document.querySelector('.btn');
const modalWindow = document.querySelector('.overlay');
const closeWindowBtn = document.querySelector('.modal-window__close');

function openModalWindow(){
  modalWindow.removeAttribute('style');
}

function closeWindow(){
  modalWindow.style.display = 'none';
}
btn.onclick = openModalWindow;
closeWindowBtn.onclick = closeWindow;