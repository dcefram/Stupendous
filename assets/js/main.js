(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Stupendous = {
  siteHeader: '',

  postHeader: '',

  resizeHeader: function resizeHeader() {
    var siteHead = Stupendous.siteHeader;
    var postHead = Stupendous.postHeader;

    if (siteHead instanceof HTMLElement) {
      if (siteHead.classList && siteHead.classList.contains('tag') || /(^tag )|( tag$)|^tag$/.test(siteHead.className)) {
        siteHead.style.padding = window.innerWidth * 0.15625 / 2 + 'px 0px ' + window.innerWidth * 0.15625 / 20 + 'px';
      } else {
        siteHead.style.padding = window.innerWidth * 0.15625 / 4 + 'px 0px';
      }
    }

    if (postHead instanceof HTMLElement) {
      postHead.style.padding = window.innerWidth * 0.078125 / 2 + 'px 0px';
    }
  },
  initShortcodes: function initShortcodes() {
    var body = document.querySelector('main');

    new Shortcode(body, {
      col: function col() {
        var ratio = this.options.ratio ? this.options.ratio : 1;
        var offset = this.options.offset ? this.options.offset : 0;
        var style = this.options.style ? this.options.style : '';
        var ret = '';

        if (ratio !== 1) {
          ratio = ratio.replace(/\//g, '-');
        }

        if (body.classList.contains('home-template') || body.className === 'home-template') {
          ret = this.contents;
        } else {
          ret = '<div class="col-' + ratio + '-offset-' + offset + '" style="' + style + '">\n            ' + this.contents + '\n          </div>';
        }

        return ret;
      }
    });
  },
  showBody: function showBody() {
    var body = document.querySelector('body');

    if (body.classList) {
      body.classList.remove('loading');
    } else {
      var className = body.className;
      var classNames = className.split(' ');

      classNames = [classNames.slice(0, classNames.indexOf('loading'))].concat(_toConsumableArray(classNames.slice(classNames.indexOf('loading') + 1)));

      body.className = classNames.join(' ');
    }
  }
};

window.addEventListener('load', function () {
  Stupendous.siteHeader = document.getElementById('site-head');
  Stupendous.postHeader = document.querySelector('.post-header');

  Stupendous.resizeHeader();
  Stupendous.initShortcodes();
  Stupendous.showBody();
});

window.addEventListener('resize', Stupendous.resizeHeader);

},{}]},{},[1]);
