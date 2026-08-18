import { expect, Locator, Page } from "@playwright/test";
import { DataTable } from "@cucumber/cucumber";

export class AddPropertiesPage {
  private readonly page: Page;

  private readonly gotoAppSelector: Locator;
  // private readonly dashboardAssertion: Locator;

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

  private readonly selectPropertyAreaSelector: Locator;
  private readonly propertyAreaOptionSelector: Locator;

  private readonly selectCitySelector: Locator;

  private readonly selectMunicipalitySelector: Locator;
  private readonly municipalityValueSelector: Locator;

  private readonly wardNoSelector: Locator;
  private readonly selectStreetAddress: Locator;

  private readonly locationNextStepBtnSelector: Locator;

  private readonly propertyFacingSelector: Locator;
  private readonly propertyFacingValueSelector: Locator;

  private readonly roadTypeSelector: Locator;
  private readonly roadTypeValueSelector: Locator;

  private readonly yearBuiltSelector: Locator;

  private readonly bedRoomSelector: Locator;
  private readonly kitchenSelector: Locator;
  private readonly floorDimensionsSelector: Locator;

  private readonly carAmenitySelector: Locator;
  private readonly roomFacilitySelector: Locator;

  private readonly propertyDetailsNextStepBtnSelector: Locator;

  private readonly uploadFile: Locator;
  private readonly publishListingBtnSelector: Locator;

  public readonly proprtyNameAssertion: Locator;

  constructor(page: Page) {
    this.page = page;

    this.gotoAppSelector = this.page
      .getByRole("link", { name: "Go to app" })
      .nth(0);

    // this.dashboardAssertion = this.page.getByRole("button", {
    //   name: "Kaski Kaski Admin",
    //   exact: true,
    // });
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

    this.selectPropertyAreaSelector = this.page.getByText("Select area...");
    this.propertyAreaOptionSelector = this.page.getByRole("option", {
      name: "Baglung Buspark",
    });
    this.selectCitySelector = this.page.getByRole("textbox", {
      name: "e.g. Kathmandu",
    });

    this.selectMunicipalitySelector = this.page.getByText(
      "Select Municipality",
    );
    this.municipalityValueSelector = this.page
      .locator("span")
      .filter({ hasText: "Pokhara Metropolitian City" });

    this.wardNoSelector = this.page.getByRole("textbox", { name: "Ward No" });

    this.selectStreetAddress = this.page.getByRole("textbox", {
      name: "e.g. Street 1",
    });

    this.locationNextStepBtnSelector = this.page.getByRole("button", {
      name: "Next Step",
    });

    this.propertyFacingSelector = this.page.getByRole("combobox", {
      name: "Property Facing",
    });
    this.propertyFacingValueSelector = this.page
      .locator("span")
      .filter({ hasText: "South West (SW)" });

    this.roadTypeSelector = this.page.getByRole("combobox", {
      name: "Road Type",
    });
    this.roadTypeValueSelector = this.page.getByRole("option", {
      name: "Paved",
      exact: true,
    });

    this.yearBuiltSelector = this.page.getByRole("textbox", {
      name: "e.g. 1990",
    });

    this.bedRoomSelector = this.page.getByRole("textbox", { name: "Bedrooms" });

    this.kitchenSelector = this.page.getByRole("textbox", { name: "Kitchen" });

    this.floorDimensionsSelector = this.page.getByRole("textbox", {
      name: "Floor Dimensions",
    });

    this.carAmenitySelector = this.page.getByRole("checkbox", {
      name: "car services",
    });

    this.roomFacilitySelector = this.page.getByRole("checkbox", {
      name: "room",
    });

    this.propertyDetailsNextStepBtnSelector = this.page.getByRole("button", {
      name: "Next Step",
    });

    this.uploadFile = this.page.locator("input[type='file']");
    this.publishListingBtnSelector = this.page.getByRole("button", {
      name: "Publish Listing",
    });

    this.proprtyNameAssertion = this.page
      .locator("tr")
      .filter({ hasText: "home for sale" });
  }

  async goToTheBranch(): Promise<void> {
    const kaskiCard = this.page.getByRole("link", {
      name: "Kaski",
      exact: true,
    });
    await kaskiCard.hover();

    await this.gotoAppSelector.click();
    // expect(this.dashboardAssertion).toBeVisible();
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

  async filllocationInfoForm(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();

    await this.selectPropertyAreaSelector.click();
    await this.propertyAreaOptionSelector.click();

    await this.selectCitySelector.fill(data[0].city);

    await this.selectMunicipalitySelector.click();
    await this.municipalityValueSelector.click();

    await this.wardNoSelector.fill(data[0].wardno);
    await this.selectStreetAddress.fill(data[0].streetaddress);

    await this.locationNextStepBtnSelector.click();
  }

  async fillPropertyDetailsForm(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();

    await this.propertyFacingSelector.click();
    await this.propertyFacingValueSelector.click();

    await this.roadTypeSelector.click();
    await this.roadTypeValueSelector.click();

    await this.yearBuiltSelector.fill(data[0].yearbuilt);
    await this.bedRoomSelector.fill(data[0].bedrooms);
    await this.kitchenSelector.fill(data[0].kitchen);
    await this.floorDimensionsSelector.fill(data[0].floorDimension);

    await this.carAmenitySelector.click();
    await this.roomFacilitySelector.click();

    await this.propertyDetailsNextStepBtnSelector.click();
  }

  async uploadFileForm(): Promise<void> {
    await this.uploadFile.setInputFiles([
      "/home/madhu/Documents/easy-real-estate-testing/file",
    ]);

    await this.publishListingBtnSelector.click();
  }
}
