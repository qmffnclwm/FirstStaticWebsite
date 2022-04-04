let userId = "coffeebook";
let userPwd = 1234;

function loginCheck() {
  let form = document.f1;
  if (!form.user_id.value) {
    alert("아이디를 입력해주십시오.");
    form.user_id.focus();
    return;
  }
  if (!form.user_pwd.value) {
    alert("비밀번호를 입력해주십시오.");
    form.user_pwd.focus();
    return;
  }
  if (form.user_id.value == userId) {
    if (form.user_pwd.value == userPwd) {
      form.action = "../메인역사/메인역사.html";
      form.submit();
    } else {
      alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    }
  } else {
    alert("아이디가 일치하지 않습니다. 다시 입력해주세요.");
  }
}
