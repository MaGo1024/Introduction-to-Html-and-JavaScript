
/*function handleClick() {
    document.getElementById("dateTarget").innerHTML = Date();
} */

document.getElementById('dateButton').onclick = handleClick;
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}

/* Named Identifier
document.getElementById('dateButton').addEventListener('click', handleClick);
function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}
Anonymous Identifier
document.getElementById('dateButton').addEventListener('click', function handleClick() {
    document.getElementById('dateTarget').innerHTML = Date();
}); */