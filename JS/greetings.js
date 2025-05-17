const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const loginText = document.querySelector("#login-text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  //TODO관련 로그인 시 투두 생성
  todoText.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
  //로그인 시 로그인 텍스트 제거
  loginText.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  const date = new Date();
  const hours = date.getHours();
  if (hours >= 5 && hours < 12) {
    greeting.innerText = `Good morning, ${username}.`;
  } else if (hours >= 12 && hours < 18) {
    greeting.innerText = `Good afternoon, ${username}.`;
  } else if (hours >= 18 && hours < 22) {
    greeting.innerText = `Good evening, ${username}.`;
  } else {
    greeting.innerText = `Why aren't you sleeping ${username}?`;
  }
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
//유저 정보 없으면 로그인 텍스트 표시
if (savedUsername === null) {
  loginText.classList.remove(HIDDEN_CLASSNAME);
}
