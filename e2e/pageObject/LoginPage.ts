import { DataTable } from "@cucumber/cucumber";
import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly baseUrl: String;

  private readonly emailFieldSelector: Locator;
  private readonly passwordFieldSelector: Locator;
  private readonly signButtonSelector: Locator;

  public readonly dashboardSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://admin-staging.easyrealestatenepal.com";

    this.emailFieldSelector = this.page.locator('input[name="email"]');
    this.passwordFieldSelector = this.page.getByRole("textbox", {
      name: "Password",
    });
    this.signButtonSelector = this.page.getByRole("button", {
      name: "Sign in",
    });

    this.dashboardSelector = this.page.getByRole("button", {
      name: "Organization hub Platform admin",
    });
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto(`${this.baseUrl}/sign-in`);
  }

  async enterDetails(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();
    await this.emailFieldSelector.fill(data[0].email);
    await this.passwordFieldSelector.fill(data[0].password);

    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.signButtonSelector.click(),
    ]);
  }
}
