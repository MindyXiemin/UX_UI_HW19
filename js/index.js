
$(document).on("click", "#linkedin", function () {
  window.open('https://www.linkedin.com/in/min-xie-/', '_blank')
});

$(document).on("click", "#resume", function () {
  window.open('https://drive.google.com/file/d/1cuYVVCucxtyb-eWehNFi8L8ws9nW9o8B/view', '_blank')
});
$(document).on("click", "#outlook", function () {
  window.open('mailto:Mindyxiemin@outlook.com?subject = Feedback&body = Message')
});
$(document).on("click", "#instagram", function () {
  window.open('https://www.instagram.com/mindyxie_design/', '_blank')
});
$(document).on("click", "#voluble-btn", function () {
  window.open('voluble.html', '_blank')
});


var skill_id_arr = [
  "ProductDesign",
  "Prototyping",
  "WebDesign",
  "MobileDesign",
  "UIDesign",
  "UXDesign",
  "DesignThinking",
  "UserResearch",
  "Coding",
  "_3DPrint",
  "AdobeInDesign",
  "AdobePhotoshop",
  "AdobeIllustrator",
  "Figma",
  "AutoCAD",
  "Rhinoceros",
  "Revit",
  "SketchUp",
  "Miro",
  "Invision"
]
var skill_obj = {
  ProductDesign: 4,
  Prototyping: 4,
  WebDesign: 4,
  MobileDesign: 4,
  UIDesign: 4,
  UXDesign: 3,
  DesignThinking: 3,
  UserResearch: 3,
  Coding: 1,
  _3DPrint: 2,
  AdobeInDesign: 5,
  AdobePhotoshop: 5,
  AdobeIllustrator: 5,
  Figma: 5,
  AutoCAD: 5,
  Rhinoceros: 4,
  Revit: 3,
  SketchUp: 3,
  Miro: 3,
  Invision: 3
}
$(function () {
  $.each(skill_id_arr, function (indexes, values) {
    const red_level = skill_obj[values]
    const gray_level = 5 - red_level
    var red_dot = ""
    var gray_dot = ""
    for (let i = 0; i < red_level; i++) {
      red_dot += "<span class=\"skills-red\"></span>";
    }
    for (let i = 0; i < gray_level; i++) {
      gray_dot += "<span class=\"skills-gray\"></span>";
    }
    const dot_str = red_dot + gray_dot
    $('#' + values).append("<br>" + dot_str);
  });
});