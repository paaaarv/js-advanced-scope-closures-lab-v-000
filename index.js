

function produceDrivingRange(distance){
  return function(beg, end){
    let first = parseInt(beg)
    let last = parseInt(end);
    let difference = Math.abs(first-last)
    if(difference <= distance){
      return `within range by ${difference}`
    }
    else{
      return `${difference} blocks out of range`
    }
    
  }
}
