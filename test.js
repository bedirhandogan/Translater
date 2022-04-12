function Translater(arguments) {
    (typeof arguments == 'object') ? console.log('Translator is working.') : console.error('You should make the parameters in the translator function as objects.');
}

function params(value) {
    console.log(value);
}

const labels = document.querySelectorAll('*'); // we pull all tags

/**
  * With the help of fetch, we are pulling static data from local.
  * Variable: labels gives us all the labels in an array, we parse all the data with the help of forEach.
  * In the query blog, we query the data attributes set with the dataset,
    We take the translater ones in it and print the data we fetch to the html structure.
*/

fetch(`/lang/tr.json`).then(response => response.json())
.then(json => {
    labels.forEach(element => {
        if (element.dataset.translater) {
            element.innerHTML = json[element.dataset.translater];
        }
    });
});