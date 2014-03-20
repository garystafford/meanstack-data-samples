'use strict';

var flipChevron = function (obj) {
  if (obj.hasClass('collapsed')) {
    obj[0].firstElementChild.className = "glyphicon glyphicon-chevron-down";
  } else {
    obj[0].firstElementChild.className = "glyphicon glyphicon-chevron-up";
  }
};