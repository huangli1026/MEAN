// Model => Retrieve, store, process data
// View => User interface
// Controller => Manage view and data & handle uers actions

const Api = (() => {
  // Fetch data from server
  const url = "https://jsonplaceholder.typicode.com/todos";
  const getData = fetch(url).then((res) => res.json());
  return {
    getData,
  };
})();

const View = (() => {
  const domStr = {
    container: ".todolist_container",
    inputBox: "#user-input",
    addBtn: "#addBtn",
  };

  const creatTmp = (arr) => {
    let tmp = "";
    arr.forEach((todo, index) => {
      tmp += `<li>
      <span>${todo.title}</span>
      <button class="deleteBtn" id="${index}">X</button>
      </li>`;
      domStr.index = index;
    });
    console.log(domStr)
    return tmp;
  };

  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };

  return {
    domStr,
    creatTmp,
    render,
  };
})();

const Model = ((view, api) => {
  // const todos =[
  //   { title: 'Movie' },
  //   { title: 'Lunch' },
  //   { title: 'Homework' },
  //   { title: 'Take a nap' },
  // ];
  const { getData } = api;

  const { domStr, creatTmp, render } = view;

  class State {
    constructor() {
      this._todoList = [];
    }
    get getTodoList() {
      return this._todoList;
    }
    set newTodoList(arr) {
      this._todoList = arr;
      const todoContainer = document.querySelector(domStr.container);
      const tmp = creatTmp(this._todoList);
      render(todoContainer, tmp);
    }
  }

  return {
    // todos,
    getData,
    State,
  };
})(View, Api);

const Controller = ((view, model) => {
  const { getData, State } = model;
  const { domStr } = view;

  const state = new State();
  const init = () => {
    getData.then((data) => {
      state.newTodoList = data;
    });
  };

  // Add event listener
  const addTodo = () => {
    const userInput = document.querySelector(domStr.inputBox);
    const btn = document.querySelector(domStr.addBtn);
    btn.addEventListener("click", () => {
      let item = {
        title: userInput.value,
      };
      const newTodos = [item, ...state.getTodoList];
      state.newTodoList = newTodos;
      userInput.value = "";
    });
  };
  const deleteTodo = (index) => {
    const container = document.querySelector(domStr.container);
    container.addEventListener("click", (event) => {
      if (event.target.className === "deleteBtn") {
        const index = event.target.getAttribute("id")
        // const newTodos = [...state.getTodoList()];
        // newTodos = newTodos.splice(index, 1)
        // state.newTodoList = newTodos.splice(+index, 1);
        const newTodos=state.getTodoList.filter((item, indx)=>indx!==+index)
        state.newTodoList=newTodos

      }
      // const newTodos=[...state.getTodoList];
      // newTodos=newTodos.splice(index, 1)
      // state.newTodoList=newTodos;
    })
  }

  const bootstrap = () => {
    init();
    addTodo();
    deleteTodo();
  }

  return {
    bootstrap
  }
})(View, Model);

Controller.bootstrap();