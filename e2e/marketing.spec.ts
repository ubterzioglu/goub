import { expect, test } from "@playwright/test";

test("homepage highlights compare-first value proposition", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: /Get Out of Busywork/i })).toBeVisible();
  await expect(
    page.getByText(/teklifleri, sozlesmeleri, tablolari ve toplanti notlarini/i)
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /ucretsiz deneyin/i })).toBeVisible();
});
