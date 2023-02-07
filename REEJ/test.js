/*ЗАДАЧА 1 11:40 - 12:20

function Cities(arr) {
    return arr.join(",") + ".";
  }
  console.log(Cities(["Санкт-Петербург", "Москва", "Барселона", "Кишенёв", "Тель-Авив"]));*/

/*ЗАДАЧА 2 12:20 - 12:50

function Numbers(number) {
  let rounding = number % 5;
  if (rounding === 0) {
    return number;
  } else if (rounding >= 2.5) {
    return number - rounding + 5;
  } else {
    if (rounding < 2.5) {
      return number - rounding;
    }
  }
}

console.log(Numbers(10));*/

/*ЗАДАЧА 3 13:10 - 14:13

function getComputerCase(num) {
  let lastDigit = num % 10;
  let lastTwoDigits = num % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${num} компьютеров`;
  } else if (lastDigit === 1) {
    return `${num} компьютер`;
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return `${num} компьютера`;
  } else {
    return `${num} компьютеров`;
  }
}
console.log(getComputerCase(10));*/

/*ЗАДАЧА 4 14:40 - 15:10

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  console.log(isPrime(13));*/

/*ЗАДАЧА 5 17:45 - 18:30

const values1 = ['P', 2, 'P', 1, 3, 2, 0];
const values2 = [2, 'P', 4, 5];
const values = values1.concat(values2);
const duplicates = values.filter((number, index, numbers) => {
 if (numbers.indexOf(number) !== index){
   console.log(true)
 } else { console.log(false) 
 } 
});;*/

/*ЗАДАНИЕ 6 19:00 - 20:30

function multiplicationTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += i * j + '\t';
    }
    console.log(row);
  }
}*/
