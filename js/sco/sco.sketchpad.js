/* ==========================================================
 * sco.ajax.js
 * http://github.com/terebentina/sco.js
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

;(function($, undefined) {
    "use strict";

    var pluginName = 'scojs_sketch';
    $(document).on('click.' + pluginName, '[data-trigger="sketch"]', function() {
        var $this = $(this)
            ,data = $this.data()
            ,$target
            ,$topbar
            ,spinner
            ;
        if (typeof data['target'] != 'undefined') {

            $target = $(data['target']);
            //console.log(data['target']);
          
            if($target.hasClass('hide')){
                $target.removeClass('hide');
                $target.addClass('show');

            }else{
                $target.removeClass('show');
                $target.addClass('hide');
            }


            //return false;
        }
        if(typeof data['topbar']!='undefined'){
            $topbar = $(data['topbar']);
            //console.log(data['target']);
          
            if($topbar.hasClass('hide')){
                $topbar.removeClass('hide');
                $topbar.addClass('show');

            }else{
                $topbar.removeClass('show');
                $topbar.addClass('hide');
            }

        }
    });
})(jQuery);
