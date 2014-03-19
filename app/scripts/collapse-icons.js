'use strict';

$(document).on("click", 'a#collapseOneTitle.pull-right', function() {
  console.log("click");
  $(".glyphicon").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
});

$(document).on("click", 'a#collapseOneTitle.pull-right.collapsed', function() {
  console.log("click");
  $(".glyphicon").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
});