const url = "./js/data.json";
const resultElement = document.querySelector('div#directory');
let array = [];
const spotOne = document.querySelector('#spot1');
const spotTwo = document.querySelector('#spot2');
fetch(url)
.then(response => response.json())
.then(data => {
    for(let item of data.businesses){
                if(item.name == 'Wayne Enterprises'){
                    const s = document.createElement('section');
                const h2 = document.createElement('h2');
                h2.textContent = item.name;
                const address = document.createElement('p');
                address.textContent = item.address;
                const phone = document.createElement('p');
                phone.textContent = item.number;
                const web = document.createElement('a');
                web.textContent = item.website;
                web.href = '#';
                s.appendChild(h2);
                s.appendChild(address);
                s.appendChild(phone);
                s.appendChild(web)
                spotOne.appendChild(s);
                }
                if(item.name == 'LexCorp'){
                    const s = document.createElement('section');
                const h2 = document.createElement('h2');
                h2.textContent = item.name;
                const address = document.createElement('p');
                address.textContent = item.address;
                const phone = document.createElement('p');
                phone.textContent = item.number;
                const web = document.createElement('a');
                web.textContent = item.website;
                web.href = '#';
                s.appendChild(h2);
                s.appendChild(address);
                s.appendChild(phone);
                s.appendChild(web)
                spotTwo.appendChild(s);
                }
    }
})