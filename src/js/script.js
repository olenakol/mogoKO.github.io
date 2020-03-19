var $ = jQuery;

$(document).ready(function () {
    $('.header__toggler').on('click', function () {
        $(this).toggleClass('header__toggler--collapse ');
        $('.menu__list').toggleClass(' menu__list--collapse ');
    });
});