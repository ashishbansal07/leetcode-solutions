Array.prototype.last = function() {
    let arr = this;
    if(arr.length) {
        return arr[arr.length-1];
    }else {
        return -1;
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */