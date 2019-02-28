Vue.component('avatar-item', {
    props: ['data'],
    template: '<span v-on:click="setActive" v-bind:class="classObject" class="img"><img v-bind:src="data.path" alt="" width="120" height="120"></a></span>',
    computed: {
        classObject: function() {
            console.log(this.$root.avatarId === this.data.id);
            return this.$root.avatarId === this.data.id ? 'active' :  '';
        }
    },
    methods: {
        setActive: function() {

            this.$root.avatarId = this.data.id;
            console.log('set status: ', this.$root.avatarId, this.data.id);
        }
    }
});
