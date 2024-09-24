const value = ('; ' + document.cookie).split(`; username=`).pop().split(';')[0];


document.getElementById('name').innerText = value


function logout() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.assign("./form.html");
}
