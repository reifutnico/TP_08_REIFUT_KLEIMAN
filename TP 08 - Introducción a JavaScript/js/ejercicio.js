/* EJERCICIO 1
    Calculadora de edad 
    Crear una función que reciba un string con una fecha en formato 'YYYY-MM-DD' y devuelva un número con la edad de la persona.
    Pedir al usuario su nombre y su fecha de nacimiento. Luego, mostrar en la consola un mensaje que diga "Hola [nombre], tienes [edad] años!"
*/
function CalculadoraDeEdad() {
    const nombre = document.getElementById('nombre').value;
    const nacimiento = document.getElementById('nacimiento').value;
    const fecha1 = new Date(nacimiento);
    let fechaActual = new Date;
    let resultado = fechaActual.getFullYear() - fecha1.getFullYear();
    alert("Hola, " + nombre + " tienes " + resultado + " años");
}

/* EJERCICIO 2
Tirando fruta
Crear un array de strings con 10 frutas y mostrarlo en consola de manera prolija.
Pedir al usuario una fruta. Buscar la fruta en el array. 
Si la fruta existe, mostrar un mensaje que diga "Sí, tenemos [fruta]!”.
Si no existe, mostrar un mensaje que diga "No, no tenemos [fruta]!"
*/
function MostrarFrutas() {
    let mostrar=" "
    const frutas = ["Banana", "Manzana", "Naranja", "Frutilla", "Mandarina", "Kiwi", "Mandioca", "Pomelo", "Anana", "Arandano"]
    for (let i = 0; i < frutas.length; i++) {
        mostrar = mostrar + frutas[i] +  " "  
    }
    alert(mostrar);
}
function TirandoFruta() {
    const frutas = ["Banana", "Manzana", "Naranja", "Frutilla", "Mandarina", "Kiwi", "Mandioca", "Pomelo", "Anana", "Arandano"]
    let busqueda;
    const frutaElegida = document.getElementById('FrutaElegida').value;

        if(frutas.find(fruta => fruta  == frutaElegida))
            {
                alert("Si, tenemos " + frutaElegida);  
            }else{
                alert("No, no tenemos " + frutaElegida);
            }
}

/* EJERCICIO 3
Comparando datos y tipos
B. Comparar si 10 es igual a '10' con ===. ¿Qué diferencias encontrás?
C. ¿De qué tipo de dato es 10.6?
D. ¿Es cierto que para JavaScript true es == 1? ¿Qué conclusiones podemos obtener?
*/
function CompararDatosYTipos()
{
const numCompararEntero = 10
const numCompararNoEntero = 10.6
const boolAcomparar = true

if (numCompararEntero == '10') 
{
alert("A. Comparar si 10 es igual a '10' con ==" + "  Si, funciona y es igual a " + typeof numCompararEntero)
console.log("sexooooo")
}

if(numCompararEntero ==='10')
{
alert("A. Comparar si 10 es igual a '10' con ===" + "Si, funciona y es igual a " + typeof numCompararEntero)
}

alert("C. ¿De qué tipo de dato es 10.6?" + " es igual a " + typeof numCompararEntero)


if (boolAcomparar==1){
alert("D. ¿Es cierto que para JavaScript true es == 1? ¿Qué conclusiones podemos obtener?" + "si, es cierto. La conclusion es que true == 1 y false == 0 ")
}
else
{
alert("No, no es cierto ")
}

}

/* EJERCICIO 4

Crear un objeto de tipo ciudad con los campos: nombre, fechaFundacion, 
poblacion, extensión. Recorrer y mostrar todos las claves y valores por separado del objeto ciudad.

Opcional : Validar todos los ingresos de datos (prompts)
*/
function Ciudades() {
    const ciudad = 
        {
            nombre: 'San Luis',
            fechaFundacion: "25/8/1954",
            poblacion: 500000,
            extension: 2000
        }
    
    for (const propiedad in ciudad) {
     alert(`${propiedad} : ${ciudad[propiedad]}`)
    }

}

/* EJERCICIO 5
Comparando datos y tipos
Doble de elementos

Crear una función que, a raíz de recibir por parámetro un array de números, 
cree un nuevo array donde cada elemento sea el doble del elemento correspondiente en el array original.
*/
function DobleElementos() {
    const num = [1,2,3,4,5,6,7,8,9,10]
    let mostrar1=" "
    let mostrar2=" "
    
    const num2 = num.map(numero => numero*2)

    for (let i = 0; i < num.length; i++) {
         mostrar1 = mostrar1 + num[i] +  " " 
         mostrar2 = mostrar2 + num2[i] +  " "  
    }
    alert(mostrar1);
    alert(mostrar2);
}

