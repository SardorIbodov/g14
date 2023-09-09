//! Curry function
// const getData = () => {
// 	console.log("Tashqi funksiya ishladi");
// 	return () => {
// 		console.log("Ichki funksiya ishladi");
// 	}
// }
// getData()()

//! getData(1)(2)(3) => 1 + 2 + 3
// const getData = (a) => {
//   return (b) => {
//     return (c) => {
//       console.log(a + b + c);
//     };
//   };
// };
// getData(1)(2)(3);

//! getData()()()()()....
// const getData = (a) => {
//   return (b) => {
//     if (b) return getData(a + b);
//     else console.log(a);
//   };
// };
// getData(1)(2)(3)(4)(5)();
