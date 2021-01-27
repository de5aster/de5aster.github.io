jQuery(document).ready(function(){
    var height = jQuery('.right_block').height(); //получаем высоту одного элемента
    jQuery('.left_block').height(height); //записываем высоту другому элементу
	jQuery('.start_block').height(height); //записываем высоту другому элементу
});

jQuery(document).ready(function () {
    $('h1 span.one').each(function() {
        var target = $(this).html();
        target = target.split("");
        var result = "";
        for (var i = 0, len = target.length; i < len; i++) {
            result += '<span class="' + target[i] + '">' + target[i] + '</span>';
        }
        $(this).html(result);
    });
});

jQuery(document).ready(function(){
jQuery('.top_booking a').click(function(){
    jQuery('html, body').animate({
        scrollTop: jQuery('#top_booking_form').offset().top
    }, 1000);
    return false;
  })
});

jQuery(document).ready(function(){
var onMapMouseleaveHandler = function (event) {
    var that = jQuery(this);

    that.on('click', onMapClickHandler);
    that.off('mouseleave', onMapMouseleaveHandler);
    that.find('iframe').css("pointer-events", "none");
    console.log('disabled');
}
var onMapClickHandler = function (event) {
    var that = jQuery(this);

    that.off('click', onMapClickHandler);

    that.find('iframe').css("pointer-events", "auto");

    that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
jQuery('.map').on('click', onMapClickHandler);
jQuery('.map').find('iframe').css("pointer-events", "none");
});

jQuery(document).ready(function () {
 jQuery('input,textarea').focus(function(){
   jQuery(this).data('placeholder',jQuery(this).attr('placeholder'))
   jQuery(this).attr('placeholder','');
 });
 jQuery('input,textarea').blur(function(){
   jQuery(this).attr('placeholder',jQuery(this).data('placeholder'));
 });
});

jQuery(document).ready(function(){
jQuery('.fake_button').click(function(){
jQuery('.control-groups').addClass('visible');
jQuery('body').addClass('hidden-scroll');
jQuery('#overlay').fadeIn(300);
});
});

/*
function checkParams() {
    var zaezd = $('#simpleForm2_126_date_elem').val();
    var viezd = $('#simpleForm2_126_date2_elem').val();
    
    if(zaezd.length != 0 && viezd.length != 0) {
        $('.fake_button').removeClass('disabled');
    } else {
        $('.fake_button').addClass('disabled');
    }
}*/

jQuery(document).ready(function(){
jQuery('.add_review').click(function(){
jQuery('.popup_review').fadeToggle(300);
jQuery('body').addClass('hidden-scroll');
jQuery('#overlay').fadeIn(300);
});
});

jQuery(document).ready(function(){
jQuery('.booking').click(function(){
jQuery('.popup_booking').fadeToggle(300);
jQuery('body').addClass('hidden-scroll');
jQuery('#overlay').fadeIn(300);
});
});

jQuery(document).ready(function(){
jQuery('#up').click(function(){
jQuery("html, body").animate({ scrollTop: 0 }, 1000);
return false;
});
});

jQuery(document).ready(function(){
jQuery('.mobile_top_menu').click(function(){
jQuery(this).toggleClass('click');
jQuery('.top_menu .moduletable_menu').fadeToggle('slow');
});
});

jQuery(document).ready(function(){
jQuery('.close, #overlay').click(function() {
jQuery('.popup_booking, .popup_review').fadeOut(300);
jQuery('body').removeClass('hidden-scroll');
jQuery('.control-groups').removeClass('visible');
jQuery('#overlay').fadeOut(300);
});
});

(function(jQuery){var inviewObjects={},viewportSize,viewportOffset,d=document,w=window,documentElement=d.documentElement,expando=jQuery.expando,timer;jQuery.event.special.inview={add:function(data){inviewObjects[data.guid+"-"+this[expando]]={data:data,jQueryelement:jQuery(this)};if(!timer&&!jQuery.isEmptyObject(inviewObjects)){timer=setInterval(checkInView,250)}},remove:function(data){try{delete inviewObjects[data.guid+"-"+this[expando]]}catch(e){}if(jQuery.isEmptyObject(inviewObjects)){clearInterval(timer);timer=null}}};function getViewportSize(){var mode,domObject,size={height:w.innerHeight,width:w.innerWidth};if(!size.height){mode=d.compatMode;if(mode||!jQuery.support.boxModel){domObject=mode==='CSS1Compat'?documentElement:d.body;size={height:domObject.clientHeight,width:domObject.clientWidth}}}return size}function getViewportOffset(){return{top:w.pageYOffset||documentElement.scrollTop||d.body.scrollTop,left:w.pageXOffset||documentElement.scrollLeft||d.body.scrollLeft}}function checkInView(){var jQueryelements=jQuery(),elementsLength,i=0;jQuery.each(inviewObjects,function(i,inviewObject){var selector=inviewObject.data.selector,jQueryelement=inviewObject.jQueryelement;jQueryelements=jQueryelements.add(selector?jQueryelement.find(selector):jQueryelement)});elementsLength=jQueryelements.length;if(elementsLength){viewportSize=viewportSize||getViewportSize();viewportOffset=viewportOffset||getViewportOffset();for(;i<elementsLength;i++){if(!jQuery.contains(documentElement,jQueryelements[i])){continue}var jQueryelement=jQuery(jQueryelements[i]),elementSize={height:jQueryelement.height(),width:jQueryelement.width()},elementOffset=jQueryelement.offset(),inView=jQueryelement.data('inview'),visiblePartX,visiblePartY,visiblePartsMerged;if(!viewportOffset||!viewportSize){return}if(elementOffset.top+elementSize.height>viewportOffset.top&&elementOffset.top<viewportOffset.top+viewportSize.height&&elementOffset.left+elementSize.width>viewportOffset.left&&elementOffset.left<viewportOffset.left+viewportSize.width){visiblePartX=(viewportOffset.left>elementOffset.left?'right':(viewportOffset.left+viewportSize.width)<(elementOffset.left+elementSize.width)?'left':'both');visiblePartY=(viewportOffset.top>elementOffset.top?'bottom':(viewportOffset.top+viewportSize.height)<(elementOffset.top+elementSize.height)?'top':'both');visiblePartsMerged=visiblePartX+"-"+visiblePartY;if(!inView||inView!==visiblePartsMerged){jQueryelement.data('inview',visiblePartsMerged).trigger('inview',[true,visiblePartX,visiblePartY])}}else if(inView){jQueryelement.data('inview',false).trigger('inview',[false])}}}}jQuery(w).bind("scroll resize scrollstop",function(){viewportSize=viewportOffset=null});if(!documentElement.addEventListener&&documentElement.attachEvent){documentElement.attachEvent("onfocusin",function(){viewportOffset=null})}})(jQuery);

jQuery(document).ready(function() {
jQuery('.fade_one').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
if (isInView) {
var _this=jQuery(this);
setTimeout(function(){ _this.addClass('animated fadeIn') }, 250);
}
});
});
jQuery(document).ready(function() {
jQuery('.fade_two').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
if (isInView) {
var _this=jQuery(this);
setTimeout(function(){ _this.addClass('animated fadeIn') }, 500);
}
});
});
jQuery(document).ready(function() {
jQuery('.fade_three').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
if (isInView) {
var _this=jQuery(this);
setTimeout(function(){ _this.addClass('animated fadeIn') }, 750);
}
});
});
jQuery(document).ready(function() {
jQuery('.fade_four').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
if (isInView) {
var _this=jQuery(this);
setTimeout(function(){ _this.addClass('animated fadeIn') }, 1000);
}
});
});
jQuery(document).ready(function() {
jQuery('.fade_trip').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
if (isInView) {
var _this=jQuery(this);
setTimeout(function(){ _this.addClass('animated fadeIn') }, 500);
}
});
});
jQuery(document).ready(function() {
jQuery('.fade_footer').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
if (isInView) {
var _this=jQuery(this);
setTimeout(function(){ _this.addClass('animated fadeIn') }, 250);
}
});
});

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});