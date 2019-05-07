;"use strict";

define( function(require, exports, module) {
    /*require("service-dpt")
     var a=1;*/
    module.exports = {
        init : function() {
            var vm = new Vue( {
                el: "#pageDiv",
                data: {
                },
                mounted: function() { // 页面加载后,vue挂载完成开始查询数据
                    this.$nextTick( function () {  //$nextTick 是在下次 DOM 更新循环结束之后执行延迟回调，在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM，
                        /*$("#mmenu").css("display","none");
                        $("#copyright").css("display","none");*/
                    } );
                },
                methods: {
                    abc:function(){

                    }
                }
            } );
        }
    };

} );