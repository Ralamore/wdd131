function blockTemplate(block, player) {
    return `<div class="player-block" id="block${block}">
            <section class="block-head">
                <h4 id="name${block}"><b>${player.name}</b></h4>
                <img class="class-icon" src="images/Class Icon - ${player.playerClass}-1.png" alt="Class Icon" id="class${block}">
            </section>
            <section class="block-items">
                <div id="AC${block}">AC: <b>${player.AC}</b></div>
                <div id="HP${block}">Max HP: <b>${player.HP}</b></div>
                <div id="PP${block}">PP: <b>${player.PP}</b></div>
                <div id="dex${block}" style="display:none">${player.dex}</div>
                <div id="SS${block}">Spell Save DC: <b>${player.SS}</b></div>
                <section class="block-head">
                    <button class="dead" id="dead${block}">Dead</button>
                    <div>
                        <label for="initive${block}">Initive: </label>
                        <input name="initive${block}" type="text" size="3"placeholder="Roll*" id="initive${block}" required>
                    </div>
                </section>
                <!-- Dropdown -->
                <label for="conditions">Conditions:</label>
                <select name="conditions${block}" class="conditions" id="conditions${block}">
                    <option selected="" value=""></option>
                    <option value="conecentration">Concentration</option>
                    <option value="unconscious">Unconscious</option>
                    <option value="blinded">Blinded</option>
                    <option value="charmed">Charmed</option>
                    <option value="frightened">Frightened</option>
                    <option value="incapacitated">Incapacitated</option>
                    <option value="invisible">Invisible</option>
                    <option value="paralyzed">Paralyzed</option>
                    <option value="poisoned">Poisoned</option>
                    <option value="prone">Prone</option>
                    <option value="restrained">Restrained</option>
                    <option value="stunned">Stunned</option>
                    <option value="petrified">Petrified</option>
                    <option value="exhaustion">Exhaustion</option>
                </select>
                <label for="rmv_conditions">Remove Conditions:</label>
                <select name="rmv_conditions${block}" class="rmv_conditions" id="rmv_conditions${block}">
                    <option selected="" value="" disabled></option>
                </select>
            </section>
        </div>`;
}

function monBlockTemplate (block, monster) {
    return `<div class="monster-block" id="block${block}">
            <section class="block-head">
                <h4 id="name${block}"><b>${monster.name}</b></h4>
            </section>
            <section class="block-items">
                <div id="AC${block}">AC: <b>${monster.AC}</b></div>
                <div id="HP${block}">Max HP: <b>${monster.HP}</b></div>
                <div id="speed${block}">Speed: <b>${monster.speed}</b></div>
                <div id="dex${block}" style="display:none">${monster.dex}</div>
                <section class="block-head">
                    <button class="dead" id="dead${block}">Dead</button>
                    <div>
                        <label for="initive${block}">Initive: </label>
                        <input name="initive${block}" type="text" size="3"placeholder="Roll*" id="initive${block}" required>
                    </div>
                </section>
                <!-- Dropdown -->
                <label for="conditions">Conditions:</label>
                <select name="conditions${block}" class="conditions" id="conditions${block}">
                    <option selected="" value=""></option>
                    <option value="conecentration">Concentration</option>
                    <option value="unconscious">Unconscious</option>
                    <option value="blinded">Blinded</option>
                    <option value="charmed">Charmed</option>
                    <option value="frightened">Frightened</option>
                    <option value="incapacitated">Incapacitated</option>
                    <option value="invisible">Invisible</option>
                    <option value="paralyzed">Paralyzed</option>
                    <option value="poisoned">Poisoned</option>
                    <option value="prone">Prone</option>
                    <option value="restrained">Restrained</option>
                    <option value="stunned">Stunned</option>
                    <option value="petrified">Petrified</option>
                    <option value="exhaustion">Exhaustion</option>
                </select>
                <label for="rmv_conditions">Remove Conditions:</label>
                <select name="rmv_conditions${block}" class="rmv_conditions" id="rmv_conditions${block}">
                    <option selected="" value="" disabled></option>
            </section>
        </div>`;
}

function getPlayerInfo(){
    const storedPlayers = JSON.parse(localStorage.getItem('players'));
    const playerList = {};
    storedPlayers.forEach((player, index) => {
        playerList[`player${index + 1}`] = player;
    });
    console.log(playerList);
    return playerList;
}

function getMonsterInfo() {
    const storedMonsters = JSON.parse(localStorage.getItem('monsters'));
    const monsterList = {};
    storedMonsters.forEach((monster, index) => {
        monsterList[`monster${index + 1}`] = monster;
    });
    console.log(monsterList);
    return monsterList
}

let blocks = 1;
addEventListener("load", (e) => {
    e.preventDefault();
    const playerList = getPlayerInfo();
    const monsterList = getMonsterInfo();
    blocks++;
    
    Object.entries(playerList).forEach(([key, player]) => {
        const number = parseInt(key.replace('player', ''));
        document.querySelector('.tracker-main').insertAdjacentHTML(
            'beforeend', blockTemplate(number, player));
    });

    Object.entries(monsterList).forEach(([key, monster]) => {
        const number2 = parseInt(key.replace('monster', ''));
        document.querySelector('.tracker-main').insertAdjacentHTML(
            'beforeend', monBlockTemplate(number2, monster));
    });
});

