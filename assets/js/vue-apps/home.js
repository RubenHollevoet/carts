var app = new Vue({
    el: '#app',
    methods: {
      createRace: function () {
          fetch('api/race/create')
              .then(response => response.json())
              .then(data => {
                  console.log(data) // Prints result from `response.json()` in getRequest
                  //todo
              })
              .catch(error => console.error(error))
      }
    },
    data: {
        adminRaces: [
            {
                name: 'test race 1',
                publicHash: '',
                privateHash: 'private-123'
            },
            {
                name: 'test race 2',
                publicHash: 'public-123',
                privateHash: ''
            }
        ]
    },
    mounted: function() {
        console.log('mounted - fetch races form locale storage');
    }
});
