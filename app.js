function WHITE(){
  var dark=document.querySelector("header");
  dark.classList.remove("seccion1");
  dark.classList.add("seccion12");
  console.log(dark);
  alert("Se guardaron los datos personales");
  

  var dark2=document.querySelector("section");
  dark2.classList.remove("seccion2");
  dark2.classList.add("seccion22");
  console.log(dark2);
}

function BLACK(){
  var white=document.querySelector("header");
  white.classList.remove("seccion1");
  white.classList.add("seccion12");
  console.log(white);
  alert("Se guardaron los datos personales");

}
