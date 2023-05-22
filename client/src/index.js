import { Item } from "./item.js";
import { CircleData } from "./circleData.js";
var clickEl = document.getElementById("click");
var comEl = document.getElementById("com");
var buttonlocation = document.getElementById("item-buttons");
var interverID;

var items = new CircleData([
  new Item("가위", games),
  new Item("바위", games),
  new Item("보", games),
]);
var comCurrentItem = items.GetAll()[0];
//가위 > 바위 > 보
function games(item) {
  //items = CircleData , item = Item
  var nextitem = items.GetNext(item);
  if (comCurrentItem == item) {
    alert("비겼습니다.");
  } else if (comCurrentItem == nextitem) {
    alert("졌습니다.");
  } else {
    alert("이겼습니다.");
  }
  clickEl.removeAttribute("disabled");
  items.GetAll().forEach(function (item) {
    item.disable(true);
    clearInterval(interverID);
  });
}

//버튼 붙이기
items.GetAll().forEach(function (item) {
  item.render(buttonlocation);
});

// 0>1>2>0>1>2 순차적으로 돌아갈 수 있게.
clickEl.onclick = function () {
  clickEl.setAttribute("disabled", false);
  items.GetAll().forEach(function (item) {
    item.disable(false);
  });
  interverID = setInterval(function () {
    comCurrentItem = items.GetNext(comCurrentItem);
    comEl.textContent = comCurrentItem.name;
  }, 100);
};
