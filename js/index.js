/**
 * Created by 刘如刚 on 2019/7/11.
 */
$(function(){
    /*初始化full组件 */
    $('#dowebok').fullpage({
        /*配置参数*/
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

        }
    });
})
