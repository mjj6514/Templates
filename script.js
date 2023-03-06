

function passWord() {

    var pass1 = prompt('암호를 입력하십시오','암호를 입력하세요');

    while (true) {

        if (!pass1)

    history.go(-1);

    if (pass1.toLowerCase() == "sw1325")
    {
    alert('어서 오세요! 확인을 누르면 지정하신 페이지로 이동합니다.');

    location.href ='indexX.html';

    break;

    }else{    prompt('암호를 확인 하시고 다시 입력하세요!.','암호 확인');

}

if (pass1.toLowerCase()!="password" & testV ==3)

history.go(-1);
    }




}