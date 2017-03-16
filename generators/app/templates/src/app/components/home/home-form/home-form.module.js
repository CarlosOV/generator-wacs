import angular from 'angular';
import HomeFormComponent from './home-form.component';
import './home-form.scss';


const HomeFormModule = angular
    .module('home.form', [
    ])
    .component('homeForm', HomeFormComponent)
    .name;

export default HomeFormModule;
