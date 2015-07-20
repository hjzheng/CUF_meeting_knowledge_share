import angular from './fix-angular-bootstrap';

import router from './router';
import alertDemoCtrl from './alert.demo.controller';
import buttonsDemoCtrl from './buttons.demo.controller';

angular.module('es6.with.angular', ['ui.bootstrap', 'ui.router'])
          .config(router)
          .controller("alertDemoCtrl", alertDemoCtrl)
          .controller("buttonsDemoCtrl", buttonsDemoCtrl);

