let users = [
  { id: 4, name: "Ulug'bek", age: 19 },
  { id: 3, name: "Hojiakbar", age: 19 },
  { id: 1, name: "Bilol", age: 15 },
  { id: 2, name: "Muhammadjon", age: 18 },
];

//! CRUD => Create Read Update Delete
//? Create
const createUser = (object) => {
  users = [...users, { id: users.length + 1, ...object }];
};
createUser({ name: "Sardor", age: 20 });
createUser({ name: "Dilmurod", age: 17 });

//? Read
const sortByNameIncrement = () =>
  (users = users.sort((a, b) => a.name.localeCompare(b.name)));
// sortByName();

const sortByNameDecrement = () =>
  (users = users.sort((a, b) => b.name.localeCompare(a.name)));
// sortByNameDecrement();

const sortByAgeIncrement = () => (users = users.sort((a, b) => a.age - b.age));
// sortByAgeIncrement();

const sortByAgeDecrement = () => (users = users.sort((a, b) => b.age - a.age));
// sortByAgeDecrement();

const sortById = () => (users = users.sort((a, b) => a.id - b.id));
// sortById();

//? Update
const updateUser = (object) => {
  users = users.map((user) => {
    if (user.id === object.id) {
      return { ...user, ...object };
    } else return user;
  });
};
// updateUser({ id: 1, age: 16, name: "BILOL" });
// updateUser({ id: 3, age: 20 });

//? Delete
const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
};
// deleteUser(1);
// sortById();
// list = [0, 1, 2, 3, 4, 5, 6];
// const maxDiff = (list) => {
//   if (list.length <= 1) {
//     return 0;
//   } else {
//     let max = list[0];
//     let min = list[0];
//     for (let i = 0; i < list.length; i++) {
//       if (max < list[i]) max = list[i];
//       if (min > list[i]) min = list[i];
//     }
//     return max - min;
//   }
// };
// console.log(maxDiff(list));