// Select fields
document.addEventListener('change', (e) => {
    // If it is adding a condition
    if (e.target.classList.contains('conditions')) {
        const select = e.target;
        const block = select.closest('.player-block, .monster-block');
        const value = select.value;
        // Make sure values exist
        if (value && block) {
            // Change the block to reflect the condition
            block.classList.add(value);
            // Add select to remove select
            addRmvCondition(block, value);
        }
    }

    // If it is adding a condition
    if (e.target.classList.contains('rmv_conditions')) {
        const select = e.target;
        const value = select.value;
        const block = select.closest('.player-block, .monster-block');
        // Make sure values exist
        if (value && block) {
            // Remove the conidtion effect on the block
            block.classList.remove(value);
            // Remove select from remove select
            const rmvOption = select.querySelector(`option[value="${value}"]`);
            if (rmvOption) rmvOption.remove();
            select.value = "";
        }
    }
});
function rmvTemplate(theme) {
    const capTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
    return `<option value="${theme}">${capTheme}</option>`;
}

function addRmvCondition(block, theme) {
    const select = block.querySelector('.rmv_conditions');

    if (!select.querySelector(`option[value="${theme}"]`)) {
        select.insertAdjacentHTML('beforeend', rmvTemplate(theme));
    }
}

// Dead buttons
document.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('dead')) {
        const block = e.target.closest('.player-block, .monster-block');
        if (block) {
            block.remove();
        }
    }
});

// Round counter button
let count = 0;
let round = 0;
let mins = 0;
let sec = true;
document.getElementById('next').addEventListener('click', () => {
    count++;
    const allBlocks = document.querySelectorAll('.player-block, .monster-block');
    // When we get to the top of the order increase the round
    if(count == (allBlocks.length)) {
        round++
        document.getElementById("counter").innerHTML = round;
        count = 0;
        // Alert every multiple of 10 how many minutes it has been
        if(round % 10 === 0) {
            sec = false;
            mins++;
            if(mins === 1) {
                document.getElementById("time").innerHTML = `${mins} minute`;
            } else {
                document.getElementById("time").innerHTML = `${mins} minutes`;
            }
        }
        if(sec) {
            document.getElementById("time").innerHTML = `${round * 6} seconds`;
        }
    };
    

    // Move blocks to new positions
    const container = document.querySelector('.tracker-main');
    const firstBlock = container.querySelector('.player-block, .monster-block');

    if (firstBlock) {
        container.appendChild(firstBlock);
    }
    
    const updatedBlocks = container.querySelectorAll('.player-block, .monster-block');

    // Update the turn and on deck names
    const activeName = updatedBlocks[0]?.querySelector('h4')?.textContent || '';
    const onDeckName = updatedBlocks[1]?.querySelector('h4')?.textContent || '';

    document.getElementById("active").innerHTML = activeName;
    document.getElementById("on_deck").innerHTML = onDeckName;
});

// BATTLE START
document.getElementById('start').addEventListener('click', () => {
    const initInputs = document.querySelectorAll('input[name^="initive"]');
    const blocks = Array.from(document.querySelectorAll('.player-block, .monster-block'));

    // Make sure the users have filled out the initives
    for (let i = 0; i < initInputs.length; i++) {
        const input = initInputs[i];
        if (!input.value) {
            alert(`Please fill out the initiative for block ${i + 1}`);
            input.focus();
            return;
        }
    }

    // Make the blocks into an array with their initive
    const blockArray = blocks.map(block => {
        const input = block.querySelector('input[name^="initive"]');
        const dex_in = block.querySelector('div[id^="dex"]');
        const initive = parseInt(input.value);
        const dex = parseInt(dex_in.innerHTML);
        return {block, initive, dex};
    });

    // Sort the blocks high to low
    blockArray.sort((a, b) => {
        // If the initives are the same, compare dex scores
        if (a.initive === b.initive) {
            return b.dex - a.dex;
        }
        else {
            return b.initive - a.initive;
        }
    });

    // Delete the previous boxes
    const container = document.querySelector('.tracker-main');
    container.innerHTML = '';
    blockArray.forEach(entry => {container.appendChild(entry.block)});

    // Replace initive boxes
    lockInitiatives(blocks);

    // Hide and reveal
    document.querySelector('.counter_sect').style.display = 'grid';
    document.querySelector('#start').style.display = 'none';

    // Update the turn and on deck names
    const allBlocks = container.querySelectorAll('.player-block, .monster-block');
    const activeName = allBlocks[0]?.querySelector('h4')?.textContent || '';
    const onDeckName = allBlocks[1]?.querySelector('h4')?.textContent || '';

    document.getElementById("active").innerHTML = activeName;
    document.getElementById("on_deck").innerHTML = onDeckName;
});

function lockInitiatives(blocks) {
    blocks.forEach(block => {
        const input = block.querySelector('input[name^="initive"]');
        if (input) {
            const value = input.value;
            const b = document.createElement('b');
            b.classList.add('initive-value');
            b.setAttribute('data-original-input', input.outerHTML);
            b.textContent = value;

            input.replaceWith(b);
        }
    })
}

function unlockInitiatives() {
    const blocks = document.querySelectorAll('.player-block, .monster-block');

    blocks.forEach(block => {
        const b = block.querySelector('.initive-value');
        if (b) {
            const originalHTML = b.getAttribute('data-original-input');
            b.insertAdjacentHTML('afterend', originalHTML);
            b.remove();
        }
    });
}

// BATTLE END
document.getElementById('end').addEventListener('click', () => {
    // Reopen initive boxes
    unlockInitiatives();

    // Hide and reveal
    document.querySelector('.counter_sect').style.display = 'none';
    document.querySelector('#start').style.display = 'block';

    // Reset counters
    document.getElementById("counter").innerHTML = 0;
    count = 0;
    round = 0;
    mins = 0;
    sec = true;
});