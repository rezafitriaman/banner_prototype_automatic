
/*console.log('banner');*/
var creative = {};
Enabler.setProfileId(10015894);
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

		devDynamicContent.fonQ_dynamic_banners_9102017_Blad1= [{}];
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0]._id = 0;
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].UniqueID = 1;
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Reporting_Label = "test1";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Default = true;
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].isActive = true;
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Start_date = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Start_date.RawValue = "10-10-2017";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Start_date.UtcValue = 1507618800000;
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].End_date = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].End_date.RawValue = "10-20-2017";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].End_date.UtcValue = 1508482800000;

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy1 = "Op zoek naar jouw mooi?";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy1_fontcolor = "#ffffff";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy2 = "Jouw mooi in wonen, koken en lifestyle vind je bij fonQ";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy2_fontcolor = "#ffffff";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy3_1 = "Vind";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy3_2 = "Jou";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy3_3 = "Mooi";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].copy3_fontcolor = "#ffffff";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].cta_text = "Bekijk meer";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].cta_text_color = "#ffffff";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].cta_bg_color = "#d63333";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].cta_bg_hover_color = "#9B080E";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].cta_bordercolor = "black";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].cta_bordercolor_hover = "yellow";

	    /*there is no rotation on the banner?*/
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].banner_rotation_sec = 30;

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].gradient_opacity = 1;

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].logo_img = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].logo_img.Type = "file";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].logo_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/63236081/dirty/160x600_V1/logo.png";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].background_image = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].background_image.Type = "file";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].background_image.Url = "https://s0.2mdn.net/creatives/assets/2358747/background_300x250.png";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].skyline_img = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].skyline_img.Type = "file";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].skyline_img.Url = "https://s0.2mdn.net/ads/richmedia/studio/pv2/63236072/dirty/160x600_V1/skyline.png";
	    
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].skyline_opacity = 1;

	    /*we dont use this*/
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Exit_url = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Exit_url.Url = "https://www.fonq.nl/";
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Tagging = "?utm_source=display&utm_medium=cpm&utm_campaign=cat_remarketing";

	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Landing = {};
	    devDynamicContent.fonQ_dynamic_banners_9102017_Blad1[0].Landing.Url = "https://www.fonq.nl/?utm_source=display&utm_medium=cpm&utm_campaign=cat_remarketing";
	    Enabler.setDevDynamicContent(devDynamicContent);

	    startAds(devDynamicContent);
	}else {
		/*console.log('live');*/
		window.envi = 'live';
		dynamicContent
		startAds(dynamicContent);
	}

}

/*custom dom elements*/
function setupDom() {
	creative.dom = {};
	//spinner and banner content STANDARD!
	creative.dom.spinner = document.querySelector('#spinner');
	creative.dom.banner = document.querySelector('#content');

	//CUSTOM EL

}

function show() {
	creative.dom.banner.style.display = 'block';
	/*creative.dom.spinner.style.display = 'none';*/
}

/*custom dynamicContent*/
function startAds(prefix) {
	window.prefix = prefix;
	/*console.log('startAds', prefix)*/
	/*show banner STANDARD!*/
	show();
	/*Dynamic Content*/

	animation();
}

/*custom animation*/
function animation() {
	//CUSTOM EL

}
