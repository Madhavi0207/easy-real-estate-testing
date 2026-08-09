import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { AddPropertiesPage } from "../pageObject/AddPropertiesPage";
import { CustomWorld } from "../support/CustomWorld";
import { LoginPage } from "../pageObject/LoginPage";

Given(
  "the admin user has logged in with the following credentials:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }
    await this.loginPage.navigateToLoginPage();
    await this.loginPage.enterDetails(dataTable);
    expect(this.loginPage.dashboardSelector).toBeVisible();
  },
);

Given("the user is in the properties page", async function (this: CustomWorld) {
  if (!this.addPropertiesPage) {
    this.addPropertiesPage = new AddPropertiesPage(this.page);
  }
  await this.addPropertiesPage.goToTheBranch();
});

When(
  "the admin user fills basic info:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.addPropertiesPage) {
      this.addPropertiesPage = new AddPropertiesPage(this.page);
    }
    await this.addPropertiesPage.addProperties();
    await this.addPropertiesPage.fillBasicInfoForm(dataTable);
  },
);

When(
  "the user enters the location details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.addPropertiesPage) {
      this.addPropertiesPage = new AddPropertiesPage(this.page);
    }

    await this.addPropertiesPage.filllocationInfoForm(dataTable);
  },
);

When(
  "the user enters the property details:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.addPropertiesPage) {
      this.addPropertiesPage = new AddPropertiesPage(this.page);
    }

    await this.addPropertiesPage.fillPropertyDetailsForm(dataTable);
  },
);

When(
  "the user uploads the photos of the house",
  async function (this: CustomWorld) {
    if (!this.addPropertiesPage) {
      this.addPropertiesPage = new AddPropertiesPage(this.page);
    }

    await this.addPropertiesPage.uploadFileForm();
  },
);

Then(
  "the property must be added to all properties",
  async function (this: CustomWorld) {
    console.log("Okay");
  },
);
