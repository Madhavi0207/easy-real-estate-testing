import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";

Given(
  "The user is already in the login page",
  async function (this: CustomWorld) {
    console.log("Ok");
  },
);

When(
  "The user enters the following credentials",
  async function (this: CustomWorld) {
    console.log("Okay");
  },
);
Then("The user shall enter the admin page", async function (this: CustomWorld) {
  console.log("Okay");
});
