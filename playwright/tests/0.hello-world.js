import { firefox } from "@playwright/test";

(async () => {
    let browser = await firefox.launch({
        headless: false,
        slowMo: 100
    });

    let page = await browser.newPage();
    await page.goto("https://github.com/xwjie");

    await browser.close();
})();