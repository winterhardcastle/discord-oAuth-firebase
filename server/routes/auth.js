import { Router as router } from "express";

router.get("/", (req, res) => {
  res.json({ msg: "Auth", status: 200 });
});

export default router;
