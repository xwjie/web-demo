import puppeteer from "puppeteer-core";
import config from './config/puppeteer.config.js';
import {sleep} from "./util.js";

puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage();
    await page.goto("http://localhost:8080");

    // 输入数据
    const input = await page.waitForSelector('input.new-todo');
    await input.type('每天提交一次代码');

    // 回车
    // await page.keyboard.press('Enter');
    await input.press('Enter');

    // 检查数据
    // await , innerText是属性，不是方法。
    const countStr = await page.$eval('.todo-count>strong', ele => ele.innerText);
    console.assert(countStr === '1', '有1条数据，实际上：' + countStr);

    await sleep(3000)
    await browser.close();
});