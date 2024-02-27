const id_Error = document.querySelector('.error-id')
const pw_Error = document.querySelector('.error-pw')
const input_Id = document.querySelector('.user-Id')
const input_Pw = document.querySelector('.user-Pw')

console.log (id_Error,pw_Error,input_Id,input_Pw)
// 에러는 input 클릭했을 때 뜨게 
input_Id.addEventListener('click',function(){
    id_Error.style.display="block"
})

input_Pw.addEventListener('click',function(){
    pw_Error.style.display="block"
})
input_Id.addEventListener('input', function() {
    if (input_Id.value.trim() !== '') {
        id_Error.style.display = "none"
    } else {
        id_Error.style.display = "block"
    }
})

input_Pw.addEventListener('input', function() {
    if (input_Pw.value.trim() !== '') {
        pw_Error.style.display = "none"
    } else {
        pw_Error.style.display = "block"
    }
})

// 입력한 아이디로 로그인 되었다고 뜨게하기 
document.getElementById('loginButton').addEventListener('click', function() {
    // 사용자명과 비밀번호 가져오기
    let username = document.getElementById("userName").value;
    let password = document.getElementById("userPassward").value;
    
    if (username === '' || password === '') {
        alert('아이디와 비밀번호를 입력하세요.');
    } else {
        alert( username + '님이 로그인 되었습니다.');
       
    }
});