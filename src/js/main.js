function isPC() {
	var system ={
	    win : false,
	    mac : false,
	    xll : false
	    };
	    var p = navigator.platform;
        system.win = p.indexOf("Win") == 0;
	    system.mac = p.indexOf("Mac") == 0;
		system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
		return system.win || system.mac || system.x11;
}

function changeActive(array,index) {
	for(var i=0;i<aSpan.length;i++) {
		array[i].className = "";
	}
	array[index].className = "active";
}