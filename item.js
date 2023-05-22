//가위, 바위, 보 중 하나를 나타내는 애
//애들이 전부 다 공통화되어 쓸 수 있는 애.
//객체지향 프로그램 (class)으로 해보자.
//es5에서는 class 개념이 없으니 function으로 하자.

//클래스의 생성자 함수 만들기.

//모듈시스템 es6에서의 export
export function Item(key, name, onClick) {
  this.key = key;
  this.name = name;
  //이거 하는 이유는? 확인해보자

  //버튼 만들기. (가위 / 바위 / 보) > div tag 아래 넣기.
  this.buttonEl = document.createElement("button");
  this.buttonEl.textContent = name;

  var _self = this;

  //버튼 클릭에 대한 이벤트 핸들링. (가위 바위 보에 대한 동작 짜보기)
  this.buttonEl.onclick = function () {
    //외부에서 주입된 onclick 함수를 실행하는 용도로만 셋팅.

    onClick(_self); //내가 뭘 클릭했는지 알려줘야 함.
    //onClick(this.key) 진행 시 button의 key가 딸려 옴.
    //java의 this 는 c#의 this(클래스!)와 다름
    //이 상황에서는 bind로 해 줄 수도 있고, this를 _self 등에 담아줄 수도 있음.

    //함수를 호출해주는 호출자가 this.

    //but, name을 구분자로 활용하진 않아. key or id를 넣어주는게 좋아.
  };
}

//es5에서 멤버함수로 넣기 위해 prototype 선언 필요.
Item.prototype.render = function (parentEl) {
  //parent.element가 왔다고 생각하고,
  parentEl.append(this.buttonEl);
};

Item.prototype.disable = function (value) {
  if (value == true) {
    this.buttonEl.setAttribute("disabled", true);
  } else {
    this.buttonEl.removeAttribute("disabled");
  }
};
