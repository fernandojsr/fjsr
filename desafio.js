// Función para mostrar "¡Hola, mundo!" en la consola
function saludarMundo() {
    console.log("¡Hola, mundo!");
  }
  
  // Función para saludar a una persona por su nombre
  function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}!`);
  }
  
  // Función para duplicar un número
  function duplicarNumero(numero) {
    return numero * 2;
  }
  
  // Función para calcular el promedio de tres números
  function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
  }
  
  // Función para encontrar el mayor de dos números
  function encontrarMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  // Función para elevar un número al cuadrado
  function elevarAlCuadrado(numero) {
    return numero * numero;
  }
  
  // Ejemplo de uso de las funciones
  saludarMundo();
  saludarPersona("Ana");
  console.log(duplicarNumero(5));
  console.log(calcularPromedio(2, 4, 6));
  console.log(encontrarMayor(10, 8));
  console.log(elevarAlCuadrado(3));
  