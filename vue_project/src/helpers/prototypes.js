String.prototype.format = function() {
    var str = this;
    var key = "%s";
    var index = str.indexOf(key);
    var i = 0;
    var args = arguments;
    if(index > -1){
        while(index > -1) {
            if((args[i] === undefined)){
                str = str.substring(0,index) +
                    '{undefined}' +
                    str.substring(index + key.length);
                //console.error('".format" method was waiting a none undefined parameter');
            }else
                str = str.substring(0,index) +
                    args[i].toString() +
                    str.substring(index + key.length);

            index = str.indexOf(key);
            i++;
        }
    } else {
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match;
        });
    }
    return str;
};

Error.prototype.log = function(e) {
    //console.log('%c%s', 'color: red; font-size: 24px;', e)
}

var jsonParse = function() {
    var str = this;
    try{
        return JSON.parse(str);
    }catch (e) {
        //(new Error()).log(e);        
    }

    return null;
};

String.prototype.formatNumber = function() {
    var str = this;
    return str.replace(/\d(?=(\d{3})+\.)/g, '$&,');
} 

Date.prototype.format = function() {
    var str_date = this;
    var day = str_date.getDate();
    var month = str_date.getMonth() + 1;
    var year = str_date.getFullYear();
    return  year + "-" + month + "-" + day;
}

String.prototype.toJSON = jsonParse;

Object.clone = function (object) {
    return JSON.parse(JSON.stringify(object));
}

Number.prototype.format = function() {
    var value = this;
    if(!value) return '0.00';
    
    let val = (value/1).toFixed(2).replace(',', '1')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")    
}