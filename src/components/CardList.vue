<template>
    <div class="columns is-multiline is-desktop card_List">
        <card 
            class="column is-one-quarter" 
            v-for="project in projects" 
            :data="project"> 
        </card>
    </div>
</template>

<script>
    import card from './Card';

    const projects = [
        {
            name: 'Project 1',
            completed: 4,
            total: 10,
            id: 1,
        },
        {
            name: 'Project 2',
            completed: 4,
            total: 10,
            id: 2,
        },
        {
            name: 'Project 3',
            completed: 4,
            total: 10,
            id: 3,
        },
        {
            name: 'Project 4',
            completed: 4,
            total: 10,
            id: 4,
        },
        {
            name: 'Project 5',
            completed: 4,
            total: 10,
            id: 5,
        },
        {
            name: 'Project 6',
            completed: 4,
            total: 10,
            id: 6,
        },
        {
            name: 'Project 4',
            completed: 4,
            total: 10,
            id: 4,
        },
        {
            name: 'Project 5',
            completed: 4,
            total: 10,
            id: 5,
        },
        {
            name: 'Project 6',
            completed: 4,
            total: 10,
            id: 6,
        },
    ];

    export default {
        name: 'CardList',
        data: function getDataForCardList() {
            return {
                projects,
            };
        },
        components: { card },
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
