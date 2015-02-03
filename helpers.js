// all the template helpers are placed here

var partials_compiled = {
	partials_manager: JST['app/scripts/templates/partials/manager.ejs'],
	partials_markupText: JST['app/scripts/templates/partials/markupText.ejs'],
  partials_markupNumber: JST['app/scripts/templates/partials/markupNumber.ejs'],
  partials_markupDate: JST['app/scripts/templates/partials/markupDate.ejs'],
	partials_markupTextarea: JST['app/scripts/templates/partials/markupTextarea.ejs'],
	partials_markupSelect: JST['app/scripts/templates/partials/markupSelect.ejs'],
	partials_contactNumber: JST['app/scripts/templates/partials/contactNumber.ejs'],
	partials_bankAccount: JST['app/scripts/templates/partials/bankAccount.ejs'],
	partials_deliveryAreas: JST['app/scripts/templates/partials/deliveryAreas.ejs'],
  partials_sidebar: JST['app/scripts/templates/partials/sidebar.ejs'],
  partials_deliveryArea: JST['app/scripts/templates/partials/deliveryArea.ejs'],
  partials_timing: JST['app/scripts/templates/partials/timing.ejs'],
  partials_alertSuccess: JST['app/scripts/templates/partials/alertSuccess.ejs'],
  partials_alertDanger: JST['app/scripts/templates/partials/alertDanger.ejs'],
  partials_profile: JST['app/scripts/templates/partials/profile.ejs'],
  partials_item: JST['app/scripts/templates/partials/item.ejs'],
  partials_item_size: JST['app/scripts/templates/partials/item_size.ejs'],
  partials_item_price: JST['app/scripts/templates/partials/item_price.ejs'],
  partials_choice_select: JST['app/scripts/templates/partials/choice_select.ejs'],
  partials_item_disable_modal: JST['app/scripts/templates/partials/item_disable_modal.ejs'],
  partials_document: JST['app/scripts/templates/partials/document.ejs'],
  partials_restaurant_topnav: JST['app/scripts/templates/partials/restaurant_topnav.ejs'],
  partials_tinyowlRepresentative: JST['app/scripts/templates/partials/tinyowlRepresentative.ejs'],
  partials_update_status: JST['app/scripts/templates/partials/update_status.ejs'],
  partials_bulk_update: JST['app/scripts/templates/partials/bulk_update.ejs'],
  partials_designation: JST['app/scripts/templates/partials/designation.ejs'],
  partials_add_single_locality: JST['app/scripts/templates/partials/add_single_locality.ejs'],
  partials_info_window: JST['app/scripts/templates/partials/info_window.ejs'],
  partials_choice_option: JST['app/scripts/templates/partials/choice_option.ejs'],
  partials_choice_entry: JST['app/scripts/templates/partials/choice_entry.ejs'],
  partials_additional_name_locality: JST['app/scripts/templates/partials/additional_name_locality.ejs'],
  partials_menu_categorization: JST['app/scripts/templates/partials/menu_categorization.ejs'],
  partials_enter_categorization_tags: JST['app/scripts/templates/partials/enter_categorization_tags.ejs'],
  partials_show_categorization: JST['app/scripts/templates/partials/show_categorization.ejs'],
  partials_delivery_timings: JST['app/scripts/templates/partials/delivery_timings.ejs'],
}

var partial = function(name, options) {
	if (name) {
		var template = partials_compiled[name];
		return template(options);
	}
}

var compile_sidebar = function(options){
  var template = partials_compiled["partials_sidebar"];
  $("#sidebar_target").html(template(options));
  $('#sidebar').removeClass('hide-left-bar');
  $('#main-content').removeClass('merge-left');
}

var close_sidebar = function(){
  $('#sidebar').addClass('hide-left-bar');
  $('#main-content').addClass('merge-left');
  if( $('#container').hasClass('open-right-panel')){
      $('#container').removeClass('open-right-panel')
  }
  if( $('.right-sidebar').hasClass('open-right-bar')){
      $('.right-sidebar').removeClass('open-right-bar')
  }

  if( $('.header').hasClass('merge-header')){
      $('.header').removeClass('merge-header')
  }
  //$("#sidebar_target").html();
}

// get cookie from document.cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

// initializing and event bindings of alerts view
var alerts_view = new dataEntryClient.Views.AlertsView();
$(window).on('hashchange',function(){
    if (alerts_view) {
      alerts_view.cleanup();
    }
});
var cleanup_id;

