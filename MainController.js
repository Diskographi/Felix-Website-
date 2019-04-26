app.controller('MainController', ['$scope', function($scope) {
  $scope.characters = [{
    picture: "./felix.jpg",
    name: "Felix",
    age: 24,
    height: "6\'1\"",
    weight: 265,
    eyes: "Hazel",
    sign: "Gemini",
    blood: "A-",
    sexuality: "Bi / Pan",
    hobbies: "Singing, guitar, origami, languages"
  }, {
    picture: "./elif.jpg",
    name: "Elif",
    age: 23,
    height: "5\'10\"",
    weight: 125,
    eyes: "Blue",
    sign: "Tauros",
    blood: "O",
    sexuality: "Not a priority!",
    hobbies: "Singing, knitting, fishing, soccer"
  },
     {
      name: "Wang",
      age: 25,
      height: "6\'4\"",
      weight: 160,
      eyes: "Brown",
      sign: "Vertigo",
      blood: "AB",
      sexuality: "Straight",
      hobbies: "Finance, women, gambling, drums"
     }];
}]);