var app = angular.module("myApp",[]);
app.controller('loaderController', function($scope){
    $scope.register = false;
    date1 = new Date("August 30, 2017 00:00:02");
    date2 = new Date();
    $scope.count = moment(date1).diff(moment(date2), 'days');
    
    
    
    $scope.openRegistrationPopUp = function(){
        $scope.register=true;
        $("body").addClass("stop-scrolling");
    }
    
    $scope.closeRegistrationPopUp = function(){
        $scope.register=false;
        $("body").removeClass("stop-scrolling");
    }
    var pageNum = 1;
    $scope.page = function(num){
        if(num == pageNum)
            return true;
        else
            return false;
    }
    $scope.nextPage = function(){
        if(pageNum == 5){
            pageNum = 1;
        }
        else
            pageNum++;
    }
    $scope.prevPage = function(){
        if(pageNum == 1){
            pageNum = 5;
        }
        else
            pageNum--;
    }
});