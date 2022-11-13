/**
 *
 *  Created by 晓风轻(xwjie) on 2022/11/13
 */
import puppeteer from "puppeteer-core";
import {sleep} from "./util.js";
import config from './config/puppeteer.config.js';

puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage()

    await page.goto('http://www.baidu.com')
    await page.type('#kw', '晓风轻 github')
    await page.click('#su')

    // 没有发生跳转
    // Navigation timeout of 5000 ms exceeded
    // await page.waitForNavigation({ timeout: 5000 })

    await sleep(5000);

    await page.screenshot({
        path: './dist/baidu.png'
    })

    await browser.close();
});