// show/hide menu: toggle menu
const toggleMenu = function (toggleId, navListId) {
  //html -> js
  const toggle = document.getElementById(toggleId);
  const navList = document.getElementById(navListId);

  const clickHandler = function () {
    //show/hide menu: .show-menu
    navList.classList.toggle('show-menu');
  }

  if (toggle && navList) {
    //toggle click
    toggle.addEventListener('click', clickHandler);
  }
}
toggleMenu("nav-toggle", "nav-list");

// const say = () => console.log("hello world4");

// const say = () => {
//   console.log("hello world3");
// };

// const say = function () {
//   console.log("hello world2");
// };

// function say() {
//   console.log("hello world");
// }
// say();
