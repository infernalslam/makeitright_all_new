angular.module('todoApp', [])
  .controller('TodoListController', function($scope, $http) {
    $scope.Math = window.Math;
    $scope.data = [{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    },{
      tel: '0291100xx',
      total_net:400
    }]
    getData()
    function getData() {
      $http.get('http://api.sellsuki.com/makeitright/topten').then(function(res){
        console.log(res.data.results.length)
        $scope.data_top = res.data.results 
        $scope.data_top.sort(function(a, b){
          if (a.total_net > b.total_net) { return -1}
          if (a.total_net < b.total_net) { return 1}
            return 0
        })
         $scope.top = []
      // for (var i = 0 ; $scope.data_top.length < 10; i++) {
      //       console.log($scope.data_top[i])
      //      $  scope.top.push($scope.data_top[i]) 
      //   }
      // })
     
    }
  })