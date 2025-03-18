function sectionTemplate(section) {
    return `<section class="participant${section}">
            <p>Participant ${section}</p>
            <div class="item">
              <label for="fname${section}"> First Name<span>*</span></label>
              <input id="fname${section}" type="text" name="fname${section}" value="" required>
            </div>
            <div class="item activities">
              <label for="activity${section}">Activity #<span>*</span></label>
              <input id="activity${section}" type="text" name="activity${section}" required>
            </div>
            <div class="item${section}">
              <label for="fee">Fee ($)<span>*</span></label>
              <input id="fee${section}" type="number" name="fee${section}" required>
            </iv>
            <div class="item${section}">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date${section}" type="date" name="date${section}" required>
            </div>
            <div class="item">
              <label for="grade${section}">Grade</label>
              <select class="minimal" id="grade${section}">
                <option selected="" value="" disabled=""></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`;
}

function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let total = 0;
    feeElements.forEach((element) => {
        total += parseFloat(element.value);
    });
    // once you have your total make sure to return it!
    return {
        totalFees: total,
        totalParticipants: feeElements.length,
    }
    
}

function successTemplate(info) {
    return `<h2>Camp Registration Summary</h2>
            <p>Adult: ${info.adultName}</p>
            <p>Number of Participants: ${info.totalParticipants}</p>
            <p>Total Cost: ${info.totalFees}</p>`;
}

let participants = 1;

document.getElementById("add").addEventListener("click", function() {
    console.log("yep");
    participants++;
    
    document.querySelector('#add').insertAdjacentHTML('beforebegin', sectionTemplate(participants));
});

document.getElementById("submitButton").addEventListener('click', function(event) {
    event.preventDefault();

    document.querySelector('form').reportValidity();

    if (document.querySelector('form').checkValidity()) {
        totalDetails = totalFees();

        const formInfo = {
            totalFees: totalDetails.totalFees,
            totalParticipants: totalDetails.totalParticipants,
            adultName: document.querySelector('#adult_name').value,
        }
        summaryHTML = successTemplate(formInfo);
        summaryElement = document.querySelector('#summary');
        summaryElement.innerHTML = summaryHTML;
        summaryElement.style.display = 'block';
    }
});