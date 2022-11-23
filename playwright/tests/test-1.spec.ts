import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.baidu.com/');
  await page.locator('#kw').click();
  await page.locator('#kw').fill('rrr');
  await page.getByRole('button', { name: '百度一下' }).click();
  const [page1] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('link', { name: 'rrr的最新相关信息' }).click()
  ]);
  await page1.getByRole('link', { name: '登录' }).click();
});