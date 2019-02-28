var app = new Vue({
    el: '#app',
    data: {
        race: {
            name: 'test race 1',
            publicHash: '',
            privateHash: 'private-123'
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
        addStop: function() {
            this.stops.push({
                id: this.stops.length, img: ('https://robohash.org/' + this.stops.length)
            });
            console.log('add stop');
        }
    }
});
