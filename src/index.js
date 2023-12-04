function displayAffirmation(response) {
    
    new Typewriter("#affirmation", {
      strings: response.data.answer,
        autoStart: true,
        delay: 1,
      cursor: "",
    });
}






function generateAffirmation(event) {
    event.preventDefault();
    let poemElement = document.querySelector("#affirmation");
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "f6baffbd4tea0o94df351e9ea09c0c43";
   let context =
     "give a inspiring daily affirmation. Must be short and sweet. Their name must be mentioned ONCE and their name that is only mentioned ONCE is in html form and in a <strong> element";
   let prompt = `generate a short affirmation for your troubles ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let affirmationElement = document.querySelector("#affirmation");
    affirmationElement.classList.remove("hidden");
    affirmationElement.innerHTML = `<div class="generating">...Generating a affirmation for you, ${instructionsInput.value}...</div>`;
    
    axios.get(apiUrl).then(displayAffirmation);
   
}

let affirmationFormElement = document.querySelector("#affirmation-generator-form")
affirmationFormElement.addEventListener("submit", generateAffirmation);
