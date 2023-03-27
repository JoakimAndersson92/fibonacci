function fibs(num) {
    let array = []
    if (num <= 1) {
        array.push(0)
        return console.log(array)
    }
    let calc = 0
    for (let i = 0; i < num - 1; i++) {
        if (i === 0) {
            array.push(0)
            array.push(1)
            calc = array[i] + array[i + 1]
            array.push(calc)
            i = 1
        }
        else {
            calc = array[i - 1] + array[i]
            array.push(calc)
        }

    }
    console.log(array)
}

function fibsRec(num, array = []) {
    if (num <= 0) {
      return array;
    }
    if (array.length < 2) {
      array.push(0, 1);
    } else {
      const sum = array[array.length - 1] + array[array.length - 2];
      array.push(sum);
    }
    return fibs(num - 1, array);
  }
  

fibsRec(8)