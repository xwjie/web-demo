/**
 * Created by 晓风轻(xwjie) on 2022/11/5.
 */
const {sleep} =  require("./util");

// const devices = require('puppeteer/DeviceDescriptors')
const puppeteer = require('puppeteer-core');
const config = require('./config/puppeteer.config')

puppeteer.launch(config).then(async browser => {
    const page = await browser.newPage()

    await page.goto('http://www.baidu.com')
    await page.type('#kw', '晓风轻 github')
    await page.click('#su')
    // await page.waitForNavigation({ timeout: 5000 })

    await sleep(5000);

    await page.screenshot({
        path: './dist/baidu.png'
    })

    await browser.close(); // 关闭浏览器
});