const fs = require("fs");

fs.readFile("./file.json", (error, content) => {
    if (error) {
        console.error(error);
    } else {
        const json = JSON.parse(content);
        console.log(`found ${json.services.length} services:`);
        json.services.forEach((s) => {
            console.log(`Name: ${s.name}, Description: ${s.description}`) 
        });
    }
});