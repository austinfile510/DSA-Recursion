function multiSplit(xs, delimiters) {
    if (!delimiters.length) return xs;
    return xs.split(delimiters[0]).map(x => multiSplit(x, delimiters.slice(1)));
  }
  
  data = '02/20/2020';
  res = multiSplit(data, ['/']);
  console.log(res)