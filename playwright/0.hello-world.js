import {chromium} from "@playwright/test";
import {config} from "./config.js";

(async () => {
    let browser = await chromium.launch(config);

    let page = await browser.newPage();
    await page.goto("https://github.com/xwjie");

    await getRepos(page);

    let repoLinks = page.locator('a.mr-1');

    // 多个数据，使用evaluateAll，传入元素集合
    let repos = await repoLinks.evaluateAll(eles =>
        eles.map(ele => ({ 'title': ele.innerText, 'href': ele.href })));
    console.log(repos);

    // 单个
    let fullname = await page.innerText('.vcard-fullname');
    console.log(fullname);
    console.assert('晓风轻' === fullname, fullname);

    let repoTitles = page.locator('.repo');
    console.log(repoTitles);

    // 多条数据allInnerTexts，单条 innerText
    console.log(await repoTitles.allInnerTexts());

    // 输入文本
    await page.type('input.header-search-input', 'PLMCodeTemplate');

    // 按回车
    await page.press('input.header-search-input', 'Enter');

    await page.waitForTimeout(3000);

    await browser.close();
})();

async function getRepos(page) {
    // $$eval不会自动等待，可能需要手工等
    // 当然这里不需要
    let repos2 = await page.$$eval('a.mr-1', eles =>
        eles.map(ele => ({ 'title': ele.innerText, 'href': ele.href })));
    console.log("仓库", repos2);
}
