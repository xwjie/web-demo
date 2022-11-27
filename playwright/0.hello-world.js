import { firefox } from "@playwright/test";

(async () => {
    let browser = await firefox.launch({
        headless: false,
        // executablePath: `C:\\Users\\Administrator\\AppData\\Local\\ms-playwright\\chromium-1033\\chrome-win\\chrome.exe`,
        // executablePath: 'C:\\Users\\Administrator\\AppData\\Local\\MyChrome\\Chrome\\Application\\chrone.exe',
        slowMo: 100
    });

    let page = await browser.newPage();
    await page.goto("https://github.com/xwjie");

    let repoLinks = page.locator('a.mr-1');
    // 多个数据，使用evaluateAll，传入元素集合
    let repos = await repoLinks.evaluateAll(eles => 
        eles.map(ele=>({'title': ele.innerText, 'href':ele.href})));
    console.log(repos);

    // 单个
    let fullname = await page.innerText('.vcard-fullname');
    console.log(fullname);
    console.assert('晓风轻' === fullname, fullname);

    let repoTitles = page.locator('.repo');
    console.log(repoTitles);
    // 多条数据allInnerTexts，单条 innerText
    console.log(await repoTitles.allInnerTexts());

    await page.type('input.header-search-input', 'PLMCodeTemplate');
    await page.press('input.header-search-input', 'Enter');

    await page.waitForTimeout(3000);
    await browser.close();
})();