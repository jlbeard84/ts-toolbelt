import { GraphNode } from "./graph-node.class";

export class Dfs2DBooleanFiller {
    
    private boolArray: boolean[][];
    private totalCount: number = 0;
    private xLength: number;
    private yLength: number;

    constructor(boolArray: boolean[][]) {
        this.boolArray = boolArray;

        this.xLength = this.boolArray.length;
        this.yLength = this.boolArray[0].length;
    }

    public fillCells(x: number = 0, y: number = 0): number {

        let result: number = 0;

        const stack: GraphNode[] = [];
        stack.push(new GraphNode(x, y))

        while (stack.length > 0) {
            const topNode = stack.pop();

            if (topNode.x < 0 || topNode.x >= this.xLength || topNode.y < 0 || topNode.y >= this.yLength || this.boolArray[topNode.x][topNode.y] == true)  {
                continue;
            }
            
            this.boolArray[topNode.x][topNode.y] = true;
            result++;

            stack.push(new GraphNode(topNode.x + 1, topNode.y))
            stack.push(new GraphNode(topNode.x - 1, topNode.y))
            stack.push(new GraphNode(topNode.x, topNode.y + 1))
            stack.push(new GraphNode(topNode.x, topNode.y - 1))
        }

        return result;
    }
}