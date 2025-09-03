import express from "express";
import type { Request, Response } from "express";


const app = express();
const port = 9000;

// Middleware
app.use(express.json());

// Example route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Express!");
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});
