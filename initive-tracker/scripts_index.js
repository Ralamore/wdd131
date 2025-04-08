// // Skip to main content
// const mainContent = document.querySelector('#main-content');
// mainContent.innerHTML = articles.map(renderArticles).join('');

// Form for form generation
function sectionTemplate(section) {
    return `<section class="player${section}">
                <p>Player ${section}</p>
                <div class="item">
                <label for="fname${section}">Name: <span>*</span></label>
                <input id="fname${section}" type="text" name="fname${section}" value="" required>
                </div>
                <div class="item activities">
                <label for="fHP${section}">Max HP: <span>*</span></label>
                <input id="fHP${section}" type="number" name="HP${section}" required>
                </div>
                <div class="item">
                <label for="fAC${section}">Armor Class: <span>*</span></label>
                <input id="fAC${section}" type="number" name="AC${section}" required>
                </div>
                <div class="item">
                <label for="fSS${section}">Spell Save DC: <span>*</span></label>
                <input id="fSS${section}" type="number" name="SS${section}" required>
                </div>
                <div class="item">
                    <label for="fPP${section}">Passive Perception: <span>*</span></label>
                    <input id="fPP${section}" type="number" name="PP${section}" required>
                </div>
                <div class="item">
                <label for="fclass${section}">Class: <span>*</span></label>
                <select id="fclass${section}" required>
                    <option selected="" value="" disabled=""></option>
                    <option value="artificer">Artificer</option>
                    <option value="barbarian">Barbarian</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="fighter">Fighter</option>
                    <option value="monk">Monk</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="rogue">Rogue</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                </select>
                </div>
            </section>`;
}

// Button for form generation
let players = 1;
document.getElementById("add").addEventListener("click", function() {
    players++;
    
    document.querySelector('#add').insertAdjacentHTML('beforebegin', sectionTemplate(players));
});


const form = document.querySelector('#submitButton');
form.addEventListener('click', (e) => {
    e.preventDefault();

    // Get values
    const name = document.querySelector('#fname').value;
    const playerClass = document.querySelector('#fclass').value;

    // Store them
    localStorage.setItem('name', name);
    localStorage.setItem('playerClass', playerClass);

    // Redirect to tracker page
    window.location.href = 'in_tracker.html';
});
