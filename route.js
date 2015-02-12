/* Global Routes */

var Router = Backbone.Router.extend({
  routes: {
    "login": "login", // login page
    "logout": "logout", // logout and redirect to login page
    "dashboard": "dashboard", // dashboard for data entry panel

    "outsource/agent" : "outsource_agent", // the Restaurant Index Page for Data entry agents
    "outsource/head" : "outsource_head", // the Restaurant Index Page for Data entry agents

    "restaurants" : "restaurants", // The Restaurant Index Page for Production restaurants
    "outsource/new(/)": "outsource_new", // create new restaurant

    "restaurants/new": "new_restaurant", // the Restaurant Edit Profile
    "restaurants/new/virtual": "new_virtual_restaurant", // the Restaurant Edit Profile
    "restaurants/deleted": "deleted", // view/ restore all deleted restaurants
    "restaurants/invisible": "invisible", // view/ restore all invisible restaurants
    "restaurants/virtual": "virtual", // view/ restore all virtual restaurants
    "promotions": "promotions", // view/ restore all  promotions
    "promotions/new": "promotion", // add new promotion
    "promotions/edit/:id": "promotion", // update new promotion
    "promotions/get_items": "promotion", // get items in case of DISH type promotion
    "restaurants/:id/copy": "copy_restaurant", // copy the restaurant
    "restaurants/:id/profile": "edit_profile", // the Restaurant Edit Profile
    "restaurants/:id/deliveryArea": "delivery_area", // editing the delivery area
    'restaurant/:id/map_preview' : "map_preview",
    "restaurants/:id/office_document": "office_document", // editing the address
    "restaurants/:id/timings": "timing", // editing the timings,
    "restaurants/:id/menu": "menu", // editing the menu,
    "restaurants/:id/update_status": "update_status", // updating/ scheduling status change
    "restaurants/:id/account_details": "account_details", // editing the account details of restaurant
    "restaurants/:id/miscellaneous": "miscellaneous", // miscellaneous details
    "restaurants/:id/point_of_sale": "point_of_sale", // miscellaneous details
    "restaurants/:id/status_logs": "status_logs", // status logs
    "restaurants/:id/documents": "documents", // upload logo and documents
    "restaurants/:id/change_logs": "change_logs",// change logs for restaurants
    "restaurants/:id/logs": "get_logs",// get logs for restaurant

    "restaurants/:id/fulfilment": "fulfilment", //get limit_of_orders and status message
    "restaurants/:id/campaign_tags":"campaign_tags", //get campaign tags and update

    "restaurant/bulk_update" : "bulk_update", //update status in bulk

    "faqs": "faqs", // FAQs page
    "401": "401", // FAQs page
    "alerts": "alerts", // alerts displayed on top of the page
    "changepassword": "change_password", //change password
    "editprofile":"edit_user_profile", // edit user profile
    
    "restaurants/:id/choices": "choices", // editing the choices and choice options
    "restaurants/:id/items": "items", // editing the items, sizes and prices
    
    "restaurants/tags":"tags", //creating tagging
    'restaurants/tagging':'tagging',
   
    "menu_timeline/:id/spell_check":"spell_check",
    "menu_timeline/:id/dish_type_tags":"items_dish_type",
    "menu_timeline/:id/item_tags":"tagging",
    "menu_timeline/:id/categorization": "menu_categorization",
    
    "dish_type_tags": "dish_type_tags",
    "dish_type_tags/new": "dish_type_tag",
    "dish_type_tags/edit/:id": "dish_type_tag",

    "diff/:id1/:id2":"get_diff",

    "restaurantposition":"absolute_position",
    "position" : "position",

    "settings":"settings", //edit settings
    "dishes" : "dishes", // dish items 
    "dishes/:id" : "dish", // dish items 
    "android-releases" : "android-releases", // view all android releases
    "android-releases/new" : "android-release", // add a new android release
    "android-releases/edit/:id" : "android-release", // update a new android release
    "ios-releases" : "ios-releases", // view all ios releases
    "ios-releases/new" : "ios-release", // add a new ios release
    "ios-releases/edit/:id" : "ios-release", // add a new ios release

    "restaurant-closing-reason":"restaurant_closing_reason",
    'restaurant/multiple-del-areas': 'restaurant_multiple_delivery_areas', 
    
    'restaurant/search-delivery-areas': "search_delivery_areas", 


    ".*": "login",
    "*actions": "not_found"
  },
  execute: function(callback, args) {
    args.push(parseQueryString(args.pop()));
    if (callback) callback.apply(this, args);
  },
  initialize: function (){
      // setup the html5 push navigation
      //$("body").on("click","a:not(a[data-bypass])",function(e){
        // block the default link behavior
        //e.preventDefault();
        // take the href of the link clicked
        /*var href = $(this).attr("href");  // or $(this).prop("hash")
        // pass this link to Backbone
        Backbone.history.navigate(href,true);*/
        //H.start_loading();
      //});
  },
 before:  function(route){
    if(window.current_view != undefined)
      window.current_view.cleanup();

    if(!user.logged_in() && route != 'login' && route != 'faqs') {
      //window.localStorage.setItem('redirect_hash', window.location.hash);
      router.navigate("login", {trigger : true});
      return false;
    }
    else{
      if (route != 'login' && route != 'faqs' && route != 'dashboard') {
        if(typeof profile_collection_flag =='undefined'){
          window.collections = get_collections();
          profile_collection_flag = 1 // updating the global collections object
        }
      }
      return true;
    }

  },
  
  after: function(route){
    // dirthy fix for the URL until completely migrated to Backbone pushState
    if (window.location.hash != "#restaurants") {
      //window.location.search = "";
      history.pushState(window.location.hash, "no_filters", window.location.origin+window.location.pathname+window.location.hash);
    }
  }

});
