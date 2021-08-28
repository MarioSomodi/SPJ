var oVijestiModul = angular.module('oVijestiModul', []);

oVijestiModul.controller('naslovniKontroler', function ($scope, $http) {
    $scope.oVijesti = [];
    $http({
        method : "GET",
        url: "./vijesti.json"
        }).then(function(response) {
        $scope.oVijesti = response.data;
        console.log($scope.oVijesti);
        },function () {
        console.log('Doslo je do poreške');
    });
    this.otvoriModal = function(sHref){
        $('#modals').removeData('bs.modal');
        $('#modals').modal
        ({
            remote: sHref,
            show: true
        });
    };
    this.dodajVijest = function(){
        var naslov = $scope.noviNaziv;
        var text = $scope.noviTekst;
        var currentdate = new Date(); 
        var datetime = currentdate.getDate() + "."
            + (currentdate.getMonth()+1)  + "." 
            + currentdate.getFullYear();
        var item = {
            "post_id": $scope.index+1,
            "post_naziv": naslov,
            "datum":datetime,
            "post_tekst": text
        }
        
        $scope.oVijesti.push(item);
        console.log(item);
        $http.post('json.php', JSON.stringify($scope.oVijesti));
    }
});

oVijestiModul.directive("prikaziVijestiSve", function () {
    return {
        restrict: "E",
        templateUrl: "templates/vijesti.html"
    };
});

oVijestiModul.filter('formatDate', function () {
    return function(datum){
        var newDate = datum.replace(/-/g,'.');
        return newDate;
    }
});