// Skip to main content
document.querySelector('.skiptocontent').addEventListener('click', function () {
    document.querySelector('#main-content').focus();
});
  

// Form for form generation
function sectionTemplate(section) {
    return `<section class="player player${section}">
                <p>Player ${section}</p>
                <div class="item">
                    <label for="fname${section}">Name: <span class="req">*</span></label>
                    <input id="fname${section}" type="text" name="fname${section}" value="" required size="30">
                </div>
                <div class="item">
                    <label for="fHP${section}">Max HP: <span class="req">*</span></label>
                    <input id="fHP${section}" type="number" name="HP${section}" required size="30">
                </div>
                <div class="item">
                    <label for="fAC${section}">Armor Class: <span class="req">*</span></label>
                    <input id="fAC${section}" type="number" name="AC${section}" required size="30">
                </div>
                <div class="item">
                    <label for="fSS${section}">Spell Save DC: <span class="req">*</span></label>
                    <input id="fSS${section}" type="number" name="SS${section}" required size="30">
                </div>
                <div class="item">
                    <label for="fPP${section}">Passive Perception: <span class="req">*</span></label>
                    <input id="fPP${section}" type="number" name="PP${section}" required size="30">
                </div>
                <div class="item">
                    <label for="fdex${section}">Dexterity: <span class="req">*</span></label>
                    <input id="fdex${section}" type="number" name="fdex${section}" required size="30">
                </div>
                <div class="item">
                <label for="fclass${section}">Class: <span class="req">*</span></label>
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
                <button class="rmvform">Remove</button>
            </section>`;
}

function monsterTemplate (section) {
    return `<section class="monster monster${section}">
                    <p>Monster ${section}</p>
                    <div class="item">
                        <label for="fmname${section}">Name: <span class="req">*</span></label>
                        <input id="fmname${section}" type="text" name="fmname${section}" value="" required size="30">
                    </div>
                    <div class="item">
                        <label for="fmHP${section}">Max HP: <span class="req">*</span></label>
                        <input id="fmHP${section}" type="number" name="mHP${section}" required size="30">
                    </div>
                    <div class="item">
                        <label for="fmAC${section}">Armor Class: <span class="req">*</span></label>
                        <input id="fmAC${section}" type="number" name="mAC${section}" required size="30">
                    </div>
                    <div class="item">
                        <label for="fmspeed${section}">Speed: <span class="req">*</span></label>
                        <input id="fmspeed${section}" type="number" name="mspeed${section}" required size="30">
                    </div>
                    <div class="item">
                        <label for="fmdex${section}">Dexterity: <span class="req">*</span></label>
                        <input id="fmdex${section}" type="number" name="fmdex${section}" required size="30">
                    </div>
                    <button class="rmvMonform">Remove</button>
                </section>`
}

// Button for form generation
let players = 1;
document.getElementById("add").addEventListener("click", function() {
    players++;
    
    document.querySelector('#add').insertAdjacentHTML('beforebegin', sectionTemplate(players));
});

let monsters = 1;
document.getElementById("madd").addEventListener("click", function() {
    monsters++;
    
    document.querySelector('#madd').insertAdjacentHTML('beforebegin', monsterTemplate(monsters));
});

// Remove player form
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('rmvform')) {
        const block = e.target.closest('.player');
        if (block) {
            block.remove();
            players = players - 1;
        }
    }
});

// Remove monster form
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('rmvMonform')) {
        const block = e.target.closest('.monster');
        if (block) {
            block.remove();
            monsters = monsters - 1;
        }
    }
});

// Submit button
document.querySelector('#submitButton').addEventListener('click', (e) => {
    e.preventDefault();

    const playersData = [];

    // Loop through all player sections
    for (let i = 1; i <= players; i++) {
        // Save data
        const player = {
            name: document.querySelector(`#fname${i}`).value,
            HP: document.querySelector(`#fHP${i}`).value,
            AC: document.querySelector(`#fAC${i}`).value,
            SS: document.querySelector(`#fSS${i}`).value,
            PP: document.querySelector(`#fPP${i}`).value,
            dex: document.querySelector(`#fdex${i}`).value,
            playerClass: document.querySelector(`#fclass${i}`).value,
        };

        // Check user submission
        if (!player.name || !player.HP || !player.AC || !player.SS ||!player.PP || !player.dex|| !player.playerClass) {
            alert(`Please fill out all fields for Player ${i}`);
            input.focus();
            return;
        }  

        playersData.push(player);
    }

    const monstersData = [];

    // Loop through all monster sections
    for (let i = 1; i <= monsters; i++) {
        const monster = {
            name: document.querySelector(`#fmname${i}`).value,
            HP: document.querySelector(`#fmHP${i}`).value,
            AC: document.querySelector(`#fmAC${i}`).value,
            speed: document.querySelector(`#fmspeed${i}`).value,
            dex: document.querySelector(`#fmdex${i}`).value,
        };

        // Check user submission
        if (!monster.name || !monster.HP || !monster.AC || !monster.speed ||!monster.dex) {
            alert(`Please fill out all fields for Monster ${i}`);
            input.focus();
            return;
        }        

        monstersData.push(monster);
    }

    // Store the whole array in localStorage (must stringify it!)
    localStorage.setItem('players', JSON.stringify(playersData));
    localStorage.setItem('monsters', JSON.stringify(monstersData));

    // Redirect to tracker page
    window.location.href = 'in-tracker.html';
});

