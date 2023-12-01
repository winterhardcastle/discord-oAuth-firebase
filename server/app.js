import express from "express";

const app = express();
const PORT = 3000;

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`);
});
