function menuCheck() {
    const items = document.querySelectorAll('.menuItem');
    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle("hide");
    }
}

const mButton = document.getElementById("button");
mButton.addEventListener("click", menuCheck);

function handleResize() {
    let width = window.innerWidth;
    if (width >= 1000) {
        const items = document.querySelectorAll('.menuItem');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("hide");
        }
    } else {
        const items = document.querySelectorAll('.menuItem');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add("hide");
        }
    }
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clicked = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const src = clicked.getAttribute('src');
    const srcSplit = src.split('-')
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const imgNew = srcSplit[0] + '-full.jpeg';
	// insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imgNew, srcSplit));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const close = document.querySelector('.close-viewer');
    close.addEventListener('click', closeViewer);
}

function closeViewer() {
	const viewer = document.querySelector('.viewer');
	if (viewer) {
		viewer.remove();
	}
}

const gall = document.querySelector('.gallery');
gall.addEventListener('click', viewHandler)

handleResize();
window.addEventListener("resize", handleResize)