/* Bài tập JS 17/1  */


// Bài 1: Swich case
var x = 2;
switch(x){
    case 0:
        console.log("Thứ 2");
        break;
      case 1:
        console.log("Thứ 3");
        break;
      case 2:
        console.log("Thứ 4");
        break;
      case 3:
        console.log("Thứ 5");
        break;
      case 4:
        console.log("Thứ 6");
        break;
      case 5:
        console.log("Thứ 7");
        break;
      case 6:
        console.log("Chủ nhật");
        break;
}

// Bài 2: swich case arrays
var x = 5;
var y = ["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"];
switch(5){
    case 0:
        console.log(y[x - 5]);
        break;
      case 1:
        console.log(y[x - 4]);
        break;
      case 2:
        console.log(y[x - 3]);
        break;
      case 3:
        console.log(y[x - 2]);
        break;
      case 4:
        console.log(y[x - 1]);
        break;
      case 5:
        console.log(y[x + 0]);
        break;
      case 6:
        console.log(y[x + 1]);
        break;
}rf 


// Bài 3: Hàm kiểm tra số nguyên tố

function ktra_snt   (x)
{
    var ktr = true;

    if (x < 2){
        ktr = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < x-1; i++)
        {
            if (x % i == 0){
                ktr = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (ktr == true){
        console.log(x + " là số nguyên tố");
    }
    else{
        console.log(x + " không phải là số nguyên tố ");
    }
}
ktra_snt    (3)

// Bài 4: Ma trận

var a = [['1','1','0'],['1','0','1'],['0','1','1']];
for(var i=0; i<3; i++){
    for(var j=0;j<3; j++){
        console.log(a[i][j]+"");
    }
    console.log("<br/>");
}

// Bài 5: Hàm ktra Regex

 



