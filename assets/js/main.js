let firstName = document.getElementById("vorname");
let lastName = document.getElementById("nachname");
let country = document.getElementById("land");

function infoText() {
    console.log("Name: " + firstName.value + " " + lastName.value);
    console.log("From Country: " + country.value);
}