// call carefully!
var generate_alert = function(success, message_text,position){
  if (alerts_view) {
    alerts_view.cleanup();
    clearTimeout(cleanup_id);
  };
  if(typeof position==="undefined"){
    alerts_view.render({
        success: success,
        message_text: message_text
    });
  }else{
    alerts_view.render({
        success: success,
        message_text: message_text,
        position: position
    });
  }
  cleanup_id = setTimeout(function(){alerts_view.cleanup(); alerts_view.$el.trigger("destroyed");},8000);
}

// capitalize first character
function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeTitle(string) {
	string = capitaliseFirstLetter(string);
	return string.replace("_", " ");
}

// generate an list of numbers from 1..n
function range(start, count) {
  if(arguments.length == 1) {
    count = start;
    start = 0;
  }

  var foo = [];
  for (var i = 0; i < count; i++) {
    foo.push(start + i);
  }
  return foo;
}

// get all the collections. Not to be used in un-authenticated views!!!
function get_collections() {
  // fetch collections and store in localstorage
  /*if (window.localStorage.getItem("collections") != null){
    collections = JSON.parse(window.localStorage.getItem("collections"));
    var current_timestamp = new Date().getTime() / 1000;
    if(current_timestamp - collections['timestamp'] > 600){
      //fetch it again ==>
    }
    else{
      return collections;
    }
    return collections;
  }*/
  $.ajax({
    url: "collections/profile",
    type: "GET",
    async: false,
    success: function(data) {
      window.localStorage.removeItem("collections");
      window.localStorage.setItem('collections', JSON.stringify(data));
      return data;
    },
    error: function() {
      if (window.localStorage.getItem("collections") != null){
        return JSON.parse(window.localStorage.getItem("collections"));
      }
      generate_alert(false,"Something went wrong! Please try again.");
      return false;
    }
  });

  // return synchronously
  return JSON.parse(window.localStorage.getItem("collections"));
}

function remove_collections(){
  if (window.localStorage.getItem("collections")){
    window.localStorage.removeItem("collections");
    return true;
  }
  return true;
}


function get_size_by_id(size_id){
  //var collections = get_collections();
  return getKeyByValue( size_id, window.collections.size_lists );
}

function get_size_id_by_value(size){
  //var collections = get_collections();
  return window.collections.size_lists[size];
}

// serializing a form to object
$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
      if (o[this.name] !== undefined) {
          if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
      } else {
          o[this.name] = this.value || '';
      }
  });
  return o;
};

function check_element_exists(arr, ele) {
  if(!arr){
    return false;
  }
  if (arr.indexOf(ele) > -1) {
    return true;
  } else {
    return false;
  }
}

function getKeyByValue( value , obj ) {
  for( var prop in obj ) {
    if( obj.hasOwnProperty( prop ) ) {
     if( obj[ prop ] === value )
       return prop;
    }
  }
}

function get_delivery_time(id, obj) {
  var delivery_time;
  $.each(obj, function(i,map){
    if (map.id == id) {
      delivery_time =  map.delivery_time;
    }
  });
  return delivery_time;
}

function get_min_delivery_amount(id, obj) {
  var min_delivery_amount;
  $.each(obj, function(i,map){
    if (map.id == id) {
      min_delivery_amount =  map.min_delivery_amount;
    }
  });
  return min_delivery_amount;
}

function get_status(status_id) {
  if(status_id >0){
    //var collections = get_collections();

    var status_class = getKeyByValue( status_id, window.collections.status ).toLowerCase();
    //debugger
    return status_class.toUpperCase();
  }
  return false;
}

function get_available_days(available_days_ids) {
  if(available_days_ids.length >0){
    days="";
    _.each(available_days_ids,function(key,index){

    var day = getKeyByValue( parseInt(key), window.collections.week_days );
    days += day ? (day + ", ") : "";

    });
    return days.slice(0,-2);
  }
  return "Not available on any day.";
}

function get_status_span(status_id){
  if (status_id>0) {
    //var collections = get_collections();
    var status = getKeyByValue( status_id, window.collections.status ).toLowerCase();
    var status_class = ['primary','success','warning','danger','used','info','default','inverse','danger','default','inverse', 'warning'];
    return "<span class='label label-sm label-"+status_class[status_id-1]+"'>" + status.toUpperCase() + "</span>";
  }else{
    return "<span class='label label-sm label-default'> Not Defined </span>";
  }
}

function get_status_id(status) {
  //var collections = get_collections();
  return window.collections.status[status];
}

