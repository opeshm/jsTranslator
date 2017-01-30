/* ========================================================================
 * jstranslator v0.1
 * http://opeshm.net/jstranslator
 * ========================================================================
 * Copyright (C) 2017  Mario Domínguez
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * ======================================================================== */

'use strict';

var jsTranslator = function (options) {
  this.options = $.extend({}, jsTranslator.DefaultOptions, options);

  var replaceText = function (data) {
    $("*[data-ops-translate]").each((function(ix, item){
      if (this.options.enable_animation) {
        $(item).hide('fast');
      }
      item.innerHTML = data[$(item).data("ops-translate")];
      if (this.options.enable_animation) {
        $(item).show('fast');
      }
    }).bind(this));
  }

  this.translate = function (lc) {
    if (lc != undefined){
      this.options.locale = lc;
    }
    var locale_file = this.options.locale_path + this.options.locale + ".json";
    $.getJSON(locale_file,  replaceText.bind(this));
  }

  this.translate();
}

jsTranslator.Version = '0.1';
jsTranslator.DefaultOptions = {
  "locale": "",
  "locale_path": "",
  "enable_animation": false
}
