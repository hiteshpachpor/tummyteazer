jQuery(document).ready(function($) {
    $(".burger-icon").click(function() {
        $(".header .menu").addClass("reveal");
    });

    $(".close-menu, .menu-item").click(function() {
        $(".header .menu").removeClass("reveal");
    });
});
