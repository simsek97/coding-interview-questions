/**
 * This function finds and returns a two-dimensional array with values corresponding to the distance
 * to the nearest locker given a city size and locker locations.
 *
 * @param {number} citySize
 * @param {Array} lockerLocations
 * @return {Array}
 */
function nearestLocker(citySize, lockerLocations) {
  // Initialize the result with maximum distances
  const result = new Array(citySize).fill(null).map(() => new Array(citySize).fill(citySize * 2));

  // Set directions for up, down, left, and right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];

  // Helper function to perform BFS (Breadth-First Search) for a given location
  function bfs(lockerX, lockerY) {
    // Keep a record of visited locations
    const visited = new Array(citySize).fill(null).map(() => new Array(citySize).fill(false));

    // A queue for locker locations with distance
    const queue = [{ x: lockerX, y: lockerY, distance: 0 }];

    while (queue.length > 0) {
      // Get the first element from queue
      const { x, y, distance } = queue.shift();

      //
      if (x >= 0 && x < citySize && y >= 0 && y < citySize && !visited[x][y]) {
        visited[x][y] = true;
        result[x][y] = Math.min(result[x][y], distance);

        for (const [dx, dy] of directions) {
          queue.push({ x: x + dx, y: y + dy, distance: distance + 1 });
        }
      }
    }
  }

  // Perform BFS for each locker location
  for (const [lockerX, lockerY] of lockerLocations) {
    bfs(lockerX, lockerY);
  }

  return result;
}

// Test case
const citySize = 5;
const lockerLocations = [
  [0, 0],
  [2, 2],
  [4, 4]
];
const result = nearestLocker(citySize, lockerLocations);

for (const row of result) {
  console.log(row.join(' '));
}
