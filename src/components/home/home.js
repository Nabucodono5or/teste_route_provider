import angular from 'angular';
import homeComponent from './home.component';

let homeModule = angular.module('homeModule', [])
    .component()
    .name;

export default homeModule
