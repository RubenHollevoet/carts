import { apiGetRace } from '../apiCalls';
import { storageCreateOrUpdateRace, storageGetAllRaces } from '../helpers';

var app = new Vue({
    el: '#app',
    methods: {
        createRace: function () {
            fetch('api/race/create')
                .then(response => response.json())
                .then(data => {
                    if(data.status === 'ok') {
                        storageCreateOrUpdateRace(data.data);
                        window.location.href = '/admin?t=' + data.data.privateAccessToken;
                    }
                })
                .catch(error => console.error(error))
        },
        checkAdminCode: function () {
            console.log(this.adminCodeField);

            apiGetRace(this.adminCodeField, function (race) {
               storageCreateOrUpdateRace(race);

            }, function (data) {
               //todo: trigger error message
            });
        }
    },
    data: {
        adminRaces: [],
        adminCodeField: ''
    },
    mounted: function() {
        const self = this;
        this.adminRaces = storageGetAllRaces();
    }
});
