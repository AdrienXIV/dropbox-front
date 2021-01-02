import { URL_API } from './info';

const faker = require('faker');
const puppeteer = require('puppeteer');
const HOST = 'http://localhost:3000';

const routes = {
  public: {
    register: `${URL_API}/auth/register`,
    login: `${URL_API}/auth/login`,
  },
};

const loginData = {
  email: 'adri_00@hotmail.fr',
  password: 'azertyuiop',
};

describe('Accueil', () => {
  test("Titre de la page d'accueil chargé correctement", async () => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

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

    browser.close();
  }, 16000);
});
