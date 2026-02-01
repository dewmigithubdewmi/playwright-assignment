import { test, expect } from '@playwright/test';

test.describe('Singlish to Sinhala - Positive Functional Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    });

    async function verifyTranslation(page, inputSinglish, expectedSinhala) {
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputElement = page.locator('div').filter({ hasText: /^Sinhala$/ }).locator('..').locator('div').nth(1);
        await inputArea.clear();
        await inputArea.pressSequentially(inputSinglish, { delay: 10 });
        await expect(async () => {
            const actualText = await outputElement.innerText();
           
            const normalizedActual = actualText.trim().replace(/\s+/g, ' ');
            const normalizedExpected = expectedSinhala.trim().replace(/\s+/g, ' ');
            expect(normalizedActual).toBe(normalizedExpected);
        }).toPass({ timeout: 15000 });
    }

    test('pos_fun_001: Convert a Normal thought ', async ({ page }) => {
        await verifyTranslation(page, 'Mama harima kaemathi yaluvo ekka  avidhinna , Eth mata time ekak naehae    ', 'මම හරිම කැමති යලුවො එක්ක අවිදින්න , එත් මට time එකක් නැහැ');
    });

    test('pos_fun_002: A simple Question', async ({ page }) => {
        await verifyTranslation(page, 'Oyaa assignment eka complete karala ivaradha ? ', 'ඔයා assignment එක complete කරල ඉවරද ? ');
    });

    test('pos_fun_003: A Simple request with a little ', async ({ page }) => {
        await verifyTranslation(page, 'Please oyaata puluvannam mata me project ekata help ekak dhennako', 'Please ඔයාට පුලුවන්නම් මට මෙ project එකට help එකක් දෙන්නකො');
    });

    test('pos_fun_004: Checking time format', async ({ page }) => {
        await verifyTranslation(page, 'machan adha 3PM vagee ubata enna puluvan dha ape geval paeththee ? Ubee Wife ekkama varen.wife  ge 32 veni Birthday eka Adha ,Api gedhera aya ekka podiyata eka celebrate karanna hadhuvee.Anivaa varen hodhee !!', 'මචන් අද 3PM වගේ උබට එන්න පුලුවන් ද ape ගෙවල් පැත්තේ ? උබේ Wife එක්කම වරෙන්.wife ගෙ 32 වෙනි Birthday එක අද ,අපි ගෙදෙර අය එක්ක පොඩියට එක celebrate කරන්න හදුවේ.අනිවා වරෙන් හොදේ !!');
    });

    test('pos_fun_005: Kind Request', async ({ page }) => {
        await verifyTranslation(page, 'adha poya nedha . api pansal yamuko akke . Mama harima kaemathi poddak clam thanakata gihin tika velavak inna ', 'අද පොය නේද . අපි පන්සල් යමුකො අක්කෙ . මම හරිම කැමති පොඩ්ඩක් clam තනකට ගිහින් ටික වෙලවක් ඉන්න');
    });

    test('pos_fun_006: Simple singlish conversation', async ({ page }) => {
        await verifyTranslation(page, 'Oyata man venuven 5min vath balan inna baeri unaa nedha.Man harima disappointed oya gana .', 'ඔයට man වෙනුවෙන් 5min වත් බලන් ඉන්න බැරි උනා නේද.Man හරිම disappointed ඔය ගන .');
    });

    test('pos_fun_007: Polite phrasing', async ({ page }) => {
        await verifyTranslation(page, 'Oyata adha enna puluvandha adha ape gedhera , oya enavanam mama Dinner eka ready karannam ', 'ඔයට අද එන්න පුලුවන්ද අද ape ගෙදෙර , ඔය එනවනම් මම Dinner එක ready කරන්නම් ');
    });

    test('pos_fun_008: Simple question', async ({ page }) => {
        await verifyTranslation(page, 'Me printer eka vada karanavadha ? Mata prints vagayak araganna thinava', 'මෙ printer එක වඩ කරනවද ? මට prints වගයක් අරගන්න තිනව');
    });

    test('pos_fun_009: Informal phrasing', async ({ page }) => {
        await verifyTranslation(page, 'vahaama  varaThaakaranna ', 'වහාම වරථාකරන්න ');
    });

    test('pos_fun_010: Test', async ({ page }) => {
        await verifyTranslation(page, 'api heta school yanavaa . Heta morning assembly eka ta nethmi sindhuvak present karanna laesthi vena gaman inne. Api anivaryen ma eyata support ekak dhenna yanavaa .', 'අපි හෙට school යනවා . හෙට morning assembly එක ට නෙත්මි සින්දුවක් present කරන්න ලැස්ති වෙන ගමන් ඉන්නේ. අපි අනිවර්යෙන් ම එයට support එකක් දෙන්න යනවා .');
    });

    test('pos_fun_011: Every day greeting', async ({ page }) => {
        await verifyTranslation(page, 'Suba Udhaeesanak veevaa !!', 'සුබ උදෑසනක් වේවා !!');
    });

    test('pos_fun_012: Basic Greeting', async ({ page }) => {
        await verifyTranslation(page, 'Aayubovan !!', 'ආයුබොවන් !!');
    });

    test('pos_fun_013: Future Plan ', async ({ page }) => {
        await verifyTranslation(page, 'Next Project ekata api yojana karanava haema member kenek gemma Rs 200.00  mudhalak aya karaganna . ', 'Next Project එකට අපි යොජන කරනව හැම member කෙනෙක් ගෙම්ම Rs 200.00 මුදලක් අය කරගන්න .');
    });

    test('pos_fun_014: Dates', async ({ page }) => {
        await verifyTranslation(page, 'December 2 ammage birthday eka. ayiyage birthday eka novaember 23.', 'December 2 අම්මගෙ birthday එක. අයියගෙ birthday එක නොවැම්බෙර් 23.');
    });

    test('pos_fun_015: Paragraph-style input', async ({ page }) => {
        await verifyTranslation(page, 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva\naethi athara, ehi samastha dhiga pramaaNaya kiloomiitar 300k (300 km)pamaNa vana bava pravaahana,mahaamaarga saha naagarika sQQvarDhana amaathYA bimal rathnaayaka\nsaDHahan kaLeeya', 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර, එහි සමස්ත දිග ප්‍රමාණය කිලෝමීටර් 300ක් (300 km)පමණ වන බව ප්‍රවාහන,මහාමාර්ග සහ නාගරික සංවර්ධන අමාත්‍ය බිමල් රත්නායක සඳහන් කළේය');
    });

    test('pos_fun_016: short forms', async ({ page }) => {
        await verifyTranslation(page, 'Mata tovmata gihin enna thinava WIFI bill eka pay karala enna , eeth dhaen 3PM pahu vela nisa mata ATM ekakata yanna veyi  salli ganna .', 'මට ටොව්මට ගිහින් එන්න තිනව WIFI bill එක pay කරල එන්න , ඒත් දැන් 3PM පහු වෙල නිස මට ATM එකකට යන්න වෙයි සල්ලි ගන්න .');
    });

    test('pos_fun_017:  colloquial phrasing ', async ({ page }) => {
        await verifyTranslation(page, 'Heta udheta pansal yana nisaa udhema nagitala mal poddak pol thel poddak ,Haemadhema podda podda tika tika ready karaganna oone . ', 'හෙට උදෙට පන්සල් යන නිසා උදෙම නගිටල මල් පොඩ්ඩක් පොල් තෙල් පොඩ්ඩක් ,හැමදෙම පොඩ්ඩ පොඩ්ඩ ටික ටික ready කරගන්න ඕනෙ . ');
    });

    test('pos_fun_018: Friendly request', async ({ page }) => {
        await verifyTranslation(page, 'api heta beach yamudha haloo ??', 'අපි හෙට beach යමුද හලෝ ??');
    });

    test('pos_fun_019: English  Brand terms ', async ({ page }) => {
        await verifyTranslation(page, 'Whatsapp Desktop ekata connect karanna one QR code ekak Use karala ', 'Whatsapp Desktop එකට connect කරන්න one QR code එකක් Use කරල ');
    });

    test('pos_fun_020: English Brand Terms 1', async ({ page }) => {
        await verifyTranslation(page, 'Samahara kello tiktok ekee pissune ban karanne , maarama chaarter ', 'සමහර කෙල්ලො tiktok එකේ පිස්සුනෙ බන් කරන්නේ , මාරම චාර්ටෙර් ');
    });

    test('pos_fun_021: Multiple Line breaks', async ({ page }) => {
        await verifyTranslation(page, 'Wow oyaa marama talented girl kenek ne . Oya edha avadha apith ekka dancing competition ekata .  \n \nAne naha miss mata enna baeri una edhaa \n\naparadhene lamayo oyage haekiyaven prayojanayak gannako.', 'Wow ඔයා මරම talented girl කෙනෙක් නේ . ඔය එද අවද අපිත් එක්ක dancing competition එකට . අනෙ naha miss මට එන්න බැරි උන එදා අපරදෙනෙ ලමයො ඔයගෙ හැකියවෙන් ප්‍රයොජනයක් ගන්නකො.');
    });

    test('pos_fun_022: Converting a slang ', async ({ page }) => {
        await verifyTranslation(page, 'avvayi vaessayi nariyage magulayi', 'අව්වයි වැස්සයි නරියගෙ මගුලයි');
    });

    test('pos_fun_023: converting a  colloquial phrasing', async ({ page }) => {
        await verifyTranslation(page, 'adoo siraavatama ', 'අඩෝ සිරාවටම ');
    });

    test('pos_fun_024: Units of measurements', async ({ page }) => {
        await verifyTranslation(page, 'eeyi kadeta gihin haal 2kg yi thee kola 500 g aran enna ', 'ඒයි කඩෙට ගිහින් හාල් 2kg යි තේ කොල 500 g අරන් එන්න ');
    });

    test('pos_fun_ui001: Sinhala Output updates automatically in real life', async ({ page }) => {
        await verifyTranslation(page, 'hey oyaa la adha school giyadha', 'hey ඔයා ල අද school ගියද\n\n\n');
    });

});