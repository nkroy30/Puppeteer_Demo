const puppeteer = require('puppeteer');
const expectpuppeteer = require('expect-puppeteer') 

describe('1_TPD Admit Letter.CSF', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            //   args: ['--start-fullscreen']
            slowMo: 20,
        });
        page = await browser.newPage();
        await page.setViewport({
            width: 1024,
            height: 768,
        })
    })

    afterAll(async () => {
        await browser.close();
    })

    test('Verify that Member textbox contain same text as textbox with Label Dear', async () => {
        await page.goto("https://www.google.com",{ waitUntil: 'networkidle2' })
                      
       
    }, 10000)
})