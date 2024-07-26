import fs from "node:fs/promises";
import express from "express";
import { readFileSync } from "node:fs";
import path from "path";
import { fileURLToPath } from "node:url";

// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// const cors = require("cors");

// __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

// middleware to serve static files from dist folder
app.use(express.static(path.join(__dirname, "dist")));

// middleware for cors
// app.use(cors());

// middleware to chk format
app.use(express.json());

// function and routes to read disney json
function readDisneyList() {
  // const disneyList = fs.readFileSync("./src/data/disney.json");
  const disneyListFile = path.join(__dirname, "data", "disney.json");
  const disneyList = readFileSync(disneyListFile, "utf-8");
  return JSON.parse(disneyList);
}

app.get("/disney", (req, res) => {
  try {
    console.log("i reached /disney route");
    const disneyList = readDisneyList();
    res.status(200).json(disneyList);
  } catch {
    res.status(500).json("Internal Server Error");
  }
});

// function and routes to read netflix json
function readNetflixList() {
  const netflixListFile = path.join(__dirname, "data", "netflix.json");
  const netflixList = readFileSync(netflixListFile, "utf-8");
  return JSON.parse(netflixList);
}

app.get("/netflix", (req, res) => {
  try {
    console.log("reached netflix");
    const netflixList = readNetflixList();
    res.status(200).json(netflixList);
  } catch {
    res.status(500).json("Cant get Netflix data");
  }
});

// function and routes to read prime video json
function readPrimeList() {
  const primeListFile = path.join(__dirname, "data", "amazon.json");
  const primeList = readFileSync(primeListFile, "utf-8");
  return JSON.parse(primeList);
}

app.get("/primevideo", (req, res) => {
  try {
    console.log("reached amazon prime");
    const primeList = readPrimeList();
    res.status(200).json(primeList);
  } catch {
    res.status(500).json("cant get amazon prime data");
  }
});

// Serve HTML for misc routes
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let render;
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
