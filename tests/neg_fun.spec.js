import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala - Negative Functional Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    });

    async function verifyNegativeTranslation(page, inputSinglish, expectedOutput) {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputElement = page.locator('div').filter({ hasText: /^Sinhala$/ }).locator('..').locator('div').nth(1);

        await inputArea.clear();
        await inputArea.pressSequentially(inputSinglish, { delay: 50 });

        await expect(async () => {
            const actualText = await outputElement.innerText();
            expect(actualText.trim()).toBe(expectedOutput);
        }).toPass({ timeout: 10000 });
    }

    test('neg_fun_001: Convert a Simple  Daily Conversation ', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Hi oyaata kohomadha ', 'Hi   ඔයාට කොහොමද ');
    });

    test('neg_fun_002: A Simple Request', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Hey mama dinner ekata eliyata yanavaa .Oyath enavadha ? .Man ennam oyaava pick karaganna . Okay dha?', 'Hey මම dinner එකට එලියට යනවා .ඔයත් එනවද ? . මන්  එන්නම් ඔයාව pick කරගන්න . Okay ද?');
    });

    test('neg_fun_003: Normal request', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Please help me anee ', 'Please help me අනේ ');
    });

    test('neg_fun_004: Complain', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Oyata mokadhdha vela thinne , i really can not understand you .what\'s wrong with you ', 'ඔයට මොකද්ද වෙල තින්නෙ , I  really can not understand you .what\'s wrong with you ');
    });

    test('neg_fun_005: Future Form Dialogue', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Mama me velave maara busy anee man oyata heta definitely call ekak gannam aniva sure', 'මම මෙ වෙලවෙ මාර busy අනේ මන්  ඔයට හෙට definitely call එකක් ගන්නම් අනිව sure');
    });

    test('neg_fun_006: Simple Greeting', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Hi !! oyata kohomadha ?', 'Hi !! ඔයට කොහොමද ?');
    });

    test('neg_fun_007: Request conversation among workers ', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Hi! Can you help me, please? I finished my work, but I’m not sure. Please check it and let me know — thanks a lot!', 'Hi! Can you help me, please? I finished my work, but I’m not sure. Please check it and let me know — thanks a lot!');
    });

    test('neg_fun_008: A colloquial phrasing ', async ({ page }) => {
        await verifyNegativeTranslation(page, 'machan adha maara siin ekak ne mata une , adha ape ammaa uyala thibba maara amuthu kaemak mata Hoyaagannama baeri una e monadha kila,Man ithin eth kaeva patta rasayi. mama kaevata eeasse amma aevilla kinava ee alu kesel lu ban ,mama aekamathima kaemak ban ee. Evunata man nodhaena kadhdhi eka maara rasata dhaenuna ban', 'මචන් අද මාර සීන් එකක් නේ මට උනෙ , අද අපෙ අම්මා උයල තිබ්බ මාර අමුතු කැමක් මට හොයාගන්නම බැරි උන එ මොනද කිල, මන්  ඉතින් එත් කැව පට්ට රසයි. මම කැවට ඒඅස්සෙ අම්ම ඇවිල්ල කිනව ඒ අලු කෙසෙල් ලු බන් ,මම ඇකමතිම කැමක් බන් ඒ. එවුනට  මන්  නොදැන කද්දි එක මාර රසට දැනුන බන්');
    });

    test('neg_fun_009: cheesy conversation', async ({ page }) => {
        await verifyNegativeTranslation(page, 'Mama oyaata harima aadhareyi My Baby My Love I love you so so much ', 'මම ඔයාට හරිම ආදරෙයි My Baby My Love I love you so so much ');
    });

    test('neg_fun_010: Test', async ({ page }) => {
        await verifyNegativeTranslation(page, 'mama heta enne naehae. mama family trip ekak yanava to NuwaraEliya . Ape cousin kenek ge Wedding ekakata invite karala thinava . ', 'මම හෙට එන්නෙ නැහැ . මම family trip එකක් යනව to NuwaraEliya . අපෙ cousin කෙනෙක් ගෙ Wedding එකකට invite කරල තිනව . ');
    });

    test('neg_fun_011: Missing spaces', async ({ page }) => {
        await verifyNegativeTranslation(page, 'lassanasamanallutikakaevillavaththata // lassana lassana samanallu tikak aevilla vaththata ', 'ලස්සනසමනල්ලුටිකකැවිල්ලවත්තට ');
    });

});