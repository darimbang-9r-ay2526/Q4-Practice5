function Checker() {
    let password = "";
    do {
        password = prompt("Enter your password longer than 4 characters", "");

    } while (password.length <= 5);

    window.alert("Entered password: " + password);
}