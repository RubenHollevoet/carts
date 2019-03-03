import { apiGetRace, apiUpdateRace } from "../apiCalls";
import { storageCreateOrUpdateRace } from "../helpers";

var app = new Vue({
    el: '#app',
    data: {
        race: {
            name: '',
            publicAccessToken: '',
            privateAccessToken: ''
        },
        participants: [
            { id: 0, status: 'ready', name: 'Ruben', avatar: 4 },
            { id: 1, status: 'ready', name: 'Eva', avatar: 1 },
            { id: 2, status: 'ready', name: 'Draakjesfan!!', avatar: 5 },
            { id: 3, status: 'awaiting', name: 'Intracto', avatar: 0 },
            { id: 4, status: 'ready', name: 'Boeckmans', avatar: 1 },
            { id: 5, status: 'awaiting', name: 'GloekGloek', avatar: 0 }
        ],
        stops: [
            { id: 0, img: 'https://robohash.org/0' },
            { id: 1, img: 'https://robohash.org/1' },
            { id: 2, img: 'https://robohash.org/2' },
        ],
        userData: {
            avatarId: 0
        }
    },
    methods: {
        saveContent: function() {
            console.log('saveContent');
            document.querySelector('.footer-overlay').classList.add('open');

            console.log(this.race);

            apiUpdateRace({privateAccessToken: this.race.privateAccessToken, name: this.race.name});
            storageCreateOrUpdateRace(this.race);
        },
        addStop: function() {
            this.stops.push({
                id: this.stops.length, img: ('https://robohash.org/' + this.stops.length)
            });
            console.log('add stop');
        },
    },
    mounted: function() {

        const urlParams = new URLSearchParams(window.location.search);
        const privateAccessToken = urlParams.get('t');


        self = this;
        apiGetRace(privateAccessToken, function(race) {
            console.log(self.race, race);
            Object.assign(self.race, race);
            console.log(self.race);
        });

    }
});
