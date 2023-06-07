document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#inputBox');
  const addButton = document.querySelector('#btn');
  const todoLists = document.querySelector('#todoList');
  const alert = document.querySelector('span');

  // + 버튼 익명 화살표 함수
  const addTodo = () => {
    // 빈 값이 아니라면
    if (input.value) {
      const item = document.createElement('div')
      // 1. checkbox
      const checkbox = document.createElement('input')
      checkbox.type = 'checkbox'
      
      // 2. 할 일
      const text = document.createElement('span')
      text.textContent = input.value
      input.value = ''
      alert.textContent ='';

      // 3. 삭제 버튼
      const deleteButton = document.createElement('button')
      deleteButton.textContent = '삭제하기'

      // 추가하기
      item.appendChild(checkbox)
      item.appendChild(text)
      item.appendChild(deleteButton)
      todoLists.appendChild(item)

      // 체크 박스 체크하면 밑줄
      checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
          text.style.textDecoration='line-through'
        } else {
          text.style.textDecoration='none'
        }
      })

      // 삭제 버튼 누르면 삭제
      deleteButton.addEventListener('click', (event) => {
        todoLists.removeChild(event.currentTarget.parentNode)
      })
    } else {
      alert.textContent ='할 일을 입력 하세요!';
    }

    
  }

  // ENTER 이벤트 발생
  input.addEventListener('keypress', (event) => {
    const ENTER = 13
    if (event.keyCode === ENTER)
      addTodo();
  })

  addButton.addEventListener('click', addTodo)
})