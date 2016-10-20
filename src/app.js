import angular from 'angular';
class MyCtrl {
    constructor(){
        this.info = "Hello!";
    }
}
class OtherCtrl {
    constructor() {
        this.info = "Other Ctrl!";
    }
}
angular.module("myApp", ['otherModule'])
    .controller("MyCtrl", MyCtrl);
angular.module("otherModule", [])
    .controller("OtherCtrl", OtherCtrl);

