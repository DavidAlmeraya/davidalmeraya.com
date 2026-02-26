/**
 * Optional: use a headless browser to print /resume to PDF.
 * Example with Puppeteer (install: pnpm add -D puppeteer):
 *
 * const puppeteer = require('puppeteer');
 * (async () => {
 *   const browser = await puppeteer.launch();
 *   const page = await browser.newPage();
 *   await page.goto('http://localhost:3000/resume', { waitUntil: 'networkidle0' });
 *   await page.pdf({ path: 'public/resume.pdf', format: 'A4', printBackground: true });
 *   await browser.close();
 * })();
 *
 * Run the dev server (pnpm dev), then run this script, or use the browser Print dialog on /resume.
 */
console.log('To generate resume.pdf:');
console.log('1. Start the dev server: pnpm dev');
console.log('2. Open http://localhost:3000/resume in your browser');
console.log('3. Use Print (Ctrl+P / Cmd+P) → Save as PDF');
console.log('4. Save the file as public/resume.pdf');
console.log('');
console.log('Or install puppeteer and implement the script above to automate.');
