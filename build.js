import { build } from "esbuild";
// const chokidar = requre("chokidar");
// const liveServer = require("live-server");

(async () => {
  const builder = await build({
    bundle: true,
    logLevel: "info",
    entryPoints: ["src/index.tsx"],
    // define: { "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development") },
    // Uses incremental compilation (see `chokidar.on`).
    // incremental: true,
    // minify: process.env.NODE_ENV === "production",
    outfile: "dist/app.js",
    // loader: { '.wav': 'file' },
  }).catch((e) => {
    console.error(e);
    process.exit(1)
  });
  // `chokidar` watcher source changes.
  // chokidar
  //   // Watches TypeScript and React TypeScript.
  //   .watch("src/**/*", {
  //     interval: 1, // No delay
  //   })
  //   // Rebuilds esbuild (incrementally -- see `build.incremental`).
  //   .on("all", () => {
  //     builder.rebuild()
  //   })
  // // `liveServer` local server for hot reload.
  // liveServer.start({
  //   // Opens the local server on start.
  //   open: true,
  //   // spa: true,
  //   file: "index.html",
  //   // Uses `PORT=...` or 8080 as a fallback.
  //   port: +process.env.PORT || 3000,
  //   // Uses `public` as the local server folder.
  //   root: "public",
  // })


  // builder.build()
})()