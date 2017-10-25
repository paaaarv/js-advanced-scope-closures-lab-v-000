

function produceDrivingRange(distance){
  return function(beg, end){
    let first = parseInt(beg)
    let last = parseInt(end);
    let difference = Math.abs(first-last)
    let range = Math.abs(difference - distance)
    if(difference <= distance){
      return `within range by ${range}`
    }
    else{
      return `${range} blocks out of range`
    }
  }
}

function produceTipCalculator(percent){
  return function(total){
    return total * percent
  }

  
}
