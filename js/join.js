class SignUp {
  constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdayDate = birthdayDate;
      this.gender = gender;
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.classNumber = classNumber;
      this.random = random;
  }

  get fullName() {
      return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
      const [firstName, lastName] = fullName.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
  }

  get contactInfo() {
      return `${this.emailAddress} ${this.phoneNumber} ${this.random}`;
  }

  set contactInfo(contactInfo) {
      const [emailAddress, phoneNumber, random] = contactInfo.split(" ");
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.random = random;
  }
}

function addJavascript(jsname) {
  var th = document.getElementsByTagName('head')[0];
  var s = document.createElement('script');
  s.setAttribute('type', 'text/javascript');
  s.setAttribute('src', jsname);
  th.appendChild(s);
}

addJavascript('/js/session.js');

function session_join_set() {
  let f_name = document.querySelector("#firstName").value;
  let l_name = document.querySelector("#lastName").value;
  let b_day = document.querySelector("#birthdayDate").value;
  let gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
  let email = document.querySelector("#emailAddress").value;
  let p_number = document.querySelector("#phoneNumber").value;
  let class_check = document.querySelector(".select.form-control-lg").value;
  let random = new Date();

  const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
  console.log(newSignUp.fullName);
  console.log(newSignUp.contactInfo);

  if (sessionStorage) {
      const objString = JSON.stringify(newSignUp);
      let en_text = encrypt_text(objString);
      sessionStorage.setItem("Session_Storage_new_user", objString);
      sessionStorage.setItem("Session_Storage_new_user_encrypted", en_text);
  } else {
      alert("세션 스토리지 지원 x");
  }
}

function join() {
  let form = document.querySelector("#form_main");
  let f_name = document.querySelector("#firstName");
  let l_name = document.querySelector("#lastName");
  let b_day = document.querySelector("#birthdayDate");
  let email = document.querySelector("#emailAddress");
  let p_number = document.querySelector("#phoneNumber");

  form.action = "../login/index_join.html";
  form.method = "get";

  if (f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || p_number.value.length === 0) {
      alert("회원가입 폼에 필수 정보를 입력해주세요.(성별, 분반 제외)");
  } else {
      session_join_set();
      form.submit();
  }
}
