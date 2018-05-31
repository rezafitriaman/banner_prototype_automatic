let templateBannerJs = `
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
`;

/*requiered*/
let gulp = require('gulp'),
	order = require("gulp-order"),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	concatCss = require('gulp-concat-css'),
	rename = require('gulp-rename'),
	sourcemaps = require('gulp-sourcemaps'),
	file = require('gulp-file'), //need to create file
	fs   = require('fs'),
	replace = require('gulp-string-replace'),
	wait = require('gulp-wait'),
	fileExists = require('file-exists'); //need to create folder

/*Test build*/
const arg = (argList => {

  	let arg = {}, a, c, s, opt, thisOpt, curOpt, size, category;
  	for (a = 0; a < argList.length; a++) {

	    thisOpt = argList[a].trim();
	    opt = thisOpt.replace(/^\-+/, '');

	    if (opt === thisOpt) {

	      // argument value
	      if (curOpt) arg[curOpt] = opt;
	      curOpt = null;

	    } else {

	      // argument name
	      curOpt = opt;
	      arg[curOpt] = true;

	    }

  	}

 	return arg;

})(process.argv);

let size = arg.s || arg.size,
  	category = arg.c || arg.category;

/*Second use gulp build to create the banner with the right size*/
gulp.task('argument', (cb) => {

	console.log('argument work!')

	/*check if args is empty*/
	function isEmpty(obj) {
	    for(var key in obj) {
	        if(obj.hasOwnProperty(key))
	            return false;
	    }
	    return true;
	}

	if(!isEmpty(arg) && 
		( arg.hasOwnProperty('s') || arg.hasOwnProperty('size') ) && 
		( arg.hasOwnProperty('c') || arg.hasOwnProperty('category') ) ) {

	}else {
		console.log('help: try to make directories first = gulp create_dir ')
		console.log('help: try to use this example = build --size "320x480" --category "sky" ')
	}
	cb();
});

/*------------------------------------------------------------------------------------------------*/

/*replace size on style.scss*/
gulp.task('add-size', ['argument'],  () => {
	console.log('add-size works!')

	console.log(arg.s || arg.size)
	console.log(arg.c || arg.category)

  return gulp.src(['src/' + category + '/scss/style.scss']) // Any file globs are supported
    .pipe(replace(/@import\s*'\d{3}x\d{3}'/g, '@import \'' + size + '\''))
    .pipe(gulp.dest('src/'  + category + '/scss/'))
});

gulp.task('sass', ['add-size'], () => {
	console.log('sass work!');

  	return gulp.src('src/' + category + '/scss/*.scss')
  		.pipe(wait(5000))
	  	.pipe(plumber())
	  	.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
	    .pipe(autoprefixer({
	    	browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'android 4']
		}))
		.pipe(sourcemaps.write())
	    .pipe(gulp.dest('public/' + size))
	    .pipe(reload({stream:true}));
});

gulp.task('concat', ['sass'], () => {
	console.log('concat work!');

	return gulp.src('src/'+ category +'/js/*.js')
	  	.pipe(order([
		    "TweenMax.min.js",
		    "main.js"
		  ]))
	    .pipe(concat('all.js'))
	    .pipe(gulp.dest('public/' + size))
	    .pipe(reload({stream:true}));

});

/*make html go to public*/
gulp.task('src_html', ['concat'], () =>{
	console.log('src_html work!');

    gulp.src('src/' + category + '/*.html')
    .pipe(gulp.dest('public/' + size))
    .pipe(reload({stream:true}));
});

gulp.task('concatCss', ['src_html'], () => {
	console.log('concatCss work!');

	return gulp.src(['!public/' + size +'/all.css','public/' + size + '/*.css'])
		.pipe(sourcemaps.init())
	    .pipe(concatCss("all.css"))
	    .pipe(sourcemaps.write())
	    .pipe(gulp.dest('public/' + size))
		.pipe(reload({stream:true}));
});

gulp.task('html', ['concatCss'], () =>{
	console.log('html work!');

	return gulp.src('public/' + size + '/*.html')
		.pipe(reload({stream:true}));
});

/*browser-sync*/
gulp.task('browser-sync', ['html'], () => {
	console.log('browser-sync work!');
	browserSync({
		server: {
			baseDir: ['public/' + size ],
			/*directory: true,*/	//show directory
			proxy: "grqbge-nwx7013:3000"
		}
	});
	
});


gulp.task('build', () => {

	fileExists('src/lead/scss/style.scss').then(exists => {
		if(exists) {
			gulp.start('browser-sync');
		}else {
			console.log('pls create directory first : gulp create_dir');
		}
	});
	
});



