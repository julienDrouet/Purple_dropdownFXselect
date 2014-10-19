/*dropdown_select_v2.js*/

(function ($) {
    $.fn.dropdownSelect = function (options) {

        var settings = $.extend({
            fx: 'slide',
            fxOption: {direction: 'up'},
            fxDuration: 500,
            borderRadius: '5px',
            minWidth: '200px',
            arrowClass: 'arrow_down',
            cursor: 'pointer'
            
        }, options);

        return this.each(function (index) {

            var dropdown_container = $('<div class="dropdown_container"></div>').insertAfter($(this));

            var dropdown_click_div = $('<div class="dropdown_click"></div>').css({'border-radius':settings.borderRadius, 'min-width':settings.minWidth, 'cursor':settings.cursor, 'position':'relative'}).appendTo(dropdown_container);

            var dropdown_values_div = $('<div class="dropdown_values"></div>').css({'border-radius':settings.borderRadius, 'min-width':settings.minWidth, 'position':'absolute'}).appendTo(dropdown_container);

            dropdown_click_div.css('width', ($(this).width() * 1.2) + 'px');
            dropdown_values_div.css('width', ($(this).width() * 1.2) + 'px');

            dropdown_click_div.html('<p>' + $(this).find('option:selected').text() + '<span class="'+settings.arrowClass+'"></span></p>');

            var select = $(this);

            dropdown_click_div.click(function () {

                dropdown_values_div.html('');

                select.find('option').each(function () {
                    var selected;
                    if ($(this).is(':selected')) {
                        selected = 'class="dropdown_selected"';
                    } else {
                        selected = '';
                    }
                    dropdown_values_div.append('<a href="' + $(this).val() + '"' + selected + '>' + $(this).text() + '</a>');
                });

                dropdown_values_div.find('a').click(function (event) {
                    event.preventDefault();
                    dropdown_click_div.html('<p>' + $(this).text() + '<span class="'+settings.arrowClass+'"></span></p>');
                    dropdown_values_div.hide(settings.fx, settings.fxOption, settings.fxDuration);
                    select.val($(this).attr('href'));
                });
                dropdown_values_div.toggle(settings.fx, settings.fxOption, settings.fxDuration);
            });
            select.hide();
        });
    };
}(jQuery));


