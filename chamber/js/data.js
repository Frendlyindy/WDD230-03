const url = "./js/data.json";
const resultElement = document.querySelector('div#directory');
let array = [];
const spotOne = document.querySelector('.spot1');
const spotTwo = document.querySelector('.spot2');
fetch(url)
.then(response => response.json())
.then(data => {

    
    for(let item of data.businesses)
            {
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
                resultElement.appendChild(s);
                if(item.level == "Silver"||item.level == "Gold"){
                    let name = item.name;
                    let add = item.address;
                    let num = item.number;
                    let website = item.website;
                    let business = [name, add, num, website];
                    array.push(business);
                }
                
            }
    
})
function batman(){
    let element = document.querySelector("#directory");
    element.classList.toggle("direct-grid");
}
array.sort(() => Math.random() - Math.random()).slice(0, 11);