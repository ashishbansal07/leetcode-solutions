
var TimeLimitedCache = function() {
    this.map = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
    let flag = false;
    if(this.map[key] && (new Date().getTime() - new Date(this.map[key]['time']).getTime()) < this.map[key]['duration']) {
        flag = true;
    }
    this.map[key]= {
        value,
        time: new Date(),
        duration
    }
    
    return flag;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.map[key] && (new Date().getTime() - new Date(this.map[key]['time']).getTime()) < this.map[key]['duration']) {
        return this.map[key]['value'];
    }else {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let result = 0;
    for(var key in this.map) {
        if(new Date().getTime() - new Date(this.map[key]['time']).getTime() < this.map[key]['duration']){
            result ++;
        }
    }
    return result;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */