//동그랗게 되어있는 자료구조를 만들어보기.

export function CircleData(items) {
  //items라는 배열 받음.
  this.items = items; //배열로 관리 할거야.
}
CircleData.prototype.getAll = function () {
  return this.items;
}; //함수만들어서 모든 항목 제공해주기.
CircleData.prototype.getNext = function (item) {
  // 누구 다음인지는 알려줘야 해.
  //
  var index = this.items.indexOf(item); // 인덱스 찾아오는 함수
  var next = this.items[index + 1]; //index가 max 값이면 undifined가 나옴.
  return next ? next : this.items[0]; // next 있니? 있으면 반환, 없으면 items[0] 반환.
};
