const url = "./js/temples.json";
const resultElement = document.querySelector('div#temples');
let array = [];
fetch(url)
.then(response => response.json())
.then(data => {

    
    for(let item of data.temples)
            {
                const s = document.createElement('section');
                const h2 = document.createElement('h2');
                h2.textContent = item.name;
                const dedication = document.createElement('p');
                dedication.textContent = 'Dedicated: ' + item.dedication;
                const img = document.createElement('img')
                img.src = item.imageURL
                s.appendChild(h2);
                s.appendChild(dedication);
                s.appendChild(img);
                resultElement.appendChild(s);
                
                
            }
    
})