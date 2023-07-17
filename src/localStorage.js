export const getLocalStorage = (toDo) => {
  if (localStorage.getItem('toDo')) {
    toDo.list = JSON.parse(localStorage.getItem('toDo'));
    toDo.list.forEach(element => {
      toDo.createToDo(element);
    });
  }
};

export const saveLocalStorage = (toDo) => {
  localStorage.setItem('toDo', JSON.stringify(toDo.list));
};
