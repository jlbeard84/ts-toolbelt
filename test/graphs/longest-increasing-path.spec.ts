import { expect } from "chai";
import "mocha";

import { LongestIncreasingPath } from "../../lib";

describe("Longest Increasing Path", () => {
    it("should find the longest increasing path", () => {

        const expectedCount: number = 4

        const testArray: number[][] = [
            [9,9,4],
            [6,6,8],
            [2,1,1]
        ];

        const path = new LongestIncreasingPath(testArray);

        const resultCount = path.calculate();

        expect(resultCount).to.equal(expectedCount);
    });
});