// const navMenu = document.getElementById("nav_menu");
// const navToggle = document.getElementById("nav_toggle");
// const navClose = document.getElementById("nav_close");
// const navlinks = document.querySelectorAll(".nav_list a");

// // open menu
// navToggle.addEventListener("click", () => {
//   navMenu.classList.add("show-menu");

//   navClose.classList.add("show-close");
//   navToggle.classList.add("hide-toggle");
// });
// // cancel button
// navClose.addEventListener("click", () => {
//   navMenu.classList.remove("show-menu");

//     navClose.classList.remove("show-close");
//   navToggle.classList.remove("hide-toggle");
// });
// navlinks.forEach(links=>{
// links.addEventListener("click",()=>{
//    navMenu.classList.remove("show-menu");
//     navClose.classList.remove("show-close");
//   navToggle.classList.remove("hide-toggle");
// })
// });


// window.onscroll = function () {
//   let sections = document.querySelectorAll("section");
//   let scroll = window.scrollY;
  
//   sections.forEach(sec => {
//     if (scroll >= sec.offsetTop - 200 && scroll < sec.offsetTop + sec.offsetHeight) {
      
//       document.querySelectorAll(".nav_list a").forEach(a => a.classList.remove("active"));
      
//       document.querySelector('.nav_list a[href="#' + sec.id + '"]').classList.add("active");
//     }
//   });
// };


    let typed = new Typed("#typing" ,{
        strings :["Web Developer","Web Designer","Full Stack Developer"],
        typeSpeed : 100,
        backSpeed : 50,
        loop:true
    })