function tri(n){
    if(n <= 1){
      return n
    } else {
      return n + tri(n-1)
    }
  }
  
  tri(6)