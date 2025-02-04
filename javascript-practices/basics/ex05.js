console.log("============[01] 일반 함수");
var myFunction = function() {
    console.log('일반함수');
}

myFunction();

console.log("============[02] 생성자 함수");
var MyObject = function(age, name) { // 관례상 생성자 함수는 대문자로 시작
    console.log("MyObject constructor called");
    this.age = age;
    this.name = name;
}

var o1 = new MyObject(10, '둘리');
console.log("o1:" + typeof(o1) + ":" + (o1 instanceof MyObject));
console.log(o1);

var o2 = new MyObject(20, '마이콜');