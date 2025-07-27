/* Todo 인터페이스를 선언함으로써 {id: number; title: string; done:boolean} 을 대신해서 Todo를 사용할 수 있다.
   타입 스크립트 참조타입 연습을 위한 코드로써 각각에 타입을 선언 할 수 있다.
*/
interface Todo {
  id: number;
  title: string;
  done: boolean;
}

const todoItems: Todo[];

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: "안녕", done: false },
    { id: 2, title: "타입", done: false },
    { id: 3, title: "스크립트", done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): Todo[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): Todo {
  return todoItems[0];
}

function showCompleted(): Todo {
  return todoItems.filter((item) => item.done);
}

function addTwoTodoItems(): void {
  // addTodo로 객체 타입 저장
  addTodo({ id: 4, title: "타입 정의", done: false });
  addTodo({ id: 5, title: "복습", done: false });
}

// NOTE: 유틸 함수, 로그를 출력함
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
