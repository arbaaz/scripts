this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/data_entry/401.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-sm-6 col-sm-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        <img src="images/401.png" class="img-responsive">\n        <h1 class="text-center"> You shall not pass! </h1>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/account_details.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n<div class="row">\n\n  ' +
((__t = ( partial('partials_sidebar', {
    id: account_details.get("id"),
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n  \n  <!-- form component -->\n  <div class="col-xs-12 col-sm-10 col-lg-10 profile-adjust pull-right">\n\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section> \n      <h2 class="to_center">Edit: Account Details</h2>\n      <hr>\n      <div class="row">\n        <form accept-charset="UTF-8" class="form-horizontal" id="account_details_form" method="post" enctype="multipart/form-data">\n          <input type="hidden" value="' +
((__t = ( account_details.get('id') )) == null ? '' : __t) +
'" name="id">  \n       \t  \t\t\t\t\t  \n          \t<div class="form-group">\n\t            <label for="payment_settlement_period" class="col-md-4 control-label">Payment Settlement Period</label>\n\t            <div class="col-md-8">\n\t\t            <select name="payment_settlement_period" class="form-inline-element input-sm" id="payment_settlement_period">\n                  <option value="-1" selected>none</option>\n\t\t\t            ';
 _.each(collections.time_period, function(i,period) {;
__p += '\n\t\t\t              <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(account_details.get("payment_settlement_period") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' > ' +
((__t = ( period)) == null ? '' : __t) +
'</option>\n\t\t\t            ';
 }) ;
__p += '\n\t\t            </select>\n\t            </div>\n\t          </div>\n\t          <div class="form-group">\n\t            <label for="payment_settlement_type" class="col-md-4 control-label">Payment Settlement Type</label>\n\t            <div class="col-md-8">\n\t\t            <select name="payment_settlement_type" class="form-inline-element input-sm" id="payment_settlement_type">\n                <option value="-1" selected>none</option>\n\t\t\t            ';
 _.each(collections.payment_settlement_type, function(i,type,mapping) {;
__p += '\n\t\t\t              <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(account_details.get("payment_settlement_type") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' > ' +
((__t = ( type )) == null ? '' : __t) +
'</option>\n\t\t\t            ';
 }) ;
__p += '\n\t\t            </select>\n\t            </div>\n\t          </div>\n\t          <div class="form-group">\n\t            <label for="payment_settlement_weekday" class="col-md-4 control-label">Payment Settlement Day</label>\n\t            <div class="col-md-8">\n\t            <select name="payment_settlement_weekday" class="form-inline-element input-sm" id="payment_settlement_weekday">\n                <option value="-1" selected>none</option>\n\t            ';
 _.each(collections.week_days, function(i,weekday) { ;
__p += '\n\t              <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(account_details.get("payment_settlement_weekday") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = ( weekday )) == null ? '' : __t) +
'</option>\n\t            ';
 }) ;
__p += '\n\t            </select>\n\t            </div>\n\t          </div>\n            <hr/>\n            <div class="form-group">\n              <label class="col-sm-4 control-label col-lg-4" for="permission_for_offers">Permission for Offers from TinyOwl</label>\n              <div class="col-lg-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="permission_for_offers" ';
 if(account_details.get("permission_for_offers")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div>\n            <div class="form-group">\n              <label class="col-sm-4 control-label col-lg-4" for="online_payment">Accepts card payment?</label>\n              <div class="col-lg-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="online_payment" ';
 if(account_details.get("online_payment")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div> \n\t          <div class="form-group">\n\t            <label for="bank_id" class="col-md-4 control-label">Bank Name</label>\n\t            <div class="col-md-8">\n\t            <select name="bank_id" class="form-inline-element input-sm" id="bank_id">\n                <option value="-1" selected>none</option>\n\t            ';
 _.each(collections.bank, function(banks) { ;
__p += '\n\t              <option value="' +
((__t = ( banks[1] )) == null ? '' : __t) +
'" ';
 if(account_details.get("bank_account").bank_id == banks[1]){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = ( banks[0] )) == null ? '' : __t) +
'</option>\n\t            ';
 }) ;
__p += '\n\t            </select>\n\t            </div>\n\t          </div>\n            ' +
((__t = ( partial('partials_markupText', {
              id: "branch",
              placeholder: "Branch",
              label: "Branch",
              name: "branch",
              value: account_details.get("bank_account").branch ? account_details.get("bank_account").branch : "",
              required: false            
            }) )) == null ? '' : __t) +
'\n\t          ' +
((__t = ( partial('partials_markupText', {
	            id: "account_name",
	            placeholder: "Account Name",
	            label: "Account Name",
	            name: "account_name",
	            value: account_details.get("bank_account").account_name ? account_details.get("bank_account").account_name : "",
	            required: false	           
	          }) )) == null ? '' : __t) +
'\n\t          ' +
((__t = ( partial('partials_markupText', {
	            id: "account_number",
	            placeholder: "Account Number",
	            label: "Account Number",
	            name: "account_number",
	            value: account_details.get("bank_account").account_number ? account_details.get("bank_account").account_number : "",
	            required: false	           
	          }) )) == null ? '' : __t) +
'\n\t          <div class="form-group">\n              <label for="account_type" class="col-md-4 control-label">Account Type</label>\n              <div class="col-md-8">\n              <select name="account_type" class="form-inline-element input-sm" id="account_type">\n                <option value="" selected>none</option>\n                <option value="CURRENT" ';
 if(account_details.get("account_type") == "CURRENT"){ ;
__p += ' selected ';
 } ;
__p += '> CURRENT </option>\n                <option value="SAVINGS" ';
 if(account_details.get("account_type") == "SAVINGS"){ ;
__p += ' selected ';
 } ;
__p += '> SAVINGS </option>\n              </select>\n              </div>\n            </div>\n\t          ' +
((__t = ( partial('partials_markupText', {
	            id: "ifsc",
	            placeholder: "IFSC Code",
	            label: "IFSC Code",
	            name: "ifsc",
	            value: account_details.get("bank_account").ifsc ? account_details.get("bank_account").ifsc : "",
	            required: false,
              pattern : ".{11}",
              title : "Should be 11 digit alphanumeric"         
	          }) )) == null ? '' : __t) +
'\n            <div class="form-group">\n              <label class="col-sm-4 control-label col-lg-4" for="verified">Verified?</label>\n              <div class="col-lg-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="verified" ';
 if(account_details.get("verified")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div>\n\n\n\t          <div class="submit_div">\n\t            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_accounts">\n\t          </div>\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/add_item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal fade" id="item_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close item_modal_close" data-dismiss="modal" aria-hidden="true" title="Close">&times;</button>\n        <h4 class="modal-title" id="item_modal_label">Edit Item\n        <span id="edit_item_name"></span>\n        <span id="form_errors" style="display:inline-block; text-align:center;"></span>\n        </h4>\n      </div>\n      <div class="modal-body">\n        <!-- modal body -->\n        <form class="item-modal-form" id="edit_item_form">\n            <div class="item_form">\n                <label for="item_input_name">Item Name: </label>\n                <input class="item_input_name" name="item_name" placeholder="Item name.." value="' +
((__t = ( item.get('name') )) == null ? '' : __t) +
'">\n                <br />\n                <div style="margin-top:9px;">\n                    <label for="description">Description: </label>\n                    <textarea rows="2" cols="50" class="item_desc" id="description" style="width: 65%;" placeholder="Item description..">' +
((__t = ( item.get('description') )) == null ? '' : __t) +
'</textarea>\n                </div>\n                <div style="margin-top:9px;">\n                    <label for="item_veg_type">Dish Type: </label>\n                    <select name=\'veg_type\' class=\'item_input_veg_type\' id="item_veg_type">\n                        ';
 _.each(get_collections().veg_types, function(value, key){ ;
__p += '\n                            <option value="' +
((__t = ( key )) == null ? '' : __t) +
'" ';
 if(key == item.get('veg_type')){ ;
__p += ' selected=selected';
} ;
__p += '>' +
((__t = ( key.replace("_", " ") )) == null ? '' : __t) +
'</option>\n                        ';
 }) ;
__p += '\n                    </select>\n                    <button class=\'add_size btn btn-info\'>Add Size</button>\n                </div>\n            </div>\n\n            <div id="item_modal_sizes">\n            </div>\n        </form><!-- end of form body -->\n      </div>\n      <div class="modal-footer">\n        <div id="notification_save"></div>\n        <button type="button" class="btn btn-primary save_item" data-dismiss="modal">Save changes</button>\n        <button type="button" class="btn btn-default item_modal_close" data-dismiss="modal">Close</button>\n    </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/alerts.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n    <div class="';
if(typeof position ==="undefined"){;
__p += '\n    \t\t\t\t' +
((__t = ("col-xs-12 pull-right")) == null ? '' : __t) +
'\n    \t\t\t';
}else if(position=="right"){;
__p += '\n    \t\t\t\t' +
((__t = ("col-xs-10 profile-adjust pull-right")) == null ? '' : __t) +
'\n\t\t\t\t';
}else if(position=="center"){;
__p += '\n\t\t\t\t\t' +
((__t = ("col-xs-6 col-xs-offset-3")) == null ? '' : __t) +
'\n\t\t\t\t';
}else{;
__p += '\n\t\t\t\t\t' +
((__t = ("col-xs-12 text-center")) == null ? '' : __t) +
'\n\t\t\t\t';
};
__p += '\n\t\t\t\t">\n        <div id="shadow" class="panel">\n            <div class="panel-body">                \n\t\t\t\t';
 if(success){;
__p += '\n\t\t\t\t\t' +
((__t = ( partial('partials_alertSuccess', {
				        message:message_text
				  	}) )) == null ? '' : __t) +
'\n\t\t\t\t';
 }else{ ;
__p += '\n\t\t\t\t\t' +
((__t = ( partial('partials_alertDanger', {
				        message:message_text
				  	}) )) == null ? '' : __t) +
'\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/assignment_form.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-md-6 col-md-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>\n        <h3 class="to_center">Create new Restaurant</h3>\n        <hr/>\n        <form role="form" class="form-horizontal" id="create_new" method="POST">\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "name",
            placeholder: "Enter name of the Restaurant",
            label: "Name",
            name: "name",
            value: "",
            required: true
          }) )) == null ? '' : __t) +
'\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "form_id",
            placeholder: "Form Id",
            label: "Form Id",
            name: "form_id",
            value: "",
            required: true,
            pattern : "(.)*[\\-](.)*",
            title : "Should contain hypen (-) , Will be something like MA-213"
          }) )) == null ? '' : __t) +
'\n          <hr/>\n          <div class="to_center">\n            <button type="Create" class="btn btn btn-success">Create</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/change_logs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">\n        ';
 _.each(change_logs, function(change_log){ ;
__p += '\n          <div class="row">\n            <div class="col-sm-1 terques-bg white" style="padding:30px 15px;">\n              <h4>' +
((__t = (change_log.get("change_type"))) == null ? '' : __t) +
'</h4>\n            </div>\n            <div class="col-sm-11">\n              <i class="fa fa-user"></i> ' +
((__t = (change_log.get("user_name"))) == null ? '' : __t) +
'              \n              <span class="muted">' +
((__t = (timeConverter(change_log.get("changed_at")))) == null ? '' : __t) +
'</span>\n              <br/>\n              <div class="well">\n                ';
_.each(change_log.get("change_logs"), function(log){ ;
__p += '\n                  From <code>' +
((__t = (log[0]?log[0]:"None")) == null ? '' : __t) +
'</code> to <code>' +
((__t = (log[1])) == null ? '' : __t) +
'</code>\n                ';
 }) ;
__p += '\n              </div>\n            </div>\n          </div>\n          <hr/>\n        ';
 }); ;
__p += '\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/copy_restaurant.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-md-6 col-md-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>\n        <h3 class="to_center">Copy restaurant</h3>\n        <hr/>\n        <form role="form" class="form-horizontal" id="copy" method="POST">\n          <input type="hidden" name="restaurant_id" value="' +
((__t = (id)) == null ? '' : __t) +
'">\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "name",
            placeholder: "Enter name of the Restaurant",
            label: "Name",
            name: "name",
            value: "",
            required: true
          }) )) == null ? '' : __t) +
'          \n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "form_id",
            placeholder: "Form Id",
            label: "Form Id",
            name: "form_id",
            value: "",
            required: true,
            pattern : "(.)*[\\-](.)*",
            title : "Should contain hypen (-) , Will be something like MA-213"
          }) )) == null ? '' : __t) +
'\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="copy_profile">Copy Profile?</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="copy_profile">                          \n                    </label>\n                </div>\n            </div>\n          </div>\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="copy_logo">Copy Logo of Restaurant?</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="copy_logo">                          \n                    </label>\n                </div>\n            </div>\n          </div>\n          <hr/>\n          <div class="to_center">\n            <button type="Create" class="btn btn btn-success" id="copy_restaurant">Copy</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/dashboard.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-md-7 hidden-xs hidden-sm">\n    <div class="mini-stat clearfix">\n      <div class="mini-stat-info">\n          <span>Data Entry</span>  \n          Create and Update Restaurant & Menus\n      </div>\n    </div>\n  </div>\n  <div class="col-md-5 hidden-xs hidden-sm">\n    <div class="mini-stat clearfix">        \n        <div class="mini-stat-info">\n            <span>Location Service</span>  \n            Manage Localities          \n        </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-md-3 col-md-offset-1">\n    <div class="mini-stat clearfix" onclick="window.location.hash=\'restaurants\';">\n        <span class="mini-stat-icon tar"><i class="fa fa-cutlery"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="#restaurants">Restaurants</a></span>\n            Create, Edit & Manage Restaurants\n        </div>\n    </div>\n  </div>\n  <!--<div class="col-md-2">\n    <div class="mini-stat clearfix" >\n        <span class="mini-stat-icon tar"><i class="fa fa-adn"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="outsource/agent">Agent</a></span>\n            Create and Update\n        </div>\n    </div>\n  </div>\n  <div class="col-md-2">\n    <div class="mini-stat clearfix">\n        <span class="mini-stat-icon green"><i class="fa fa-h-square"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="outsource/head">Head</a></span>\n            Assign & Compare\n        </div>\n    </div>\n  </div>-->\n\n  <div class="col-md-4 col-md-offset-4">\n    <div class="mini-stat clearfix" onclick="window.location.href=\'/location/admin/localities\';">\n        <span class="mini-stat-icon orange"><i class="fa fa-map-marker"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="/location/admin/localities">Locality Mangement</a></span>\n            Create, Edit & Manage Localities\n        </div>\n    </div>\n  </div> \n</div>\n<div class="row">\n  <div class="col-md-7 hidden-xs hidden-sm">\n    <div class="mini-stat clearfix">        \n        <div class="mini-stat-info">\n            <span>Order Management</span>  \n            View, Edit & Place Orders\n        </div>\n    </div>\n  </div>\n  <div class="col-md-5 hidden-xs hidden-sm">\n    <div class="mini-stat clearfix">\n      <div class="mini-stat-info">\n          <span>User Management</span>  \n          Manage Users and Roles          \n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-md-2 col-md-offset-1">\n    <div class="mini-stat clearfix" onclick="window.location.href=\'/restaurant/order_management\';">\n        <span class="mini-stat-icon yellow-b"><i class="fa fa-bolt"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="/restaurant/order_management">Live</a></span>\n            Live Orders\n        </div>\n    </div>\n  </div>\n  <div class="col-md-3">\n    <div class="mini-stat clearfix" onclick="window.location.href=\'/restaurant/order_management/search\';">\n        <span class="mini-stat-icon yellow-b"><i class="fa fa-search"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="/restaurant/order_management/search">Search</a></span>\n            Search Orders\n        </div>\n    </div>\n  </div>\n  <div class="col-md-2 col-md-offset-2">\n    <div class="mini-stat clearfix" onclick="window.location.href=\'/user/roles\';">\n        <span class="mini-stat-icon orange"><i class="fa fa-key"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="/user/roles">Roles</a></span>\n            Manage & assign Roles\n        </div>\n    </div>\n  </div>\n  <div class="col-md-2">\n    <div class="mini-stat clearfix" onclick="window.location.href=\'/user/roles\';">\n        <span class="mini-stat-icon green"><i class="fa fa-users"></i></span>\n        <div class="mini-stat-info">\n            <span><a href="/user/user_search">Users</a></span>\n            View & Search Users\n        </div>\n    </div>\n  </div> \n</div>\n\n        \n<div class="row">\n  <div class="col-md-2 hidden-xs hidden-sm">\n    <div class="micro-stat clearfix">\n      <div class="micro-stat-info">\n          <span>Misc</span>  \n          Miscellaneous\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2">\n    <div class="micro-stat clearfix" onclick="window.location.href=\'/restaurant/crm/closed_timings\';">\n        <span class="micro-stat-icon orange"><i class="fa fa-clock-o"></i></span>\n        <div class="micro-stat-info">\n            <span><a href="/restaurant/crm/closed_timings">Closed timings</a></span>\n            Closed timings\n        </div>\n    </div>\n  </div> \n  <div class="col-md-2">\n    <div class="micro-stat clearfix" onclick="window.location.href=\'/restaurant/crm/size_lists\';">\n        <span class="micro-stat-icon tar"><i class="fa fa-list"></i></span>\n        <div class="micro-stat-info">\n            <span><a href="/restaurant/crm/size_lists">Size Lists</a></span>\n            Edit Size Lists\n        </div>\n    </div>\n  </div> \n  <div class="col-md-2">\n    <div class="micro-stat clearfix" onclick="window.location.href=\'/restaurant/crm/cuisines\';">\n        <span class="micro-stat-icon yellow-b"><i class="fa fa-bookmark"></i></span>\n        <div class="micro-stat-info">\n            <span><a href="/restaurant/crm/cuisines">Cuisines</a></span>\n            Cuisines\n        </div>\n    </div>\n  </div> \n  \n  <div class="col-md-2">\n    <div class="micro-stat clearfix" onclick="window.location.href=\'/restaurant/crm/banks\';">\n        <span class="micro-stat-icon bg-green"><i class="fa fa-inr"></i></span>\n        <div class="micro-stat-info">\n            <span><a href="/restaurant/crm/banks">Banks</a></span>\n            Add banks\n        </div>\n    </div>\n  </div> \n  <div class="col-md-2">\n    <div class="micro-stat clearfix" onclick="window.location.href=\'/restaurant/crm/offer/show\';">\n        <span class="micro-stat-icon orange"><i class="fa fa-tags"></i></span>\n        <div class="micro-stat-info">\n            <span><a href="/restaurant/crm/offer/show">Offers</a></span>\n            Offers\n        </div>\n    </div>\n  </div> \n  \n</div>\n\t\t\t\t';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/deleted_restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n\t<div class="col-lg-12">\n\t\t<section class="panel">\n\t\t    <div class="panel-body"> \n\t\t    \t<section id="alerts"></section>                           \n\t\t        <div class="row">\t\t        \t\n\t\t            <div class="col-lg-2">\n\t\t                <div class="input-group hide">\n\t\t                    <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\n\t\t                    <input type="text" id="filter" class="form-control input-sm" placeholder="type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (meta.search)) == null ? '' : __t) +
'">\n\t\t                </div>\n\t\t                <h4> Deleted Restaurants </h4>\n\t\t            </div>\n\t\t            <div class="col-lg-4">\n\t\t                <a class="btn btn-success btn-sm" href="#restaurants/new"><i class="fa fa-plus-square"></i> Add a new Restaurant</a>\n                    <a class="btn btn-info btn-sm" href="#restaurants/invisible"><i class="fa fa-file-text"></i> View Invisible </a>\n\t\t            </div>\n\t\t            <span class="pull-right">\n\t\t\t          \t<a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>&nbsp;&nbsp;\n\t\t\t        \t</span>                                \n\t\t        </div>\n\t\t        <hr/>\n\t\t        <div class="row">\t\t            \n\t\t            <p class="lead text-center"><span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
' </p>\n\t\t        </div>&nbsp;\n\t\t        <div class="row">\n\t\t        \t<div class="col-md-12 text-center">\n\t\t        \t\t<ul class="pagination pagination-sm">\n                  <li><a id="1" class="page_number">First</a></li>\n                  <li><a id="previous" class="page_number">«</a></li>\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\n                  ';
 } ;
