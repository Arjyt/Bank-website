function login() {
    const acno = document.getElementById('acno').value;
    const pass = document.getElementById('password').value;

    const storedAccount = localStorage.getItem(acno);

    if (storedAccount) {
        const accountData = JSON.parse(storedAccount);

        if (accountData.password === pass) {
            alert('Login successful');
            localStorage.setItem("loginid",acno)
            window.location.href = './main.html'; 

            return false; 
        } else {
            alert('Incorrect password');
        }
    } else {
        alert("Account doesn't exist");
    }

    return false; 
}
