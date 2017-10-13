import { expect } from "chai";
import "mocha";

import { QuickSort } from "../../lib";

describe("Quick Sort", () => {
    it("should sort an array", () => {

        const testArray = [8, 3, 2, 9, 7, 4, 10, 5, 6, 1];

        const quickSort = new QuickSort(testArray);

        quickSort.sort();

        let priorNum = -1;

        expect(testArray[0]).to.equal(1);

        for (let i = 0; i < testArray.length; i++){
            expect(testArray[i]).to.greaterThan(priorNum);
            priorNum = testArray[i];
        }
        
        expect(testArray[testArray.length - 1]).to.equal(10);
    });
});