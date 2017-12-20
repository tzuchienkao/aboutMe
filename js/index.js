$(document).ready(function(){
    //line notify
    function Auth() {
        var URL = 'https://notify-bot.line.me/oauth/authorize?';
        URL += 'response_type=code';
        URL += '&client_id=	e1r6yrtLUx5Xv0NiMnTZcx';
        URL += '&redirect_uri=https://tzuchienkao.github.io/aboutMe';
        URL += '&scope=notify';
        URL += '&state=abcde';
        window.location.href = URL;
    }
    Auth();
    //line notify end
    //document default
    //區塊定位
    var _minH = $('.header').innerHeight();
    var _contentBox = $('.wrapper').height() - (_minH * 2);
    $('.wrapper').offset({
        top: _minH
    }).css({
        height : _contentBox
    });
    $('.aboutMe, .showcase').css({
        'min-height' : _contentBox
    });
    var url = window.location.toString(); //找url
    var str = "";
    if (url.indexOf("?") != -1) {
        var ary=url.split("?")[1].split("&"); //分割字串
        for (var i in ary){
            str += ary[i].split("=")[1] + "\n"; //參數值
        }
    }
    //預設字串
    if(str == ""){
        str="demo-01"; //預設顯示
    }
    $('#'+str).show().siblings().hide(); //顯示A就隱藏B
    //document default end
    
    $('.btn_link.open').on('click', function(){
        $('.aboutMore').show();
        $('.about, .footer').hide();
    });
    $('.aboutMore .btn-close').on('click', function(){
        $('.aboutMore').hide();
        $('.about, .footer').show();
    });
    
    
    //html
    function liHTML(mainTitle, inner, showText, level, _mainImg){
        return '<li class="main-box flex-v-center '+level+'" data-catalog="'+mainTitle+'" data-subject="'+inner+'"><div class="pic" style="background-image:url('+_mainImg+');"></div><p class="caseTitle taC" data-catalog="'+inner+'">'+showText+'</p></li>';
    }
    //html end
    
    var json_data;
    var url = 'https://tzuchienkao.github.io/aboutMe/';
    //showcase list
    function defaultList(){
        $('.btn_goBack').remove();
        $.ajax({
            url:  url + 'data/showcase.json',
            async: false,
            dataType: 'json', 
            success: function(content){
                json_data = content;
                var num = content.length;
                //catalog
                for(var i=0; i < num; i++){
                    var mainTitle = Object.keys(content[i]);
                    var inner = '';
                    var showText = mainTitle;
                    $('.caseIntro').append(liHTML(i, inner, showText, 'first_level'));
                } //for(var i=0; i < num; i++){
            }
        });
    }
    //showcase list end
    defaultList(); //showcase list
    //subject
    $('.caseIntro').on('click', '.first_level', function(){
        $(window).scrollTop(0);
//              var getHref = $(this).parent().before('<a class="btn_goBack" href="javascript:void(0)">《</a>');
        //get data
        var content = json_data;
        var mainTitle = $(this).attr('data-catalog');//0
        var subCata = $(this).attr('data-subject');
        var _index = $(this).index();
        var _inside = $(this).text();
        for (var y in content[_index]){
            var subject = Object.keys(content[_index][y]);
            $('.caseIntro').empty();
            for (var z in subject){
                var inner = $(this).text();
                var showText = subject[z];
                var cover = content[mainTitle][_inside][showText].minPic;
                var _mainImg = url + cover;
                $('.caseIntro').append(liHTML(mainTitle, inner, showText,'second_level',_mainImg));
            }
        } //for (var y in content[_index]){
        //get data end
        $('.showcase').offset({
            top: _minH
        });
    });//subject end
    //back to first level
    $('body').on('click', '.btn_goBack', function(){
        $('.caseIntro').empty();
        defaultList();
    });
    //back to first level end
    //inner
    $('.caseIntro').on('click', '.second_level', function(){
        var content = json_data;
        var _i = $(this).attr('data-catalog'); //0
        var _j = $(this).attr('data-subject'); //窩克島
        var _inside = $(this).text();
        var subject = content[_i];
        $('.caseInner').show();
        $('body').addClass('body-fixed');
        $('.btn-close').on('click', function(e){
            e.stopPropagation();
            $('body').removeClass('body-fixed');
            $('.caseInner').hide();
        });
        //clear
        $('.main-pic').empty();
        $('.sub-pic').empty();
        $('.mainTitle').empty();
        $('.mainCont').empty();
        //insert content
        var _p = content[_i][_j][_inside];
        var _projectName = _p.title;
        var _projectTime = _p.when;
        var _mainImg = url + _p.cover;
        var _mainTxt = _p.description;
        var _mainTxt_num = _mainTxt.length;
        var _subPic = _p.subPic;
        var _subPic_num = _subPic.length;
        $('.main-pic').append('<img src="' + _mainImg + '" alt="">');
        $('.mainTitle').append(_projectName + '<p class="when">' + _projectTime + '</p>');
        for(var i = 0; i < _mainTxt_num; i++){
            $('.mainCont').append('<li>' + _mainTxt[i] + '</li>');
        }
        for(var j = 0; j < _subPic_num; j++){
            $('.sub-pic').append('<li><img src="' + url + _subPic[j] + '" alt=""></li>');
        }
    });
});
