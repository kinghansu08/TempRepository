function addJavascript(jsname) { // 자바스크립트 외부 연동
    var th = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', jsname);
    th.appendChild(s);
}
addJavascript('/js/security.js'); // 암복호화 함수
addJavascript('/js/session.js'); // 세션 함수
addJavascript('/js/cookie.js'); // 쿠키 함수

const check_input = () => {
    const check_xss = (input) => {
        const DOMPurify = window.DOMPurify;
        const sanitizedInput = DOMPurify.sanitize(input);
        if (sanitizedInput !== input) {
            alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
            return false;
        }
        return sanitizedInput;
    };

    const hasRepeatingPatterns = (input) => {
        const repeatingPattern1 = /(.)\1{2,}/;
        const repeatingPattern2 = /(\d)\1{1,}/;
        return repeatingPattern1.test(input) || repeatingPattern2.test(input);
    };

    const idsave_check = document.getElementById('idSaveCheck');
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const emailValue = check_xss(emailInput.value.trim());
    const passwordValue = check_xss(passwordInput.value.trim());
    const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?]+/) !== null;
    const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
    const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;

    if (emailValue.length > 20) {
        alert('이메일은 20글자 이내로 작성해야 합니다.');
        login_failed();
        return false;
    }
    if (passwordValue.length > 15) {
        alert('패스워드는 반드시 15글자 이내로 입력해야 합니다.');
        login_failed();
        return false;
    }
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        login_failed();
        return false;
    }
    if (hasRepeatingPatterns(passwordValue)) {
        alert('패스워드는 연속되는 숫자를 2개 이상 반복 입력이 불가능합니다.');
        login_failed();
        return false;
    }
    if (hasRepeatingPatterns(emailValue)) {
        alert('아이디는 3글자 이상 반복 입력이 불가능합니다.');
        login_failed();
        return false;
    }

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);

    if (idsave_check.checked == true) {
        alert("쿠키를 지정합니다.", emailValue);
        setCookie('id', emailValue, 1);
        alert("쿠키 값 :" + emailValue);
    } else {
        setCookie("id", emailValue.value, 0);
    }

    if (login_attempts_check()) {
        session_set(emailValue, passwordValue);
        loginForm.submit();
    } else {
        alert('로그인 시도가 3번 이상 실패하여 로그인이 제한되었습니다.');
    }
};

// 로그인/로그아웃 횟수 쿠키 저장하기
function login_count() {
    let count = getCookie("login_cnt") ? parseInt(getCookie("login_cnt")) : 0;
    count++;
    setCookie("login_cnt", count, 1);
}

function logout_count() {
    let count = getCookie("logout_cnt") ? parseInt(getCookie("logout_cnt")) : 0;
    count++;
    setCookie("logout_cnt", count, 1);
}

function login_failed() {
    let failedCount = getCookie("login_failed_cnt") ? parseInt(getCookie("login_failed_cnt")) : 0;
    failedCount++;
    setCookie("login_failed_cnt", failedCount, 1);
    if (failedCount >= 3) {
        alert('로그인 시도가 3번 이상 실패하여 로그인이 제한됩니다.');
    } else {
        alert(`로그인 실패 횟수: ${failedCount}`);
    }
}

function login_attempts_check() {
    let failedCount = getCookie("login_failed_cnt") ? parseInt(getCookie("login_failed_cnt")) : 0;
    return failedCount < 3;
}

function session_check() {
    if (sessionStorage.getItem("Session_Storage_test")) {
        alert("이미 로그인 되었습니다.");
        location.href = '../login/index_login.html';
    }
}

function encodeByAES256(key, data) {
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString();
}

function decodeByAES256(key, data) {
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(""),
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    });
    return cipher.toString(CryptoJS.enc.Utf8);
}

function encrypt_text(password) {
    const k = "key";
    const rk = k.padEnd(32, " ");
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
}

function decrypt_text() {
    const k = "key";
    const rk = k.padEnd(32, " ");
    const eb = session_get();
    const b = this.decodeByAES256(rk, eb);
    console.log(b);
}

function init() {
    const emailInput = document.getElementById('typeEmailX');
    const idsave_check = document.getElementById('idSaveCheck');
    let get_id = getCookie("id");

    if (get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
    }
    session_check();
}

function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/" + ";SameSite=None; Secure";
}

function getCookie(name) {
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if (cookie != "") {
        var cookie_array = cookie.split("; ");
        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split("=");
            if (cookie_name[0] == name) {
                return cookie_name[1];
            }
        }
    }
    return null;
}

function closePopup() {
    if (document.getElementById('check_popup').value) {
        setCookie("id", "N", 1);
        console.log("쿠키를 설정합니다.");
        self.close();
    }
}

function session_set(id, password) {
    let random = new Date();
    const obj = {
        id: id,
        otp: random
    }

    if (sessionStorage) {
        const objString = JSON.stringify(obj);
        let en_text = encrypt_text(objString);
        sessionStorage.setItem("Session_Storage_object", objString);
        sessionStorage.setItem("Session_Storage_encrypted", en_text);
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function session_get() {
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_encrypted");
    } else {
        alert("세션 스토리지 지원 x");
    }
}

function init_logined() {
    if (sessionStorage) {
        decrypt_text();
    } else {
        alert("세션 스토리지 지원 x");
    }
}

document.getElementById("login_btn").addEventListener('click', function () {
    check_input();
    login_count();
});

document.getElementById("logout_btn").addEventListener('click', function () {
    logout_count();
});
