const Heroname = document.getElementById("Heroname");
const mysubmit = document.getElementById("mysubmit");
const result = document.getElementById("result");

name = Heroname.value;
mysubmit.onclick = function(){
    if(Heroname.value === ""){
        result.textContent = 'Name is Required!';
        result.style.color = "red";
    }
    else{
        result.textContent = 'Welcome, ' + Heroname.value + '! ✅';
        result.style.color = "green";
    }
}
