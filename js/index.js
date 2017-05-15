$(document).ready(function(){
    $('.btn-close').click(function(e){
        e.stopPropagation();
        $(this).parent().toggle();
    });
    $('.caseIntro>li').on('click', function(e){
        e.stopPropagation();
        alert('click');
        var i = $(this).index();
        var _inner = $('.caseInner>li');
        _inner.eq(i).show();
        $(this).parent('ul').addClass('bg-blur');
        $('body').addClass('body-fixed');
        $('.btn-close').on('click', function(e){
            e.stopPropagation();
            $('body').removeClass('body-fixed');
            $('body').find('.bg-blur').removeClass('bg-blur');
        });
        $('.nav a').on('click', function(){
            $('.nav a').removeClass('active');
            $(this).addClass('active');
        })
    });
    if(/mobile/i.test(navigator.userAgent)){
        var _navH = $('.nav').height() + $('.nav').innerHeight();
        $('.inner').scrollTop(_navH);
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