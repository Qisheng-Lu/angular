'use strict';
var aMailSevices = angular.module('AMail',[]);
function emailRouteConfig($routeProvider){
	$routeProvider.when("/",{
		controller:ListController,
		templateUrl:"list.html"
	}).when("/view/:id",{
		controller: DetailController,
		templateUrl:"detail.html"
	}).otherwise({
		redirectTo:"/"
	});
};
aMailSevices.config(emailRouteConfig);
var message = [
	{
		id:0,
		sender:"jean@somecompany.com",
		subject:"Hi there, old friend",
		date:"Dec 7, 2013 12:32:00",
		recipients:["greg@somecompany.com"],
		message:"Hey, we should get together for lunch sometime and catch up.There are many things we should collaborate on this year."
	},
	{
		id:1,
		sender:"maria@somecompany.com",
		subject:"Hi there, old friend",
		date:"Dec 7, 2013 12:32:00",
		recipients:["greg@somecompany.com"],
		message:"Hey, we should get together for lunch sometime and catch up.There are many things we should collaborate on this year."
	},
	{
		id:2,
		sender:"bill@somecompany.com",
		subject:"Hi there, old friend",
		date:"Dec 7, 2013 12:32:00",
		recipients:["greg@somecompany.com"],
		message:"Hey, we should get together for lunch sometime and catch up.There are many things we should collaborate on this year."
	}
];
function ListController($scope){
	$scope.message = message;
};
function DetailController($scope,$routeParams){
	$scope.message = message[$routeParams.id];
};