/*watch*/
gulp.task('watch', function() {
	console.log('watch');

	gulp.watch('src/' + category + '/*.html',['src_html']);
	gulp.watch('src/' + category + '/js/*.js', ['concat']);
	/*gulp.watch('cv/js/dev/*.js', ['scripts']);*/
	gulp.watch('src/' + category + '/scss/style.scss', ['sass']);
	gulp.watch('public/' + size + '/style.css', ['concatCss']);
	gulp.watch('public/' + size + '/*.html', ['html']);
});

/*------------------------------------------------------------------------------------------------*/

/*First use gulp directories
It makes all the file and the folders*/
gulp.task('create_dir', () => {
	console.log('directories work!');

	fileExists('src/lead/scss/style.scss').then(exists => {

	  	if(exists) { // OUTPUTS: true or false
	  		console.log('u allready created directories!!');
	  	}else {
	  		console.log('create directories!');

	  		const folders = [
		        'public',
		        'src',
		        'src/lead',
		        'src/rec',
		        'src/sky',
		        'src/lead/js',
		        'src/lead/scss',
		        'src/rec/js',
		        'src/rec/scss',
		        'src/sky/js',
		        'src/sky/scss'
		    ];

		    folders.forEach(dir => {
		        if(!fs.existsSync(dir))     
		            fs.mkdirSync(dir), 
		            console.log('📁  folder created:', dir);        
		    });

		    gulp.start('createMainJs');
		    gulp.start('createIndexHTML');
		    gulp.start('createStyleScss');
		    gulp.start('create_var');

		    gulp.start('create320x50Lead');
		    gulp.start('create320x100Lead');
		    gulp.start('create728x90Lead');
		    gulp.start('create970x250Lead');

		    gulp.start('create120x600Sky');
		    gulp.start('create160x600Sky');
		    gulp.start('create300x600Sky');
		    gulp.start('create320x480Sky');

		    gulp.start('create250x250Rec');
		    gulp.start('create300X250Rec');
		    gulp.start('create336x280Rec');

		    gulp.start('normalize');
		    gulp.start('gsap');
	  	}

	});

    
});


gulp.task('createMainJs', () => {
 
  return file('main.js', templateBannerJs, { src: true })
    .pipe(gulp.dest('src/lead/js'))
    .pipe(gulp.dest('src/rec/js'))
    .pipe(gulp.dest('src/sky/js'));
});

gulp.task('createIndexHTML', () => {
	var templateHTML = `
<!DOCTYPE html>
<html lang="en" class="no-js">
    <head>
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
        <meta name="ad.size" content="width=160,height=600">

        <title>Banner</title>

        <meta name="description" content="banner" />
        <meta name="keywords" content="banner" />
        <meta name="author" content="bgenius" />

        <!-- font embeded -->
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700" rel="stylesheet">

        <!-- css -->
        <link rel="stylesheet" type="text/css" href="all.css" />

        <!-- anabler dbm -->
        <script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>
        <script src="all.js"></script>

    </head>

    <body>
        <section id="banner">
            <div id="content">

                <!-- CUSTOM HTML -->
                
            </div>

            <div id="spinner" class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        </section>

    </body>
    
</html>
	`;

  return file('index.html', templateHTML, { src: true })
    .pipe(gulp.dest('src/lead'))
    .pipe(gulp.dest('src/rec'))
    .pipe(gulp.dest('src/sky'));
});

gulp.task('createStyleScss', () => {
	var templateStyle = `
// Add Imports
@import '000x000';
@import 'var';
@import 'normalize';

.spinner {
	display: block;
	margin: 100px auto;
	width: 40px;
	height: 40px;
	position: absolute;
	text-align: center;

	-webkit-animation: sk-rotate 2.0s infinite linear;
	animation: sk-rotate 2.0s infinite linear;
	top: 15%;
    left: 34%;
    margin-right: -50%;
}

.dot1, .dot2 {
	width: 60%;
	height: 60%;
	display: inline-block;
	position: absolute;
	top: 0;
	background-color: $primaire_color;
	border-radius: 100%;

	-webkit-animation: sk-bounce 2.0s infinite ease-in-out;
	animation: sk-bounce 2.0s infinite ease-in-out;
}

.dot2 {
	top: auto;
	bottom: 0;
	-webkit-animation-delay: -1.0s;
	animation-delay: -1.0s;
}

@-webkit-keyframes sk-rotate { 
	100% { 
		-webkit-transform: rotate(360deg) 
	}
}

@keyframes sk-rotate { 
	100% { 
		transform: rotate(360deg); 
		-webkit-transform: rotate(360deg) 
	}
}

@-webkit-keyframes sk-bounce {
	0%, 100% { 
		-webkit-transform: scale(0.0) 
	}
	50% { 
		-webkit-transform: scale(1.0) 
	}
}

@keyframes sk-bounce {
	0%, 100% { 
		transform: scale(0.0);
		-webkit-transform: scale(0.0);
	} 
	50% { 
		transform: scale(1.0); 
		-webkit-transform: scale(1.0);
	}
}

#banner {
	overflow: hidden;
	position: relative;
	width: $formW;
	height: $formH;
	cursor: pointer;

	#content {
		position: relative;
		display: none;
		height: 100%;
	    width: 100%;

		/* CUSTOM CSS */

	}
}
	`;

	return file('style.scss', templateStyle, { src: true })
    	.pipe(gulp.dest('src/lead/scss'))
	    .pipe(gulp.dest('src/rec/scss'))
	    .pipe(gulp.dest('src/sky/scss'));
});

