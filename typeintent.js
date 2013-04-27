(function ($) {
    $.fn.typeintent = function (options) {

        var defaultVal = {
            eachWord:false,
            waitTime:1200
        };

        var obj = $.extend(defaultVal, options);

        return this.each(function () {
            var $el = $(this);

            $el.change(function(e){
                var newVal = $(this).val();
                var oldVal = obj.lastChangeVal;
                if (newVal === oldVal || newVal === (oldVal + ' '))
                {
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }
                else
                {
                    oldVal = newVal;
                }
            });

            if (obj.eachWord)
            {
                $el.keyup(function(e){
                    var newVal = $(this).val();
                    var oldVal = obj.lastChangeVal;
                    var pattern = /[^\s]\s/;
                    if (e.which === 32 && pattern.test($el.val()))
                    {
                        if (newVal !== oldVal)
                        {
                            $(this).change();                            
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