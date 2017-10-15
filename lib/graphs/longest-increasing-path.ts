export class LongestIncreasingPath {

    private directionLength: number = 4;
    private xDirections: number[] = [0, 0, 1, -1];
    private yDirections: number[] = [1, -1, 0, 0];

    private matrix: number[][];
    
    constructor(
        matrix: number[][]) {

        this.matrix = matrix;
    }

    public calculate(): number {

        if (!this.matrix || this.matrix.length == 0) {
            return 0;
        }

        const rowCount: number = this.matrix.length;
        const colCount: number = this.matrix[0].length;

        const dynamicMatrix: number[][] = [];

        for (let i = 0; i < rowCount; i++) {

            dynamicMatrix.push([colCount]);

            for (let j = 0; j < colCount; j++) {
                dynamicMatrix[i][j] = 0;
            }
        }

        let maxSteps: number = 0;

        for (let i = 0; i < rowCount; i++) {
            for (let j = 0; j < colCount; j++) {
                maxSteps = Math.max(maxSteps, this.calculateSteps(
                    rowCount,
                    colCount,
                    i,
                    j,
                    this.matrix,
                    dynamicMatrix));
            }
        }

        return maxSteps;
    }

    private calculateSteps(
        rowLength: number,
        colLength: number,
        rowNum: number,
        colNum: number,
        matrix: number[][],
        dynamicMatrix: number[][]): number {

        if (dynamicMatrix[rowNum][colNum] > 0) {
            return dynamicMatrix[rowNum][colNum];
        }

        let pathMax: number = 0;

        for (let i = 0; i < this.directionLength; i++) {
            const xPath = this.xDirections[i] + rowNum;
            const yPath = this.yDirections[i] + colNum;

            if (xPath >= 0 && 
                xPath < rowLength && 
                yPath >= 0 && 
                xPath < colLength && 
                matrix[xPath][yPath] > matrix[rowNum][colNum]) {

                pathMax = Math.max(pathMax, this.calculateSteps(
                    rowLength,
                    colLength,
                    xPath,
                    yPath,
                    this.matrix,
                    dynamicMatrix));
            }
        }

        pathMax++;

        dynamicMatrix[rowNum][colNum] = pathMax;

        return pathMax;
    }
}