export const getTodos = () => {
  try {
    let val = JSON.parse(localStorage.getItem("localTasks"));
    return (val);
  } catch {
    return ([]);
  }
};

export const setTodos = (p) => {
  localStorage.setItem("localTasks", JSON.stringify(p));
  console.log(typeof(p));
};


