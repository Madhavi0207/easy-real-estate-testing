import { expect, Locator, Page } from "@playwright/test";
import { DataTable } from "@cucumber/cucumber";

export class AddPropertiesPage {
  private readonly page: Page;

  private readonly gotoAppSelector: Locator;
  private readonly dashboardAssertion: Locator;

  private readonly propertySelector: Locator;
  private readonly addNewPropertySelector: Locator;

  private readonly propertyTitleSelector: Locator;
  private readonly propertyDescSelector: Locator;

  private readonly listingTypeSelector: Locator;
  private readonly listingTypeValueSelector: Locator;

  private readonly propertyTypeSelector: Locator;
  private readonly propertyTypeValueselector: Locator;

  private readonly priceSelector: Locator;

  private readonly handledBySelector: Locator;
  private readonly handleByValueSelector: Locator;

  private readonly basicInfoNextStepBtnSelector: Locator;

  constructor(page: Page) {
    this.page = page;

    this.gotoAppSelector = this.page
      .getByRole("link", { name: "Go to app" })
      .nth(0);
    this.dashboardAssertion = this.page.getByRole("link", { name: "Overview" });

    this.propertySelector = this.page.getByRole("button", {
      name: "Properties",
    });
    this.addNewPropertySelector = this.page.getByRole("link", {
      name: "Add New Property",
    });

    this.propertyTitleSelector = this.page.getByRole("textbox", {
      name: "Property Title",
    });
    this.propertyDescSelector = this.page.getByRole("textbox", {
      name: "Property Description",
    });

    this.listingTypeSelector = this.page.getByRole("combobox", {
      name: "Listing Type",
    });
    this.listingTypeValueSelector = this.page.getByRole("option", {
      name: "Rent",
    });

    this.propertyTypeSelector = this.page.getByRole("combobox", {
      name: "Property Type",
    });

    this.propertyTypeValueselector = this.page
      .locator("span")
      .filter({ hasText: "Residential Property" });

    this.priceSelector = this.page.getByRole("spinbutton", { name: "e.g. 1" });

    this.handledBySelector = this.page.getByText("Select user...");
    this.handleByValueSelector = this.page.getByRole("option", {
      name: "Madhavi Paudel",
    });

    this.basicInfoNextStepBtnSelector = this.page.getByRole("button", {
      name: "Next Step",
    });
  }

  async goToTheBranch(): Promise<void> {
    const kaskiCard = this.page.locator("article").filter({ hasText: "Kaski" });
    await kaskiCard.hover();

    await this.gotoAppSelector.click();
    expect(this.dashboardAssertion).toBeVisible();
  }

  async addProperties(): Promise<void> {
    await this.propertySelector.click();
    await this.addNewPropertySelector.click();
  }

  async fillBasicInfoForm(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();

    await this.propertyTitleSelector.fill(data[0].title);
    await this.propertyDescSelector.fill(data[0].description);

    await this.listingTypeSelector.click();
    await this.listingTypeValueSelector.click();
    await this.propertyTypeSelector.click();
    await this.propertyTypeValueselector.click();

    await this.priceSelector.fill(data[0].price);

    await this.handledBySelector.click();
    await this.handleByValueSelector.click();

    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.basicInfoNextStepBtnSelector.click(),
    ]);
  }
}
