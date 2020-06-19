/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    //var regexStr1 = '/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g'
    var IPv4_PATTERN = new RegExp("^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\."+
                       "([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\."+
                       "([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\\."+
                       "([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$" );

    var IPv6_PATTERN1 = new RegExp("^((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*::((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4}))*|((?:[0-9A-Fa-f]{1,4}))((?::[0-9A-Fa-f]{1,4})){7}$");
  

    if(IPv4_PATTERN.test(IP)){
         return 'IPv4';
    }else if(IPv6_PATTERN.test(IP)){
        return 'IPv6';
    }else{
        return 'neither';
    }

  
};

console.log(validIPAddress("172.16.254.1"));

console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));



function isIp(ip) {
    var arrIp = ip.split(".");
    if (arrIp.length !== 4) return false;
    for (let oct of arrIp) {
        if ( isNaN(oct) || Number(oct) < 0 || Number(oct) > 255)
            return false;
}
    return true;
}

//console.log(isIp("256.256.256.256"));






