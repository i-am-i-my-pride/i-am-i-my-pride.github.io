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
                mounted: function() { // ҳ����غ�,vue������ɿ�ʼ��ѯ����
                    this.$nextTick( function () {  //$nextTick �����´� DOM ����ѭ������֮��ִ���ӳٻص������޸�����֮��ʹ�� $nextTick��������ڻص��л�ȡ���º�� DOM��
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