import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";
import { LoginPage } from "../pageObject/LoginPage";

Given(
  "The user is already in the login page",
  async function (this: CustomWorld) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }
    await this.loginPage.navigateToLoginPage();
  },
);

When(
  "The user enters the following credentials",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }

    await this.loginPage.enterDetails(dataTable);
  },
);
Then("The user shall enter the admin page", async function (this: CustomWorld) {
  if (!this.loginPage) {
    this.loginPage = new LoginPage(this.page);
  }
  expect(this.loginPage.dashboardSelector).toBeVisible();
});
