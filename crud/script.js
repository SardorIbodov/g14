import { users } from "./base.js";
let base = users;
const content = document.querySelector(".content");

//! Delete
const display = (data) => {
  content.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("h1");
    const nameInput = document.createElement("input");
    let editedName = data[i].name;
    nameInput.value = editedName;
    nameInput.addEventListener("input", (e) => {
      editedName = e.target.value;
    });
    const ageInput = document.createElement("input");
    ageInput.setAttribute("type", "number");
    let editedAge = data[i].age;
    ageInput.value = editedAge;
    ageInput.addEventListener("input", (e) => {
      editedAge = e.target.value;
    });
    const phoneInput = document.createElement("input");
    let editedPhone = data[i].phone;
    phoneInput.value = editedPhone;
    phoneInput.addEventListener("input", (e) => {
      editedPhone = e.target.value;
    });
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const saveButton = document.createElement("button");
    saveButton.innerText = "save";
    const cancelButton = document.createElement("button");
    cancelButton.innerText = "cancel";
    const onDelete = (id) => {
      base = base.filter((v) => v.id !== id);
      display(base);
    };
    const onEdit = (id) => {
      base = base.map((v) => (v.id === id ? { ...v, isEdited: true } : v));
      display(base);
    };
    const onCancel = (id) => {
      base = base.map((v) => (v.id === id ? { ...v, isEdited: false } : v));
      display(base);
    };
    const onSave = (id) => {
      base = base.map((v) =>
        v.id === id
          ? {
              ...v,
              name: editedName,
              age: editedAge,
              phone: editedPhone,
              isEdited: false,
            }
          : v
      );
      display(base);
    };
    saveButton.addEventListener("click", () => onSave(data[i].id));
    cancelButton.addEventListener("click", () => onCancel(data[i].id));
    deleteButton.innerText = "delete";
    deleteButton.addEventListener("click", () => onDelete(data[i].id));
    editButton.innerText = "edit";
    editButton.addEventListener("click", () => onEdit(data[i].id));
    if (!data[i].isEdited) {
      div.innerText = `${data[i].id}. ${data[i].name} | ${data[i].age} yosh | ${data[i].phone}`;
    } else {
      div.append(nameInput);
      div.append(ageInput);
      div.append(phoneInput);
      div.append(saveButton);
      div.append(cancelButton);
    }
    if (!data[i].isEdited) {
      div.append(editButton);
    }
    div.append(deleteButton);
    content.append(div);
  }
};
display(base);

//! Read
const selectSort = document.querySelector("#sort");
selectSort.addEventListener("input", (e) => {
  sort(e.target.value);
});
const sort = (sortType) => {
  switch (sortType) {
    case "name":
      {
        base = base.sort((a, b) => a.name.localeCompare(b.name));
      }
      break;
    case "id":
      {
        base = base.sort((a, b) => a.id - b.id);
      }
      break;
    case "age":
      {
        base = base.sort((a, b) => a.age - b.age);
      }
      break;
  }
  display(base);
};
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (e) => {
  searchByName(e.target.value);
});
const searchByName = (name) => {
  let searched = base.filter((v) =>
    v.name.toLowerCase().includes(name.toLowerCase())
  );
  display(searched);
};

//! Create
const newNameInput = document.querySelector("#newName");
let newName;
newNameInput.addEventListener("input", (e) => {
  newName = e.target.value;
});
const newAgeInput = document.querySelector("#newAge");
let newAge;
newAgeInput.addEventListener("input", (e) => {
  newAge = e.target.value;
});
const newPhoneInput = document.querySelector("#newPhone");
let newPhone;
newPhoneInput.addEventListener("input", (e) => {
  newPhone = e.target.value;
});
function* generateId() {
  let id = base.length;
  while (true) {
    yield ++id;
  }
}
let newId = generateId();
const addBtn = document.querySelector("#add");
const addUser = () => {
  if (newName.trim() && newAge && newPhone.trim())
    base = [
      ...base,
      {
        id: newId.next().value,
        name: newName,
        age: newAge,
        phone: newPhone,
        isEdited: false,
      },
    ];
  display(base);
};
addBtn.addEventListener("click", () => {
  addUser();
  newNameInput.value = "";
  newAgeInput.value = "";
  newPhoneInput.value = "";
});
