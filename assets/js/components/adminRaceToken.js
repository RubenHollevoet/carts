Vue.component('admin-race-token-item', {
    props: ['race'],
    template: '<li v-on:click="loadRace" v-bind:class="classObject" class="admin-race-token"> Race: {{race.name}}</li>',
    computed: {
        classObject: function() {
            return this.race.publicHash === '' ? 'private' :  'public';
        }
    },
    methods: {
        loadRace: function() {
            console.log('todo: load race');
        }
    }
});
