var app = angular.module('myTraato' , []);

  app.controller('MyController', function ($scope) {
            
            $scope.IsHiddenPayment = true;
            $scope.IsHiddenRange = true;
            $scope.IsHiddenCuisine = true;
            $scope.IsHiddenDiscount = true;
            $scope.IsHiddenOrderPlacing = true;
            $scope.IsHiddenHealthProduct= true;
            $scope.IsHiddenDeliveryCharge= true;
            $scope.IsHiddenHouseHold = true;
            $scope.IsHiddenOthers  = true;
            $scope.isSelectedpayment = false;
            $scope.isSelectedRange = false;
            $scope.isSelectedCuisine = false;
            $scope.isSelectedDiscount = false;
            $scope.isSelectedOrderPlacing = false;
            $scope.isSelectedHealthProduct = false;
            $scope.isSelectedHouseHold = false;
            $scope.isSelectedDeliveryCharge = false;
            $scope.isSelectedOthers = false;

                $scope.ShowHidePayments = function () {
                $scope.IsHiddenPayment = $scope.IsHiddenPayment ? false : true;
                $scope.isSelectedpayment = !$scope.isSelectedpayment;
            }

                $scope.ShowHideRanges = function () {
                $scope.IsHiddenRange = $scope.IsHiddenRange ? false : true;
                $scope.isSelectedRange = !$scope.isSelectedRange;
            }

                $scope.ShowHideCuisines = function () {
                $scope.IsHiddenCuisine =  $scope.IsHiddenCuisine ? false : true;
                 $scope.isSelectedCuisine = !$scope.isSelectedCuisine;
            }


                $scope.ShowHideDiscounts = function () {
                $scope.IsHiddenDiscount =  $scope.IsHiddenDiscount ? false : true;
                $scope.isSelectedDiscount = !$scope.isSelectedDiscount;
            }


                $scope.ShowHideOrderplacing = function () {
                $scope.IsHiddenOrderPlacing =  $scope.IsHiddenOrderPlacing ? false : true;
                 $scope.isSelectedOrderPlacing = !$scope.isSelectedOrderPlacing;
            }


                $scope.ShowHideHealthProduct = function () {
                $scope.IsHiddenHealthProduct =  $scope.IsHiddenHealthProduct ? false : true;
                 $scope.isSelectedHealthProduct = !$scope.isSelectedHealthProduct;
            }
            

                $scope.ShowHideDeliveryCharge = function () {
                $scope.IsHiddenDeliveryCharge =  $scope.IsHiddenDeliveryCharge ? false : true;
                $scope.isSelectedDeliveryCharge = !$scope.isSelectedDeliveryCharge;
           
            }


              $scope.ShowHideHouseHold = function () {
                $scope.IsHiddenHouseHold =  $scope.IsHiddenHouseHold ? false : true;
                $scope.isSelectedHouseHold = !$scope.isSelectedHouseHold;
            }

              $scope.ShowHideOthers = function () {
                $scope.IsHiddenOthers =  $scope.IsHiddenOthers  ? false : true;
                $scope.isSelectedOthers = !$scope.isSelectedOthers;
              }

            var jsonPayment = {
        "payments" :[
        {option:'Net Banking',url:'img/desktop-net.png', id:1},
        {option:'Debit Card',url:'img/debit-card.png',id:2},
        {option:'Credit Card', url:'img/credit-card-1.png',id:3 },
        {option:'Sodehxo',url:'img/sodexo-icons.png',id:4},
        {option:'Paytm',url:'img/paytm-wallet.png' ,id:5},
        {option:'Ticket Restaurent',url:'img/ticket-restaurent.png',id:6},
        {option:'Wallet', url:'img/net-wallet.png',id:7},
        ]
  };
  console.log('asit')
  $scope.ocww = jsonPayment;
  
            var jsonPriceRange = {
        "priceranges" :[
        {range:'1000', url:'img/dollar_coin.png',id:1},
        {range:'1500', url:'img/dollar_coin.png',id:2},
        {range:'2000', url:'img/dollar_coin.png',id:3},
        {range:'2500', url:'img/dollar_coin.png',id:4},
        {range:'3000', url:'img/dollar_coin.png',id:5},
        {range:'3500', url:'img/dollar_coin.png',id:6},
        ]
  };

       console.log('asit')
       $scope.ocw = jsonPriceRange;


       var jsonCuisine = {
        "cuisines" :[
        {name:'Italian', url:'img/italinfood.png', id:1},
        {name:'Maxican', url:'img/maxicon.png', id:2},
        {name:'Chinese', url:'img/chinesefood.png', id:3},
        
        ]
  };
  console.log('asit')
  $scope.ocwww = jsonCuisine;


       var jsonDiscount = {
        "discounts" :[
        {range:'0-5%', url:'img/discount.ico', id:1},
        {range:'5-10%', url:'img/discount.ico',id:2},
        {range:'10-15%', url:'img/discount.ico', id:3},
        {range:'15-20%', url:'img/discount.ico',id:4},
        ]
  };
  console.log('asit')
  $scope.ocwwww = jsonDiscount;

   var jsonOrderPlacing = {
        "orderplacings" :[
        {through:'Website',  url:'img/desktopcircle.png' , id:1},
        {through:'App', url:'img/mbl.png',id:2},
        {through:'Whatsapp',  url:'img/whtsapp1.ico',id:3},
        {through:'Telephone', url:'img/telephone.png',id:4},
        ]
    };
  console.log('asit')
  $scope.ocwwwww = jsonOrderPlacing;

        var jsonHealthproduct = {
        "healthproducts" :[
        {item:'Ayurvedic', url:'img/Ayur.png',id:1},
        {item:'Glutenfree',url:'img/glutenfree.png',id:2},
        {item:'Farmfresh',url:'img/frmfresh.ico',id:3},
        {item:'Orgainic',url:'img/organic.png',aid:4},
        ]
  };
  console.log('asit')
  $scope.call = jsonHealthproduct;

     var jsonDeliveryCharge = {
        "delivercharges" :[
        {condition:'Nil',id:1},
        {condition:'Free above 250',id:2},
        {condition:'Free above 500',id:3},
        {condition:'Free above 1000',id:4},
        ]
  };
  console.log('asit')
  $scope.calll = jsonDeliveryCharge;

     var jsonHouseHold = {
        "households" :[
        {item:'Lighting & Electricals',  url:'img/icon_lightbulb.png', id:1},
        {item:'Party/Birthday Stuff', url:'img/Food-Birthday-Cake-icon.png' , id:2},
        {item:'Puja Items', url:'img/puja.png' , id:3},
        {item:'Stationery Items',  url:'img/stationery.png' ,id:4},
        {item:'Utensils', url:'img/utensils.png' , id:5},
        ]
  };
  console.log('asit')
  $scope.callll = jsonHouseHold;

   var jsonOthers = {
        "others" :[
        {item:'Bakery',  url:'img/bakery.png', id:1},
        {item:'Meat', url:'img/meat.png' , id:2},
        {item:'Sweets', url:'img/sweets.png' , id:3},
       
        ]
  };
  console.log('asit')
  $scope.cals = jsonOthers;
          

          $scope.deals = [{
               gname:"BigBasket", url:"img/grocerlogo/bb.jpg", pin:"560029,560025,560026,560061,560063,560071,560066,560079,560012,560013,560014,560088,560090,560068,560067", paymentMode:"Cash On Delivery, NetBanking, DebitCard, CreditCard,InternetBanking,Sodexo"
             },
             {
               gname:"Peppertap", url:"img/grocerlogo/peppertap.jpg" ,pin:"560008,560025,560026,560061,560066,560079,560012,560013,560014,560088,560090,560068,560067", paymentMode:"Cash on Delivery, NetBanking,"
             },
             {
               gname:"Zopnow", url:"img/grocerlogo/zopnow.jpg" ,pin:"560005,560025,560026,560061,560079,560012,560013,560014,560088,560090,560068,560067", paymentMode:"Cash on Delivery, NetBanking, CreditCard, DebitCard,online, CashCard"
             },
             {
               gname:"Grofers", url:"img/grocerlogo/grofers.jpg",pin:"560009,560063,560071,560066,560079,560012,560013,560014,560088,560090,560068,560067", paymentMode:"Cas on Delivery , NetBanking, CreditCard, DebitCard"
             },
             {
               gname:"Ur DoorStep", url:"img/grocerlogo/urd.png", pin:"560008, 560029, 560030, 560034, 560035, 560037, 560038, 560066, 560068, 560071, 560075, 560076, 560078, 560083, 560087, 560095, 560099, 560100, 560102, 560103, 562107",paymentMode:"Cash on Delivery, NetBanking, DebitCard, CreditCard, Paytm, Sodexo, PayU"
             },
             {
               gname:"iRely", url:"img/grocerlogo/irely.jpg" ,pin:"560008,560025,560026,560061,560066,560079,560012,560013,560014,560088,560090,560068,560067",paymentMode:"Cash on Delivery,DebitCard, CreditCard, Sodexo"
             },
             {
               gname:"LocoStop", url:"img/grocerlogo/locostop.jpg" ,pin:"560005,560025,560026,560061,560079,560012,560013,560014,560088,560090,560068,560067", paymentMode:"cash on Delivery, "
             },
             {
               gname:"Sangam Direct", url:"img/grocerlogo/sangamdirect.png",pin:"560009,560063,560071,560066,560079,560012,560013,560014,560088,560090,560068,560067"
             },
           
           
             
          ]  

        });