import * as esbuild from 'esbuild'

let ctx = await esbuild.context({
  bundle: true,
  logLevel: "info",
  entryPoints: ["src/index.tsx"],
  outfile: "www/app.js",
})

await ctx.watch()

let { host, port } = await ctx.serve({
  servedir: 'www',
})

// TODO tsc --noEmit in parallel