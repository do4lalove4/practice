'use strict' //←必ず書く

let i = 2;
if (i === 1) {
    console.log("真です")
};

//== の場合は、左右を比較して、データ型が違っても
//一致するデータ型に変換した後に比較する。
//if (i == "1") 1が文字型認識でも数値型にして比較してくれる。

//=== の場合は、左右を比較して、データ型が違う場合
//等しくないという判断がされる。
//if (1 === "1")1が文字型認識なので絶対比較しない。

let testscore = 60;
if (testscore >= 80) {
    document.write("合格です！おめでとうございます！");
}   else if (testscore >= 70) {
    document.write("惜しい！あと少し！");
}   else {
    document.write("不合格です！もう少し勉強しましょう！");
}

const namelist = ["田中さん","山田さん","林さん","砂糖さん"];

// console.log(namelist[0]);
// console.log(namelist[1]);
// console.log(namelist[2]);

for (let i = 0; i < namelist.length; i++){
    console.log(namelist[i]);
}