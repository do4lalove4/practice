'use strict'; //構文ミスのエラーチェックが詳しくなるため、先頭に必ず置く。

// document.write("Hello World!");
// alert("Hello World!")

// console.log("Hello WorLD!"+"田中さん");
// console.log(10 + 10);
// console.log("10" + "10");

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(2 * 2);
// console.log(10 / 3);
// console.log(10 % 3);

// let x = 1;
// let y = 1;
// x++;
// console.log(x);
// y--;
// console.log(y);

// let x = 7;
// let y = x++; //xがyに代入されてからインクリメント
// let x2 = 7;
// let y2 = ++x2; //x2のインクリメントの後にy2に代入

// console.log(x);
// console.log(y);
// console.log(x2);
// console.log(y2);

// console.log(x++);
// console.log(++x);

//変数とは、値を代入するための箱
//定数とは、値を別名で定義したもの

let age = 30; //変数 let は数値を入れなおすことができる。
const name = "田中太郎"; //定数は const で宣言する。一度入れたら変更出来ない。

console.log(`nameさんの年齢はageです`); 
//変数を出力するるときは``バッククォーテーションで囲う。
console.log(`${name}さんの年齢は${age}です`)
//変数は ${変数} という形式にしないと変数として認識しない。

age = age +2;

console.log(`${name}さんの年齢は${age}です`)
//let で定義した age は四則演算などで再代入ができる。

name = "東京花子";

console.log(`${name}さんの年齢は${age}です`)
//const で定義した name　は再代入できない。

//ES6 or ES2015のバージョンから、変数の "ver 変数名" 宣言はもう使わない。
//let は可読性が低くバグも起きやすいため ES2015 からは const を使うのがセオリー
