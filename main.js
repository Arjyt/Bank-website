const ac = document.getElementById("account-number");
const hold = document.getElementById('account-holder');

const transactionList = document.getElementById('transaction-list');

function addTransaction(date, type, amount) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${date}</td>
        <td>${type}</td>
        <td>$${amount}</td>
    `;
    transactionList.appendChild(tr);
}

const acno1 = localStorage.getItem('loginid');

if (acno1) {
    
    const storedAccount = localStorage.getItem(acno1);

    if (storedAccount) {
        const accountData = JSON.parse(storedAccount); 

        ac.innerHTML = acno1;
        hold.innerHTML = accountData.name; 
        console.log(accountData.name); 


        let balance = parseFloat(accountData.balance) || 0;

        document.getElementById('balance').textContent = balance.toFixed(2);

        function deposit() {
            const dep = parseFloat(document.getElementById('deposit-amount').value); 

            if (!isNaN(dep) && dep > 0) { 
                balance += dep; 
                accountData.balance = balance; 
                document.getElementById('balance').textContent = balance.toFixed(2);
                document.getElementById('deposit-amount').value = ''; 
                
                localStorage.setItem(acno1, JSON.stringify(accountData));
                addTransaction(new Date().toLocaleDateString(),"Debit",dep)
            } else {
                alert("Please enter a valid deposit amount.");
            }
        }

        function withdraw() {
            const withdrawAmount = parseFloat(document.getElementById("withdraw-amount").value);
            if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
                balance -= withdrawAmount;
                accountData.balance = balance; 
                document.getElementById('balance').textContent = balance.toFixed(2);

           
                localStorage.setItem(acno1, JSON.stringify(accountData));
                addTransaction(new Date().toLocaleDateString(),"Credit",withdrawAmount)
            } else {
                alert('Insufficient balance or invalid withdrawal amount.');
            }
        }

        function logout() {
            window.location = './index.html';
        }

    } else {
        console.log("Account data not found in localStorage.");
    }
} else {
    console.log("Account number not found in localStorage.");
}
function logout(){
    localStorage.removeItem("loginid")
    window.location='./index.html'
   
}