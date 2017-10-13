import { expect } from "chai";
import "mocha";

import { Dfs2DBooleanFiller } from "../../lib";

describe("Dfs 2D Boolean Filler", () => {
    it("should fill a 2d boolean array", () => {

        const expectedCount: number = 36

        const testArray: boolean[][] = [
            [false, false, false], [false, false, false], [false, false, false], [false, false, false],
            [false, false, false], [false, false, false], [false, false, false], [false, false, false],
            [false, false, false], [false, false, false], [false, false, false], [false, false, false]];

        const filler = new Dfs2DBooleanFiller(testArray);

        const resultCount = filler.fillCells();

        expect(resultCount).to.equal(expectedCount);

        for (let i = 0; i < testArray.length; i++) {
            for (let j = 0; j < testArray[i].length; j++) {
                expect(testArray[i][j]).to.true;
            }
        }
    });
});