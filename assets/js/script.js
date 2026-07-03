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
//   let sections = document.querySelectorAll(".section");
//   let scroll = window.scrollY;
  
//   sections.forEach(sec => {
//     if (scroll >= sec.offsetTop - 200 && scroll < sec.offsetTop + sec.offsetHeight) {
      
//       document.querySelectorAll(".nav-links ul li a").forEach(a => a.classList.remove("active"));
      
//       document.querySelector('.nav-links ul li a[href="#' + sec.id + '"]').classList.add("active");
//     }
//   });
// };

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  const links = document.querySelectorAll(".nav-links a");

  sections.forEach(sec => {
    if (
      window.scrollY >= sec.offsetTop - 200 &&
      window.scrollY < sec.offsetTop + sec.offsetHeight
    ) {
      links.forEach(link => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.nav-links a[href="#${sec.id}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
});
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{
    threshold:0.2
});

reveals.forEach(section => {
    observer.observe(section);
});

    let typed = new Typed("#typing" ,{
        strings :["Web Developer","Web Designer","Fronten Developer"],
        typeSpeed : 100,
        backSpeed : 50,
        loop:true
    })

    // Dark Mode
const darkModeBtn = document.getElementById("darkMode");
const body = document.body;
const icon = darkModeBtn.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    icon.classList.remove("bi-moon-fill");
    icon.classList.add("bi-sun-fill");
}

darkModeBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icon.classList.remove("bi-moon-fill");
        icon.classList.add("bi-sun-fill");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.remove("bi-sun-fill");
        icon.classList.add("bi-moon-fill");
        localStorage.setItem("theme", "light");
    }
});
//project value counter
// const projectValue = document.getElementById("projects-value");
// let projectCount = 0;
// const targetCount = 16;
// if(projectValue){
//     const interval = setInterval(() => {
//         projectCount++;
//         projectValue.textContent = projectCount;
//         if (projectCount >= targetCount) {
//             clearInterval(interval);
//         }
//     }, 100);
// }

// const clientsValue = document.getElementById("clients-value");
// let clientsCount = 0;
// const targetClientsCount = 40;
// if(clientsValue){
//     const intervalClients = setInterval(() => {
//         clientsCount++;
//         clientsValue.textContent = clientsCount;
//         if (clientsCount >= targetClientsCount) {
//             clearInterval(intervalClients);
//         }
//     }, 50);
// }
// const experienceValue = document.getElementById("experience-value");
// let experienceCount = 0;
// const targetExperienceCount = 2;
// if(experienceValue){
//     const intervalExperience = setInterval(() => {
//         experienceCount++;
//         experienceValue.textContent = experienceCount;
//         if (experienceCount >= targetExperienceCount) {
//             clearInterval(intervalExperience);
//         }
//     }, 100);
// }
//     const dedicationValue = document.getElementById("dedication-value");
//     let dedicationCount = 0;
//     const targetDedicationCount = 100;
//     if(dedicationValue){
//         const intervalDedication = setInterval(() => {
//             dedicationCount++;

//             dedicationValue.textContent = dedicationCount;
//             if (dedicationCount >= targetDedicationCount) {
//                 clearInterval(intervalDedication);
//             }
//         }, 20);
//     }
//     const satificationValue = document.getElementById("satification-value");
//     let satificationCount = 0;
//     const targetSatificationCount = 100;
//     if(satificationValue){
//         const intervalSatification = setInterval(() => {
//             satificationCount++;

//             sastificationValue.textContent = sastificationCount;
//             if (sastificationCount >= targetSastificationCount) {
//                 clearInterval(intervalSastification);
//             }
//         }, 20);
//     }
function startCounter(id, target, speed) {
    const element = document.getElementById(id);
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                started = true;

                let count = 0;

                const interval = setInterval(() => {
                    count++;
                    element.textContent = count;

                    if (count >= target) {
                        clearInterval(interval);
                    }
                }, speed);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(element);
}

startCounter("projects-value", 16, 100);
startCounter("clients-value", 40, 50);
startCounter("experience-value", 2, 300);
startCounter("dedication-value", 100, 20);
startCounter("satification-value", 100, 20);