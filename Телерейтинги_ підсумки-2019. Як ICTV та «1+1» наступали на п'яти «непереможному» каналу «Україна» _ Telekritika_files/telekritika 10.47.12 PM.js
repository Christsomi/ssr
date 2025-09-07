jQuery(document).ready(function ($) {
    $('.penci-post-countview-number').each(function () {
        if ($(this).text() === '0') {
            this.parentNode.remove();
        }
    });
});