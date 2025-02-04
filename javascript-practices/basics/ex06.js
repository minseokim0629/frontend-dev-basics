var o = {
    name: "둘리",
    age: 10
};

var f = function() {
    console.log("Hello World");
};



console.log("============object 타입의 확장");
o.another = {
    age: 20,
    name: "마이콜",
    print: function() {
        console.log(this.age + ":" + this.name);
    }
};
o.another.print();

console.log("============function 타입의 확장");
f.another = {
    age: 20,
    name: "마이콜",
    print: function() {
        console.log(this.age + ":" + this.name);
    }
};
f.another.print();

console.log("============기본 타입(primitive type)은 확장되지 않는다");
var i1 = 10;
var i2 = new Number(20);
console.log(i1 + ":" + i2 + ":" + (i1 + i2));
i2.another = {
    name: "마이콜",
    age: 20
};
console.log(i2.another);

i1.another = {}; // 실행할 때 유사객체가 되는 것. 행이 끝나면 이 객체는 사라짐 -> new Number(i1).another = {};
console.log(i1.another); // 객체가 사라졌으니 undefined 출력. 에러가 나지 않는 이유는 이때도 유사객체를 생성하기 때문 -> new Number(i1).another