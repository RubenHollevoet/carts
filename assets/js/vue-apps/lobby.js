var app = new Vue({
    el: '#app-home',
    methods: {
      createRace: function () {
          console.log('todo: create race');
      }
    },
    data: {
        participants: [
            { id: 0, status: 'ready', name: 'Ruben', avatar: 4 },
            { id: 1, status: 'ready', name: 'Eva', avatar: 1 },
            { id: 2, status: 'ready', name: 'Draakjesfan!!', avatar: 5 },
            { id: 3, status: 'awaiting', name: 'Intracto', avatar: 0 },
            { id: 4, status: 'ready', name: 'Boeckmans', avatar: 1 },
            { id: 5, status: 'awaiting', name: 'GloekGloek', avatar: 0 }
        ],
        avatars: [
            { id: 0, path: 'https://robohash.org/0' },
            { id: 1, path: 'https://robohash.org/1' },
            { id: 2, path: 'https://robohash.org/2' },
            { id: 3, path: 'https://robohash.org/3' },
            { id: 4, path: 'https://robohash.org/4' },
            { id: 5, path: 'https://robohash.org/5' },
            { id: 6, path: 'https://robohash.org/6' },
            { id: 7, path: 'https://robohash.org/7' },
            { id: 8, path: 'https://robohash.org/8' },
            { id: 9, path: 'https://robohash.org/9' },
            { id: 10, path: 'https://robohash.org/10' },
            { id: 11, path: 'https://robohash.org/11' }
        ],
        userData: {
            avatarId: 0
        }
    },
    mounted: function() {
        console.log('mounted');
    }
});
