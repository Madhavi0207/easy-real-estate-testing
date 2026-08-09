import { expect, Locator, Page } from "playwright/test";
import { DataTable } from "@cucumber/cucumber";

export class AddBuyerPage {
  private readonly page: Page;

  private readonly goToBuyerSelector: Locator;
  private readonly addNewBuyerSelector: Locator;

  private readonly createBuyerHeading: Locator;

  private readonly clientNameSelector: Locator;

  private readonly phoneNumberSelector: Locator;

  private readonly addressSelector: Locator;

  private readonly inquiryDateSelector: Locator;
  private readonly inquiryDateValueSelector: Locator;

  private readonly buyerCategorySelector: Locator;
  private readonly categoryValueSelector: Locator;

  private readonly propertyRequirementSelector: Locator;

  private readonly priceRangeSelector: Locator;
  private readonly priceRangeValueSelector: Locator;

  private readonly paymentMethodSelector: Locator;

  private readonly urgencySelector: Locator;

  private readonly referredBySelector: Locator;

  private readonly handledBySelector: Locator;
  private readonly handledByValueSelector: Locator;

  private readonly locationAreaSelector: Locator;

  private readonly createBuyerBtnSelector: Locator;

  public readonly allBuyersPage: Locator;
  public readonly assertNewBuyer: Locator;

  constructor(page: Page) {
    this.page = page;

    this.goToBuyerSelector = this.page.getByRole("button", { name: "Buyers" });

    this.addNewBuyerSelector = this.page.getByRole("link", {
      name: "Add New Buyer",
    });
    this.createBuyerHeading = this.page.getByRole("heading", {
      name: "Create Buyer",
    });

    this.clientNameSelector = this.page.getByRole("textbox", {
      name: "Client Name",
    });
    this.phoneNumberSelector = this.page.getByRole("textbox", {
      name: "Phone Number",
    });
    this.addressSelector = this.page.getByRole("textbox", { name: "Address" });

    this.inquiryDateSelector = this.page.getByText("Inquiry Date");
    this.inquiryDateValueSelector = this.page.getByRole("button", {
      name: "Today, Monday, August 10th, 2026",
    });

    this.buyerCategorySelector = this.page.getByRole("combobox", {
      name: "Category",
    });
    this.categoryValueSelector = this.page
      .locator("span")
      .filter({ hasText: "Hot" });

    this.propertyRequirementSelector = this.page.getByRole("textbox", {
      name: "Property Requirement",
    });

    this.priceRangeSelector = this.page.getByRole("combobox", {
      name: "Price Range",
    });
    this.priceRangeValueSelector = this.page
      .locator("span")
      .filter({ hasText: "3 - 3.5 Crore" });

    this.paymentMethodSelector = this.page.getByRole("textbox", {
      name: "Payment Method",
    });

    this.urgencySelector = this.page.getByRole("textbox", { name: "Urgency" });

    this.referredBySelector = this.page.getByRole("textbox", {
      name: "Referred By",
    });

    this.handledBySelector = this.page.getByText("Select user...");
    this.handledByValueSelector = this.page.getByRole("option", {
      name: "Madhavi Paudel",
    });

    this.locationAreaSelector = this.page.getByRole("checkbox", {
      name: "Baglung Buspark",
    });

    this.createBuyerBtnSelector = this.page.getByRole("button", {
      name: "Create Buyer",
    });

    this.allBuyersPage = this.page.getByRole("link", { name: "All Buyers" });
    this.assertNewBuyer = this.page.getByRole("cell", { name: "Ram" });
  }

  async goToBuyersPage(): Promise<void> {
    await this.goToBuyerSelector.click();
    await this.addNewBuyerSelector.click();

    await expect(this.createBuyerHeading).toBeVisible();
  }

  async fillBuyersInfoForm(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();

    await this.clientNameSelector.fill(data[0].clientName);
    await this.phoneNumberSelector.fill(data[0].phoneNumber);
    await this.addressSelector.fill(data[0].address);

    await this.inquiryDateSelector.click();
    await this.inquiryDateValueSelector.click();

    await this.buyerCategorySelector.click();
    await this.categoryValueSelector.click();

    await this.propertyRequirementSelector.fill(data[0].propertyRequirement);
    await this.paymentMethodSelector.fill(data[0].paymentmethod);

    await this.priceRangeSelector.click();
    await this.priceRangeValueSelector.click();

    await this.urgencySelector.fill(data[0].Urgency);
    await this.referredBySelector.fill(data[0].referredBy);

    await this.handledBySelector.click();
    await this.handledByValueSelector.click();

    await this.locationAreaSelector.click();

    await this.createBuyerBtnSelector.click();
  }
}
