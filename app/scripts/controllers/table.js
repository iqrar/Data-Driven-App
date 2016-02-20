angular.module('dataApp').controller('TableCtrl', AngularWayChangeDataCtrl);

function AngularWayChangeDataCtrl($scope,Notification,DTOptionsBuilder, DTColumnDefBuilder,$location,$window,$http ) {
   // getting data from data file.
   $http.get('data.json').then(function(result){
      $scope.companies = result.data;
   },
   function(result){
       alert(result.status);
   });
  
 // form filed creation to Add info
$scope.postDataForm = function(){
   $scope.record2Add = 
  
   {
    "_id": "",
    "name": "IC58f466a3-dbff-4ae4-91a5-216000abeb4f",
    "address": {
      "street": "",
      "number": "",
      "city": "",
      "zip": ""
    },
    "people": [
      {
        "firstname": "",
        "lastname": "",
        "home": {
          "street": "",
          "number": "",
          "city": "",
          "zip": ""
        },
        "roles": [
          {
            "name": "",
            "description": ""
          }
        ]
      }
    ],
    "types": [
         
        {
        
        "category": "",
        "name": ""
        }
     
     ]
  };
};
/* record to add */
 // Adding more people fields
 $scope.addMorePeople = function(index){
     $scope.record2Add.people.push(  {
        "firstname": "",
        "lastname": "",
        "home": {
          "street": "",
          "number": "",
          "city": "",
          "zip": ""
        },
        "roles": [
          {
            "name": "",
            "description": ""
          }
        ]
      });
  };
  $scope.removeMorePeople = function(index){
      $scope.record2Add.people.splice(0,1);
  };
 
  // Adding more role fields
  $scope.addMoreRoles = function(index){
     $scope.record2Add.people[index].roles.push({});
  };
  $scope.removeMoreRoles = function(index){
     $scope.record2Add.people[index].roles.splice(0,1);
  };

  // Adding more type fields
  $scope.addMoreTypes = function(){
    $scope.record2Add.types.push({});
  };
  $scope.removeMoreTypes = function(){
      $scope.record2Add.types.splice(0,1);
  };
  /* record to add ended */

  /* record to Edit */
  // Editing more people fields
  $scope.editMorePeople = function(index){
     $scope.record2Edit.people.push(  {
        "firstname": "",
        "lastname": "",
        "home": {
          "street": "",
          "number": "",
          "city": "",
          "zip": ""
        },
        "roles": [
          {
            "name": "",
            "description": ""
          }
        ]
      });

  };
  $scope.removeEMorePeople = function(index){
      $scope.record2Edit.people.splice(0,1);
  };
 
  // Editing more role fields
  $scope.editMoreRoles = function(index){
     $scope.record2Edit.people[index].roles.push({});
  };
  $scope.removeEMoreRoles = function(index){
     $scope.record2Edit.people[index].roles.splice(0,1);
  };

  // Adding more type fields
  $scope.editMoreTypes = function(){
     $scope.record2Edit.types.push({});
  };
  $scope.removeEMoreTypes = function(){
      $scope.record2Edit.types.splice(0,1);
  };
  /* record to edit ended */

  // getting object and create update form
  $scope.editDataForm = function(index){
      $scope.editId = index;
      $scope.record2Edit =  $scope.companies[index];
  };

   //Company Coulmn table 
    $scope.dtOptionsAddress = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    $scope.dtColumnDefsAddress = [
        DTColumnDefBuilder.newColumnDef(0).notSortable(),
        DTColumnDefBuilder.newColumnDef(1).notSortable(),
        DTColumnDefBuilder.newColumnDef(2).notSortable(),
        DTColumnDefBuilder.newColumnDef(3).notSortable(),
        DTColumnDefBuilder.newColumnDef(4).notSortable(),
        DTColumnDefBuilder.newColumnDef(5).notSortable()
    ];

    //People Coulmn table 
    $scope.dtOptionsPeople = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    $scope.dtColumnDefsPeople = [
        DTColumnDefBuilder.newColumnDef(0).notSortable(),
        DTColumnDefBuilder.newColumnDef(1).notSortable(),
        DTColumnDefBuilder.newColumnDef(2).notSortable(),
        DTColumnDefBuilder.newColumnDef(3).notSortable(),
        DTColumnDefBuilder.newColumnDef(4).notSortable(),
        DTColumnDefBuilder.newColumnDef(5).notSortable(),
        DTColumnDefBuilder.newColumnDef(6).notSortable()
    ];

    //Type Coulmn table 
    $scope.dtOptionsType = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    $scope.dtColumnDefsType = [
        DTColumnDefBuilder.newColumnDef(0).notSortable(),
        DTColumnDefBuilder.newColumnDef(1).notSortable(),
        DTColumnDefBuilder.newColumnDef(2).notSortable(),

    ];

    //Role Coulmn table 
    $scope.dtOptionsRol = DTOptionsBuilder.newOptions().withPaginationType('full_numbers');
    $scope.dtColumnDefsRol = [
        DTColumnDefBuilder.newColumnDef(0).notSortable(),
        DTColumnDefBuilder.newColumnDef(1).notSortable(),
        DTColumnDefBuilder.newColumnDef(2).notSortable()

     ];
    $scope.add = function add() {
        $scope.companies.push(angular.copy($scope.record2Add));
        Notification.success({message: 'Record  created' , delay: 3000});
        //$window.location.reload();
    };

    $scope.modify = function modify() {
       $scope.companies.splice($scope.editId, 1, angular.copy($scope.record2Edit));
        Notification.success({message: 'Record  name modified' , delay: 3000});
   
    };
    $scope.remove = function remove() {
         $scope.companies.splice($scope.whichindex, 1);
         Notification.success({message: 'Record  name deleted' , delay: 3000});
         // reload page after deletion 
         //$window.location.reload();
    };

  // getting id, fname, lname etc from edit button and use id in bootsrap modal form update
    $scope.remove2GetId =  function remove2GetId(index, fname, lname) {
         $scope.whichindex = index;
         $scope.fname = fname;
         $scope.lname = lname;
    };

  // Error Notifications of each modal

    $scope.addModalError = function(){
        Notification.error({message: 'Record creation failed' , delay: 3000});
    };
    $scope.removeModalError = function(){
        Notification.error({message: 'Record removal failed' , delay: 3000});
    };
   $scope.modifyModalError = function(){
        Notification.error({message: 'Record modification failed' , delay: 3000});
    };
   // fade in table
   $scope.fadeTable = function(){
        $('.fadeIn').fadeIn(2000);
    };
   $scope.fadeTable();
}












