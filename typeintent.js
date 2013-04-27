(function ($) {
    $.fn.typeintent = function (options) {

        var defaultVal = {
            eachWord:true,
            waitTime:1200
        };

        var obj = $.extend(defaultVal, options);

        return this.each(function () {
            var $el = $(this);

            $el.change(function(e){
                if ($(this).val() === obj.lastChangeVal)
                {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }
                else
                {
                    obj.lastChangeVal = $(this).val();
                }
            });

            if (obj.eachWord)
            {
                $el.keyup(function(e){
                    var pattern = /[^\s]\s/;
                    if (e.which === 32 && pattern.test($el.val()))
                    {
                        if ($el.val() !== obj.lastChangeVal)
                        {
                            $el.change();                            
                        }
                    }
                })
            }

            $el.keydown(function(e){
                clearTimeout(obj.timeout);
                if (e.which !== 32)
                {
                    obj.timeout = setTimeout(function($el) {
                        if ($el.val() !== obj.lastChangeVal)
                        {
                            $el.change();                            
                        }
                    }, obj.waitTime,$el);
                }
            });

        });
    }
})(jQuery);