import { test, expect } from '@playwright/test';

test('Compra exitosa en SauceDemo', async ({ page }) => {

// Abrir aplicación
    await page.goto('https://www.saucedemo.com/');

// Login
    await page.locator('[data-test="username"]')
        .fill('standard_user');

    await page.waitForTimeout(1000);

    await page.locator('[data-test="password"]')
        .fill('secret_sauce');

    await page.waitForTimeout(1000);

    await page.locator('[data-test="login-button"]')
        .click();

    await page.waitForTimeout(2000);

// Agregar producto
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        .click();

    await page.waitForTimeout(2000);

// Ir al carrito
    await page.locator('.shopping_cart_link')
        .click();

    await page.waitForTimeout(2000);

// Checkout
    await page.locator('[data-test="checkout"]')
        .click();

    await page.waitForTimeout(2000);

// Datos de compra
    await page.locator('[data-test="firstName"]')
        .fill('Sandra');

    await page.waitForTimeout(1000);

    await page.locator('[data-test="lastName"]')
        .fill('Peña');

    await page.waitForTimeout(1000);

    await page.locator('[data-test="postalCode"]')
        .fill('050001');

    await page.waitForTimeout(1000);

    await page.locator('[data-test="continue"]')
        .click();

    await page.waitForTimeout(2000);

// Finalizar compra
    await page.locator('[data-test="finish"]')
        .click();

    await page.waitForTimeout(2000);

// Validación
    await expect(
        page.locator('[data-test="complete-header"]')
    ).toHaveText('Thank you for your order!');
});