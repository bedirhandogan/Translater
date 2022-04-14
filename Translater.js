const labels = document.querySelectorAll('*'); // we pull all tags

/**
 * 
 * @param {*} arguments a parameter to get some information in the form of objects needed for the algorithm to work.
 */

function Translater(arguments) {
    (typeof arguments == 'object') ? console.log('Translator is working.') : console.error('You should make the parameters in the translator function as objects.');
    const user = localStorage.getItem('user'); // get user data
    localStorage.setItem('user', user == null ? arguments.default : user); // create if user data does not exist, return existing user data if it exists

    /**
     * 
     * With the help of fetch, we are pulling static data from local.
     * Variable: labels gives us all the labels in an array, we parse all the data with the help of forEach.
     * In the query blog, we query the data attributes set with the dataset,
       We take the translater ones in it and print the data we fetch to the html structure.
    */
   
    fetch(`/${arguments.location}/${user}.json`).then(response => response.json())
     .then(json => {
        labels.forEach(element => {
            if (element.dataset.dropdownItem) {
                element.addEventListener('click', () => { 
                    localStorage.setItem('user', element.dataset.dropdownItem); // update user
                    location.reload(); // web reloading
                 });
            }
            if (element.dataset.translater) {
                element.innerHTML = json[element.dataset.translater]; // set json data in html
                if (element.getElementsByTagName('img')) {
                    element.setAttribute('src', json[element.dataset.translater]); // set json data in attribute
                }
            }
            (element.dataset.selectLanguage) ? element.innerHTML = user : null; // set selected language in html
        });
    });
}