import { test, expect } from "@playwright/test";

test("Visual component test", async ({ page }) => {
  await page.goto("localhost:6006/");
  await page.waitForSelector('button[data-parent-id="components"]');

  const expandButtons = await page.$$('button[data-parent-id="components"]');
  await Promise.all(expandButtons.map((btn) => btn.click()));

  const elements = await page.$$('[data-nodetype="story"]');
  const ids = await Promise.all(
    elements.map((el) => el.getAttribute("data-item-id"))
  );

  for (const id of ids) {
    await page.goto(`http://localhost:6006/iframe.html?id=${id}`);
    expect(await page.screenshot()).toMatchSnapshot(`${id}.png`);
  }
});
