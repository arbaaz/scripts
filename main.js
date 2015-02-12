/*global dataEntryClient, $*/

/* ajax prefilter
  - Sets the Host
  - Sets the session token
*/
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
  //jqXHR.setRequestHeader("key", 'MCwwDQYJKoZIhvcNAQEBBQADGwAwGAIRANTGmel6FJbFAGeae9M70cCAwEAAQ');

  if(window.user != undefined)
    jqXHR.setRequestHeader("session_token", window.user.session_manager.get_session());

  if(!options.skip_url_prefix)
    options.url = '/restaurant/data_entry/' + options.url;

});


/* Global AJAX Error handler */
/*$(document).ajaxError(function(event, jqxhr, settings, exception) {
  H.stop_loading();
  if (jqxhr.status == 400 || jqxhr.status == 401) {
    // backup alert message in case individual alerts don't fire
    //H.generate_alert(false,$.parseJSON(jqxhr.responseText).message);
  } else {
    //var alert = H.generate_alert(false,"Sorry but something went wrong! Please report this, or contact the Admin.");
  }
  return false;
});*/

/* Modifying Backbone router prototype
  - added before and after filter
*/
Backbone.Router.prototype.before = function () {};
Backbone.Router.prototype.after = function () {};

Backbone.Router.prototype.route = function (route, name, callback) {
  if (!_.isRegExp(route)) route = this._routeToRegExp(route);
  if (_.isFunction(name)) {
    callback = name;
    name = '';
  }
  if (!callback) callback = this[name];

  var router = this;

  Backbone.history.route(route, function(fragment) {
    var args = router._extractParameters(route, fragment);

    if(!router.before.apply(router, arguments))
      return;

    callback && callback.apply(router, args);
    router.after.apply(router, arguments);

    router.trigger.apply(router, ['route:' + name].concat(args));
    router.trigger('route', name, args);
    Backbone.history.trigger('route', router, name, args);
  });
  return this;
};

