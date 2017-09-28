<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>無標題文件</title>
</head>

<body>
<?php
$showcase = array(
    '0' => array(
        'co' => 'WL', 
        'time' => '2017/05 ~ ', 
        'title' => 'web designer', 
        'images' => array('img/wl/wlStar_201710_780x390.jpg', 'img/wl/wlStar_201710_850x450.jpg', 'img/wl/wlStar_201710_300x80.jpg'),
    ), 
    '1' => array(
        'co' => 'YD', 
        'time' => '2017/03 ~ 2017/05', 
        'title' => 'web designer', 
        'images' => array('img/wl/wlStar_201710_780x390.jpg', 'img/wl/wlStar_201710_850x450.jpg', 'img/wl/wlStar_201710_300x80.jpg'),
    ), 
    
);
?>
<ul>
<?php
    if(is_array($showcase)){
        $html = "";
        foreach($showcase as $prod => $show){
            $html .= '<li>'.$show['co'].'<li>'.'\n';
            $html .= '<li>'.$show['time'].'<li>'.'\n';
            $html .= '<li>'.$show['title'].'<li>'.'\n';
            $html .= '<li>'.$show['images'].'<li>'.'\n';
        }
        echo $html;
    }
</body>
</html>