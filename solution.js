// arr = array of numbers
function major(arr)
{
    var obj = {};
    
    for(var i = 0; i < arr.length; i++){
        obj[arr[i]] = obj[arr[i]] + 1 || 1;
        if(obj[arr[i]] > arr.length / 2)  return arr[i];
    }
    
 }
module.exports=major;
