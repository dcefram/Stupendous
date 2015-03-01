/*globals jQuery, document */
(function ($) {
    "use strict";

    var $siteHead = "";
    var $postHead = "";

    var resizeHead = function() {
    	if ($siteHead.length > 0 ||
            $postHead.length > 0) {
    		// Elementary grade coding skills LOL
            $siteHead.css({
                "padding" : (window.innerWidth * 0.15625 / 2) + "px 0px"
            });
    		$postHead.css({
                "padding" : (window.innerWidth * 0.078125 / 2) + "px 0px"
            });
    	}
    };

    $(document).ready(function() {
        $siteHead = $("#site-head");
    	$postHead = $(".post-header");

    	resizeHead();
    });

    $(window).resize(resizeHead);
}(jQuery));