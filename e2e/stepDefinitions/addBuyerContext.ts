import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { CustomWorld } from "../support/CustomWorld";
import { LoginPage } from "../pageObject/LoginPage";
import { AddBuyerPage } from "../pageObject/AddBuyerPage";
import { AddPropertiesPage } from "../pageObject/AddPropertiesPage";

Given(
  "the admin user is logged in with the following credentials:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }
    await this.loginPage.navigateToLoginPage();
    await this.loginPage.enterDetails(dataTable);
    expect(this.loginPage.dashboardSelector).toBeVisible();
  },
);

Given("the user is in the buyers page", async function (this: CustomWorld) {
  if (!this.addPropertiesPage) {
    this.addPropertiesPage = new AddPropertiesPage(this.page);
  }

  await this.addPropertiesPage.goToTheBranch();

  if (!this.addBuyerPage) {
    this.addBuyerPage = new AddBuyerPage(this.page);
  }

  await this.addBuyerPage.goToBuyersPage();
});

When(
  "the user enters the client information with following details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.addBuyerPage) {
      this.addBuyerPage = new AddBuyerPage(this.page);
    }

    await this.addBuyerPage.fillBuyersInfoForm(dataTable);
  },
);

Then("the buyer shall be added", async function (this: CustomWorld) {
  if (!this.addBuyerPage) {
    this.addBuyerPage = new AddBuyerPage(this.page);
  }

  await this.addBuyerPage.allBuyersPage.click();
  await expect(this.addBuyerPage.assertNewBuyer).toBeVisible();
});
