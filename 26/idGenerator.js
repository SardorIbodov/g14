import { users } from "./index.js";

function* idGenerator() {
  let id = users.length + 1;
  while (true) {
    yield ++id;
  }
}

function getData() {
	return 1;
}

export {idGenerator, getData};