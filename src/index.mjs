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

/**テンプレート文字列 */
const name = "yuna";
const age = "25";
const message = `My name is ${name}. My age is ${age}.`;
console.log (message);

/**arrow関数*/
/**const function.name = (引数)　=> {関数を定義} */
const func1 = (num1) => {
  return num1;
}
console.log (func1(1));
/**定義する関数が一つだけ＋最後returnで返す時、{}省略可能 */
const func2 = (num2) => num2;
console.log (func2(13));


/**分割代入 */
const profile = {
  name: "Yuna",
  age: "25",
};
const message1 = `My name is ${profile.name}. My age is ${profile.age}.`;
console.log (message1);

/**分割代入を使うと{profile.}を書かなくて良くなる */
const { name, age } = profile;
const message2 = `My name is ${name}. My age is ${age}.`
console.log (message2);

const fruits = ["apple", "orange"];
const [fav1, fav2] = fruits;
const message3 = `I like both ${fav1} and ${fav2}.`;
console.log (message3)

/**デフォルトの値 */
const sayHello = (name) => console.log (`Hello,${name}`);
sayHello("Yuna");
sayHello();
/**undefinedからデフォルトの値を変えたい場合 */
/**引数＝xxxxと入れておく */
const sayHello2 = (name = "guest") => console.log (`Hello,${name}`);
sayHello2();

/**スプレッド関数 ...*/
/**配列についてできること３つ */
/**配列の展開 */
const scores = [10, 20];
const sumscores = (num1, num2) => console.log (num1 + num2);
// sumscores(scores[0], scores[1]);
sumscores (...scores);

/**配列をまとめる */
const scores2 = [10, 20, 30, 40, 50];
const [num1, num2, ...arr1] = scores2;
console.log (arr1);

/**配列のコピー */
/**スプレッド関数を用いてコピーするとコピー元を編集しても反映されない。 */
const arr4 = [10,20];
const arr5 = [...arr4];
const arr6 = arr4
arr4[1]=30;
console.log (arr4);
console.log (arr5);
console.log (arr6);
