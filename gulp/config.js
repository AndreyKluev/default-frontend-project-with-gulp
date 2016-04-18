/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulpDir = "./gulp",
    destDir = "./_public",
    srcDir = "./_source";

module.exports = {
    gulpDir: gulpDir,
    destDir: destDir,
    srcDir: srcDir,

    // Конфиг для основных задач
    makeup: {
        lessDir: srcDir + "/less",
        cssDir:  srcDir + "/css",
        jsDir:  srcDir + "/js",
        imgDir:  srcDir + "/img",
        pagesDir:  srcDir + "/tmpl",

        destCssDir: destDir + "/css",
        destJsDir: destDir + "/js",
        destImgDir: destDir + "/img",
        destPagesDir: destDir
    },

    // Конфиг для работы с http://fontello.com/
    fontello: {
        configFile: "fontello.json",
        destFontsDir: destDir + "/font",
        destStylesDir: destDir + "/css"
    },

    // Конфиг для работы со  шрифтом из svg-иконок
    // иконки будут браться, например тут http://www.flaticon.com/
    iconfont: {
        fontName: "icons",
        fontFormats: ["ttf", "eot", "woff", "svg"],
        cssTemplate: "fontawesome-style", // или "foundation-style"
        srcIconsDir: srcDir + "/font-icons",
        templatesDir: gulpDir + "/templates",
        incFontsDir: "../font",
        destFontsDir: destDir + "/font",
        destStylesDir: destDir + "/css",
        sampleTemplate: "fontawesome-style", // или "foundation-style"
        sampleDir: destDir,
        sampleFile: "icons-sample"
    }

    //
    zip: {
        srcFiles: [destDir + '/**/*', bowerDir + '/**/*'],
        destDir: destDir,
        zipFile: "archive.zip"
    }
};