/*EJERCICIO 6
Triángulo de asteriscos
A)¿Cómo harías para dibujar en la consola el siguiente triángulo de asterisco?
B)¿Y este?
*/
function TrianguloDeAsteristicos() {
const letra = "*"; let i = 0; let triangulo = ""; let triangulo2 = "";
while (i <= 5) 
{
      triangulo += letra.repeat(i) + "\n";
      i++;
}
alert(triangulo);
    
const numLineas = 5; let piramide = '';
for (let i = 0; i < numLineas; i++) {
  for (let j = 0; j < numLineas - i - 1; j++) {
    piramide += '-';
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    piramide += '*';
  }
  for (let j = 0; j < numLineas - i - 1; j++) {
    piramide += '-';
  }
  if (i < numLineas - 1) {
    piramide += '\n';
  }
}
alert(piramide);
}

/*EJERCICIO 7
Se debe solicitar al usuario que ingrese una lista de nombres separados por coma. 
Luego, muestra en el DOM los nombres que comienzan con la letra 'A'.
*/
function NombresConA()
{
const ListaDeNombres = document.getElementById('ListaDeNombres').value;
const listaDeNombresPorSeparado = ListaDeNombres.split(',')
const listNombresConA = listaDeNombresPorSeparado.filter(ANombre => ANombre.trim()[0].toLowerCase() === 'a')

let mostrar
if (listNombresConA.length > 0) {
    for (let i = 0; i < listNombresConA.length; i++) {
        mostrar = mostrar + listNombresConA[i] +  " "  
    }
    alert("Los nombres con que inician con la letra 'a' son los siguientes: " + listNombresConA)
}
else
{
    alert("No hay nombres que inicien con la letra 'A' ")
}
}

/*EJERCICIO 8
Se debe solicitar al usuario que ingrese una cadena de texto, una palabra que desea reemplazar y la palabra de reemplazo. 
Luego, muestra en el DOM la cadena resultante después de reemplazar todas las instancias de la palabra especificada.
*/
function CadenaDeTexto()
{
    const CadenaDeTexto = document.getElementById('Texto').value.toLowerCase();
    const PalabraReemplazar = document.getElementById('PalabraReemplazar').value.toLowerCase();
    const PalabraNueva = document.getElementById('PalabraNueva').value.toLowerCase();
    if (CadenaDeTexto.includes(PalabraReemplazar)) {
    const fraseNueva = CadenaDeTexto.replaceAll(PalabraReemplazar,PalabraNueva)
    alert("La frase nueva es: " + fraseNueva)
    }
    else
    {
    alert("No hubo coincidencias")
    }
}

/*EJERCICIO 9
Se debe solicitar al usuario que ingrese una cadena de texto y un número. 
Luego, muestra en el DOM una nueva cadena que contenga los primeros caracteres de la cadena original, 
según el número proporcionado.
*/
function CortarTexto()
{
    const CadenaDeTexto = document.getElementById('TextoParaCortar').value.toLowerCase();
    const Numero = document.getElementById('NumeroParaCortar').value;
    if (CadenaDeTexto.length > Numero ) {
        const fraseNueva = CadenaDeTexto.slice(Numero)
        alert("La frase nueva es: " + fraseNueva)
    }
    else
    {
        alert("El numero que has ingresado es mayor a la ubicacion de las palabras")
    }

}

/*EJERCICIO 10
Se debe solicitar al usuario que ingrese una lista de elementos separados por coma. 
Luego, muestra en el DOM un string que contenga todos los elementos del array separados por ' - '.
*/
function SeparadorPorGuion() 
{
const CadenaDeTexto = document.getElementById('ListaDeElementoConComa').value.toLowerCase();
if(CadenaDeTexto.includes(","))
{
const ListaGuiones = CadenaDeTexto.replaceAll("," , " - ")
alert("La lista separada por guiones: " + ListaGuiones)
}
else
{
alert("No hay palabras separadas por guiones")
}
}

/* EJERCICIO 11
Se le solicitará al usuario que ingrese una lista de objetos pedidos junto con sus respectivos totales, separados por coma. 
Cada pedido se debe ingresar en el formato "nombre:total". 
Por ejemplo, un posible ingreso podría ser: "Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25". 
Luego, muestra en el DOM la recaudación total sumando todos los montos de los pedidos*/
function CalculadoraDeRecaudacion() 
{
    const inputPedidos = document.getElementById('ListaDeElementosConPrecio').value;
    const pedidosArray = inputPedidos.split(', ');

    let recaudacionTotal = 0;

    for (let i = 0; i < pedidosArray.length; i++) {
      const pedido = pedidosArray[i].split(':');
      if (pedido.length === 2) {
        const total = parseFloat(pedido[1]);
        if (!isNaN(total)) {
          recaudacionTotal += total;
        }
      }
    } 
    if (recaudacionTotal > 0) {
    alert("La recaudacion total es de " + recaudacionTotal + " pesos")  
    }
    else
    {
    alert("No se ha recaudado dinero")  
    }
}