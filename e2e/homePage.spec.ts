import { test, expect } from "@playwright/test";

test("Home Page test", async ({ page }) => {
  await page.goto("localhost:3000");
  await expect(page).toHaveTitle(/Create Next App/);
  expect(await page.screenshot()).toMatchSnapshot("home_page.png");
});