/* Global CRM Object
  - everything (including all models, collections, views)
  are attached to this object
  - Initializes the app and starts
*/
window.dataEntryClient = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  user: {},
  init: function () {
    'use strict';
    console.log('panel started...\n');

    // create the router
    var router = new Router;
    window.router = router;
    var user = new dataEntryClient.Models.UserModel();
    window.user = user;
    window.google_api_key = "AIzaSyCwdpZ7nWe_lgiClkq0C0XvCnTrzbeyuUU";
    window.collections; // = get_collections(); global collections

    // current view - always put the current view in this variable, this variable is used to clean views on route change
    window.current_view = null;

    // var menu = null;

    var header_view = null;
    header_view = new dataEntryClient.Views.HeaderView();
    header_view.render();

    /* Global observer
      Events Handled
      - header reload
    */
    window.global_observer = {};
    _.extend(global_observer, Backbone.Events);

    global_observer.on('header_changed', function(data){
        header_view.render(data);
    });

    //var alerts_view = null;
    //alerts_view = new dataEntryClient.Views.AlertsView();
    //alerts_view.render();
    ////////////////////

    router.on("route:login", function() {
      current_view = new dataEntryClient.Views.LoginView();
    });

    router.on("route:logout", function() {
      $.ajax({
          url: "/user/logout.json",
          type: "POST",
          skip_url_prefix: true,
          async : false,
          success: function(data) {
            window.user.logout();
            window.global_observer.trigger('header_changed');
            window.router.navigate("login", { trigger: true});
          }
        });
    });

    router.on("route:restaurants", function(args) {
      current_view = new dataEntryClient.Views.RestaurantView();
      current_view.render({filters: args});
      if (args != null){
        history.pushState("restaurants?"+args,"restaurants?"+args,"restaurants?"+args);
      }
    });

    router.on("route:update_status", function(id) {
      current_view = new dataEntryClient.Views.UpdateStatusView();
      current_view.render({id: id});
    });

    router.on("route:bulk_update",function(){
      current_view = new dataEntryClient.Views.BulkUpdateView();
      current_view.render();
    });
    
    router.on("route:status_logs", function(id) {
      current_view = new dataEntryClient.Views.StatusLogsView();
      current_view.render({id: id});
    });

    router.on("route:edit_profile", function(id) {
      current_view = new dataEntryClient.Views.RestaurantformView();
      current_view.render({id: id});
    });

    router.on("route:delivery_area", function(id) {
      current_view = new dataEntryClient.Views.DeliveryAreaView();
      current_view.render({id: id});
    });

    router.on("route:office_document", function(id) {
      current_view = new dataEntryClient.Views.OfficeDocumentView();
      current_view.render({id: id});
    });

    router.on("route:timing", function(id) {
      current_view = new dataEntryClient.Views.TimingView();
      current_view.render({id: id});
    });

    router.on("route:account_details", function(id) {
      current_view = new dataEntryClient.Views.AccountDetailsView();
      current_view.render({id: id});
    });

    router.on("route:miscellaneous", function(id) {
      current_view = new dataEntryClient.Views.MiscellaneousView();
      current_view.render({id: id});
    });

    router.on("route:point_of_sale", function(id) {
      current_view = new dataEntryClient.Views.PointOfSaleView({id: id});
      current_view.render();
    });

    router.on("route:documents", function(id) {
      current_view = new dataEntryClient.Views.DocumentsView();
      current_view.render({id: id});
    });

    router.on("route:menu", function(id) {
      current_view = new dataEntryClient.Views.MenuView({restaurant_id: id});
      current_view.render({restaurant_id: id});
    });

    router.on("route:items_dish_type", function(id) {
      current_view = new dataEntryClient.Views.ItemsDishTypeView({restaurant_id: id});
      current_view.render({restaurant_id: id});
    });

    router.on("route:dish_type_tags", function() {
      current_view = new dataEntryClient.Views.DishTypeTagsView();
      current_view.render();
    });

    router.on("route:dish_type_tag", function(id) {
      current_view = new dataEntryClient.Views.DishTypeTagView({id:id});
      current_view.render({id:id});
    });

    router.on("route:outsource_agent", function() {
      current_view = new dataEntryClient.Views.OutsourceAgent();
      current_view.render();
    });

    router.on("route:outsource_head", function() {
      current_view = new dataEntryClient.Views.OutsourceHead();
      current_view.render();
    });

    router.on("route:new_restaurant", function() {
      current_view = new dataEntryClient.Views.NewRestaurantView();
      current_view.render();
    });

    router.on("route:new_virtual_restaurant", function() {
      current_view = new dataEntryClient.Views.NewVirtualRestaurantView();
      current_view.render();
    });

    router.on("route:fulfilment", function(id) {
      current_view = new dataEntryClient.Views.FulfilmentView();
      current_view.render({id: id});
    });

    router.on("route:campaign_tags", function(id) {
      current_view = new dataEntryClient.Views.CampaignTagsView();
      current_view.render({id: id});
    });

    router.on("route:outsource_new", function() {
      current_view = new dataEntryClient.Views.AssignmentFormView();
      current_view.render();
    });

    router.on("route:dashboard", function() {
      current_view = new dataEntryClient.Views.DashboardView();
      current_view.render();
    });

    router.on("route:copy_restaurant", function(id) {
      current_view = new dataEntryClient.Views.CopyRestaurantView({id:id});
      current_view.render({id:id});
    });

    router.on("route:deleted", function(id) {
      current_view = new dataEntryClient.Views.DeletedRestaurantView({id:id});
      current_view.render({id:id});
    });

    router.on("route:invisible", function(id) {
      current_view = new dataEntryClient.Views.InvisibleRestaurantView({id:id});
      current_view.render({id:id});
    });

    router.on("route:virtual", function(id) {
      current_view = new dataEntryClient.Views.VirtualRestaurantView({id:id});
      current_view.render({id:id});
    });

    router.on("route:promotions", function() {
      current_view = new dataEntryClient.Views.PromotionsView();
      current_view.render();
    });

    router.on("route:promotion", function(id) {

      current_view = new dataEntryClient.Views.PromotionView({id:id});
      current_view.render({id:id});
    });

    router.on("route:change_logs", function(id) {
      current_view = new dataEntryClient.Views.ChangeLogsView({id:id});
      current_view.render({id:id});
    });

    router.on("route:get_logs", function(id) {
      current_view = new dataEntryClient.Views.LogsView({id:id});
      current_view.render({id:id});
    });

    router.on("route:faqs", function() {
      current_view = new dataEntryClient.Views.FaqsView();
      current_view.render();
    });

    router.on("route:401", function() {
      current_view = new dataEntryClient.Views.NotAuthorizedView();
      current_view.render();
    });

    router.on("route:not_found", function() {
      current_view = new dataEntryClient.Views.NotFoundView();
      current_view.render();
    });

    router.on("route:change_password", function() {
      current_view = new dataEntryClient.Views.ChangePasswordView();
      current_view.render();
    });

    router.on("route:settings",function(){
      current_view = new dataEntryClient.Views.SettingsView();
      current_view.render();
    });

    router.on("route:edit_user_profile", function() {
      current_view = new dataEntryClient.Views.EditProfileView();
      current_view.render();
    });

    router.on("route:choices", function(id){
      current_view = new dataEntryClient.Views.ChoiceEntryView({restaurant_id: id});
      current_view.render();
    });
    router.on("route:tags", function(){
      current_view = new dataEntryClient.Views.TagsView();
      current_view.render();
    });
     router.on("route:tagging", function(id){
      current_view = new dataEntryClient.Views.TaggingView({restaurant_id: id});
      current_view.render();
    });
    router.on("route:spell_check", function(id) {
      current_view = new dataEntryClient.Views.SpellCheckView();
      current_view.render({restaurant_id: id});
    });

    router.on("route:menu_categorization", function(id) {
      current_view = new dataEntryClient.Views.MenuCategorizationView();
      current_view.render({restaurant_id: id});
    });

    router.on("route:get_diff", function(id1,id2) {
      current_view = new dataEntryClient.Views.RestaurantDiffView({id1:id1,id2:id2});
      current_view.render({id1:id1,id2:id2});
    });

    router.on("route:items", function(id) {
      current_view = new dataEntryClient.Views.ItemEntryView({restaurant_id: id});
      current_view.render();
    });
    router.on("route:absolute_position",function(){
      current_view = new dataEntryClient.Views.AbsolutePositionView();
      current_view.render();
    });

    router.on("route:position",function(){
      current_view = new dataEntryClient.Views.PositionView();
    });
    router.on("route:android-releases", function() {
      current_view = new dataEntryClient.Views.AndroidReleasesView();
      current_view.render();
    });

    router.on("route:android-release", function(id) {
      current_view = new dataEntryClient.Views.AndroidReleaseView({id:id});
      current_view.render();
    });

    router.on("route:ios-releases", function() {
      current_view = new dataEntryClient.Views.IOSReleasesView();
      current_view.render();
    });

    router.on("route:ios-release", function(id) {
      current_view = new dataEntryClient.Views.IOSReleaseView({id:id});
      current_view.render();
    });

      router.on("route:restaurant_closing_reason", function(id) {
      current_view = new dataEntryClient.Views.RestaurantClosingReasonView();
      current_view.render();
    });
    router.on("route:restaurant_multiple_delivery_areas", function(id) {
      current_view = new dataEntryClient.Views.MultipleDeliveryAreasView();
      current_view.render();
    });
    router.on("route:search_delivery_areas", function(id) {
      current_view = new dataEntryClient.Views.SearchDeliveryAreasView();
      current_view.render();
    });
    router.on("route:dishes", function() {
      current_view = new dataEntryClient.Views.DishItemsView();
      current_view.render();
    });
    router.on("route:dish", function(id) {
      current_view = new dataEntryClient.Views.DishItemView();
      current_view.render({id:id});
    });

    router.on("route:map_preview", function(id) {
      current_view = new dataEntryClient.Views.MapPreviewView();
      current_view.render({id:id});
    });

    // start the app
    Backbone.history.start(); //{pushState: true, hasChange: false, root: '/central/app/'}); // if enabling pushState

  }
};

$(document).ready(function () {
    'use strict';
    dataEntryClient.init();
});
