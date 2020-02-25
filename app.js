function WHITE(){
  var dark=document.querySelector("header");
  dark.classList.remove("seccion1");
  dark.classList.add("seccion12");
  console.log(dark);

  

  var dark2=document.querySelector("section");
  dark2.classList.remove("seccion2");
  dark2.classList.add("seccion22");
  console.log(dark2);

  var dark2=document.querySelector("div");
  dark2.classList.remove("texto");
  dark2.classList.add("texto1");
  console.log(dark2);
}

function BLACK(){
  var white=document.querySelector("header");
  white.classList.remove("seccion12");
  white.classList.add("seccion1");
  console.log(white);

  var white2=document.querySelector("section");
  white2.classList.remove("seccion22");
  white2.classList.add("seccion2");
  console.log(white2);
  alert("white");

}
