import Koa from "koa";
import { fileExists, readFile } from "./util.js";
import { rewriteImports } from "./plugin-module-rewrite.js";
import { generateInsertCssCode } from "./handle-css.js";
import { generateVueCode } from "./handle-vue.js";

const app = new Koa();

// 插件
const midRewriteImport = async (ctx, next) => {
  await next()

  if (ctx.body && ctx.response.is('js')) {
    ctx.body = rewriteImports(ctx.body);
  }
}

app.use(midRewriteImport);

// 处理

app.use(async (ctx) => {
  const { path, query } = ctx.request;
  if (path === "/") {
    renderIndex(ctx);
  } else if (path.endsWith(".js")) {
    renderJs(ctx);
  } else if (path.endsWith(".css")) {
    renderCss(ctx);
  }   else if (path.endsWith(".vue")) {
    renderVue(ctx);
  } else {
    renderStatic(ctx);
  }
});


app.listen(3000, () => {
  console.log("Vite is listening on port 3000");
});

// 处理函数

function renderJs(ctx) {
  const { path, query } = ctx.request;
  const content = readFile(path);
  ctx.type = "application/javascript";
  ctx.body = content;
}


function renderCss(ctx) {
  const { path, query } = ctx.request;
  const content = readFile(path);
  ctx.type = "application/javascript";
  ctx.body = generateInsertCssCode(content);
}

function renderIndex(ctx) {
  ctx.type = "text/html";
  const content = readFile("./index.html");
  ctx.body = content  + `
  <script>window.process = {env: {NODE_ENV:"dev"}};</script>
  `;
}

function renderVue(ctx) {
  const { path, query } = ctx.request;
  console.log('vue', path, query);
  ctx.type = "application/javascript";
  ctx.body = generateVueCode(path, query);
}

function renderStatic(ctx) {
  const { path, query } = ctx.request;
  console.log('renderStatic', path, query);
  ctx.type = path.substr(path.lastIndexOf('.'));
  if(fileExists(path)){
      ctx.body = readFile(path);;
  }else if(fileExists('/public/'+ path)){
    ctx.body = readFile('/public/'+ path);;
  }
}