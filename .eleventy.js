const moment = require('moment-timezone');

module.exports = (function(eleventyConfig) {

    eleventyConfig.addFilter("dateFormat", function(dateIn) {
        return moment(dateIn).tz('GMT').format('DD/MM/YYYY');
    });

    return {
        templateFormats: ["njk", "md", "jpg", "jpeg", "png", "html", "css"]
    };

});
