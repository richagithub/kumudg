$("#myTab li a").click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');

    });
