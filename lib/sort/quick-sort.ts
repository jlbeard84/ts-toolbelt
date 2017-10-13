export class QuickSort {

    private sortArray: Array<number> = [];

    constructor(unsortedArray: Array<number>) {
        this.sortArray = unsortedArray;
    }

    public sort(): Array<number> {

        if (!this.sortArray) {
            this.sortArray = [];
            return this.sortArray;
        } else if (this.sortArray.length < 2) {
            return this.sortArray;
        }

        this.runSort(
            this.sortArray, 
            0, 
            this.sortArray.length -1);

        return this.sortArray;
    }

    private runSort(
        array: Array<number>, 
        lowIndex: number, 
        highIndex: number) {

        if (lowIndex < highIndex) {
            const partitionIndex = this.partitionArray(
                array,
                lowIndex,
                highIndex);

            this.runSort(array, lowIndex, partitionIndex - 1);
            this.runSort(array, partitionIndex + 1, highIndex);
        }
    }

    private partitionArray(
        array: Array<number>, 
        lowIndex: number, 
        highIndex: number): number {

        const pivot = array[highIndex];

        let tempIndex = (lowIndex - 1);

        for (let i = lowIndex; i < highIndex; i++) {
            if (array[i] < pivot) {
                tempIndex++;

                const tempNum = array[tempIndex];
                array[tempIndex] = array[i];
                array[i] = tempNum;
            }
        }

        const tempNum = array[tempIndex + 1];
        array[tempIndex + 1] = array[highIndex];
        array[highIndex] = tempNum;

        return tempIndex + 1;
    }
}