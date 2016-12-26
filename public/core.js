var app = angular.module('students', []);

app.controller('startController', ['$scope', '$http', '$route', function($scope, $http){
    $scope.users = {};
    $scope.newUser = {};

    $http.get('/api/users')
        .success(function(data){
            $scope.users = data;
            }
        )
        .error(function(mess){
            console.log(mess);
        });

    $scope.deleteUser = function(id){
        $http.delete('/api/user/' + id)
            .success(function(mess){
                if(mess){
                    console.log('Deleted');
                }
            })
    }

    $scope.updateUser = function(user){
        $http.post('/api/user/', user)
            .success(function(mess){
                if(mess){
                    $scope.showUpdate = false;
                    console.log('Updated');
                }
            })
    };

    $scope.saveUser = function(){
        $http.post('/api/new-user/', $scope.newUser)
            .success(function(mess){
                if(mess){
                    console.log('Added');
                }
            })
    }
}]);