__p += ' \n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n                  <li><a id="next" class="page_number">»</a></li>\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n                </ul>\n                <h5> 20 Restaurants per page </h5>\n\t\t        \t</div>\n\t\t        </div>\n\t\t        <hr/>\n\t\t        <div class="row">\n\t\t          <div class="col-lg-12">\n\t\t            <table class="table  table-hover general-table">\n\t\t              <thead>\n\t\t                  <tr>\n\t\t                      <th> # </th>\n\t\t                      <th>Name</th>\n\t\t                      <th class="hidden-phone">Last updated</th>\n\t\t                      <th>Status</th>\n\t\t                      <th>Actions</th>\n\t\t                      <th></th>\n\t\t                  </tr>\n\t\t              </thead>\n\t\t              <tbody class="searchable">\n\t\t                ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \n\t\t                  <tr data-locality="' +
((__t = (restaurant.get("locality_id"))) == null ? '' : __t) +
'" data-status="' +
((__t = ( get_status(restaurant.get("status")) )) == null ? '' : __t) +
'" data-call="' +
((__t = (restaurant.get("call_as_user")?'YES':'NO')) == null ? '' : __t) +
'"> \n\t\t                    <td>\n\t\t                      <p class="text-info">\n\t\t                        ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\n\t\t                      </p>\n\t\t                    </td>\n\t\t                    <td>\n\t\t                        <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,25) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\n\t\t                        <p class="text-muted">\n\t\t                          <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\n\t\t                        </p>                                   \n\t\t                    </td>\n\t\t                    <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\n\t                    \t<td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>\t\t  \n\t                    \t<td>                                        \n\t\t\t\t\t\t\t\t\t        <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile" disabled="disabled"><i class="fa fa-edit"></i> Edit</a> \n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" disabled="disabled"><i class="fa fa-list"></i> Menu</a>\n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" disabled="disabled"><i class="fa fa-check-square-o"></i> Choices</a>\n\t\t\t\t\t\t\t\t\t        <div class="btn-group">\n\t\t\t\t\t\t\t\t\t            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button" disabled="disabled"> <span class="caret"></span></button>\n\t\t\t\t\t\t\t\t\t            <ul role="menu" class="dropdown-menu">\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t                <li id="copy_restaurant">\n\t\t\t\t\t\t\t\t\t                \t\t<a class="copy_anchor" href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/copy"><i class="fa fa-copy"></i> Copy</a>\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="copy_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t\t                \t</li>\n\t\t\t\t\t\t\t\t\t                ';
 } ;
__p += '\n\t\t\t\t\t\t\t\t                \t<li class="divider"></li>\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")==1){ ;
__p += '\n\t\t\t\t\t\t\t\t\t                \t<li id="delete_restaurant">\n\t\t\t\t\t\t\t\t\t                \t\t<a class="delete_anchor"><i class="fa fa-times"></i> Delete</a>\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="delete_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t\t                \t</li>\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\n\t\t\t\t\t\t\t\t\t                \t<li id="invisible_restaurant">\n\t\t\t\t\t\t\t\t\t                \t\t<a class="invisible_anchor"><i class="fa fa-unlink"></i> Invisible</a>\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="invisible_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t\t                \t</li>\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\t\t\t\t\t\t\t\t                \n\t\t\t\t\t\t\t\t\t            </ul>\n\t\t\t\t\t\t\t\t\t        </div>                                        \n\t\t\t\t\t\t\t\t\t\t    </td>\t\t\t\t\t\t\t\t\t\t    \n\t\t                    <td>\n\t\t\t\t\t\t\t\t\t\t      <a class="btn btn-success btn-sm restaurant_restore" id="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'"><i class="fa fa-refresh"></i> Restore</a>                                          \n\t\t\t\t\t\t\t\t\t\t    </td>\n\t\t                  </tr>\n\t\t                ';
 }); ;
__p += '                                                 \n\t\t              </tbody>\n\t\t            </table>\t\t            \n\t\t          </div>\n\t\t        </div>\n\t\t        <hr/>\n\t\t        <div class="row">\n\t\t        \t<div class="col-md-12 text-center">\n\t\t        \t\t<ul class="pagination pagination-sm">\n                  <li><a id="1" class="page_number">First</a></li>\n                  <li><a id="previous" class="page_number">«</a></li>\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\n                  ';
 } ;
__p += ' \n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n                  <li><a id="next" class="page_number">»</a></li>\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n                </ul>\n                <h5> 20 Restaurants per page </h5>\n\t\t        \t</div>\n\t\t        </div>\n\t\t        \n\t\t    </div>\n\t\t</section>\n\t</div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/delivery_area.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n\n\n<div class="row">\n\n  ' +
((__t = ( partial('partials_sidebar', {
    id: restaurant.get("id"),
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n\n  <!-- form component -->\n  <div class="col-xs-12 col-sm-10 col-lg-10 profile-adjust pull-right"  id="delivery_area_list">\n\n    <div class="panel">\n      <div class="panel-body">\n      <button type="button" class="btn btn-white btn-sm pull-right preview_locality_group" data-index = "">\n        <i class="fa fa-map-marker" style="color:#fa8564"></i> Map Preview \n      </button>\n      <h3 class="to_center">Edit: Delivery Areas</h3>\n      <hr>\n      \n        <form accept-charset="UTF-8" class="form-horizontal" id="delivery_area_form" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id" id="id">\n\n          <input type="hidden" name="delivery_area_count" value="' +
((__t = ( deliveryAreas.length )) == null ? '' : __t) +
'">\n          <div class="form-group">\n            <label for="locality_filter" class="col-md-3 control-label" style="padding-top:2px">Select a locality: </label>\n            <div class="col-md-8">\n        \t\t  <select name="locality_filter" id="locality_filter" class="" >\n                <option value="" selected="selected"></option>\n                ';
 _.each(collections.localities, function(locality) { ;
__p += '\n                  ';
 if(!locality.parent_id){ ;
__p += '\n                    <option value="' +
((__t = ( locality.id )) == null ? '' : __t) +
'">' +
((__t = ( locality.name )) == null ? '' : __t) +
'</option>\n                  ';
 } ;
__p += '\n                ';
 }) ;
__p += '\n              </select>\n              &nbsp;\n              <!--<button type="button" class="btn btn-info btn-sm" id="lock"><i class="fa fa-lock"></i> </button>\n              <button type="button" class="btn btn-info btn-sm" id="unlock"><i class="fa fa-unlock"></i> </button>-->\n              <button type="button" class="btn btn-danger btn-sm" id="clear_filter"><i class="fa fa-times"></i> Clear</button>\n            </div>\n          </div>\n          <hr/>\n\t\t  <table class="table delivery_area_table">\n\n\t\t\t  <thead>\n\t\t\t  \t<th class="" >Sub-Locality</th>\n  \t\t\t\t<th class="delivery_time">Min Delivery Amt</th>\n          <th class="delivery_time">Delivery Charges</th>\n          <th class="delivery_time">Delivery Time Non Rush Hours (In minutes)</th>\n  \t\t\t\t<th class="delivery_time">Delivery Time Rush hours (In minutes)</th>\n\t\t\t\t  <th class="delivery_time">Actions</th>\n\t\t\t  </thead>\n\n\t\t\t  <tbody>\n\t\t          ';
 _.each(deliveryAreas, function(deliveryArea, i) { ;
__p += '\n\t\t            ' +
((__t = ( partial('partials_deliveryArea', {
		              i: i,
		              deliveryArea: deliveryArea,
		              localities: collections.groups
		            }) )) == null ? '' : __t) +
'\n\t\t          ';
 }) ;
__p += '\n\t\t\t  </tbody>\n\n\t\t  </table>\n\n          <br>\n\n          <button type="button" class="btn btn-info btn-sm add_delivery_area"><i class="fa fa-plus"></i> Add Delivery Area</button>\n\n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_locality">\n          </div>\n\n\n        </form>\n        \n      </div>\n    </div><!-- end well -->\n  </div>\n</div><!-- end row -->\n\n<div class="row" id="map_loader" style="opacity:0;zoom:0">\n  <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n    <div class="panel">\n      <div class="panel-body clearfix">\n        <button class="btn btn-danger btn-sm pull-right" id="close_locality_group_preview"><i class="fa fa-times"></i> Close Map Preview </button>\n        <h4 class="pull-left"> Delivery Areas <span id="polygon_name" class="small"></span></h4>\n        \n        <br/>\n        <hr/>\n        <div id="map-canvas"></div>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/documents.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n<div class="row">\n\n  ' +
((__t = ( partial('partials_sidebar', {
    id: id,
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n  \n  <!-- form component -->\n  <div class="col-xs-12 col-sm-10 col-lg-10 profile-adjust pull-right">\n\n    <div class="panel">\n      <div class="panel-body">\n      <h2 class="to_center">Logo</h2>\n      <hr>\n      <form class="form-horizontal" id="" method="post" enctype="multipart/form-data">\n        <input type="hidden" value="' +
((__t = ( id )) == null ? '' : __t) +
'" name="restaurant_id" id="restaurant_id">\n        <input type="hidden" value="' +
((__t = ( count )) == null ? '' : __t) +
'" name="count" id="count">\n        <input type="hidden" value="' +
((__t = ( count )) == null ? '' : __t) +
'" name="pivot" id="pivot">\n        <div class="form-group">\n          <label class="control-label col-md-4">Restaurant Logo</label>\n          <div class="controls col-md-8">                                    \n              ';
if(logo.logo != null){ ;
__p += '\n                <input type="file" name="logo" id="logo" class="form-control input-sm hide">\n                <div class="fileupload fileupload-new" data-provides="fileupload">\n                  <input type="hidden" id="logo_url" value="' +
((__t = (logo.logo)) == null ? '' : __t) +
'" >\n                  <div class="fileupload-new thumbnail pull-left" >\n                      <img src="' +
((__t = (logo.logo+"?"+ new Date().getTime())) == null ? '' : __t) +
'" class="img-responsive" id="current_logo" alt="Error loading the image!">\n                  </div> \n                  &nbsp;&nbsp; \n                  <!--<button type="button" class="btn btn-white btn-sm" id="change_image"> Change </button>-->\n                  <a href="/restaurant/data_entry/restaurants/download_logo/' +
((__t = ( id )) == null ? '' : __t) +
'" class="btn btn-info btn-sm" id="download_logo" target="_blank"><i class="fa fa-download"></i> Download </a>\n                  <button type="button" class="btn btn-danger btn-sm" id="delete_current_logo"><i class="fa fa-times"></i> Delete</button>\n                  <button type="button" class="btn btn-white btn-sm hide" id="restore_logo"><i class="fa fa-refresh"></i> Restore</button>                      \n                  <p class="text-warning hide" id="delete_info">&nbsp;&nbsp; Image will be deleted after you click on <span class="text-primary">\'Update Logo\'.</span> </p>                 \n                  <input type="hidden" name="delete_logo" id="delete_logo" value=false>\n                </div>\n\n              ';
 }else{ ;
__p += '\n                <input type="file" name="logo" id="logo" class="form-control input-sm">\n              ';
 } ;
__p += '\n          </div>\n        </div>\n        <div class="form-group">\n          <div class="controls col-md-6 col-md-offset-4">  \n            ';
if(logo.logo_updated_at != 0){ ;
__p += '<p class=""> Logo last updated : <strong><span data-livestamp="' +
((__t = ( logo.logo_updated_at )) == null ? '' : __t) +
'"></span> | ' +
((__t = (timeConverter(logo.logo_updated_at))) == null ? '' : __t) +
'</strong></p>';
 } ;
__p += '\n            <button type="button" class="btn btn-primary btn-sm update_logo" id="update_logo"> Update Logo </button>\n          </div>\n        </div>\n        <hr/>\n        <h2 class="to_center"> Documents </h2>\n        <hr/>\n        ';
 _.each(documents, function(document, i) { ;
__p += '\n          <div class="row">\n            <div class="col-sm-4 col-sm-offset-4">\n              <div class="activity-desk">\n                <span class="alert-icon pull-left bg-terques"><i class="fa fa-file-text"></i></span>  \n                <span class="label label-danger pull-right delete_doc" style="cursor:pointer"><i class="fa fa-times"></i> Delete</span>\n                <input type="hidden" value="' +
((__t = (document.get("id"))) == null ? '' : __t) +
'" id="delete_id">\n                <h3 class="terques">' +
((__t = (document.get("name"))) == null ? '' : __t) +
'</h3> \n                <a class="btn btn-primary btn-sm" href="' +
((__t = (document.get("document"))) == null ? '' : __t) +
'"><i class="fa fa-download"></i> Download </a>\n              </div>\n            </div>\n          </div>\n        ';
 }); ;
__p += '\n        <button type="button" class="btn btn-default btn-sm" id="add_document"><i class="fa fa-plus"></i> Add a new document </button>\n        \n        <!--<button type="submit" class="btn btn-primary btn-sm" id="save_documents"> Save Documents </button>-->\n      </form>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/edit_category.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Modal for category description -->\n<div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" title="Close">&times;</button>\n        <h4 class="modal-title" id="myCategoryModalLabel">\n          <span></span>\n        </h4>\n      </div>\n      <div class="modal-body">\n        <form>\n            <div style="margin-top:9px;">\n                <label for="name_title">Name: </label>\n                <input id="category_name" value="' +
((__t = ( category.get('name') )) == null ? '' : __t) +
'" />\n            </div>\n            <div style="margin-top:9px;">\n                <label for="description_title">Description: </label>\n                <textarea rows="4" cols="50" class="item_desc" id="category_description">' +
((__t = ( category.get('description') )) == null ? '' : __t) +
'</textarea>\n            </div>\n        </form>\n  \n        <form>\n            <div style="margin-top:9px;">\n                <label for="menu_items_count">Items Count: </label>\n                <input type="number" class="item_desc" id="menu_items_count" style="width: 65%;" value="' +
((__t = ( category.get('items_count') )) == null ? '' : __t) +
'">\n            </div>\n        </form>\n  \n      </div>\n      <div class="modal-footer">\n        <button type="button" class="btn btn-primary modal_category_save" data-dismiss="modal" >Save Changes</button>\n        <button type="button" class="btn btn-default modal_category_close" data-dismiss="modal">Cancel</button>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/faqs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-sm-10 col-sm-offset-1">\n    <div class="panel">\n      <div class="panel-body">\n        <h3>Frequently Asked Questions</h3>\n        <hr/>\n        <h4>Where should I login ?</h4>\n        <p class = "well">\n          There is a common place to login for any panel - <a style = "text-decoration:none" href = "/central/app/index.html#login"> www.tinyowl.co.in/central/app/index.html#login</a> .<br><br>Then you can select the portal you want to open. Login using your contact number and password.\n        </p>\n        <br/>\n        <h4>How should I get access to any panel ?</h4>\n        <div class = "well">\n          Firstly you should become an agent. Ask one of the following people to make you an agent -<br><br>\n            <div class = "row" >\n              <div class = "col-md-2"> \n                <em> \n                  <p style="color:#428bca">Aditya Kesarkar</p>\n                  <p style = "color:black">Avik Dey</p>\n                  <p style="color:#428bca">Manish Reddy</p>\n                  <p style = "color:black">Payal Jain</p>\n                  <p style="color:#428bca">Saurabh Goyal</p>\n                  <p style = "color:black">Shikhar Paliwal</p>\n                  <p style="color:#428bca">Shubham Bansal</p>\n                </em>\n              </div>\n\n              <div class = "col-md-2">\n                <em>\n\n                  <p style="color:#428bca">Ashish Tayal</p>\n                  <p style = "color:black">Harshvardhan Mandad</p>\n                  <p style="color:#428bca">Nikhil Gupta</p>\n                  <p style = "color:black">Rajat Jain</p>\n                  <p style="color:#428bca">Shahbaz Haider</p>\n                  <p style = "color:black">Shreyas Mahajan</p>\n                  <p style="color:#428bca">Tanuj Khandelwal</p>\n                </em>\n              </div>\n\n            </div>\n            <br>\n\n            Then shoot a mail to <a href="mailto:shikhar@tinyowl.co.in" style="text-decoration:none">shikhar@tinyowl.co.in</a> or <a href="mailto:saurabh@tinyowl.co.in" style="text-decoration:none">saurabh@tinyowl.co.in</a> mentioning your phone number (which you filled in the create agent form) and the labels of access you want (refer to the table 1 given below).\n        </div>\n        <br/>\n        <h4>How can I create an agent ?</h4>\n        <div class = "well">\n          You can create an agent using the button <em> <strong>"Create new agent"</strong></em>  on the top left corner of <a style = "text-decoration:none" href = "/user/login"> www.tinyowl.co.in/user/login </a> which looks like -<br><br>\n            <img src="/createbutton.png">\n            <br><br>\n\n          Ask the person who wants an access to fill the form. Then you may get the following messages<br><br>\n          <em> <strong>User already exists.Password was changed and user was added as an employee :-</strong></em> Nothing to worry. Task done<br><br>\n          <em> <strong>Agent Created : </strong></em>- Nothing to worry. Task done<br><br>\n          On success, the agent should be able to login on <a style = "text-decoration:none" href = "/central/app/index.html#login"> www.tinyowl.co.in/central/app/index.html#login </a><br>\n        </div>\n        <br/>\n        <h4>I am an agent with the required access but I am unable to login and getting an error ?</h4>\n        <div class = "well">\n          You may be getting the following errors - <br><br>\n          <em> <strong>User does not exists</strong></em> - Ask someone to make you an agent.<br><br>\n          <em> <strong>Incorrect Username/Password</strong></em> - Try login with your phone number and password.<br><br> \n           Still facing the same issue - Try remembering your password. <br><br>\n          Not able to remember your password- Treat a tech person and get it reset.\n        </div>\n\n        <br/>\n        <h4>Roles and Permissions</h4>\n        <table class = "table table-bordered table-condensed table-striped">\n          <thead>\n            <tr>\n              <th class = "col-md-2">LABEL</th>\n              <th class = "col-md-1">CONCERNED DEPT.</th>\n              <th>ACCESS</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Android Release Manager</td>\n              <td>App team</td>\n              <td>Add a new android version</td>\n            </tr>\n\n            <tr>\n              <td>Customer Support Agent</td>\n              <td>CS</td>\n              <td>Read, Update Order Panel | Order search | Read offer | Data Panel Read only</td>\n            </tr>\n\n            <tr>\n              <td>Customer Support Head</td>\n              <td>CS</td>\n              <td>Read, Update Order Panel | Order search | Read offer | Data Panel Read only | Order Statistics | Create Agent</td>\n            </tr>\n\n            <tr>\n              <td>Customer Support Lead</td>\n              <td>CS</td>\n              <td>ARead, Update Order Panel | Order search | Read offer | Data Panel Read only | Create Agent</td>\n            </tr>\n\n\n\n            <tr>\n              <td>Data Categorization</td>\n              <td>Data team</td>\n              <td>Edit Restaurant Profile, Menu and Choices</td>\n            </tr>\n\n            <tr>\n              <td>Data Entry</td>\n              <td>Data team</td>\n              <td>Edit Restaurant Profile, Menu and Choices</td>\n            </tr>\n\n            <tr>\n              <td>Data Head</td>\n              <td>Data team</td>\n              <td>Edit Restaurant Profile, Menu and Choices | Create Agent | Restaurant Profile Protected Edit | Add/Remove Cuisines | Add Remove Banks | Add/Remove SizeList | Add/Remove Holidays | Add to Dictionary</td>\n            </tr>\n\n            <tr>\n              <td>Data Read Only</td>\n              <td>Any</td>\n              <td>Read only on Restaurant Profile, Menu and Choices/td>\n              </tr>\n\n              <tr>\n                <td>Data Verification</td>\n                <td>Data team</td>\n                <td>Edit Restaurant Profile, Menu and Choices</td>\n              </tr>\n\n\n              <tr>\n                <td>Locality Creator</td>\n                <td>BD</td>\n                <td>Create, Update Localities</td>\n              </tr>\n\n              <tr>\n                <td>Locality Head</td>\n                <td>BD</td>\n                <td>Create, Update Localities | Create Agent</td>\n              </tr>\n\n              <tr>\n                <td>Locality read only</td>\n                <td>Any</td>\n                <td>Read only on Localities</td>\n              </tr>\n\n              <tr>\n                <td>Marketing Offer</td>\n                <td>Marketing</td>\n                <td>Create, Update any offer | Create Agent</td>\n              </tr>\n\n              <tr>\n                <td>Order Search</td>\n                <td>Any</td>\n                <td>Read only on Order</td>\n              </tr>\n\n              <tr>\n                <td>Order Statistics</td>\n                <td>Any</td>\n                <td>Read order statistics | Download reports</td>\n              </tr>\n\n              <tr>\n                <td>Outbound Panel</td>\n                <td>CS, Marketing</td>\n                <td>Send SMS, Email, Notification</td>\n              </tr>\n\n              <tr>\n                <td>Outbound SMS Only</td>\n                <td>Any</td>\n                <td>Send SMS</td>\n              </tr>\n\n              <tr>\n                <td>Role Manager</td>\n                <td>Tech team</td>\n                <td>Grant, Revoke access to any employee</td>\n              </tr>\n\n              <tr>\n                <td>User Data Manager</td>\n                <td>Any</td>\n                <td>User Detail</td>\n              </tr>\n            </tbody>    \n        </table>\n        <br/>\n\n        <h4>Quick Links</h4>\n        <table class = "table table-bordered table-condensed table-striped">\n          <thead>\n            <tr>\n              <th>LINK TO </th>\n              <th>URL\'S</th>\n            </tr>\n          </thead>\n        <tbody>\n          <tr>\n            <td>\n              Login\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/central/app/index.html#login">\n                http://www.tinyowl.co.in/central/app/index.html#login\n              </a>\n            </td>\n          </tr>\n\n\n            <tr>\n            <td>\n              Android Release\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/user/admin/android_releases">\n                http://www.tinyowl.co.in/user/admin/android_releases\n              </a>\n            </td>\n          </tr>  <tr>\n            <td>\n              Live Order Panel\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/restaurant/order_management">\n                http://www.tinyowl.co.in/restaurant/order_management\n              </a>\n            </td>\n          </tr>  <tr>\n            <td>\n             Order Search\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/restaurant/order_management/search">\n                http://www.tinyowl.co.in/restaurant/order_management/search\n              </a>\n            </td>\n          </tr>  <tr>\n            <td>\n              Order Outbound\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/restaurant/order_management/outbound">\n                http://www.tinyowl.co.in/restaurant/order_management/outbound\n              </a>\n            </td>\n          </tr>  <tr>\n            <td>\n              Order Statistics\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/restaurant/order_management/statistics">\n               http://www.tinyowl.co.in/restaurant/order_management/statistics\n              </a>\n            </td>\n          </tr>  <tr>\n            <td>\n             Data Panel\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/central/app/index.html#restaurants">\n                http://www.tinyowl.co.in/central/app/index.html#restaurants\n              </a>\n            </td>\n          </tr>\n\n            <tr>\n            <td>\n              Locality Panel\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/location/admin/localities">\n                http://www.tinyowl.co.in/location/admin/localities\n              </a>\n            </td>\n          </tr>\n\n            <tr>\n            <td>\n             Offers\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/restaurant/crm/offer/show">\n                http://www.tinyowl.co.in/restaurant/crm/offer/show\n              </a>\n            </td>\n          </tr> \n\n           <tr>\n            <td>\n              Roles\n            </td>\n            <td>\n              <a style = "text-decoration:none" href="/user/roles">\n                http://www.tinyowl.co.in/user/roles\n              </a>\n            </td>\n          </tr>\n        </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n \n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/header.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="navbar-header">\n    <button type="button" class="navbar-toggle hr-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="fa fa-bars"></span>\n    </button>\n\n    <!--logo start-->\n    <div class="brand ">        \n        ';
 var roles = _.collect(window.user.get_roles(), function(x){ return x['name'] });
          if(_.contains(roles, "Outsource Data Entry Agent")){ ;
__p += '\n            <a href="#outsource/agent" class="logo clearfix">\n          ';
 } 
          else if(_.contains(roles, "Outsource Data Entry Head")){ ;
__p += '\n            <a href="#outsource/head" class="logo clearfix">\n          ';
 }
          else{ ;
__p += '\n            <a href="#dashboard" class="logo clearfix">\n          ';
}
        ;
__p += '  \n            <img src="/owl.png" class="img-responsive logo-fix pull-left"/><p>TinyOwl Central</p>\n        </a>\n    </div>\n    <!--logo end-->\n    <div class="horizontal-menu navbar-collapse collapse ">\n        <ul class="nav nav-pills">\n            ';
 if(active_tab != "dashboard"){ ;
__p += '\n            <li ';
 if(active_tab == null){ ;
__p += 'class="active"';
 } ;
__p += '>\n                ';
 if(_.contains(roles, "Outsource Data Entry Agent")){ ;
__p += '\n                    <a href="#outsource/agent">Home</a>\n                  ';
 } 
                  else if(_.contains(roles, "Outsource Data Entry Head")){ ;
__p += '\n                    <a href="#outsource/head">Home</a>\n                  ';
 }
                  else{ ;
__p += '\n                    <a href="#restaurants">Home</a>\n                  ';
}
                ;
__p += '                \n            </li>\n            ';
 } ;
__p += '\n            ';
 if(restaurant_id != undefined && restaurant_id != null) { ;
__p += '\n            <li ';
 if(active_tab == "profile"){ ;
__p += 'class="active"';
 } ;
__p += '>\n              <a href="#restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/profile">\n                Edit Profile\n              </a>\n            </li>\n            <li>\n              <a href="/restaurant/crm/restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/menu_items">\n                Edit Menu\n              </a>\n            </li>\n            <li>\n              <a href="/restaurant/crm/restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/menu_choices">\n                Edit Choices\n              </a>\n            </li>\n            ';
 } ;
__p += '  \n        </ul>\n    </div>\n    <!-- bucketadmin profile dropdown code start -->\n    <div class="top-nav hr-top-nav">\n        <ul class="nav pull-right top-menu">\n          <a href="#faqs" class="btn btn-info btn-sm pull-left" style="margin-right:5px;"><i class="fa fa-info-circle"></i> FAQs </a>\n          \n            <!-- user login dropdown start-->\n            ';
 if(profile != null){ ;
__p += '\n                <li class="dropdown">\n                    <a data-toggle="dropdown" class="dropdown-toggle" href="#" data-bypass>\n                        <!--<img alt="" src="images/avatar1_small.jpg">-->\n                        ';
 if(profile != null){ ;
__p += '\n                            <span class="username">' +
((__t = (profile.name || profile.email)) == null ? '' : __t) +
'</span>\n                        ';
 } ;
__p += '\n                        <b class="caret"></b>\n                    </a>\n                    <ul class="dropdown-menu extended logout">\n                        ';
 if(profile != null){ ;
__p += '\n                            <li><a id="logout"><i class="fa fa-key"></i> Log Out</a></li>\n                        ';
 } ;
__p += '                    \n                    </ul>\n                </li>\n            ';
 }else{ ;
__p += ' \n                <a href="#login" class="btn btn-primary btn-sm pull-left"> Login </a>\n            ';
 } ;
__p += '\n            <!-- user login dropdown end -->\n        </ul>\n    </div>\n    <!-- bucketadmin profile dropdown code end -->\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/invisible_restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n\t<div class="col-lg-12">\n\t\t<section class="panel">\n\t\t    <div class="panel-body"> \n\t\t    \t<section id="alerts"></section>                           \n\t\t        <div class="row">\t\t        \t\n\t\t            <div class="col-lg-2">\n\t\t                <div class="input-group hide">\n\t\t                    <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\n\t\t                    <input type="text" id="filter" class="form-control input-sm" placeholder="type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (meta.search)) == null ? '' : __t) +
'">\n\t\t                </div>\n\t\t                <h4> Invisible Restaurants </h4>\n\t\t            </div>\n\t\t            <div class="col-lg-4">\n\t\t                <a class="btn btn-success btn-sm" href="#restaurants/new"><i class="fa fa-plus-square"></i> Add a new Restaurant</a>\n\t\t                <a class="btn btn-danger btn-sm" href="#restaurants/deleted"><i class="fa fa-file-text"></i> View Deleted </a>\n\t\t            </div>\n\t\t            <span class="pull-right">\n\t\t\t          \t<a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>&nbsp;&nbsp;\n\t\t\t        \t</span>                                \n\t\t        </div>\n\t\t        <hr/>\n\t\t        <div class="row">\t\t            \n\t\t            <p class="lead text-center"><span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
' </p>\n\t\t        </div>&nbsp;\n\t\t        <div class="row">\n\t\t        \t<div class="col-md-12 text-center">\n\t\t        \t\t<ul class="pagination pagination-sm">\n                  <li><a id="1" class="page_number">First</a></li>\n                  <li><a id="previous" class="page_number">«</a></li>\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\n                  ';
 } ;
__p += ' \n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n                  <li><a id="next" class="page_number">»</a></li>\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n                </ul>\n                <h5> 20 Restaurants per page </h5>\n\t\t        \t</div>\n\t\t        </div>\n\t\t        <hr/>\n\t\t        <div class="row">\n\t\t          <div class="col-lg-12">\n\t\t            <table class="table  table-hover general-table">\n\t\t              <thead>\n\t\t                  <tr>\n\t\t                      <th> # </th>\n\t\t                      <th>Name</th>\n\t\t                      <th class="hidden-phone">Last updated</th>\n\t\t                      <th>Status</th>\n\t\t                      <th>Actions</th>\n\t\t                      <th></th>\n\t\t                  </tr>\n\t\t              </thead>\n\t\t              <tbody class="searchable">\n\t\t                ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \n\t\t                  <tr data-locality="' +
((__t = (restaurant.get("locality_id"))) == null ? '' : __t) +
'" data-status="' +
((__t = ( get_status(restaurant.get("status")) )) == null ? '' : __t) +
'" data-call="' +
((__t = (restaurant.get("call_as_user")?'YES':'NO')) == null ? '' : __t) +
'"> \n\t\t                    <td>\n\t\t                      <p class="text-info">\n\t\t                        ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\n\t\t                      </p>\n\t\t                    </td>\n\t\t                    <td>\n\t\t                        <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,25) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\n\t\t                        <p class="text-muted">\n\t\t                          <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\n\t\t                        </p>                                   \n\t\t                    </td>\n\t\t                    <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\n\t                    \t<td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>\t\t  \n\t                    \t<td>                                        \n\t\t\t\t\t\t\t\t\t        <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile" disabled="disabled"><i class="fa fa-edit"></i> Edit</a> \n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" disabled="disabled" target="_blank"><i class="fa fa-list"></i> Menu</a>\n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" disabled="disabled" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>\n\t\t\t\t\t\t\t\t\t        <div class="btn-group">\n\t\t\t\t\t\t\t\t\t            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button" disabled="disabled"> <span class="caret"></span></button>\n\t\t\t\t\t\t\t\t\t            <ul role="menu" class="dropdown-menu">\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\n\t\t\t\t\t\t\t\t\t\t                <li id="copy_restaurant">\n\t\t\t\t\t\t\t\t\t                \t\t<a class="copy_anchor" href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/copy"><i class="fa fa-copy"></i> Copy</a>\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="copy_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t\t                \t</li>\n\t\t\t\t\t\t\t\t\t                ';
 } ;
__p += '\n\t\t\t\t\t\t\t\t                \t<li class="divider"></li>\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")==1){ ;
__p += '\n\t\t\t\t\t\t\t\t\t                \t<li id="delete_restaurant">\n\t\t\t\t\t\t\t\t\t                \t\t<a class="delete_anchor"><i class="fa fa-times"></i> Delete</a>\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="delete_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t\t                \t</li>\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\n\t\t\t\t\t\t\t\t\t                \t<li id="invisible_restaurant">\n\t\t\t\t\t\t\t\t\t                \t\t<a class="invisible_anchor"><i class="fa fa-unlink"></i> Invisible</a>\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="invisible_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n\t\t\t\t\t\t\t\t\t                \t</li>\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\t\t\t\t\t\t\t\t                \n\t\t\t\t\t\t\t\t\t            </ul>\n\t\t\t\t\t\t\t\t\t        </div>                                        \n\t\t\t\t\t\t\t\t\t\t    </td>\t\t\t\t\t\t\t\t\t\t    \n\t\t                    <td>\n\t\t\t\t\t\t\t\t\t\t      <a class="btn btn-success btn-sm restaurant_restore" id="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'"><i class="fa fa-refresh"></i> Restore</a>                                          \n\t\t\t\t\t\t\t\t\t\t    </td>\n\t\t                  </tr>\n\t\t                ';
 }); ;
__p += '                                                 \n\t\t              </tbody>\n\t\t            </table>\t\t            \n\t\t          </div>\n\t\t        </div>\n\t\t        <hr/>\n\t\t        <div class="row">\n\t\t        \t<div class="col-md-12 text-center">\n\t\t        \t\t<ul class="pagination pagination-sm">\n                  <li><a id="1" class="page_number">First</a></li>\n                  <li><a id="previous" class="page_number">«</a></li>\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\n                  ';
 } ;
__p += ' \n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n                  <li><a id="next" class="page_number">»</a></li>\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n                </ul>\n                <h5> 20 Restaurants per page </h5>\n\t\t        \t</div>\n\t\t        </div>\n\t\t        \n\t\t    </div>\n\t\t</section>\n\t</div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/login.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-lg-6 col-lg-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        \n        <div class="login container">\n          <h3>Please login to continue..</h3>\n          </br>\n          <form role="form" class="form-inline" id="login_form">\n            <div class="form-group">\n              <label class="sr-only" for="email">Email address</label>\n              <input type="text" class="form-control" id="email" placeholder="Email/ Phone Number" required>\n            </div>\n            <div class="form-group">\n              <label class="sr-only" for="password">Password</label>\n              <input type="password" class="form-control" id="password" placeholder="Password" required>\n            </div>\n            <!-- <br/><br/>\n            <div class="form-group">\n              <label class="sr-only" for="role">As</label>\n              <select class="form-control" id="role">\n                <option value="outsource_agent">Infinx Agent</option>\n                <option value="outsource_head">Infinx Head</option>\n                <option value="tinyowl">Tinyowl Executive</option>\n              </select>\n            </div>\n            <br/><br/> -->            \n            <button type="submit" class="btn btn-primary login_submit">Submit</button>\n            <br/><br/><br/><br/>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/menu.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!--<div class="row">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">-->\n        <div id="alert_restaurant_off" class="alert alert-danger alert-fix" ';
 if(get_status(restaurant.get('status')) != 'INACTIVE'){ ;
__p += 'style="display:none;"';
 } ;
__p += ' style="position:fixed; top:80px;width:100%; z-index:10000000">\n            <p style="text-align:center;">\n                ' +
((__t = ( restaurant.get('name') )) == null ? '' : __t) +
' is <strong>' +
((__t = ( get_status(restaurant.get('status')) )) == null ? '' : __t) +
'</strong> now.\n            </p>\n        </div>\n      <!--</div>\n    </div>\n  </div>\n</div>-->\n<div class="row">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">\n        <h2>' +
((__t = ( restaurant.get('name') )) == null ? '' : __t) +
' -> Menu Items\n        <div id="cache_rebuild_blk" class="col-md-4 col-md-offset-3 pull-right" style="margin-bottom: 14px;">\n            <button type="button" style="font-size: 16px; margin-left: 16px; width: 60%;" class="rebuild_cache btn btn-danger btn-lg pull-right">Validate Menu</button>\n            <button id="activate_restaurant" style="font-size: 16px; display: none;" type="button" class="btn btn-success btn-lg pull-right">Activate</button>\n        </div>\n        </h2>\n\n\n        <div id="menu_categories">\n        </div>\n\n        <div id="menu_items">\n        </div>\n\n        <div id="add_item_modal">\n        </div>\n\n        <div id="edit_menu_category_modal">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/menu_category.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-md-7">\n    <!-- column for categories displaying -->\n    <div class="well">\n        <h3 style="text-align:center;" class="root_drop">Menu Categories</h3>\n\n        <div class="row">\n        <span class="col-md-3">\n            Category Count : \n        </span>\n        <span class="col-md-3">\n            <input id="category_count" value="' +
((__t = ( restaurant.get('category_count') )) == null ? '' : __t) +
'" class="form-control" />\n        </span>\n        <span>\n            <input type="submit" value="Save" class="btn btn-primary" id="save_category_count"/>\n        </span>\n    </div>\n    <br/>\n        <!-- menu category status notification -->\n        <div style="position: absolute; left: 50%;">\n            <div style="position: relative; left: -50%;">\n                <div id="category_status_notification"></div>\n            </div>\n        </div>\n\n        <form id="categories_form">\n            <button class="add_category btn btn-primary btn-sm">Add Category</button>&nbsp;\n            <button class="btn btn-primary edit_priority">Edit Order</button>&nbsp;\n            <button class="save_priority btn btn-primary btn-sm" style="display: none;">Save Order</button>\n            <button class="merge_category btn btn-primary">Merge Categories</button>&nbsp;\n            <!--\n            <button class="rebuild_cache btn btn-info btn-sm" style="margin-left: 10px;">Rebuild Cache</button>\n            -->\n            <!-- for saving the structure -->\n            <button class="save_categories btn btn-primary btn-sm pull-right">Save Menu Structure</button>\n            <!-- end -->\n            <table id="menu">\n              ';
 _.each(menu_categories, function(menu_category, i) { ;
__p += '\n              <tr data-t-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'" ';
 if(menu_category.get('parent_id') != null) {;
__p += 'data-p-id="' +
((__t = ( menu_category.get('parent_id') )) == null ? '' : __t) +
'"';
 } ;
__p += '>\n                <td colspan="2">\n                  ' +
((__t = ( menu_category.get('name') )) == null ? '' : __t) +
'\n                </td>\n\n                <td>\n                  <button type="button" title="Delete" class="delete_category btn btn-danger pull-right" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'" title="Delete this" style="margin-left: 6px;">\n                    <i class="fa fa-times"></i>\n                  </button>\n                  <!-- status checkbox -->\n                  <input type="checkbox" data-on="success" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'" data-off="warning" class="category_status switch-mini" name="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'"\n                  ';
 if(menu_category.get('status') == 2) { ;
__p += '\n                    checked\n                  ';
 } ;
__p += '>\n                  \n                  <button class="edit_category btn btn-info" title="Edit Description" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'">\n                    <i class="fa fa-pencil-square-o"></i>\n                  </button>\n                  \n                  \n                  <button class="add_subcategory btn btn-default" title="Add SubCategory" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'">\n                    <i class="fa fa-plus"></i>\n                  </button>\n\n                  <button class="list_items btn btn-info" title="List Items" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'">\n                    <i class="fa fa-list-ul"></i>\n                  </button>\n                \n                  <button class="update_category btn btn-primary" title="Save" style="display:none;" data-category-id="' +
((__t = ( menu_category.get('id') )) == null ? '' : __t) +
'">Save</button>\n                </td>\n              </tr>\n\n            ';
 }); ;
__p += '\n\n            </table>\n        </form>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/menu_item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-md-5">\n        <!-- colum for viewing/ adding items -->\n        <div class="well">\n            <h3 style="text-align: center;">Menu Items\n            <span id="menu_category_title"></span>\n            </h3>\n\n            <div style="text-align:center;" id="blank_items_message">\n                <h5 style="margin-top: 30px; line-height:180%; font-weight:bold;">Please select a Menu Category by clicking on <button class="btn btn-info" title="List Items"><i class="fa fa-list-ul"></i></button> in the front of the Category name.</h5>\n            </div>\n\n            <!-- items status notification -->\n            <div style="position: absolute; left: 50%;">\n                <div style="position: relative; left: -50%;">\n                    <div id="item_status_notification"></div>\n                </div>\n            </div>\n\n            \n\n            <form id="menu_items">\n                <button class=\'add_item btn btn-primary btn-sm\' style="margin-bottom: 15px;">Add Item</button>\n                ';
 if(menu_items.length != 0) { ;
__p += '\n                    <span class="pull-right">(<span id="item_count">' +
((__t = ( menu_items.length )) == null ? '' : __t) +
'</span>)</span>\n                    <table id="items" style="width: 100%; background-color: #fff;"  >\n                      ';
 _.each(menu_items, function(item, i){ ;
__p += '\n                        ' +
((__t = ( partial("partials_item", {item: item}) )) == null ? '' : __t) +
'\n                      ';
 }); ;
__p += '\n                    </table>\n                ';
 } else { ;
__p += '\n                    <div id="empty_items">\n                        <h4 style="text-align:center;">This category has no items! please add some</h4>\n                    </div>\n                ';
 } ;
__p += '\n            </form>\n            \n        </div>\n    </div>\n</div>\n\n' +
((__t = ( partial("partials_item_disable_modal", {}) )) == null ? '' : __t);

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/miscellaneous.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n<div class="row">\n\n  ' +
((__t = ( partial('partials_sidebar', {
    id: miscellaneous.get("id"),
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n  \n  <!-- form component -->\n  <div class="col-xs-12 col-sm-10 col-lg-10 profile-adjust pull-right">\n\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section> \n      <h2 class="to_center">Edit: Miscellaneous</h2>\n      <hr>\n      <div class="row">\n\n        <form class="form-horizontal" id="" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( miscellaneous.get('id') )) == null ? '' : __t) +
'" name="restaurant_id">\n\t          \n            ' +
((__t = ( partial('partials_markupText', {
	            id: "cost_for_two",
	            placeholder: "Cost for two",
	            label: "Cost for two",
	            name: "cost_for_two",
	            value: miscellaneous.get("cost_for_two"),
	            required: false	           
	          }) )) == null ? '' : __t) +
'\n\n\t          <div class="form-group">\n              <label for="restaurant_suggestion_ids" class="col-md-4 control-label">Restaurant Suggestions</label>\n              <div class="col-md-8">\n              <select multiple name="restaurant_suggestion_ids" id="restaurant_suggestion_ids">\n              ';
 _.each(miscellaneous.get("restaurant_suggestion_collection"), function(suggestion) { ;
__p += '\n                <option ';
if (check_element_exists(miscellaneous.get("restaurant_suggestion_ids"), suggestion.id)) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( suggestion.id )) == null ? '' : __t) +
'">' +
((__t = ( suggestion.name )) == null ? '' : __t) +
'</option>\n              ';
 }) ;
__p += '\n              </select>\n              </div>\n            </div>  \n\n            <div class="form-group">\n\t            <label for="cuisine_ids" class="col-md-4 control-label">Cuisines</label>\n\t            <div class="col-md-8">\n\t            <select multiple name="cuisine_ids" id="cuisine_ids">\n\t            ';
 _.each(collections.cuisines, function(cuisine) { ;
__p += '\n\t              <option ';
if (check_element_exists(miscellaneous.get("cuisine_ids"), cuisine[1])) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( cuisine[1] )) == null ? '' : __t) +
'">' +
((__t = ( cuisine[0] )) == null ? '' : __t) +
'</option>\n\t            ';
 }) ;
__p += '\n\t            </select>\n\t            </div>\n\t          </div>\t     \n\n\t          <div class="form-group">\n              <label class="col-sm-4 control-label col-md-4" for="breakfast_rating">Breakfast Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="breakfast">\n                  ';
 for(i=1; i<=miscellaneous.get("breakfast_rating"); i++){;
__p += '\n                  \t<span class="fa fa-star rated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  ';
 for(i=i; i<=10; i++){;
__p += '\n                  \t<span class="fa fa-star-o unrated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  <input type="hidden" name="breakfast_rating" class="rating-value" value="' +
((__t = (miscellaneous.get("breakfast_rating"))) == null ? '' : __t) +
'">\n                  <label class="label label-success label-sm pull-right" id="rating-label" name="breakfast_rating" value="' +
((__t = (miscellaneous.get("breakfast_rating"))) == null ? '' : __t) +
'"> ' +
((__t = (miscellaneous.get("breakfast_rating")?miscellaneous.get("breakfast_rating"):"0")) == null ? '' : __t) +
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class="form-group">\n              <label class="col-sm-4 control-label col-md-4" for="lunch_rating">Lunch Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="lunch">\n                  ';
 for(i=1; i<=miscellaneous.get("lunch_rating"); i++){;
__p += '\n                  \t<span class="fa fa-star rated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  ';
 for(i=i; i<=10; i++){;
__p += '\n                  \t<span class="fa fa-star-o unrated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  <input type="hidden" name="lunch_rating" class="rating-value" value="' +
((__t = (miscellaneous.get("lunch_rating"))) == null ? '' : __t) +
'">\n                  <label class="label label-success label-sm pull-right" id="rating-label" name="lunch_rating" value="' +
((__t = (miscellaneous.get("lunch_rating"))) == null ? '' : __t) +
'"> ' +
((__t = (miscellaneous.get("lunch_rating")?miscellaneous.get("lunch_rating"):"0")) == null ? '' : __t) +
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class="form-group">\n              <label class="col-sm-4 control-label col-md-4" for="snacks_rating">Snacks Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="snacks">\n                  ';
 for(i=1; i<=miscellaneous.get("snacks_rating"); i++){;
__p += '\n                  \t<span class="fa fa-star rated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  ';
 for(i=i; i<=10; i++){;
__p += '\n                  \t<span class="fa fa-star-o unrated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  <input type="hidden" name="snacks_rating" class="rating-value" value="' +
((__t = (miscellaneous.get("snacks_rating"))) == null ? '' : __t) +
'">\n                  <label class="label label-success label-sm pull-right" id="rating-label" name="snacks_rating" value="' +
((__t = (miscellaneous.get("snacks_rating"))) == null ? '' : __t) +
'"> ' +
((__t = (miscellaneous.get("snacks_rating")?miscellaneous.get("snacks_rating"):"0")) == null ? '' : __t) +
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class="form-group">\n              <label class="col-sm-4 control-label col-md-4" for="dinner_rating">Dinner Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="dinner">\n                  ';
 for(i=1; i<=miscellaneous.get("dinner_rating"); i++){;
__p += '\n                  \t<span class="fa fa-star rated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  ';
 for(i=i; i<=10; i++){;
__p += '\n                  \t<span class="fa fa-star-o unrated" data-rating="' +
((__t = (i)) == null ? '' : __t) +
'"></span>\n                  ';
};
__p += '\n                  <input type="hidden" name="dinner_rating" class="rating-value" value="' +
((__t = (miscellaneous.get("dinner_rating"))) == null ? '' : __t) +
'">\n                  <label class="label label-success label-sm pull-right" id="rating-label" name="dinner_rating" value="' +
((__t = (miscellaneous.get("dinner_rating"))) == null ? '' : __t) +
'"> ' +
((__t = (miscellaneous.get("dinner_rating")?miscellaneous.get("dinner_rating"):"0")) == null ? '' : __t) +
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\t          \t\t\t\t\t  \n\n          \t<div class="form-group">\n\t\t\t\t\t\t\t<label for="comments" class="col-md-4 control-label">Comments</label>\n\t\t\t\t\t\t\t<div class="col-md-6">\n\t\t\t\t\t\t\t  <textarea col="30" rows="3" class="form-control" name="comments" id="comments" placeholder="Comments">' +
((__t = ( miscellaneous.get("comments") )) == null ? '' : __t) +
'</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\t            \t\t\t\t\n\n\t          <div class="submit_div">\n\t            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_misc">\n\t          </div>\n            <br/><br/><br/>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/office_document.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n<div class="row">\n\n  ' +
((__t = ( partial('partials_sidebar', {
    id: office_document.get("id"),
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n\n  <!-- form component -->\n  <div class="col-xs-12 col-sm-10 col-lg-10 profile-adjust pull-right">\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></secti on>                           \n      <h2 class="to_center">Edit: Office Document</h2>\n      <hr>\n      <div class="row">\n        <form accept-charset="UTF-8" class="form-horizontal" method="post" enctype="multipart/form-data" id="office_document_form">\n          <div class="quick-save pull-right">\n            <button type="submit" class="btn btn-success btn-sm affix" value="Save Changes" id="save_changes_office"><i class="fa fa-save"></i> Quick Save </button>\n          </div>\n          <input type="hidden" value="' +
((__t = ( office_document.get('id') )) == null ? '' : __t) +
'" name="restaurant_id">\n\n          <h3 class="to_center">Address of the Restaurant</h3>\n\n          <!-- render the text type for: block_info -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "block_info",
            placeholder: "Outlet/ Block number",
            label: "Outlet/ Block number",
            name: "block_info",
            value: office_document.get('block_info'),
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: building -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "building",
            placeholder: "Building name",
            label: "Building name",
            name: "building",
            value: office_document.get('building'),
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <div class="form-group">\n            <label for="locality_id" class="col-md-4 control-label">Area</label>\n            <div class="col-md-8">\n            <select name="locality_id" id="locality_id">\n            <option disabled selected></option>\n            ';
 _.each(collections.localities, function(locality) { ;
__p += '\n              <option ';
 if (locality.id == office_document.get("locality_id")) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( locality.id )) == null ? '' : __t) +
'">' +
((__t = ( locality.name )) == null ? '' : __t) +
'</option>\n            ';
 }) ;
__p += '\n            </select>\n            </div>\n          </div>\n\n          <!-- render the text type for: latitude -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "latitude",
            placeholder: "Latitude",
            label: "Latitude",
            name: "latitude",
            value: office_document.get('latitude'),
            pattern: "-?\\d{1,3}\\.\\d+",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: longitude -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "longitude",
            placeholder: "Longitude",
            label: "Longitude",
            name: "longitude",
            value: office_document.get('longitude'),
            pattern: "-?\\d{1,3}\\.\\d+",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: longitude -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "pin_code",
            placeholder: "Pin Code",
            label: "Pin Code",
            name: "pin_code",
            value: office_document.get('pin_code'),
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n\n          <!-- Phone numbers for phone_numbers -->\n          <h4 class="to_center">Restaurant Contact Nos.</h4>\n          <input type="hidden" name="phone_numbers_count" value="' +
((__t = (office_document.get('phone_numbers').length)) == null ? '' : __t) +
'"\n          \n          <hr>\n          ';
 _.each(office_document.get('phone_numbers'), function(phone_number, i) { ;
__p += '\n            ' +
((__t = ( 
              partial('partials_contactNumber', {
                id: phone_number._id,
                markup_hidden_name: "phone_numbers_" + i + "_id",
                markup_hidden_index: "phone_numbers_" + i,
                markup_select_name: "phone_numbers_" + i + "_number_type",
                markup_input_name: "phone_numbers_" + i + "_number",
                markup_to_delete: "phone_numbers_" + i + "_delete",
                i: i,
                number: phone_number.number,
                contact_number_types: collections.contact_number_types,
                number_type: phone_number.number_type
              })
            )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n\n          <button type="button" class="btn btn-info btn-sm add_new_number">Add new Phone Number</button>\n\n          <hr>\n          <div class="form-group">\n            <label for="next_menu_update" class="col-md-4 control-label">Next Menu Update</label>\n            <div class="col-md-8">\n              <select name="next_menu_update" class="form-inline-element input-sm" id="next_menu_update">\n                  <option disabled selected>none</option>\n                ';
 _.each(collections.months, function(i,month) {;
__p += '\n                  <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(office_document.get("next_menu_update") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' > ' +
((__t = ( month)) == null ? '' : __t) +
'</option>\n                ';
 }) ;
__p += '\n              </select>\n            </div>\n          </div>\n          <!-- markup for: veg_type -->\n          ' +
((__t = ( partial("partials_markupSelect", {
            id: "veg_type",
            placeholder: "Type of Restaurant",
            label: "Type of Restaurant",
            name: "veg_type",
            value: office_document.get("veg_type"),
            required: false,
            collection: collections.dish_types
          }) )) == null ? '' : __t) +
'\n\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="automatically_confirm_after_place">Automatically confirm order after placing</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="automatically_confirm_after_place" ';
 if(office_document.get("automatically_confirm_after_place")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="call_as_user">Call as User</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="call_as_user" ';
 if(office_document.get("call_as_user")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="tied_up">Tied up?</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="tied_up" ';
 if(office_document.get("tied_up")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="has_delivery">Has delivery: </label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="has_delivery" ';
 if(office_document.get("has_delivery")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <!-- markup for: jain_food_available -->\n          ' +
((__t = ( partial("partials_markupSelect", {
            id: "jain_food_available",
            placeholder: "Yes/ No",
            label: "Is Jain food available?",
            name: "jain_food_available",
            value: office_document.get("jain_food_available"),
            required: false,
            collection: collections.boolean
          }) )) == null ? '' : __t) +
'\n          <hr/>\n\n          <!-- Phone numbers for phone_numbers -->\n                             \n           \n          \n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_office">\n          </div>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/outsource_agent.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-xs-12">\n    <section class="panel">\n      <div class="panel-body">\n        <h3>Restaurants</h3>\n        <hr/>\n        <div class="row">\n          <div class="col-xs-10">\n            <div class="input-group">\n              <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\n              <input type="text" id="filter" class="form-control input-sm" placeholder="type here..." autocomplete="off">\n            </div>\n          </div>\n            <div class="col-xs-2 pull-right">\n              <a class="btn btn-success btn-sm" href="#/outsource/new"><i class="fa fa-plus-square"></i> Add a new Restaurant</a>\n            </div>                                \n        </div>\n        <hr/>\n        <div class="row">\n          <div class="col-xs-12">\n            <table class="table  table-hover general-table">\n              <thead>\n                  <tr>\n                      <th> # </th>\n                      <th>Name</th>\n                      <th class="hidden-phone">Last updated</th>\n                      <th>Status</th>\n                      <th>Actions</th>\n                      <th></th>\n                  </tr>\n              </thead>\n              <tbody class="searchable">\n                ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \n                  <tr>\n                    <td>\n                      <p class="text-info">\n                        ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\n                      </p>\n                    </td>\n                    <td>\n                        <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,25) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\n                        <p class="text-muted">\n                          <i class="fa fa-map-marker" style="color:#fa8564"></i> ';
 if(get_locality(restaurant.get("locality_id"))){;
__p +=
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t);
}else{;
__p +=
((__t = ( "Could not fetch location")) == null ? '' : __t);
} ;
__p += '\n                        </p>                                    \n                    </td>\n                    <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\n                    <td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>\n                    <td>                                        \n                      <a class="btn btn-primary btn-sm" href="#/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/profile"><i class="fa fa-edit"></i> Edit</a> \n                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" target="_blank"><i class="fa fa-list"></i> Menu</a>\n                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>                                                                                                          \n                    </td>\n                    <td>\n                      ';
 if(get_status(restaurant.get('status')) != 'SUBMITTED') { ;
__p += '\n                        <a class="btn btn-info btn-sm submit" href="javascript:void(0)" target="_blank" id="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'">Submit</a>\n                      ';
 } ;
__p += '                        \n                      ';
 if(get_status(restaurant.get('status')) == 'DIFF_ERROR') { ;
__p += '\n                        <a class="btn btn-info btn-sm diff" href="/restaurant/data_entry/diff?id1=' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'&id2=' +
((__t = ( restaurant.get('diff_restaurant_id') )) == null ? '' : __t) +
'" target="_blank">Error Report</a>\n                      ';
 } ;
__p += '                                                      \n                    </td>\n                  </tr>\n                ';
 }); ;
__p += '                                                 \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/outsource_head.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-xs-12">\n    <div class="panel">\n      <div class="panel-body">\n        <h2 class="to_center">Assignments to Agents        \n        </h2>\n        <hr/>\n        <div class="input-group input-group-sm">\n          <span class="input-group-addon btn-primary">Filter</span>\n          <input id="filter" type="text" class="form-control" placeholder="Type here..." value="' +
((__t = (meta.query)) == null ? '' : __t) +
'">\n        </div>\n        <br />\n        <div class="row">             \n          <div class="col-sm-12 text-center">\n            <p class="lead stats">\n              <span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
'</span>                \n            </p>\n            <ul class="pagination pagination-sm">\n              <li><a id="1" class="page_number">First</a></li>\n              <li><a id="previous" class="page_number">«</a></li>\n              ';
 var page_num = meta.page?meta.page:1;
                for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \n              ';
 } ;
__p += ' \n              ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n              <li><a id="next" class="page_number">»</a></li>\n              <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n              <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n              <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n            </ul>\n            <h5> 20 Restaurants per page </h5>\n          </div>\n        </div>\n        <div class="row">\n          <div class="col-xs-12">\n            <table class="table general-table" id="index_table">        \n              <thead>\n                  <tr>\n                      <th> # </th>\n                      <th>Name</th>\n                      <th>Agent(s)</th>\n                      <th>Actions</th>\n                  </tr>\n              </thead>\n              <tbody class="searchable">\n                ';
 _.each(restaurants, function(restaurant) { ;
__p += '\n                  <tr class="';
 if(restaurant.get("diff_count") > 1) { ;
__p += 'second_diff';
 } ;
__p += '">\n                    <td>  \n                      ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\n                    </td>\n                    <td>\n                      <p class="lead">' +
((__t = ( restaurant.get("restaurant_name") )) == null ? '' : __t) +
'\n                      <span class="small"># Diff till now : ' +
((__t = ( restaurant.get("diff_count") )) == null ? '' : __t) +
'</span></p>\n                    </td>\n                    <td>\n                      <div class="agents">\n                        <form id="diff_' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">\n                        ';
 _.each(restaurant.get("agents"), function(agent) { ;
__p += '\n                          ' +
((__t = ( get_status_span(agent.status) )) == null ? '' : __t) +
'&nbsp;&nbsp;                            \n                          <i class="fa fa-user"></i>&nbsp; ' +
((__t = ( agent.name )) == null ? '' : __t) +
'&nbsp;&nbsp;&nbsp;                            \n                          <input type="checkbox" value="' +
((__t = ( agent.restaurant_id )) == null ? '' : __t) +
'" id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'_' +
((__t = ( agent.restaurant_id )) == null ? '' : __t) +
'">\n                          <br/><br/>\n                        ';
 }) ;
__p += '\n                        </form>\n                      </div>\n                    </td>\n                    <td>\n                      <p class="">\n                        <a class="btn btn-primary btn-sm diff" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Diff</a>\n                        &nbsp;\n                        <a class="btn btn-success btn-sm activate" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Completed</a>\n                        &nbsp;\n                        <a class="btn btn-success btn-sm send_diff" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Send Diff Report</a>\n                        &nbsp;\n                        ';
 if(window.user.get_company().toLowerCase() == "tinyowl") { ;
__p += '\n                        <a class="btn btn-success btn-sm export" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Export</a>\n                        &nbsp;\n                        ';
 } ;
__p += '\n                        <!-- <a class="btn btn-info" href="#/assignments/' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Edit</a> -->\n                      </p>\n                    </td>\n                  </tr>\n                ';
 }) ;
__p += '\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class="row">             \n          <div class="col-sm-12 text-center">\n            <p class="lead stats">\n              <span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
'</span>                \n            </p>\n            <ul class="pagination pagination-sm">\n              <li><a id="1" class="page_number">First</a></li>\n              <li><a id="previous" class="page_number">«</a></li>\n              ';
 var page_num = meta.page?meta.page:1;
                for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \n              ';
 } ;
__p += ' \n              ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n              <li><a id="next" class="page_number">»</a></li>\n              <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n              <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n              <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n            </ul>\n            <h5> 20 Restaurants per page </h5>\n          </div>\n        </div>\n      </div>\n    </div>    \n  </div>\n\n</div><!-- end row -->\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/restaurant_form.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n<div class="row">\n  ' +
((__t = ( partial('partials_sidebar', {
    id: restaurant.get("id"),
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n\n  <!-- form component -->\n  <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>                           \n        <h3 class="to_center">Edit: ' +
((__t = ( restaurant.get('name') )) == null ? '' : __t) +
'</h3>\n        <hr>\n        <div class="row">\n        <form accept-charset="UTF-8" class="form-horizontal" method="post" enctype="multipart/form-data">\n          <div class="quick-save pull-right">\n            <button type="submit" class="btn btn-success btn-sm affix" value="Save Changes" id="save_changes"><i class="fa fa-save"></i> Quick Save </button>\n          </div>\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id">\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "form_id",
            placeholder: "Form Id",
            label: "Form Id",
            name: "form_id",
            value: restaurant ? restaurant.get('form_id') : "",
            required: true,
            pattern : "(.)*[\\-](.)*",
            title : "Should contain hypen (-) , Will be something like MA-213"
          }) )) == null ? '' : __t) +
'\n\n\n          <!-- render the text type for: name -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "data_collection_guy_name",
            placeholder: "Data Collection Guy",
            label: "Data Collection Guy",
            name: "data_collection_guy_name",
            value: restaurant ? restaurant.get('data_collection_guy_name') : "",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: name -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "name",
            placeholder: "Name of the Restaurant",
            label: "Name of the Restaurant",
            name: "name",
            value: restaurant ? restaurant.get('name') : "",
            required: true
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n\n          <!-- manager edit partial -->\n          ' +
((__t = ( partial('partials_manager', {
            whois: "manager",
            options: restaurant.get('manager'),
            contact_number_types: collections.contact_number_types
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n\n          <!-- manager edit partial -->\n          ' +
((__t = ( partial('partials_manager', {
            whois: "owner",
            options: restaurant.get('owner'),
            contact_number_types: collections.contact_number_types
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n\n          <!-- manager edit partial -->\n          ' +
((__t = ( partial('partials_manager', {
            whois: "general_manager",
            options: restaurant.get('general_manager'),
            contact_number_types: collections.contact_number_types
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n\n          <!-- Phone numbers for sms -->\n          <h4 class="to_center">Mobile  number  for order forwarding by  SMS</h4>\n\n          <input type="hidden" name="phone_numbers_for_sms_contact_numbers_count" value="' +
((__t = ( restaurant.get('phone_numbers_for_sms').length )) == null ? '' : __t) +
'">\n\n          <hr>\n          ';
 _.each(restaurant.get('phone_numbers_for_sms'), function(phone_number, i) { ;
__p += '\n            ' +
((__t = ( 
              partial('partials_contactNumber', {
                id: phone_number._id,
                markup_hidden_name: "phone_numbers_for_sms_contact_numbers_" + i + "_id",
                markup_hidden_index: "phone_numbers_for_sms_contact_numbers_" + i,
                markup_select_name: "phone_numbers_for_sms_contact_numbers_" + i + "_number_type",
                markup_input_name: "phone_numbers_for_sms_contact_numbers_" + i + "_number",
                markup_to_delete: "phone_numbers_for_sms_contact_numbers_" + i + "_delete",
                i: i,
                number: phone_number.number,
                contact_number_types: collections.contact_number_types,
                number_type: phone_number.number_type
              })
            )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n\n          <button type="button" class="btn btn-info btn-sm add_new_number_sms">Add new Phone Number</button>\n\n          <hr>\n          \n          <div class="form-group">\n            <label for="email" class="col-md-4 control-label">Email ID(s) for order forwarding</label>\n            <div class="col-md-6">\n              <input type="text" class="form-control input-sm" name="email" id="email" placeholder="Email..." value="' +
((__t = (restaurant.get('email'))) == null ? '' : __t) +
'" autocomplete="off"> \n            </div>\n          </div>\n          <div class="form-group">\n            <label for="orders_per_day" class="col-md-4 control-label">No. Of  Orders  Per day (Average)</label>\n            <div class="col-md-6">\n              <input type="number" class="form-control input-sm" name="orders_per_day" id="orders_per_day" placeholder="Orders per day" value="' +
((__t = (restaurant.get('orders_per_day'))) == null ? '' : __t) +
'" autocomplete="off"> \n            </div>\n          </div>\n\n          <hr>\n\n          <!-- custom markup: since Jquery plugin breaks the partial -->\n          <div class="form-group">\n            <label for="closed_timing_ids" class="col-md-4 control-label">Closed Timings</label>\n            <div class="col-md-8">\n            <select multiple name="closed_timing_ids" id="closed_timing_ids">\n            ';
 _.each(collections.closed_timings, function(timing) { ;
__p += '\n              <option ';
 if (check_element_exists(restaurant.get("closed_timing_ids"), timing[1])) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( timing[1] )) == null ? '' : __t) +
'">' +
((__t = ( timing[0] )) == null ? '' : __t) +
'</option>\n            ';
 }) ;
__p += '\n            </select>\n            </div>\n          </div>\n          <div class="form-group">\n            <label for="delivery_boys_vehicle" class="col-md-4 control-label">Delivery  boys vehicle</label>\n            <div class="col-md-2">\n              <select class="form-control input-sm" name="delivery_boys_vehicle" id="delivery_boys_vehicle">\n              ';
 _.each(collections.delivery_boys_vehicle, function(i,vehicle) { ;
__p += '\n                <option ';
 if (restaurant.get("delivery_boys_vehicle") == i) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( i )) == null ? '' : __t) +
'">' +
((__t = ( vehicle )) == null ? '' : __t) +
'</option>\n              ';
 }) ;
__p += '\n              </select>\n            </div>\n          </div>\n          <hr>\n          <h2 class="to_center">Extra Charges</h2>\n          <hr>\n          <!-- render the text type for: packaging_charges -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "packaging_charges",
            placeholder: "Packaging Charges",
            label: "Packaging Charges (in Rs.)",
            name: "packaging_charges",
            value: restaurant.get('packaging_charges')?restaurant.get('packaging_charges'):"0",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: service_tax -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "service_tax",
            placeholder: "Service Tax",
            label: "Service Tax (in %)",
            value: restaurant.get('service_tax')?restaurant.get('service_tax'):"0",
            name: "service_tax",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: service_tax_percent_of_bill -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "service_tax_percent_of_bill",
            placeholder: "Service Tax On % of Bill",
            label: "Service Tax On % of Bill",
            value: restaurant.get('service_tax_percent_of_bill')?restaurant.get('service_tax_percent_of_bill'):"0",
            name: "service_tax_percent_of_bill",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: service_tax_percent_of_bill -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "vat",
            placeholder: "Vat",
            label: "VAT (in %)",
            value: restaurant.get('vat')?restaurant.get('vat'):"0",
            name: "vat",
            required: false
          }) )) == null ? '' : __t) +
'\n\n\n          <!-- render the text type for: service_charges -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "service_charges",
            placeholder: "Service Charges",
            label: "Service Charges (in %)",
            value: restaurant.get('service_charges')?restaurant.get('service_charges'):"0",
            name: "service_charges",
            required: false
          }) )) == null ? '' : __t) +
'\n        <hr>\n\n        <div class="submit_div">\n          <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes">\n        </div>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row" id="filters_affix">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body" style="padding-bottom:0px;">                        \n        <div class="row">             \n          <div class="col-sm-6 col-md-7 col-lg-8">\n              <div class="input-group">\n                  <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\n                  <input type="text" id="filter" class="form-control input-sm" placeholder="type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (get_url_parameter("search"))) == null ? '' : __t) +
'">\n              </div>\n          </div>\n          <div class="col-sm-6 col-md-5 col-lg-4">\n              <a class="btn btn-success btn-sm" href="#restaurants/new"><i class="fa fa-plus-square"></i> Add a new Restaurant</a>\n              <a class="btn btn-danger btn-sm" href="#restaurants/deleted"><i class="fa fa-file-text"></i> View Deleted </a>\n              <a class="btn btn-info btn-sm" href="#restaurants/invisible"><i class="fa fa-file-text"></i> View Invisible </a>\n          </div>                                \n        </div>\n        <hr id="filters_rule"/>\n        <div class="row">\n            <!--<div class="col-sm-12" id="filters_heading"><h4>Filter by:</h4></div>-->                \n            <div class="col-sm-2 ">\n                <!--<div class="input-group input-group-sm m-bot15">\n                    <span class="input-group-addon btn-primary"><i class="fa fa-location-arrow"></i></span>-->\n                    <input type="text" class="form-control input-sm typeahead" id="locality" placeholder="locality" autocomplete="off" data-toggle="tooltip" data-placement="top" title="Locality" value="' +
((__t = (get_url_parameter("locality_id")?get_locality(get_url_parameter("locality_id")):'')) == null ? '' : __t) +
'">\n                <!--</div>-->\n            </div>\n            <div class="col-sm-2">                                    \n                <div class="input-group input-group-sm">\n                    <span class="input-group-addon btn-primary"><i class="fa fa-exclamation-circle"></i> Status</span>\n                    <select class="form-control" id="status_filter">\n                        <option value="-1" selected> All </option>                            \n                        ';
 _.each(collections.status,function(i,stat,j){;
__p += '\n                          ';
if(i<4 || i==11){;
__p += '\n                            <option value="' +
((__t = (i)) == null ? '' : __t) +
'" ';
if(get_url_parameter("status")==i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
 } ;
__p += '>' +
((__t = (stat)) == null ? '' : __t) +
'</option>\n                          ';
 } ;
__p += '\n                        ';
});;
__p += '\n                    </select>\n                </div>\n            </div>\n            <div class="col-sm-2">\n                <div class="input-group input-group-sm">\n                    <span class="input-group-addon btn-primary"><i class="fa fa-phone"></i> Call as a user</span>\n                    <select class="form-control" id="call_as_user_filter">\n                        <option value="YES" ';
if(get_url_parameter("call_as_user") == "true"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>YES</option>\n                        <option value="NO" ';
if(get_url_parameter("call_as_user") =="false"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>NO</option>\n                        <option value="-1" ';
if(get_url_parameter("call_as_user") == null){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>Both</option>                                           \n                    </select>\n                </div>\n            </div>\n            <div class="col-sm-2 ">\n                    <!--<span class="input-group-addon btn-primary"><i class="fa fa-location-arrow"></i></span>-->\n                    <input type="text" class="form-control input-sm typeahead" id="delivers_in" placeholder="delivers in" autocomplete="off" data-toggle="tooltip" data-placement="top" title="Delivers in" value="' +
((__t = (get_url_parameter("delivers_in")?get_locality_group(get_url_parameter("delivers_in")):'')) == null ? '' : __t) +
'">\n            </div>\n            <div class="col-sm-2">\n                <div class="input-group input-group-sm">\n                    <span class="input-group-addon btn-primary"><i class="fa fa-picture-o"></i> Has Logo?</span>\n                    <select class="form-control" id="has_logo_filter">\n                        <option value="YES" ';
if(get_url_parameter("has_logo") == "true"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>YES</option>\n                        <option value="NO" ';
if(get_url_parameter("has_logo") =="false"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>NO</option>\n                        <option value="-1" ';
if(get_url_parameter("has_logo") == null){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>Both</option>                                           \n                    </select>\n                </div>\n            </div>\n            \n            <div class="col-sm-1">\n                <button class="btn btn-primary btn-sm" id="clear_filters"><i class="fa fa-times"></i> Clear Filers</button>\n            </div>\n            <div class="col-sm-1">\n                <button class="btn btn-info btn-sm" id="dump"><i class="fa fa-download"></i> Dump</button>\n            </div>\n            <div id="dump_content" class="col-sm-5 hidden">\n              <h3 class="text-center" style="margin-top:10px;margin-bottom:10px;">\n                <i class="fa fa-file-text-o"></i> Dump\n              </h3>\n              <hr/>\n              <div class="row">\n                <div class="col-sm-8 text-center">\n                  <p>Address:</p> \n                </div>\n                <div class="col-sm-4">\n                  <input type="checkbox" id="address" checked>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-8 text-center">\n                  <p>Contact Details:</p> \n                </div>\n                <div class="col-sm-4">\n                  <input type="checkbox" id="contact_info" checked>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-8 text-center">\n                  <p>Payment Details:</p> \n                </div>\n                <div class="col-sm-4">\n                  <input type="checkbox" id="payment_details" checked>\n                </div>\n              </div>\n              <div class="row">\n                <div class="col-sm-8 text-center">\n                  <p>Other Info:</p> \n                </div>\n                <div class="col-sm-4">\n                  <input type="checkbox" id="other_info" checked>\n                </div>\n              </div>\n              <hr/>\n              <div class="text-center">\n                <button class="btn btn-primary btn-sm dump_request" id="dump_request"> <i class="fa fa-download"></i> Download</button>\n                <button class="btn btn-default btn-sm" id="close_dump"><i class="fa fa-times"></i> Close </button>\n              </div>\n            </div>\n        </div>&nbsp;\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-sm-12">\n    <section class="panel">\n      <div class="panel-body">\n        <div class="row">             \n          <div class="col-sm-12 text-center">\n            <p class="lead stats">\n                  <span> Total: <span class=""><strong>' +
((__t = (meta.total )) == null ? '' : __t) +
'</strong></span> | </span>\n                  <span class="';
if(get_url_parameter("status")!=2 && get_url_parameter("status")!=null){;
__p +=
((__t = ("hide")) == null ? '' : __t);
};
__p += '"> Active: <span class="text-success"><strong>' +
((__t = (meta.active)) == null ? '' : __t) +
'&nbsp;</strong></span></span>\n                  <span class="';
if(get_url_parameter("status")!=3 && get_url_parameter("status")!=null){;
__p +=
((__t = ("hide")) == null ? '' : __t);
};
__p += '" id="inactive">Inactive: <span class="text-warning"><strong>' +
((__t = (meta.inactive)) == null ? '' : __t) +
'&nbsp;</strong></span></span>\n                  <span class="';
if(get_url_parameter("status")!=1 && get_url_parameter("status")!=null){;
__p +=
((__t = ("hide")) == null ? '' : __t);
};
__p += '" id="new">New: <span class="text-info"><strong>' +
((__t = (meta.new)) == null ? '' : __t) +
'</strong></span></span>\n            </p>\n              <ul class="pagination pagination-sm">\n                <li><a id="1" class="page_number">First</a></li>\n                <li><a id="previous" class="page_number">«</a></li>\n                ';
 var page_num = get_url_parameter("page")? get_url_parameter("page"):1;
                  for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                    <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \n                ';
 } ;
__p += ' \n                ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n                <li><a id="next" class="page_number">»</a></li>\n                <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n              </ul>\n              <h5> 20 Restaurants per page </h5>\n            </div>\n          </div>\n          <hr/>\n          \n          <div class="row">\n            <div class="col-sm-12">\n              <table class="table  table-hover general-table">\n                <thead>\n                    <tr>\n                        <th> # </th>\n                        <th></th>\n                        <th>Name</th>\n                        <th class="hidden-phone">Last updated</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                        <th>Menu</th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody class="searchable">\n                  ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \n                    <tr> \n                      <td>\n                        <p class="text-info">\n                          ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\n                        </p>\n                      </td>\n                      <td>\n                        ';
if(restaurant.get("logo")){;
__p += '\n                          <span class="thumbnail_loader"><i class="fa fa-2x fa-circle-o-notch fa-spin"></i></span>\n                          <img src="' +
((__t = (restaurant.get("logo")+"?"+ new Date().getTime())) == null ? '' : __t) +
'" width="60" class="logo_thumbnail hidden"/>\n                        ';
};
__p += '\n                      </td>\n                      <td>\n                          <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,40) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\n                          <p class="text-muted">\n                            <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\n                          </p>                                   \n                      </td>\n                      <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\n                      <td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>     \n                      <td>                                        \n                        <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile"><i class="fa fa-edit"></i> Edit</a> \n                        <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items"><i class="fa fa-list"></i> Menu</a>\n                        <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices"><i class="fa fa-check-square-o"></i> Choices</a>\n                        <div class="btn-group">\n                            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button"> <span class="caret"></span></button>\n                            <ul role="menu" class="dropdown-menu">\n                                ';
if(restaurant.get("status")){ ;
__p += '\n                                  <li id="copy_restaurant">\n                                    <a class="copy_anchor" href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/copy"><i class="fa fa-copy"></i> Copy</a>\n                                    <input type="hidden" class="copy_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                                  </li>\n                                  <li id="copy_timings">\n                                    <a class="copy_timings_anchor"><i class="fa fa-clock-o"></i> Copy Timings</a>\n                                    <input type="hidden" class="copy_timings_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                                  </li>\n                                ';
 } ;
__p += '\n                                <li class="divider"></li>\n                                  <li id="delete_restaurant">\n                                    <a class="delete_anchor"><i class="fa fa-times"></i> Delete</a>\n                                    <input type="hidden" class="delete_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                                  </li>\n                                ';
if(restaurant.get("status")){ ;
__p += '\n                                  <li id="invisible_restaurant">\n                                    <a class="invisible_anchor"><i class="fa fa-unlink"></i> Invisible</a>\n                                    <input type="hidden" class="invisible_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                                  </li>\n                                ';
 } ;
__p += '                                 \n                            </ul>\n                        </div>                                        \n                      </td>\n                      <td>\n                        ';
 if(restaurant.get("menu_stash")){ ;
__p += '\n                          <button type="button" class="btn btn-warning btn-sm push_menu"> Push Changes </button>\n                          <input type="hidden" class="push_menu_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                        ';
 } ;
__p += '                        \n                      <td>\n                        <a class="btn btn-info btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/update_status"><i class="fa fa-refresh"></i> Update status</a>                                          \n                      </td>\n                    </tr>\n                  ';
 }); ;
__p += '                                                 \n                </tbody>\n              </table>                \n            </div>\n          </div>\n          <hr/>\n          <div class="row">\n            <div class="col-sm-12 text-center">\n              <ul class="pagination pagination-sm">\n                <li><a id="1" class="page_number">First</a></li>\n                <li><a id="previous" class="page_number">«</a></li>\n                ';
 var page_num = get_url_parameter("page")?get_url_parameter("page"):1;
                  for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\n                  <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \n                ';
 } ;
__p += ' \n                ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \n                <li><a id="next" class="page_number">»</a></li>\n                <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\n              </ul>\n              <h5> 20 Restaurants per page </h5>\n            </div>\n          </div>          \n      </div>\n    </div>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/status_logs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="panel">\n    <div class="panel-body"> \n    \t<ul class="nav nav-pills" role="tablist" id="myTab">\n\t\t\t  <li class="active"><a href="#recent" role="tab">Recent</a></li>\n\t\t\t  <li><a href="#history" role="tab">Complete Logs</a></li>\t\t\t  \n\t\t\t</ul>     \n\t\t\t<hr/> \n\t\t\t<div class="tab-content">\n\t\t\t  <div class="tab-pane fade in active" id="recent">\t\t\t\t\t  \t\n\t\t\t\t\t';
 _.each(status_logs, function(status_log, i) { ;
__p += '\n\t\t\t\t\t\t';
 if(status_log.get("scheduled_update")){;
__p += '\n\t\t\t\t\t\t\t';
 if(status_log.get("scheduled_update").status == 1){;
__p += '\n\t\t\t\t\t\t\t\t<div class="activity-desk scheduled">\n\t\t\t        \t\t<span class="alert-icon pull-left bg-terques"><i class="fa fa-calendar"></i></span>\t\t\t\t<span class="label label-primary pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\t\t\t        \t\t\n\t                <h3 class="terques">\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\n\t                \t';
 }else{ ;
__p += '\n\t                \t\tScheduled Reminder!\n\t                \t';
 } ;
__p += '\n\t                \t<span class="small"> | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
'</span> </h3><hr class="terques"/>\n\t                <h2 class="terques"><i class="fa fa-clock-o"></i> ' +
((__t = ( timeConverter(status_log.get("scheduled_update").scheduled_at) )) == null ? '' : __t) +
' | <span class="small"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span></span></h2>\n\t                <button type="button" class="btn btn-danger btn-xs pull-right" id="cancel_schedule"><i class="fa fa-times"></i> Cancel</button> \t      \n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n\t\t\t\t        \t<input type="hidden" value="' +
((__t = (status_log.get("scheduled_update").id)) == null ? '' : __t) +
'" id="schedule_id">\n\t              </div>\n\t\t\t        \t<hr/>\n\t\t\t        ';
 } ;
__p += '\n\t\t     \t\t';
 } ;
__p += '\n\t\t   \t\t';
 }); ;
__p += '\n\t\t   \t\t';
 _.each(_.filter(status_logs, function(status_log,i){ if(i<2) return status_log; }), function(status_log, i) { ;
__p += '\n\t\t\t\t\t\t';
 if(status_log.get("scheduled_update")){;
__p += '\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 2 || status_log.get("scheduled_update").status == 4){ ;
__p += '\n\t\t\t        \t<div class="activity-desk">\n\t\t\t        \t\t<span class="alert-icon pull-left orange"><i class="fa fa-times"></i></span>\t\n\t\t\t\t\t\t\t\t\t<span class="label label-danger pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\n\t                <h2 class="red"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \n\t                <p>\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\n\t                \t';
 }else{ ;
__p += '\n\t                \t\tScheduled Reminder!\n\t                \t';
 } ;
__p += ' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' \n\t                </p>\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n\t              </div>\t\t\t        \t\n\t\t\t        ';
 } ;
__p += '\t\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 3){ ;
__p += '\n\t\t\t        \t<div class="activity-desk">\n\t\t\t        \t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\n\t\t\t\t\t\t\t\t\t<span class="label label-success pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\n\t                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \n\t                <p>Scheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n\t              </div>\t\t\t        \t\n\t\t\t        ';
 } ;
__p += '\t\t        \n\t\t\t\t\t\t';
 } ;
__p += '\n\n\t\t\t\t\t\t';
 if (status_log.get("previous_status") != status_log.get("new_status") && status_log.get("new_status")){;
__p += '\n\t\t\t\t\t\t\t<div class="activity-desk">\n\t\t\t\t\t\t\t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\n\t\t\t\t\t\t\t\t<span class="label label-success pull-right">COMPLETED</span>\n                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \n                <p>' +
((__t = (get_status(status_log.get("previous_status")))) == null ? '' : __t) +
' <i class=\'fa fa-arrow-right\'></i> ' +
((__t = (get_status(status_log.get("new_status")))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\n                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n              </div>\n\t\t\t\t\t\t';
 } ;
__p += '\t\t\t\n\t\t\t\t\t';
 }); ;
__p += '\n\t\t\t\t</div>\n\t\t\t\t<div class="tab-pane fade" id="history">\n\t\t\t\t\t';
 _.each(status_logs, function(status_log, i) { ;
__p += '\n\t\t\t\t\t\t';
 if(status_log.get("scheduled_update")){;
__p += '\t\t\t\t\t\t\t\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 2 || status_log.get("scheduled_update").status == 4){ ;
__p += '\n\t\t\t        \t<div class="activity-desk">\n\t\t\t        \t\t<span class="alert-icon pull-left orange"><i class="fa fa-times"></i></span>\t\n\t\t\t\t\t\t\t\t\t<span class="label label-danger pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\n\t                <h2 class="red"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \n\t                <p>\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\n\t                \t';
 }else{ ;
__p += '\n\t                \t\tScheduled Reminder!\n\t                \t';
 } ;
__p += ' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
'\n\t                </p>\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n\t              </div>\t\t\t\t        \t\n\t\t\t        ';
 } ;
__p += '\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 3){ ;
__p += '\n\t\t\t        \t<div class="activity-desk">\n\t\t\t        \t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\n\t\t\t\t\t\t\t\t\t<span class="label label-success pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\n\t                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \n\t                <p>Scheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n\t              </div>\t\t\t        \t\n\t\t\t        ';
 } ;
__p += '\n\t\t\t\t\t\t';
 } ;
__p += '\n\n\t\t\t\t\t\t';
 if (status_log.get("previous_status") != status_log.get("new_status") && status_log.get("new_status")){;
__p += '\n\t\t\t\t\t\t\t<div class="activity-desk">\n\t\t\t\t\t\t\t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\n\t\t\t\t\t\t\t\t<span class="label label-success pull-right">COMPLETED</span>\n                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \n                <p>' +
((__t = (get_status(status_log.get("previous_status")))) == null ? '' : __t) +
' <i class=\'fa fa-arrow-right\'></i> ' +
((__t = (get_status(status_log.get("new_status")))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\n                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\n              </div>\n\t\t\t\t\t\t';
 } ;
__p += '\t\t\n\t\t   \t\t';
 }); ;
__p += '\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\t\n       \n    </div>\n  </div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/timing.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\n  <div class="row">\n    <div class="col-xs-12 col-sm-9 col-md-9 col-lg-10 profile-adjust pull-right">\n      <div class="panel">\n        <div class="panel-body">\n          <span class="text-info">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n          <span>&nbsp;&nbsp;</span>\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;</span>\n          <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n          <span class="pull-right">\n            <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n';
 } ;
__p += '\n<div class="row">\n\n  ' +
((__t = ( partial('partials_sidebar', {
    id: restaurant.get("id"),
    sidebar_active_tab: sidebar_active_tab
  }) )) == null ? '' : __t) +
'\n\n  <!-- form component -->\n  <div class="col-xs-12 col-sm-10 col-lg-10 profile-adjust pull-right">\n\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section> \n      <h2 class="to_center">Edit: Timings</h2>\n      <hr>\n      <div class="row">\n        <form accept-charset="UTF-8" class="form-inline" id="timing_form" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id" id="restaurant_id">\n          <input type="hidden" name="timing_count" value="' +
((__t = ( timings.length )) == null ? '' : __t) +
'">\n\n          ';
 _.each(timings, function(timing, i) { ;
__p += '\n\n            ' +
((__t = ( partial("partials_timing", {
              i: i,
              timing: timing
            }) )) == null ? '' : __t) +
'\n\n          ';
 }) ;
__p += '\n\n          <button type="button" class="btn btn-info btn-sm add_timing">Add Timing</button>\n\n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_timings">\n          </div>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/update_status.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">\n        ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\n        <span>&nbsp;&nbsp;</span>\n        <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\n        <span>&nbsp;&nbsp;</span>\n        <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\n        <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\n        <span>\n          <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/profile"><i class="fa fa-edit"></i> Edit</a> \n          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" target="_blank"><i class="fa fa-list"></i> Menu</a>\n          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>\n        </span>\n        <span class="pull-right">\n          <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-sm-6">\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section>\n        <form accept-charset="UTF-8" class="form-horizontal" id="update_status_form" method="post">  \n          <input type="hidden" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'" name="id" >                                                \n          <div class="form-group">\n            <label for="status_change" class="col-md-4 control-label">Change Status to: </label>\n            <div class="col-md-8">\n              <select name="status_change" class="form-inline-element input-sm" id="status_change">\n                <option value=null> No Action </option>                \n              </select>\n              <p class="help-block text-info">Will immediately change the status </p>\n            </div>\n          </div>          \n        \n        <div class="well scheduler">\n            <div class="panel-heading" style="background-color:#FFFFFF">\n                <h4 class="panel-title">\n                    <span class="label label-warning label-sm pull-right"> Optional </span>\n                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\n                        <i class="fa fa-calendar"></i> Schedule an action\n                    </a>\n                </h4>\n            </div>\n            <div id="collapseOne" class="panel-collapse collapse in" style="height: auto;">\n                <div class="panel-body">                    \n                    <div class="form-group">\n                      <label class="col-sm-4 control-label col-lg-4" for="automatic"> Automatic?</label>\n                      <div class="col-lg-6">\n                          <div class="checkbox">\n                              <label>\n                                  <input type="checkbox" name="automatic" checked>\n                                  <p class="text-muted"> (Unchecked indicates a Manual Update!) </p>\n                              </label>\n                          </div> \n                      </div>\n                    </div>\n\n                    <div class="form-group">\n                      <label for="new_status" class="col-md-4 control-label">Future Status: </label>\n                      <div class="col-md-8">\n                        <select name="new_status" class="form-inline-element input-sm" id="new_status">\n                          <option value=null> No Action </option>\n                        </select>                        \n                      </div>\n                    </div>  \n\n                    <div class="form-group">\n                      <label class="control-label col-md-4">Scheduled Date-Time:</label>\n                      <div class="col-md-6">\n                        <div class="input-group input-sm">\n                          <span class="input-group-addon input-sm">on</span>\n                          <input type="text" class="form-control input-sm schedule_date" name="schedule_date" id="schedule_date" placeholder="date" value="">\n                          <span class="input-group-addon input-sm">at</span>\n                          <input type="text" class="form-control input-sm schedule_time" name="schedule_time" id="schedule_time" placeholder="time" value="">\n                        </div>                        \n                      </div>\n                    </div>                  \n                    \n                    <div class="form-group">\n                      <label class="col-sm-4 control-label col-lg-4" for="keep_notifying"></label>\n                      <div class="col-lg-6">\n                          <div class="checkbox">\n                              <label>\n                                  <input type="checkbox" name="keep_notifying" checked>\n                                  Keep notifying me until an action is taken\n                              </label>\n                          </div> \n                      </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div> \n        <div class="form-group">\n            <label class="col-md-4 control-label">* Comment</label>\n            <div class="col-md-6">\n                <input type="text" class="form-control input-sm" name="comment" required autocomplete="off" >\n            </div>\n        </div>\n        <div class="form-group">\n            <div class="col-lg-offset-4 col-lg-6">\n                <button class="btn btn-success btn-sm" id="update_status">Update</button>\n                <a class="btn btn-danger btn-sm" href="#restaurants">Close</a>\n            </div>\n        </div>\n    </form>\n    </div>\n    </div>                           \n  </div>\n  <div class="col-sm-6" id="status_logs">                                                            \n      \n  </div>\n</div>                                \n            ';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/alertDanger.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-danger fade in">\n    <button data-dismiss="alert" class="close close-sm" type="button">\n        <i class="fa fa-times"></i>\n    </button>\n    <strong>' +
((__t = (message)) == null ? '' : __t) +
'</strong>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/alertSuccess.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-success fade in">\n    <button data-dismiss="alert" class="close close-sm" type="button">\n        <i class="fa fa-times"></i>\n    </button>\n    <strong>' +
((__t = (message)) == null ? '' : __t) +
'</strong>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/bankAccount.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="to_center">Account Details</h2>\n\n<div class="form-group">\n  <!-- render select type: bank_id -->\n  ' +
((__t = ( partial('partials_markupSelect', {
  	id: "bank_id",
  	label: "Bank",
  	collection: collection,
  	name: "restaurant[bank_account_attributes][bank_id]",
  	bank: bank,
  	value: bank.bank_id
  }) )) == null ? '' : __t) +
'\n\n  <!-- render the text type for: branch -->\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "branch",
  	placeholder: "Branch",
  	label: "Branch",
  	value: bank.branch,
  	required: false,
  	name: "restaurant[bank_account_attributes][branch]"
  }) )) == null ? '' : __t) +
'\n\n  <!-- render the text type for: account_name -->\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "account_name",
  	placeholder: "Account Name",
  	label: "Account Name",
  	value: bank.account_name,
  	required: true,
  	name: "restaurant[bank_account_attributes][account_name]"
  }) )) == null ? '' : __t) +
'\n\n  <!-- render the text type for: account_number -->\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "account_number",
  	placeholder: "Account Number",
  	label: "Account Number",
  	value: bank.account_number,
  	required: false,
  	name: "restaurant[bank_account_attributes][account_number]"
  }) )) == null ? '' : __t) +
'\n\n  <!-- render the text type for: ifsc -->\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "ifsc",
  	placeholder: "IFSC",
  	label: "IFSC Code",
  	value: bank.ifsc,
  	required: false,
  	name: "restaurant[bank_account_attributes][ifsc]"
  }) )) == null ? '' : __t) +
