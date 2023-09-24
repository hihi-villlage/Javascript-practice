// /**const, let などの変数宣言 */
// /**const, let などの変数宣言 */
// /**varは変数を定義できる */
// var val1 = "var変数";
// console.log (val1);
// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log (val1);
// //var変数は再宣言できる
// var val1　= "var変数の再宣言";
// console.log (val1);

// /**let変数について */
// let val2 = "let変数";
// console.log (val2);
// //let変数は上書き可能
// val2 = "let関数を上書き";
// console.log (val2);
// // //let関数は再宣言不可能
// // let val2 = "let変数再宣言"

// /**const変数について */
// const val3 = "const変数";
// // //const関数は上書き・再宣言不可能
// // val3 = "const変数の上書き"

// /**const変数　オブジェクトの場合 */
// const val4 = {
//   name:"yuna",
//   age: 25,
// };
// console.log (val4);
// //{object}
// //object.property
// val4.name = "mayu";
// console.log (val4);
// val4.fav = "apple";
// console.log (val4);
// //上から順に読むわけではない。全部が上書きされている

// /**const関数　配列の場合 */
// const val5 = ["dog", "cat"]
// console.log (val5)
// val5[0]= "bird"
// //追加の場合は関数.push
// val5.push("monkey")

// /**テンプレート文字列 */
// const name = "yuna";
// const age = "25";
// const message = `My name is ${name}. My age is ${age}.`;
// console.log (message);

// /**arrow関数*/
// /**const function.name = (引数)　=> {関数を定義} */
// const func1 = (num1) => {
//   return num1;
// }
// console.log (func1(1));
// /**定義する関数が一つだけ＋最後returnで返す時、{}省略可能 */
// const func2 = (num2) => num2;
// console.log (func2(13));

// /**分割代入 */
// const profile = {
//   name: "Yuna",
//   age: "25",
// };
// const message1 = `My name is ${profile.name}. My age is ${profile.age}.`;
// console.log (message1);

// /**分割代入を使うと{profile.}を書かなくて良くなる */
// const { name, age } = profile;
// const message2 = `My name is ${name}. My age is ${age}.`
// console.log (message2);

// const fruits = ["apple", "orange"];
// const [fav1, fav2] = fruits;
// const message3 = `I like both ${fav1} and ${fav2}.`;
// console.log (message3)

// /**デフォルトの値 */
// const sayHello = (name) => console.log (`Hello,${name}`);
// sayHello("Yuna");
// sayHello();
// /**undefinedからデフォルトの値を変えたい場合 */
// /**引数＝xxxxと入れておく */
// const sayHello2 = (name = "guest") => console.log (`Hello,${name}`);
// sayHello2();

// /**スプレッド関数 ...*/
// /**配列についてできること３つ */
// /**配列の展開 */
// const scores = [10, 20];
// const sumscores = (num1, num2) => console.log (num1 + num2);
// // sumscores(scores[0], scores[1]);
// sumscores (...scores);

// /**配列をまとめる */
// const scores2 = [10, 20, 30, 40, 50];
// const [num1, num2, ...arr1] = scores2;
// console.log (arr1);

// /**配列のコピー */
// /**スプレッド関数を用いてコピーするとコピー元を編集しても反映されない。参照元が異なるので */
// const arr4 = [10,20];
// const arr5 = [...arr4];
// const arr6 = arr4
// arr4[1]=30;
// console.log (arr4);
// console.log (arr5);
// console.log (arr6);

/**map, fiilterを使って配列処理 */
/**中身はarrow関数 */
/**mapは中身にreturnが入っていて、順に配列を処理するイメージ */
// const NameArr = ["Yuna", "Nao", "Kenji", "Yasuko"];
// console.log (NameArr);
// // const NewNameArr = NameArr.map((name)=>console.log(`I am ${name}`));
// /**indexとindex番号は、index, index番号　の順でとる？　出力順は、Yuna~Yasuko, 0~3の様子 */
// const Namemap = NameArr.map((himufam, index)=>{
//     console.log(`${himufam} is ${index+1}`)
// });

// /**filterは中身にifが入って、順に配列を処理するイメージ。return必要 */
// /** === は　イコール */
// const NumArr =[1, 2, 3, 4, 5]
// const Numfilter = NumArr.filter((num)=>{
//    return num % 2 === 0
// });
// console.log (Numfilter);

// /**例）Yunaだけ呼び捨てにして出力してみる */
// const Namesan_map = NameArr.map ((name) => {
//     if (name === "Yuna"){
//         return "Yuna"
//     }else {
//         return `${name}さん`}
// });
// console.log (Namesan_map);

/**三項演算子 */
/**if関数が楽にかけるが処理がやや重い */
/**　条件 ? true action : false action */
/** 例）金額が数値かどうか、数値であれば三桁区切りにする */
// const num = 1900 //数値
// const formattedNum = typeof num === 'number' ? num.toLocaleString(num) : `enter the number`
// //typeof で型がわかる
// //toLocaleStringで三桁区切り。文字列の時はそのまま返す
// console.log (formattedNum);

// /**例）合計値が１００を超えるか確かめる */
// const checksum = (num1, num2) => {
//     return num1 + num2 < 100 ? 'under 100' : 'over 100';
// };
// console.log (checksum (80, 90));

/**論理演算子について */
/** AA || BBは AA or BB の意味
 * 実は　 AA = true　ならAA返す、　AA = falseならBB返す　返すことをしている */
/** AA && BB は且つ
 * 実は　AA = true ならBB返す、BB = true なら　AA返す　ことをしている
 */
/**左から右の流れ */

// const num = 1900
// const fee_or = num || "金額未設定です";
// console.log (fee_or);

// const fee_and = num && "何か金額入ってます";
// console.log (fee_and);

// const flag1 = true
// const flag2 = false
// const judge_or = flag1 || flag2;  //flag1 = true なのでflag1を返す
// console.log (judge_or);

// const judge_and = flag1 && flag2;
// console.log (judge_and); //flag1 = true なのでflag2を返す
