const url = "./js/temples.json";
const resultElement = document.querySelector('div#templeHome');
let array = [];
fetch(url)
.then(response => response.json())
.then(data => {

    
   
                const s = document.createElement('section');
                const h2 = document.createElement('h2');
                h2.textContent = data.temples[0].name;
                const dedication = document.createElement('p');
                dedication.textContent = data.temples[0].dedication;
                const img = document.createElement('img')
                img.src = data.temples[0].imageURL
                s.appendChild(h2);
                s.appendChild(dedication);
                s.appendChild(img);
                resultElement.appendChild(s);
                
                
            
    
})