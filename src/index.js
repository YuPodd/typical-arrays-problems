exports.min = function min(array) {
    if (array !== undefined && array !== null && array.length > 0) {
        array.sort((a, b) => a - b);
        let minValue = array[0];
        return minValue;
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array !== undefined && array !== null && array.length > 0) {
        array.sort((a, b) => a - b);
        let maxValue = array[array.length - 1];
        return maxValue;
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array !== undefined && array !== null && array.length > 0) {
        let sum = 0;
        let count = 0;
        let average_number = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            count++;
        }
        console.log(sum, count);
        return average_number = sum / count;
    } else {
        return 0;
    }
};
