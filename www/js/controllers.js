angular.module('starter.controllers', [])

.controller('CharactersCtrl', function() {
    var vm = this;
    vm.list = [
        'George',
        'Elaine',
        'Newman',
        'Jerry'
    ]
    
})

.controller('ArthaCtrl', function($stateParams) {
    var vm = this;
    vm.params = $stateParams;
    
})

.controller('NewCharacterCtrl', function() {

})