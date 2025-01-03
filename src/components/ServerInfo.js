import React, { useEffect, useState } from "react";
import axios from "axios";

const ServerInfo = () => {
    const [serverInfo, setServerInfo] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/server-info")
            .then((response) => setServerInfo(response.data))
            .catch((error) => console.error(error));
    }, []);

    if (!serverInfo) return <div>Loading...</div>;

    return (
        <div className="server-info">
            <h1>Server: {serverInfo.serverDetails.map}</h1>
            <p>Mode: {serverInfo.serverDetails.mode}</p>
            <p>
                Players: {serverInfo.serverDetails.currentPlayers} /{" "}
                {serverInfo.serverDetails.maxPlayers}
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ping</th>
                        <th>Score</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {serverInfo.players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.ping}</td>
                            <td>{player.score}</td>
                            <td>{player.rank}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServerInfo;
