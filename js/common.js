 /* .btnHam을 클릭하면,
 .gnb가 right:0 이되는 로직 */
// .css('property','value').css('property','value');
// 'background-color'
/* .css({
    property : 'value',
    property : 'value',
    'background-color' : 'red',
    backgroundColor : 'red'
})

*/
$(function() {
    $('.btnHam').on('click',function() {
        
        // 열기
        $(this).toggleClass('open');
        var state = $(this).hasClass('open');
        
        /*
        if(state) {
            $('.gnb').css({
                 right : 0
            });
            $('.gnbBg').fadeIn();
            console.log('열린상태');
        } else {
            $('.gnb').css({
                right : '-420px'
            });
            $('.gnbBg').fadeOut();
             console.log('닫힌상태');
        }
        */
        if(state) {
            $('.gnb').animate({
                right : 0
            }, 500); 
            $('.gnbBg').fadeIn();
            console.log('열린상태');
        } else {
            $('.gnb').animate({
                right : '-420px'
            }, 300);
            $('.gnbBg').fadeOut();
             console.log('닫힌상태');
        }
       
        
        //닫기
    })
    
    // Contact Us
    
    $('.btnContact').on('click',function() {
        $('.sec03').stop().slideToggle();
    })
    
    
   
    $('.work_box ul li').on('mouseenter',function() {
        $(this).find('dl').fadeIn(300);
    });
    
    $('.work_box ul li').on('mouseleave', function() {
        $('.work_box dl').fadeOut(100);
    });
   /* 
    $('').hover(function() {
        마우스 올렸을떄 로직
    },
    function() {
        마우스 치웠을때 
    })
    */
    
    var $box = $('.apply .box'),
        $list = $box.find('ul'),
        $item = $list.find('li'),
        $in = $('.apple .in');
    
    $box.on('mouseenter',function(){
        $list.stop().slideDown();
    });
    
    $box.on('mouseleave',function(){
        $list.stop().slideUp();
    }) 
    
    // $list의 하위요소 li를 클릭하면
    // 클릭한 li의 텍스트를 추출하여 변수 msg에 저장
    // $box밑에 input의 value값으로 msg 입력시킨다.
    
    /*
    $item.click(function() {
        
    })
    */
    
    
    $item.on('click',function() {
        var msg = $(this).text();
        $box.find('input').val(msg);
    })
    
    // $box.find('input').val('hello'); 
    // $box.find('input').val();
    // $item.eq(0).text('hello'); 입력
    // $item.eq(0).text(); 추출
     
    $('.btnSubmit').click(function(){
        //만약에 지원분야를 선택하지 않으면
        //지원분야에 value  값이 없으면
        //popWrap을 보이지 않는다.
        
        /* 입력한 값을 추출해서 팝업에 정보넣기 */
        var chkName = $('#apply_name').val();
        console.log(chkName);
        var chkNum = $('#apply_tel').val();
        console.log(chkNum);
        var chkMsg = $('#apply_area').val();
        console.log(chkMsg);
        $('.popWrap').find('.P_name').text(chkName);
        $('.popWrap').find('.P_num').text(chkNum);
        $('.popWrap').find('.msg').text(chkMsg);
    
        if(chkName && chkNum && chkMsg){
            $('.popWrap').fadeIn();
        } else {
            return false;
        } 
    }); 
    $('.btnClose').click(function(){
        $('.popWrap').fadeOut();
    }) 

    
    
    
    
    var $item = $('.l_Wrap').find('li'),
        $link = $('.link').find('a');
   
    
    $link.on('click',function() { 
        var $name = $(this).attr('class');
        $('.link li').removeClass('on');
        $(this).parent().addClass('on');
        
        if( $name == 'All' ) {
            $item.stop().fadeIn();
        } else {
            jQuery.each($item, function(i,obj) {        
                if( $name != $(this).attr('class') ) {
                    $(this).stop().slideUp();
                } else {
                    $(this).stop().slideDown();
                }
            })
        }
    });   
    $(".PARADISE .slickWrap").slick({
        infinite: true,
        autoplay:false,
        autoplaySpeed:4000,
        speed:400,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:true
      });
      $(".pageHeader .slickWrap").slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed:4000,
        speed:400,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:true,
        dots:true
      });     
    
})
