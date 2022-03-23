function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

$(document).ready(function () {
  $("form#add").submit(function (event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1, number2);
    $("#sum").text("The sum is: " + result);
  });
  $("form#subtract").submit(function (event) {
    event.preventDefault();
    const num1 = parseInt($("#subtract1").val());
    const num2 = parseInt($("#subtract2").val());
    const result = subtract(num1, num2);
    $("#difference").text("The difference is: " + result);
  });
  $("form#multiply").submit(function (event) {
    event.preventDefault();
    const num1 = parseInt($("#multiply1").val());
    const num2 = parseInt($("#multiply2").val());
    const result = multiply(num1, num2);
    $("#product").text("The product is: " + result);
  });
  $("form#divide").submit(function (event) {
    event.preventDefault();
    const num1 = parseInt($("#divide1").val());
    const num2 = parseInt($("#divide2").val());
    const result = divide(num1, num2);
    $("#quotient").text("The quotient is: " + result);
  });
});
