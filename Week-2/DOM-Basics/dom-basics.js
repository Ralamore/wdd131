const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const picture = document.createElement('img');
picture.setAttribute('src', 'https://picsum.photos/200');
picture.setAttribute('alt', 'a random picture');
document.body.appendChild(picture);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSect = document.createElement('section');
newSect.innerHTML = '<h2>DOM Basics</h2><p>This was added through Javascript</p>'
document.body.appendChild(newSect);