'\n\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/choice_select.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<select name="choices" multiple="true" class="choice_select" data-id="' +
((__t = ( size.id )) == null ? '' : __t) +
'">\n  ';
 _.each(choices, function(choice){ ;
__p += '\n    <option value="' +
((__t = ( choice.get('id') )) == null ? '' : __t) +
'" ';
 if(_.contains(size.get('choice_ids'), choice.get('id'))) { ;
__p += 'selected';
 } ;
__p += '> ' +
((__t = ( choice.get('label') )) == null ? '' : __t) +
' </option>\n  ';
 }); ;
__p += '\n</select>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/contactNumber.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n\t<label class="col-md-4 control-label">Tel No.</label>\n\n\t<div class="col-md-8">\n\t\t<input type="hidden" name="' +
((__t = ( markup_hidden_name )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n\n\t\t<input type="hidden" name="' +
((__t = ( markup_hidden_index )) == null ? '' : __t) +
'" value="' +
((__t = ( i )) == null ? '' : __t) +
'">\n\n\t\t<select name="' +
((__t = ( markup_select_name )) == null ? '' : __t) +
'" class="form-inline-element input-sm">\n\t\t\t';
 _.each(contact_number_types, function(contact_number_type) { ;
__p += '\n\t\t\t\t<option ';
 if (number_type == contact_number_type[1]) { ;
__p += 'selected ';
 } ;
__p += ' value="' +
((__t = ( contact_number_type[0] )) == null ? '' : __t) +
'">' +
((__t = ( contact_number_type[1] )) == null ? '' : __t) +
'</option>\n\t\t\t';
 }); ;
__p += '\n\t\t</select>\n\n\t\t<input type="text" class="form-control input-sm display-inline" name="' +
((__t = ( markup_input_name )) == null ? '' : __t) +
'" placeholder="Tel No." value="' +
((__t = ( number )) == null ? '' : __t) +
'" >\n\n\t\t<input type="hidden" name="' +
((__t = ( markup_to_delete )) == null ? '' : __t) +
'" value="false">\n\n\t\t<a class="btn btn-danger btn-sm to_delete" data-delete-name="' +
((__t = ( markup_to_delete )) == null ? '' : __t) +
'">\n\t\t\t<strong>x</strong>\n\t\t</a>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/deliveryArea.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="delivery_area" data-locality="' +
((__t = ( deliveryArea.get("locality_group_id"))) == null ? '' : __t) +
'">\n\t<td>\n\t  \t<input type="hidden" name="locality_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("id") )) == null ? '' : __t) +
'">\n\n\t  \t<input type="hidden" name="delete_' +
((__t = ( i )) == null ? '' : __t) +
'" value="false">\n\n\t    <select name="locality_group_id_' +
((__t = ( i )) == null ? '' : __t) +
'" id="locality_id_' +
((__t = ( i )) == null ? '' : __t) +
'" class="locality_select" >\n\t    \t<option value="" selected="selected"></option>\n\t\t    ';
 _.each(localities, function(locality) { ;
__p += '\n\t\t      <option ';
 if (locality.id == deliveryArea.get("locality_group_id")) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( locality.id )) == null ? '' : __t) +
'">' +
((__t = ( locality.name )) == null ? '' : __t) +
'</option>\n\t\t    ';
 }) ;
