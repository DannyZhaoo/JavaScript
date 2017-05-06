function namespace(oNamespace, sPackage) {
	var arr = sPackage.split(".");
	var res = oNamespace;//保留对原始对象的引用
	for (var i = 0,len = arr.length; i < len; i++){
		if(arr[i] in oNamespace){
			if(typeof oNamespace[arr[i]]!=="object"){
				oNamespace[arr[i]] = {};
			}
		}
		else{
			oNamespace[arr[i]] = {};
		}
		oNamespace = oNamespace[arr[i]];
	}  
	return res;
}
namespace({a: {test: 1, b: 2}}, 'a.b.c.d');