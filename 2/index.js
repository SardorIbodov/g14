//! Type conversion
//? String =><= Number
// const str = "12";
// console.log(str, typeof str);
// 1
// const num = +str;
// console.log(num, typeof num);
// 2
// const num = Number(str);
// console.log(num, typeof num);
// 3
// const num = 12;
// console.log(num, typeof num);
// const str = `${num}`;
// console.log(str, typeof str);
// 4
// const str = String(num);
// console.log(str, typeof str);
//! Problems
//! NaN => Not a Number
// const str = "1.2abc";
// console.log(+str);
// console.log(Number(str));
// console.log(Number.parseFloat(str));
// console.log(Number.parseInt(str));
// console.log(parseFloat(str));
// console.log(parseInt(str));

//! Boolean
//? true => true, raqam(0 dan boshqa), string("" dan boshqa), {}, [], function()
//? falsy => false ,0, undefined, null, "",  NaN
// const num = 12;
// const num = -12;
// const num = 0;
// const num = 0.5;
// const num = "";
// const num = "salom";
// const num = " ";
// const num = {};
// const num = [];
// const num = function sayHello() {};
// const num = undefined;
// let num;
// const bool = Boolean(num);
// console.log(bool);

//! Operators
// const a = 1;
// const b = "2";
//! +, -, /, *, %, **, ++, --
// oldidan => prefix
// orqasidan => postfix
// let a = 1;
// a++; // a = a + 1
// a--; // a = a - 1
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(a--);
// console.log(a);
// console.log(--a);
// console.log(a + +b);
// console.log(typeof (a * b));
// console.log(a / b);
// console.log(a - b);
// console.log(4 % 3);
// console.log(5 % 3);
// console.log(6 % 3);
// console.log("6" % 3 + 1);
// console.log(2 * 2 * 2 * 2 * 2);
// console.log(2 ** 5);
// let a = 2;
// let b = 2;
// let c = 5;
// console.log(a++ - ++b * ++c);
// 2++ - 18

//! Comparison
//? <, >, <=, >=, ==(faqat qiymatlarni tekshiradi), ===(ham qiymat, ham type)
//? 0 => false, ""
//? 1 => true
// console.log(1 > 2);
// console.log(1 < 2);
// console.log(2 <= 2);
// console.log(2 >= 2);
// console.log(3 >= 2);
// console.log(1 <= 2);
// const a = 2;
// const b = 1;
// console.log(a == b);
// console.log(a === b);
// console.log(Boolean(2));
// console.log(true == 1);
// console.log(0 == false);
// console.log(0 == null);
// console.log(0 == undefined);
// console.log(1 == {});
// console.log(1 == []);
// console.log(0 == "");

//! Logical(mantiqiy operatorlar)
//? || (or) => yoki
// console.log(true || false);
// console.log(false || false);
// console.log(false || 0);
// console.log(false || 2);
// console.log(true || 2);
// console.log(2 || true);
// console.log([] || true);
// console.log({} || true);
// console.log("" || 0 || "salom" || 1 || true);

//? && (and) => va
// console.log(0 && false);
// console.log(1 && false && 0);
// console.log(1 && true && [] && "salom");
// console.log(false && 0);

//? mixed
// console.log(typeof (false || 1 && ""));
// console.log(typeof (false || 1 && ""));
// console.log("salom" && 5 && 0 || true && 2 || []);

//!
// console.log(!true);
// console.log(!false);
// console.log(!1);
// console.log(!-1);
// console.log(!"");
// console.log(!{});
// console.log(![]);
// console.log(!![]);
// console.log(!undefined);
// console.log(!null);
// console.log(!NaN);

// Problem
// const bool = true;
// console.log(typeof bool);
// const str = String(bool);
// console.log(str);
// const str = `${bool}`
// console.log(typeof str);

// console.log("6" + "2");
// console.log("6" / "2");
// console.log("6" * "2");
// console.log("6" - "2");
// console.log("6" % "2");
// console.log("6abs" * "2");
// console.log("6abs" - "2");
// console.log("6abs" % "2");
// console.log("6abs" / "2");
// console.log("6abs" + "2");

//! Abbriviation
// let a = 2;
// a = a * 2;
// a *= 2;
// a += 2;
// a -= 2;
// a /= 2;
// console.log(a);
// console.log("" + 1 + 0);
// console.log(null + 1);
// console.log(undefined + 1);