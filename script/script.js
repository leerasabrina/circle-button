document.addEventListener('DOMContentLoaded', function () {
    const firstBtn = document.getElementById('first-btn');
    if(firstBtn){
    firstBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const phone = document.getElementById('inp-phone').value;
    console.log(phone)
    const pin = convert('inp-pin');
    if (phone.toString().length === 11) {
        if (phone.toString() === '01990983050') {
            if (pin === 1234) {
                window.location.href = 'another.html';
            } else {
                alert('wrong password');
            }
        } else {
            alert('wrong phone number');
        }
    } else {
        alert('invalid phone number');
    }
})}
const logOut = document.getElementById('logout-btn')
if(logOut){
logOut.addEventListener('click',()=>{
    window.location.href = 'index.html';
})}

})
