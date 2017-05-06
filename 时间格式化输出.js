function formatDate(oDate, sFormation) {
	var obj = {
		yyyy:oDate.getFullYear(),
		yy:("" + oDate.getFullYear()).slice(-2),
		M:oDate.getMonth()+1,
		MM:("0"+(oDate.getMonth()+1)).slice(-2),
		d:oDate.getDate(),
		dd:("0" + oDate.getDate()).slice(-2),
		H:oDate.getHours(),
		HH:("0"+ oDate.getHours()).slice(-2),
		h:oDate.getHours() % 12,
		hh:("0" + (oDate.getHours() % 12)).slice(-2),
		m:oDate.getMinutes(),
		mm:("0"+ oDate.getMinutes()).slice(-2),
		s:oDate.getSeconds(),
		ss:("0" + oDate.getSeconds()).slice(-2),
		w:['日', '一', '二', '三', '四', '五', '六'][oDate.getDay()]
	};
	return sFormation.replace(/([a-z]+)/ig,function($1){return obj[$1]});
}
console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w'));