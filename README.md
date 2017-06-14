# jquery_demo
对jquery代码块的实践demo:<br/>
一、jquery基本方法的操作 <jquery_page>;<br/>
	1、操作show和hide方法  第一个参数是speed，第二个参数是切换效果，第三个参数是回调函数；<br/>
	2、操作toggle方法 让显示元素隐藏，让隐藏元素显示；参数同show和hide方法；<br/>
	3、操作fadeIn和fadeOut方法 淡入淡出效果；参数同show和hide方法；<br/>
	4、操作fadeToggle方法 让显示元素淡出，让隐藏元素淡入；参数同show和hide方法；<br/>
	5、操作fadeTo方法 调整不透明度；第一个参数是speed，第二个参数是不透明度(opacity)，第三个参数是切换效果，第四个参数是回调函数；<br/>
	6、操作slideDown和slideUp方法 参数同show和hide方法；<br/>
	7、操作slideToggle方法 让隐藏元素滑动显示，让显示元素滑动隐藏；参数同show和hide方法；<br/>
二、offsetHeight的应用<div_auto><br/>
	1、运用jquery的offsetHeight方法，让左右div的自适应相同的高度。<br/>
三、获取鼠标的坐标<br/>
	1、获取鼠标在当前屏幕的坐标,X轴坐标是event.screenX,Y轴坐标是event.screenY;参考点是屏幕的左上角;<br/>
	2、获取鼠标在窗口客户区的坐标,X轴坐标是event.clientX,Y轴坐标是event.clientY;参考点是窗口的左上角,Y轴坐标不随body的高度变化;<br/>
	3、获取鼠标在窗口页面中的坐标,X轴坐标是event.pageX,Y轴坐标是event.pageY;参考点是窗口的左上角,Y轴坐标随body的高度变化;<br/>
