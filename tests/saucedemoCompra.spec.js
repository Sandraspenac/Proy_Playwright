import { test, expect } from '@playwright/test';

test('Compra exitosa en SauceDemo', async ({ page }) => {

// Abrir aplicación
await page.goto('https://www.saucedemo.com/');

// Login
await page.locator('[data-test="username"]')
.fill('standard_user');

await page.locator('[data-test="password"]')
.fill('secret_sauce');

await page.locator('[data-test="login-button"]')
.click();

// Se agregar producto
await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
.click();

// Ir al carrito de compras
await page.locator('.shopping_cart_link')
.click();

// Se realiza el Checkout
await page.locator('[data-test="checkout"]')
.click();

// Datos de compra
await page.locator('[data-test="firstName"]')
.fill('Sandra');

await page.locator('[data-test="lastName"]')
.fill('Peña');

await page.locator('[data-test="postalCode"]')
.fill('050001');

await page.locator('[data-test="continue"]')
.click();

// Finalizar compra
await page.locator('[data-test="finish"]')
.click();

// Compra exitosa
await expect(
page.locator('[data-test="complete-header"]')
).toHaveText('Thank you for your order!');
});