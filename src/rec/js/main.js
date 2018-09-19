
/*console.log('banner');*/
var creative = {};
Enabler.setProfileId(10043661);
/*Enabler.isInitialized()
Enabler.exit()*/

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
	/*console.log('enable is ready')*/
  // Start polite loading, or start animation,
  // load in your image assets, call Enabler methods,
  // and/or include other Studio modules.

  setupDom();

  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, showAd);
  }
}

// Runs when the page is completely loaded.
function politeInit(){
	/*console.log('polite init')*/
	showAd();
  // Add your code to hide any loading image or animation and load creative
  // assets or begin creative animation.
};

function showAd() {
	/*console.log('showAd')*/
	/*This code checks if the page is loaded using the Enabler’s isPageLoaded method, which returns true or false.
	If true, call a custom function that loads your creative (in this example, the custom function is called showAd).
	If false, listen for the Enabler’s PAGE_LOADED event before calling showAd.*/

	// Dynamic Content variables and sample values
	var development = (window.location.href.indexOf('3000') != -1) ? true : false;

	adds(development);
}

function adds(development) {

	if(development == true) {
		/*console.log('dev', development);*/
		window.envi = 'dev';
		var devDynamicContent = {};
		/*temp code*/

      devDynamicContent.export= [{},{},{}];
    devDynamicContent.export[0]._id = 0;
    devDynamicContent.export[0].PromotionType_eurootje_50procent_inslaan = "inslaan";
    devDynamicContent.export[0].Unique_ID = 2655138260749;
    devDynamicContent.export[0].Reporting_Label = "Liga_Evergreen,_Milkbreak,_Belvita_en_Haverrepen";
    devDynamicContent.export[0].Start_Date = {};
    devDynamicContent.export[0].Start_Date.RawValue = "05/01/2018";
    devDynamicContent.export[0].Start_Date.UtcValue = 1525158000000;
    devDynamicContent.export[0].End_Date = {};
    devDynamicContent.export[0].End_Date.RawValue = "09/30/2019";
    devDynamicContent.export[0].End_Date.UtcValue = 1569826800000;
    devDynamicContent.export[0].Product_Title = "Liga Milkbreak, BelVita,  Haverrepen of Evergreen";
    devDynamicContent.export[0].Product_Description = "Per pak";
    devDynamicContent.export[0].Product_Promotion = "1+1 GRATIS";
    devDynamicContent.export[0].Exit_URL = {};
    devDynamicContent.export[0].Exit_URL.Url = "https://www.plus.nl/aanbiedingen/2655-138";
    devDynamicContent.export[0].Exit_URL2 = {};
    devDynamicContent.export[0].Exit_URL2.Url = "https://www.plus.nl/aanbiedingen?utm_source=cadreon&utm_medium=display&utm_term=34";
    devDynamicContent.export[0].PromotionText_Inslaan = "Heel veel voor heel weinig";
    devDynamicContent.export[0].PromotionText_50procent = "Op heel veel producten";
    devDynamicContent.export[0].PromotionText_Eurootje = "Meer dan 100 aanbiedingen voor maar 1 Eurootje!";
    devDynamicContent.export[0].PromotionBackground_Inslaan = "#80bd1d";
    devDynamicContent.export[0].PromotionBackground_50procent = "#e3131d";
    devDynamicContent.export[0].PromotionBackground_Eurootje = "#e3131d";
    devDynamicContent.export[0].PromotionFooterBackground_Inslaan = "#80bd1d";
    devDynamicContent.export[0].PromotionFooterBackground_50procent = "#80bd1d";
    devDynamicContent.export[0].PromotionFooterBackground_Eurootje = "#80bd1d";
    devDynamicContent.export[0].PromotionTextLastFrame = "Deze week bezorgd voor maar 1 Eurootje.";
    devDynamicContent.export[0].CTAText_Inslaan = "Nu inslaan!";
    devDynamicContent.export[0].CTAText_50procent = "Nu bestellen";
    devDynamicContent.export[0].CTAText_Eurootje = "Nu bestellen";
    devDynamicContent.export[0].CTABackground = "#ffffff";
    devDynamicContent.export[0].CTATextColour = "#e3131d";
    devDynamicContent.export[0].PromotionImageLastFrame50procent = {};
    devDynamicContent.export[0].PromotionImageLastFrame50procent.Type = "file";
    devDynamicContent.export[0].PromotionImageLastFrame50procent.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[0].PromotionImageLastFrameInslaan = {};
    devDynamicContent.export[0].PromotionImageLastFrameInslaan.Type = "file";
    devDynamicContent.export[0].PromotionImageLastFrameInslaan.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[0].PromotionImageLastFrameEurootje = {};
    devDynamicContent.export[0].PromotionImageLastFrameEurootje.Type = "file";
    devDynamicContent.export[0].PromotionImageLastFrameEurootje.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[0].Image_URL = {};
    devDynamicContent.export[0].Image_URL.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[1].PromotionType_eurootje_50procent_inslaan = "eurootje";
    devDynamicContent.export[1].Unique_ID = 2655138260749;
    devDynamicContent.export[1].Reporting_Label = "Liga_Evergreen,_Milkbreak,_Belvita_en_Haverrepen";
    devDynamicContent.export[1].Start_Date = {};
    devDynamicContent.export[1].Start_Date.RawValue = "05/01/2018";
    devDynamicContent.export[1].Start_Date.UtcValue = 1525158000000;
    devDynamicContent.export[1].End_Date = {};
    devDynamicContent.export[1].End_Date.RawValue = "09/30/2019";
    devDynamicContent.export[1].End_Date.UtcValue = 1569826800000;
    devDynamicContent.export[1].Product_Title = "Liga Milkbreak, BelVita,  Haverrepen of Evergreen";
    devDynamicContent.export[1].Product_Description = "Per pak";
    devDynamicContent.export[1].Product_Promotion = "3 VOOR 4.99";
    devDynamicContent.export[1].Exit_URL = {};
    devDynamicContent.export[1].Exit_URL.Url = "https://www.plus.nl/aanbiedingen/2655-138";
    devDynamicContent.export[1].Exit_URL2 = {};
    devDynamicContent.export[1].Exit_URL2.Url = "https://www.plus.nl/aanbiedingen?utm_source=cadreon&utm_medium=display&utm_term=34";
    devDynamicContent.export[1].PromotionText_Inslaan = "Heel veel voor heel weinig";
    devDynamicContent.export[1].PromotionText_50procent = "Op heel veel producten";
    devDynamicContent.export[1].PromotionText_Eurootje = "Meer dan 100 aanbiedingen voor maar 1 Eurootje!";
    devDynamicContent.export[1].PromotionBackground_Inslaan = "#80bd1d";
    devDynamicContent.export[1].PromotionBackground_50procent = "#e3131d";
    devDynamicContent.export[1].PromotionBackground_Eurootje = "#e3131d";
    devDynamicContent.export[1].PromotionFooterBackground_Inslaan = "#80bd1d";
    devDynamicContent.export[1].PromotionFooterBackground_50procent = "#80bd1d";
    devDynamicContent.export[1].PromotionFooterBackground_Eurootje = "#80bd1d";
    devDynamicContent.export[1].PromotionTextLastFrame = "Deze week bezorgd voor maar 1 Eurootje.";
    devDynamicContent.export[1].CTAText_Inslaan = "Nu inslaan!";
    devDynamicContent.export[1].CTAText_50procent = "Nu bestellen";
    devDynamicContent.export[1].CTAText_Eurootje = "Nu bestellen";
    devDynamicContent.export[1].CTABackground = "#ffffff";
    devDynamicContent.export[1].CTATextColour = "#e3131d";
    devDynamicContent.export[1].PromotionImageLastFrame50procent = {};
    devDynamicContent.export[1].PromotionImageLastFrame50procent.Type = "file";
    devDynamicContent.export[1].PromotionImageLastFrame50procent.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[1].PromotionImageLastFrameInslaan = {};
    devDynamicContent.export[1].PromotionImageLastFrameInslaan.Type = "file";
    devDynamicContent.export[1].PromotionImageLastFrameInslaan.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[1].PromotionImageLastFrameEurootje = {};
    devDynamicContent.export[1].PromotionImageLastFrameEurootje.Type = "file";
    devDynamicContent.export[1].PromotionImageLastFrameEurootje.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[1].Image_URL = {};
    devDynamicContent.export[1].Image_URL.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    devDynamicContent.export[2].PromotionType_eurootje_50procent_inslaan = "eurootje";
    devDynamicContent.export[2].Unique_ID = 2655138260749;
    devDynamicContent.export[2].Reporting_Label = "Liga_Evergreen,_Milkbreak,_Belvita_en_Haverrepen";
    devDynamicContent.export[2].Start_Date = {};
    devDynamicContent.export[2].Start_Date.RawValue = "05/01/2018";
    devDynamicContent.export[2].Start_Date.UtcValue = 1525158000000;
    devDynamicContent.export[2].End_Date = {};
    devDynamicContent.export[2].End_Date.RawValue = "09/30/2019";
    devDynamicContent.export[2].End_Date.UtcValue = 1569826800000;
    devDynamicContent.export[2].Product_Title = "Liga Milkbreak, BelVita,  Haverrepen of Evergreen";
    devDynamicContent.export[2].Product_Description = "Per pak";
    devDynamicContent.export[2].Product_Promotion = "1+1 GRATIS";
    devDynamicContent.export[2].Exit_URL = {};
    devDynamicContent.export[2].Exit_URL.Url = "https://www.plus.nl/aanbiedingen/2655-138";
    devDynamicContent.export[2].Exit_URL2 = {};
    devDynamicContent.export[2].Exit_URL2.Url = "https://www.plus.nl/aanbiedingen?utm_source=cadreon&utm_medium=display&utm_term=34";
    devDynamicContent.export[2].PromotionText_Inslaan = "Heel veel voor heel weinig";
    devDynamicContent.export[2].PromotionText_50procent = "Op heel veel producten";
    devDynamicContent.export[2].PromotionText_Eurootje = "Meer dan 100 aanbiedingen voor maar 1 Eurootje!";
    devDynamicContent.export[2].PromotionBackground_Inslaan = "#80bd1d";
    devDynamicContent.export[2].PromotionBackground_50procent = "#e3131d";
    devDynamicContent.export[2].PromotionBackground_Eurootje = "#e3131d";
    devDynamicContent.export[2].PromotionFooterBackground_Inslaan = "#80bd1d";
    devDynamicContent.export[2].PromotionFooterBackground_50procent = "#80bd1d";
    devDynamicContent.export[2].PromotionFooterBackground_Eurootje = "#80bd1d";
    devDynamicContent.export[2].PromotionTextLastFrame = "Deze week bezorgd voor maar 1 Eurootje.";
    devDynamicContent.export[2].CTAText_Inslaan = "Nu inslaan!";
    devDynamicContent.export[2].CTAText_50procent = "Nu bestellen";
    devDynamicContent.export[2].CTAText_Eurootje = "Nu bestellen";
    devDynamicContent.export[2].CTABackground = "#ffffff";
    devDynamicContent.export[2].CTATextColour = "#e3131d";
    devDynamicContent.export[2].PromotionImageLastFrame50procent = {};
    devDynamicContent.export[2].PromotionImageLastFrame50procent.Type = "file";
    devDynamicContent.export[2].PromotionImageLastFrame50procent.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006820/60006820_20180821013327766_eurootjeNew.png";
    devDynamicContent.export[2].PromotionImageLastFrameInslaan = {};
    devDynamicContent.export[2].PromotionImageLastFrameInslaan.Type = "file";
    devDynamicContent.export[2].PromotionImageLastFrameInslaan.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006820/60006820_20180821013327766_eurootjeNew.png";
    devDynamicContent.export[2].PromotionImageLastFrameEurootje = {};
    devDynamicContent.export[2].PromotionImageLastFrameEurootje.Type = "file";
    devDynamicContent.export[2].PromotionImageLastFrameEurootje.Url = "https://s0.2mdn.net/ads/richmedia/studio/60006820/60006820_20180821013327766_eurootjeNew.png";
    devDynamicContent.export[2].Image_URL = {};
    devDynamicContent.export[2].Image_URL.Url = "https://s0.2mdn.net/dynamic/2/10218806/productimages.bgenius.com/data/17c9135c37e2c158853c3795cdda402e/268910599950.png_1536476545051_268910599950.png";
    Enabler.setDevDynamicContent(devDynamicContent);

	    startAds(devDynamicContent);
	}else {
		/*console.log('live');*/
		window.envi = 'live';
		startAds(dynamicContent);
	}

}

