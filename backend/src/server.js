require("dotenv").config();

const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/health', (req, res) => {
  res.status(200).json({ service: "gas-tracker-api", status: "up" });
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
console.log(`Site: localhost:${PORT}`)