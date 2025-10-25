/*
 * Running log book
 * ================
 *
 * Features:
 * 1. Add new runs
 * 2. View a list of all runs
 * 3. View summary statistics about runs
 */

// Initial data
var runs = [
    { date: "2025-10-18", distance: 5.0, duration: 30 }, // km, minutes
    { date: "2025-10-20", distance: 8.0, duration: 45 },
    { date: "2025-10-21", distance: 10.5, duration: 88 },
];

function formatMinutes(minutes) {
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

// Helper function: display all runs
function showRuns() {
    console.log("Runner's Log:");
    for (var i = 0; i < runs.length; i++) {
        console.log(
            `${runs[i].date} -> ${runs[i].distance} km in ${formatMinutes(
                runs[i].duration
            )}`
        );
    }
    console.log("-------------------------------------------------\n");
}

// Add a new run
function addRun(date, distance, duration) {
    runs.push({ date, distance, duration });
    console.log(
        `Added new run: ${distance} km in ${duration} min on ${date}\n`
    );
}

// Calculate total distance
function getTotalDistance() {
    let total = 0;
    for (var i = 0; i < runs.length; i++) {
        total += runs[i].distance;
    }
    return total;
}

// Calculate average pace (min/km)
function getAveragePace() {
    var totalDistance = 0;
    var totalDuration = 0;
    for (var run of runs) {
        totalDistance += run.distance;
        totalDuration += run.duration;
    }
    return totalDuration / totalDistance;
}

// Find longest run
function getLongestRun() {
    let longest = runs[0];
    for (var run of runs) {
        if (run.distance > longest.distance) {
            longest = run;
        }
    }
    return longest;
}

// Summary display
function showSummary() {
    var totalDistance = getTotalDistance();
    var avgPace = getAveragePace();
    var longest = getLongestRun();

    console.log("Summary:");
    console.log(`Total distance: ${totalDistance.toFixed(1)} km`);
    console.log(`Average pace: ${avgPace.toFixed(2)} min/km`);
    console.log(`Longest run: ${longest.distance} km on ${longest.date}`);
    console.log("=================================================\n");
}

showRuns();
showSummary();

addRun("2025-10-22", 6.5, 35);

showRuns();
showSummary();
