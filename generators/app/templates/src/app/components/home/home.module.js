import angular from 'angular';
import uiRouter from 'angular-ui-router';
import HomeComponent from './home.component';
import HomeFormModule from './home-form/home-form.module';
import './home.scss';


const HomeModule = angular
    .module('home', [
        uiRouter,
        HomeFormModule
    ])
    .component('home', HomeComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('home', {
            url: '/',
            component: 'home'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;

export default HomeModule;
