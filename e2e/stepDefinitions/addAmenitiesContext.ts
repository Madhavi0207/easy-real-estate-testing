import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { CustomWorld } from "../support/CustomWorld";
import { LoginPage } from "../pageObject/LoginPage";
import { expect } from "playwright/test";
import { AddPropertiesPage } from "../pageObject/AddPropertiesPage";
import { AddAmenitiesPage } from "../pageObject/AddAmenitiesPage";

Given(
  "the user is already in the login page and in the property page",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }

    await this.loginPage.navigateToLoginPage();
    await this.loginPage.enterDetails(dataTable);

    await expect(this.loginPage.dashboardSelector).toBeVisible();

    if (!this.addPropertiesPage) {
      this.addPropertiesPage = new AddPropertiesPage(this.page);
    }

    await this.addPropertiesPage.goToTheBranch();
  },
);

Given("the user is in the amenities page", async function (this: CustomWorld) {
  if (!this.addAmenitiesPage) {
    this.addAmenitiesPage = new AddAmenitiesPage(this.page);
  }

  await this.addAmenitiesPage.goToAmenities();
});

When(
  "the user fills the amenity form",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.addAmenitiesPage) {
      this.addAmenitiesPage = new AddAmenitiesPage(this.page);
    }

    await this.addAmenitiesPage.fillAmenitiesForm(dataTable);
  },
);

Then(
  "the amenity shall be added in the amenities page",
  async function (this: CustomWorld) {
    if (!this.addAmenitiesPage) {
      this.addAmenitiesPage = new AddAmenitiesPage(this.page);
    }

    await expect(this.addAmenitiesPage.assertAmenity).toBeVisible();
  },
);
