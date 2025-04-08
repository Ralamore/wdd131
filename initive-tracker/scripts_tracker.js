function changeCondition() {
    let currentTheme = document.querySelector('#conditions1').value;
    let block = document.querySelector('.player-block');
    if (currentTheme) {
        block.classList.add(currentTheme);
        addRmvCondition(currentTheme);
    }
};

function rmvTemplate(theme) {
    const capTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
    return `<option value="${theme}">${capTheme}</option>`;
}

function addRmvCondition(theme) {
    let rmvConditions = document.querySelector('#rmv_conditions1');

    if (!rmvConditions.querySelector(`option[value="${theme}"]`)) {
        rmvConditions.insertAdjacentHTML('beforeend', rmvTemplate(theme));
    }
}

function changeRmvCondition() {
    let rmvConditions = document.querySelector('#rmv_conditions1');
    let selectedOption = rmvConditions.value;
    let block = document.querySelector('.player-block');

    if (selectedOption) {
        block.classList.remove(selectedOption);

        let optionToRemove = rmvConditions.querySelector(`option[value="${selectedOption}"]`);
        if (optionToRemove) {
            optionToRemove.remove();
        }

        rmvConditions.value = "";
    }
}

// If condition is added
document.querySelector(".conditions").addEventListener('change', changeCondition);
// If condition is removed
document.querySelector(".rmv_conditions").addEventListener('change', changeRmvCondition);


{/* <div class="player-block" id="block1">
                <section class="block-head">
                    <h4 id="name1"><b>EXAMPLE</b></h4>
                    <img class="class-icon" src="images/Class Icon - Wizard-1.png" alt="Class Icon" id="class1">
                </section>
                <section class="block-items">
                    <div id="AC1">AC: <b>EXAMPLE</b></div>
                    <div id="HP1">Max HP: <b>EXAMPLE</b></div>
                    <div id="PP1">PP: <b>EXAMPLE</b></div>
                    <div id="SS1">Spell Save DC: <b>EXAMPLE</b></div>
                    <section class="block-head">
                        <button class="dead" id="dead1">Dead</button>
                        <label for="initive1"></label>
                        <input name="initive1" type="text" size="3" required placeholder="Roll" id="initive1">
                    </section>
                    <!-- Dropdown -->
                    <label for="conditions">Conditions:</label>
                    <select name="conditions1" class="conditions" id="conditions1">
                        <option selected="" value=""></option>
                        <option value="conecentration">Concentration</option>
                        <option value="unconscious">Unconscious</option>
                        <option value="blinded">Blinded</option>
                        <option value="charmed">Charmed</option>
                        <option value="frightened">Frightened</option>
                        <option value="incapacitated">Incapacitated</option>
                        <option value="invisible">Invisible</option>
                        <option value="paralyzed">Paralyzed</option>
                        <option value="petrified">Petrified</option>
                        <option value="poisoned">Poisoned</option>
                        <option value="prone">Prone</option>
                        <option value="restrained">Restrained</option>
                        <option value="stunned">Stunned</option>
                        <option value="petrified">Petrified</option>
                        <option value="exhaustion">Exhaustion</option>
                    </select>   
                </section>
            </div> */}

window.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    const playerClass = localStorage.getItem('playerClass');
    console.log(name, playerClass);

    if (name && playerClass) {
        generatePlayerBlock(name, playerClass);
    }
});

function generatePlayerBlock(name, playerClass) {
    // const block = document.querySelector('#block1');
    // document.querySelector('#name1').innerHTML = `<b>${name}</b>`;
    // document.querySelector('#class1').src = `images/Class Icon - ${playerClass}.png`;
    // You can customize more things based on the class here
}
