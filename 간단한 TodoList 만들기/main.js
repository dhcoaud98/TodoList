let inputValue = document.getElementById('inputBox');
let inputBtn = document.getElementById('btn');
let todoLists = document.getElementById('todoList');

// 로직
inputBtn.addEventListener('click', function(){
  let list = document.createElement('p');
  if (!inputValue.value) {
    alert('할 일을 입력해 주세요.')
  } else {
    list.innerText = inputValue.value
    todoLists.appendChild(list)
    inputValue.value = ''
  }

  // 할일 체크
  list.addEventListener('click', function(){
    list.style.textDecoration = "line-through";
  })

  // 두 번 클릭하면 삭제
  list.addEventListener('dblclick', function(){
    todoLists.removeChild(list);
  })
})