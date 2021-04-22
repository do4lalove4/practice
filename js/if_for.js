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

function scorecheck() {
    let testscore = document.getElementById('score').value
    if (testscore >= 80) {
        document.write("合格です！おめでとうございます！");
    }   else if (testscore >= 70) {
        document.write("惜しい！あと少し！");
    }   else {
        document.write("不合格です！もう少し勉強しましょう！");
    }
}

if (testscore >= 80) {
    document.write("合格です！おめでとうございます！");
}   else if (testscore >= 70) {
    document.write("惜しい！あと少し！");
}   else {
    document.write("不合格です！もう少し勉強しましょう！");
}

//const namelist = ["田中さん","山田さん","林さん","砂糖さん"];

// console.log(namelist[0]);
// console.log(namelist[1]);
// console.log(namelist[2]);

// for (let i = 0; i < namelist.length; i++){
//     console.log(`${i+1}.${namelist[i]}`);
// }


//continue文 forループ(let iが0; iが10以下の時; iに+1ずつ) {
//                 if(iを2で割ったとき余り===0の時)　には実行しない;
//                 ログに(i)を表示する; }
// for (let i = 0; i < 10; i++) {
//     if(i % 2 === 0) continue;
//     console.log(i);
// }


//break文 forループ(let iが1; 1が1000より小さい時; iに+1ずつ)
//              if(1が10より大きい場合) forループをブレイクして抜ける;
//              ログにiを表示する;
// for (let i = 1; i < 1000; i++) {
//     if(i > 10) break;
//     console.log(i);
// }