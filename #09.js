// https://leetcode.cn/problems/palindrome-number/

var isPalindrome = function(x) {
    const str = String(x);
    let l = 0;
    let r = str.length -1;
    while(l<r) {
        if (str[l] !== str[r]) {
            return false
        }
        l++;
        r--;
    }
    return true;
};

// isPalindrome(12121)
