(function ($) {
    $.fn.typeintent = function (options) {

        var defaults = {
            //Should we trigger the change event each time a new word is entered?
            eachWord: false,
            //How long should we wait without input before we decide that the user is done?
            waitTime: 1200
        };

        var obj = $.extend(defaults, options);

        return this.each(function () {
            var $el = $(this);

            $el.change(function(e){
                var newVal = $(this).val();
                var oldVal = obj.lastChangeVal;
                if (newVal === oldVal || newVal === (oldVal + ' '))
                {
                    //Stop bad things from happening to good people
                    e.stopImmediatePropagation();
                    e.preventDefault();
                }
                else
                {
                    //We need a value to reference on each change call
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