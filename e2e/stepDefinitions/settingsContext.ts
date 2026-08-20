import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/CustomWorld";
import { LoginPage } from "../pageObject/LoginPage";
import { SettingsPage } from "../pageObject/SettingsPage";

// =====================================================
// BACKGROUND
// =====================================================

Given(
  "the user is already logged in with the following credentials:",
  async function (this: CustomWorld, dataTable: DataTable) {
    if (!this.loginPage) {
      this.loginPage = new LoginPage(this.page);
    }

    await this.loginPage.navigateToLoginPage();
    await this.loginPage.enterDetails(dataTable);
    await expect(this.loginPage.dashboardSelector).toBeVisible();
  },
);

Given("the user is on the Settings page", async function (this: CustomWorld) {
  if (!this.settingsPage) {
    this.settingsPage = new SettingsPage(this.page);
  }

  await this.settingsPage.goToSettings();
});

// =====================================================
// PROFILE
// =====================================================

When(
  "the user navigates to the Profile settings",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.profileSettings();
  },
);

Then(
  "the Profile heading should be displayed",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.profileHeading).toBeVisible();
  },
);
//changes from here

When(
  "the user updates the profile name to {string}",
  async function (this: CustomWorld, name: string) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.updateProfileName();
  },
);

When(
  "the user updates the phone number to {string}",
  async function (this: CustomWorld, phone: string) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.updateProfilePhone();
  },
);

When(
  "the user clicks the Update profile button",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.updateProfileButtonfunction();
  },
);

Then(
  "the profile should be updated successfully",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.profileNameInput).toHaveText("Test User");
    await expect(this.settingsPage.profilePhoneInput).toHaveText("98123456780");
  },
);

// =====================================================
// MY DETAILS
// =====================================================

When(
  "the user navigates to the My Details settings",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }
    await this.settingsPage.myDetailsSection();
  },
);

Then(
  "the My Details settings should be displayed",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }
    await this.settingsPage.myDetailsValues();
  },
);

// =====================================================
// DAILY LOG
// =====================================================

When(
  "the user navigates to the Daily Log settings",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.goToDailyLog();
  },
);

Then(
  "the Daily Log settings should be displayed",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.dailyLogHeading).toBeVisible();
  },
);

When(
  "the user enters the required daily log details",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.submitDailyLog();
  },
);

Then(
  "the daily log should be added successfully",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }
    await expect(this.settingsPage.dailyLogUpdation).toBeVisible();
  },
);

// SALES TARGET

When(
  "the user navigates to the Sales Target settings",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.gotToSalesTarget();
  },
);

Then(
  "the Sales Target settings should be displayed",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }
    await expect(this.settingsPage.salesTargetHeading).toBeVisible();
  },
);

When(
  "the user enters a valid sales target",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }
    await this.settingsPage.addNewSalesTarget();
  },
);

Then(
  "the sales target should be saved successfully",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.verifySalesTarget).toBeVisible();
  },
);

When("the user adds sales", async function (this: CustomWorld) {
  if (!this.settingsPage) {
    this.settingsPage = new SettingsPage(this.page);
  }
  await this.settingsPage.addSaleForTheMonth();
});

Then(
  "the sales should be added successfully",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.salesAcheived).toBeVisible();
  },
);

// =====================================================
// KYC
// =====================================================

When(
  "the user navigates to the KYC settings",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.goToKycPage();
  },
);

Then(
  "the KYC settings should be displayed",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.kycHeading).toBeVisible();
  },
);

When(
  "the user uploads the required KYC documents",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.verifyPanCard();
  },
);

Then(
  "the KYC details should be submitted successfully",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.pendingValue).toBeVisible();
    await expect(this.settingsPage.replaceBtn).toBeVisible();
  },
);

// =====================================================
// APPEARANCE
// =====================================================

When(
  "the user navigates to the Appearance settings",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.goToAppearancePage();
  },
);

Then(
  "the Appearance settings should be displayed",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.appearanceHeading).toBeVisible();
  },
);

When(
  "the user selects a different appearance option",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await this.settingsPage.goToAppearancePage();
  },
);

Then(
  "the application appearance should be changed successfully",
  async function (this: CustomWorld) {
    if (!this.settingsPage) {
      this.settingsPage = new SettingsPage(this.page);
    }

    await expect(this.settingsPage.updatedPreferenceMessageBox).toBeVisible();
  },
);
