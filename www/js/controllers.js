angular.module('ionicDemoTabs.controllers', [])

    .controller('CssCtrl', function ($scope) {
    })

    .controller('JsComponentsCtrl', function ($scope, $ionicActionSheet, $ionicLoading) {
        $scope.showActionSheet = function () {
            $ionicActionSheet.show({
                buttons: [
                    {text: '<b>Edit</b>'},
                    {text: 'Move'}
                ],
                destructiveText: 'Delete',
                titleText: 'Action Sheet',
                cancelText: 'Cancel',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index) {
                    return true;
                }
            });
        };

        $scope.showLoading = function() {
            $ionicLoading.show({
                template: '<ion-spinner></ion-spinner>',
                duration: 2000
            });
        };

    })

    .controller('EventCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
