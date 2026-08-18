import { DataTable } from "@cucumber/cucumber";
import { Locator, Page } from "playwright/test";

export class AddAmenitiesPage {
  private readonly page: Page;

  private readonly propertiesSelector: Locator;

  private readonly amenitiesSelector: Locator;

  private readonly addAmenitybtnSelector: Locator;

  private readonly amenityTitleSelector: Locator;

  private readonly createBtnSelector: Locator;

  public readonly assertAmenity: Locator;
  constructor(page: Page) {
    this.page = page;

    this.propertiesSelector = this.page.getByRole("button", {
      name: "Properties",
    });

    this.amenitiesSelector = this.page.getByRole("link", {
      name: "Amenities",
      exact: true,
    });

    this.addAmenitybtnSelector = this.page.getByRole("button", {
      name: "Add New Amenity",
    });

    this.amenityTitleSelector = this.page.getByRole("textbox", {
      name: "Facility Title",
    });

    this.createBtnSelector = this.page.getByRole("button", {
      name: "Create amenity",
    });

    this.assertAmenity = this.page.getByText("Kitchen", {
      exact: true,
    });
  }

  async goToAmenities(): Promise<void> {
    await this.propertiesSelector.click();
    await this.amenitiesSelector.click();
  }

  async fillAmenitiesForm(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();

    await this.addAmenitybtnSelector.click();
    await this.amenityTitleSelector.fill(data[0].title);

    await this.createBtnSelector.click();
  }
}
