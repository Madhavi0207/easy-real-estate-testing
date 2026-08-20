import { Page, Locator, expect } from "@playwright/test";
import { link } from "node:fs";

export class SettingsPage {
  private readonly page: Page;

  // SETTINGS NAVIGATION

  private readonly settingsLink: Locator;
  private readonly profileLink: Locator;
  private readonly myDetailsLink: Locator;
  private readonly dailyLogLink: Locator;

  private readonly salesTargetLink: Locator;
  private readonly kycLink: Locator;
  private readonly appearanceLink: Locator;

  // PROFILE

  public readonly profileHeading: Locator;
  public readonly profileNameInput: Locator;
  public readonly profilePhoneInput: Locator;
  //   private readonly profileAvatarInput: Locator;
  private readonly updateProfileButton: Locator;

  // MY DETAILS

  private readonly myDetailsHeading: Locator;
  private readonly myDetailsName: Locator;
  private readonly myDetailsPhone: Locator;

  // DAILY LOG

  public readonly dailyLogHeading: Locator;
  private readonly submitLogButton: Locator;
  private readonly propertiesCollected: Locator;
  private readonly propertiesShown: Locator;
  private readonly buyersAdded: Locator;
  private readonly saveDailyLogButton: Locator;

  public readonly dailyLogUpdation: Locator;

  // SALES TARGET

  public readonly salesTargetHeading: Locator;
  private readonly addSalesTargetBtn: Locator;

  private readonly editSalesTarget: Locator;
  private readonly targetAmount: Locator;
  private readonly saveTarget: Locator;
  public readonly verifySalesTarget: Locator;

  private readonly selectProperty: Locator;
  private readonly propertyOption: Locator;
  private readonly selectBuyer: Locator;
  private readonly buyersOption: Locator;
  private readonly salesTargetInput: Locator;
  private readonly saveSalesTargetButton: Locator;
  public readonly salesAcheived: Locator;

  // KYC
  public readonly kycHeading: Locator;
  private readonly uploadKycFile: Locator;
  public readonly pendingValue: Locator;
  public readonly replaceBtn: Locator;

  // APPEARANCE

  public readonly appearanceHeading: Locator;
  private readonly appearanceFontOptions: Locator;
  private readonly selectTheme: Locator;
  private readonly themeUpdate: Locator;
  private readonly updatePreferencesBtn: Locator;

  public readonly updatedPreferenceMessageBox: Locator;
  constructor(page: Page) {
    this.page = page;

    this.settingsLink = this.page.getByRole("button", { name: "Settings" });

    this.profileLink = this.page.getByRole("link", { name: "Profile" });

    this.profileHeading = this.page.getByRole("heading", { name: "Profile" });

    this.profileNameInput = this.page.getByRole("textbox", { name: "Name" });

    this.profilePhoneInput = this.page.getByRole("textbox", {
      name: "Phone Number",
    });

    this.updateProfileButton = this.page.getByRole("button", {
      name: "Update profile",
    });

    this.myDetailsLink = this.page.getByRole("link", { name: "My details" });

    this.myDetailsHeading = this.page.getByRole("heading", {
      name: "My details",
    });

    this.myDetailsName = this.page.getByText("Test User", { exact: true });
    this.myDetailsPhone = this.page.getByText("98123456780", { exact: true });

    //daily log
    this.dailyLogLink = this.page.getByRole("link", { name: "Daily log" });

    this.dailyLogHeading = this.page.getByRole("heading", {
      name: "Daily log",
    });

    this.submitLogButton = this.page.getByRole("button", {
      name: "Submit today",
    });

    this.propertiesCollected = this.page.getByRole("spinbutton", {
      name: "Properties collected",
    });

    this.propertiesShown = this.page.getByRole("spinbutton", {
      name: "Properties showed",
    });

    this.buyersAdded = this.page.getByRole("spinbutton", {
      name: "Buyers added",
    });
    this.saveDailyLogButton = this.page.getByRole("button", {
      name: "Submit today",
    });

    this.dailyLogUpdation = this.page.getByText(
      "2 collected · 1 shown · 3 buyers",
      { exact: true },
    );

    //sales target

    this.salesTargetLink = this.page.getByRole("link", {
      name: "Sales target",
    });

    this.salesTargetHeading = this.page.getByRole("heading", {
      name: "Sales target",
    });

    this.editSalesTarget = this.page.getByRole("button", {
      name: "Edit target",
    });

    this.targetAmount = this.page.getByRole("spinbutton", {
      name: "Target Amount (NPR)",
    });

    this.saveTarget = this.page.getByRole("button", { name: "Save Target" });

    this.verifySalesTarget = this.page.getByText("NPR 2 crores", {
      exact: true,
    });

    this.addSalesTargetBtn = this.page.getByRole("button", {
      name: "Add sale",
    });

    this.selectProperty = this.page.getByText("Select property...", {
      exact: true,
    });
    this.propertyOption = this.page.getByRole("option", {
      name: "home for sale (E1140)",
    });

    this.selectBuyer = this.page.getByText("Select buyer...", { exact: true });

    this.buyersOption = this.page.getByRole("option", {
      name: "Victor Mcgee (BID-1060)",
    });

    this.salesTargetInput = this.page.getByRole("spinbutton", {
      name: "Sale Value (NPR)",
    });

    this.saveSalesTargetButton = this.page.getByRole("button", {
      name: "Add Sale",
    });

    this.salesAcheived = this.page.locator('path[name="Achieved"]');

    // kyc

    this.kycLink = this.page.getByRole("link", { name: "KYC" });
    this.kycHeading = this.page.getByRole("heading", { name: "KYC documents" });

    this.uploadKycFile = this.page
      .getByRole("heading", {
        name: "PAN card",
        exact: true,
      })
      .getByRole("button", {
        name: "Upload",
      });

    this.pendingValue = this.page.getByText("Pending", { exact: true });
    this.replaceBtn = this.page.getByRole("button", { name: "Replace" });

    //apperance

    this.appearanceLink = this.page.getByRole("link", { name: "Appearance" });
    this.appearanceHeading = this.page.getByRole("heading", {
      name: "Appearance",
    });

    this.appearanceFontOptions = this.page
      .getByRole("combobox", {
        name: "Font",
      })
      .getByRole("option", { name: "inter" });

    this.selectTheme = this.page.getByText("Light", { exact: true });
    this.themeUpdate = this.page.getByRole("radiogroup");

    this.updatePreferencesBtn = this.page.getByRole("button", {
      name: "Update preferences",
    });

    this.updatedPreferenceMessageBox = this.page.getByText(
      "You submitted the following values:",
      { exact: true },
    );
  }

