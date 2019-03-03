function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
        return Math.round(elapsed/1000) + ' seconden geleden';
    }

    else if (elapsed < msPerHour) {
        return Math.round(elapsed/msPerMinute) + ' minuten geleden';
    }

    else if (elapsed < msPerDay ) {
        return Math.round(elapsed/msPerHour ) + ' uren geleden';
    }

    else if (elapsed < msPerMonth) {
        return 'approximately ' + Math.round(elapsed/msPerDay) + ' dagen geleden';
    }

    else if (elapsed < msPerYear) {
        return 'approximately ' + Math.round(elapsed/msPerMonth) + ' maanden geleden';
    }

    else {
        return 'approximately ' + Math.round(elapsed/msPerYear ) + ' jaren geleden';
    }
}

/* LOKAL STORAGE TOKEN MANAGEMENT */
function storageGetRace(publicToken) {
    if(localStorage.getItem('races')) {
        const storageRaces = JSON.parse(localStorage.getItem('races'));

        return storageRaces.find(function(race) {
            return publicToken === race.publicAccessToken;
        });
    }

    console.log('ddddd');
}

function storageGetAllRaces() {
    let races = [];

    if(localStorage.getItem('races')) {
        const storageRaces = JSON.parse(localStorage.getItem('races'));
        storageRaces.forEach(function(race) {
            races.push(race);
        });
    }

    return races;
}

function storageCreateOrUpdateRace(race) {
    if(storageGetRace(race.publicAccessToken)) {
        storageUpdateRace(race);
        console.log('storageUpdateRace', race);
    } else {
        storageCreateRace(race);
        console.log('storageCreateRace', race);
    }
}

function storageRemoveRace(publicToken) {
    let newRaces = [];

    if(localStorage.getItem('races')) {
        const storageRaces = JSON.parse(localStorage.getItem('races'));
        storageRaces.forEach(function(race) {
            if(publicToken !== race.publicAccessToken) {
                newRaces.push(race);
            }
        });
    }

    localStorage.setItem('races', JSON.stringify(newRaces));
}

function storageCreateRace(race) {
    let races = JSON.parse(localStorage.getItem('races'));

    if(races === null) races = [];
    races.push({
        name: race.name,
        publicAccessToken: race.publicAccessToken,
        privateAccessToken: race.privateAccessToken,
        createdAt: race.createdAt
    });

    localStorage.setItem('races', JSON.stringify(races));
}

function storageUpdateRace(raceToUpdate) {
    let updatedRaces = [];

    const storageRaces = JSON.parse(localStorage.getItem('races'));
    storageRaces.forEach(function(race) {
        if(raceToUpdate.publicAccessToken === race.publicAccessToken) {
            // for public race only update name
            race.name = raceToUpdate.name;
        }
        else if (raceToUpdate.privateAccessToken === race.privateAccessToken) {
            // for private race update all parameters
            race = raceToUpdate;
        }

        updatedRaces.push(race);
    });

    localStorage.setItem('races', JSON.stringify(updatedRaces));
}


export { timeDifference, storageCreateOrUpdateRace, storageRemoveRace, storageGetAllRaces };
