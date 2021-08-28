var oModul = angular.module('oModul', ['ngRoute']);

oModul.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'predlosci/naslovna.html',
        controller: 'naslovnicaKontroler'
    });
    $routeProvider.when('/taskovi', {
        templateUrl: 'predlosci/taskovi.html',
        controller: 'taskKontroler'
    });
    $routeProvider.when('/trgovina', {
        templateUrl: 'predlosci/trgovina.html',
        controller: 'trgovinaKontroler'
    });
    $routeProvider.otherwise({
        template:'Došlo je do pogreške'
    });
});

oModul.controller('naslovnicaKontroler', function ($scope) {
    $scope.pozdravnaPoruka = "Nalazimo se na naslovnoj stranici.";
});

oModul.controller('taskKontroler', function ($scope) {
    $scope.noviZadatak = "";
    $scope.oZadaci = 
    [
        {
            id: 1,
            name: 'Proučiti predložak'
        },
        {
            id: 2,
            name: 'Položiti blic'
        },
        {
            id: 3,
            name: 'Riješiti obavezne zadatke'
        }
    ];
    $scope.AddTask = function(){
        $scope.oZadaci.push({
            id:$scope.oZadaci.length+1,
            name: $scope.noviZadatak
        })
    };
    $scope.DeleteTask = function(globalObj){
        $scope.oZadaci.splice($scope.oZadaci.indexOf(globalObj.zadatak), 1);
    };
});

oModul.controller('trgovinaKontroler', function ($scope) {
    $scope.kosarica = [];
    $scope.qunatity;
    $scope.oProizvodi = [
        {
            ime: "Jaja",
            cijena: 10,
            kolicina: 100
        },
        {
            ime: "Riba",
            cijena: 20,
            kolicina: 40
        },
        {
            ime: "Laptop",
            cijena: 8000,
            kolicina: 15
        },
        {
            ime: "Slusalice",
            cijena: 200,
            kolicina: 23
        }
    ]
    $scope.AddToBasket = function(globalObj){
        $scope.kosarica.push({
            k_ime:globalObj.proizvod.ime,
            k_cijena:globalObj.proizvod.cijena,
            max: globalObj.proizvod.kolicina,
            k_kolicina: 0
        })
    }
    $scope.price = function(){
        var ukupnaCijena = 0;
        $scope.kosarica.forEach(function(element){
             ukupnaCijena += Number(element.k_cijena) * Number(element.k_kolicina);
        })
        $scope.ukupnaCijena = ukupnaCijena;
    }
});
   