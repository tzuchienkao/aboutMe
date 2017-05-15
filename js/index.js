$(document).ready(function(){
    $('.btn-close').click(function(e){
        e.stopPropagation();
        $(this).parent().toggle();
    });
    $('.caseIntro>li').on('tap click', function(){
        var _thisH = $('.header').height();
        var i = $(this).index();
        var _inner = $('.caseInner>li');
        _inner.eq(i).css({
            top: _thisH + 'px', 
            height: $('body').height() - _thisH
        }).show();
        $(this).parent('ul').addClass('bg-blur');
        $('body').addClass('body-fixed');
        $('.btn-close').on('tap click', function(e){
            e.stopPropagation();
            $('body').removeClass('body-fixed');
            $('body').find('.bg-blur').removeClass('bg-blur');
            _inner.eq(i).attr('style','');
        });
    });
    $('.nav a').on('click', function(){
        var _this = $(this);
        var _href = _this.attr('href');
        var _thisH = $('.header').height();
        var _innerH = $(_href).height();
        var _h = $(_href).offset().top - _thisH;
        console.log(_thisH)
        $('html, body').animate({scrollTop:_h});
        $('.nav a').removeClass('active');
        _this.addClass('active');
    });
    if(/mobile/i.test(navigator.userAgent)){
    }else{
		$(document).scroll(function(){
			$url_href = '';
			$('.nav a').each(function(){
    			var _this = $(this);
    			var _href = _this.attr('href');
    			var _thisH = _this.parent().height();
    			var _innerPos = $(_href).position().top - _thisH;
    			var _innerH = $(_href).height();
    			if(_innerPos <= $(document).scrollTop() && _innerPos + _innerH > $(document).scrollTop()){
    				$url_href = _href;
    				$('.nav a').removeClass('active');
    				_this.addClass('active');
    			}else{
    				_this.removeClass('active');
    			}
    		});
    		window.history.pushState({}, 0, 'https://'+window.location.host+location.pathname+$url_href);
		});
		$('.innerIntro').scroll(function(){
			var _navH = $('.nav').height();
			var p = $(this).parent();
			var pos = p.position();
			var _top = pos.top;
			$(document).scrollTop(_top - _navH);
		});
    }
});