/*custom dom elements*/
function setupDom() {
	creative.dom = {};
	//banner content STANDARD!
	creative.dom.banner = document.querySelector('#content');

	//CUSTOM EL
	creative.dom.mainContent = document.querySelector('#main-content');

  //banner campaign specific content
  creative.dom.vijftigProcent = document.querySelectorAll('.product-50procent');
  creative.dom.inslaan = document.querySelectorAll('.product-inslaan');
  creative.dom.eurootje = document.querySelectorAll('.product-eurootje')

  //start and end screen
  creative.dom.startScreen = document.querySelector('#start-screen');
  creative.dom.mainImgSection = document.querySelector('#main-img-section');
  creative.dom.mainImg = document.querySelector('#main-img');
  creative.dom.mainTxtSection = document.querySelector('#main-txt-section');
  creative.dom.mainTxt1 = document.querySelector('#main-txt1');
  creative.dom.mainTxt2 = document.querySelector('#main-txt2');

  creative.dom.endScreen = document.querySelector('#screen-end');
  creative.dom.mainImgSectionEnd = document.querySelector('#main-img-section-end');
  creative.dom.mainImgEnd = document.querySelector('#main-img-end');
  creative.dom.mainTxt1End = document.querySelector('#main-txt1-end');
  creative.dom.mainTxt2End = document.querySelector('#main-txt2-end');

  //product pages
  creative.dom.productSection1 = document.querySelector('#product1-section');
  creative.dom.productSection2 = document.querySelector('#product2-section');
  creative.dom.productSection3 = document.querySelector('#product3-section');

  //banner footer content
  creative.dom.footerContent = document.querySelector('#footer-content');
  creative.dom.footerBestel = document.querySelector('#footer-bestel');
  creative.dom.footerBestelSpan = document.querySelector('#footer-bestel-span');
  creative.dom.footerImage = document.querySelector('#footer-image');

}

