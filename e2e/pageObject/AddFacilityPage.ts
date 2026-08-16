import { DataTable } from "@cucumber/cucumber";
import { Locator, Page } from "playwright/test";

export class AddFacilityPage {
  private readonly page: Page;

  private readonly propertySelector: Locator;

  private readonly addFacilitySelector: Locator;

  private readonly addFacilityBtnSelector: Locator;

  private readonly facilityTitleSelector: Locator;

  private readonly facilityValueSelector: Locator;

  private readonly createFacilityBtnSelector: Locator;

  public readonly facilityTitleAssertion: Locator;

  public readonly facilityDescriptionAssertion: Locator;

  constructor(page: Page) {
    this.page = page;

    this.propertySelector = this.page.getByRole("button", {
      name: "Properties",
    });

    this.addFacilitySelector = this.page.getByRole("link", {
      name: "Facilities",
    });

    this.addFacilityBtnSelector = this.page.getByRole("button", {
      name: "Add New Facility",
    });

    this.facilityTitleSelector = this.page.getByRole("textbox", {
      name: "Facility Title",
    });

    this.facilityValueSelector = this.page.getByRole("textbox", {
      name: "Facility Value",
    });

    this.createFacilityBtnSelector = this.page.getByRole("button", {
      name: "Create facility",
    });

    this.facilityTitleAssertion = this.page.getByRole("cell", {
      name: "Parking",
      exact: true,
    });
    this.facilityDescriptionAssertion = this.page.getByRole("cell", {
      name: "Parking is available",
      exact: true,
    });
  }

  async gotoFacility(): Promise<void> {
    await this.propertySelector.click();
    await this.addFacilitySelector.click();
  }

  async fillFacilityForm(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();

    await this.addFacilityBtnSelector.click();
    await this.facilityTitleSelector.fill(data[0].title);
    await this.facilityValueSelector.fill(data[0].value);

    await this.createFacilityBtnSelector.click();
  }
}
