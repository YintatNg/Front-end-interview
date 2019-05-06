/**
 * 1.回文
 */
function reverseStrFn(str) {
    return str.split('').reverse().join('');
}
let str11 = reverseStrFn('hello');
//console.log(str11)


/**
 * 2.去掉数组重复的值
 */
function uniqFn(arr) {
    let obj = {};
    let data = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data

}
let arr21 = [1, 13, 24, 11, 11, 14, 1, 2];
let arr22 = uniqFn(arr21);
//console.log(arr22);

/**
 * 3.统计一个字符串出现最多的字母(统计一个字符串各个字母出现的次数)
 */
function maxWordFn(str) {
    if (str.length == 1) {
        return str;
    }
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (!obj[str.charAt(i)]) {
            obj[str.charAt(i)] = 1;
        } else {
            obj[str.charAt(i)] += 1;
        }
    }
    //取出数组的最大值可能是多个
    let arr = [];
    for (let k in obj) {
        if (!arr[obj[k]]) {
            arr[obj[k]] = ''
        }
        arr[obj[k]] += k;
    }
    return arr[arr.length - 1]
}

let maxWord = maxWordFn("wertuet")
//console.log(maxWord)

/**
 * 4.排序算法
 */
//冒泡排序
function sort41(arr) {
    for (let r = 1, len = arr.length; r < len; r++) {
        for (let i = 0; i < len - r; i++) {
            if (arr[i] > arr[i + 1]) {
                let tem = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tem;
            }
        }
    }
    return arr;
}


let arr41 = [1, 5, 3, 2, 4];
let arr42 = sort41(arr41);
//console.log(arr42)

//快速排序
function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let leftArr = [];
    let rightArr = [];
    let q = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] > q) {
            rightArr.push(arr[i]);
        } else {
            leftArr.push(arr[i]);
        }
    }

    return [].concat(quickSort(leftArr), [q], quickSort(rightArr));

}
let arr43 = sort41(arr41);
//console.log(arr43)

/**
 * 5.不借助临时变量，进行两个整数的交换
 */
function change51(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b];
}

let arr51 = change51(1, 2)
//console.log(arr51)

function change52(x, y) {
    x ^= y;
    y ^= x;
    x ^= y;
    return [x, y];
}

let arr52 = change52(1, 2)
//console.log(arr52)

/**
 * 6斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列主要考察递归的调用。
 */
function getFibonacci(n) {
    var fibarr = [];
    var i = 0;
    while (i < n) {
        if (i <= 1) {
            fibarr.push(i);
        } else {
            fibarr.push(fibarr[i - 1] + fibarr[i - 2])
        }
        i++;
    }

    return fibarr;
}

let arr61 = getFibonacci(10)
//console.log(arr61)


/**
 * 7.找出下列正数组的最大差值
 */

function getmax(arr) {

    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
        max = Math.max(max, arr[i])
    }
    return max - min;
}

arr71 = [9, 1, 8, 7, 600];
arr72 = getmax(arr71);
//console.log(arr72)

/**
 * 8.随机生成指定长度的字符串
 */
function strFn(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let tmp = '',
        len = str.length;
    for (i = 0; i < n; i++) {
        tmp += str.charAt(Math.floor(Math.random() * len));
    }
    return tmp;
}

let str81 = strFn(6)
//console.log(str81)
/**
 * 9.实现阶乘
 */
//1. 非递归实现
function factorialize131(num) {
    var result = 1;
    if (num < 0) return -1;
    if (num == 0 || num == 1) return 1;
    while (num > 1)
        result *= num--;
    return result;
}
//2. 递归实现
function factorialize132(num) {
    var result = 1;
    if (num < 0) return -1;
    if (num == 0 || num == 1) return 1;
    if (num > 1) {
        return num * factorialize132(num - 1);
    }
}
//console.log(factorialize131(9))
//console.log(factorialize132(9))


