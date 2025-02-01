const { test, describe, expect, beforeEach } = require("@playwright/test");

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible();
  });
  test("page of particular pokemon can be opened", async ({ page }) => {
    await page.goto("/"); // Start from the homepage
    await page.getByText("ivysaur").click(); // Click the link to navigate
    await expect(page.getByText("chlorophyll")).toBeVisible();
  });
});
