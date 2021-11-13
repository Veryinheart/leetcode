//leetcode #1

var twoSum = function(nums, target) {  
    var map = {}; 
    for(let i=0; i<nums.length; i++){
        let m = target-nums[i];
        // if(map[m] !== undefined){
        //     return [map[m],i]  
        // }
        if(map.has(m)){
            return [map[m],i]  
        }
        map[nums[i]]=i;   
    }
};

twoSum([2,7,11,15],9);

/*这里创建一个 空的map 来存放 数组的 值和下标。
第一次运行，此时 i=0, num[i]=2, m=7，map[m] = undefined, 则 map[2]=0 , 此时的map 是 [[2,0]]
第二次循环，此时 i=1, num[i]=7, m=2, map[2] = 0, 执行if里的语句， 直接返回 map[m], i  即 [0,1]

如果 num 是 [0,1,2,7,11,15]

那么第一次 是 i = 0, num[i] = 0, m = 9, 9 不在 map里面，所以 第一次循环结束时  map是 [[9,0]]
第二次    i=1，num[i]= 1，m = 8, 8 也不在 map里面，map 是  [[9,0],[8,1]]
第三次    i=2, num[2] = 2, m = 7, 7 也不在map里， 之后 map是[[9,0],[8,1],[2,2]]
第四次    i=3, num[3] = 7, m = 2, 2此时在 map里面， 此时 直接返回 [map[2],i] 即 [ 2，3 ]

*/

/*

Map 是一组键值对的结构，具有极快的查找速度.
初始化Map需要一个二维数组，或者直接初始化一个空Map  
var m = new Map(); 
var m = {};
*/