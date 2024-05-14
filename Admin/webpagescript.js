// Define a function to generate the webpage
function generateWebpages() {
    // Fetch the HTML template from the provided URL
    fetch('https://hegemanandco.glitch.me/Admin/default.html')
        .then(response => response.text())
        .then(html => {
            // Extract the links entered in the original form
            const numLinks = document.getElementById('numLinks').value;
            const linkInputs = document.getElementById('linkInputs').querySelectorAll('input[type="text"]');
            const links = Array.from(linkInputs).map(input => input.value);
            
            // Create buttons with the links in the fetched HTML template
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const buttonsContainer = doc.getElementById('buttonContainer');
            
            links.forEach(link => {
                const button = document.createElement('button');
                button.textContent = link;
                button.setAttribute('onclick', `window.open('${link}')`);
                buttonsContainer.appendChild(button);
            });

            // Show the generated webpage buttons
            const generateWebpagesButton = document.getElementById('generateWebpagesButton');
            generateWebpagesButton.style.display = 'block';
            generateWebpagesButton.innerHTML = buttonsContainer.innerHTML;
        })
        .catch(error => {
            console.error('Error fetching HTML template:', error);
        });
}
