//  credit to interview cake

function canTwoMoviesFillFlight(movieLengths, flightLength) {
    const movieLengthSeen = new Set();

    for (let i = 0; i < movieLengths.length; i++) {
        const firstMovieLength = movieLengths[i];
        const secondMovieLength = flightLength - firstMovieLength;
        if ( movieLengthSeen.has(secondMovieLength)) {
            return true;
        }
        movieLengthSeen.add(firstMovieLength);
    }
    return false;
}
