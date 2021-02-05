const MazeSolver = function (maze) {

    function walk(column, row) {
        if(maze[column][row] == 2) {
            console.log("We solved the maze at (" + column + ", " + row + ")");
        } else if(maze[column][row] == 1) {
            console.log("At valid position (" + column + ", " + row + ")");
            maze[column][row] = 9;
            if(column < maze.length - 1) {
                walk(column + 1, row);
            }
            if(row < maze[column].length - 1) {
                walk(column, row + 1);
            }
            if(column > 0) {
                walk(column - 1, row);
            }
            if(row > 0) {
                walk(column, row - 1);
            }
        }
    };
    walk(3,0);

};

MazeSolver(maze);