function show() {
	creative.dom.banner.style.display = 'block';
}

/*custom dynamicContent*/
function startAds(prefix) {
	window.prefix = prefix;
	/*console.log('startAds', prefix)*/
	/*show banner STANDARD!*/
	show();
	/*Dynamic Content*/

	//promotion specific content
  if(prefix.export[0].PromotionType_eurootje_50procent_inslaan == "50procent") {
    //banner content 50procent
	creative.dom.mainImg.style.backgroundImage = "url('50procent.png')";
    creative.dom.mainImgEnd.style.backgroundImage = "url("+ prefix.export[2].PromotionImageLastFrame50procent.Url + ")";
    creative.dom.mainImgSection.style.bottom = '12px';
    setMainTxt(prefix.export[0].PromotionText_50procent);
    creative.dom.footerBestelSpan.innerHTML = prefix.export[0].CTAText_50procent;
	creative.dom.mainImgSection.style.bottom = '10px';
    creative.dom.mainImgSectionEnd.style.bottom = '10px';

    for (i = 0; i < creative.dom.vijftigProcent.length; i++) {
       creative.dom.vijftigProcent[i].style.display = 'block';
    }

    //banner styling 50procent
    var contentBackground = prefix.export[0].PromotionBackground_50procent;
    var footerBackground = prefix.export[0].PromotionFooterBackground_50procent;

    creative.dom.mainContent.style.backgroundColor = contentBackground;
    creative.dom.footerContent.style.backgroundColor = footerBackground;
    setfooterShadow(contentBackground, footerBackground);
	}

  else if (prefix.export[0].PromotionType_eurootje_50procent_inslaan == "inslaan") {
    //banner content Inslaan
		creative.dom.mainImg.style.backgroundImage = "url('inslaan.png')";
    creative.dom.mainImgEnd.style.backgroundImage = "url("+ prefix.export[2].PromotionImageLastFrameInslaan.Url + ")";
    creative.dom.mainImgSection.style.bottom = '0';
    creative.dom.mainImgSection.style.top = '3px';
    creative.dom.mainImgSectionEnd.style.bottom = '0';
    creative.dom.mainImgSectionEnd.style.top = '3px';
    setMainTxt(prefix.export[0].PromotionText_Inslaan);
    creative.dom.footerBestelSpan.innerHTML = prefix.export[0].CTAText_Inslaan;

    for (i = 0; i < creative.dom.inslaan.length; i++) {
       creative.dom.inslaan[i].style.display = 'block';
    }

    //banner styling Inslaan
    var contentBackground = prefix.export[0].PromotionBackground_Inslaan;
    var footerBackground = prefix.export[0].PromotionFooterBackground_Inslaan;

    creative.dom.mainContent.style.backgroundColor = contentBackground;
    creative.dom.footerContent.style.backgroundColor = footerBackground;
    setfooterShadow(contentBackground, footerBackground);
	}

  else if (prefix.export[0].PromotionType_eurootje_50procent_inslaan == "eurootje") {
    //banner content Eurootje
    creative.dom.mainImg.style.backgroundImage = "url('eurootje.png')";
    creative.dom.mainImgEnd.style.backgroundImage = "url("+ prefix.export[2].PromotionImageLastFrameEurootje.Url + ")";
    setMainTxt(prefix.export[0].PromotionText_Eurootje);
    creative.dom.footerBestelSpan.innerHTML = prefix.export[0].CTAText_Eurootje;
	creative.dom.mainImgSection.style.bottom = '10px';
    creative.dom.mainImgSectionEnd.style.bottom = '10px';

    for (i = 0; i < creative.dom.eurootje.length; i++) {
       creative.dom.eurootje[i].style.display = 'block';
    }

    //banner styling Eurootje
    var contentBackground = prefix.export[0].PromotionBackground_Eurootje;
    var footerBackground = prefix.export[0].PromotionFooterBackground_Eurootje;

    creative.dom.mainContent.style.backgroundColor = contentBackground;
    creative.dom.footerContent.style.backgroundColor = footerBackground;
    setfooterShadow(contentBackground, footerBackground);
  }

  setEndTxt(prefix.export[0].PromotionTextLastFrame);
  //banner overall styling
  creative.dom.footerBestel.style.backgroundColor = prefix.export[0].CTABackground;
  creative.dom.footerBestelSpan.style.color = prefix.export[0].CTATextColour;
  //creative.dom.footerBestelArrow.style.fill = prefix.export[0].CTATextColour;

  //determine the maximum of words displayed in product title and product subtitle
  var productTitleLength;
  var productSubtitleLength;

  switch(creative.dom.banner.offsetWidth) {
    //pas in de verschillende cases (width van de banner) in de variabelen het maximale aantal woorden aan voor
    //de product titel- en subtitle.
    case 336:
      productTitleLength = 4;
      productSubtitleLength = 13;
      break;
    case 320:
      productTitleLength = 4;
      productSubtitleLength = 13;
      break;
    case 300:
      productTitleLength = 4;
      productSubtitleLength = 11;
      break;
  }

  //product 1 content
  var prodOne = creative.dom.productSection1;
  prodOne.querySelector('.product-name').innerHTML = limitWords(prefix.export[0].Product_Title, productTitleLength);
  prodOne.querySelector('.product-subtitle').innerHTML = limitWords(prefix.export[0].Product_Description, productSubtitleLength);
  prodOne.querySelector('.product-image').style.backgroundImage = "url(" + prefix.export[0].Image_URL.Url + ")";
  if(prefix.export[0].PromotionType_eurootje_50procent_inslaan == "inslaan"){setInslaanTags(0, prodOne)};

  //product 2 content
  var prodTwo = creative.dom.productSection2;
  prodTwo.querySelector('.product-name').innerHTML = limitWords(prefix.export[1].Product_Title, productTitleLength);
  prodTwo.querySelector('.product-subtitle').innerHTML = limitWords(prefix.export[1].Product_Description, productSubtitleLength);
  prodTwo.querySelector('.product-image').style.backgroundImage = "url(" + prefix.export[1].Image_URL.Url + ")";
  if(prefix.export[0].PromotionType_eurootje_50procent_inslaan == "inslaan"){setInslaanTags(1, prodTwo);};


  //product 3 content
  var prodThree = creative.dom.productSection3;
  prodThree.querySelector('.product-name').innerHTML = limitWords(prefix.export[2].Product_Title, productTitleLength);
  prodThree.querySelector('.product-subtitle').innerHTML = limitWords(prefix.export[2].Product_Description, productSubtitleLength);
  prodThree.querySelector('.product-image').style.backgroundImage = "url(" + prefix.export[2].Image_URL.Url + ")";
  if(prefix.export[0].PromotionType_eurootje_50procent_inslaan == "inslaan"){setInslaanTags(2, prodThree)};

  //function to devide text in two strings if it contains more than 7 words
  function setMainTxt(str) {
    if(str.trim().split(/\s+/).length > 7) {
      var strAr = str.split(' ');
      var strAr1 = strAr.splice(0, 4);
      var strAr2 = strAr.splice(0, strAr.length);

      creative.dom.mainTxt1.innerHTML = strAr1.join(' ');
      creative.dom.mainTxt2.innerHTML = strAr2.join(' ');
    } else {
      creative.dom.mainTxt1.innerHTML = str;
    }
  }

  function setEndTxt(str) {
    if(str.trim().split(/\s+/).length >= 6) {
      var strAr = str.split(' ');
      var strAr1 = strAr.splice(0, 4);
      var strAr2 = strAr.splice(0, strAr.length);

      creative.dom.mainTxt1End.innerHTML = strAr1.join(' ');
      creative.dom.mainTxt2End.innerHTML = strAr2.join(' ');
    } else {
      creative.dom.mainTxt1End.innerHTML = str;
    }
  }

  function splitGratis(eur) {
    var gratis = [];
    gratis.push(eur.substr(0, 1));
    gratis.push(eur.substr(2,1));
    return gratis;
  }

  function splitHalvePrijs(input) {
    number = input.substr(0, 1);
    return number;
  }

  function splitVoor(eur) {
    var voor = [];
    voor.push(eur.substr(0, 6));
    voor.push(eur.substr(7, 1));
    voor.push(eur.substr(9, 2));
    return voor;
  }

  function splitPrice(eur) {
    var price = [];
    price.push(eur.substr(0, eur.indexOf('.')));
    price.push(eur.split('.')[1]);
    return price;
  }

  function setInslaanTags(prodNum, prodEl) {
    var isIE = /Trident/.test(navigator.userAgent) || /MSIE/.test(navigator.userAgent);
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var bannerHeight = creative.dom.banner.offsetHeight;

    if(prefix.export[prodNum].Product_Promotion.indexOf('GRATIS') >= 0) {
      var eur = splitGratis(prefix.export[prodNum].Product_Promotion);

      if(isIE){
        prodEl.querySelector('.cloverPromoDetail').style.display = 'block';
        prodEl.querySelector('.inslaan-gratis-clover').style.display = 'block';
        prodEl.querySelector('.clover-voor-1').innerHTML = eur[0];
        prodEl.querySelector('.clover-voor-2').innerHTML = eur[1];

      } else if(isSafari) {
      	if(bannerHeight == 240) {
        	prodEl.querySelector('#inslaan-gratis-tag').style.bottom = "61px";
        	prodEl.querySelector('#plus1').innerHTML = eur[0];
	        prodEl.querySelector('#plus1').setAttribute('title', eur[0]);
	        prodEl.querySelector('#plus2').innerHTML = eur[1];
	        prodEl.querySelector('#plus2').setAttribute('title', eur[1]);
	        prodEl.querySelector('#inslaan-gratis-tag').style.display = 'block';
	        prodEl.querySelector('#inslaan-plus').style.display = 'block';
	        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';
       }else if(bannerHeight == 280) {
       		prodEl.querySelector('#inslaan-gratis-tag').style.bottom = "80px";
	      	prodEl.querySelector('#plus1').innerHTML = eur[0];
	        prodEl.querySelector('#plus1').setAttribute('title', eur[0]);
	        prodEl.querySelector('#plus2').innerHTML = eur[1];
	        prodEl.querySelector('#plus2').setAttribute('title', eur[1]);
	        prodEl.querySelector('#inslaan-gratis-tag').style.display = 'block';
	        prodEl.querySelector('#inslaan-plus').style.display = 'block';
	        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';
       }else {
       		prodEl.querySelector('#inslaan-gratis-tag').style.bottom = "73px";
	      	prodEl.querySelector('#plus1').innerHTML = eur[0];
	        prodEl.querySelector('#plus1').setAttribute('title', eur[0]);
	        prodEl.querySelector('#plus2').innerHTML = eur[1];
	        prodEl.querySelector('#plus2').setAttribute('title', eur[1]);
	        prodEl.querySelector('#inslaan-gratis-tag').style.display = 'block';
	        prodEl.querySelector('#inslaan-plus').style.display = 'block';
	        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';
       }
      	
      } else {
        prodEl.querySelector('#plus1').innerHTML = eur[0];
        prodEl.querySelector('#plus1').setAttribute('title', eur[0]);
        prodEl.querySelector('#plus2').innerHTML = eur[1];
        prodEl.querySelector('#plus2').setAttribute('title', eur[1]);
        prodEl.querySelector('#inslaan-gratis-tag').style.display = 'block';
        prodEl.querySelector('#inslaan-plus').style.display = 'block';
        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';
      }

    } else if(prefix.export[prodNum].Product_Promotion.indexOf('VOOR') >= 0) {
      var eur = splitVoor(prefix.export[prodNum].Product_Promotion);

      if(isIE){
        prodEl.querySelector('.cloverPromoDetail').style.display = 'block';
        prodEl.querySelector('.inslaan-voor-clover').style.display = 'block';
        prodEl.querySelector('.shape-tekst-block').innerHTML = eur[0];
        prodEl.querySelector('.clover-price-euro').innerHTML = eur[1];
        prodEl.querySelector('.clover-price-cent').innerHTML = eur[2];

      }else if(isSafari) {
      	prodEl.querySelector('#inslaan-tag').innerHTML = eur[0];
        prodEl.querySelector('#product-price-euro').innerHTML = eur[1] + '.';
        prodEl.querySelector('#product-price-euro').setAttribute('title', eur[1] + '.');
        prodEl.querySelector('#product-price-cent').innerHTML = eur[2];
        prodEl.querySelector('#product-price-cent').setAttribute('title', eur[2]);
        prodEl.querySelector('#inslaan-tag').style.display = 'block';
        prodEl.querySelector('#inslaan-price').style.display = 'block';
        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';

        prodEl.querySelector('#inslaan-tag').style.bottom = '115px';
        if(bannerHeight == 240) {

        }else if(bannerHeight == 280) {
        	prodEl.querySelector('#inslaan-tag').innerHTML = eur[0];
        prodEl.querySelector('#product-price-euro').innerHTML = eur[1] + '.';
        prodEl.querySelector('#product-price-euro').setAttribute('title', eur[1] + '.');
        prodEl.querySelector('#product-price-cent').innerHTML = eur[2];
        prodEl.querySelector('#product-price-cent').setAttribute('title', eur[2]);
        prodEl.querySelector('#inslaan-tag').style.display = 'block';
        prodEl.querySelector('#inslaan-price').style.display = 'block';
        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';

        prodEl.querySelector('#inslaan-tag').style.bottom = '134px';
        }
        else {
        	prodEl.querySelector('#inslaan-tag').innerHTML = eur[0];
        prodEl.querySelector('#product-price-euro').innerHTML = eur[1] + '.';
        prodEl.querySelector('#product-price-euro').setAttribute('title', eur[1] + '.');
        prodEl.querySelector('#product-price-cent').innerHTML = eur[2];
        prodEl.querySelector('#product-price-cent').setAttribute('title', eur[2]);
        prodEl.querySelector('#inslaan-tag').style.display = 'block';
        prodEl.querySelector('#inslaan-price').style.display = 'block';
        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';

        prodEl.querySelector('#inslaan-tag').style.bottom = '121px';
        }
      } else {
        prodEl.querySelector('#inslaan-tag').innerHTML = eur[0];
        prodEl.querySelector('#product-price-euro').innerHTML = eur[1] + '.';
        prodEl.querySelector('#product-price-euro').setAttribute('title', eur[1] + '.');
        prodEl.querySelector('#product-price-cent').innerHTML = eur[2];
        prodEl.querySelector('#product-price-cent').setAttribute('title', eur[2]);
        prodEl.querySelector('#inslaan-tag').style.display = 'block';
        prodEl.querySelector('#inslaan-price').style.display = 'block';
        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';
      }
    } else if(prefix.export[prodNum].Product_Promotion.indexOf('HALVE PRIJS') >= 0) {
    	if(isIE) {
	        prodEl.querySelector('.cloverPromoDetail').style.display = 'block';
	        prodEl.querySelector('.inslaan-voor-clover').style.display = 'block';
	        prodEl.querySelector('.text-clover').style.top = '.1em';
	        prodEl.querySelector('.text-clover').style.left = '-4px';

	        prodEl.querySelector('.clover-price-cent').style.display = 'none';
	        prodEl.querySelector('.clover-price-euro').style.fontSize = '11px';
	        prodEl.querySelector('.text-clover').style.lineHeight = '4px';
	        prodEl.querySelector('.text-clover').style.top = '10px';

	        prodEl.querySelector('.shape-tekst-block').style.display = 'none';
	        prodEl.querySelector('.clover-price-euro').innerHTML = prefix.export[prodNum].Product_Promotion;
	    } else if(isSafari){
	        // als safari de browser is
	        prodEl.querySelector('#inslaan-halve-prijs').style.display = 'block';
	        prodEl.querySelector('#halve-prijs-number').innerHTML = splitHalvePrijs(prefix.export[prodNum].Product_Promotion);
	        prodEl.querySelector('#halve-prijs-number').setAttribute('title', splitHalvePrijs(prefix.export[prodNum].Product_Promotion));

	    	if(bannerHeight == 50) {
	        	prodEl.querySelector('#inslaan-halve-prijs').style.top = '-52px';
	       }
	    } else{
	        // als chrome/firefox/andere browser de bla.f,ksdfljksfkl....
	        prodEl.querySelector('#inslaan-halve-prijs').style.display = 'block';
	        prodEl.querySelector('#halve-prijs-number').innerHTML = splitHalvePrijs(prefix.export[prodNum].Product_Promotion);
	        prodEl.querySelector('#halve-prijs-number').setAttribute('title', splitHalvePrijs(prefix.export[prodNum].Product_Promotion));

	    }
    }

    else if(prefix.export[prodNum].Product_Promotion.search('[0-9]+.[0-9][0-9]') == 0) {
      var eur = splitPrice(prefix.export[prodNum].Product_Promotion);

      if(isIE){
        prodEl.querySelector('.cloverPromoDetail').style.display = 'block';
        prodEl.querySelector('.inslaan-voor-clover').style.display = 'block';
        prodEl.querySelector('.text-clover').style.top = '.1em';
        prodEl.querySelector('.text-clover').style.left = '.05em';

        prodEl.querySelector('.shape-tekst-block').style.display = 'none';
        prodEl.querySelector('.clover-price-euro').innerHTML = eur[0];
        prodEl.querySelector('.clover-price-cent').innerHTML = eur[1];
      } else {
        prodEl.querySelector('#product-price-euro').innerHTML = eur[0] + '.';
        prodEl.querySelector('#product-price-euro').setAttribute('title', eur[0] + '.');
        prodEl.querySelector('#product-price-cent').innerHTML = eur[1];
        prodEl.querySelector('#product-price-cent').setAttribute('title', eur[1]);
        prodEl.querySelector('#inslaan-price').style.display = 'block';
        prodEl.querySelector('.productInslaanWrapper').style.display = 'block';
      }
    }
  }

  function limitWords(textToLimit, wordLimit) {
    var finalText = "";
    var text2 = textToLimit.replace(/\s+/g, ' ');
    var text3 = text2.split(' ');
    var numberOfWords = text3.length;

    if(numberOfWords > wordLimit) {
      for(var i=0; i< wordLimit; i++) {
        finalText = finalText+" "+ text3[i];
      }
      return finalText+"...";
    }
    else{
      return textToLimit;
    }
  }

  function setfooterShadow(footerBackground, contentBackground) {
    if(footerBackground == contentBackground) {
      creative.dom.mainContent.style.boxShadow = 'inset 0 -10px 12px -13px black';
    }
  }

	// Setting exit URL's
    creative.dom.banner.addEventListener('click', function(){
    Enabler.exitOverride('Exit', exitUrl);
  });

  function addSuffix(url, dcmParameter) { 
  var urlSuffix = Enabler.getParameter(dcmParameter); 
  var _url = '';

  if (url) { 
    var symbol = (url.indexOf('?') > -1) ? '&': '?'; 
    if(urlSuffix) { 
      while (urlSuffix.charAt(0) == '?' || urlSuffix.charAt(0) == '&') { 
        urlSuffix = urlSuffix.substring(1); 
      } 
      if (urlSuffix.indexOf('?') > -1) { 
        urlSuffix = urlSuffix.replace(/\?/g, '&'); 
      } 
    } 
    _url = url + symbol + urlSuffix; 
  } 
  return _url; 
} 

// Example of how you would use this function:
exitUrl = addSuffix(prefix.export[0].Exit_URL2.Url, 'exit_suffix'); 

  // product spedific exit URL's
  // creative.dom.startScreen.addEventListener('click', function(){
  //   Enabler.exitOverride('Exit on start slide', prefix.export[0].Exit_URL2.Url);
  // });
  //
  // creative.dom.productSection1.addEventListener('click', function() {
  //   Enabler.exitOverride('Exit on first product slide', prefix.export[0].Exit_URL.Url);
  // });
  //
  // creative.dom.productSection2.addEventListener('click', function() {
  //   Enabler.exitOverride('Exit on second product slide', prefix.export[1].Exit_URL.Url);
  // });
  //
  // creative.dom.productSection3.addEventListener('click', function() {
  //   Enabler.exitOverride('Exit on third product slide', prefix.export[2].Exit_URL.Url);
  // });
  //
  // creative.dom.endScreen.addEventListener('click', function(){
  //   Enabler.exitOverride('Exit on last slide', prefix.export[0].Exit_URL2.Url);
  // })

	animation(prefix);
}

