const { test, expect } = require('@playwright/test');

test('SwiftTranslator homepage loads', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
 await expect(page).toHaveTitle("Singlish ↔ Sinhala Translator");
});
