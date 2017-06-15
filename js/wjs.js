/**
 * Created by JiaMeng.XU on 2017/5/16 0016.
 */
$(function () {
    //轮播图
    //获取需要添加子元素的父元素item
    var items = $(".carousel-inner .item");
    /*添加屏幕大小变化的事件*/
    $(window).on("resize",function () {
        //获取屏幕宽度
        var windowWidth = $(window).width();
       //给每个item设置事件
       if( windowWidth < 768){
           $(items).each(function(index, value){
               /*获取当前item中存储的smallImage*/
               /*如果dom方式，通过dom.dateSet[''],如果是jq,使用$(dom).data('')*/
               var imgSrc = $(this).data("smallImage");
               $(this).html(' <a href="javascript:;" class="mobileImg  hidden-sm hidden-md hidden-lg" ><img src="'+imgSrc+'" alt="..."> </a>')
           })
       }
       else (
           $(items).each(function(index,value){
               var imgSrc=$(this).data('largeImage');
               $(this).html('<a href="javascript:;" class="pcImg" style="background-image: url('+imgSrc+')"></a>');
           })
       )
    })
    /*trigger:添加了事件之后默认让事件先触发一次*/
        .trigger("resize");

     //滑动功能
    var startX ,endX, DisX;
  //获取注册事件元素
    var carousel_inner = $(".carousel-inner")[0];
    carousel_inner.addEventListener("touchstart",function (e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend",function (e) {
        endX = e.changedTouches[0].clientX;
        DisX = endX - startX;
        if(DisX > 0){
            $(".carousel").carousel("prev")
        }
        else if(DisX < 0){
            $(".carousel").carousel("next");
        }
    })


    // /*特别推荐*/
 /*计算产品块标签页导航的实际宽度*/
    var tabs = $(".tab_parent .nav-tabs");
    var lis = tabs.find("li");
    var total = 0;
     lis.each(function (index, value) {
         total = total+ $(this).outerWidth(true);
         console.log(total);
     })
      $(tabs).width(total+2);
    var myScroll = new IScroll('.tab_parent',{
        scrollX: true,
        scrollY: false
    });

   //提示文本框要引入以下
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
