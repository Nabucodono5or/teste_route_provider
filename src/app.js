import angular from 'angular';
import appComponent from './app.component';
import componentModule from './components/component';
import angularRoute from 'angular-route';
import config from './app.config';

angular.module('app', [componentModule, angularRoute])
  .config(config)
  .component('app', appComponent)
  .name;
