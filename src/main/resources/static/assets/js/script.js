// 시계 기능
function updateClock() {
  const clockElement = document.getElementById("clock");
  const currentTime = new Date();
  clockElement.textContent = currentTime.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// 명언 기능
const quoteElement = document.getElementById("quote");
const quotes = [
  "삶은 짧다. 그러니 지금 당장 행동하라. - 사무엘 존슨",
  "성공의 비결은 시작하는 것이다. - 마크 트웨인",
  "행복은 결코 남을 통해 찾아오지 않는다. 오직 자신을 통해서만 찾아올 수 있다. - 헬렌 켈러",
];
quoteElement.textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Todo List 기능
const todoInput = document.getElementById("todo-input");
const todoAddButton = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoItem = document.createElement("li");
    todoItem.textContent = todoText;
    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
}

todoAddButton.addEventListener("click", addTodo);
todoInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});

// 날씨 기능
const weatherInfo = document.getElementById("weather-info");
// 여기에 날씨 API를 사용하여 날씨 정보를 가져오는 코드를 추가하세요.

// 지하철 기능
const subwayInfo = document.getElementById("subway-info");
// 여기에 지하철 도착 정보를 가져오는 코드를 추가하세요.

// 맛집 리스트 기능
const restaurantList = document.getElementById("restaurant-list");
const restaurants = ["김밥천국", "맘스터치", "버거킹", "스타벅스", "교촌치킨"];
restaurants.forEach((restaurant) => {
  const restaurantItem = document.createElement("li");
  restaurantItem.textContent = restaurant;
  restaurantList.appendChild(restaurantItem);
});

// 사이드바 기능
const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
