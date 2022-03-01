/*

Operador: && https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? Por qué ?

*/

if (4 > 3 && 6 > 5) {
    console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
    console.log("Esta condición también se cumple?");

}

// En el terminal solo se va a ver "esta condicion se cumple" la segunda no se va a ver ya que -1 no es mayor que 0. Al no cumplirse una de las dos condiciones el mensaje no se muestra.