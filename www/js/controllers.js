angular.module('ionicDemoTabs.controllers', [])

    .controller('CssCtrl', function ($scope) {
    })

    .controller('JsComponentsCtrl', function ($scope, $ionicActionSheet) {
        $scope.show = function () {

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

    })

    .controller('EventCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
