// Fetch an image from https://jsonplaceholder.typicode.com/photos/1. The response will be in a JSON. You'll need to access the "url" property, then pass that into the img tag.

fetch('https://jsonplaceholder.typicode.com/photos/1') // Add the URL
	.then(res => res.json()) // Process the data
	.then(json => { 
        console.log(json)
		const img = document.createElement('img');
		img.src = json.url; // Set the image source to the image URL value
		document.body.appendChild(img);
	}); 