import { test, expect } from "@playwright/test";

test.describe("Testing all the form fields", () => {

test.beforeEach(async({page})=>{
  await page.goto('http://localhost:5173/');
})

    test("Test 1: When user fills all data correctly(Permanent Address: Same as above) and submits the form", async ({
    page,
  }) => {
    await page.getByPlaceholder("First Name").fill("Biswaranjan");
    await page.getByPlaceholder("Last Name").fill("Pradhan");
    await page.locator("#Male").check();
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
    await page.on("dialog", async (dialog) => {
      await expect(dialog.message()).toBe(
        "Form Submitted Successfully! Check your console for form data."
      );
      dialog.accept();
    });
  });

  test("Test 2: When user fills all data correctly(Permanent Address: Different) and submits the form", async ({
    page,
  }) => {
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
    // await page.locator("#sameAsResidence").check();
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
    await page.locator("#React").check();
    await page.locator("#Angular").check();
    await page.locator("#Vuejs").check();
    await page.locator("#Django").check();
    await page.locator("#Flask").check();
    await page.getByRole("button", { name: "Submit" }).click();
    await page.on("dialog", async (dialog) => {
      await expect(dialog.message()).toBe(
        "Form Submitted Successfully! Check your console for form data."
      );
      dialog.accept();
    });
    // await page.waitForTimeout(10000);
  });

    test("Test 3: When user misses some fields in Profile Form", async ({
    page,
  }) => {
    await page.getByPlaceholder("First Name").fill("Biswaranjan");
    // await page.getByPlaceholder("Last Name").fill("Pradhan");
    await page.locator("#Male").click();
    await page.locator("text=Next").click();
    await expect(page.getByRole('heading',{level:3})).toHaveText(/You missed to fill/);
  
  });   

    test("Test 4: When user misses any field in Residence Address", async ({
    page,
  }) => {
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
    await page.locator("text=Next").click();
    await expect(page.getByRole('heading',{level:3})).toHaveText(/You missed to fill/);

  });

    test("Test 5: When user misses any field in Permanent Address", async ({
    page,
  }) => {
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
    // await page.keyboard.press("Tab");
    // await page.keyboard.type("India");
    await page.locator("#sameAsResidence").check();
    await page.locator("text=Next").click();
   await expect(page.getByRole('heading',{level:3})).toHaveText(/You missed to fill/);
  });

  test("Test 6: When user doesn't select any TechStack", async ({
    page,
  }) => {
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
    await page.getByRole("button", { name: "Submit" }).click();
   await expect(page.getByRole('heading',{level:3})).toHaveText(/Please enter atleast 1 Tech Stack/)
  });

  test("Test 7: User can click on any tab and see all the form content without filling but cant submit", async ({
    page,
  }) => {
    await page.getByRole('button',{name:'Address'}).click();
    await page.getByRole('button',{name:'Tech Stack'}).click();
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.getByRole('heading',{level:3})).toHaveText(/You missed to fill/);   
  });

});
