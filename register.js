
function confirm() {

    const bal = 0;


    const bank = {
        name: document.getElementById('fullname').value,
        acno: document.getElementById('acno').value,
        password: document.getElementById('password').value,
        confirmPass: document.getElementById('confirm-password').value,
        balance: bal 
    };

    
    if (bank.password !== bank.confirmPass) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem(bank.acno, JSON.stringify(bank));

    alert("Account created successfully!");

}
function log(){
    window.location='./login.html'
}