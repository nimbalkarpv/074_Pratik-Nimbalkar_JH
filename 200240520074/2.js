function fun() {

    var x = document.getElementById("nameid").value;
    if (x = " ") {
        alert(" Please Fill Username");
    }


    var y = document.getElementById("passid").value;
    if (y = " ") {
        alert("Please Enter Password");
    }

    var a = document.getElementById("nameid").value;
    var b = document.getElementById("passid").value;
    var s = document.getElementById("displayform");

    s.textContent = "User Name is:" + a + "password is:" + b;

    document.getElementById(nameid).value = "";
    document.getElementById(passid).value = "";
}