gulp.task('create_var', () => {
	var template_var =`
/*custom _var*/
$primaire_color: #30b4e7;
	`;

	return file('_var.scss', template_var, { src: true })
    	.pipe(gulp.dest('src/lead/scss'))
	    .pipe(gulp.dest('src/rec/scss'))
	    .pipe(gulp.dest('src/sky/scss'));
});

/*Lead size scss*/
gulp.task('create320x50Lead', () => {
	var template320x50Lead =`
$formW: 320px;
$formH: 50px;
	`;

	return file('_320x50.scss', template320x50Lead, { src: true })
    	.pipe(gulp.dest('src/lead/scss'));
});

gulp.task('create320x100Lead', () => {
	var template320x100Lead =`
$formW: 320px;
$formH: 100px;
	`;

	return file('_320x100.scss', template320x100Lead, { src: true })
    	.pipe(gulp.dest('src/lead/scss'));
});

gulp.task('create728x90Lead', () => {
	var template728x90Lead =`
$formW: 728px;
$formH: 90px;
	`;

	return file('_728x90.scss', template728x90Lead, { src: true })
    	.pipe(gulp.dest('src/lead/scss'));
});

gulp.task('create970x250Lead', () => {
	var template970x250Lead =`
$formW: 970px;
$formH: 250px;
	`;

	return file('_970x250.scss', template970x250Lead, { src: true })
    	.pipe(gulp.dest('src/lead/scss'));
});

/*Sky size scss*/
gulp.task('create120x600Sky', () => {
	var template120x600Sky =`
$formW: 120px;
$formH: 600px;
	`;

	return file('_120x600.scss', template120x600Sky, { src: true })
    	.pipe(gulp.dest('src/sky/scss'));
});

gulp.task('create160x600Sky', () => {
	var template160x600Sky =`
$formW: 160px;
$formH: 600px;
	`;

	return file('_160x600.scss', template160x600Sky, { src: true })
    	.pipe(gulp.dest('src/sky/scss'));
});

gulp.task('create300x600Sky', () => {
	var template300x600Sky =`
$formW: 300px;
$formH: 600px;
	`;

	return file('_300x600.scss', template300x600Sky, { src: true })
    	.pipe(gulp.dest('src/sky/scss'));
});

gulp.task('create320x480Sky', () => {
	var template320x480Sky =`
$formW: 320px;
$formH: 480px;
	`;

	return file('_320x480.scss', template320x480Sky, { src: true })
    	.pipe(gulp.dest('src/sky/scss'));
});

/*Rec size scss*/
gulp.task('create250x250Rec', () => {
	var template250x250Rec =`
$formW: 250px;
$formH: 250px;
	`;

	return file('_250x250.scss', template250x250Rec, { src: true })
    	.pipe(gulp.dest('src/rec/scss'));
});

gulp.task('create300X250Rec', () => {
	var template300X250Rec =`
$formW: 300px;
$formH: 250px;
	`;

	return file('_300X250.scss', template300X250Rec, { src: true })
    	.pipe(gulp.dest('src/rec/scss'));
});

gulp.task('create336x280Rec', () => {
	var template336x280Rec =`
$formW: 336px;
$formH: 280px;
	`;

	return file('_336x280.scss', template336x280Rec, { src: true })
    	.pipe(gulp.dest('src/rec/scss'));
});

/*move normalized to the folders*/
gulp.task('normalize', () => {
  	gulp.src("node_modules/normalize.css/normalize.css")
  		.pipe(rename("_normalize.scss"))
      	.pipe(gulp.dest('src/lead/scss'))
	    .pipe(gulp.dest('src/rec/scss'))
	    .pipe(gulp.dest('src/sky/scss'));
})

/*move GSAP to the folders*/
gulp.task('gsap', () => {
  	gulp.src("node_modules/gsap/src/minified/TweenMax.min.js")
      	.pipe(gulp.dest('src/lead/js'))
	    .pipe(gulp.dest('src/rec/js'))
	    .pipe(gulp.dest('src/sky/js'));
})

gulp.task('default',['build']);