
export function getPercents(percent, number) {
    if (percent < 0) {
      let error = "Ошибка!! Ответ отрицательный";
      console.log(error);
  
      return error;
    }
  
    let result = (number / 100) * percent;
    console.log(result);
  
    return result;
  }
  
  getPercents(50, 100);