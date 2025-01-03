const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const serverInfo = {
    players: [
        { name: "Player1", ping: 40, score: 1500, rank: 10 },
        { name: "Player2", ping: 60, score: 1200, rank: 8 },
        // Add more player data as needed
    ],
    serverDetails: {
        map: "RC3-BASEMAPS",
        mode: "Conquest",
        maxPlayers: 64,
        currentPlayers: 40,
    },
};

app.get("/server-info", (req, res) => {
    res.json(serverInfo);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
