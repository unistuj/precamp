let persons = [
    {name:"철수", age:17},
    {name:"영희", age:22},
    {name:"도우너", age:5},
    {name:"그루트", age:65},
    {name:"도비", age:3},
    ]
undefined
for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log("성인입니다")
    }else{
        console.log("미성년자입니다")
    }
}
// VM46:5 미성년자입니다
// VM46:3 성인입니다
// VM46:5 미성년자입니다
// VM46:3 성인입니다
// VM46:5 미성년자입니다
undefined
for(let count = 0; count < persons.length; count++){
    if(persons[count].age >= 19){
        console.log(persons[count].name +"님은 성인입니다")
    }else{
        console.log(persons[count].name +"님은 미성년자입니다")
    }
}
// VM241:5 철수님은 미성년자입니다
// VM241:3 영희님은 성인입니다
// VM241:5 도우너님은 미성년자입니다
// VM241:3 그루트님은 성인입니다
// VM241:5 도비님은 미성년자입니다

const fruit = [
    {number: 1, title:"레드향"},
    {number: 2, title:"샤인머스켓"},
    {number: 3, title:"산청딸기"},
    {number: 4, title:"한라봉"},
    {number: 5, title:"사과"},
    {number: 6, title:"애플망고"},
    {number: 7, title:"딸기"},
    {number: 8, title:"천혜향"},
    {number: 9, title:"과인선물세트"},
    {number: 10, title:"귤"},
]

for(let i = 0; i< fruit.length ;i++){
    console.log(fruit[i].number + " " + fruit[i].title)
}
// VM625:2 1 레드향
// VM625:2 2 샤인머스켓
// VM625:2 3 산청딸기
// VM625:2 4 한라봉
// VM625:2 5 사과
// VM625:2 6 애플망고
// VM625:2 7 딸기
// VM625:2 8 천혜향
// VM625:2 9 과인선물세트
// VM625:2 10 귤

for(let i = 0; i< fruit.length ;i++){
    console.log(`${fruit[i].number} ${fruit[i].title}`)
}
// VM1007:2 1 레드향
// VM1007:2 2 샤인머스켓
// VM1007:2 3 산청딸기
// VM1007:2 4 한라봉
// VM1007:2 5 사과
// VM1007:2 6 애플망고
// VM1007:2 7 딸기
// VM1007:2 8 천혜향
// VM1007:2 9 과인선물세트
// VM1007:2 10 귤

for(let i = 0; i< fruit.length ;i++){
    console.log(`과일 차트${fruit[i].number}위는 ${fruit[i].title}입니다`)
}
// VM1143:2 과일 차트1위는 레드향입니다
// VM1143:2 과일 차트2위는 샤인머스켓입니다
// VM1143:2 과일 차트3위는 산청딸기입니다
// VM1143:2 과일 차트4위는 한라봉입니다
// VM1143:2 과일 차트5위는 사과입니다
// VM1143:2 과일 차트6위는 애플망고입니다
// VM1143:2 과일 차트7위는 딸기입니다
// VM1143:2 과일 차트8위는 천혜향입니다
// VM1143:2 과일 차트9위는 과인선물세트입니다
// VM1143:2 과일 차트10위는 귤입니다