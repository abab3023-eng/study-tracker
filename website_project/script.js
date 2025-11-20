
function saveStudy() {
    const input = document.getElementById('studyInput').value;
    document.getElementById('message').innerText = input ? "기록 완료!" : "내용을 입력하세요.";
}

function sendEmail() {
    const email = document.getElementById('email').value;
    document.getElementById('contactMsg').innerText = email ? "전송 완료!" : "이메일을 입력하세요.";
}