  async goToSettings(): Promise<void> {
    await this.settingsLink.click();
  }

  async profileSettings(): Promise<void> {
    await this.profileLink.click();
    await expect(this.profileHeading).toBeVisible();
  }

  async updateProfileName(): Promise<void> {
    await this.profileNameInput.click();
    await this.profileNameInput.clear();
    await this.profileNameInput.fill("Test User");
  }

  async updateProfilePhone(): Promise<void> {
    await this.profilePhoneInput.click();
    await this.profilePhoneInput.clear();
    await this.profilePhoneInput.fill("98123456780");
  }

  async updateProfileButtonfunction(): Promise<void> {
    await this.updateProfileButton.click();
  }

  async myDetailsSection(): Promise<void> {
    await this.myDetailsLink.click();

    await expect(this.myDetailsHeading).toBeVisible();
  }

  async myDetailsValues(): Promise<void> {
    await expect(this.myDetailsName).toHaveText("Test User");

    await expect(this.myDetailsPhone).toHaveText("98123456780");
  }

  async goToDailyLog(): Promise<void> {
    await this.dailyLogLink.click();
  }

  async submitDailyLog(): Promise<void> {
    await this.submitLogButton.click();
    await this.propertiesCollected.fill("2");
    await this.propertiesShown.fill("1");
    await this.buyersAdded.fill("3");

    await this.saveDailyLogButton.click();
  }

  async gotToSalesTarget(): Promise<void> {
    await this.salesTargetLink.click();
  }

  async addNewSalesTarget(): Promise<void> {
    await this.editSalesTarget.click();

    await this.targetAmount.clear();
    await this.targetAmount.fill("2");

    await this.saveTarget.click();
  }

  async addSaleForTheMonth(): Promise<void> {
    await this.addSalesTargetBtn.click();
    await this.selectProperty.click();
    await this.propertyOption.click();
    await this.selectBuyer.click();
    await this.buyersOption.click();
    await this.salesTargetInput.fill("1");

    await this.saveSalesTargetButton.click();
  }

  async goToKycPage(): Promise<void> {
    await this.kycLink.click();
  }

  async verifyPanCard(): Promise<void> {
    await this.uploadKycFile.click();
    await this.uploadKycFile.setInputFiles(
      "/home/madhu/Documents/easy-real-estate-testing/Lab2.jpg",
    );
  }

  async goToAppearancePage(): Promise<void> {
    await this.appearanceLink.click();
  }

  async updateAppearancePage(): Promise<void> {
    await this.appearanceFontOptions.click();
    await this.selectTheme.click();
    await this.themeUpdate.check();

    await this.updatePreferencesBtn.click();
  }
}
