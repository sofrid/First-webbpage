var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object
console.log("JSON filen");
xhr.onload = function() {                       // When readystate changes
    // The following conditional check will not work locally - only on a server
    //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { // Loop through object
        newContent += '<p></p>' + (i+1);
        newContent += '<p><b>' + responseObject.events[i].topplista + '</b><br>';
        newContent += '<img src="' + responseObject.events[i].omslag + '" ';
        newContent += 'alt="' + responseObject.events[i].topplista + '" class="topplista_img" />';

    }

    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;

    //}
};

xhr.open('GET', 'data/data.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request