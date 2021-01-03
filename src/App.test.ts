import { URL_API } from './info';

// global
let browser: any;
let page: any;
//
const faker = require('faker');
const puppeteer = require('puppeteer');
const HOST = 'http://localhost:3000';

const registerData = {
  email: 'test@test.com',
  password: 'Azertyuiop123',
  confirm: 'Azertyuiop123',
  username: 'Test',
};
const loginData = {
  email: 'test@test.com',
  password: 'Azertyuiop123',
};

describe('Lancement page', () => {
  test('Accueil', async () => {
    browser = await puppeteer.launch({
      headless: false, // headless mode set to false so browser opens up with visual feedback
      slowMo: 25, // how slow actions should be
    });
    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio,
      },
      userAgent: '',
    });

    await page.goto(HOST);
    await page.waitForSelector('#login-form');
  }, 160000);
});
// buttonSignup;
describe("Page d'accueil", () => {
  test('Inscription', async () => {
    await page.click('#signup');
    await page.waitForSelector('#register-form');
    await page.click('input[name=email]');
    await page.type('input[name=email]', registerData.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', registerData.password);
    await page.click('input[name=confirm]');
    await page.type('input[name=confirm]', registerData.confirm);
    await page.click('input[name=username]');
    await page.type('input[name=username]', registerData.username);
    await page.click('button[type=submit]');
    await page.waitForSelector('#dashboard');
  }, 150000);

  test('Déconnexion', async () => {
    await page.waitForSelector('#dashboard');
    await page.click('#signout');

    const html = await page.$eval('#home-title', (e: any) => e.innerHTML);
    expect(html).toBe('Dropbox | IMIE-Paris');
  }, 5000);

  test('Connexion', async () => {
    await page.waitForSelector('#login-form');

    await page.click('input[name=email]');
    await page.type('input[name=email]', loginData.email);
    await page.click('input[name=password]');
    await page.type('input[name=password]', loginData.password);
    await page.click('button[type=submit]');
    await page.waitForSelector('#dashboard');
  }, 15000);

  // This function occurs after the result of each tests, it closes the browser
  afterAll(() => {
    browser.close();
  });
});

//TODO: s'inscrire

//TODO: voir le profil
