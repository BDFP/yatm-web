import Vue from 'vue';
import Router from 'vue-router';

import CardList from '../components/CardList';
import CardDetail from '../components/CardDetail';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CardList',
            component: CardList,
        },
        {
            path: '/project/:id',
            name: 'card-detail',
            component: CardDetail,
        },
    ],
});
