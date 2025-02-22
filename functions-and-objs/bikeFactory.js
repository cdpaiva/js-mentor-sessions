const bikeFactory = (function createBikeFactory() {
    let nextId = 0;

    function getId() {
        nextId++;
        return nextId;
    }

    return {
        brand: "Cool Bikes",
        bikes: [],
        createBike(type) {
            const newBike = {
                id: getId(),
                type: type,
                distance: 0,
                brand: this.brand,
            };
            this.bikes.push(newBike);
            return newBike;
        },
    };
})();

const cyclist = {
    bike: {},
    log: [],
    rideBike: function (place, distance) {
        this.log.push({ place, distance });
        this.bike.distance += distance;
    },
};

function createReport(prop) {
    let total = 0;
    for (let entry of this.log) {
        total += entry[prop];
    }

    console.log(`${prop}: ${total}`);
}

function main() {
    const bike = bikeFactory.createBike("trail");

    cyclist.bike = bike;
    cyclist.rideBike("Trail", 10);
    cyclist.rideBike("Endurance", 40);

    let report = createReport.bind(cyclist, "distance");

    report();
}
