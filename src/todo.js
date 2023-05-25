const inputval = document.querySelector(".inputBox");
const notcompleted = document.querySelector(".notCompleted");
const completed = document.querySelector(".Completed");

function addTask() {
  if (inputval.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputval.value;
    notcompleted.appendChild(li);
    inputval.value = "";

    const editBtn = document.createElement("button");
    const checkBtn = document.createElement("button");
    const delBtn = document.createElement("button");

    delBtn.innerHTML = '<i class="fa fa-trash"></i>';
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';

    li.appendChild(delBtn);
    li.appendChild(checkBtn);
    li.appendChild(editBtn);

    //edit button

    editBtn.addEventListener("click", () => {
      const parent = this.parentNode;
      parent.remove();
      inputval.appendChild(parent);
    });

    // check button
    checkBtn.addEventListener("click", () => {
      const parent = this.parentNode;
      parent.remove();
      completed.appendChild(parent);
    });
    // delete button
    delBtn.addEventListener("click", () => {
      const parent = this.parentNode;
      parent.remove();
    });
  }
}

// function addList(e){

//     const completed = document.querySelector('.Completed');
//     const newLi = document.createElement('li');
//     const editBtn = document.createElement('button');
//     const checkBtn = document.createElement('button');
//     const delBtn = document.createElement('button');

//     editBtn.innerHTML = '<i class="fa fa-edit"></i>';
//     checkBtn.innerHTML = '<i class="fa fa-check"></i>';
//     delBtn.innerHTML = '<i class="fa fa-trash"></i>';

//     if(inputval.value !== ''){
//         newLi.textContent = inputval.value;
//         inputval.value = ' ';
//         notcompleted.appendChild(newLi);
//         newLi.appendChild(editBtn);
//         newLi.appendChild(checkBtn);
//         newLi.appendChild(delBtn);
//     }
