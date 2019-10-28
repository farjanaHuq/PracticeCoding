//Assume you have a method isSubstring which checks if one word is a substring of another Given two strings, s1 and s2, 
//write code to check if s2 is a rotation of s1 using only one call to isSubstring (i e , “waterbottle” is a rotation of “erbottlewat”)

function isSubstring(s1, s2) {

    const str1Map = buildCharMap(s1);
    const str2Map = buildCharMap(s2);

    if (Object.keys(str1Map).length !== Object.keys(str2Map).length) {
        return false;
    }

    for (let char in str1Map) {
        if (str1Map[char] !== str2Map[char]) {
            return false;
        }
    }
    return true;

}

function buildCharMap(str) {
    let strMap = {};

    for (let char of str) {
        if (strMap[char]) {
            strMap[char]++;
        } else {
            strMap[char] = 1;
        }
    }

    for (let elem in strMap) {
        if (strMap[elem] > 1) {
            strMap[elem]++;
        }
    }

    return strMap;
}

console.log(isSubstring('waterbottle', 'erbottlewat'));

console.log('9' === 9);