// temporary till the collections are fetched
function get_scheduled_status(status_id){
  if(status_id){
    return getKeyByValue(status_id, collections.scheduled_update_status);
  }else{
    return "Not Defined";
  }
}

function get_cuisine(id){
  if (id) {
    var cuisine_name;
    window.collections.cuisines.forEach(function(cuisine){
      if (cuisine[1] == id) {
        cuisine_name = cuisine[0];
        return false;
      };
    });
    return cuisine_name;
  }
  var error = "Cuisine not entered";
  return error;
}

function get_cuisine_id(cuisine_name){
  if (cuisine_name) {
    var id;
    window.collections.cuisines.forEach(function(cuisine){
      if (cuisine[0] == cuisine_name) {
        id = cuisine[1];
        return false;
      };
    });
    return id;
  }
  return false;
}

function get_locality(id){
  if (id > 0) {
    //var collections = get_collections();
    var locality_name;
    window.collections.localities.forEach(function(locality){
      if (locality.id == id) {
        locality_name = locality.name;
        return false;
      };
    });
    return locality_name;
  }
  var error = "Locality not entered";
  return error;
}

function get_locality_id(locality_name){
  if (locality_name) {
    //var collections = get_collections();
    var id;
    window.collections.localities.forEach(function(locality){
      if (locality.name == locality_name) {
        id = locality.id;
        return false;
      };
    });
    return id;
  }
  return false;
}

function get_locality_group(id){
  if (id > 0) {
    //var collections = get_collections();
    var group_name;
    window.collections.groups.forEach(function(locality_group){
      if (locality_group.id == id) {
        group_name = locality_group.name;
        return false;
      };
    });
    return group_name;
  }
  var error = "Locality not entered";
  return error;
}

function get_locality_group_id(locality_group_name){
  if (locality_group_name) {
    //var collections = get_collections();
    var id;
    window.collections.groups.forEach(function(locality_group){
      if (locality_group.name == locality_group_name) {
        id = locality_group.id;
        return false;
      };
    });
    return id;
  }
  return false;
}

function get_parent_locality_id(id){
  if (id > 0) {
    //var collections = get_collections();
    var parent_id;
    window.collections.groups.forEach(function(locality_group){
      if (locality_group.id == id) {
        parent_id = locality_group.locality_id;
        return false;
      };
    });
    return parent_id;
  }
  return 0;
}

function get_parent_id(id){
  if (id>0) {
    var parent_id;
    _.each(window.collections.localities, function(l){
      if (l.id == id) {
        parent_id = l.parent_id;
        return false;
      };
    });
    return parent_id;
  }
  return -1;
}
// adding cleanup method
Backbone.View.prototype.cleanup = function() {
  this.undelegateEvents();
  $(this.el).empty();
}


/* Key board shortcuts for Navigating Profile page */
function KeyPress(e) {
  var evtobj = window.event? event : e;
  var roles = _.collect(window.user.get_roles(), function(x){ return x['name'] });
  var user_type;
  var home;
  if(_.contains(roles, "Outsource Data Entry Agent")){
    user_type="outsource";
    home = "#outsource/agent";
  }
  else if(_.contains(roles, "Outsource Data Entry Head")){
    user_type="outsource";
    home = "#outsource/head";
  }
  else{
    user_type="restaurants";
    home = "#restaurants";
  }

  // shortcut to go to home
  if (evtobj.keyCode == 72 && evtobj.ctrlKey) {
    if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
      // redirect to Restaurant logo and documents
      e.preventDefault();
      window.location.hash = home;
      return false;
    }
  }

  // short cut for profile
  if (evtobj.keyCode == 80 && evtobj.ctrlKey) {
    if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
      // redirect to Restaurant Profile Page
      e.preventDefault();
      window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/profile";
      return false;
    }
  }

  if (evtobj.keyCode == 68 && evtobj.ctrlKey) {
    if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
      // redirect to Restaurant DeliveryAreas
      e.preventDefault();
      window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/deliveryArea";
      return false;
    }
  }

  if (evtobj.keyCode == 77 && evtobj.ctrlKey) {
    if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
      // redirect to Restaurant timings
      e.preventDefault();
      window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/timings";
      return false;
    }
  }
  if (user_type != "outsource") {
    if (evtobj.keyCode == 79 && evtobj.ctrlKey) {
      if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
        // redirect to Restaurant Office Doc
        e.preventDefault();
        window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/office_document";
        return false;
      }
    }

    if (evtobj.keyCode == 81 && evtobj.ctrlKey) {
      if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
        // redirect to Restaurant Account Details
        e.preventDefault();
        window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/account_details";
        return false;
      }
    }

    if (evtobj.keyCode == 75 && evtobj.ctrlKey) {
      if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
        // redirect to Restaurant Miscellaneous
        e.preventDefault();
        window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/miscellaneous";
        return false;
      }
    }

    if (evtobj.keyCode == 73 && evtobj.ctrlKey) {
      if (Backbone.history.fragment.indexOf("restaurants/") == 0) {
        // redirect to Restaurant logo and documents
        e.preventDefault();
        window.location.hash = "#/restaurants/" + dataEntryClient.restaurant_id + "/documents";
        return false;
      }
    }
  }
}

