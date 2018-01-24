var contador=0;
while(contador<1){
var min=0;
var max=5;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//alert("El numero es: "+getRandomArbitrary(min,max));
opcion=prompt("Pregunta");
numero=getRandomArbitrary(min,max);


if(numero<=1){
	alert("Si");
}
else if(numero<=2){
	alert("No");

}
else if(numero<=3){
	alert("Tal vez ");

}

else if(numero<=4){
	alert("Definitivamente ");

}

else{
	alert("Vulve a preguntar");

}
}