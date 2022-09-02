export const getTodos = () => {
  if (localStorage.getItem("localTasks") === null){
    return ([]);
  } else {
  return (JSON.parse(localStorage.getItem("localTasks")));
  }
};

export const setTodos = (p) => {
  localStorage.setItem("localTasks", JSON.stringify(p));
};


