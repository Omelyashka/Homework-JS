// №1
// let a = +prompt("Number1");
// let b = +prompt("Number2");
// var max = (a + b < 4) ? alert("Мало") : alert("Много");
// №2
// let login = prompt("Login?");
// var max = (login == "Вася") ? alert("Привет") : (login == "Директор") ? alert("Здравствуйте") : (login = " ") ? alert("Нет логина") : alert(" ");
// №3
// Сума
// let a = +prompt("Напишите первое число");
// let b = +prompt("Напишите второе число");
// var z = 0;
// if (a < b) {
//     for (let i = a+1; i < b; i++) {
//         z += i;
//     };
//     alert( z );
// } else if (a > b) {
//     for (let i = b+1; i < a; i++) {
//         z += i;
//     };
//     alert( z );
// } else {
//     alert("Обновите страницу и попробуйте снова")
// }
// Нечётные числа
// let a = +prompt("Напишите первое число");
// let b = +prompt("Напишите второе число");
// if (a < b) {
//     for (let i = a+1; i < b; i++) {
//         if (i%2 == 0) continue;
//         document.write(i + " ");
//     };
// } else if (a > b) {
//     for (let i = b+1; i < a; i++) {
//         if (i%2 == 0) continue;
//         document.write(i + " ");
//     };
// } else {
//     alert("Обновите страницу и попробуйте снова")
// } 
// №4
// Прямоугольник
let a = +prompt("Height", 5);
let b = +prompt("Width", 5);
for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
        if (i == 0 || i == a-1) {
            document.write("*");
        }
        else {
            if (j == 0 || j == b-1){
                document.write("*");
            }
            else{
                    document.write("..");
                }
            }
        }
    document.write("<br>");
}

// Треугольник
// let a = +prompt("Height", 5);
// let b = +prompt("Width", 5);
// let z = b-1;

// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < b; j++) {
//         if ( j < z) {
//             document.write(" ");
//         }
//         else{ 
//             document.write("* ");
//         } 
//     } 
//     z--;
//     document.write("<br>")
// }
