let list = [
  { id: 1, name: "Eshmat1", title: "CEO" },
  { id: 2, name: "Eshmat2", title: "CTO" },
  { id: 3, name: "Eshmat3", title: "CEO" },
  { id: 4, name: "Eshmat4", title: "CTO" },
  { id: 5, name: "Eshmat5", title: "CBO" },
  { id: 5, name: "Eshmat5", title: "HR" },
];
const getSorted = () => {
  let result = {};
  list.forEach((v) => {
    result[v.title.toLowerCase()]
      ? result[v.title.toLowerCase()].push(v)
      : (result[v.title.toLowerCase()] = [v]);
  });
  return result;
};
console.log(getSorted());
