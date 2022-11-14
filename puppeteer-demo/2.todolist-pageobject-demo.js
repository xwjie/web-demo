import puppeteer from "puppeteer-core";
import config from './config/puppeteer.config.js';
import TodoListPo from "./todo-list-po.js";
import {sleep} from "./util.js";

puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage();
    await page.goto("http://localhost:8080");

    // 输入数据
    const todoListPo = new TodoListPo(page);
    const resultPo  = await todoListPo.addTodo('每天提交一次代码');

    // 检查数据
    let count = await resultPo.getTodoCount();
    console.assert(count === 1, '有1条数据，实际上：' + count);

    await sleep(3000)
    await browser.close();
});