const countSheep = function (sheep) {
   if (sheep === 0) {
       console.log('All sheep have jumped over the fence.')
   } else {
        console.log(sheep + ': Another sheep jumps over the fence.');
        let sheepLeft = sheep - 1;
        countSheep(sheepLeft);
    } 
    
	
};

console.log(countSheep(3));
