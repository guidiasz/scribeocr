
// File summary:
// Utility functions used for loading fonts.
// To make sure what the user sees on the canvas matches the final pdf output,
// all fonts should have an identical OpenType.js and FontFace version.

import { createSmallCapsFont } from "./fontOptimize.js";

// Load all font styles for specified font family
export async function loadFontFamily(fontFamily, fontMetricsObj){
  let heightSmallCaps;
  if(typeof(fontMetricsObj) == "undefined" || fontMetricsObj == null || fontMetricsObj["heightSmallCaps"]){
    heightSmallCaps = 1;
  } else {
    heightSmallCaps = fontMetricsObj["heightSmallCaps"];
  }

  if(fontFamily.toLowerCase() == "open sans"){
    await loadFont("Open Sans-italic", null, true, false);
    await loadFont("Open Sans", null, true, false);
    await loadFont("Open Sans-small-caps", null, true, false);
    createSmallCapsFont(window.fontObj["Open Sans"]["small-caps"], "Open Sans", heightSmallCaps);
  } else if(fontFamily.toLowerCase() == "libre baskerville"){
    await loadFont("Libre Baskerville-italic", null, true, false);
    await loadFont("Libre Baskerville", null, true, false);
    await loadFont("Libre Baskerville-small-caps", null, true, false);
    createSmallCapsFont(window.fontObj["Libre Baskerville"]["small-caps"], "Libre Baskerville", heightSmallCaps);
  }
}

// Load font as FontFace (used for displaying on canvas)
export async function loadFontBrowser(fontFamily, fontStyle, src, overwrite = false, use = true) {

  if(typeof(window.fontFaceObj) == "undefined"){
    window.fontFaceObj = new Object;
  }

  // Only load font if not already loaded.
  if(overwrite || !document.fonts.check(fontStyle + " 10px '" + fontFamily + "'")){
    let newFont;
    if(fontStyle == "small-caps"){
        newFont = new FontFace(fontFamily + " Small Caps", src);
    } else {
      newFont = new FontFace(fontFamily, src, {style:fontStyle});
    }

    if(typeof(fontFaceObj[fontFamily]) == "undefined"){
      fontFaceObj[fontFamily] = new Object;
    }

    if(typeof(fontFaceObj[fontFamily][fontStyle]) != "undefined"){
      document.fonts.delete(fontFaceObj[fontFamily][fontStyle]);
    }

    fontFaceObj[fontFamily][fontStyle] = newFont;

    await newFont.load();
    // add font to document
    document.fonts.add(newFont);
    // enable font with CSS class
    document.body.classList.add('fonts-loaded');

  }

  // Without clearing the cache FabricJS continues to use old font metrics.
  fabric.util.clearFabricFontCache(fontFamily);

}


// Load font as opentype.js object, call loadFontBrowser to load as FontFace
export async function loadFont(font, src = null, overwrite = false, use = true, optimize = false){
  if(typeof(window.fontObj) == "undefined"){
    window.fontObj = new Object;
  }


  if(src == null){
    src = fontFiles[font];
  }

  let styleStr = font.match(/(?<=[\-]).+/);
  if(styleStr == null){
    styleStr = "normal";
  // Alternative names for "Normal"
  } else {
    styleStr = styleStr[0].toLowerCase()
    if(["medium","roman"].includes(styleStr)){
        styleStr = "normal";
      }
  }

  const familyStr = font.match(/[^\-]+/)[0];

  if(!fontObj[familyStr]){
    fontObj[familyStr] = new Object;
  }

  // Only load font if not already loaded
  if(overwrite || !fontObj[familyStr][styleStr]){
    if(typeof(src) == "string"){
      fontObj[familyStr][styleStr] = await opentype.load(src);

      src = "url(" + src + ")";
    } else {
      fontObj[familyStr][styleStr] = opentype.parse(src, {lowMemory:false});

    }
  }
  await loadFontBrowser(familyStr, styleStr, src, overwrite = overwrite, use = use);
}

// Object containing location of various font files
var fontFiles = new Object;
fontFiles["Libre Baskerville"] = "./fonts/LibreBaskerville-Regular.ttf";
fontFiles["Libre Baskerville-italic"] = "./fonts/LibreBaskerville-Italic.ttf";
fontFiles["Libre Baskerville-small-caps"] = "./fonts/LibreBaskerville-Regular.ttf";

fontFiles["Open Sans"] = "./fonts/OpenSans-VariableFont_wdth,wght.ttf";
fontFiles["Open Sans-italic"] = "./fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf";
fontFiles["Open Sans-small-caps"] = "./fonts/OpenSans-VariableFont_wdth,wght.ttf";