const Fname = document.getElementById("inp1");
const Lname = document.getElementById("inp2");
const Bdate = document.getElementById("inp3");
const email = document.getElementById("inp4");
const emailConf = document.getElementById("inp5");
const pass = document.getElementById("inp6");
const passConf = document.getElementById("inp7");
const namePat = /^[a-zA-Z]+$/;
const datePat = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
const EmailPat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sp1 = document.getElementById("sp1");
const sp2 = document.getElementById("sp2");
const sp3 = document.getElementById("sp3");
const sp4 = document.getElementById("sp4");
const sp5 = document.getElementById("sp5");
const sp6 = document.getElementById("sp6");
const sp7 = document.getElementById("sp7");

Fname.addEventListener('input', function () {
    const inp_V = Fname.value.trim();
    if (!namePat.test(inp_V)) {
        sp1.innerHTML = "Numbers and Symbols are not allowed";
        sp1.style.color = "red";
    } else {
        sp1.innerHTML = "";
    }
});

Lname.addEventListener('input', function () {
    const inp_V = Lname.value.trim();
    if (!namePat.test(inp_V)) {
        sp2.innerHTML = "Numbers and Symbols are not allowed";
        sp2.style.color = "red";
    } else {
        sp2.innerHTML = "";
    }
});

Bdate.addEventListener('input', function () {
    if (!datePat.test(Bdate.value)) {
        sp3.innerHTML = "The format should be DD/MM/YY";
        sp3.style.color = "red";
    } else {
        sp3.innerHTML = "";
    }
});

email.addEventListener('input', function () {
    if (!EmailPat.test(email.value)) {
        sp4.innerHTML = "The e-mail is not valid";
        sp4.style.color = "red";
    } else {
        sp4.innerHTML = "";
    }
});

emailConf.addEventListener('input', function () {
    if (email.value !== emailConf.value) {
        sp5.innerHTML = "The e-mail not matching";
        sp5.style.color = "red";
    } else {
        sp5.innerHTML = "";
    }
});



passConf.addEventListener('input', function () {
    if (pass.value !== passConf.value) {
        sp7.innerHTML = "The passwords not matching";
        sp7.style.color = "red";
    } else {
        sp7.innerHTML = "";
    }
});