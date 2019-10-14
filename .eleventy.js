module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("static");
    
        return{
            passthroughFileCopy:true,
            markdownTemplateEngine:"njk",
            templateFormats: [
                "md",
                "njk",
                "html",
                "liquid"
              ],
    
            dir:{
                input:"src",
                includes:"includes",
                output:"_site"
            }
        }
    }