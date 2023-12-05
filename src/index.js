function displayNames(response) {
    
    new Typewriter("#name", {
      strings: response.data.answer,
        autoStart: true,
        delay: 1,
      cursor: "",
    });
}

function generateName(event) {
    event.preventDefault();
    let poemElement = document.querySelector("#name");
    
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "f6baffbd4tea0o94df351e9ea09c0c43";
   let context = "You are a baby name generator.You are a baby name generator! You give similar baby names like the user inputs in a BULLET POINTED LIST.";
   let prompt = `generate a short affirmation for your troubles ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let babyNameElement = document.querySelector("#name");
    babyNameElement.classList.remove("hidden");
    babyNameElement.innerHTML = `<div class="generating">...Generating similar baby names like, ${instructionsInput.value}...</div>`;
    
    axios.get(apiUrl).then(displayNames);
   
}

let nameFormElement = document.querySelector("#name-generator-form")
nameFormElement.addEventListener("submit", generateName);
