$(document).ready(function () {

    var $randomnbr = $('.nbr');
    var $timer = 10;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["@", "z", "a", "i", "a", "b", "d", "u", "l", "l", "a", "h", "_", "9", "1"];

    $randomnbr.each(function () {

        change = Math.round(Math.random() * 500);
        $(this).attr('data-change', change);

    });

    function random() {
        return Math.round(Math.random() * 9);
    };

    function select() {
        return Math.round(Math.random() * $randomnbr.length + 1);
    };

    function value() {
        $('.nbr:nth-child(' + select() + ')').html('' + random() + '');
        $('.nbr:nth-child(' + select() + ')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function () {
            if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                index = $('.ltr').index(this);
                $(this).html(letters[index]);
                $(this).removeClass('nbr');
            }
        });

    };

    $it = setInterval(value, $timer);

});