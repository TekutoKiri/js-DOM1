function calculate(operator) {
  const num1 = document.getElementById("number1").value.trim();
  const num2 = document.getElementById("number2").value.trim();
  const resultDiv = document.getElementById("result");

  // Перевірка на пусті поля
  if (num1 === "" || num2 === "") {
    resultDiv.textContent = "Будь ласка, введіть обидва числа.";
    return;
  }

  // Спроба привести до числа
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  // Перевірка на некоректне введення
  if (isNaN(a) || isNaN(b)) {
    resultDiv.textContent = "Введено некоректні дані. Введіть лише числа.";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        resultDiv.textContent = "Ділення на нуль неможливе.";
        return;
      }
      result = a / b;
      break;
    default:
      resultDiv.textContent = "Невідома операція.";
      return;
  }

  // Округлення до сотих
  resultDiv.textContent = "Результат: " + result.toFixed(2);
}

