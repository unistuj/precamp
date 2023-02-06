1+1
// 2
1+ "만원"
// '1만원'
1+"1"
// '11'
1-'1'
// 0
"코드"+"캠프"
// '코드캠프'
"123" ==123
// true
"123"===123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false

// 조건문실습
if(1+1 === 2){
    console.log("정답입니다")
}else {
    console.log("틀렸습니다")
}
// VM6065:2 정답입니다
// undefined
if(true){
    console.log("정답입니다")
}else {
    console.log("틀렸습니다")
}
// VM6112:2 정답입니다
// undefined
if(!true){
    console.log("정답입니다")
}else {
    console.log("틀렸습니다")
}
// VM6140:4 틀렸습니다
// undefined
if(0){
    console.log("정답입니다")
}else {
    console.log("틀렸습니다")
}
// VM6176:4 틀렸습니다
// undefined
if(1){
    console.log("정답입니다")
}else {
    console.log("틀렸습니다")
}
// VM6210:2 정답입니다

//조건문 실습 2

const frofile = {
    name:"철수",
    age:12,
    school:"다람쥐초등학교",
}
// undefined
if(frofile.age >= 20){
    console.log("성인입니다")
}else if(frofile.age >= 8){
    console.log("학생입니다")
}else if(frofile.age >=1){
    console.log("어린이입니다")
}else{
    console.log("오류")
}
// VM115:4 학생입니다