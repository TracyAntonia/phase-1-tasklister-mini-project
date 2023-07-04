document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("create-task-form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    newToDo(e.target.new-task-description.value);
    // form.reset{};
  });


  function newToDo(todo){
    const para = document.createElement('p');
    const btn = document.createElement('button');
    btn.textContent = " X ";
    para.textContent = ` ${todo} `;
    para.appendChild(btn);
  }

});


function deleteTask(e){
  e.target.parentNode.remove();
}

