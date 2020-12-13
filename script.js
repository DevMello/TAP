function moveon() {
    let name = document.getElementById('exampleInputEmail1')

    if (name.value.length === 0) {
        alert("No name is typed!");
    } else {
        localStorage.setItem('name', name.value);
        window.location.href = 'home.html';
    }
}

function getusername() {
    storedName = localStorage.getItem('name'); 
    document.getElementById('title').innerHTML = 'Hi, ' + storedName;
    console.log('Inside Onload');
}