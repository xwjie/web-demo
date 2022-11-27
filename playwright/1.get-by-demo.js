import { chromium } from "@playwright/test";
import {config} from "./config.js";

(async () => {
    let browser = await chromium.launch(config);

    let page = await browser.newPage();
    await page.goto("http://localhost:8080/get-by-demo.html");

    // getByRoleo
    // button和role=button的都会找到
    let btn = page.getByRole('button');
    console.log(await btn.allInnerTexts());

    // 这是不行的
    // let btn2 = page.getByRole('button2');
    // console.log(await btn2.innerText());

    // getByTestId
    let div1 = page.getByTestId('id1');
    console.log(await div1.innerText());

    // getByAltText
    let img1 = page.getByAltText('img1');
    console.log(await img1.getAttribute('src'));

    let div2 = page.getByAltText('div2');
    console.log(await div2.innerText());

    // getByTitle
    let div3 = page.getByTitle('div3');
    console.log(await div3.innerText());

    await page.waitForTimeout(3000);

    await browser.close();
})();
