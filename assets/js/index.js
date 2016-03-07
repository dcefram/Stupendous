/*globals jQuery, document */
(function () {
  'use strict';

  var $siteHead = '';
  var $postHead = '';

  var resizeHead = function() {
  	if ($siteHead instanceof HTMLElement) {
  		// Elementary grade coding skills LOL
      if ($siteHead.classList.contains('tag') ||
        /(^tag )|( tag$)|^tag$/.test($siteHead.className))
      {
        $siteHead.style.padding =
          (window.innerWidth * 0.15625 / 2) + 'px 0px ' +
          (window.innerWidth * 0.15625 / 20) + 'px';
      }
      else
      {
        $siteHead.style.padding = (window.innerWidth * 0.15625 / 4) + 'px 0px';
      }
  	}

    if ($postHead instanceof HTMLElement) {
      $postHead.style.padding = (window.innerWidth * 0.078125 / 2) + 'px 0px';
    }
  };

  window.addEventListener('load', function() {
    $siteHead = document.getElementById('site-head');
    $postHead = document.querySelector('.post-header');

    resizeHead();
  });

  window.addEventListener('resize', resizeHead);
}());
