Vue.component('participant-item', {
    props: [
        'participant'
    ],
    template: '<li v-bind:class="classObject">{{ participant.name }}</li>',
    computed: {
        classObject: function () {
            return this.participant.status;
        }
    }
});
