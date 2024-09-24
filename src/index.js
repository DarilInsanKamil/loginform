
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function login(event) {
    event.preventDefault();

    const accounts = JSON.parse(localStorage.getItem("accounts"));
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');

    const resultEmail = accounts.filter((acc) =>
        acc.email.toLowerCase().includes(inputEmail.value)
    );

    const resultPass = accounts.filter((acc) =>
        acc.password.toLowerCase().includes(inputPassword.value)
    );

    console.log({
        "mail": JSON.stringify(resultEmail),
        "pass": JSON.stringify(resultPass)
    });
    
    if (JSON.stringify(resultEmail) == "[]" || JSON.stringify(resultPass) == "[]") {
        // alert("Login Berhasil")
        alert("email atau password tidak valid")
        inputEmail.value = "";
        inputPassword.value = "";
    } else {
        setCookie("username", inputEmail.value, 30);  
        window.location.assign('./greating.html');
    }
}

function register(event) {
    event.preventDefault();

    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');


    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    // Buat objek akun baru
    const newAccount = {
        email: inputEmail.value,
        password: inputPassword.value
    };

    // Tambahkan akun baru ke array accounts
    accounts.push(newAccount);

    // Simpan kembali array accounts yang sudah diperbarui ke localStorage
    localStorage.setItem("accounts", JSON.stringify(accounts));

    // Bersihkan form
    inputEmail.value = '';
    inputPassword.value = '';

    window.location.assign('./form.html')

}