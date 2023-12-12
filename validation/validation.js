function validation() {
    const passwordsign = document.getElementById("passign").value;
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
    const valid = pattern.test(passwordsign);
    const passworderr = document.getElementById("passerr");

    if (!valid) {
        // console.log("hello");

        passworderr.innerText = "Password should be valid";
    } else {
        passworderr.innerText = "";
    }
}

function emailval() {
    const emailval = document.getElementById("email").value;
    const epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const evalid = epattern.test(emailval);
    const emailerr = document.getElementById("emailerr");
    if (!evalid) {
        emailerr.innerText = "email should be valid!";
    } else {
        emailerr.innerText = "";
    }
}
