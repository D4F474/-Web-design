let btn = document.getElementById("btn");
btn.addEventListener("click", function() {
let txt = document.getElementById("txt");
let text = document.getElementById("text").value;
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1;
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let time = year +"/" + month + "/" + day;
let command = `<tr id="click"><td>${time}</td> <td id="ready">${text}</td> <td><input type="checkbox" name="check">Изпълни</input></td> <td><button id="delete">Изтрий</button></td></tr>`
txt.innerHTML += command;
let compl = document.querySelector("input[name=check]");
let work = document.getElementById("ready");
compl.addEventListener("change", function() {
    if(this.checked){
        work.style.textDecorationLine = "line-through";
}else{
    work.style.textDecorationLine = "none";
}
})
let del = document.getElementById("delete");
del.addEventListener("click", function() {
   let click = document.getElementById("click");
    click.innerHTML = " ";
})
})

