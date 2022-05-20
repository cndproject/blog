document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
function MyDropdown(){
  document.getElementById("dropdown").classList.toggle("show");
}function HideMessage(){
  document.getElementById('article').style.display='none';
}function onModal(){
  document.getElementById('modal-js-example').style.display='block';
}function offModal(){
  document.getElementById('modal-js-example').style.display='none';
}