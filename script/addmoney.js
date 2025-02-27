// block korlum
const addDiv = document.getElementById('add-money');
addDiv.addEventListener('click',function(){
    // document.getElementById('addMoney');
 toggle('addMoney','block');

})
// amount convert

 // add money btn
document.getElementById('added-btn').addEventListener('click',function(event){
    event.preventDefault();
    if(document.getElementById('select').value == 'Bkash'){
        if(document.getElementById('account').value == '01990983050' && document.getElementById('password').value == 1234){
           let amounts = convert('amount');
           let fixedBalance = parseFloat(document.getElementById('main-balance').innerText);
             fixedBalance = amounts + fixedBalance;
             document.getElementById('main-balance').innerText = fixedBalance;
             
           
        }
     }else{
        alert('thik nahi');
     }
    
    

})
// // money add korbo
