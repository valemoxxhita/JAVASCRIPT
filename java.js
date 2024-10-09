//PUNTO 1
// let N = Number(prompt("Ingrese un número límite: "));
// let suma = 0;

// for (let i = 1; i <= N; i++) {
//     suma += i;
// }

// alert("La suma de los primeros " + N + " números naturales es: " + suma);

// let nombre = prompt("Ingrese el nombre del estudiante: ");
// let N = Number(prompt("¿Cuántas notas va a ingresar? "));
// let suma = 0;

// for (let i = 1; i <= N; i++) {
//     let nota = Number(prompt("Ingrese la nota " + i + ": "));
//     suma += nota;
// }

//PUNTO 2
// let promedio = suma / N;
// alert("El promedio de " + nombre + " es: " + promedio);

// if (promedio >= 3) {
//     alert(nombre + " aprueba.");
// } else {
//     alert(nombre + " reprueba.");
// }

//PUNTO 3
// let suma = 0;
// let contador = 0;
// let input;

// while (input !== "FIN") {
//     input = prompt("Ingrese un número o escriba 'FIN' para terminar: ");
//     if (input !== "FIN") {
//         let numero = Number(input);
//         suma += numero;
//         contador++;
//     }
// }

// alert("Cantidad de números ingresados: " + contador);
// alert("Suma total: " + suma);

//PUNTO 4
// let numero = Number(prompt("Ingrese un número para la tabla de multiplicar: "));

// for (let i = 1; i <= 30; i++) {
//     alert(numero + " x " + i + " = " + (numero * i));
// }

//PUNTO 5
// let numero = Number(prompt("Ingrese un número para la tabla de multiplicar descendente: "));

// for (let i = 10; i >= 1; i--) {
//     alert(numero + " x " + i + " = " + (numero * i));
// }

//PUNTO 6
// let intervalo = Number(prompt("Ingrese el intervalo: "));

// for (let i = 1; i <= 30; i += intervalo) {
//     alert(i);
// }

//PUNTO 7
// let intervalo = Number(prompt("Ingrese el intervalo regresivo: "));

// for (let i = 30; i >= 1; i -= intervalo) {
//     alert(i);
// }

// //PUNTO 8
// let altura = Number(prompt("Digite la altura de la escalera"));

// for(let x = 1; x <= altura; x++){
//     for(let y = 1; y <= x; y++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

//PUNTO 9
// let altura = Number(prompt("Digite la altura de la escalera"));
// for(let w = 1; w <= altura; w++){
//     for(let v = altura; v >= w; v--){
//         document.write("*");
//     }
//     document.write("<br>");
// }

//PUNTO 10
// let totalFacturas = 0;
// let totalVentasDia = 0;
// let continuar = "si";

// while (continuar.toLowerCase() === "si") {
//     totalFacturas++; 
//     let numProductos = Number(prompt("Ingrese el número de productos que va a comprar: "));
//     let totalCompra = 0;

//     for (let i = 1; i <= numProductos; i++) {
//         let precioProducto = Number(prompt(`Ingrese el precio del producto ${i}: `));
//         totalCompra += precioProducto; 
//     }

//     console.log(`Total de la compra del Cliente #${totalFacturas}: ${totalCompra.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}`);
//     totalVentasDia += totalCompra;

//     continuar = prompt("¿Hay otro cliente? (si/no): ");
// }


// alert(`Total de facturas del día: ${totalFacturas}`);
// alert(`Total general del día: ${totalVentasDia.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}`);

//PUNTO 11
// for (let i = 1; i <= 3; i++) {
//     let nombre = prompt(`Ingrese el nombre del Alumno #${i}:`);
//     let materia = prompt(`Ingrese la materia del Alumno #${i}:`);
    
//     let nota1 = Number(prompt("Ingrese la Nota 1:"));
//     let nota2 = Number(prompt("Ingrese la Nota 2:"));
//     let nota3 = Number(prompt("Ingrese la Nota 3:"));
    
//     let promedio = (nota1 + nota2 + nota3) / 3;

//     alert(`Nombre Alumno #${i}: ${nombre}`);
//     alert(`Materia: ${materia}`);
//     alert(`Nota 1: ${nota1}`);
//     alert(`Nota 2: ${nota2}`);
//     alert(`Nota 3: ${nota3}`);
//     alert(`Promedio: ${promedio.toFixed(1)}`);
    
// }

//PUNTO 13
// let menoresEdad = 0;
// let mayoresEdad = 0;

// for (let i = 1; i <= 10; i++) {
//     let edad = Number(prompt(`Ingrese la edad del estudiante #${i}:`));

//     if (edad >= 18) {
//         mayoresEdad++;
//     } else {
//         menoresEdad++;
//     }
// }

// alert(`Número de estudiantes menores de edad: ${menoresEdad}`);
// alert(`Número de estudiantes mayores de edad: ${mayoresEdad}`);

//PUNTO 14
// let numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Número aleatorio entre 1 y 10
// let intentos = 3;

// for (let i = 1; i <= intentos; i++) {
//     let numeroUsuario = Number(prompt(`Intento ${i}: Adivine un número entre 1 y 10:`));

//     if (numeroUsuario === numeroAleatorio) {
//         alert("¡Felicidades! Adivinaste el número.");
//         break;
//     } else {
//         if (i === intentos) {
//             alert(`Lo siento, has fallado. El número era: ${numeroAleatorio}`);
//         } else {
//             alert("Intenta nuevamente.");
//         }
//     }
// }