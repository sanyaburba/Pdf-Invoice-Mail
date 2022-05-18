export function sumWorks(worksList:object) {
    let sum = 0;
    for (let price of Object.values(worksList)) {
        sum += price;
    }

    return sum;
}
