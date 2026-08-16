import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { LoginPage } from "../pageObject/LoginPage";
import { expect } from "playwright/test";
import { AddFacilityPage } from "../pageObject/AddFacilityPage";
import { AddPropertiesPage } from "../pageObject/AddPropertiesPage";

Given(
  "the user is loggin in with the valid credential:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }

    await this.loginPage.navigateToLoginPage();
    await this.loginPage.enterDetails(dataTable);
    expect(this.loginPage.dashboardSelector).toBeVisible();
  },
);
Given("the user is in the property page", async function (this: CustomWorld) {
  if (!this.addPropertiesPage) {
    this.addPropertiesPage = new AddPropertiesPage(this.page);
  }
  await this.addPropertiesPage.goToTheBranch();
});

Given("the user is in facilities page", async function (this: CustomWorld) {
  if (!this.addFacilityPage) {
    this.addFacilityPage = new AddFacilityPage(this.page);
  }

  await this.addFacilityPage.gotoFacility();
});

When(
  "the user fills the create facilites form:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.addFacilityPage) {
      this.addFacilityPage = new AddFacilityPage(this.page);
    }

    await this.addFacilityPage.fillFacilityForm(dataTable);
  },
);

Then(
  "the facilites shall added in the facilites page",
  async function (this: CustomWorld) {
    if (!this.addFacilityPage) {
      this.addFacilityPage = new AddFacilityPage(this.page);
    }

    await expect(this.addFacilityPage.facilityTitleAssertion).toBeVisible();
    await expect(
      this.addFacilityPage.facilityDescriptionAssertion,
    ).toBeVisible();
  },
);
