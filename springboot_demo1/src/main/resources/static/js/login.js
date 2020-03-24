document.querySelector(".new-kind").onclick = function () {
    if (document.querySelector(".login-bytel").style.display == "none") {
        document.querySelector(".login-bytel").style.display = "block";
        document.querySelector(".login-byemail").style.display = "none";
        document.querySelector(".now-kind").innerText = "手机注册>";
        document.querySelector(".new-kind").innerText = "邮箱注册>";
    } else {
        document.querySelector(".login-bytel").style.display = "none";
        document.querySelector(".login-byemail").style.display = "block";
        document.querySelector(".now-kind").innerText = "邮箱注册>";
        document.querySelector(".new-kind").innerText = "手机注册>";
    }
}

/* 验证号码*/
function checkTel() {
    var tel = document.querySelector(".tel-code").value;
    var errorMessage = document.querySelector(".tel-code").nextElementSibling;
    if (tel.trim() == null || tel.trim() == "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "请输入手机号";
        return false;
    } else if (!/^\d{11}$/.test(tel)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "手机号码格式不正确，请重新输入";
        return false;
    } else {
        errorMessage.style.display = "none";
        errorMessage.innerHTML = "";
        return true;
    }
}


//验证密码
$(".pw-code").blur(function () {
    checkPassword();
})

function checkPassword() {
    var password = $(".pw-code").val();
    var errorMessage = $(".pw-code").next(".error-msg");
    console.log(errorMessage.val());
    if (password.trim() == null || password.trim() == "") {
        errorMessage.show();
        errorMessage.text("请输入密码");
        return false;
    } else if (!/^[0-9A-Za-z]{6,12}$/.test(password)) {
        errorMessage.show();
        errorMessage.text("密码长度在6-12个字符/由数字/字母组成");
        return false;
    } else {
        errorMessage.hide();
        errorMessage.text("");
        return true;
    }
}


//确认密码
$(".confirm-pw-code").blur(function () {
    checkconfirmPassword();
})

function checkconfirmPassword() {
    var password = $(".pw-code").val();
    var confirmpassword = $(".confirm-pw-code").val();
    var errorMessage = $(".confirm-pw-code").next(".error-msg");
    console.log(errorMessage.val());
    if (password != confirmpassword) {
        errorMessage.show();
        errorMessage.text("请输入和上面相同的密码");
        return false;
    } else {
        errorMessage.hide();
        errorMessage.text("");
        return true;
    }
}

//验证邮箱
$(".email-code").blur(function () {
    checkEmail();
})

function checkEmail() {
    var email = $(".email-code").val();
    var errorMessage = $(".email-code").next(".error-msg");
    console.log(errorMessage.val());
    if (email.trim() == null || email.trim() == "") {
        errorMessage.show();
        errorMessage.text("请输入邮箱");
        return false;
    } else if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
        errorMessage.show();
        errorMessage.text("邮箱格式错误");
        return false;
    } else {
        errorMessage.hide();
        errorMessage.text("");
        return true;
    }
}

//验证图形验证码
$(".pw-code").blur(function () {
    checkPassword();
})

function checkPassword() {
    var password = $(".pw-code").val();
    var errorMessage = $(".pw-code").next(".error-msg");
    console.log(errorMessage.val());
    if (password.trim() == null || password.trim() == "") {
        errorMessage.show();
        errorMessage.text("请输入密码");
        return false;
    } else if (!/^[0-9A-Za-z]{6,12}$/.test(password)) {
        errorMessage.show();
        errorMessage.text("密码长度在6-12个字符/由数字/字母组成");
        return false;
    } else {
        errorMessage.hide();
        errorMessage.text("");
        return true;
    }
}

//确认密码
function checkimgcode() {
    var imgcode = $(".img-code").val();
    var errorMessage = $(".confirm-pw-code").next(".error-msg");
    console.log(errorMessage.val());
    if (password != confirmpassword) {
        errorMessage.show();
        errorMessage.text("请输入和上面相同的密码");
        return false;
    } else {
        errorMessage.hide();
        errorMessage.text("");
        return true;
    }
}

//注册
$(".login-btn").blur(function () {
    login();
})
function login() {
    if($(".now-kind").val()=="手机注册") {
        if (checkimgcode() && checkPassword() &&  checkconfirmPassword() && checkPassword() && checkTel&&($("tiaokuan-checked").attachShadow("checked"))=="checked") {

        }
    }
}