__p += '\n\t    </select>\n\t</td>\n\n\t<td>\n\t\t<!-- render the text type for: min_delivery_amount -->\n\t\t<input type="text" class="delivery_time_input input-sm form-control" name="min_delivery_amount_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("min_delivery_amount") )) == null ? '' : __t) +
'" required>\n\t</td>\n\n\t<td>\n\t\t<!-- render the text type for: delivery_charges -->\n\t\t<input type="text" class="delivery_time_input form-control input-sm" name="delivery_charges_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("delivery_charges") )) == null ? '' : __t) +
'" required>\n\t</td>\n\n\t<td>\n\t\t<!-- render the text type for: delivery_time -->\n\t\t<input type="text" class="delivery_time_input input-sm form-control" name="delivery_time_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( to_mins(deliveryArea.get("delivery_time")) )) == null ? '' : __t) +
'" required>\n\t</td>\n\n\t<td>\n\t\t<!-- render the text type for: rush_hour_delivery_time -->\n\t\t<input type="text" class="delivery_time_input input-sm form-control" name="rush_hour_delivery_time_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( to_mins(deliveryArea.get("rush_hour_delivery_time")) )) == null ? '' : __t) +
'" required>\n\t</td>\n\t\n\n  <td>\n\t\t<button type="button" class="btn btn-danger btn-sm delete_this_locality table_delete" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-times"></i> Delete</button>\n\t</td>\n\t\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/document.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n\t<div class="form-group">\n\t\t<label for="docname" class="col-md-4 control-label">Name of the document</label>\n\t\t<div class="col-md-6">\n\t\t  <input type="text" class="form-control input-sm" name="docname_' +
((__t = (i)) == null ? '' : __t) +
'" id="docname_' +
((__t = (i)) == null ? '' : __t) +
'" placeholder="Enter the name of the document" required>\n\t\t</div>\n\t</div>\n\t<div class="form-group">\n\t\t<label for="doc" class="col-md-4 control-label">Upload file</label>\n\t\t<div class="col-md-4">\n\t\t  <input type="file" class="form-control input-sm" name="doc_' +
((__t = (i)) == null ? '' : __t) +
'" id="doc_' +
((__t = (i)) == null ? '' : __t) +
'" required>\n\t\t</div>\t\n\t\t<div class="col-md-4">\n\t\t  <button type="button" class="btn btn-primary btn-sm upload" id="' +
((__t = (i)) == null ? '' : __t) +
'"><i class="fa fa-upload"></i> Upload </button> \n\t\t</div>\n\t</div>\n\t<hr/>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr data-t-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" class=\'item\'>\n  <td class=\'item_name\'>\n    ' +
((__t = ( item.get('name') )) == null ? '' : __t) +
'<br/>\n    <strong>Dish Type</strong>: ' +
((__t = ( item.get('veg_type') )) == null ? '' : __t) +
'\n    <div class="item_sizes_summary">\n      ';
 _.each(item.get('item_sizes').models, function(item_size, i){ ;
__p += '\n        ' +
((__t = ( item_size.get_size() )) == null ? '' : __t) +
' // \n        ';
 _.each(item_size.get('item_prices').models, function(item_price, j){ ;
__p += '\n          ' +
((__t = ( item_price.get('price') )) == null ? '' : __t) +
' [' +
((__t = ( item_price.get_timing() )) == null ? '' : __t) +
'], \n        ';
 }) ;
__p += '\n      ';
 }) ;
