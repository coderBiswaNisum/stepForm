import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, expect } from "@playwright/test";

let browser, context, page;

Given("I open the form", async function () {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();
  await page.goto("http://localhost:5173/");
});

When("I fill profile details correctly", async function () {
  await page.getByPlaceholder("First Name").fill("Biswaranjan");
  await page.getByPlaceholder("Last Name").fill("Pradhan");
  await page.locator("#Male").click();
  await page.locator("text=Next").click();
});

When("I fill only first name in profile", async function () {
  await page.getByPlaceholder("First Name").fill("Biswaranjan");
  await page.locator("#Male").click();
});

When("I click next in profile form", async function () {
  await page.locator("text=Next").click();
});

When("I fill residence address", async function () {
  await page.getByPlaceholder("Address").nth(0).fill("Plot no: 301");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Bhubaneswar");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Odisha");
  await page.keyboard.press("Tab");
  await page.keyboard.type("751024");
  await page.keyboard.press("Tab");
  await page.keyboard.type("India");
});

When("I partially fill residence address", async function () {
  await page.getByPlaceholder("Address").nth(0).fill("Plot no: 301");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Bhubaneswar");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Odisha");
  await page.keyboard.press("Tab");
  await page.keyboard.type("751024");
});

When("I check the same as residence checkbox", async function () {
  await page.locator("#sameAsResidence").check();
  await page.locator("text=Next").click();
});

When("I fill permanent address", async function () {
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Plot 222");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Rajnagar");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Odisha");
  await page.keyboard.press("Tab");
  await page.keyboard.type("753553");
  await page.keyboard.press("Tab");
  await page.keyboard.type("India");
  await page.locator("text=Next").click();
});

When("I fill permanent address partially", async function () {
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Plot 222");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Rajnagar");
  await page.keyboard.press("Tab");
  await page.keyboard.type("Odisha");
  await page.keyboard.press("Tab");
  await page.keyboard.type("753553");
  await page.locator("text=Next").click();
});

When("I select tech stacks", async function () {
  await page.locator("#React").check();
  await page.locator("#Angular").check();
  await page.locator("#Vuejs").check();
  await page.locator("#Django").check();
  await page.locator("#Flask").check();
});

When("I click next in address form", async function () {
  await page.locator("text=Next").click();
});

When("I submit the form", async function () {
  await page.getByRole("button", { name: "Submit" }).click();
});

When("I skip tech stack selection", async function () {
  await page.getByRole("button", { name: "Submit" }).click();
});

When("I navigate through all tabs without filling form", async function () {
  await page.getByRole("button", { name: "Address" }).click();
  await page.getByRole("button", { name: "Tech Stack" }).click();
});

When("I try to submit the form", async function () {
  await page.getByRole("button", { name: "Submit" }).click();
});

Then("I should see a success dialog", async function () {
  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toBe(
      "Form Submitted Successfully! Check your console for form data."
    );
    await dialog.accept();
  });
  await page.waitForTimeout(1000);
  await browser.close();
});

Then("I should see error message {string}", async function (expectedMessage) {
  const errorMessage = page.locator("#errMsg");
  await errorMessage.waitFor({ state: "visible" });
  // await expect(errorMessage).toBeVisible({ timeout: 10000});
  await expect(errorMessage).toHaveText(new RegExp(expectedMessage, "i"));
  await browser.close();
});
