import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";

let browser, context, page;


Given("I open the form", async function () {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("http://localhost:5173/");
});

When("I fill the form with valid data", async function () {
  await page.getByPlaceholder("First Name").fill("Biswaranjan");
  await page.getByPlaceholder("Last Name").fill("Pradhan");
  await page.locator("#Male").click();
  await page.locator("text=Next").click();

  await page.getByPlaceholder("Address").nth(0).fill("Plot no: 301");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Bhubaneswar");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Odisha");
  await page.keyboard.press("Tab");
  await page.keyboard.type("751024");
  await page.keyboard.press("Tab");
  await page.keyboard.type("India");
  await page.locator("#sameAsResidence").check();
  await page.locator("text=Next").click();

  await page.locator("#React").check();
  await page.locator("#Angular").check();
  await page.locator("#Vuejs").check();
  await page.locator("#Django").check();
  await page.locator("#Flask").check();
  await page.getByRole("button", { name: "Submit" }).click();
});

Then("I should see the submission alert", function () {
  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe(
      "Form Submitted Successfully! Check your console for form data."
    );
    await dialog.accept();
    await browser.close();
  });
});
