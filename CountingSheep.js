const countSheep = function (sheep) {
    let sheepLeft = sheep - 1;

    if (sheepLeft > 0) {
        console.log(sheep + ': Another sheep jumps over the fence.');
        countSheep(sheepLeft);
    }
    
	console.log('All sheep have jumped over the fence.')
	
};

console.log(countSheep(3));
