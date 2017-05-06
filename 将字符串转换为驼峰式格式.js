function cssStyle2DomStyle(sName) {
    return sName.replace(/(?!^)\-(\w)(\w+)/g, function(a, b, c,d){
			console.log(a);
			console.log(b);
			console.log(c);
			console.log(d);
            return b.toUpperCase() + c.toLowerCase();
        }).replace(/^\-/, '');
}
function cssStyle2DomStyle(sName) {
	return sName.replace(/\-[a-z]/g,function(a,b){
        return b == 0?a.replace("-",""):a.replace('-','').toUpperCase();
    })
}
cssStyle2DomStyle('font-size');