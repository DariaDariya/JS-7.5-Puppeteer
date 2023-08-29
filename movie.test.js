let page;

const {
  clickElement,
  getText,
  clickDay,
  clickMovieTime,
  clickSeat,
  checkCodeQR,
} = require("./lib/commands");

const { generateData } = require("./lib/util");

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Ticket booking", () => {
  beforeEach(async () => {
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("Book 1 seat", async () => {
    const data = generateData();
    const movieNumber = 2;
    const timeNumber = 2;
    const rowNumber = 9;
    const seatNumber = 9;
    await clickDay(page, data);
    await clickMovieTime(page, movieNumber, timeNumber);
    await page.waitForSelector("h1");
    await clickSeat(page, rowNumber, seatNumber);
    await clickElement(page, ".acceptin-button");
    await page.waitForSelector("h1");
    await clickElement(page, ".acceptin-button");
    await checkCodeQR(page);
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
  });

  test("Book 2 seats", async () => {
    const data = generateData();
    const movieNumber = 2;
    const timeNumber = 2;
    const rowNumber1 = 4;
    const seatNumber1 = 1;
    const rowNumber2 = 3;
    const seatNumber2 = 2;
    await clickDay(page, data);
    await clickMovieTime(page, movieNumber, timeNumber);
    await page.waitForSelector("h1");
    await clickSeat(page, rowNumber1, seatNumber1);
    await clickSeat(page, rowNumber2, seatNumber2);
    await clickElement(page, ".acceptin-button");
    await page.waitForSelector("h1");
    await clickElement(page, ".acceptin-button");
    await page.waitForSelector("h1");
    await checkCodeQR(page);
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
  });

  test("Book 3 seats", async () => {
    const data = generateData();
    const movieNumber = 2;
    const timeNumber = 2;
    const rowNumber1 = 5;
    const seatNumber1 = 5;
    const rowNumber2 = 6;
    const seatNumber2 = 2;
    const rowNumber3 = 7;
    const seatNumber3 = 6;
    await clickDay(page, data);
    await clickMovieTime(page, movieNumber, timeNumber);
    await page.waitForSelector("h1");
    await clickSeat(page, rowNumber1, seatNumber1);
    await clickSeat(page, rowNumber2, seatNumber2);
    await clickSeat(page, rowNumber3, seatNumber3);
    await clickElement(page, ".acceptin-button");
    await page.waitForSelector("h1");
    await clickElement(page, ".acceptin-button");
    await page.waitForSelector("h1");
    await checkCodeQR(page);
    const actual = await getText(page, "h2");
    expect(actual).toContain("Электронный билет");
  });

  test("Book no seats", async () => {
    const data = generateData();
    const movieNumber = 2;
    const timeNumber = 2;
    await clickDay(page, data);
    await clickMovieTime(page, movieNumber, timeNumber);
    await page.waitForSelector("h1");
    await clickElement(page, ".acceptin-button");
    const actual = await page.$eval(".acceptin-button", (button) =>
      button.hasAttribute("disabled")
    );
    expect(actual).toBe(true);
  });
});
