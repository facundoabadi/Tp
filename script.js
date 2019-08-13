let boton11 = document.getElementById('p1r1');
  let boton12 = document.getElementById('p1r2');
  let boton13 = document.getElementById('p1r3');
  let boton14 = document.getElementById('p1r4');
  let boton21 = document.getElementById('p2r1');
  let boton22 = document.getElementById('p2r2');
  let boton23 = document.getElementById('p2r3');
  let boton24 = document.getElementById('p2r4');
  let boton31 = document.getElementById('p3r1');
  let boton32 = document.getElementById('p3r2');
  let boton33 = document.getElementById('p3r3');
  let boton34 = document.getElementById('p3r4');
  let boton41 = document.getElementById('p4r1');
  let boton42 = document.getElementById('p4r2');
  let boton43 = document.getElementById('p4r3');
  let boton44 = document.getElementById('p4r4');
  let boton51 = document.getElementById('p5r1');
  let boton52 = document.getElementById('p5r2');
  let boton53 = document.getElementById('p5r3');
  let boton54 = document.getElementById('p5r4');
  let boton61 = document.getElementById('p6r1');
  let boton62 = document.getElementById('p6r2');
  let boton63 = document.getElementById('p6r3');
  let boton64 = document.getElementById('p6r4');
  let boton71 = document.getElementById('p7r1');
  let boton72 = document.getElementById('p7r2');
  let boton73 = document.getElementById('p7r3');
  let boton74 = document.getElementById('p7r4');
  let boton81 = document.getElementById('p8r1');
  let boton82 = document.getElementById('p8r2');
  let boton83 = document.getElementById('p8r3');
  let boton84 = document.getElementById('p8r4');
  let boton91 = document.getElementById('p9r1');
  let boton92 = document.getElementById('p9r2');
  let boton93 = document.getElementById('p9r3');
  let boton94 = document.getElementById('p9r4');
  let boton101=document.getElementById('p10r1');
  let boton102=document.getElementById('p10r2');
  let boton103=document.getElementById('p10r3');
let boton104=document.getElementById('p10r4');
let aceptar = document.getElementById('aceptar');
let puntos = document.getElementById('puntos');

let suma1 = 0;
let suma2 = 0, suma3 = 0, suma4 = 0, suma5 = 0, suma6 = 0, suma7 = 0, suma8 = 0, suma9 = 0, suma10 = 0;


boton13.onclick=function(){
  if(suma1 == 0){
    suma1 = 10;
   console.log(suma1);
  }
}

boton21.onclick=function(){
  if(suma2 == 0){
    suma2 = 10;
   console.log(suma2);
  }
}
boton34.onclick=function(){
  if(suma4 == 0){
    suma4 = 10;
   console.log(suma3);
  }
}
boton43.onclick=function(){
  if(suma4 == 0){
    suma4 = 10;
   console.log(suma4);
  }
}
boton51.onclick=function(){
  if(suma5 == 0){
    suma5 = 10;
   console.log(suma5);
  }
}
boton62.onclick=function(){
  if(suma6 == 0){
    suma6 = 10;
   console.log(suma6);
  }
}
boton71.onclick=function(){
  if(suma7 == 0){
    suma7 = 10;
   console.log(suma7);
  }
}
boton84.onclick=function(){
  if(suma8 == 0){
    suma8 = 10;
   console.log(suma8);
  }
}
boton93.onclick=function(){
  if(suma9 == 0){
    suma9 = 10;
   console.log(suma9);
  }
}
boton104.onclick=function(){
  if(suma10 == 0){
    suma10 = 10;
   console.log(suma10);
  }
}


aceptar.onclick = function(){
  var final = suma1 + suma2 + suma3 + suma4 + suma5 + suma6 + suma7 + suma8 + suma9 + suma10;
console.log(final);
puntos.innerHTML = final;
suma1 = 0;
suma2 = 0;
suma3 = 0;
suma4 = 0;
suma5 = 0;
suma6 = 0;
suma7 = 0;
suma8 = 0;
suma9 = 0;
suma10 = 0;
}
