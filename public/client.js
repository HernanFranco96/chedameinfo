const socket = io.connect();

let quill1 = new Quill('#editor1', {
    theme: 'snow'
});
let quill2 = new Quill('#editor2', {
    theme: 'snow'
});

let formPerson = document.getElementById('formPerson');
formPerson.onsubmit = function(){
    let text1 = document.getElementById('text1');
    text1.value = quill1.root.innerHTML;
}

let formEvent = document.getElementById('formEvent');
formEvent.onsubmit = function(){
    let text2 = document.getElementById('text2');
    text2.value = quill2.root.innerHTML;
}


