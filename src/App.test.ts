import { URL_API } from './info';

// global
let browser: any;
let page: any;
//
const faker = require('faker');
const puppeteer = require('puppeteer');
const HOST = 'http://localhost:3000';

const loginData = {
  email: 'adri_00@hotmail.fr',
  password: 'azertyuiop',
};

describe('Accueil', () => {
  test("Titre de la page d'accueil chargé correctement", async () => {
    browser = await puppeteer.launch({
      headless: false, // headless mode set to false so browser opens up with visual feedback
      slowMo: 25, // how slow actions should be
    });
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 1200,
        height: 800,
      },
      userAgent: '',
    });

    await page.goto(HOST);
    await page.waitForSelector('#home-title');

    const html = await page.$eval('#home-title', (e: any) => e.innerHTML);
    expect(html).toBe('Dropbox | IMIE-Paris');
  }, 16000);

  test('Connexion', async () => {
    await page.waitForSelector('#login-form');

    await page.click('input[name=email]');
    await page.type('input[name=email]', loginData.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', loginData.password);
    await page.click('button[type=submit]');
    await page.waitForSelector('#dashboard');
  }, 1600000);

  // This function occurs after the result of each tests, it closes the browser
  afterAll(() => {
    browser.close();
  });
});
