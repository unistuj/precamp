const changeFocus1 = ()=> {
    
    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3){
        document.getElementById("p2").focus()
    }
}

const changeFocus2 = ()=> {

    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4){
        document.getElementById("p3").focus()
    }
}

const changeFocus3 = ()=> {
    let phone3 = document.getElementById("p3").value
    if(phone3.length === 4){
        document.getElementById("start").disabled = false
        document.getElementById("start").style = "color : #FFFFFF; background-color : #0068FF;"
    }
}

let isStared = false

const auth = () => {

    if(isStared == false){
        //타이머가 작동중이 아닐때
        isStared = true
        document.getElementById("finish").disabled = false

        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
    
        let time = 5
        let timer
    
        setInterval(function(){
            if(time >=0){
                let min = Math.floor(time/60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
                document.getElementById("start").disabled = true
                document.getElementById("start").style = "color : gray;"
                document.getElementById("finish").disabled = false
                document.getElementById("finish").style = "color : #FFFFFF; background-color : #0068FF"
            }
            else{
                document.getElementById("finish").disabled = true
                document.getElementById("start").disabled = false
                document.getElementById("start").style = "color : #FFFFFF; background-color : #0068FF"
                document.getElementById("finish").style = "color : gray; background-color : #FFFFFF"
                document.getElementById("timer").innerText = "3:00"
                document.getElementById("target").innerText = "000000"
                isStared = false
                clearInterval(timer)
            }
        },1000)
    } else{
        //타이머가 작동중일때
        document.getElementById("start").disabled = true
        document.getElementById("finish").disabled = false
    }
}

const end = ()=>{
    document.getElementById("finish").disabled = true
    document.getElementById("start").disabled = true
    alert("인증이 완료되었습니다.")
    document.getElementById("start").style = "color : gray; background-color : #FFFFFF"
    
    
    document.getElementById("submit").style = "color : #FFFFFF; background-color : #0068FF"
    document.getElementById("submit").disabled = false
}


const last__check = () => {
    let name1 = document.getElementById("name1").value
    let name2 = document.getElementById("name2").value
    let pw = document.getElementById("pw").value
    let re_pw = document.getElementById("re_pw").value
    let female = document.getElementById("femaleCircle").value
    let male = document.getAnimations("maleCircle").value
    let location = document.getElementById("location").value
    
    if(name1 == ""){
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
    }
    if(name2 == ""){
        document.getElementById("error__name").innerText = "이름이 올바르지 않습니다."
    }
    if(pw == ""){
        document.getElementById("error__pw").innerText = "비밀번호를 입력해 주세요."
    }
    if(re_pw == ""){
        document.getElementById("error__repw").innerText = "비밀번호를 입력해 주세요."
    }
    if((female | male) == ""){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
    }

    if(location == ""){
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
    }

    if(name1 && name2 && pw && re_pw && (female || male) && location != ""){
        alert('코드캠프 가입을 축하합니다.')
    }
}