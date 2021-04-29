function distanceFromHqInBlocks(someValue) {
    let blocks;
    if (someValue > 42) {
        blocks = someValue - 42;
    } else { 
        blocks = 42 - someValue;
    }
    return blocks;
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(val1, val2) {
    return Math.abs(val1 - val2) * 264;
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 400 && feet <= 2000) {
        return 2.56;
    } else if (feet > 2000 && feet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}