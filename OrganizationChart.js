const directories = [
    {name: 'Zuckerberg', parent: null},
    {name: 'Shroepfer', parent: 'Zuckerberg'},
    {name: 'Bosworth', parent: 'Shroepfer'},
    {name: 'Steve', parent: 'Bosworth'},
    {name: 'Kyle', parent: 'Bosworth'},
    {name: 'Andra', parent: 'Bosworth'},
    {name: 'Zhao', parent: 'Shroepfer'},
    {name: 'Richie', parent: 'Zhao'},
    {name: 'Sofia', parent: 'Zhao'},
    {name: 'Jen', parent: 'Zhao'},
    {name: 'Schrage', parent: 'Zuckerberg'},
    {name: 'VanDyck', parent: 'Schrage'},
    {name: 'Swain', parent: 'Schrage'},
    {name: 'Sabrina', parent: 'VanDyck'},
    {name: 'Michelle', parent: 'VanDyck'},
    {name: 'Josh', parent: 'VanDyck'},
    {name: 'Blanch', parent: 'Swain'},
    {name: 'Tom', parent: 'Swain'},
    {name: 'Joe', parent: 'Swain'},
    {name: 'Sandberg', parent: 'Zuckerberg'},
    {name: 'Goler', parent: 'Sandberg'},
    {name: 'Hernandez', parent: 'Sandberg'},
    {name: 'Mossinac', parent: 'Sandberg'},
    {name: 'Kelley', parent: 'Sandberg'},
    {name: 'Eddie', parent: 'Goler'},
    {name: 'Julie', parent: 'Goler'},
    {name: 'Annie', parent: 'Goler'},
    {name: 'Rowi', parent: 'Hernandez'},
    {name: 'Inga', parent: 'Hernandez'},
    {name: 'Morgan', parent: 'Hernandez'},
    {name: 'Amy', parent: 'Mossinac'},
    {name: 'Chuck', parent: 'Mossinac'},
    {name: 'Vinni', parent: 'Mossinac'},
    {name: 'Eric', parent: 'Kelley'},
    {name: 'Ana', parent: 'Kelley'},
    {name: 'Wes', parent: 'Kelley'}
]

const sortDirectories= function(directories, parent){
    let node = [];
    directories
    .filter(function(d){ return d.parent === parent})
    .forEach(function(d){
      var cd = d;
      cd.child = sortDirectories(directories, d.name);
      return node.push(cd);
    })
    return node;
  }
  
const results = sortDirectories(directories, null);
  JSON.stringify(results, null, ' ');