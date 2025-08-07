import { test, expect } from "@playwright/test";

test.describe("Step Form Submission", () => {
  //This is the check for error if user misses any of the field in the profile page

  test("Should show error when last name is missing", async ({ page }) => {
    await page.goto("http://localhost:5173/");

    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .fill("Biswaranjan");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Female$/ })
      .locator("#push-everything")
      .check();
    await page.getByRole("button", { name: "Next" }).click();
    const errorMessage = await page.locator("h3");
    await expect(errorMessage).toHaveText(
      "You missed to fill 1 fields in Profile Tab"
    );
  });

  //Test to check if error showing when any field in Residence Address is missed
  test("Should show how many fields are not filled by user in Residence address", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .fill("Testing Address");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .fill("Address Testing");
    await page
      .locator("div")
      .filter({ hasText: /^Male$/ })
      .locator("#push-everything")
      .check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.locator(".bg-transparent").first().click();
    await page.locator(".bg-transparent").first().fill("Testing");
    await page.locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent").click();
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .fill("Bhubaneswar");
    await page.locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent").click();
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .fill("Odisha");
    await page.getByRole("button", { name: "Next" }).click();
    const errorMessage = await page.locator("h3");
    await expect(errorMessage).toHaveText(
      "You missed to fill 2 fields in Address Tab: Residence Address"
    );
  });

  //Test to check if error showing when Permanent Address is not filled

  test("Check if user tries to go next without filling Permanent Address", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .fill("Testing");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .fill("Testing");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Female$/ })
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^Female$/ })
      .locator("#push-everything")
      .check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.locator(".bg-transparent").first().click();
    await page.locator(".bg-transparent").first().fill("Plot 000");
    await page.locator(".bg-transparent").first().press("Tab");
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .fill("Bhubaneswar");
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .fill("Odisha");
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(5) > .w-4\\/5 > .bg-transparent")
      .fill("778778");
    await page.locator("div:nth-child(6) > .w-4\\/5 > .bg-transparent").click();
    await page
      .locator("div:nth-child(6) > .w-4\\/5 > .bg-transparent")
      .fill("India");
    await page.getByRole("button", { name: "Next" }).click();
    const errorMessage = await page.locator("h3");
    await expect(errorMessage).toHaveText(
      "You missed to fill 5 fields in Address Tab: Permanent Address"
    );
  });

  //Test to check if no field is selected in Tech Stack section and user tries to submit

  test("Check if user tries to submit without checking any Tech Stack", async ({
    page,
  }) => {
    await page.goto("http://localhost:5173/");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .fill("Test");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .fill("Test");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Female$/ })
      .locator("#push-everything")
      .check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.locator(".bg-transparent").first().click();
    await page.locator(".bg-transparent").first().fill("Address test ");
    await page.locator(".bg-transparent").first().press("Tab");
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .fill("city");
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .fill("state");
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(5) > .w-4\\/5 > .bg-transparent")
      .fill("pin");
    await page
      .locator("div:nth-child(5) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(6) > .w-4\\/5 > .bg-transparent")
      .fill("country");
    await page.getByRole("heading", { name: "Same as above" }).click();
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("button", { name: "Submit" }).click();
    const errorMessage = await page.locator("h3");
    await expect(errorMessage).toHaveText("Please enter atleast 1 Tech Stack");
  });

  //Writing the test case where all the fields are filled and form is submitted successfully

  test("Should fill every field and submit successfully", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .click();
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .fill("Biswa Ranjan");
    await page
      .locator("div")
      .filter({ hasText: /^First Name :$/ })
      .getByRole("textbox")
      .press("Tab");
    await page
      .locator("div")
      .filter({ hasText: /^Last Name :$/ })
      .getByRole("textbox")
      .fill("Pradhan");
    await page
      .locator("div")
      .filter({ hasText: /^Male$/ })
      .locator("#push-everything")
      .check();
    await page.getByRole("button", { name: "Next" }).click();
    await page.locator(".bg-transparent").first().click();
    await page
      .locator(".bg-transparent")
      .first()
      .fill("Plot.No- 301, Parvati Villa");
    await page.locator(".bg-transparent").first().press("Tab");
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .fill("Bhubaneswar");
    await page
      .locator("div:nth-child(3) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .fill("Odisha");
    await page
      .locator("div:nth-child(4) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(5) > .w-4\\/5 > .bg-transparent")
      .fill("751001");
    await page
      .locator("div:nth-child(5) > .w-4\\/5 > .bg-transparent")
      .press("Tab");
    await page
      .locator("div:nth-child(6) > .w-4\\/5 > .bg-transparent")
      .fill("India");
    await page.getByRole("checkbox").check();
    await page.getByRole("button", { name: "Next" }).click();
    await page
      .locator("div")
      .filter({ hasText: /^React$/ })
      .getByRole("checkbox")
      .check();
    await page
      .locator("div")
      .filter({ hasText: /^Vue\.js$/ })
      .getByRole("checkbox")
      .check();
    await page
      .locator("div")
      .filter({ hasText: /^Angular$/ })
      .getByRole("checkbox")
      .check();
    await page
      .locator("div")
      .filter({ hasText: /^Flask$/ })
      .getByRole("checkbox")
      .check();
    await page
      .locator("div")
      .filter({ hasText: /^Spring Boot$/ })
      .getByRole("checkbox")
      .check();
    await page.getByRole("button", { name: "Submit" }).click();
  });
});




// This is the check for error if user misses any of the field in the profile page
// Test to check if error showing when any field in Residence Address is missed
// Test to check if error showing when Permanent Address is not filled
// Test to check if no field is selected in Tech Stack section and user tries to submit
// Writing the test case where all the fields are filled and form is submitted successfully