const { test, expect } = require("@playwright/test");


test("Calculate 5 * 5 should return 50", async ({ page }) => {
  await page.goto("https://www.desmos.com/scientific?lang=fr/");
  
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: 'Multiplier' }).click();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('group', { name: 'clavier' }).getByRole('button', { name: 'Entrée' }).click();

 await expect(page.getByText("equals =50")).toContainText("=50");
});
