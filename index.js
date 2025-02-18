import express from "express";

const PORT = process.env.PORT || 3010;
const app = express();

app.get("/", (req, res) => {
  res.send("Hiii")
})

app.listen(PORT, () =>
  console.log(`✅ listening on port ${PORT} ➡️ http://localhost:${PORT}`)
);
