'use strict';

/*
 $(document).on("click", 'a#collapseOneTitle.pull-right', function () {
 $("#collapseOneGlyph").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
 });

 $(document).on("click", 'a#collapseOneTitle.pull-right.collapsed', function () {
 $("#collapseOneGlyph").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
 });


 $(document).on("click", 'a#collapseTwoTitle.pull-right', function () {
 $("#collapseTwoGlyph").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
 });

 $(document).on("click", 'a#collapseTwoTitle.pull-right.collapsed', function () {
 $("#collapseTwoGlyph").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
 });


 $(document).on("click", 'a#collapseThreeTitle.pull-right', function () {
 $("#collapseThreeGlyph").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
 });

 $(document).on("click", 'a#collapseThreeTitle.pull-right.collapsed', function () {
 $("#collapseThreeGlyph").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
 });


 $(document).on("click", 'a#collapseFourTitle.pull-right', function () {
 $("#collapseFourGlyph").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
 });

 $(document).on("click", 'a#collapseFourTitle.pull-right.collapsed', function () {
 $("#collapseFourGlyph").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
 });
 */
var flipChevron = function (obj) {
  if (obj.hasClass('collapsed')) {
    obj[0].firstElementChild.className = "glyphicon glyphicon-chevron-down";
  } else {
    obj[0].firstElementChild.className = "glyphicon glyphicon-chevron-up";
  }
};