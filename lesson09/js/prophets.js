//put the url of the json into a const
const url = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//give an easy method to manipulate an id in the DOM
const prophetsElement = document.querySelector('div#prophets');

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    //h2.textContent = prophet.name + ' ' + prophet.lastname;
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = `Birthplace: ${prophet.birthplace}`;
    p2.textContent = `Birthdate: ${prophet.birthdate}`;
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
    let image = portrait;
    image.setAttribute('src', prophet.imageurl);
    //image.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    image.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    image.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(p2);
    card.appendChild(p1);
    card.appendChild(image);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

fetch(url)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    const prophets = jsonObject['prophets'];

    prophets.forEach(displayProphets);

    
});