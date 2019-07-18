/**
 * Created by 刘如刚 on 2019/7/11.
 */
$(function(){
    /*初始化full组件 */
    $('#dowebok').fullpage({
        /*配置参数*/
        /*页面切换时间*/
        scrollingSpeed: 1000,
        /*背景颜色*/
        sectionsColor:["#fadd67","#84a2d4","#ef674d","#ffeedd","#d04759","#84d9ed","#8ac060"],
        /*设置屏幕内容的对齐方式*/
        verticalCentered:  false,
        /*设置导航，设置指示器*/
        navigation:true,
        /*监听进入某一屏的时候*/
        afterLoad: function(link,index){
           setTimeout(function(){
               $('.section').eq(index-1).addClass('now')
           })
        },
        /*离开某个页面的时候触发*/
        onLeave: function(index,nextIndex,direction){
            if(index == 2 && nextIndex == 3){
                /*当前是从第二页到第三页*/
                $('.section').eq(index-1).addClass('leaved')
            }else if(index == 3 && nextIndex == 4){
                /*当前是从第三页到第四页*/
                $('.section').eq(index-1).addClass('leaved')
            }else if(index == 5 && nextIndex == 6){
                /*当前是从第五页到第六页*/
                $('.section').eq(index-1).addClass('leaved');
                $('.screen6 .box').addClass('show')
            }
        },
        afterRender: function(){
            // console.log(this);//$('#dowebok')
            /*this没有api方法*/
            /*jquery插件初始化封装这个方法*/
            /*1,回想jquery插件的封装，$.fn.fullpage = function(){}*/
            /*2.jquery本身没有的方法通过$.fn的方式追加方法，认为是插件方法*/
            /*3,例如：$.fn.src = function(){return this.attr('src')} this 你选择谁this(jquery对象)执行谁*/
            $('.more').on('click',function(){
                $.fn.fullpage.moveSectionDown()
            })

            /*当第四屏的购物车动画结束之后执行收货地址·对的动画*/
            $('.screen4 .cart').on('transitionend',function(){
                $('.screen4 .address').show().find('img:last').fadeIn(1000);
                $('.screen4 .text').addClass('show')
            })
        }
        /*点击更多切换下一页*/
        /*最好在组件出示完毕或者插件渲染完毕*/

    });
});