__p += '\n    </div>\n  </td>\n  <td style=\'padding-top: 8px; padding-bottom: 8px;\'>\n      <button class=\'edit_item btn btn-info\' title=\'Edit\' data-item-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'">\n        <i class=\'fa fa-pencil-square-o\'></i>\n      </button>\n      ';
 if(get_status(item.get('status')) != 'DELETED') { ;
__p += '\n      <button type=\'button\' class=\'delete_item btn btn-danger\' data-item-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" title=\'Delete\'>\n        <i class=\'fa fa-times\'></i>\n      </button>\n      ';
 } ;
__p += '\n  </td>\n  <td>\n      ';
 if(get_status(item.get('status')) != 'DELETED') { ;
__p += '\n      <input type=\'checkbox\' data-on=\'success\' data-item-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" data-off=\'warning\' class=\'item_status_switch switch-mini\' \n        ';
 if(get_status(item.get('status')) == 'ACTIVE') { ;
__p += '\n          checked\n        ';
 } ;
__p += '>\n      ';
 } else { ;
__p += '\n      <button type=\'button\' class=\'restore_item btn btn-success\' data-item-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" title=\'Delete\'>\n        <i class=\'fa fa-retweet\'></i>\n      </button>\n      ';
 } ;
__p += '\n  </td>\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/item_disable_modal.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Modal -->\n<div class="modal fade" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">\n  <div class="modal-dialog">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h4 class="modal-title" id="myModalLabel">Confirm Disable of <span id="modal_item_name"></span>?</h4>\n      </div>\n      <div class="modal-body">\n        <p>Are you sure you want to disable this?\n        <br />\n        Please add, how long do you want it to be disabled?\n        </p>\n        <br />\n\n        <div class="modal_item_disable">\n          <form id="modal_item_disabled">\n            <select id="modal_item_time_select" class="form-control" style="display: inline-block; width: 20%;">\n              <option value="minutes">Minutes</option>\n              <option value="hours">Hours</option>\n              <option value="days">Days</option>\n              <option value="weeks">Weeks</option>\n              <option value="months">Months</option>\n              <option value="forever">Forever</option>\n            </select>\n          <input id="modal_item_int_val" class="form-control" style="display: inline-block; width: 20%;" />\n          </form>\n        </div>\n      </div>\n      <div class="modal-footer">\n        <button id="modal_item_save_changes" type="button" class="btn btn-primary">Yes</button>\n        <button id="modal_item_cancel_disable" type="button" class="btn btn-default" data-dismiss="modal">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/item_modal_sizes.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  <table id="item_modal_sizes_treetable" class="treetable">\n      ';
 _.each(item.get('item_sizes').models, function(size){ ;
__p += '\n          ' +
((__t = ( partial('partials_item_size', {size: size, choices: choices, timings: timings}) )) == null ? '' : __t) +
'\n      ';
 }) ;
