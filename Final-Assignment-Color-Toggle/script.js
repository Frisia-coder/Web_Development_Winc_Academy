function toggleNav() {
   let getSidebarUl = document.querySelector(".nav-sidebar ul");

   if (getSidebarUl.style.visibility === "visible") {
       getSidebarUl.style.visibility = "hidden";
   } else {
       getSidebarUl.style.visibility = "visible";
   }
}

document.querySelector("#color-white").addEventListener("click", function () {
   document.body.style.backgroundColor = "white";
   toggleNav();
});

document.querySelector("#color-red").addEventListener("click", function () {
   document.body.style.backgroundColor = "red";
   toggleNav();
});

document.querySelector("#color-orange").addEventListener("click", function () {
   document.body.style.backgroundColor = "orange";
   toggleNav();
});

document.querySelector("#color-purple").addEventListener("click", function () {
   document.body.style.backgroundColor = "purple";
   toggleNav();
});

document.querySelector("#color-green").addEventListener("click", function () {
   document.body.style.backgroundColor = "green";
   toggleNav();
});


document.querySelector("#color-white").addEventListener("mouseover", function (mouseover) {
   mouseover.target.style.backgroundColor = "white";
});

document.querySelector("#color-red").addEventListener("mouseover", function (mouseover) {
   mouseover.target.style.backgroundColor = "red";
});

document.querySelector("#color-orange").addEventListener("mouseover", function (mouseover) {
   mouseover.target.style.backgroundColor = "orange";
});

document.querySelector("#color-purple").addEventListener("mouseover", function (mouseover) {
   mouseover.target.style.backgroundColor = "purple";
});

document.querySelector("#color-green").addEventListener("mouseover", function (mouseover) {
   mouseover.target.style.backgroundColor = "green";
});
