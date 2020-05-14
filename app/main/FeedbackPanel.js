define(["dojo/_base/declare",
        "dojo/_base/lang",
        "app/common/Templated",
        "dojo/text!./templates/FeedbackPanel.html",
        "dojo/i18n!../nls/resources"], 
function(declare, lang, Templated, template, i18n) {

  var oThisClass = declare([Templated], {
    i18n: i18n,
    templateString: template,

  });

  return oThisClass;
});