__p += '\n  </table>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/item_size.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr data-t-id="' +
((__t = ( size.get('id') )) == null ? '' : __t) +
'">\n    <td colspan="2">\n        Select Size :\n        <select class="input_item_sizes" name="sizes" data-id="' +
((__t = ( size.get('id') )) == null ? '' : __t) +
'">\n            ';
 _.each(get_collections().size_lists, function(value, key){ ;
__p += '\n                <option value="' +
((__t = ( value )) == null ? '' : __t) +
'" ';
 if(size.get('size_id') == value){ ;
__p += 'selected=selected';
 } ;
__p += '>' +
((__t = ( key )) == null ? '' : __t) +
'</option>\n            ';
 }); ;
__p += '\n        </select>\n        ' +
((__t = ( partial("partials_choice_select", { choices : choices, size: size }) )) == null ? '' : __t) +
'\n    </td>\n    <td><button class="add_price_btn btn btn-info">Add price</button></td>\n    <td title="Delete" class="delete_this delete pull-right">X</td>\n</tr>\n\n';
 _.each(size.get('item_prices').models, function(item_price){ ;
__p += '\n  <tr data-t-id="' +
((__t = ( item_price.get('id') )) == null ? '' : __t) +
'" data-p-id="' +
((__t = ( size.get('id') )) == null ? '' : __t) +
'">\n    <td colspan="3">\n      <input class="input_item_price" name="price" placeholder="Item price.." value="' +
((__t = ( item_price.get('price') )) == null ? '' : __t) +
'" data-id="' +
((__t = ( item_price.get('id') )) == null ? '' : __t) +
'"/>\n      <select class="input_item_timing" name="timing" data-id="' +
((__t = ( item_price.get('id') )) == null ? '' : __t) +
'">\n        ';
 _.each(timings, function(timing){ ;
__p += '\n          <option value="' +
((__t = ( timing.get('id') )) == null ? '' : __t) +
'">\n              ' +
((__t = ( timing.get('name') )) == null ? '' : __t) +
'\n          </option>\n        ';
 }) ;
__p += '\n      </select>\n      <span style="display:inline-block;"></span>\n    </td>\n    <td title="Delete" class="delete_this delete pull-right" >X</td>\n\n  </tr>\n';
 }) ;


}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/manager.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="partial_box">\n\n\t<h4 class="to_center">' +
((__t = ( makeTitle(whois) )) == null ? '' : __t) +
'</h4>\n\n\t<hr>\n\n\t<input type="hidden" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_id" value="' +
((__t = ( options ? options._id : "new" )) == null ? '' : __t) +
'">\n\n\t<div class="form-group">\n\t\t<label for="' +
((__t = ( whois )) == null ? '' : __t) +
'_name" class="col-md-4 control-label">Name</label>\n\t\t<div class="col-md-6">\n\t\t  <input type="text" class="form-control input-sm" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_name" id="' +
((__t = ( whois )) == null ? '' : __t) +
'_name" placeholder="Name of the ' +
((__t = ( makeTitle(whois) )) == null ? '' : __t) +
'" value="' +
((__t = ( options ? options.name : "" )) == null ? '' : __t) +
'">\n\t\t</div>\n\t</div>\n\n\t<div class="form-group">\n\t\t<label for="' +
((__t = ( whois )) == null ? '' : __t) +
'_email" class="col-md-4 control-label">Email</label>\n\t\t<div class="col-md-6">\n\t\t  <input type="email" class="form-control input-sm" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_email" id="' +
((__t = ( whois )) == null ? '' : __t) +
'_email" placeholder="Email of the ' +
((__t = ( makeTitle(whois) )) == null ? '' : __t) +
'" value="' +
((__t = ( options ? options.email : "" )) == null ? '' : __t) +
'">\n\t\t</div>\n\t</div>\n\n\t<input type="hidden" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_contact_numbers_count" value="' +
((__t = ( options.contact_numbers.length )) == null ? '' : __t) +
'">\n\n\t';
 _.each(options.contact_numbers, function(contact_number, i) { ;
__p += '\n\t\t' +
((__t = ( partial('partials_contactNumber', {
			id: contact_number._id,
			markup_hidden_name: whois + "_contact_numbers_attributes_" + i + "_id",
			markup_hidden_index: whois + "_contact_numbers_attributes_" + i,
			markup_select_name: whois + "_contact_numbers_attributes_" + i + "_number_type",
			markup_input_name: whois + "_contact_numbers_attributes_" + i + "_number",
			markup_to_delete: whois + "_contact_numbers_attributes_" + i + "_delete",
			i: i,
			number: contact_number.number,
			contact_number_types: contact_number_types,
			number_type: contact_number.number_type
		}) )) == null ? '' : __t) +
'\n\t';
 }) ;