document.onkeydown = KeyPress;

/* convert mins to seconds */

function to_seconds(mins) {
  if (parseInt(mins)) {
    return Math.floor(mins * 60);
  }
  return 0;
}

function to_mins(seconds) {
  if (parseInt(seconds)) {
    return Math.floor(seconds / 60);
  }
  return 0;
}

function to_hours(seconds) {
  if (parseInt(seconds)) {
    var hour=seconds/(60*60);
    var time=hour.toString().split('.');
    if(time[1]==null)
      return time +':' +'00';

    return time[0] +':' +'30';
  }
  return 0;
}

// Convert integer timestamp to Human date
function timeConverter(timestamp){
  var a = new Date(timestamp*1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ', ' + year + ' at ' + hour + ':' + min + ':' + sec ;
  return time;
 }

 function getDate(timestamp) {
  var d = new Date(timestamp * 1000);
  return d.getDate() + '/' + (parseInt(d.getMonth())+1) + '/' + d.getFullYear();
 }

//get url for menu timeline
 function get_menu_timeline_url(restaurant_id,menu_progress_bar) {
  var menu_progress =_.where(menu_progress_bar, {status:1})
  menu_progress_url = menu_progress[menu_progress.length-1]
  if(menu_progress_url == null){
    return "#menu_timeline/"+restaurant_id+"/spell_check"
  }
  else{
    return "#menu_timeline/"+restaurant_id+"/"+menu_progress_url.state+""
  }
 }

function getReverseTimestamp(date) {
  var u = date.split('/');
  var ret = u[1]+'/'+u[0]+'/'+u[2];
  var d = new Date(ret).getTime();
  return d;
 }

 function getTime(timestamp) {
  var d = new Date(timestamp * 1000);
  var hour = d.getHours() < 10 ? '0' + d.getHours() : d.getHours();
  var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();

  return   hour+ ":" + minutes;
}

function get_delivery_time (seconds) {
  var hours = parseInt( seconds / 3600 ) % 24;
  var minutes = parseInt( seconds / 60 ) % 60;
  var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes)
  return result 
}
// parsing the URL in javascript
function get_url_parameter(key) {
    var search_url = decodeURIComponent(window.location.search.substring(1));
    var url_variables = search_url.split('&');
    for (var i = 0; i < url_variables.length; i++) {
        var parameter_name = url_variables[i].split('=');
        if (parameter_name[0] == key) {
            return parameter_name[1];
        }
    }
}
//returns form data as object and append repeating names
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
      indexed_array[n['name']] = indexed_array[n['name']] || '';
      indexed_array[n['name']]+=n['value']+",";
    });

    return indexed_array;
}
// defining async scripts loader function with a function callback
function async(u, c) {
  var d = document, t = 'script',
      o = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
  o.src = '//' + u;
  if (c) { s.addEventListener('load', function (e) { c(null, e); }, false); }
  s.parentNode.insertBefore(o, s);
}

// get a random color
var get_random_color = function(){
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

// Functions for starting and stopping loading screens
function start_loading()
{
  //console.log("loading started");
  $("#loading").show();
}

function stop_loading()
{
  //console.log("loading stopped");
  $("#loading").hide();
}
// Remove spaces from the string
function remove_spaces(string){
  return $.trim(string).replace( /\s{2,}/g, ' ' );
}
// new unique id generator

var global_id_counter = new Date().getTime();
function generate_new_id(){
  return "new_" + (new Date().getTime() + global_id_counter++).toString();
}
//initialize select2, jquery_select_el = $('element')
function initialize_select2(jquery_select_el, array_value) {
  jquery_select_el.select2({
    tokenSeparators: [',', ' '],
    placeholder: 'Select option',
    allowClear: true
  });
  jquery_select_el.select2('val', array_value);
}
