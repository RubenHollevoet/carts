function apiGetRace(privateAccessToken, callback, errorCallback = null) {
    fetch('api/race/get', {
        method: 'post',
        body:
            JSON.stringify({privateAccessToken: privateAccessToken})
    })
        .then(response => response.json())
        .then(data => {
            callback(data.data);
        })
        .catch(error => {
            if(errorCallback) errorCallback();
        })
}

function apiUpdateRace(race) {
    fetch('api/race/update',{
        method: 'post',
        body:
            JSON.stringify(race)
        ,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error))
}

export {apiGetRace, apiUpdateRace};
