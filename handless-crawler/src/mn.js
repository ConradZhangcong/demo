const puppeteer = require('puppeteer');
const {
  mn
} = require('./config/default');
const scrToImg = require('./helper/srcToImg');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://image.baidu.com/');
  console.log('go to https://image.baidu.com/');

  // 设置窗口大小 获取更多图片
  await page.setViewport({
    width: 1920,
    height: 1080
  })
  console.log('reset viewport');

  // 输入'狗' 搜索
  await page.focus('#kw');
  await page.keyboard.sendCharacter('林恩喜');
  await page.click('.s_search');
  console.log('go to search list')

  // 等待图片加载
  page.on('load', async () => {
    console.log('page loading done, start fetch...');

    // 获取图片列表
    const srcs = await page.evaluate(() => {
      const images = document.querySelectorAll('img.main_img');
      return Array.prototype.map.call(images, img => img.src);
    })
    console.log(`get ${srcs.length} images, start download`);

    // 处理图片(base64,url)
    srcs.forEach(async (src) => {
      // sleep
      await page.waitFor(200);
      await scrToImg(src, mn);
    })

    await browser.close();
  })
})();