const cors = require('cors'); // Import CORS middleware
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

let clients = 0;

// Map server numbers to city names
const serverCities = {
    1: "mumbai",
    2: "delhi",
    3: "chennai",
    4: "kolkata"
};

app.get('/assign-server', (req, res) => {
    console.log("new client hit");
    let server = (clients % 4) + 1;
    console.log("Server assigned: ", server);
    clients += 1;
    res.json({ server: serverCities[server] }); // Return city name instead of server number
});

app.listen(3050, () => {
    console.log(`Server is running on http://localhost:3050`);
});
