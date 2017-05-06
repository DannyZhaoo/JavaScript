function rgb2hex(sRGB) {
	var regexp = /rgb\((\d+)\s*\,\s*(\d+)\s*\,\s*(\d+)\)$/;
	var ret = sRGB.match(regexp);
	if(!ret){
		return sRGB;
	}else{
		var str ="#";
		for(var i=1; i<4;i++){
			var m=parseInt(ret[i]);
			if(m<=255&&m>=0){
				str += (m<16?"0"+m.toString(16):m.toString(16));
			}else{
				return sRGB;
			}

		}
		return str;
	}
}