(function(){
	'use strict';
	angular.module('rps')
		.controller('RpsPlayController',RpsPlayController);

		RpsPlayController.$inject = ['$scope', '$timeout'];

		function RpsPlayController($scope, $timeout) {

			var vm = this;

			vm.AiChoice;
			vm.result;
			vm.playBtn = "Play";
			vm.aiSelection;
			vm.playerSelection;
			vm.playing = false;
			vm.showScore = false;

			// object containing player defaults
			// would like to have made player an input so users can put their name. Something for V1.1
			
			vm.players = {
				p1: {
					name: "Player 1",
					score: 0
				},
				p2: {
					name: "Hal",
					score: 0
				}
			};

			vm.startGame = function() {
				vm.showScore = false;
				vm.playing = true;

			}
			vm.endGame = function() {
				vm.checkResults();
				vm.playing = false;
				vm.playBtn = "Play Again";
				vm.showScore = true;
			}

			vm.checkResults = function() {
				// 0 = rock
				// 1 = paper
				// 2 = scissors

				vm.userChoice = parseInt(vm.userChoice);
				vm.AiChoice = Math.round(Math.random() * (2 - 0) - 0);
				if(vm.userChoice != vm.AiChoice) {
					// this code is incredibly un-DRY and verbose but need a bit more time to figure out a better way of doing the comparison of the user and computer values.

					if((vm.userChoice === 1 && vm.AiChoice === 0)|| (vm.userChoice === 0 && vm.AiChoice === 2) || (vm.userChoice === 2 && vm.AiChoice === 1)) {
						vm.result = vm.players.p1.name + " wins!";
						vm.players.p1.score ++;
					}
					else if ((vm.userChoice === 0 && vm.AiChoice === 1)|| (vm.userChoice === 2 && vm.AiChoice === 0) || (vm.userChoice === 1 && vm.AiChoice === 2)) {
						vm.result = vm.players.p2.name + " wins!";;
						vm.players.p2.score ++;
					}
				} else {

					vm.result = "You drew!";

				};
				vm.playerSelection = vm.userChoice;
				vm.aiSelection = vm.AiChoice;

			};

		}
}())