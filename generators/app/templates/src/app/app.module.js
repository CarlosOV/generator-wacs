import angular from 'angular';
import uiRouter from 'angular-ui-router';
import  '../../node_modules/angular-ui-notification/dist/angular-ui-notification.min'
import AppComponent from './app.component';
import ComponentsModule from './components/components.module';
import CommonModule from './common/common.module';
import './assets/font/Roboto/Roboto.scss';
import './assets/font/Syncopate/Syncopate.scss';
import './app.scss';

const AppModule = angular
    .module('app', [
      uiRouter,
      'ui-notification',
      ComponentsModule,
      CommonModule
    ])
    .component('app', AppComponent)
    .value('EventEmitter', payload => ({ $event: payload}))
    .name;

export default AppModule;
