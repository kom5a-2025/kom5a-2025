const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l’API KOM5A 🚀🔥" });
});

app.listen(PORT, () => {
    console.log(`✅ Serveur API KOM5A démarré sur http://localhost:${PORT}`);
});
