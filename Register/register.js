let participants = 1;

document.getElementById("add").addEventListener("click", function () {
    participants++;

    // Get the first form
    let originalForm = document.querySelector(".participant");
    let newForm = originalForm.cloneNode(true);

    // Update form ID
    newForm.id = `participant-${participants}`;

    // Update the title
    newForm.querySelector("p").textContent = `Participant ${participants}`;

    // Update input fields (id, name, and value reset)
    let inputs = newForm.querySelectorAll("input, select");
    inputs.forEach(input => {
        let baseName = input.name.split("-")[0];
        input.id = `${baseName}-${participants}`;
        input.name = `${baseName}-${participants}`;
        input.value = "";
    });


    // Append to body (or another container)
    document.getElementById("participant1").appendChild(newForm);
});