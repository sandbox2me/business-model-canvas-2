/* ==========================================================
* sco.form.js
* ==========================================================
* Copyright 2013 Dan Caragea.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ========================================================== */

/*jshint laxcomma:true, sub:true, browser:true, jquery:true, eqeqeq:false */
/*global Spinner:true */

; (function ($, undefined) {
    "use strict";

    var pluginName = 'scojs_form';

    $(document).on('submit.' + pluginName, '[data-trigger="form"]', function () {
        var $this = $(this)
			, datas = $this.data()
			, $target
			, spinner
            ,$callback
			;
        if (typeof datas['target'] != 'undefined') {
            $target = $(datas['target']);
            //console.log(typeof datas['callback']);
            if (typeof Spinner == 'function') {
                spinner = new Spinner({ color: '#3d9bce' }).spin($target[0]);
            }
             var options = {
                //target: '#Tip', //后台将把传递过来的值赋给该元素
                url: $this.attr('action'), //提交给哪个执行
                dataType: 'html',
                type: 'POST',
                success: function (data) {
                   try{
                    $($('.modal')[0]).modal('hide');
                   }catch(err){}
                    if(typeof datas['callback']!='undefined'){
                     //console.log('calback');
                        $callback=datas['callback'];
                        $target.load($callback);
                    }else{
                        $target.html(data,function(){if(spinner){spinner.stop();}});
                    }
                 }, //显示操作提示
                error: function () { }
            };
            //console.log(options);
            $this.ajaxSubmit(options);
            return false;
           
        }
    });
})(jQuery);