__p += '\n\n\t<button type="button" class="btn btn-info btn-sm add_new_btn" data-whois="' +
((__t = ( whois )) == null ? '' : __t) +
'">Add new Phone Number</button>\n\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/markupSelect.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 control-label">' +
((__t = ( label )) == null ? '' : __t) +
'</label>\n\t<div class="col-md-8">\n\t\t<select name="' +
((__t = ( name )) == null ? '' : __t) +
'" id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="form-control input-sm custom_select">\n\t\t';
 _.each(collection, function(item) { ;
__p += '\n\t\t\t<option ';
 if (value == item[1]) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( item[1] )) == null ? '' : __t) +
'">' +
((__t = ( item[0] )) == null ? '' : __t) +
'</option>\n\t\t';
 }) ;
__p += '\n\t\t</select>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/markupText.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 control-label label-sm">' +
((__t = ( required ? "* " : "")) == null ? '' : __t) +
'' +
((__t = ( label )) == null ? '' : __t) +
'</label>\n\t<div class="col-md-6">\n\t  <input type="text" class="form-control input-sm" name="' +
((__t = ( name )) == null ? '' : __t) +
'" id="' +
((__t = ( id )) == null ? '' : __t) +
'" placeholder="' +
((__t = ( placeholder )) == null ? '' : __t) +
'" ';
 if(value != "") { ;
__p += ' value="' +
((__t = ( value )) == null ? '' : __t) +
'" ';
 } ;
__p += ' ' +
((__t = ( required ? "required" : "")) == null ? '' : __t);
 if(typeof(pattern) != "undefined") { ;
__p += ' pattern="' +
((__t = ( pattern )) == null ? '' : __t) +
'"';
 } ;
__p += ' ';
 if(typeof(title) != "undefined") { ;
__p += ' title="' +
((__t = ( title )) == null ? '' : __t) +
'"';
 } ;
__p += '>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/markupTextarea.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group">\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 control-label">' +
((__t = ( label )) == null ? '' : __t) +
'</label>\n\t<div class="col-md-8">\n\t  <textarea cols="30" rows="3" class="form-control" name="restaurant[' +
((__t = ( id )) == null ? '' : __t) +
']" id="' +
((__t = ( id )) == null ? '' : __t) +
'" placeholder="' +
((__t = ( placeholder )) == null ? '' : __t) +
'">\n\t  ' +
((__t = ( value )) == null ? '' : __t) +
'\n\t  </textarea>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/profile.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(profile != null){ ;
__p += '\n  <div>\n  \t<p class="pull-right">' +
((__t = ( profile.name )) == null ? '' : __t) +
'<p>\n  \t&nbsp;\n  \t<button type="button" class="btn btn-sm btn-danger pull-right logout">Logout</button>\n  </div>\n';
 } ;
__p += '\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/sidebar.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- sidebar -->\n';
 var roles = _.collect(window.user.get_roles(), function(x){ return x['name'] });
  var user_type;
  if(_.contains(roles, "Outsource Data Entry Agent")){ 
    user_type="outsource";
  } 
  else if(_.contains(roles, "Outsource Data Entry Head")){
    user_type="outsource";
  }
  else{
    user_type="restaurants";
  }
;
__p += ' \n<div class="sidebar-offcanvas" id="sidebar" role="navigation">\n  <ul class="nav">\n    <li class="';
if(sidebar_active_tab == 'profile'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n      <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/profile">Profile\n      <span class="small text-muted pull-right">Ctrl + p</span>\n      </a>\n    </li>\n    <li class="';
if(sidebar_active_tab == 'timings'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n      <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/timings">Timings\n      <span class="small text-muted pull-right">Ctrl + m</span>\n      </a>\n    </li>\n    <li class="';
if(sidebar_active_tab == 'delivery_area'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n      <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/deliveryArea">Delivery Areas\n      <span class="small text-muted pull-right">Ctrl + d</span>\n      </a>\n    </li>\n    ';
 if(user_type != "outsource"){ ;
__p += '\n      <li class="';
if(sidebar_active_tab == 'office_document'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/office_document">Office Document\n        <span class="small text-muted pull-right">Ctrl + o</span>\n        </a>\n      </li>\n    ';
 } ;
__p += '        \n    ';
 if(user_type != "outsource"){ ;
__p += '\n      <li class="';
if(sidebar_active_tab == 'account_details'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/account_details">Account\n        <span class="small text-muted pull-right">Ctrl + q</span>\n        </a>\n      </li>\n      <li class="';
if(sidebar_active_tab == 'miscellaneous'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/miscellaneous">Miscellaneous\n        <span class="small text-muted pull-right">Ctrl + k</span>\n        </a>\n      </li>\n      <li class="';
if(sidebar_active_tab == 'documents'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/documents">Logo & Documents\n        <span class="small text-muted pull-right">Ctrl + i</span>\n        </a>\n      </li>\n    ';
 } ;
__p += '\n\n  </ul>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/data_entry/partials/timing.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-sm-10 col-sm-offset-1">\n  <input type="hidden" name="timing_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( timing.id )) == null ? '' : __t) +
'">\n\n  <input type="hidden" name="delete_' +
((__t = ( i )) == null ? '' : __t) +
'" value="false">\n\n  <!-- render the text type for: name -->\n  \n  <div class="form-group">\n    <label for="timing_name_' +
((__t = ( i )) == null ? '' : __t) +
'" class="control-label"> *Name</label>\n    <input type="text" class="form-control input-sm" name="timing_name_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_name_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = (timing.get("name"))) == null ? '' : __t) +
'" placeholder="Name" required>\n  </div>\n  &nbsp;\n  <!-- render the text type for: start -->\n  <div class="form-group">\n    <label for="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'" class="control-label"> *Start Time</label>\n    <input type="text" class="form-control input-sm timing_start_input" name="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Start" value="' +
((__t = ( timing.get("start_str") )) == null ? '' : __t) +
'" data-i="' +
((__t = ( i )) == null ? '' : __t) +
'" required>\n  </div>\n  &nbsp;\n  <!-- render the text type for: end -->\n  <div class="form-group">\n    <label for="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'" class="control-label"> *End Time</label>\n    <input type="text" class="form-control input-sm timing_end_input" name="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="End" value="' +
((__t = ( timing.get("end_str") )) == null ? '' : __t) +
'" data-i="' +
((__t = ( i )) == null ? '' : __t) +
'" required>\n  </div>\n    \n  <button type="button" class="btn btn-danger btn-sm delete_timing" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-times"></i></button>\n  <hr/>\n\n</div>';

}
return __p
};
