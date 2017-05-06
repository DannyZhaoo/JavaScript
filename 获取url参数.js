function getUrlParam(sUrl, sKey) {
    var reg = RegExp('([0-9a-zA-Z]+)=([0-9a-zA-Z]+)','ig');
    var result={};
    var temp;
   	var key,value;
    while(temp = reg.exec(sUrl)){
    	key = temp[1];
    	value = temp[2];
    	if(result[key]&&!(result[key] instanceof Array)){
    		result[key] = [result[key],value];
    	}else if(result[key]instanceof Array){
    		result[key].push(value);
    	}else{
    		result[key] = value;
    	}
    }
    if(sKey){
    	return result[sKey]?result[sKey]:'';
    }else{
    	return result;
    }
}
getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key');