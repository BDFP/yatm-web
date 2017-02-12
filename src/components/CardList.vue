<template>
    <div class="columns is-multiline is-desktop card_List">
        <card 
            class="column is-one-quarter" 
            v-for="project in projects" 
            :data="project"> 
        </card>
        <input type="text"
            name="project"
            v-model="projectName"
            @keyup.enter="doneProject" 
            placeholder="Enter project name">
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import card from './Card';

    export default {
        name: 'CardList',
        data() {
            return {
                projectName: '',
            };
        },
        computed: mapGetters({
            projects: 'getProjects',
        }),
        components: { card },
        methods: {
            ...mapMutations(['addProject']),
            doneProject(e) {
                const value = e.target.value.trim();
                this.addProject(value);
            },
        },
    };
</script>

<style>
    .card_List{
        margin-left: -0.0rem;
        margin-right: -0.0rem;
        margin-top: -0.0rem;
    }
    .card_list{
        font-size: 100%;
    }
</style>
