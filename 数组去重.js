Array.prototype.uniq = function(){
    var ans = [];
    var hasNaN = false;
    for(var i = 0,len = this.length; i < len; i++){
        if(ans.indexOf(this[i]) == -1){
            if(this[i] != this[i]){
                if(!hasNaN){
                    ans.push(this[i]);
                    hasNaN = true;
                }
            }else{
                ans.push(this[i]);
            }
        }
    }
    return ans;
}