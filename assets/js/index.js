/*globals jQuery, document */
(function ($) {
    "use strict";

    var $siteHead = "";
    var $postHead = "";

    var resizeHead = function() {
    	if ($siteHead.length > 0 ||
            $postHead.length > 0) {
    		// Elementary grade coding skills LOL
            if ($siteHead.hasClass("tag"))
            {
                $siteHead.css({
                    "padding" : (window.innerWidth * 0.15625 / 2) + "px 0px " +
                                (window.innerWidth * 0.15625 / 20) + "px"
                });
            }
            else
            {
                $siteHead.css({
                    "padding" : (window.innerWidth * 0.15625 / 4) + "px 0px"
                });
            }
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