/*custom animation*/
function animation() {
	//CUSTOM EL

  //  and play functionality for develop purposes
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      (tl.isActive()) ? tl.pause() : tl.play();
    }
  
    if(e.keyCode == 13){
      !tl.isActive() && tl.restart();
    }
  }

  var imgWidth;
  var imgWidth2;
  if(prefix.export[0].PromotionType_eurootje_50procent_inslaan == "inslaan"){
    imgWidth = '60%';
    imgWidth2 = '85%';
  } else {
    imgWidth = '72%';
    imgWidth2 = '100%';
  }

	tl = new TimelineLite;
   tl
   .to(creative.dom.mainImgSection, .1, {height: '88%', width: '100%'})
   .to(creative.dom.mainImgSection, .2, {width: '80%'})
   .to(creative.dom.mainImgSection, .2, {width: '95%'})
   .to(creative.dom.mainImgSection, .2, {width: '85%'})
   .to(creative.dom.mainImgSection, .2, {width: '90%'})
   .to(creative.dom.mainImgSection, .2, {width: '88%'})
   .to(creative.dom.mainImgSection, .2, {width: '90%'})
   .to(creative.dom.mainImgSection, .2, {css: {height: '74%', width: imgWidth}, delay:1.0})
   .to(creative.dom.mainTxt1, .2, {fontSize: '13pt', display: 'block'})
   .to(creative.dom.mainTxt2, .2, {fontSize: '13pt', display: 'block'})
   .to(creative.dom.startScreen, .5, {css: {left: '-100%'}, delay:1.5})
   .to(creative.dom.productSection1, .5, {left: '0'})
   .to(creative.dom.footerImage, .5, {left  : '0'}, '-=.5')
   .to(creative.dom.footerBestel, .5, {left: '0'}, '-=.5')
   .to(creative.dom.productSection1, .5, {css: {left: '-100%'}, delay:3.5})
   .to(creative.dom.productSection2, .5, {left: '0'})
   .to(creative.dom.productSection2, .5, {css: {left: '-100%'}, delay:3.5})
   .to(creative.dom.productSection3, .5, {left: '0'})
   .to(creative.dom.productSection3, .5, {css: {left: '-100%'}, delay:3.5})
   .to(creative.dom.mainImgSectionEnd, 0, {height: '88%', width: imgWidth2})
   .to(creative.dom.endScreen, .5, {left: '0'})
   .to(creative.dom.mainImgSectionEnd, .2, {css: {height: '74%', width: imgWidth}, delay:1.0})
   .to(creative.dom.mainTxt1End, .2, {fontSize: '14pt', display: 'block'})
   .to(creative.dom.mainTxt2End, .2, {fontSize: '14pt', display: 'block'});
}
