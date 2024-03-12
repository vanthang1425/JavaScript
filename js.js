const result = (num) => {
    return num%2 === 1;
}

console.log(result(4))


var sachs = [
    {
        tacgia: 'Harper Lee',
        tieude: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    },
    {
        tacgia: 'Ray Brandbury',
        tieude: 'Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false
    }
]

console.log(sach[0].tacgia);

console.log(sachs[0]);
console.log(sachs[1]);


// So lon nhat va so be nhat

function ktraln(arr) {
    var min = arr[0];
    var max = arr[0];
    for (let i=1; i<arr.length; i++) {
      if (arr[i] < min){
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
    return [max,min];
  }
  console.log(ktraln([-2,4,5,6]));


//Bai 2 Tim chu dai nhat

function chudainhat (sentence) {
    const words = sentence.slip(' ');

    let maxLength = 0;
    let chudai = ' ';

    for (let i = 0 ; i < words.length; i ++)(
        let kitu = words[i];
        let doDai = kitu.length;

        if ( doDai > maxLength) {
            maxLength = doDai

        }
    )
}








function plusAll() {
    var res = 0;
    for(var i in arguments) {
        rest += arguments[i];
    }
    return res;
}




































