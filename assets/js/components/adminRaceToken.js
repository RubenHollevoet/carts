import {timeDifference, storageRemoveRace, storageGetAllRaces} from '../helpers';

Vue.component('admin-race-token-item', {
    props: ['race'],
    template: `<div class="admin-race-token">
        <span v-if="race.name" class="name">{{race.name}}</span>
        <span v-else class="name">[naamloos]</span>
        <span class="time">{{ timeAgo }} <span v-if="race.privateAccessToken">aangemaakt</span><span v-else>toegevoegd</span></span>
        <div class="actions">
            <span v-if="race.privateAccessToken" class="btn orange" @click="loadRace">beheren</span>
            <span v-if="race.publicAccessToken" class="btn green" @click="loadRace">openen</span>
            <span @click="close" class="close btn red fa fa-trash"></span>
        </div>
    </div>`,
    computed: {
        timeAgo: function() {

            var date = new Date();
            const currentTimestamp = date.getTime();

            return timeDifference(currentTimestamp, this.race.createdAt * 1000);
        }
    },
    methods: {
        loadRace: function() {
            window.location.href = '/admin?t=' + this.race.privateAccessToken;
        },
        close: function () {
            storageRemoveRace(this.race.publicAccessToken);
            this.$root.adminRaces = storageGetAllRaces();
        }
    }
});
