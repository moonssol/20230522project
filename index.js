import { Item } from "./item.js"; // 명시적 모듈화 한 것.
import { CircleData } from "./circleData.js";

function game(item) {
  //여기서 뭘 할까는 생각해보자~
  //가위바위보 게임을 조금 바꿔볼까? 규칙으로.
  //규칙을 한 번 고려해보자.
  //인한책임님의 경우,
  //가위-바위-보, 동그랗게 연결되어있다고 생각해보자.
  //나보다 앞에 있는 항목한테는 지고 뒤에 있는 항목한테는 이긴다.
  //나하고 같으면 비긴다.
  //동그랗게 있다 = 자료구조로 구현 가능.
  var next = items.getNext(item);
  if (item === comCurrentItem) {
    alert("비겼습니다");
  } else if (next === comCurrentItem) {
    alert("졌습니다.");
  } else {
    alert("이겼습니다.");
  }
  clearInterval(timerId);
  ClickEl.removeAttribute("disabled");
  items.getAll().forEach(function (item) {
    item.disable(true);
  });
}

var items = new CircleData([
  new Item("scissor", "가위", game),
  new Item("rock", "바위", game),
  new Item("paper", "보", game),
]);

var comCurrentItem = items.getAll()[0]; // 어디서든 접근은 가능.
var timerId;
var ClickEl = document.getElementById("Click");
var ComEl = document.getElementById("Com");

//항목 생성.
var itemButtonsEl = document.getElementById("item-buttons");

items.getAll().forEach(function (item) {
  item.render(itemButtonsEl);
});

ClickEl.onclick = function () {
  ClickEl.setAttribute("disabled", true);
  //함수를 열어서 요청받는 애가
  items.getAll().forEach(function (item) {
    item.disable(false);
  });

  timerId = setInterval(function () {
    comCurrentItem = items.getNext(comCurrentItem);
    ComEl.textContent = comCurrentItem.name;
  }, 100);
};
