/**const, let などの変数宣言 */
/**const, let などの変数宣言 */
/**varは変数を定義できる */
var val1 = "var変数";
console.log (val1);
//var変数は上書き可能
val1 = "var変数を上書き";
console.log (val1);
//var変数は再宣言できる
var val1　= "var変数の再宣言";
console.log (val1);


/**let変数について */
let val2 = "let変数";
console.log (val2);
//let変数は上書き可能
val2 = "let関数を上書き";
console.log (val2);
// //let関数は再宣言不可能
// let val2 = "let変数再宣言"


/**const変数について */
const val3 = "const変数";
// //const関数は上書き・再宣言不可能
// val3 = "const変数の上書き"

/**const変数　オブジェクトの場合 */
const val4 = {
  name:"yuna",
  age: 25,
};
console.log (val4);
//{object}
//object.property
val4.name = "mayu";
console.log (val4);
val4.fav = "apple";
console.log (val4);
//上から順に読むわけではない。全部が上書きされている

/**const関数　配列の場合 */
const val5 = ["dog", "cat"]
console.log (val5)
val5[0]= "bird"
//追加の場合は関数.push
val5.push("monkey")
