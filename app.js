// Comentario de linea
/*
Comentario de bloque
*/
/*
console.log("hola mundo");
console.log("Hola mundo".length); //cuenta espacios
*/
/*
// constante: Elemento que no se puede cambiar
const pi=3.1416182432;
console.log(pi);

//variables tipo
var variable1="hola mundo"; //string
var variable2= true; //boolean
var variable3= 4; // interpreta enteros, decimales, float

console.log(variable1); // las muestro por consola
console.log(variable2);
console.log(variable3);

// operaciones
var variable4=pi+variable3;
console.log(variable4);
var variable5= pi/variable3;
console.log(variable5);
var variable6= pi*variable3;
console.log(variable6);
console.log(variable1+variable3); // al no ser del mismo tipo, se concatena


//bucles
let texto1="El elemento "; //let es la ultima version de nomenclatura de VAR
let texto2=" de la tabla del 6 es: "
let seis=6;
for (let i=0;i<=10;i++){
  result=seis*i;
  console.log(texto1+i+texto2+result);
}

//comparaciones lógicas
console.log(5>3); //nos devuelve true o false
console.log(5==3); // "= asignacion" "== comparacion de lo que es" "=== compara lo que es y el tipo "
// cast convierte de un tipo de variable a otra
console.log(5!=='5'); // preguntamos si son de diferente tipo
console.log(5==='5');
console.log(5=='5'); // aquí no identifica que son tipos diferentes. Javascrip hace el cast solo,
//en Java tienes que hacer el cast manualmente y después comparas cuando sean del mismo tipo
// comparamos strings igual que el resto de tipos, con iguales

if("Xavi".length<=10 && variable3==4){
  console.log("tienes un nombre muy corto y tu variable es 4");
} else {
  console.log("tu nombre es largo y tu variable no es 4");
}

if("Cris"=="Laura"){
  console.log(true)
} else {
  console.log(false)
}

console.log('modulo :' + 12%2); // resto

// sacar numeros pares:
console.log("Sacamos por pantalla los números pares de menor a mayor:")
for (let i=1;i<=10;i++){
  if(i%2 == 0) {console.log(i);}
}
console.log("Sacamos por pantalla los números pares de mayor a menor:")
for(let i=20; i>=10; i--){
  if(i%2==0) {console.log(i);}
}

// subcadenas
console.log('Mi nombre es: '+ "Cris Avellan".substring(0,5));
console.log('Mi apellido es: ' + "Cris Avellan".substring(5,12));

// como manejar inputs
alert("Mensaje por pantalla");
var respuesta= confirm("Qué guapo eres");
console.log(respuesta);
var edad= prompt("introduce tu edad");
console.log(edad);


// Calculamos la edad a partir de la edad de nacimiento
var nombre=prompt("Introduce tu nombre")
var year=prompt("Introduce el año de nacimiento");
const actual=2017;
var edad= actual-year;
console.log('Hola, ' + nombre + '. Naciste en el año '+ year + ' y por tanto tienes ' + edad + ' años.');

const joven="joven";
const viejoven="viejoven";
const viejo="viejo";
if(edad>=16 && edad<=25){var res=1;} //joven
if(edad>=26 && edad<=35){var res=2;} //viejoven
if(edad>=36){var res=3;} //viejo
switch(edad){
  case 1:
    alert(joven);
    break;
  case 2:
    alert(viejoven);
    break;

  case 3:
    alert(viejo);
    break;
  default:
  alert("estas muy muerto");
  break;
  }


/*
// tenemos operaciones de la libreria Math
console.log(Math.random()); //num aleatorio entre 0 y 1
console.log(Math.floor(Math.random()*10)+1); //floor redondea



// Juego piedra/papel o tijera:
const piedra=1;
const papel=2;
const tijera=3;

// calculamos opción aleatoria:
var random=Math.floor(Math.random()*3)+1;

// el jugador elige
var jugador = prompt("introduce 1(piedra), 2(papel), 3(tijera)");

/*situaciones posibles:
si son iguales --> se repite jugada
Jugador:piedra, Random:papel --> ganas
Jugador: papel, random: piedra -- pierdes
Jugador: piedra, random: tijera -- ganas
Jugador: tijera, random: piedra --pierdes
Jugador: papel, random: tijera -- pierdes
jugador: tijera, random: papel --ganas

if( jugador==random){
  console.log(jugador);
  console.log(random);
  console.log("empate");
  alert("has empatado");
} else if (jugador!=random){
    if(jugador==piedra && random==papel){ //1-2
      console.log("jugador: piedra");
      console.log("random: papel");
      console.log("has ganado");
      alert("has ganado");}
    else if(jugador==piedra && random==tijera){ //1-3
      console.log("jugador: piedra");
      console.log("random: tijera");
      console.log("has ganado");
      alert("has ganado");}
    else if(jugador==tijera && random==papel){ //3-2
      console.log("jugador: tijera");
      console.log("random: papel");
      console.log("has ganado");
      alert("has ganado");}
    else if(jugador==papel && random==piedra){ // 2-1
      console.log("jugador: papel");
      console.log("random: piedra");
      console.log("has perdido");
      alert("has perdido");}
    else if(jugador==tijera && random==piedra) { // 3-1
      console.log("jugador: tijera");
      console.log("random: piedra");
      console.log("has perdido");
      alert("has perdido"); }
    else if(jugador==papel && random==tijera){ // 2-3
      console.log("jugador: papel");
      console.log("random: tijera");
      console.log("has perdido");
      alert("has perdido");}
}

/* Con switch:
jugadaJ1= jugar();
jugadaJ2=jugar();
ganador=obtenerganador();

mostrarresultado();
function jugar(){
  let res=Math
  switch(res){
    case 1: return PIEDRA; break;
    case 2: return PAPEL; break;
    caso 3: return TIJERA; break;
  }
}
faltaría código
*/

// Vamos a crear una calculadora a través de funciones
let op= prompt("Sumar +, restar -, multiplicar *, dividir /");
let n1= parseInt(prompt("introduce el primer numero")); //el prompt nos devuelve un string, lo convertimos a numero
let n2= parseInt(prompt("introduce el segundo numero"));

switch(op){ //opcion va a ser un string
  case '+':  alert(sumar(n1,n2)); break;
  case '-':  alert(restar(n1,n2)); break;
  case '*':  alert(multiplicar(n1,n2)); break;
  case '/':  alert(dividir(n1,n2)); break;
  default:   alert("utilizar otra operacion"); break;
}
console.log(op);

function multiplicar (p1,p2) {
  return p1*p2;
}
function sumar(p1,p2){
  return (p1+p2);
}
function restar(p1,p2){
  return (p1-p2);
}
function dividir(p1,p2){
  return (p1/p2);
}
