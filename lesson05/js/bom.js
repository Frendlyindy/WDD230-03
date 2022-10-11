const myInput = document.getElementById('favchap');
const myList = document.querySelector('.list');
const myButton = document.querySelector('main div button');

myButton.addEventListener('click', () => {
    if(myInput.value == ""){
        return;
    };
    const newItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    newItem.textContent = myInput.value;
    deleteButton.textContent = "❌";
    newItem.append(deleteButton);
    myList.append(newItem);
    deleteButton.addEventListener('click', () => {
        newItem.remove();
    });
    myInput.focus();
    myInput.value = '';
});

