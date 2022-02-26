import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("localhost:3000");
  await expect(page).toHaveTitle(/Create Next App/);
});
