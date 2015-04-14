angular.module('ionicDemoTabs.controllers', [])

    .controller('CssCtrl', function ($scope) {
    })

    .controller('JsComponentsCtrl', function ($scope, $ionicActionSheet, $ionicLoading, $ionicModal, $ionicPopup, $ionicPopover) {
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
                    console.log(index);

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

        $ionicModal.fromTemplateUrl('templates/js-samples/modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });
        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Warning',
                template: 'This action is dangerous!!!'
            });
            alertPopup.then(function (res) {
                console.log(res);
            });
        };

        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Please confirm',
                template: 'Are you sure you want to continue?'
            });
            confirmPopup.then(function(res) {
                if(res) {
                    console.log('You are sure');
                } else {
                    console.log('You are not sure');
                }
            });
        };

        $scope.showPopup = function() {
            $scope.data = {};

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="password" ng-model="data.wifi">',
                title: 'Enter Wi-Fi Password',
                subTitle: 'Please use normal things',
                scope: $scope,
                buttons: [
                    { text: 'Cancel' },
                    {
                        text: '<b>Save</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if (!$scope.data.wifi) {
                                //don't allow the user to close unless he enters wifi password
                                e.preventDefault();
                            } else {
                                //noinspection JSUnresolvedVariable
                                return $scope.data.wifi;
                            }
                        }
                    }
                ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
            $timeout(function() {
                myPopup.close(); //close the popup after 3 seconds for some reason
            }, 3000);
        };

        $ionicPopover.fromTemplateUrl('templates/js-samples/popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });

        $scope.showPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };

    })

    .controller('EventCtrl', function ($scope, $cordovaDevice, $ionicPlatform) {
        $ionicPlatform.ready(function () {
            try{
                $scope.device = $cordovaDevice.getDevice();
            } catch (error) {
                console.error(error);
            }
        });

    })
    .controller('ListCtrl', function ($scope) {
        $scope.data = {
            showDelete: false
        };

        $scope.edit = function(item) {
            alert('Edit Item: ' + item.id);
        };
        $scope.share = function(item) {
            alert('Share Item: ' + item.id);
        };

        $scope.moveItem = function(item, fromIndex, toIndex) {
            $scope.items.splice(fromIndex, 1);
            $scope.items.splice(toIndex, 0, item);
        };

        $scope.onItemDelete = function(item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };

        $scope.items = [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 },
            { id: 10 },
            { id: 11 },
            { id: 12 },
            { id: 13 },
            { id: 14 },
            { id: 15 },
            { id: 16 },
            { id: 17 },
            { id: 18 },
            { id: 19 },
            { id: 20 }
        ];

    });
