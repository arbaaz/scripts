this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/401.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-sm-6 col-sm-offset-3">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <img src="images/401.png" class="img-responsive">\r\n        <h1 class="text-center"> You shall not pass! </h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/404.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-sm-6 col-sm-offset-3">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <div class="row">\r\n          <div class="col-sm-6 col-sm-offset-3">\r\n            <img src="images/404.png" class="img-responsive">\r\n          </div>\r\n        </div>\r\n        <h1 class="text-center"> OOOOPPSSS! Page not found :( </h1>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/absolute_position.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <!-- form component -->\r\n  <div class="col-xs-offset-2 col-xs-8">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n\t\t\t\t<h1 class="to_center"> Absolute Position Edit </h1>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<div class= "col-xs-2"> Enter Locality</div>\r\n        <div class=" col-xs-4 hidden-xs">\r\n         <input type="text" class="form-control input-sm typeahead" id="locality" placeholder="locality" autocomplete="off" data-toggle="tooltip" data-placement="top" title="Locality" value="">\r\n        </div>\r\n        <div id = "ranked_rest_list">\r\n        </div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/absolute_position_subview.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-xs-12">\n    <section class="panel">\n        <div class="panel-body"> \n            <div class="row">\n              <div class="col-xs-offset-8 col-xs-4" style="padding-top:2px;">\n                <button class="btn btn-success btn-sm" id="add_new"><i class="fa fa-plus-square"></i> Add a new Absolute Position</button>\n              </div>\n            </div>    \n            <div class="row">\n              <div class="col-xs-12">\n                <table class="table  table-hover general-table">\n                  <thead>\n                      <tr>\n                          <th> # </th>\n                          <th>Name of Restaurant</th>\n                          <th>Status</th>\n                          <th>Absolute Position</th>\n                          <th>Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody class="searchable">\n                    ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \n                      <tr> \n                        <td>\n                          <p class="text-info">\n                            ' +
((__t = ( restaurant.form_id )) == null ? '' : __t) +
'\n                          </p>\n                        </td>\n\n                        <td>\n                            ';
 if (restaurant.name != null) { ;
__p +=
((__t = ( restaurant.name )) == null ? '' : __t);
 } ;
__p += '<br/>                                \n                        </td>\n                        <td>' +
((__t = ( restaurant.status )) == null ? '' : __t) +
'</td>    \n\n                        <td class="to_center">' +
((__t = ( restaurant.absolute_position )) == null ? '' : __t) +
'</td>     \n                        <td>                                      \n                          <button class="btn btn-primary btn-sm edit_position" data-restid="' +
((__t = (restaurant.restaurant_id)) == null ? '' : __t) +
'" data-delareaid= "' +
((__t = (restaurant.id)) == null ? '' : __t) +
'"><i class="fa fa-edit"></i> Edit</a> </button>\n                          <button class="btn btn-primary btn-sm delete-position" data-delareaid="' +
((__t = (restaurant.id)) == null ? '' : __t) +
'"><i class="fa fa-list"></i> Delete</a></button>\n                                       \n                        </td>\n                      </tr>\n                    ';
 }); ;
__p += '                                                 \n                  </tbody>\n                </table>                \n              </div>\n            </div>\n            \n        </div>\n    </section>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/account_details.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section> \n      <h2 class="to_center">Edit: Account Details</h2>\n      <hr>\n      <div class="row">\n        <form accept-charset="UTF-8" class="form-horizontal" id="account_details_form" method="post" enctype="multipart/form-data">\n          <input type="hidden" value="' +
((__t = ( account_details.get('id') )) == null ? '' : __t) +
'" name="id">  \n       \t  \t\t\t\t\t  \n          \t<div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n\t            <label for="payment_settlement_period" class="col-md-4 col-xs-4 control-label">Payment Settlement Period</label>\n\t            <div class="col-md-8 col-sm-8 col-xs-6">\n\t\t            <select name="payment_settlement_period" class="form-inline-element input-sm" id="payment_settlement_period">\n                  <option value="-1" selected>none</option>\n\t\t\t            ';
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
__p += '\n\t\t            </select>\n\t            </div>\n\t          </div>\n\t          <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n\t            <label for="payment_settlement_type" class="col-md-4 col-xs-4 control-label">Payment Settlement Mode</label>\n\t            <div class="col-md-8 col-sm-8 col-xs-6">\n\t\t            <select name="payment_settlement_type" class="form-inline-element input-sm" id="payment_settlement_type">\n                <option value="-1" selected>none</option>\n\t\t\t            ';
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
__p += '\n\t\t            </select>\n\t            </div>\n\t          </div>\n\t          <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n\t            <label for="payment_settlement_weekday" class="col-md-4 col-xs-4 control-label">Payment Settlement Day</label>\n\t            <div class="col-md-8 col-sm-8 col-xs-6">\n\t            <select name="payment_settlement_weekday" class="form-inline-element input-sm" id="payment_settlement_weekday">\n                <option value="-1" selected>none</option>\n\t            ';
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
__p += '\n\t            </select>\n\t            </div>\n\t          </div>\n            <hr/>\n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label class="col-sm-4 control-label col-xs-4" for="permission_for_offers">Permission for Offers from TinyOwl</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="permission_for_offers" ';
 if(account_details.get("permission_for_offers")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div>\n\n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label class="col-sm-4 control-label col-xs-4" for="permission_for_weekly_settlement_of_offers">Permission for Weekly Settlement of Offers</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="permission_for_weekly_settlement_of_offers" ';
 if(account_details.get("permission_for_weekly_settlement_of_offers")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div>\n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label class="col-sm-4 control-label col-xs-4" for="permission_for_weekly_settlement_of_card_payments">Permission for Weekly Settlement of Card Payments</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="permission_for_weekly_settlement_of_card_payments" ';
 if(account_details.get("permission_for_weekly_settlement_of_card_payments")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div>\n            \n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label class="control-label col-md-4 col-sm-4 col-xs-4" for="online_payment">Accepts card payment?</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="online_payment" ';
 if(account_details.get("online_payment")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div> \n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label class="control-label col-md-4 col-sm-4 col-xs-4" for="payment_modes">User Payment Modes</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                 <select name="payment_modes" required="true" id="payment_modes" multiple>\n                  ';
 _.chain(collections.payment_mode).pairs().each(function(mode){ ;
__p += '\n                  <option value="' +
((__t = (mode[1])) == null ? '' : __t) +
'">' +
((__t = (mode[0])) == null ? '' : __t) +
'</option>\n                  ';
 }) ;
__p += '\n                  </select>\n              </div>\n            </div>\n\n            <hr/>\n\t          <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n\t            <label for="bank_id" class="col-md-4 col-sm-4 col-xs-4 control-label">Bank Name</label>\n\t            <div class="col-md-6 col-sm-6 col-xs-6">\n\t            <select name="bank_id" class="form-inline-element input-sm" id="bank_id">\n                <option value="-1" selected>none</option>\n\t            ';
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
              placeholder: "Branch Name",
              label: "Branch Name",
              name: "branch",
              value: account_details.get("bank_account").branch ? account_details.get("bank_account").branch : "",
              required: false            
            }) )) == null ? '' : __t) +
'\n\n            \n\t          ' +
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
'\n\t          <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label for="account_type" class="col-md-4 col-xs-4 control-label">Account Type</label>\n              <div class="col-md-8 col-sm-8 col-xs-6">\n              <select name="account_type" class="form-inline-element input-sm" id="account_type">\n                <option value="" selected>none</option>\n                <option value="CURRENT" ';
 if(account_details.get("bank_account").account_type == "CURRENT"){ ;
__p += ' selected ';
 } ;
__p += '> CURRENT </option>\n                <option value="SAVINGS" ';
 if(account_details.get("bank_account").account_type == "SAVINGS"){ ;
__p += ' selected ';
 } ;
__p += '> SAVINGS </option>\n              </select>\n              </div>\n            </div>\n\n\t          ' +
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
' \n            \n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label class="col-sm-4 control-label col-xs-4" for="verified">Verified?</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                  <div class="checkbox">\n                      <label>\n                          <input type="checkbox" name="verified" ';
 if(account_details.get("bank_account").verified){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                      </label>\n                  </div>\n              </div>\n            </div>\n\n             ' +
((__t = ( partial('partials_markupText', {
              id: "bearer_cheque_name",
              placeholder: "Name of person in whose name cheque is to be issued.",
              label: "Cheque issued to:",
              name: "bearer_cheque_name",
              value: account_details.get("bank_account").bearer_cheque_name ? account_details.get("bank_account").bearer_cheque_name : "",
              required: false            
            }) )) == null ? '' : __t) +
'\n\n            <hr>\n              <h4 class="to_center">Details where Online Settlement Receipt is to be sent</h4>\n            <hr>\n\n            ' +
((__t = ( partial('partials_markupText', {
              id: "online_settlement_receipt_name",
              placeholder: "Name",
              label: "Name",
              name: "online_settlement_receipt_name",
              value: online_settlement_detail ? online_settlement_detail.online_settlement_receipt_name : "",
              required: false,      
            }) )) == null ? '' : __t) +
' \n\n            ' +
((__t = ( partial('partials_markupText', {
              id: "online_settlement_receipt_address",
              placeholder: "Address",
              label: "Address",
              name: "online_settlement_receipt_address",
              value: online_settlement_detail ? online_settlement_detail.online_settlement_receipt_address : "",
              required: false,       
            }) )) == null ? '' : __t) +
' \n\n            ' +
((__t = ( partial('partials_markupText', {
              id: "online_settlement_receipt_address_landmark",
              placeholder: "Nearby Landmark",
              label: "Nearby Landmark",
              name: "online_settlement_receipt_address_landmark",
              value: online_settlement_detail ? online_settlement_detail.online_settlement_receipt_address_landmark : "",
              required: false,       
            }) )) == null ? '' : __t) +
'\n\n            ' +
((__t = ( partial('partials_markupText', {
              id: "online_settlement_receipt_address_pincode",
              placeholder: "Pincode",
              label: "Pincode",
              name: "online_settlement_receipt_address_pincode",
              value: online_settlement_detail ? online_settlement_detail.online_settlement_receipt_address_pincode : "",
              required: false,       
            }) )) == null ? '' : __t) +
' \n\n\n            <h4 class="to_center">Number for sending confirmation SMS</h4>\n\n              <input type="hidden" name="phone_numbers_for_confirmation_sms_count" value="' +
((__t = ( phone_numbers_for_confirmation_sms.length )) == null ? '' : __t) +
'" >\n\n            ';
 _.each(phone_numbers_for_confirmation_sms, function(phone_number, i) { ;
__p += '\n            ' +
((__t = (
              partial('partials_contactNumber', {
                id: phone_number._id,
                markup_hidden_name: "phone_numbers_for_confirmation_sms_" + i + "_id",
                markup_hidden_index: "phone_numbers_for_confirmation_sms_" + i,
                markup_select_name: "phone_numbers_for_confirmation_sms_" + i + "_number_type",
                markup_input_name: "phone_numbers_for_confirmation_sms_" + i + "_number",
                markup_to_delete: "phone_numbers_for_confirmation_sms_" + i + "_delete",
                i: i,
                number: phone_number.number,
                contact_number_types: collections.contact_number_types,
                number_type: phone_number.number_type,
                sms: false,
                is_present_on_counter: false,
                is_smartphone: false,
                is_verified: false
              })
            )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n\n   \n          <button type="button" class="btn btn-info btn-sm add_new_number_sms">Add new Phone Number</button>\n          <hr>\n\n\t          <div class="submit_div">\n\t            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_accounts">\n\t          </div>\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/add_item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="modal fade" id="item_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close item_modal_close" data-dismiss="modal" aria-hidden="true" title="Close">&times;</button>\r\n        <h4 class="modal-title" id="item_modal_label">Edit Item\r\n        <span id="edit_item_name"></span>\r\n        <span id="form_errors" style="display:inline-block; text-align:center;"></span>\r\n        </h4>\r\n      </div>\r\n      <div class="modal-body">\r\n        <!-- modal body -->\r\n        <form class="item-modal-form" id="edit_item_form">\r\n            <div class="item_form">\r\n                <label for="item_input_name">Item Name: </label>\r\n                <input class="item_input_name" name="item_name" placeholder="Item name.." value="' +
((__t = ( item.get('name') )) == null ? '' : __t) +
'">\r\n                <br />\r\n                <div style="margin-top:9px;">\r\n                    <label for="description">Description: </label>\r\n                    <textarea rows="2" cols="50" class="item_desc" id="description" style="width: 65%;" placeholder="Item description..">' +
((__t = ( item.get('description') )) == null ? '' : __t) +
'</textarea>\r\n                </div>\r\n                <div style="margin-top:9px;">\r\n                    <label for="item_veg_type">Dish Type: </label>\r\n                    <select name=\'veg_type\' class=\'item_input_veg_type\' id="item_veg_type">\r\n                        ';
 _.each(get_collections().veg_types, function(value, key){ ;
__p += '\r\n                            <option value="' +
((__t = ( key )) == null ? '' : __t) +
'" ';
 if(key == item.get('veg_type')){ ;
__p += ' selected=selected';
} ;
__p += '>' +
((__t = ( key.replace("_", " ") )) == null ? '' : __t) +
'</option>\r\n                        ';
 }) ;
__p += '\r\n                    </select>\r\n                    <button class=\'add_size btn btn-info\'>Add Size</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div id="item_modal_sizes">\r\n            </div>\r\n        </form><!-- end of form body -->\r\n      </div>\r\n      <div class="modal-footer">\r\n        <div id="notification_save"></div>\r\n        <button type="button" class="btn btn-primary save_item" data-dismiss="modal">Save changes</button>\r\n        <button type="button" class="btn btn-default item_modal_close" data-dismiss="modal">Close</button>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/alerts.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n    <div class="';
if(typeof position ==="undefined"){;
__p += '\r\n    \t\t\t\t' +
((__t = ("col-xs-12 pull-right")) == null ? '' : __t) +
'\r\n    \t\t\t';
}else if(position=="right"){;
__p += '\r\n    \t\t\t\t' +
((__t = ("col-xs-10 profile-adjust pull-right")) == null ? '' : __t) +
'\r\n\t\t\t\t';
}else if(position=="center"){;
__p += '\r\n\t\t\t\t\t' +
((__t = ("col-xs-6 col-xs-offset-3")) == null ? '' : __t) +
'\r\n\t\t\t\t';
}else{;
__p += '\r\n\t\t\t\t\t' +
((__t = ("col-xs-12 text-center")) == null ? '' : __t) +
'\r\n\t\t\t\t';
};
__p += '\r\n\t\t\t\t">\r\n        <div id="shadow" class="panel">\r\n            <div class="panel-body">                \r\n\t\t\t\t';
 if(success){;
__p += '\r\n\t\t\t\t\t' +
((__t = ( partial('partials_alertSuccess', {
				        message:message_text
				  	}) )) == null ? '' : __t) +
'\r\n\t\t\t\t';
 }else{ ;
__p += '\r\n\t\t\t\t\t' +
((__t = ( partial('partials_alertDanger', {
				        message:message_text
				  	}) )) == null ? '' : __t) +
'\r\n\t\t\t\t';
 } ;
__p += '\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/android_settings.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <form role="form" class="form-horizontal" id="android_settings_form" method="POST">\r\n          <div class="form-group">\r\n            <div class="col-md-2 col-md-offset-9">\r\n              <a class="btn btn-info btn-sm" href="#android-releases">Android Releases <i class="fa fa-arrow-right"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="SETTINGS_FOR_APP_VERSION" class="control-label">App Version</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <select class="form-control input-sm" name="current_version" id = "android_versions">\r\n              ';
 _.each(android_settings.versions,function(version) { ;
__p += '\r\n                <option value= "' +
((__t = (version)) == null ? '' : __t) +
'" ' +
((__t = ( current_version == version ? 'selected' : '' )) == null ? '' : __t) +
' >' +
((__t = (version)) == null ? '' : __t) +
'</option>\r\n              ';
}); ;
__p += '\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="RESTAURANT_NUMBER_SYNC_LIMIT" class="control-label">Restaurant Number Sync Limit</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_NUMBER_SYNC_LIMIT"  value ="' +
((__t = (android_settings.RESTAURANT_NUMBER_SYNC_LIMIT )) == null ? '' : __t) +
'" >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="CURRENT_LOCATION_REFRESH_TIME" class="control-label">Current Location Refresh Time</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="CURRENT_LOCATION_REFRESH_TIME"  value = "' +
((__t = ( android_settings.CURRENT_LOCATION_REFRESH_TIME)) == null ? '' : __t) +
'"required >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="SPLASH_SCREEN_TIME" class="control-label">Splash Screen Time</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="SPLASH_SCREEN_TIME" value = "' +
((__t = (android_settings.SPLASH_SCREEN_TIME)) == null ? '' : __t) +
'" >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="RESTAURANT_SYNC_BATCH_SIZE" class="control-label">Restaurant Sync batch</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_SYNC_BATCH_SIZE" value="' +
((__t = ( android_settings.RESTAURANT_SYNC_BATCH_SIZE)) == null ? '' : __t) +
'" required >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="PROCESS_DISPLAY_STRINGS" class="control-label">Process Display Strings</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="hidden" name="PROCESS_DISPLAY_STRINGS" value="off">\r\n              <input type="checkbox" class="form-control input-sm" name="PROCESS_DISPLAY_STRINGS"  ';
 if(android_settings.PROCESS_DISPLAY_STRINGS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="FORCE_VERIFY_NEW_USERS" class="control-label">Force Verify New Users</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="hidden" name="FORCE_VERIFY_NEW_USERS" value="off">\r\n              <input type="checkbox" class="form-control input-sm" name="FORCE_VERIFY_NEW_USERS"  ';
 if(android_settings.FORCE_VERIFY_NEW_USERS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="SMS_LOGIN_CHANNEL_PREFIX" class="control-label">Sms Login Channel Prefix</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="SMS_LOGIN_CHANNEL_PREFIX" value="' +
((__t = ( android_settings.SMS_LOGIN_CHANNEL_PREFIX)) == null ? '' : __t) +
'" readonly>\r\n            </div>\r\n          </div>\r\n\r\n          ';
 if(android_settings.PERFORM_SYNC != undefined) {;
__p += '\r\n            <div class="form-group">\r\n              <div class="col-md-4 col-md-offset-1">\r\n                <label for="PERFORM_SYNC" class="control-label">Perfrom Sync</label>\r\n              </div>\r\n              <div class="col-md-6">\r\n                <input type="hidden" name="PERFORM_SYNC" value="off">\r\n                <input type="checkbox" class="form-control input-sm" name="PERFORM_SYNC"  ';
 if(android_settings.PERFORM_SYNC=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n              </div>\r\n            </div>\r\n          ';
};
__p += '\r\n\r\n          ';
 if(android_settings.SYNC_PERIOD != undefined) {;
__p += '\r\n            <div class="form-group">\r\n              <div class="col-md-4 col-md-offset-1">\r\n                <label for="SYNC_PERIOD" class="control-label">Sync Period</label>\r\n              </div>\r\n              <div class="col-md-6">\r\n                <input type="text" class="form-control input-sm" name="SYNC_PERIOD" value="' +
((__t = ( android_settings.SYNC_PERIOD)) == null ? '' : __t) +
'">\r\n              </div>\r\n            </div>\r\n          ';
};
__p += '\r\n\r\n          ';
 if(android_settings.SETTINGS_SYNC_INTERVAL!= undefined) { ;
__p += '\r\n          <hr>\r\n\r\n            <div class ="col-md-offset-1">\r\n              <ul class="nav nav-pills nav-justified" role="tablist" id="myandroidTab">\r\n                <li class="active" role="presentation" id="android_settings_sync"><a href="#settings_sync_panel" role="tab" data-toggle="tab">Settings Sync</a></li>\r\n                <li  role="presentation" id="android_location_sync"><a href="#location_sync_panel" role="tab" data-toggle="tab">Location Sync</a></li>\r\n                <li role="presentation" id="android_menu_sync"><a href="#menu_sync_panel" role="tab" data-toggle="tab">Menu Sync</a></li>\r\n                <li role="presentation" id="android_profile_sync"><a href="#profile_sync_panel" role="tab" data-toggle="tab">Profile Sync</a></li>\r\n                <li role="presentation" id="android_cuisine_sync"><a href="#cuisine_sync_panel" role="tab" data-toggle="tab">Cuisine Sync</a></li>\r\n                <li role="presentation" id="android_full_sync"><a href="#full_sync_panel" role="tab" data-toggle="tab">Full Sync</a></li>\r\n              </ul>\r\n              <br>\r\n            </div>\r\n\r\n            <div class="tab-content">\r\n              \r\n              <div role="tabpanel" class="tab-pane fade in active" id="settings_sync_panel">\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="SETTINGS_SYNC_INTERVAL" class="control-label">Settings Sync Intervals</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="SETTINGS_SYNC_INTERVAL"  value="' +
((__t = ( android_settings.SETTINGS_SYNC_INTERVAL)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="SETTINGS_SYNC_PERIOD" class="control-label">Settings Sync Period</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="SETTINGS_SYNC_PERIOD" value="' +
((__t = ( android_settings.SETTINGS_SYNC_PERIOD)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="SETTINGS_SYNC_IS_TRIGGER" class="control-label">Settings Sync is trigger</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="SETTINGS_SYNC_IS_TRIGGER" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="SETTINGS_SYNC_IS_TRIGGER" ';
 if(android_settings.SETTINGS_SYNC_IS_TRIGGER=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="SETTINGS_SYNC_TRIGGER_ON_APP_START" class="control-label">Settings Sync Trigger on App Start</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="SETTINGS_SYNC_TRIGGER_ON_APP_START" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="SETTINGS_SYNC_TRIGGER_ON_APP_START" ';
 if(android_settings.SETTINGS_SYNC_TRIGGER_ON_APP_START=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="SETTINGS_SYNC_TRIGGER_ON_APP_SHUTDOWN" class="control-label">Settings Sync Trigger on App Stop</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="SETTINGS_SYNC_TRIGGER_ON_APP_SHUTDOWN" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="SETTINGS_SYNC_TRIGGER_ON_APP_SHUTDOWN" ';
 if(android_settings.SETTINGS_SYNC_TRIGGER_ON_APP_SHUTDOWN=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div role="tabpanel" class="tab-pane fade in" id="location_sync_panel">\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="LOCALITY_SYNC_INTERVAL" class="control-label">Locality Sync Intervals</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="LOCALITY_SYNC_INTERVAL"  value="' +
((__t = ( android_settings.LOCALITY_SYNC_INTERVAL)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="LOCALITY_SYNC_PERIOD" class="control-label">Locality Sync Period</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="LOCALITY_SYNC_PERIOD" value="' +
((__t = ( android_settings.LOCALITY_SYNC_PERIOD)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="LOCALITY_SYNC_IS_TRIGGER" class="control-label">Locality Sync is trigger</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="LOCALITY_SYNC_IS_TRIGGER" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="LOCALITY_SYNC_IS_TRIGGER" ';
 if(android_settings.LOCALITY_SYNC_IS_TRIGGER=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="LOCALITY_SYNC_TRIGGER_ON_APP_START" class="control-label">Locality Sync Trigger on App Start</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="LOCALITY_SYNC_TRIGGER_ON_APP_START" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="LOCALITY_SYNC_TRIGGER_ON_APP_START" ';
 if(android_settings.LOCALITY_SYNC_TRIGGER_ON_APP_START=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="LOCALITY_SYNC_TRIGGER_ON_APP_SHUTDOWN" class="control-label">Locality Sync Trigger on App Stop</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="LOCALITY_SYNC_TRIGGER_ON_APP_SHUTDOWN" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="LOCALITY_SYNC_TRIGGER_ON_APP_SHUTDOWN" ';
 if(android_settings.LOCALITY_SYNC_TRIGGER_ON_APP_SHUTDOWN=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div role="tabpanel" class="tab-pane fade in" id="menu_sync_panel">\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="MENU_SYNC_INTERVAL" class="control-label">Menu Sync Intervals</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="MENU_SYNC_INTERVAL"  value="' +
((__t = ( android_settings.MENU_SYNC_INTERVAL)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="MENU_SYNC_PERIOD" class="control-label">Menu Sync Period</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="MENU_SYNC_PERIOD" value="' +
((__t = ( android_settings.MENU_SYNC_PERIOD)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="MENU_SYNC_IS_TRIGGER" class="control-label">Menu Sync is trigger</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="MENU_SYNC_IS_TRIGGER" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="MENU_SYNC_IS_TRIGGER" ';
 if(android_settings.MENU_SYNC_IS_TRIGGER=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="MENU_SYNC_TRIGGER_ON_APP_START" class="control-label">Menu Sync Trigger on App Start</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="MENU_SYNC_TRIGGER_ON_APP_START" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="MENU_SYNC_TRIGGER_ON_APP_START" ';
 if(android_settings.MENU_SYNC_TRIGGER_ON_APP_START=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="MENU_SYNC_TRIGGER_ON_APP_SHUTDOWN" class="control-label">Menu Sync Trigger on App Stop</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="MENU_SYNC_TRIGGER_ON_APP_SHUTDOWN" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="MENU_SYNC_TRIGGER_ON_APP_SHUTDOWN" ';
 if(android_settings.MENU_SYNC_TRIGGER_ON_APP_SHUTDOWN=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div role="tabpanel" class="tab-pane fade in" id="profile_sync_panel">\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="PROFILE_SYNC_INTERVAL" class="control-label">Profile Sync Intervals</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="PROFILE_SYNC_INTERVAL"  value="' +
((__t = ( android_settings.PROFILE_SYNC_INTERVAL)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="PROFILE_SYNC_PERIOD" class="control-label">Profile Sync Period</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="PROFILE_SYNC_PERIOD" value="' +
((__t = ( android_settings.PROFILE_SYNC_PERIOD)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="PROFILE_SYNC_IS_TRIGGER" class="control-label">Profile Sync is trigger</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="PROFILE_SYNC_IS_TRIGGER" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="PROFILE_SYNC_IS_TRIGGER" ';
 if(android_settings.PROFILE_SYNC_IS_TRIGGER=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="PROFILE_SYNC_TRIGGER_ON_APP_START" class="control-label">Profile Sync Trigger on App Start</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="PROFILE_SYNC_TRIGGER_ON_APP_START" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="PROFILE_SYNC_TRIGGER_ON_APP_START" ';
 if(android_settings.PROFILE_SYNC_TRIGGER_ON_APP_START=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="PROFILE_SYNC_TRIGGER_ON_APP_SHUTDOWN" class="control-label">Profile Sync Trigger on App Stop</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="PROFILE_SYNC_TRIGGER_ON_APP_SHUTDOWN" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="PROFILE_SYNC_TRIGGER_ON_APP_SHUTDOWN" ';
 if(android_settings.PROFILE_SYNC_TRIGGER_ON_APP_SHUTDOWN=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div role="tabpanel" class="tab-pane fade in" id="cuisine_sync_panel">\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="CUISINE_SYNC_INTERVAL" class="control-label">Cuisine Sync Intervals</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="CUISINE_SYNC_INTERVAL"  value="' +
((__t = ( android_settings.CUISINE_SYNC_INTERVAL)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="CUISINE_SYNC_PERIOD" class="control-label">Cuisine Sync Period</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="CUISINE_SYNC_PERIOD" value="' +
((__t = ( android_settings.CUISINE_SYNC_PERIOD)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="CUISINE_SYNC_IS_TRIGGER" class="control-label">Cuisine Sync is trigger</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="CUISINE_SYNC_IS_TRIGGER" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="CUISINE_SYNC_IS_TRIGGER" ';
 if(android_settings.CUISINE_SYNC_IS_TRIGGER=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="CUISINE_SYNC_TRIGGER_ON_APP_START" class="control-label">Cuisine Sync Trigger on App Start</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="CUISINE_SYNC_TRIGGER_ON_APP_START" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="CUISINE_SYNC_TRIGGER_ON_APP_START" ';
 if(android_settings.CUISINE_SYNC_TRIGGER_ON_APP_START=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="CUISINE_SYNC_TRIGGER_ON_APP_SHUTDOWN" class="control-label">Cuisine Sync Trigger on App Stop</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="CUISINE_SYNC_TRIGGER_ON_APP_SHUTDOWN" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="CUISINE_SYNC_TRIGGER_ON_APP_SHUTDOWN" ';
 if(android_settings.CUISINE_SYNC_TRIGGER_ON_APP_SHUTDOWN=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div role="tabpanel" class="tab-pane fade in" id="full_sync_panel">\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="FULL_SYNC_INTERVAL" class="control-label">Full Sync Intervals</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="FULL_SYNC_INTERVAL"  value="' +
((__t = ( android_settings.FULL_SYNC_INTERVAL)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="FULL_SYNC_PERIOD" class="control-label">Full Sync Period</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="text" class="form-control input-sm" name="FULL_SYNC_PERIOD" value="' +
((__t = ( android_settings.FULL_SYNC_PERIOD)) == null ? '' : __t) +
'" required >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="FULL_SYNC_IS_TRIGGER" class="control-label">Full Sync is trigger</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="FULL_SYNC_IS_TRIGGER" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="FULL_SYNC_IS_TRIGGER" ';
 if(android_settings.FULL_SYNC_IS_TRIGGER=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="FULL_SYNC_TRIGGER_ON_APP_START" class="control-label">Full Sync Trigger on App Start</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="FULL_SYNC_TRIGGER_ON_APP_START" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="FULL_SYNC_TRIGGER_ON_APP_START" ';
 if(android_settings.FULL_SYNC_TRIGGER_ON_APP_START=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n                <div class="form-group">\r\n                  <div class="col-md-4 col-md-offset-1">\r\n                    <label for="FULL_SYNC_TRIGGER_ON_APP_SHUTDOWN" class="control-label">Full Sync Trigger on App Stop</label>\r\n                  </div>\r\n                  <div class="col-md-6">\r\n                    <input type="hidden" name="FULL_SYNC_TRIGGER_ON_APP_SHUTDOWN" value = "off" >\r\n                    <input type="checkbox" class="form-control input-sm" name="FULL_SYNC_TRIGGER_ON_APP_SHUTDOWN" ';
 if(android_settings.FULL_SYNC_SYNC_TRIGGER_ON_APP_SHUTDOWN=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          ';
 } ;
__p += '\r\n\r\n          <hr/>\r\n          <div class="to_center">\r\n            <button type="Create" class="btn btn btn-success" id="edit_android_settings">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/assignment_form.ejs"] = function(obj) {
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
            pattern : "([a-zA-Z])*([\\-])?([a-zA-Z])+[\\-][1-9]([0-9])*",
            title : "Should contain hypen (-) , Will be something like MA-213 or MUM-MA-213"
          }) )) == null ? '' : __t) +
'\n          <hr/>\n          <div class="to_center">\n            <button type="Create" class="btn btn btn-success">Create</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/bulk_update.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\r\n<div class="row"> \r\n  <div class="col-xs-12 ">\r\n    <div class="panel">\r\n      <div class="panel-body">              \r\n        <div class="col-sm-6 col-md-7 col-lg-8">\r\n            <div class="input-group">\r\n                <span class="input-group-addon btn-primary btn-sm"></span>\r\n                <input type="text" id="form_ids" class="form-control input-sm" placeholder="Enter From ids" title="Should contain hypen (-) , Will be something like MA-213">\r\n            </div>\r\n        </div>\r\n        <div class="col-sm-3 col-md-1 col-lg-1 ">\r\n            <button class="btn btn-success btn-sm" id="submit_forms"> Submit</a>\r\n        </div>\r\n        <div class="col-sm-3 col-md-4 col-lg-3 hidden" id="no_of_restaurant">\r\n          Number of Restaurants found: <span></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>                                \r\n</div>\r\n\r\n<div class="row">  \r\n\r\n  <div class="col-sm-12" id="list_restaurants"></div>\r\n  <div class="col-sm-6"  id="bulk_update_form"></div>\r\n\r\n</div> \r\n\r\n\r\n\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/campaign_tags.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n\n    <div class="panel">\n      <div class="panel-body">\n      \t<section id="alerts"></section> \n      \t<h2 class="to_center">Edit: Campaign</h2>\n      \t<hr>\n      \t<div class="row">\n        \t<form class="form-horizontal" id="" enctype="multipart/form-data">\n              ';
 for(var i=1; i<=length_tags; i++) {;
__p += '\n                        <div class="form-group">\n                            <label for="inactive" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">' +
((__t = ( Object.keys(obj)[i-1].toString().replace(/_/g, " "))) == null ? '' : __t) +
'\n                            </label>\n                            <div class = "col-md-6 col-sm-6 col-xs-6">\n                              <div class = "col-md-10 col-sm-10 col-xs-10">\n                                <input col="30" rows="3" class="form-control input-sm" name="comments" id="text' +
((__t = (i)) == null ? '' : __t) +
'" placeholder="message" value="' +
((__t = ( obj[Object.keys(obj)[i-1]])) == null ? '' : __t) +
'"></input>\n                              </div>\n                              <div class = "col-md-2 col-sm-2 col-xs-2">\n                                <input type="checkbox" id="check' +
((__t = (i)) == null ? '' : __t) +
'" >\n                              </div>\n                            </div>\n                        </div>\n              ';
};
__p += '\n                      <br/><br/><br/><br/>\n                      <div class="form-group">\n                        <label class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">\n                          NO PROMOCODE APPLICABLE (Except specified)\n                        </label>\n                        <div class = "col-md-6 col-sm-6 col-xs-6">\n                            <div class = "col-md-10 col-sm-10 col-xs-10">\n                              <input col="30" rows="3" class="form-control input-sm" name="comments" id="text_applicable_promo_message" placeholder="message" value="' +
((__t = (text_applicable_promo_message.toString())) == null ? '' : __t) +
'"></input>\n                            </div>\n                            <div class = "col-md-2 col-sm-2 col-xs-2">\n                              <input type="checkbox" id="check_applicable_promo_message" >\n                            </div>\n                          </div>\n                      </div>\n                      <h2 class="to_center">AGENT</h2>\n                      <div class = "form-group">\n                        <label class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">\n                          Dedicated Agent? \n                        </label>\n                        <div class = "col-md-6 col-sm-6 col-xs-6">\n                          <div class = "col-md-2 col-sm-2 col-xs-2">\n                            <input type="checkbox" id="check_dedicated_agent" >\n                          </div>\n                        </div>\n                      </div>\n                      <div class="form-group">\n                        <label class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">\n                          NAME: \n                        </label>\n                        <div class = "col-md-6 col-sm-6 col-xs-6">\n                            <div class = "col-md-10 col-sm-10 col-xs-10">\n                              <input col="30" rows="3" class="form-control input-sm" name="name" id="text_agent_name" placeholder="name" value="' +
((__t = (agent.name)) == null ? '' : __t) +
'"></input>\n                            </div>\n                        </div>\n                      </div>\n                      <div class="form-group">\n                          <label class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">\n                          NUMBER: \n                        </label>\n                        <div class = "col-md-6 col-sm-6 col-xs-6">\n                            <div class = "col-md-10 col-sm-10 col-xs-10">\n                              <input col="30" rows="3" class="form-control input-sm" name="number" id="text_agent_number" placeholder="number" value="' +
((__t = (agent.number)) == null ? '' : __t) +
'"></input>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- <div class = "form-group">\n                        <label class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">\n                          Dedicated Agent? \n                        </label>\n                        <div class = "col-md-6 col-sm-6 col-xs-6">\n                          <div class = "col-md-2 col-sm-2 col-xs-2">\n                            <input type="checkbox" id="check_dedicated_agent" >\n                          </div>\n                        </div>\n                      </div> -->\n             <div class = "col-md-6 col-sm-6 col-xs-6">\n             <br/>\n             <div class = "submit_div">\n             <button class="btn btn-primary" id="save_button">Save Changes</button>\n             </div>\n        \t</form>\n      \t</div>\n      </div>\n  \t</div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/change_logs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-sm-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        ';
 _.each(change_logs, function(change_log){ ;
__p += '\r\n          <div class="row">\r\n            <div class="col-sm-1 terques-bg white" style="padding:30px 15px;">\r\n              <h4>' +
((__t = (change_log.get("change_type"))) == null ? '' : __t) +
'</h4>\r\n            </div>\r\n            <div class="col-sm-11">\r\n              <i class="fa fa-user"></i> ' +
((__t = (change_log.get("user_name"))) == null ? '' : __t) +
'              \r\n              <span class="muted">' +
((__t = (timeConverter(change_log.get("changed_at")))) == null ? '' : __t) +
'</span>\r\n              <br/>\r\n              <div class="well">\r\n                ';
_.each(change_log.get("change_logs"), function(log){ ;
__p += '\r\n                  From <code>' +
((__t = (log[0]?log[0]:"None")) == null ? '' : __t) +
'</code> to <code>' +
((__t = (log[1])) == null ? '' : __t) +
'</code>\r\n                ';
 }) ;
__p += '\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr/>\r\n        ';
 }); ;
__p += '\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/change_password.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-6 col-md-offset-3">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <h3 class="to_center">Change Your Password</h3>\r\n        <hr/>\r\n        <form role="form" class="form-horizontal" id="password_form" method="POST">\r\n          <div class="form-group">\r\n            <div class="col-md-12 col-sm-12 col-xs-12">\r\n              <input type="password" class="form-control input-sm" name="current_pass" id="old_password" placeholder="Current Password" required >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-12 col-sm-12 col-xs-12">\r\n              <input type="password" class="form-control input-sm" name="new_pass" id="new_password" placeholder="New Password ( Atleast six characters.)" pattern=".{6,}" required title="New password should have atleast six characters">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-12 col-sm-12 col-xs-12">\r\n              <input type="password" class="form-control input-sm" name="confirm_pass" id="confirm_password" placeholder="Confirm Password" required>\r\n            </div>\r\n          </div>\r\n          <hr/>\r\n          <div class="to_center">\r\n            <button type="Create" class="btn btn btn-success" id="editpassword">Submit</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/constant_variables.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <form role="form" class="form-horizontal" id="constant_variables_form" method="POST">\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="RESTAURANT_RUSH_TIME_SLAB" class="control-label">Restaurant Rush Time Slab</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_RUSH_TIME_SLAB" value ="' +
((__t = ( constant_variables.RESTAURANT_RUSH_TIME_SLAB)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="RESTAURANT_RUSH_ORDER_COUNT" class="control-label">Restaurant Rush Order Count</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_RUSH_ORDER_COUNT" value ="' +
((__t = ( constant_variables.RESTAURANT_RUSH_ORDER_COUNT)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="RESTAURANT_RUSH_ERROR_MESSAGE" class="control-label">Restaurant Rush Error Message</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_RUSH_ERROR_MESSAGE" value ="' +
((__t = ( constant_variables.RESTAURANT_RUSH_ERROR_MESSAGE)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="RESTAURANT_INVISIBLE_ERROR_MESSAGE" class="control-label">Restaurant Invisible Error Message</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_INVISIBLE_ERROR_MESSAGE" value ="' +
((__t = ( constant_variables.RESTAURANT_INVISIBLE_ERROR_MESSAGE)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="RESTAURANT_INACTIVE_ERROR_MESSAGE" class="control-label">Restaurant Inactive Error Message</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="RESTAURANT_INACTIVE_ERROR_MESSAGE" value ="' +
((__t = ( constant_variables.RESTAURANT_INACTIVE_ERROR_MESSAGE)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="PROMOTION_INVALID_ERROR_MESSAGE" class="control-label">Promotion Invalid Error Message</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="PROMOTION_INVALID_ERROR_MESSAGE" value ="' +
((__t = ( constant_variables.PROMOTION_INVALID_ERROR_MESSAGE)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="OPEN_LOGO_SIZE" class="control-label">Open Logo Size</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="OPEN_LOGO_SIZE" value ="' +
((__t = ( constant_variables.OPEN_LOGO_SIZE)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="CLOSED_LOGO_SIZE" class="control-label">Closed Logo Size</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="CLOSED_LOGO_SIZE" value ="' +
((__t = ( constant_variables.CLOSED_LOGO_SIZE)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="DEACTIVATE_PROMO_CODES" class="control-label">Deactivate Promo Codes</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="hidden" name="DEACTIVATE_PROMO_CODES" value="off">\r\n              <input type="checkbox" class="form-control input-sm" name="DEACTIVATE_PROMO_CODES" ';
 if(constant_variables.DEACTIVATE_PROMO_CODES=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="GS_NUMBER_OF_RESTAURANTS" class="control-label">GS Number of Restaurants</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="GS_NUMBER_OF_RESTAURANTS" value ="' +
((__t = ( constant_variables.GS_NUMBER_OF_RESTAURANTS)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="CALL_BEFORE_ORDER_ACTION" class="control-label">Call Before Order Action</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="hidden" name="CALL_BEFORE_ORDER_ACTION" value="off">\r\n              <input type="checkbox" class="form-control input-sm" name="CALL_BEFORE_ORDER_ACTION" ';
 if(constant_variables.CALL_BEFORE_ORDER_ACTION=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1 visible">\r\n              <label for="ORDER_COUNTER_NUMBER" class="control-label">Order Counter Number</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="text" class="form-control input-sm" name="ORDER_COUNTER_NUMBER" value ="' +
((__t = ( constant_variables.ORDER_COUNTER_NUMBER)) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n\r\n          <hr>\r\n\r\n          <div class ="col-md-offset-1">\r\n            <ul class="nav nav-pills nav-justified" role="tablist" id="myTab">\r\n              <li class="active" role="presentation" id="settings_sync"><a href="#release_update_panel" role="tab" data-toggle="tab">Avoid Release Update Sync</a></li>\r\n              <li  role="presentation" id="location_sync"><a href="#settings_sync_panel" role="tab" data-toggle="tab">Avoid Settings Sync</a></li>\r\n              <li role="presentation" id="menu_sync"><a href="#delivery_areas_sync_panel" role="tab" data-toggle="tab">Avoid Delivery Areas Sync</a></li>\r\n              <li role="presentation" id="profile_sync"><a href="#menu_sync_panel" role="tab" data-toggle="tab">Avoid Menu Sync</a></li>\r\n              <li role="presentation" id="profile_sync"><a href="#avoid_sync_panel" role="tab" data-toggle="tab">Avoid Sync</a></li>\r\n            </ul>\r\n            <br>\r\n          </div>\r\n          <div class="tab-content">\r\n            <div role="tabpanel" class="tab-pane fade in active" id="release_update_panel">\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_RELEASE_UPDATE_SYNC" class="control-label">Avoid Release Update Sync</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="hidden" name="AVOID_RELEASE_UPDATE_SYNC" value="off">\r\n                  <input type="checkbox" class="form-control input-sm" name="AVOID_RELEASE_UPDATE_SYNC" ';
 if(constant_variables.AVOID_RELEASE_UPDATE_SYNC=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_RELEASE_UPDATE_SYNC_START" class="control-label">Avoid Release Update Sync Start</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_RELEASE_UPDATE_SYNC_START" value ="' +
((__t = ( constant_variables.AVOID_RELEASE_UPDATE_SYNC_START)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_RELEASE_UPDATE_SYNC_END" class="control-label">Avoid Release Update Sync End</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_RELEASE_UPDATE_SYNC_END" value ="' +
((__t = ( constant_variables.AVOID_RELEASE_UPDATE_SYNC_END)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div role="tabpanel" class="tab-pane fade in" id="settings_sync_panel">\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_SETTING_SYNC" class="control-label">Avoid Setting Sync</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="hidden" name="AVOID_SETTING_SYNC" value="off">\r\n                  <input type="checkbox" class="form-control input-sm" name="AVOID_SETTING_SYNC" ';
 if(constant_variables.AVOID_SETTING_SYNC=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_SETTING_SYNC_START" class="control-label">Avoid Setting Sync Start</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_SETTING_SYNC_START" value ="' +
((__t = ( constant_variables.AVOID_SETTING_SYNC_START)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_SETTING_SYNC_END" class="control-label">Avoid Setting Sync End</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_SETTING_SYNC_END" value ="' +
((__t = ( constant_variables.AVOID_SETTING_SYNC_END)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div role="tabpanel" class="tab-pane fade in" id="delivery_areas_sync_panel">\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_DELIVERY_AREAS_SYNC" class="control-label">Avoid Delivery Areas Sync</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="hidden" name="AVOID_DELIVERY_AREAS_SYNC" value="off">\r\n                  <input type="checkbox" class="form-control input-sm" name="AVOID_DELIVERY_AREAS_SYNC" ';
 if(constant_variables.AVOID_DELIVERY_AREAS_SYNC=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_DELIVERY_AREAS_SYNC_START" class="control-label">Avoid Delivery Areas Sync Start</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_DELIVERY_AREAS_SYNC_START" value ="' +
((__t = ( constant_variables.AVOID_DELIVERY_AREAS_SYNC_START)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_DELIVERY_AREAS_SYNC_END" class="control-label">Avoid Delivery Areas Sync End</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_DELIVERY_AREAS_SYNC_END" value ="' +
((__t = ( constant_variables.AVOID_DELIVERY_AREAS_SYNC_END)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div role="tabpanel" class="tab-pane fade in" id="menu_sync_panel">\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_MENU_SYNC" class="control-label">Avoid Menu Sync</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="hidden" name="AVOID_MENU_SYNC" value="off">\r\n                  <input type="checkbox" class="form-control input-sm" name="AVOID_MENU_SYNC" ';
 if(constant_variables.AVOID_MENU_SYNC=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_MENU_SYNC_START" class="control-label">Avoid Menu Sync Start</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_MENU_SYNC_START" value ="' +
((__t = ( constant_variables.AVOID_MENU_SYNC_START)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_MENU_SYNC_END" class="control-label">Avoid Menu Sync End</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_MENU_SYNC_END" value ="' +
((__t = ( constant_variables.AVOID_MENU_SYNC_END)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div role="tabpanel" class="tab-pane fade in" id="avoid_sync_panel">\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_SYNC" class="control-label">Avoid Sync</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="hidden" name="AVOID_SYNC" value="off">\r\n                  <input type="checkbox" class="form-control input-sm" name="AVOID_SYNC" ';
 if(constant_variables.AVOID_SYNC=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_SYNC_START" class="control-label">Avoid Sync Start</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_SYNC_START" value ="' +
((__t = ( constant_variables.AVOID_SYNC_START)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n              <div class="form-group">\r\n                <div class="col-md-4 col-md-offset-1 visible">\r\n                  <label for="AVOID_SYNC_END" class="control-label">Avoid Sync End</label>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <input type="text" class="form-control input-sm" name="AVOID_SYNC_END" value ="' +
((__t = ( constant_variables.AVOID_SYNC_END)) == null ? '' : __t) +
'">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <hr/>\r\n          <div class="to_center">\r\n            <button type="Create" class="btn btn btn-success" id="edit_constant_variables">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/copy_restaurant.ejs"] = function(obj) {
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
            pattern : "([a-zA-Z])*([\\-])?([a-zA-Z])+[\\-][1-9]([0-9])*",
            title : "Should contain hypen (-) , Will be something like MA-213 or MUM-MA-213"
          }) )) == null ? '' : __t) +
'\n          <div class="form-group hidden">\n            <label class="col-sm-4 control-label col-lg-4" for="copy_profile">Copy Profile?</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="copy_profile">                          \n                    </label>\n                </div>\n            </div>\n          </div>\n          <div class="form-group">\n            <label class="col-sm-4 control-label col-lg-4" for="copy_logo">Copy Logo of Restaurant?</label>\n            <div class="col-lg-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="copy_logo">                          \n                    </label>\n                </div>\n            </div>\n          </div>\n          <hr/>\n          <div class="to_center">\n            <button type="Create" class="btn btn btn-success" id="copy_restaurant">Copy</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/dashboard.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-md-2 tile" onclick="window.location.hash=\'restaurants\';">\n    <div class="panel">\n      <span class="label label-primary pull-right">Data Entry</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-terques"><i class="fa fa-cutlery"></i></span>\n            <h4 class="tile-title">Restaurants</h4>\n            <small>Create, Edit & Manage Restaurants</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/order_panel/index.html#/\';">\n    <div class="panel">\n      <!-- <span class="label label-success pull-left">Beta</span> -->\n      <span class="label label-warning pull-right">Order Management</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel"> \n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-green"><i class="fa fa-bolt"></i></span>\n            <h4 class="tile-title">Live CS Panel</h4>\n            <small>New CS Order Panel</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/order_panel/index.html#order_search/\';">\n    <div class="panel">\n      <!-- <span class="label label-success pull-left">Beta</span> -->\n      <span class="label label-warning pull-right">Order Management</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-yellow"><i class="fa fa-search"></i></span>\n            <h4 class="tile-title">Search</h4>\n            <small>New Order Panel</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/order_panel/index.html#/all_ff_orders\';">\n    <div class="panel">\n      <!-- <span class="label label-success pull-left">Beta</span> -->\n      <span class="label label-inverse pull-right">Fulfilment</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-green"><i class="fa fa-bolt"></i></span>\n            <h4 class="tile-title">Live FF Panel</h4>\n            <small>New FF Order Panel</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/order_panel/index.html#delivery_boys\';">\n    <div class="panel">\n      <!-- <span class="label label-success pull-left">Beta</span> -->\n      <span class="label label-inverse pull-right">Fulfilment</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-terques"><i class="fa fa-shopping-cart"></i></span>\n            <h4 class="tile-title">Fulfilment</h4>\n            <small>Fulfilment Operations - Manage DBs</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/restaurant/order_management/statistics\';">\n    <div class="panel">\n      <!-- <span class="label label-success pull-left">Beta</span> -->\n      <span class="label label-warning pull-right">Order Management</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-red"><i class="fa fa-area-chart"></i></span>\n            <h4 class="tile-title">Statistics</h4>\n            <small>Statistics Panel</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div class="row">\n  <div class="col-md-2 tile" onclick="window.location.href=\'/restaurant/crm/closed_timings\';">\n    <div class="panel">\n      <span class="label label-info pull-right">Miscellaneous</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-red"><i class="fa fa-clock-o"></i></span>\n            <h4 class="tile-title">Closed Timings</h4>\n            <small>Closed Timings</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/restaurant/crm/size_lists\';">\n    <div class="panel">\n      <span class="label label-info pull-right">Miscellaneous</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-terques"><i class="fa fa-list"></i></span>\n            <h4 class="tile-title">Size Lists</h4>\n            <small>Edit size Lists</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/restaurant/crm/cuisines\';">\n    <div class="panel">\n      <span class="label label-info pull-right">Miscellaneous</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-yellow"><i class="fa fa-bookmark"></i></span>\n            <h4 class="tile-title">Cuisines</h4>\n            <small>Cuisines</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/restaurant/crm/banks\';">\n    <div class="panel">\n      <span class="label label-info pull-right">Miscellaneous</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-green"><i class="fa fa-inr"></i></span>\n            <h4 class="tile-title">Banks</h4>\n            <small>Add Banks</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/restaurant/crm/offer/show\';">\n    <div class="panel">\n      <span class="label label-info pull-right">Miscellaneous</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-red"><i class="fa fa-tags"></i></span>\n            <h4 class="tile-title">Offers</h4>\n            <small>Offers</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/location/admin/localities\';">\n    <div class="panel">\n      <span class="label label-inverse pull-right">Localities</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-red"><i class="fa fa-map-marker"></i></span>\n            <h4 class="tile-title">Localities</h4>\n            <small>Locality Management</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-md-2 tile" onclick="window.location.href=\'/user/roles\';">\n    <div class="panel">\n      <span class="label label-default pull-right">Admin</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-red"><i class="fa fa-key"></i></span>\n            <h4 class="tile-title">Roles</h4>\n            <small>Manage Roles</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/user/user_search\';">\n    <div class="panel">\n      <span class="label label-default pull-right">Admin</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-green"><i class="fa fa-users"></i></span>\n            <h4 class="tile-title">Users</h4>\n            <small>Manage Users</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/app/index.html#settings\';">\n    <div class="panel">\n      <span class="label label-default pull-right">Admin</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-terques"><i class="fa fa-cogs"></i></span>\n            <h4 class="tile-title">Settings</h4>\n            <small>Manage Settings</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/app/index.html#restaurantposition\';">\n    <div class="panel">\n      <span class="label label-primary pull-right">Marketing</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-yellow"><i class="fa fa-sort-numeric-asc"></i></span>\n            <h4 class="tile-title">Abs Position</h4>\n            <small>Manage Absolute Positions</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="col-md-2 tile" onclick="window.location.href=\'/central/app/index.html#dishes\';">\n    <div class="panel">\n      <span class="label label-primary pull-right">Data Entry</span><br/>\n      <div class="panel-body">\n        <div class="top-stats-panel">\n          <div class="gauge-canvas">\n            <span class="dashboard-icon ico-yellow"><i class="fa fa-spoon"></i></span>\n            <h4 class="tile-title">Dishes</h4>\n            <small>Manage Dishes</small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/deleted_restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n\t<div class="col-lg-12">\r\n\t\t<section class="panel">\r\n\t\t    <div class="panel-body"> \r\n\t\t    \t<section id="alerts"></section>                           \r\n\t\t        <div class="row">\t\t        \t\r\n\t\t            <div class="col-lg-2">\r\n\t\t                <div class="input-group hide">\r\n\t\t                    <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\r\n\t\t                    <input type="text" id="filter" class="form-control input-sm" placeholder="type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (meta.search)) == null ? '' : __t) +
'">\r\n\t\t                </div>\r\n\t\t                <h4> Deleted Restaurants </h4>\r\n\t\t            </div>\r\n\t\t            <div class="col-lg-4">\r\n\t\t                <a class="btn btn-success btn-sm" href="#restaurants/new"><i class="fa fa-plus-square"></i> Add a new Restaurant</a>\r\n                    <a class="btn btn-info btn-sm" href="#restaurants/invisible"><i class="fa fa-file-text"></i> View Invisible </a>\r\n\t\t            </div>\r\n\t\t            <span class="pull-right">\r\n\t\t\t          \t<a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>&nbsp;&nbsp;\r\n\t\t\t        \t</span>                                \r\n\t\t        </div>\r\n\t\t        <hr/>\r\n\t\t        <div class="row">\t\t            \r\n\t\t            <p class="lead text-center"><span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
' </p>\r\n\t\t        </div>&nbsp;\r\n\t\t        <div class="row">\r\n\t\t        \t<div class="col-md-12 text-center">\r\n\t\t        \t\t<ul class="pagination pagination-sm">\r\n                  <li><a id="1" class="page_number">First</a></li>\r\n                  <li><a id="previous" class="page_number">«</a></li>\r\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\r\n                  ';
 } ;
__p += ' \r\n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n                  <li><a id="next" class="page_number">»</a></li>\r\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n                </ul>\r\n                <h5> 20 Restaurants per page </h5>\r\n\t\t        \t</div>\r\n\t\t        </div>\r\n\t\t        <hr/>\r\n\t\t        <div class="row">\r\n\t\t          <div class="col-lg-12">\r\n\t\t            <table class="table  table-hover general-table">\r\n\t\t              <thead>\r\n\t\t                  <tr>\r\n\t\t                      <th> # </th>\r\n\t\t                      <th>Name</th>\r\n\t\t                      <th class="hidden-phone">Last updated</th>\r\n\t\t                      <th>Status</th>\r\n\t\t                      <th>Actions</th>\r\n\t\t                      <th></th>\r\n\t\t                  </tr>\r\n\t\t              </thead>\r\n\t\t              <tbody class="searchable">\r\n\t\t                ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \r\n\t\t                  <tr data-locality="' +
((__t = (restaurant.get("locality_id"))) == null ? '' : __t) +
'" data-status="' +
((__t = ( get_status(restaurant.get("status")) )) == null ? '' : __t) +
'" data-call="' +
((__t = (restaurant.get("call_as_user")?'YES':'NO')) == null ? '' : __t) +
'"> \r\n\t\t                    <td>\r\n\t\t                      <p class="text-info">\r\n\t\t                        ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\r\n\t\t                      </p>\r\n\t\t                    </td>\r\n\t\t                    <td>\r\n\t\t                        <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,25) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\r\n\t\t                        <p class="text-muted">\r\n\t\t                          <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\r\n\t\t                        </p>                                   \r\n\t\t                    </td>\r\n\t\t                    <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\r\n\t                    \t<td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>\t\t  \r\n\t                    \t<td>                                        \r\n\t\t\t\t\t\t\t\t\t        <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile" disabled="disabled"><i class="fa fa-edit"></i> Edit</a> \r\n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" disabled="disabled"><i class="fa fa-list"></i> Menu</a>\r\n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" disabled="disabled"><i class="fa fa-check-square-o"></i> Choices</a>\r\n\t\t\t\t\t\t\t\t\t        <div class="btn-group">\r\n\t\t\t\t\t\t\t\t\t            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button" disabled="disabled"> <span class="caret"></span></button>\r\n\t\t\t\t\t\t\t\t\t            <ul role="menu" class="dropdown-menu">\r\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t                <li id="copy_restaurant">\r\n\t\t\t\t\t\t\t\t\t                \t\t<a class="copy_anchor" href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/copy"><i class="fa fa-copy"></i> Copy</a>\r\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="copy_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t                \t</li>\r\n\t\t\t\t\t\t\t\t\t                ';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t                \t<li class="divider"></li>\r\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")==1){ ;
__p += '\r\n\t\t\t\t\t\t\t\t\t                \t<li id="delete_restaurant">\r\n\t\t\t\t\t\t\t\t\t                \t\t<a class="delete_anchor"><i class="fa fa-times"></i> Delete</a>\r\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="delete_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t                \t</li>\r\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\r\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\r\n\t\t\t\t\t\t\t\t\t                \t<li id="invisible_restaurant">\r\n\t\t\t\t\t\t\t\t\t                \t\t<a class="invisible_anchor"><i class="fa fa-unlink"></i> Invisible</a>\r\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="invisible_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t                \t</li>\r\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\t\t\t\t\t\t\t\t                \r\n\t\t\t\t\t\t\t\t\t            </ul>\r\n\t\t\t\t\t\t\t\t\t        </div>                                        \r\n\t\t\t\t\t\t\t\t\t\t    </td>\t\t\t\t\t\t\t\t\t\t    \r\n\t\t                    <td>\r\n\t\t\t\t\t\t\t\t\t\t      <a class="btn btn-success btn-sm restaurant_restore" id="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'"><i class="fa fa-refresh"></i> Restore</a>                                          \r\n\t\t\t\t\t\t\t\t\t\t    </td>\r\n\t\t                  </tr>\r\n\t\t                ';
 }); ;
__p += '                                                 \r\n\t\t              </tbody>\r\n\t\t            </table>\t\t            \r\n\t\t          </div>\r\n\t\t        </div>\r\n\t\t        <hr/>\r\n\t\t        <div class="row">\r\n\t\t        \t<div class="col-md-12 text-center">\r\n\t\t        \t\t<ul class="pagination pagination-sm">\r\n                  <li><a id="1" class="page_number">First</a></li>\r\n                  <li><a id="previous" class="page_number">«</a></li>\r\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\r\n                  ';
 } ;
__p += ' \r\n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n                  <li><a id="next" class="page_number">»</a></li>\r\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n                </ul>\r\n                <h5> 20 Restaurants per page </h5>\r\n\t\t        \t</div>\r\n\t\t        </div>\r\n\t\t        \r\n\t\t    </div>\r\n\t\t</section>\r\n\t</div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/deliveryArea.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12"  id="delivery_area_list">\n\n    <div class="panel">\n      <div class="panel-body">\n      <button type="button" class="btn btn-white btn-sm pull-right preview_locality_group hidden-xs" disabled data-index = "">\n        <i class="fa fa-map-marker" style="color:#fa8564"></i> Map Preview \n      </button>\n      <h3 class="to_center">Edit: Delivery Areas</h3>\n      <hr>\n      \n        <form accept-charset="UTF-8" class="form-horizontal" id="delivery_area_form" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id" id="id">\n\n          <input type="hidden" name="delivery_area_count" value="' +
((__t = ( deliveryAreas.length )) == null ? '' : __t) +
'">\n          <div class="form-group">\n            <label for="locality_filter" class="col-md-3 control-label" style="padding-top:2px">Select a locality: </label>\n            <div class="col-md-8">\n              <select name="locality_filter" id="locality_filter" class="" >\n                <option value="" selected="selected"></option>\n                ';
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
__p += '\n              </select>\n              &nbsp;\n              <!--<button type="button" class="btn btn-info btn-sm" id="lock"><i class="fa fa-lock"></i> </button>\n              <button type="button" class="btn btn-info btn-sm" id="unlock"><i class="fa fa-unlock"></i> </button>-->\n              <button type="button" class="btn btn-danger btn-sm" id="clear_filter"><i class="fa fa-times"></i> Clear</button>\n            </div>\n            <br/><br/>\n            <div>\n              <label class="col-md-3 control-label" style="padding-top:2px">Selected localities: </label>\n              <div id="locality_tags" class="col-md-8">\n                ';
 _.each(collections.localities, function(locality, i) { ;
__p += '\n                  ';
 if (tags[locality.id] != undefined) { ;
__p += '\n                    <span class="label label-primary" style="background: #1fb5ad; margin-right: 2px;" id="selected_locality_' +
((__t = ( locality.id )) == null ? '' : __t) +
'">' +
((__t = ( locality.name )) == null ? '' : __t) +
': <span class="badge" id="selected_badge_' +
((__t = ( locality.id )) == null ? '' : __t) +
'" style="background: #1fb5ad; padding-top: 2px; margin-left: 2px;">' +
((__t = ( tags[locality.id] )) == null ? '' : __t) +
'</span></span>\n                    ';
 total += 1 ;
__p += '\n                  ';
 } ;
__p += '\n                  ';
 if (total == deliveryAreas.length) { return false } ;
__p += '\n                ';
 }) ;
__p += '\n                <span class="label label-primary pull-right" style="background: #1fb5ad;" id="total_localities">Total : <span class="badge" id="total_badge" style="background: #1fb5ad; padding-top: 2px; margin-left: 2px;">' +
((__t = ( deliveryAreas.length )) == null ? '' : __t) +
'</span></span>\n              </div>\n            </div>\n          </div>\n          <hr/>\n      <table class="table table-hover delivery_area_table">\n\n        <thead>\n          <th class="" >Sub-Locality</th>\n          <th class="delivery_time">Min Delivery Amt</th>\n          <th class="delivery_time">Delivery Charges</th>\n          <th class="delivery_time">Delivery Time Non Rush Hours (In minutes)</th>\n          <th class="delivery_time">Delivery Time Rush hours (In minutes)</th>\n          <th class="delivery_time hidden-xs">Actions</th>\n        </thead>\n\n        <tbody>\n              ';
 _.each(deliveryAreas, function(deliveryArea, i) { ;
__p += '\n                ' +
((__t = ( partial('partials_deliveryArea', {
                  i: i,
                  deliveryArea: deliveryArea,
                  localities: collections.groups,
                  group_map: group_map
                }) )) == null ? '' : __t) +
'\n              ';
 }) ;
__p += '\n        </tbody>\n\n      </table>\n\n          <br>\n\n          <button type="button" class="btn btn-info btn-sm add_delivery_area"><i class="fa fa-plus"></i> Add Delivery Area</button>\n\n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_locality">\n          </div>\n\n\n        </form>\n        \n      </div>\n    </div><!-- end well -->\n  </div>\n</div><!-- end row -->\n\n<div class="row hidden-xs" id="map_loader" style="opacity:0;zoom:0">\n  <div class="col-xs-12">\n    <div class="panel">\n      <div class="panel-body clearfix">\n        <div class=\'row\'>\n          <div class=\'col-sm-4\'>\n              <h4 class="pull-left"> Delivery Areas <span id="polygon_name" class="small"></span></h4>\n          </div>\n          <div class=\'col-sm-3\'>\n             <div class="btn-group pull-right">\n              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n                 Heat Map <span class="caret"></span>\n              </button>\n              <ul class="dropdown-menu" role="menu">\n                <li id="delivery_time"><a>Delivery Time</a></li>\n                <li id="minimum_order"><a>Minimum Order amount</a></li>\n                <li class="hidden" id="normal_view"><a>Back to normal View</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\'col-sm-3\'>\n              <button class="btn btn-warning btn-sm pull-right show_all" id="on">Show All</button>\n          </div>\n          <div class=\'col-sm-2\'>\n              <button class="btn btn-danger btn-sm pull-right" id="close_locality_group_preview"><i class="fa fa-times"></i> Close Map Preview </button>      \n          </div>\n        </div>\n        \n        \n        <div id="map-canvas"></div>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/delivery_area.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12"  id="delivery_area_list">\n\n    <div class="panel">\n      <div class="panel-body">\n      <a type="button" class="btn btn-white btn-sm pull-right preview_locality_group hidden-xs" disabled data-index = "" href="#restaurant/' +
((__t = ( restaurant.id)) == null ? '' : __t) +
'/map_preview" target="_blank">\n        <i class="fa fa-map-marker" style="color:#fa8564" ></i> Map Preview \n      </a>\n      <h3 class="to_center">Delivery Areas</h3>\n      <hr>\n      \n        <form accept-charset="UTF-8" class="form-horizontal" id="delivery_area_form" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id" id="id">\n\n          <input type="hidden" name="delivery_area_count" value="' +
((__t = ( deliveryAreas.length )) == null ? '' : __t) +
'">\n          <div class="form-group">\n            <label for="locality_filter" class="col-md-3 control-label" style="padding-top:2px">Select a locality: </label>\n            <div class="col-md-8">\n              <select name="locality_filter" id="locality_filter" class="" >\n                <option value="" selected="selected"></option>\n                ';
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
__p += '\n              </select>\n              &nbsp;\n          \n              <button type="button" class="btn btn-danger btn-sm" id="clear_filter"><i class="fa fa-times"></i> Clear</button>\n            </div>\n            <br/><br/>\n            <div>\n              <label class="col-md-3 control-label" style="padding-top:2px">Selected localities: </label>\n              <div id="locality_tags" class="col-md-8">\n                ';
 _.each(collections.localities, function(locality, i) { ;
__p += '\n                  ';
 if (tags[locality.id] != undefined) { ;
__p += '\n                    <span class="label label-primary" style="background: #1fb5ad; margin-right: 2px;" id="selected_locality_' +
((__t = ( locality.id )) == null ? '' : __t) +
'">' +
((__t = ( locality.name )) == null ? '' : __t) +
': <span class="badge" id="selected_badge_' +
((__t = ( locality.id )) == null ? '' : __t) +
'" style="background: #1fb5ad; padding-top: 2px; margin-left: 2px;">' +
((__t = ( tags[locality.id] )) == null ? '' : __t) +
'</span></span>\n                    ';
 total += 1 ;
__p += '\n                  ';
 } ;
__p += '\n                  ';
 if (total == deliveryAreas.length) { return false } ;
__p += '\n                ';
 }) ;
__p += '\n                <span class="label label-primary pull-right" style="background: #1fb5ad;" id="total_localities">Total : <span class="badge" id="total_badge" style="background: #1fb5ad; padding-top: 2px; margin-left: 2px;">' +
((__t = ( deliveryAreas.length )) == null ? '' : __t) +
'</span></span>\n              </div>\n            </div>\n\n            \n          </div>\n          <hr/>\n      <table class="table table-hover delivery_area_table">\n\n        <thead>\n          <th class="" >Sub-Locality</th>\n          <th class="delivery_time">Min Delivery Amount</th>\n          <th class="delivery_time">Delivery Charges</th>\n          <th class="delivery_time">Delivery Time Non Rush Hours (In minutes)</th>\n          <th class="delivery_time">Delivery Time Rush hours (In minutes)</th>\n          <th class="delivery_time">Express?</th>\n        </thead>\n\n        <tbody>\n          ';
 _.each(deliveryAreas, function(deliveryArea, i) { ;
__p += '\n            ' +
((__t = ( partial('partials_deliveryArea', {
              i: i,
              deliveryArea: deliveryArea,
              localities: collections.groups,
              group_map: group_map
            }) )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n        </tbody>\n\n      </table>\n\n          <br>\n\n          <button type="button" class="btn btn-info btn-sm add_delivery_area"><i class="fa fa-plus"></i> Add Delivery Area</button>\n\n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_locality">\n          </div>\n\n\n        </form>\n        \n      </div>\n    </div><!-- end well -->\n  </div>\n</div><!-- end row -->\n';

}
return __p
};

this["JST"]["app/scripts/templates/dish_item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">\n        <span class="text-info hidden-xs">#' +
((__t = ( restaurant.form_id )) == null ? '' : __t) +
'</span>\n        ' +
((__t = (get_status_span(restaurant.status))) == null ? '' : __t) +
'\n        <span>&nbsp;&nbsp;</span>\n        <span class="lead"> ' +
((__t = (restaurant.name)) == null ? '' : __t) +
'</span>\n        <span>&nbsp;&nbsp;</span>\n        <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.locality_id))) == null ? '' : __t) +
'</span>\n        <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.status)) == null ? '' : __t) +
'"></span>\n        <span>\n          <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/profile"><i class="fa fa-edit"></i> Edit</a> \n          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" target="_blank"><i class="fa fa-list"></i> Menu</a>\n          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>\n        </span>\n        <span class="pull-right">\n          <a class="btn btn-primary " href="#dishes"><i class="fa fa-spoon"></i> Dishes</a>\n        </span>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="row">\n<div class="col-md-6">\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section>\n        <form accept-charset="UTF-8" class="form-horizontal" id="update_status_form" data-item="' +
((__t = ( dish_item.id )) == null ? '' : __t) +
'" method="post">  \n          <div class="form-group">\n            <label for="status_change" class="col-md-4 control-label">Change Status to: </label>\n            <div class="col-md-8">\n              <select name="status_change" class="form-inline-element input-sm" id="status_change">\n                <option value=null> No Action </option>   \n                ';
 _.each(collections.status,function(i,stat,j){;
__p += '\n                  ';
if(i==2 || i==3){ ;
__p += '\n                    <option value="' +
((__t = (i)) == null ? '' : __t) +
'" >' +
((__t = (stat)) == null ? '' : __t) +
'</option>\n                  ';
 } ;
__p += '\n                ';
});;
__p += '             \n              </select>\n              <p class="help-block text-info">Will immediately change the status </p>\n            </div>\n          </div>       \n\n        <div class="form-group">\n            <label class="col-md-4 control-label">Disable for : </label>\n            <div class="col-md-3">\n              <select name="timeperiod" class="form-inline-element input-sm" id="timeperiod">\n                <option value="forever">Forever</option>   \n                <option value="minutes">Minutes</option>\n                <option value="hours">Hours</option>\n                <option value="days">Days</option>\n                <option value="weeks">Weeks</option>\n                <option value="months">Months</option>\n              </select>\n            </div>\n            <div class="col-md-3">\n              <input type="number" class="form-control input-sm hidden" name="time" id="time-value"autocomplete="off" min=1 >\n            </div>\n        </div>   \n         \n        <div class="form-group">\n            <label class="col-md-4 control-label">* Comment</label>\n            <div class="col-md-6">\n                <input type="text" class="form-control input-sm" name="comment" id= "status_comment" required autocomplete="off" >\n            </div>\n        </div>\n        \n        <div class="form-group">\n            <div class="col-lg-offset-4 col-lg-6">\n                <button class="btn btn-success btn-sm" id="update_status"  >Update</button>\n                <a class="btn btn-danger btn-sm" href="#dishes">Close</a>\n            </div>\n        </div>\n    </form>\n    </div>\n    </div>                           \n  </div>\n  <div class="col-md-6">\n    <div class="feed-box text-center">\n        <section class="panel">\n            <div class="panel-body">\n                <div class="corner-ribon blue-ribon">\n                    <i class="fa fa-spoon"></i>\n                </div>\n                <!-- <a href="#">\n                    <img alt="" src="images/lock_thumb.jpg">\n                </a> -->\n                <h1>' +
((__t = ( dish_item.name )) == null ? '' : __t) +
'</h1>\n                <p>' +
((__t = ( dish_item.description )) == null ? '' : __t) +
'</p>\n               ' +
((__t = ( get_status_span(parseInt(dish_item.status)) )) == null ? '' : __t) +
'\n               <div class="panel">\n                  <div class="panel-body">\n                   <div class="form-group">\n                      <label class="col-md-5 control-label text-right">Available on :</label>\n                      <div class="col-md-7">\n                          <label class="col-md-12 text-left">' +
((__t = ( get_available_days(dish_item.available_days) )) == null ? '' : __t) +
'</label>\n                      </div>\n                    </div>\n                    <div class="form-group">\n                      <label class="col-md-5 control-label text-right">Type :</label>\n                      <div class="col-md-7">\n                          <label class="col-md-12 text-left">' +
((__t = ( dish_item.veg_type )) == null ? '' : __t) +
'</label>\n                      </div>\n                    </div>\n                    <div class="form-group">\n                      <label class="col-md-5 control-label text-right">Image :</label>\n                      <div class="col-md-7">\n                          <label class="col-md-12 text-left">' +
((__t = ( dish_item.image_file_name )) == null ? '' : __t) +
'</label>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n            </div>\n        </section>\n     </div>\n                               \n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/dish_items.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row" id="filters_affix">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">                        \n        <div class="row">             \n          <div class="col-sm-12 col-md-12 col-lg-12">\n              <div class="row">\n                <div class="col-lg-5">\n                  <h4> Dish Items  </h4>\n                </div> \n              </div>\n          </div>             \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-xs-12">\n      <section class="panel">\n        <div class="panel-body" style="display: block;">\n          <div class="adv-table">\n            <table class="display table  dataTable" id="dynamic-table" aria-describedby="dynamic-table_info">\n              <thead>\n                <tr role="row">\n                  <th class="sorting" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-label="Rendering engine: activate to sort column ascending" style="width: 173px;">Dish Name</th>\n                  <th class="sorting" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending" style="width: 232px;">Description</th>\n                  <th class="sorting" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 211px;">Status</th>\n                  <th class="sorting" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending" style="width: 211px;">Available On</th>\n                  <th class="hidden-phone sorting" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending" style="width: 148px;">Restaurant Name</th>\n                  <th class="hidden-phone sorting_desc" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-sort="descending" aria-label="CSS grade: activate to sort column ascending" style="width: 105px;">Push Changes</th>\n                  <th class="hidden-phone sorting_desc" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-sort="descending" aria-label="CSS grade: activate to sort column ascending" style="width: 105px;">Actions</th>\n                  <th class="hidden-phone sorting_desc" role="columnheader" tabindex="0" aria-controls="dynamic-table" rowspan="1" colspan="1" aria-sort="descending" aria-label="CSS grade: activate to sort column ascending" style="width: 105px;">Delivered In</th>\n                </tr>\n              </thead>\n              <tbody role="alert" aria-live="polite" aria-relevant="all">\n                ';
 _.each(dish_items, function(dish_item, i) { ;
__p += ' \n                <tr class="gradeX odd">\n                        <td class=" ">' +
((__t = ( dish_item["Item"].name )) == null ? '' : __t) +
'</td>\n                        <td class=" ">' +
((__t = ( dish_item["Item"].description )) == null ? '' : __t) +
'</td>\n                        <td class="center" >' +
((__t = ( get_status_span(dish_item["Item"].status) )) == null ? '' : __t) +
'</td>\n                        <td class=" "> ' +
((__t = ( get_available_days(dish_item["Item"].available_days) )) == null ? '' : __t) +
' </td>\n                        <td class="center">' +
((__t = ( dish_item["Restaurant"].name )) == null ? '' : __t) +
'</td>\n                        <td class="center">\n                          ';
 if(dish_item["Restaurant"].version_dirty_bit){ ;
__p += '\n                            <button type="button" class="btn btn-warning btn-sm push_menu"> Push Changes </button>\n                          <input type="hidden" class="push_menu_id" value="' +
((__t = (dish_item["Item"].restaurant_id)) == null ? '' : __t) +
'">\n                          ';
 } ;
__p += '\n                        </td>\n                        \n                        <td><a class="btn btn-info btn-sm" href="#dishes/' +
((__t = ( dish_item["Item"].id )) == null ? '' : __t) +
'">Edit</a></td>\n                        <td class=" ">' +
((__t = (_.pluck( dish_item["Restaurant"].delivers_in,'Sub-Locality').join(',') )) == null ? '' : __t) +
' </td>\n                </tr>\n                ';
 });;
__p += '\n              </tbody>\n            </table>\n          </div> \n        </div>\n      </section>\n  </div>\n</div>\n  ';

}
return __p
};

this["JST"]["app/scripts/templates/dish_type_tag.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- dish type tag add / edit  -->\n<div class="row">\n  <div class="col-md-6 col-md-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>\n        <h3 class="to_center">  ';
 if(dish_type_tag) { ;
__p += ' Update Dish Type Tag  ';
 } else {;
__p += ' Create new Dish Type Tag  ';
 };
__p += ' </h3>\n        <hr/>\n        <form role="form" class="form-horizontal" id="dish_type_tag_form" method="POST">\n\n          ' +
((__t = ( partial('partials_markupText', {
            id: "type",
            placeholder: "Enter Keyword",
            label: "Keyword",
            name: "keyword",
            value: dish_type_tag ? dish_type_tag.get("keyword") : "",
            required: true
          }) )) == null ? '' : __t) +
'\n\n          <div class="form-group">\n          <div class="col-xs-1 visible-xs"></div>\n          <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">* Dish Type Tag</label>\n          <div class="col-md-6 col-sm-6 col-xs-6">\n          <select class="form-control col-md-6" name="tag" id="tag">\n            <option value="-1" selected> --Select-- </option>                         \n            ';
 _.each(collections.veg_types,function(i,type,j){ ;
__p += '\n              <option value="' +
((__t = (i)) == null ? '' : __t) +
'" ';
 if(dish_type_tag && dish_type_tag.get("tag")==i ) { ;
__p += 'selected';
}   ;
__p += ' >' +
((__t = (type)) == null ? '' : __t) +
'</option>\n            ';
});;
__p += '\n          </select> \n            \n          </div>\n          </div>\n          <hr/>\n          <div class="to_center">\n            ';
 if(dish_type_tag){ ;
__p += '\n            <button type="Update" class="btn btn btn-success edit_promotion" id="edit_promotion_button"> Update</button>\n            ';
 } else { ;
__p += '\n            <button type="Create" class="btn btn btn-success" id="create_new_button"> Create</button>\n            ';
 } ;
__p += '\n          </div>\n        </form>\n        \n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/dish_type_tags.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-lg-8 col-lg-offset-2">\n    <section class="panel">\n        <div class="panel-body"> \n          <section id="alerts"></section> \n\n            <div class="col-lg-5">\n              <h4> Dish Type Tags   <a  href="#dish_type_tags/new" class="btn btn-success btn-sm add"><i class="fa fa-plus-square"></i></i> <span class="hidden-xs">Add a dish type tag</span></a> </h4>\n            </div>                                          \n            </div>\n            <hr/>\n\n            <div class="row">\n              <div class="col-lg-12">\n                <table class="table general-table" id="tags_table">\n                  <thead>\n                      <tr>\n                          <th >Keyword</th>\n                          <th>Tag</th>\n                          <th>Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody class="searchable">\n                    ';
 _.each(tags, function(tag, i) { ;
__p += '                                     \n                      <tr id=\'' +
((__t = ( tag.get("id") )) == null ? '' : __t) +
'\' > \n                        <td class="col-lg-4 keyword" id="keyword-' +
((__t = ( tag.get("id") )) == null ? '' : __t) +
'" >' +
((__t = ( tag.get("keyword") )) == null ? '' : __t) +
'</td>\n                       \n                        <td class="col-lg-4">\n                          ' +
((__t = ( _.invert(collections.veg_types)[tag.get("tag")] )) == null ? '' : __t) +
'\n                        </td>\n                        <td class="col-lg-4"> \n                            <a  href="#dish_type_tags/edit/' +
((__t = ( tag.get("id") )) == null ? '' : __t) +
'" class="btn btn-primary btn-sm save col-lg-5"  id="' +
((__t = ( tag.get("id") )) == null ? '' : __t) +
'" ><i class="fa fa-edit"></i> <span class="hidden-xs"> Edit</span></a> \n                            <div class="col-lg-1" ></div>\n                        \n                            <a class="btn btn-danger btn-sm hidden-xs delete col-lg-5"   id="' +
((__t = ( tag.get("id") )) == null ? '' : __t) +
'"><i class="fa fa-trash-o fa-fw"></i> Delete</a>\n                                      \n                        </td>  \n                      </tr>\n                    ';
 }); ;
__p += '                                                 \n                  </tbody>\n                </table>                \n              </div>\n            </div>\n            <hr/>\n            \n            \n        </div>\n    </section>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/documents.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\r\n</div>\r\n\r\n<div class="row">\r\n  <!-- form component -->\r\n  <div class="col-xs-12">\r\n\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n      <h2 class="to_center">Logo</h2>\r\n      <hr>\r\n      <form class="form-horizontal" id="" method="post" enctype="multipart/form-data">\r\n        <input type="hidden" value="' +
((__t = ( id )) == null ? '' : __t) +
'" name="restaurant_id" id="restaurant_id">\r\n        <input type="hidden" value="' +
((__t = ( count )) == null ? '' : __t) +
'" name="count" id="count">\r\n        <input type="hidden" value="' +
((__t = ( count )) == null ? '' : __t) +
'" name="pivot" id="pivot">\r\n        <div class="form-group">\r\n          <label class="control-label col-md-4">Restaurant Logo</label>\r\n          <div class="controls col-md-8">                                    \r\n              ';
if(logo.logo != null){ ;
__p += '\r\n                <input type="file" name="logo" id="logo" class="form-control input-sm hide">\r\n                <div class="fileupload fileupload-new" data-provides="fileupload">\r\n                  <input type="hidden" id="logo_url" value="' +
((__t = (logo.logo)) == null ? '' : __t) +
'" >\r\n                  <div class="fileupload-new thumbnail pull-left" >\r\n                      <img src="' +
((__t = (logo.logo+"?"+ new Date().H.getTime())) == null ? '' : __t) +
'" class="img-responsive" id="current_logo" alt="Error loading the image!">\r\n                  </div> \r\n                  &nbsp;&nbsp; \r\n                  <!--<button type="button" class="btn btn-white btn-sm" id="change_image"> Change </button>-->\r\n                  <a href="/restaurant/data_entry/restaurants/download_logo/' +
((__t = ( id )) == null ? '' : __t) +
'" class="btn btn-info btn-sm" id="download_logo" target="_blank"><i class="fa fa-download"></i> Download </a>\r\n                  <button type="button" class="btn btn-danger btn-sm" id="delete_current_logo"><i class="fa fa-times"></i> Delete</button>\r\n                  <button type="button" class="btn btn-white btn-sm hide" id="restore_logo"><i class="fa fa-refresh"></i> Restore</button>                      \r\n                  <p class="text-warning hide" id="delete_info">&nbsp;&nbsp; Image will be deleted after you click on <span class="text-primary">\'Update Logo\'.</span> </p>                 \r\n                  <input type="hidden" name="delete_logo" id="delete_logo" value=false>\r\n                </div>\r\n\r\n              ';
 }else{ ;
__p += '\r\n                <input type="file" name="logo" id="logo" class="form-control input-sm">\r\n              ';
 } ;
__p += '\r\n          </div>\r\n        </div>\r\n        <div class="form-group">\r\n          <div class="controls col-md-6 col-md-offset-4">  \r\n            ';
if(logo.logo_updated_at != 0){ ;
__p += '<p class=""> Logo last updated : <strong><span data-livestamp="' +
((__t = ( logo.logo_updated_at )) == null ? '' : __t) +
'"></span> | ' +
((__t = (timeConverter(logo.logo_updated_at))) == null ? '' : __t) +
'</strong></p>';
 } ;
__p += '\r\n            <button type="button" class="btn btn-primary btn-sm update_logo" id="update_logo"> Update Logo </button>\r\n          </div>\r\n        </div>\r\n        <hr/>\r\n        <h2 class="to_center"> Documents </h2>\r\n        <hr/>\r\n        ';
 _.each(documents, function(document, i) { ;
__p += '\r\n          <div class="row">\r\n            <div class="col-sm-4 col-sm-offset-4">\r\n              <div class="activity-desk">\r\n                <span class="alert-icon pull-left bg-terques"><i class="fa fa-file-text"></i></span>  \r\n                <span class="label label-danger pull-right delete_doc" style="cursor:pointer"><i class="fa fa-times"></i> Delete</span>\r\n                <input type="hidden" value="' +
((__t = (document.get("id"))) == null ? '' : __t) +
'" id="delete_id">\r\n                <h3 class="terques">' +
((__t = (document.get("name"))) == null ? '' : __t) +
'</h3> \r\n                <a class="btn btn-primary btn-sm" href="' +
((__t = (document.get("document"))) == null ? '' : __t) +
'"><i class="fa fa-download"></i> Download </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        ';
 }); ;
__p += '\r\n        <button type="button" class="btn btn-default btn-sm" id="add_document"><i class="fa fa-plus"></i> Add a new document </button>\r\n        \r\n        <!--<button type="submit" class="btn btn-primary btn-sm" id="save_documents"> Save Documents </button>-->\r\n      </form>\r\n      </div>\r\n    </div><!-- end well -->\r\n  </div>\r\n\r\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/edit_category.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Modal for category description -->\r\n<div class="modal fade" id="categoryModal" tabindex="-1" role="dialog" aria-labelledby="categoryModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" title="Close">&times;</button>\r\n        <h4 class="modal-title" id="myCategoryModalLabel">\r\n          <span></span>\r\n        </h4>\r\n      </div>\r\n      <div class="modal-body">\r\n        <form>\r\n            <div style="margin-top:9px;">\r\n                <label for="name_title">Name: </label>\r\n                <input id="category_name" value="' +
((__t = ( category.get('name') )) == null ? '' : __t) +
'" />\r\n            </div>\r\n            <div style="margin-top:9px;">\r\n                <label for="description_title">Description: </label>\r\n                <textarea rows="4" cols="50" class="item_desc" id="category_description">' +
((__t = ( category.get('description') )) == null ? '' : __t) +
'</textarea>\r\n            </div>\r\n        </form>\r\n  \r\n        <form>\r\n            <div style="margin-top:9px;">\r\n                <label for="menu_items_count">Items Count: </label>\r\n                <input type="number" class="item_desc" id="menu_items_count" style="width: 65%;" value="' +
((__t = ( category.get('items_count') )) == null ? '' : __t) +
'">\r\n            </div>\r\n        </form>\r\n  \r\n      </div>\r\n      <div class="modal-footer">\r\n        <button type="button" class="btn btn-primary modal_category_save" data-dismiss="modal" >Save Changes</button>\r\n        <button type="button" class="btn btn-default modal_category_close" data-dismiss="modal">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/edit_profile.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-6 col-md-offset-3">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <h3 class="to_center">Edit Your Profile</h3>\r\n        <hr/>\r\n        <form role="form" class="form-horizontal" id="user_profile_form" method="POST">\r\n          <div class="form-group">\r\n            <div class="col-md-6 col-sm-6 col-xs-6">\r\n              <input type="text" class="form-control input-sm" name="first_name" id="first_name"  placeholder=" First Name" required  value="' +
((__t = (user.get_profile().first_name )) == null ? '' : __t) +
'">\r\n            </div>\r\n            <div class="col-md-6 col-sm-6 col-xs-6">\r\n              <input type="text" class="form-control input-sm" name="last_name" id="last_name"  placeholder="Last Name" required value="' +
((__t = (user.get_profile().last_name )) == null ? '' : __t) +
'">\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-6 col-sm-6 col-xs-6">\r\n              <input type="text" class="form-control input-sm" name="phone" id="phone" placeholder="Phone no."  value="' +
((__t = (user.get_profile().phone_numbers[0].number )) == null ? '' : __t) +
'" disabled />\r\n            </div>\r\n            <div class="col-md-6 col-sm-6 col-xs-6">\r\n              <input type="text" class="form-control input-sm" name="email" id="email" placeholder="Email id" value="' +
((__t = (user.get_profile().email )) == null ? '' : __t) +
'" disabled />\r\n            </div>\r\n          </div>  \r\n          <hr/>\r\n          <div class="to_center">\r\n            <button type="Create" class="btn btn btn-success" id="editprofile">Submit</button>\r\n          </div>\r\n        </form>\r\n        <br/>\r\n        <h3 class="to_center">Edit Your Profile Picture</h3>\r\n        <hr/>\r\n        <form role="form" class="form-horizontal" id="user_avatar_form" method="POST" enctype="multipart/form-data" action="/user/edit_profile_avatar.json">\r\n          <div class="form-group">\r\n            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 col-sm-offset-3" id="avatar_image">\r\n              ';
 if (typeof user.get_profile().avatar != "undefined" && user.get_profile().avatar.success) { ;
__p += '\r\n              <div>\r\n                <img class="center-block" src="' +
((__t = ( user.get_profile().avatar.thumb )) == null ? '' : __t) +
'"/>\r\n                <br />\r\n              </div>\r\n              ';
 } ;
__p += '\r\n              <input type="file" class="form-control input-sm" name="avatar" id="avatar" placeholder="Profile pic">\r\n            </div>\r\n          </div>\r\n          <hr/>\r\n          <div class="to_center">\r\n            <button type="Create" class="btn btn btn-success" id="editavatar">Submit</button>\r\n            &nbsp;&nbsp;\r\n            <button type="Delete" class="btn btn btn-danger" id="deleteavatar">Delete</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/faqs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-sm-10 col-sm-offset-1">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <h3>Frequently Asked Questions</h3>\r\n        <hr/>\r\n        <h4>Where should I login ?</h4>\r\n        <p class = "well">\r\n          There is a common place to login for any panel - <a style = "text-decoration:none" href = "/central/app/index.html#login"> www.tinyowl.co.in/central/app/index.html#login</a> .<br><br>Then you can select the portal you want to open. Login using your contact number and password.\r\n        </p>\r\n        <br/>\r\n        <h4>How should I get access to any panel ?</h4>\r\n        <div class = "well">\r\n          Firstly you should become an agent. Ask one of the following people to make you an agent -<br><br>\r\n            <div class = "row" >\r\n              <div class = "col-md-2"> \r\n                <em> \r\n                  <p style="color:#428bca">Aditya Kesarkar</p>\r\n                  <p style = "color:black">Avik Dey</p>\r\n                  <p style="color:#428bca">Manish Reddy</p>\r\n                  <p style = "color:black">Payal Jain</p>\r\n                  <p style="color:#428bca">Saurabh Goyal</p>\r\n                  <p style = "color:black">Shikhar Paliwal</p>\r\n                  <p style="color:#428bca">Shubham Bansal</p>\r\n                </em>\r\n              </div>\r\n\r\n              <div class = "col-md-2">\r\n                <em>\r\n\r\n                  <p style="color:#428bca">Ashish Tayal</p>\r\n                  <p style = "color:black">Harshvardhan Mandad</p>\r\n                  <p style="color:#428bca">Nikhil Gupta</p>\r\n                  <p style = "color:black">Rajat Jain</p>\r\n                  <p style="color:#428bca">Shahbaz Haider</p>\r\n                  <p style = "color:black">Shreyas Mahajan</p>\r\n                  <p style="color:#428bca">Tanuj Khandelwal</p>\r\n                </em>\r\n              </div>\r\n\r\n            </div>\r\n            <br>\r\n\r\n            Then shoot a mail to <a href="mailto:shikhar@tinyowl.co.in" style="text-decoration:none">shikhar@tinyowl.co.in</a> or <a href="mailto:saurabh@tinyowl.co.in" style="text-decoration:none">saurabh@tinyowl.co.in</a> mentioning your phone number (which you filled in the create agent form) and the labels of access you want (refer to the table 1 given below).\r\n        </div>\r\n        <br/>\r\n        <h4>How can I create an agent ?</h4>\r\n        <div class = "well">\r\n          You can create an agent using the button <em> <strong>"Create new agent"</strong></em>  on the top left corner of <a style = "text-decoration:none" href = "/user/login"> www.tinyowl.co.in/user/login </a> which looks like -<br><br>\r\n            <img src="/createbutton.png">\r\n            <br><br>\r\n\r\n          Ask the person who wants an access to fill the form. Then you may get the following messages<br><br>\r\n          <em> <strong>User already exists.Password was changed and user was added as an employee :-</strong></em> Nothing to worry. Task done<br><br>\r\n          <em> <strong>Agent Created : </strong></em>- Nothing to worry. Task done<br><br>\r\n          On success, the agent should be able to login on <a style = "text-decoration:none" href = "/central/app/index.html#login"> www.tinyowl.co.in/central/app/index.html#login </a><br>\r\n        </div>\r\n        <br/>\r\n        <h4>I am an agent with the required access but I am unable to login and getting an error ?</h4>\r\n        <div class = "well">\r\n          You may be getting the following errors - <br><br>\r\n          <em> <strong>User does not exists</strong></em> - Ask someone to make you an agent.<br><br>\r\n          <em> <strong>Incorrect Username/Password</strong></em> - Try login with your phone number and password.<br><br> \r\n           Still facing the same issue - Try remembering your password. <br><br>\r\n          Not able to remember your password- Treat a tech person and get it reset.\r\n        </div>\r\n\r\n        <br/>\r\n        <h4>Roles and Permissions</h4>\r\n        <table class = "table table-bordered table-condensed table-striped">\r\n          <thead>\r\n            <tr>\r\n              <th class = "col-md-2">LABEL</th>\r\n              <th class = "col-md-1">CONCERNED DEPT.</th>\r\n              <th>ACCESS</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td>Android Release Manager</td>\r\n              <td>App team</td>\r\n              <td>Add a new android version</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>Customer Support Agent</td>\r\n              <td>CS</td>\r\n              <td>Read, Update Order Panel | Order search | Read offer | Data Panel Read only</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>Customer Support Head</td>\r\n              <td>CS</td>\r\n              <td>Read, Update Order Panel | Order search | Read offer | Data Panel Read only | Order Statistics | Create Agent</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>Customer Support Lead</td>\r\n              <td>CS</td>\r\n              <td>ARead, Update Order Panel | Order search | Read offer | Data Panel Read only | Create Agent</td>\r\n            </tr>\r\n\r\n\r\n\r\n            <tr>\r\n              <td>Data Categorization</td>\r\n              <td>Data team</td>\r\n              <td>Edit Restaurant Profile, Menu and Choices</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>Data Entry</td>\r\n              <td>Data team</td>\r\n              <td>Edit Restaurant Profile, Menu and Choices</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>Data Head</td>\r\n              <td>Data team</td>\r\n              <td>Edit Restaurant Profile, Menu and Choices | Create Agent | Restaurant Profile Protected Edit | Add/Remove Cuisines | Add Remove Banks | Add/Remove SizeList | Add/Remove Holidays | Add to Dictionary</td>\r\n            </tr>\r\n\r\n            <tr>\r\n              <td>Data Read Only</td>\r\n              <td>Any</td>\r\n              <td>Read only on Restaurant Profile, Menu and Choices/td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Data Verification</td>\r\n                <td>Data team</td>\r\n                <td>Edit Restaurant Profile, Menu and Choices</td>\r\n              </tr>\r\n\r\n\r\n              <tr>\r\n                <td>Locality Creator</td>\r\n                <td>BD</td>\r\n                <td>Create, Update Localities</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Locality Head</td>\r\n                <td>BD</td>\r\n                <td>Create, Update Localities | Create Agent</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Locality read only</td>\r\n                <td>Any</td>\r\n                <td>Read only on Localities</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Marketing Offer</td>\r\n                <td>Marketing</td>\r\n                <td>Create, Update any offer | Create Agent</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Order Search</td>\r\n                <td>Any</td>\r\n                <td>Read only on Order</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Order Statistics</td>\r\n                <td>Any</td>\r\n                <td>Read order statistics | Download reports</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Outbound Panel</td>\r\n                <td>CS, Marketing</td>\r\n                <td>Send SMS, Email, Notification</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Outbound SMS Only</td>\r\n                <td>Any</td>\r\n                <td>Send SMS</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>Role Manager</td>\r\n                <td>Tech team</td>\r\n                <td>Grant, Revoke access to any employee</td>\r\n              </tr>\r\n\r\n              <tr>\r\n                <td>User Data Manager</td>\r\n                <td>Any</td>\r\n                <td>User Detail</td>\r\n              </tr>\r\n            </tbody>    \r\n        </table>\r\n        <br/>\r\n\r\n        <h4>Quick Links</h4>\r\n        <table class = "table table-bordered table-condensed table-striped">\r\n          <thead>\r\n            <tr>\r\n              <th>LINK TO </th>\r\n              <th>URL\'S</th>\r\n            </tr>\r\n          </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              Login\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/central/app/index.html#login">\r\n                http://www.tinyowl.co.in/central/app/index.html#login\r\n              </a>\r\n            </td>\r\n          </tr>\r\n\r\n\r\n            <tr>\r\n            <td>\r\n              Android Release\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/user/admin/android_releases">\r\n                http://www.tinyowl.co.in/user/admin/android_releases\r\n              </a>\r\n            </td>\r\n          </tr>  <tr>\r\n            <td>\r\n              Live Order Panel\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/restaurant/order_management">\r\n                http://www.tinyowl.co.in/restaurant/order_management\r\n              </a>\r\n            </td>\r\n          </tr>  <tr>\r\n            <td>\r\n             Order Search\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/restaurant/order_management/search">\r\n                http://www.tinyowl.co.in/restaurant/order_management/search\r\n              </a>\r\n            </td>\r\n          </tr>  <tr>\r\n            <td>\r\n              Order Outbound\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/restaurant/order_management/outbound">\r\n                http://www.tinyowl.co.in/restaurant/order_management/outbound\r\n              </a>\r\n            </td>\r\n          </tr>  <tr>\r\n            <td>\r\n              Order Statistics\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/restaurant/order_management/statistics">\r\n               http://www.tinyowl.co.in/restaurant/order_management/statistics\r\n              </a>\r\n            </td>\r\n          </tr>  <tr>\r\n            <td>\r\n             Data Panel\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/central/app/index.html#restaurants">\r\n                http://www.tinyowl.co.in/central/app/index.html#restaurants\r\n              </a>\r\n            </td>\r\n          </tr>\r\n\r\n            <tr>\r\n            <td>\r\n              Locality Panel\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/location/admin/localities">\r\n                http://www.tinyowl.co.in/location/admin/localities\r\n              </a>\r\n            </td>\r\n          </tr>\r\n\r\n            <tr>\r\n            <td>\r\n             Offers\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/restaurant/crm/offer/show">\r\n                http://www.tinyowl.co.in/restaurant/crm/offer/show\r\n              </a>\r\n            </td>\r\n          </tr> \r\n\r\n           <tr>\r\n            <td>\r\n              Roles\r\n            </td>\r\n            <td>\r\n              <a style = "text-decoration:none" href="/user/roles">\r\n                http://www.tinyowl.co.in/user/roles\r\n              </a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n \r\n';

}
return __p
};

this["JST"]["app/scripts/templates/fulfilment.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n\n    <div class="panel">\n      <div class="panel-body">\n      \t<section id="alerts"></section> \n      \t<h2 class="to_center">Edit: Fulfilment</h2>\n      \t<hr>\n      \t<div class="row">\n        \t<form class="form-horizontal" id="" enctype="multipart/form-data">\n            <div class="form-group">\n              <!-- <label for="limit_on_orders" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">LIMIT OF ORDERS</label> -->\n              \n              <!-- <input id="limit_of_orders" type="text" class="form-control input-sm" value="' +
((__t = (limit_of_orders)) == null ? '' : __t) +
'"> -->\n\n\n              ' +
((__t = ( partial('partials_markupNumber', {
                id: "limit_of_orders",
                placeholder: "Number of owners",
                label: "LIMIT OF ORDERS",
                name: "no_of_owners",
                value: limit_of_orders,
                required: false,
                pattern: "/^[0-9]*$/",
                min: "0"
              }) )) == null ? '' : __t) +
'\n            </div>\n            <h2 class = "to_center">\n              Status Messages\n            </h2><br/>\n            ';
for(var i=1; i<=length_messages; i++) {;
__p += '\n              <div class="form-group">\n                <label for="inactive" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">' +
((__t = ( Object.keys(obj)[i-1].toString().replace(/_/g, " "))) == null ? '' : __t) +
'\n                </label>\n                <div class = "col-md-6 col-sm-6 col-xs-6">\n                  <input col="30" rows="3" class="form-control input-sm" name="comments" id="text' +
((__t = (i)) == null ? '' : __t) +
'" placeholder="message" value="' +
((__t = ( obj[Object.keys(obj)[i-1]])) == null ? '' : __t) +
'"></input>\n                </div>\n               </div>\n             ';
};
__p += '\n             <div class = "col-md-6 col-sm-6 col-xs-6">\n             <br/>\n             <div class = "submit_div">\n             <button class="btn btn-primary" id="save_button">Save Changes</button>\n             </div>\n        \t</form>\n      \t</div>\n      </div>\n  \t</div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/global_settings.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-md-12">\n    <div class="panel">\n      <div class="panel-body">\n        <form role="form" class="form-horizontal" id="global_settings_form" method="POST">\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="GOOGLE_API_KEY" class="control-label">Google Api Key</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="GOOGLE_API_KEY" id="google_api_key" value ="' +
((__t = (global_settings.GOOGLE_API_KEY )) == null ? '' : __t) +
'">\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="GEOCODE_PARAMS" class="control-label">Geocode Params</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="GEOCODE_PARAMS" value ="' +
((__t = (global_settings.GEOCODE_PARAMS )) == null ? '' : __t) +
'" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="HOME_PAGE_DISPLAY_ORDER" class="control-label">Home Page Display Order</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="HOME_PAGE_DISPLAY_ORDER" value ="' +
((__t = (global_settings.HOME_PAGE_DISPLAY_ORDER )) == null ? '' : __t) +
'" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="DEFAULT_RESTAURANT_SORTING_CRITERIA" class="control-label">Default Restaurant Sorting Criteria</label>\n            </div>\n            <div class="ccol-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="DEFAULT_RESTAURANT_SORTING_CRITERIA" id="default_restaurant_sorting_criteria" value = "' +
((__t = ( global_settings.DEFAULT_RESTAURANT_SORTING_CRITERIA)) == null ? '' : __t) +
'"required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="AGGR_RESTAURANT_SORTING_CRITERIA" class="control-label">Aggregate Restaurant Sort Criteria</label>\n            </div>\n            <div class="ccol-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="AGGR_RESTAURANT_SORTING_CRITERIA" id="aggr_restaurant_sorting_criteria" value = "' +
((__t = ( global_settings.AGGR_RESTAURANT_SORTING_CRITERIA)) == null ? '' : __t) +
'"required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="HARD_CLOSED_TIMINGS" class="control-label">Hard Closed Timings</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type= "hidden" name="HARD_CLOSED_TIMINGS" value = "off" >\n              <input type="checkbox" class="form-control input-sm" name="HARD_CLOSED_TIMINGS" id="hard_closed_timings" ';
 if(global_settings.HARD_CLOSED_TIMINGS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="HARD_CLOSED_TIMINGS_START" class="control-label">Hard Closed Timings Start</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="HARD_CLOSED_TIMINGS_START" id="HARD_CLOSED_TIMINGS_START" value="' +
((__t = ( global_settings.HARD_CLOSED_TIMINGS_START)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="HARD_CLOSED_TIMINGS_END" class="control-label">Hard Closed Timings End</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="HARD_CLOSED_TIMINGS_END" id="HARD_CLOSED_TIMINGS_END" value="' +
((__t = ( global_settings.HARD_CLOSED_TIMINGS_END)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="APPLY_RUSH_HOUR_TIMINGS" class="control-label">Apply Rush Hour Timings</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type= "hidden" name="APPLY_RUSH_HOUR_TIMINGS" value = "off" >\n              <input type="checkbox" class="form-control input-sm" name="APPLY_RUSH_HOUR_TIMINGS" id="apply_rush_hour_timings" ';
 if(global_settings.APPLY_RUSH_HOUR_TIMINGS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="RUSH_HOUR_TIMINGS" class="control-label">Rush Hour Timings</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="RUSH_HOUR_TIMINGS" id="rush_hour_timings" required value="' +
((__t = ( global_settings.RUSH_HOUR_TIMINGS)) == null ? '' : __t) +
'" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="MIN_OF_MIN_DELIVERY_AMOUNT" class="control-label">Min of Min Delivery Amount</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="MIN_OF_MIN_DELIVERY_AMOUNT" id="min_of_min_delivery_amount" value="' +
((__t = ( global_settings.MIN_OF_MIN_DELIVERY_AMOUNT)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="MAX_OF_MIN_DELIVERY_AMOUNT" class="control-label">Max of Min Delivery Amount</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="MAX_OF_MIN_DELIVERY_AMOUNT" id="max_of_min_delivery_amount" value="' +
((__t = ( global_settings.MAX_OF_MIN_DELIVERY_AMOUNT)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="MIN_OF_DELIVERY_TIME" class="control-label">Min of Delivery Time</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="MIN_OF_DELIVERY_TIME" id="min_of_delivery_time" value="' +
((__t = ( global_settings.MIN_OF_DELIVERY_TIME)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="MAX_OF_DELIVERY_TIME" class="control-label">Max of Delivery Time</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="MAX_OF_DELIVERY_TIME" id="max_of_delivery_time" value="' +
((__t = ( global_settings.MAX_OF_DELIVERY_TIME)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible visible">\n              <label for="COD_ALLOWED_IN_GIFTS" class="control-label">COD allowed in gifts</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type= "hidden" name="COD_ALLOWED_IN_GIFTS" value = "off" >\n              <input type="checkbox" class="form-control input-sm" name="COD_ALLOWED_IN_GIFTS" id="cod_allowed_in_gifts" ';
 if(global_settings.COD_ALLOWED_IN_GIFTS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="DELIVERY_TIME_DELAY" class="control-label">Delivery Time Delay</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="DELIVERY_TIME_DELAY" id="delivery_time_delay" value="' +
((__t = ( global_settings.DELIVERY_TIME_DELAY)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="ORDER_TIMER_REFRESH_TIME" class="control-label">Order Timer Refresh Time</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="ORDER_TIMER_REFRESH_TIME"  value="' +
((__t = ( global_settings.ORDER_TIMER_REFRESH_TIME)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="TRACK_BUTTON_ACTIVATION_TIME" class="control-label">Track Button Activation</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="TRACK_BUTTON_ACTIVATION_TIME" value="' +
((__t = ( global_settings.TRACK_BUTTON_ACTIVATION_TIME)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="ORDER_DISPLAY_LIMIT" class="control-label">Order Display Limit</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="ORDER_DISPLAY_LIMIT" value="' +
((__t = ( global_settings.ORDER_DISPLAY_LIMIT)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="ORDER_DISPLAY_EXPIRY_TIME" class="control-label">Order Display Expiry Time</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="ORDER_DISPLAY_EXPIRY_TIME" value="' +
((__t = ( global_settings.ORDER_DISPLAY_EXPIRY_TIME)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="ORDER_STATUS_UPDATE_FREQ" class="control-label">Order Status Update Freq</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="ORDER_STATUS_UPDATE_FREQ" value="' +
((__t = ( global_settings.ORDER_STATUS_UPDATE_FREQ)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="COINS_MAX_PERCENT" class="control-label">Coins Max Percentage</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="COINS_MAX_PERCENT" value="' +
((__t = ( global_settings.COINS_MAX_PERCENT)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-md-4 col-sm-4 col-xs-4 col-md-offset-1 visible">\n              <label for="COINS_MAX_AMOUNT" class="control-label">Coins Max Amount</label>\n            </div>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="COINS_MAX_AMOUNT" value="' +
((__t = ( global_settings.COINS_MAX_AMOUNT)) == null ? '' : __t) +
'" required >\n            </div>\n          </div>\n\n          <hr/>\n          <div class="to_center">\n            <button type="Create" class="btn btn btn-success" id="edit_global_settings">Save</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/google_map.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-xs-12">\n    <div id="map-canvas"></div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/header.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '    <button type="button" class="navbar-toggle hr-toggle" data-toggle="collapse" data-target=".navbar-collapse">\n        <span class="fa fa-bars"></span>\n    </button>\n\n    <!--logo start-->\n    <div class="brand ">        \n        ';
 var roles = _.collect(user.get_roles(), function(x){ return x['name'] });
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
__p += '  \n            <img src="/owl.png" class="img-responsive logo-fix pull-left"/><p>TinyOwl Central</p>\n        </a>\n        <div ';
 if(active_tab == "profile"){ ;
__p += 'class="sidebar-toggle-box"';
 }else{ ;
__p += ' class="sidebar-toggle-box hidden" ';
 } ;
__p += '>\n            <div class="fa fa-bars"></div>\n        </div>\n    </div>\n    <!--logo end-->\n\n    <div class="horizontal-menu navbar-collapse collapse ">\n        <ul class="nav nav-pills">\n            ';
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
'/profile">\n                Edit Profile\n              </a>\n            </li>\n            <li ';
 if(active_tab == "items"){ ;
__p += 'class="active"';
 } ;
__p += '>\n              ';
 if(_.contains(roles, "Outsource Data Entry Agent")){ ;
__p += '\n                <a href="#restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/items">\n                  Items\n                </a>\n              ';
 } else { ;
__p += ' \n                <a href="/restaurant/crm/restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/menu_items">\n                  Edit Menu\n                </a>\n              ';
};
__p += '\n            </li>\n            <li ';
 if(active_tab == "choices"){ ;
__p += 'class="active"';
 } ;
__p += '>\n             ';
 if(_.contains(roles, "Outsource Data Entry Agent")){ ;
__p += '\n                <a href="#restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/choices">\n                  Choices\n                </a>\n              ';
 } else { ;
__p += ' \n                <a href="/restaurant/crm/restaurants/' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'/menu_choices">\n                  Edit Choices\n                </a>\n              ';
};
__p += '\n            </li>\n            ';
 } ;
__p += '  \n        </ul>\n    </div>\n\n    <!-- bucketadmin profile dropdown code start -->\n    <div class="top-nav clearfix">\n        <ul class="nav pull-right top-menu">\n          <a href="#faqs" class="btn btn-info btn-sm pull-left" style="margin-right:5px;"><i class="fa fa-info-circle"></i> FAQs </a>\n          \n            <!-- user login dropdown start-->\n            ';
 if(profile != null){ ;
__p += '\n                <li class="dropdown">\n                    <a data-toggle="dropdown" class="dropdown-toggle" href="#" data-bypass>\n                        <!--<img alt="" src="images/avatar1_small.jpg">-->\n                        ';
 if(profile != null){ ;
__p += '\n                            ';
 if(typeof profile.avatar != "undefined" && profile.avatar.success) {;
__p += '\n                              <img class="header-avatar-img" src="' +
((__t = ( profile.avatar.sthumb )) == null ? '' : __t) +
'">\n                            ';
 } ;
__p += '\n                            <div class="header-username-wrapper">\n                              <span class="username">' +
((__t = (profile.name || profile.email)) == null ? '' : __t) +
'</span>\n                            </div>\n                        ';
 } ;
__p += '\n                        <b class="caret"></b>\n                    </a>\n                    <ul class="dropdown-menu extended logout">\n                        ';
 if(profile != null){ ;
__p += '\n                            <li><a id="logout"><i class="fa fa-ban fa-fw"></i> Log Out</a></li>\n                            <li><a id="change-password" href="#changepassword"><i class="fa fa-key"></i> Change Password</a></li>\n                            <li><a id="edit-profile" href="#editprofile"><i class="fa fa-pencil fa-fw"></i> Edit Profile</a></li>\n\n                        ';
 } ;
__p += '                    \n                    </ul>\n                </li>\n            ';
 }else{ ;
__p += ' \n                <a href="#login" class="btn btn-primary btn-sm pull-left"> Login </a>\n            ';
 } ;
__p += '\n            <!-- user login dropdown end -->\n        </ul>\n    </div>\n    <!-- bucketadmin profile dropdown code end -->\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/invisible_restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n\t<div class="col-lg-12">\r\n\t\t<section class="panel">\r\n\t\t    <div class="panel-body"> \r\n\t\t    \t<section id="alerts"></section>                           \r\n\t\t        <div class="row">\t\t        \t\r\n\t\t            <div class="col-lg-2">\r\n\t\t                <div class="input-group hide">\r\n\t\t                    <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\r\n\t\t                    <input type="text" id="filter" class="form-control input-sm" placeholder="type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (meta.search)) == null ? '' : __t) +
'">\r\n\t\t                </div>\r\n\t\t                <h4> Invisible Restaurants </h4>\r\n\t\t            </div>\r\n\t\t            <div class="col-lg-4">\r\n\t\t                <a class="btn btn-success btn-sm" href="#restaurants/new"><i class="fa fa-plus-square"></i> Add a new Restaurant</a>\r\n\t\t                <a class="btn btn-danger btn-sm" href="#restaurants/deleted"><i class="fa fa-file-text"></i> View Deleted </a>\r\n\t\t            </div>\r\n\t\t            <span class="pull-right">\r\n\t\t\t          \t<a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>&nbsp;&nbsp;\r\n\t\t\t        \t</span>                                \r\n\t\t        </div>\r\n\t\t        <hr/>\r\n\t\t        <div class="row">\t\t            \r\n\t\t            <p class="lead text-center"><span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
' </p>\r\n\t\t        </div>&nbsp;\r\n\t\t        <div class="row">\r\n\t\t        \t<div class="col-md-12 text-center">\r\n\t\t        \t\t<ul class="pagination pagination-sm">\r\n                  <li><a id="1" class="page_number">First</a></li>\r\n                  <li><a id="previous" class="page_number">«</a></li>\r\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\r\n                  ';
 } ;
__p += ' \r\n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n                  <li><a id="next" class="page_number">»</a></li>\r\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n                </ul>\r\n                <h5> 20 Restaurants per page </h5>\r\n\t\t        \t</div>\r\n\t\t        </div>\r\n\t\t        <hr/>\r\n\t\t        <div class="row">\r\n\t\t          <div class="col-lg-12">\r\n\t\t            <table class="table  table-hover general-table">\r\n\t\t              <thead>\r\n\t\t                  <tr>\r\n\t\t                      <th> # </th>\r\n\t\t                      <th>Name</th>\r\n\t\t                      <th class="hidden-phone">Last updated</th>\r\n\t\t                      <th>Status</th>\r\n\t\t                      <th>Actions</th>\r\n\t\t                      <th></th>\r\n\t\t                  </tr>\r\n\t\t              </thead>\r\n\t\t              <tbody class="searchable">\r\n\t\t                ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \r\n\t\t                  <tr data-locality="' +
((__t = (restaurant.get("locality_id"))) == null ? '' : __t) +
'" data-status="' +
((__t = ( get_status(restaurant.get("status")) )) == null ? '' : __t) +
'" data-call="' +
((__t = (restaurant.get("call_as_user")?'YES':'NO')) == null ? '' : __t) +
'"> \r\n\t\t                    <td>\r\n\t\t                      <p class="text-info">\r\n\t\t                        ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\r\n\t\t                      </p>\r\n\t\t                    </td>\r\n\t\t                    <td>\r\n\t\t                        <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,25) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\r\n\t\t                        <p class="text-muted">\r\n\t\t                          <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\r\n\t\t                        </p>                                   \r\n\t\t                    </td>\r\n\t\t                    <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\r\n\t                    \t<td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>\t\t  \r\n\t                    \t<td>                                        \r\n\t\t\t\t\t\t\t\t\t        <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile" disabled="disabled"><i class="fa fa-edit"></i> Edit</a> \r\n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" disabled="disabled" target="_blank"><i class="fa fa-list"></i> Menu</a>\r\n\t\t                      <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" disabled="disabled" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>\r\n\t\t\t\t\t\t\t\t\t        <div class="btn-group">\r\n\t\t\t\t\t\t\t\t\t            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button" disabled="disabled"> <span class="caret"></span></button>\r\n\t\t\t\t\t\t\t\t\t            <ul role="menu" class="dropdown-menu">\r\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\r\n\t\t\t\t\t\t\t\t\t\t                <li id="copy_restaurant">\r\n\t\t\t\t\t\t\t\t\t                \t\t<a class="copy_anchor" href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/copy"><i class="fa fa-copy"></i> Copy</a>\r\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="copy_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t                \t</li>\r\n\t\t\t\t\t\t\t\t\t                ';
 } ;
__p += '\r\n\t\t\t\t\t\t\t\t                \t<li class="divider"></li>\r\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")==1){ ;
__p += '\r\n\t\t\t\t\t\t\t\t\t                \t<li id="delete_restaurant">\r\n\t\t\t\t\t\t\t\t\t                \t\t<a class="delete_anchor"><i class="fa fa-times"></i> Delete</a>\r\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="delete_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t                \t</li>\r\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\r\n\t\t\t\t\t\t\t\t\t                ';
if(restaurant.get("status")){ ;
__p += '\r\n\t\t\t\t\t\t\t\t\t                \t<li id="invisible_restaurant">\r\n\t\t\t\t\t\t\t\t\t                \t\t<a class="invisible_anchor"><i class="fa fa-unlink"></i> Invisible</a>\r\n\t\t\t\t\t\t\t\t\t                \t\t<input type="hidden" class="invisible_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n\t\t\t\t\t\t\t\t\t                \t</li>\r\n\t\t\t\t\t\t\t\t                \t';
 } ;
__p += '\t\t\t\t\t\t\t\t\t                \r\n\t\t\t\t\t\t\t\t\t            </ul>\r\n\t\t\t\t\t\t\t\t\t        </div>                                        \r\n\t\t\t\t\t\t\t\t\t\t    </td>\t\t\t\t\t\t\t\t\t\t    \r\n\t\t                    <td>\r\n\t\t\t\t\t\t\t\t\t\t      <a class="btn btn-success btn-sm restaurant_restore" id="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'"><i class="fa fa-refresh"></i> Restore</a>                                          \r\n\t\t\t\t\t\t\t\t\t\t    </td>\r\n\t\t                  </tr>\r\n\t\t                ';
 }); ;
__p += '                                                 \r\n\t\t              </tbody>\r\n\t\t            </table>\t\t            \r\n\t\t          </div>\r\n\t\t        </div>\r\n\t\t        <hr/>\r\n\t\t        <div class="row">\r\n\t\t        \t<div class="col-md-12 text-center">\r\n\t\t        \t\t<ul class="pagination pagination-sm">\r\n                  <li><a id="1" class="page_number">First</a></li>\r\n                  <li><a id="previous" class="page_number">«</a></li>\r\n                  ';
 var page_num = meta.page?meta.page:1;
                	 	for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                  \t<li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\t\r\n                  ';
 } ;
__p += ' \r\n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n                  <li><a id="next" class="page_number">»</a></li>\r\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n                </ul>\r\n                <h5> 20 Restaurants per page </h5>\r\n\t\t        \t</div>\r\n\t\t        </div>\r\n\t\t        \r\n\t\t    </div>\r\n\t\t</section>\r\n\t</div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/ios_settings.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <form role="form" class="form-horizontal" id="ios_settings_form" method="POST">\r\n          <div class="form-group">\r\n            <div class="col-md-2 col-md-offset-9">\r\n              <a class="btn btn-info btn-sm" href="#ios-releases"> Ios Releases <i class="fa fa-arrow-right"></i></a>\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="current_version" class="control-label">App Version</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <select class="form-control input-sm" name="current_version" id="ios_versions">\r\n              ';
 _.each(ios_settings.versions,function(version) { ;
__p += '\r\n                <option value= "' +
((__t = (version)) == null ? '' : __t) +
'" ' +
((__t = ( current_version== version ? 'selected' : '' )) == null ? '' : __t) +
' >' +
((__t = (version)) == null ? '' : __t) +
'</option>\r\n              ';
}); ;
__p += '\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="IOS_PROCESS_DISPLAY_STRINGS" class="control-label">Process Display Strings</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="hidden" name="PROCESS_DISPLAY_STRINGS" value="off">\r\n              <input type="checkbox" class="form-control input-sm" name="PROCESS_DISPLAY_STRINGS" ';
 if(ios_settings.PROCESS_DISPLAY_STRINGS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += ' >\r\n            </div>\r\n          </div>\r\n          <div class="form-group">\r\n            <div class="col-md-4 col-md-offset-1">\r\n              <label for="IOS_FORCE_VERIFY_NEW_USERS" class="control-label">Force Verify New Users</label>\r\n            </div>\r\n            <div class="col-md-6">\r\n              <input type="hidden" name="FORCE_VERIFY_NEW_USERS" value="off">\r\n              <input type="checkbox" class="form-control input-sm" name="FORCE_VERIFY_NEW_USERS"  ';
 if(ios_settings.FORCE_VERIFY_NEW_USERS=="true"){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 };
__p += '  >\r\n            </div>\r\n          </div>\r\n          <hr/>\r\n          <div class="to_center">\r\n            <button type="Create" class="btn btn btn-success" id="edit_ios_settings">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/items_dish_type.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!--  menu progress bar dish type  -->\n<div id="top_navigation" class="row" >\n</div>\n<div class="row">\n  <div class="col-lg-10 col-lg-offset-1">\n    <section class="panel">\n        <div class="panel-body">                        \n            <div class="row">    \n              <div class="col-lg-9">\n                <h2>Dish Type</h2>\n              </div>\n              <div class="col-lg-3"> \n                <div class="col-lg-6"> \n                  <button class="btn btn-primary pull-right save" ><i class="fa fa-floppy-o"></i> save</button> \n                </div>\n                <div class="col-lg-6"> \n                  <a class="btn btn-primary pull-right next" href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/item_tags" ';
 if(next_disabled) { ;
__p += ' disabled ';
 } ;
__p += ' ><i class="fa fa-sign-out"  ></i> Next</a>   \n                </div>\n              </div>    \n            </div>                \n        </div>\n            <div class="row">\n              <div class="col-lg-12">\n                <table class="table  table-hover general-table">\n                  <thead>\n                      <tr>\n                          <th >Name</th>\n                          <th>Description</th>\n                          <th>Dish Type</th>\n                      </tr>\n                  </thead>\n                  <tbody class="searchable">\n                    ';
 _.each(items, function(item, i) { ;
__p += '                                     \n                      <tr > \n                        <td class="col-lg-1">\n                            ' +
((__t = ( item.get("name") )) == null ? '' : __t) +
'\n                        </td>\n                        <td class="col-lg-3">\n                            <p class="text-info">\n                            ' +
((__t = ( item.get("description") )) == null ? '' : __t) +
'\n                          </p>                                  \n                        </td>\n                        <td class="col-lg-3">\n                          <div class="btn-group" role="group-' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" aria-label="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'">\n                            <button type="button" id="veg-' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" data-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" ';
 if(item.get("veg_type")=="VEG" ) { ;
__p += 'class="btn btn-success veg"';
} else { ;
__p += ' class="btn btn-white veg" ';
}  ;
__p += '  >Veg</button>\n\n                            <button type="button" id="nonveg-' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" data-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" ';
 if(item.get("veg_type")=="NON_VEG" ) { ;
__p += 'class="btn btn-danger nonveg"';
} else { ;
__p += ' class="btn btn-white nonveg" ';
}  ;
__p += '  >Non-Veg</button>\n                            \n                            <button type="button" id="egg-' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" data-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" ';
 if(item.get("veg_type")=="EGG" ) { ;
__p += 'class="btn btn-warning egg"';
} else { ;
__p += ' class="btn btn-white egg" ';
}  ;
__p += ' >Egg</button>\n                            \n                            <button type="button" id="jain-' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" data-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" ';
 if(item.get("veg_type")=="JAIN") { ;
__p += 'class="btn btn-info jain"';
} else { ;
__p += ' class="btn btn-white jain" ';
}  ;
__p += ' >Jain</button>\n                            \n                            <button type="button" id="neutral-' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" data-id="' +
((__t = ( item.get('id') )) == null ? '' : __t) +
'" ';
 if(item.get("veg_type")=="NEUTRAL" ) { ;
__p += 'class="btn btn-default neutral"';
} else { ;
__p += ' class="btn btn-white neutral" ';
}  ;
__p += ' >Neutral</button>\n\n                          </div>\n                        </td>\n                                \n                      </tr>\n                    ';
 }); ;
__p += '                                                 \n                  </tbody>\n                </table>                \n              </div>\n            </div>\n            <hr/>\n    </section>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/login.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-lg-6 col-lg-offset-3">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        \r\n        <div class="login container">\r\n          <h3>Please login to continue..</h3>\r\n          </br>\r\n          <form role="form" class="form-inline" id="login_form">\r\n            <div class="form-group">\r\n              <label class="sr-only" for="email">Email address</label>\r\n              <input type="text" class="form-control" id="email" placeholder="Email/ Phone Number" required>\r\n            </div>\r\n            <div class="form-group">\r\n              <label class="sr-only" for="password">Password</label>\r\n              <input type="password" class="form-control" id="password" placeholder="Password" required>\r\n            </div>\r\n            <!-- <br/><br/>\r\n            <div class="form-group">\r\n              <label class="sr-only" for="role">As</label>\r\n              <select class="form-control" id="role">\r\n                <option value="outsource_agent">Infinx Agent</option>\r\n                <option value="outsource_head">Infinx Head</option>\r\n                <option value="tinyowl">Tinyowl Executive</option>\r\n              </select>\r\n            </div>\r\n            <br/><br/> -->            \r\n            <button type="submit" class="btn btn-primary login_submit">Submit</button>\r\n            <br/><br/><br/><br/>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/logs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += ' <div class="row">\n  <div class="col-lg-12">\n    <section class="panel">\n        <div class="panel-body"> \n          <section id="alerts"></section>                           \n            <div class="row">             \n                <div class="col-lg-5">\n                  <h4> Profile Logs   ' +
((__t = ( " for "  )) == null ? '' : __t) +
'  ' +
((__t = ( restaurant ? restaurant.name : "" )) == null ? '' : __t) +
' ' +
((__t = ( restaurant ? "(" + restaurant.form_id + ")" : "" )) == null ? '' : __t) +
'  </h4>\n                </div>     \n            </div>\n            <hr/>\n                <div class="row">             \n                  <div class="col-xs-12 text-center">\n                    <p class="lead stats">\n                          <span> Total Logs: <span class=""><strong>' +
((__t = ( total ? total : 0 )) == null ? '' : __t) +
'</strong></span>\n                    </p>\n                    <ul class="pagination pagination-sm">\n                      ';
 var page_num = page;
                        var start_page = (page_num-7 > 0)? page_num -7 : 1; 
                        var total_pages = parseInt(total/10) + 1;
                        var max_pages = _.min([start_page + 15, total_pages]);
                        ;
__p += '\n\n                      <li><a id="1" class="page_number">First</a></li>\n                      <li><a id="previous" class="page_number">«</a></li>\n                      ';

                        for(j=start_page;j<=max_pages;j++){ ;
__p += '\n                          <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \n                      ';
 } ;
__p += ' \n                                  \n                      <li><a id="next" class="page_number">»</a></li>\n                      <li><a id="' +
((__t = (total_pages )) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                      <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                      <input type="hidden" value="' +
((__t = ( total_pages )) == null ? '' : __t) +
'" id="total_page_num" >\n                    </ul>\n                    \n                    <h5> 10 Logs per page </h5>\n                  </div>\n                </div>\n                <hr/>\n                ';
 if(!versions) { ;
__p += '\n                <h6 class="red">\n                     No logs to display.\n                </h6>\n                ';
 } ;
__p += '\n            \n            ';
 _.each(versions, function(version, i) { ;
__p += '  \n              <div class="row">\n                <div class="col-lg-10 col-lg-offset-1 well">\n                  <h5> ' +
((__t = ( version.vtype +'D' )) == null ? '' : __t) +
' \n                        ' +
((__t = ( version.depth )) == null ? '' : __t) +
' : ' +
((__t = ( version.meta.version_identifier  )) == null ? '' : __t) +
'\n                  </h5>\n                  <h6 class="red">\n                        DATED: ' +
((__t = ( version.created_at.split('T').join('  ') )) == null ? '' : __t) +
' \n                  </h6>\n                  ';
 if(version.vtype === "UPDATE") { ;
__p += '\n                    <div class="row">\n                      <div class="col-lg-12">\n                        <table class="table  table-hover general-table">\n                          <thead>\n                            <tr>\n                              <th>Item</th>\n                              <th>Old value</th>\n                              <th>New value</th>\n                            </tr>\n                          </thead>\n                          <tbody class="searchable">\n                         ';
 _.each(version.diff,function(v,k,diff){ ;
__p += '\n                              <tr> \n                                <td class="col-lg-4">\n                                  <p class="text-info">\n                                  ' +
((__t = ( k )) == null ? '' : __t) +
'\n                                  </p>\n                                </td>\n                                <td class="col-lg-4">\n                                    ';
 if(typeof(v[0])==='object') { ;
__p += '\n                                      ';
 _.each(v[0],function(item){ ;
__p += '\n                                        <div >\n                                          <table class="table">\n                                            <thead>\n                                              <tr>\n                                                <th class="col-lg-6">Item</th>\n                                                <th class="col-lg-6">Value</th>\n                                              </tr>\n                                            </thead>\n                                            <tbody>\n                                                ';
 _.each(item,function(value,key,item){ ;
__p += '\n                                                  ';
if(key != 'Id') {;
__p += '\n                                                    <tr>\n                                                      <td>\n                                                        ' +
((__t = ( key )) == null ? '' : __t) +
'\n                                                      </td>\n                                                      <td>\n                                                        ';
 if(typeof(value)==='object'){;
__p += '\n                                                          ';
 _.each(value,function(item){ ;
__p += '\n                                                                <div >\n                                                                  <table class="table">\n                                                                    <thead>\n                                                                      <tr>\n                                                                        <th class="col-lg-6">Item</th>\n                                                                        <th class="col-lg-6">Value</th>\n                                                                      </tr>\n                                                                    </thead>\n                                                                    <tbody>\n                                                                        ';
 _.each(item,function(value,key){ ;
__p += '\n                                                                        ';
 if(key != 'Id') {;
__p += '\n                                                                          <tr>\n                                                                            <td>\n                                                                              ' +
((__t = ( key )) == null ? '' : __t) +
'\n                                                                            </td>\n                                                                            <td><p class="text-danger">\n                                                                              ' +
((__t = ( value )) == null ? '' : __t) +
'</p>\n                                                                            </td>\n                                                                            </td>\n                                                                          </tr>\n                                                                          ';
};
__p += '\n                                                                        ';
});
__p += '\n                                                                    </tbody>\n                                                                  </table>\n                                                                </div>\n                                                              ';
});
__p += '\n                                                          ';
} else {;
__p += '<p class="text-danger">\n                                                            ' +
((__t = ( value )) == null ? '' : __t) +
'</p>\n                                                          ';
 } ;
__p += '\n                                                        </td>\n                                                      </tr>\n                                                    ';
};
__p += '\n                                                ';
});
__p += '\n                                            </tbody>\n                                          </table>\n                                        </div>\n                                      ';
});
__p += '\n                                    ';
} else { ;
__p += '<p class="text-danger">\n                                    ' +
((__t = ( v[0] )) == null ? '' : __t) +
'</p>\n                                    ';
 } ;
__p += '\n                                </td>\n                                <td class="col-lg-4">\n                                  ';
 if(typeof(v[1])==='object') { ;
__p += '\n                                      ';
 _.each(v[1],function(item){ ;
__p += '\n                                        <div >\n                                          <table class="table">\n                                            <thead>\n                                              <tr>\n                                                <th class="col-lg-6">Item</th>\n                                                <th class="col-lg-6">Value</th>\n                                              </tr>\n                                            </thead>\n                                            <tbody>\n                                                ';
 _.each(item,function(value,key){ ;
__p += '\n                                                ';
 if(key != 'Id') {;
__p += '\n                                                  <tr>\n                                                    <td>\n                                                      ' +
((__t = ( key )) == null ? '' : __t) +
'\n                                                    </td>\n                                                    <td>\n                                                      ';
 if(typeof(value)==='object'){;
__p += '\n                                                            ';
 _.each(value,function(item){ ;
__p += '\n                                                              <div >\n                                                                <table class="table">\n                                                                  <thead>\n                                                                    <tr>\n                                                                      <th class="col-lg-6">Item</th>\n                                                                      <th class="col-lg-6">Value</th>\n                                                                    </tr>\n                                                                  </thead>\n                                                                  <tbody>\n                                                                      ';
 _.each(item,function(value,key){ ;
__p += '\n                                                                        ';
 if(key != 'Id') {;
__p += '\n                                                                        <tr>\n                                                                          <td>\n                                                                            ' +
((__t = ( key )) == null ? '' : __t) +
'\n                                                                          </td>\n                                                                          <td><p class="text-danger">\n                                                                            ' +
((__t = ( value )) == null ? '' : __t) +
'</p>\n                                                                          </td>\n                                                                        </tr>\n                                                                        ';
};
__p += '\n                                                                      ';
});
__p += '\n                                                                  </tbody>\n                                                                </table>\n                                                              </div>\n                                                            ';
});
__p += '\n                                                      ';
} else {;
__p += '<p class="text-danger">\n                                                        ' +
((__t = ( value )) == null ? '' : __t) +
'</p>\n                                                      ';
 } ;
__p += '\n                                                    </td>\n                                                  </tr>\n                                                  ';
 } ;
__p += '\n                                                ';
});
__p += '\n                                            </tbody>\n                                          </table>\n                                        </div>\n                                      ';
});
__p += '\n                                    ';
} else { ;
__p += '<p class="text-danger">\n                                    ' +
((__t = ( v[1] )) == null ? '' : __t) +
'</p>\n                                    ';
 } ;
__p += '                                \n                                </td>\n                              </tr> \n                            ';
}) ;
__p += '                                           \n                          </tbody>\n                        </table>                \n                      </div>\n                    </div>\n                  ';
 } ;
__p += '\n                  <h6 class="col-lg-8 pull-right">\n                  </br>\n                        Edit made by: <i class="fa fa-user"> ' +
((__t = (version.user_name )) == null ? '' : __t) +
'</i>\n                  </h6>\n                </div>\n              </div>\n            ';
 }); ;
__p += '\n            <hr/>\n        </div>\n    </section>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/map_preview.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row hidden-xs" id="map_loader" style="opacity:1;zoom:0">\n  <div class="col-xs-12">\n    <div class="panel">\n      <div class="panel-body clearfix">\n        <div class=\'row\'>\n          <div class=\'col-sm-4\'>\n              <h4 class="pull-left"> Delivery Areas <span id="polygon_name" class="small"></span></h4>\n          </div>\n          <div class=\'col-sm-3\'>\n             <div class="btn-group pull-right">\n              <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">\n                 Heat Map <span class="caret"></span>\n              </button>\n              <ul class="dropdown-menu" role="menu">\n                <li id="delivery_time"><a>Delivery Time</a></li>\n                <li id="minimum_order"><a>Minimum Order amount</a></li>\n                <li class="hidden" id="normal_view"><a>Back to normal View</a></li>\n              </ul>\n            </div>\n          </div>\n          <div class=\'col-sm-3\'>\n              <button class="btn btn-warning btn-sm pull-right show_all" id="on">Show All</button>\n          </div>\n          <div class=\'col-sm-2\'>\n              <a class="btn btn-danger btn-sm pull-right" id="close_locality_group_preview" href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/deliveryArea"><i class="fa fa-times"></i> Close Map Preview </a>      \n          </div>\n        </div>\n        \n        \n        <div id="map-canvas">\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/menu.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!--<div class="row">\r\n  <div class="col-sm-12">\r\n    <div class="panel">\r\n      <div class="panel-body">-->\r\n        <div id="alert_restaurant_off" class="alert alert-danger alert-fix" ';
 if(get_status(restaurant.get('status')) != 'INACTIVE'){ ;
__p += 'style="display:none;"';
 } ;
__p += ' style="position:fixed; top:80px;width:100%; z-index:10000000">\r\n            <p style="text-align:center;">\r\n                ' +
((__t = ( restaurant.get('name') )) == null ? '' : __t) +
' is <strong>' +
((__t = ( get_status(restaurant.get('status')) )) == null ? '' : __t) +
'</strong> now.\r\n            </p>\r\n        </div>\r\n      <!--</div>\r\n    </div>\r\n  </div>\r\n</div>-->\r\n<div class="row">\r\n  <div class="col-sm-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <h2>' +
((__t = ( restaurant.get('name') )) == null ? '' : __t) +
' -> Menu Items\r\n        <div id="cache_rebuild_blk" class="col-md-4 col-md-offset-3 pull-right" style="margin-bottom: 14px;">\r\n            <button type="button" style="font-size: 16px; margin-left: 16px; width: 60%;" class="rebuild_cache btn btn-danger btn-lg pull-right">Validate Menu</button>\r\n            <button id="activate_restaurant" style="font-size: 16px; display: none;" type="button" class="btn btn-success btn-lg pull-right">Activate</button>\r\n        </div>\r\n        </h2>\r\n\r\n\r\n        <div id="menu_categories">\r\n        </div>\r\n\r\n        <div id="menu_items">\r\n        </div>\r\n\r\n        <div id="add_item_modal">\r\n        </div>\r\n\r\n        <div id="edit_menu_category_modal">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/menu_categorization.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation" class="row" >\n</div>\n\n\n\n<div class="row">\n  <div class="col-lg-10 col-lg-offset-1">\n    <section class="panel">\n      <div class="panel-body">\n        <h3>Tags:</h3>\n        ';
 _.each(l1_tags,function(l1){ ;
__p += '\n          <span class="label label-primary tag-label" id="' +
((__t = ( l1[0] )) == null ? '' : __t) +
'">\n            ' +
((__t = ( l1[0] )) == null ? '' : __t) +
': <span class="badge span-tag-label">' +
((__t = ( l1[1] )) == null ? '' : __t) +
'</span>\n          </span>\n        ';
 }) ;
__p += '\n      </div>\n    </section>\n  </div>\n</div>\n<div class="row">\n  <div class="col-lg-10 col-lg-offset-1">\n    <section class="panel">\n      <div class="panel-body"><h3>Second Level Tags</h3>\n        <div id="second_level_tags">\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n<div class="row">\n  <div class="col-lg-10 col-lg-offset-1">\n    <section class="panel">\n      <div class="panel-body">\n        <div id="categorization">\n          <h3><b>Make Categorization</b></h3><br/>\n          <select name="all_tags" id="show_all_tags" multiple="multiple">\n            ';
 _.each(l1_tags,function(l1){ ;
__p += '\n              <option value="' +
((__t = ( l1[0] )) == null ? '' : __t) +
'" ';
 if(!(category[l1[0]]==undefined)){;
__p += ' selected ';
 } ;
__p += ' >' +
((__t = ( l1[0] )) == null ? '' : __t) +
'</option>\n            ';
 }) ;
__p += '\n          </select>\n          <button type="submit" class="btn btn-success" id="add_tags"  style="margin-left:8px">Add</button>\n        </div>\n        <br/>\n        <br/>\n        <br/>\n        <br/>\n        <div class="enter_categorization_tags">\n        </div>\n        <button type="submit" class="btn btn-danger pull-right" id="save_tags_categorization" data-id="' +
((__t = ( res_id )) == null ? '' : __t) +
'"style="margin-left:4px">Save</button>\n      </div>      \n    </section>\n  </div>\n</div>\n<div class="row">\n  <div class="col-lg-10 col-lg-offset-1">\n    <section class="panel">\n      <div class="panel-body">    \n        <div class="show_categorization"></div>\n      </div>\n    </section>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/menu_progress_bar.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- Menu progress bar  -->\n';
 if(progress){ ;
__p += '\n\t<div class="col-md-12">\n\t\t\t<div class="panel">\n\t\t\t\t<div class="panel-body" style="padding-bottom: 0px;">\n\t\t\t\t    <ul class="breadcrumbs-alt">\n\t\t\t\t        <li>\n\t\t\t\t            <a ';
 if(_.findWhere(progress,{state:"spell_check"}).status==1) { ;
__p += ' href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/spell_check"  class="current" ';
 } else { ;
__p += '  ';
 } ;
__p += '>Spell Check</a>\n\t\t\t\t        </li>\n\t\t\t\t        <li>\n\t\t\t\t             <a ';
 if(_.findWhere(progress,{state:"dish_type_tags"}).status==1) {  ;
__p += ' href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/dish_type_tags" class="current"';
 } else { ;
__p += '  ';
 } ;
__p += '>Dish Type</a>\n\t\t\t\t        </li>\n\t\t\t\t        <li>\n\t\t\t\t            <a ';
 if(_.findWhere(progress,{state:"item_tags"}).status==1) {  ;
__p += ' href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/item_tags" class="current" ';
 } else { ;
__p += '  ';
 } ;
__p += '>Item tag</a>\n\t\t\t\t        </li>\n\t\t\t\t        <li>\n\t\t\t\t            <a ';
 if(_.findWhere(progress,{state:"categorization"}).status==1) {  ;
__p += ' href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/categorization" class="current"';
 } ;
__p += '>Categorization</a>\n\t\t\t\t        </li>\n\t\t\t\t    </ul>\n\t\t\t\t</div>\n\t\t</div>\n\t</div>\n';
};
__p += ' \n';

}
return __p
};

this["JST"]["app/scripts/templates/miscellaneous.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section> \n      <h2 class="to_center">Edit: Miscellaneous</h2>\n      <hr>\n      <div class="row">\n\n        <form class="form-horizontal" id="" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( miscellaneous.get('id') )) == null ? '' : __t) +
'" name="restaurant_id">\n\t          \n            ' +
((__t = ( partial('partials_markupNumber', {
            id: "cost_for_two",
            placeholder: "Cost for two",
            label: "Cost for two",
            name: "cost_for_two",
            value: miscellaneous ? miscellaneous.get("cost_for_two") : 50 ,
            pattern: "/^[0-9]*$/",
            title: "Cost for two should be greater than or equal to 50.",
            min: "50",
            required: true,
          }) )) == null ? '' : __t) +
'\n\n\t          <div class="form-group adjust-xs">\n              <label for="restaurant_suggestion_ids" class="col-md-4 control-label">Restaurant Suggestions</label>\n              <div class="col-md-8">\n              <select multiple name="restaurant_suggestion_ids" id="restaurant_suggestion_ids">\n              ';
 _.each(miscellaneous.get("restaurant_suggestion_collection"), function(suggestion) { ;
__p += '\n                <option ';
if (H.check_element_exists(miscellaneous.get("restaurant_suggestion_ids"), suggestion.id)) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( suggestion.id )) == null ? '' : __t) +
'">' +
((__t = ( suggestion.name )) == null ? '' : __t) +
'</option>\n              ';
 }) ;
__p += '\n              </select>\n              </div>\n            </div>  \n\n            <div class="form-group adjust-xs">\n\t            <label for="cuisine_ids" class="col-md-4 control-label">Cuisines</label>\n\t            <div class="col-md-8">\n\t            <select multiple name="cuisine_ids" id="cuisine_ids">\n\t            ';
 _.each(collections.cuisines, function(cuisine) { ;
__p += '\n\t              <option ';
if (H.check_element_exists(miscellaneous.get("cuisine_ids"), cuisine[1])) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( cuisine[1] )) == null ? '' : __t) +
'">' +
((__t = ( cuisine[0] )) == null ? '' : __t) +
'</option>\n\t            ';
 }) ;
__p += '\n\t            </select>\n\t            </div>\n\t          </div>\t     \n\n\t          <!-- <div class="form-group adjust-xs">\n              <label class="col-sm-4 control-label col-md-4" for="breakfast_rating">Breakfast Rating</label>\n              <div class="col-md-6 col-sm-6">\n\t\t          \t<span class="rating" id="breakfast">\n                  ';
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
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class="form-group adjust-xs">\n              <label class="col-sm-4 control-label col-md-4" for="lunch_rating">Lunch Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="lunch">\n                  ';
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
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class="form-group adjust-xs">\n              <label class="col-sm-4 control-label col-md-4" for="snacks_rating">Snacks Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="snacks">\n                  ';
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
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\n\n\t\t\t\t    <div class="form-group adjust-xs">\n              <label class="col-sm-4 control-label col-md-4" for="dinner_rating">Dinner Rating</label>\n              <div class="col-md-6">\n\t\t          \t<span class="rating" id="dinner">\n                  ';
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
'</label>                    \n                </span>\n\t\t\t\t       </div>\n\t\t\t\t    </div>\t -->          \t\t\t\t\t  \n\n\n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label for="spot_payment_type" class="col-md-4 col-xs-4 control-label">Spot Payment Type</label>\n              <div class="col-md-8 col-sm-8 col-xs-6">\n              <select name="spot_payment_type" class="form-inline-element input-sm" id="spot_payment_type">\n              ';
 _.each(collections.spot_payment_type, function(i,status) { ;
__p += '\n                <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(miscellaneous.get("spot_payment_type") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = ( status )) == null ? '' : __t) +
'</option>\n              ';
 }) ;
__p += '\n              </select>\n              </div>\n            </div>\n\n\n            <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n              <label for="delivery_status" class="col-md-4 col-xs-4 control-label">Delivery Status</label>\n              <div class="col-md-8 col-sm-8 col-xs-6">\n              <select name="delivery_status" class="form-inline-element input-sm" id="delivery_status">\n              ';
 _.each(collections.delivery_status, function(i,status) { ;
__p += '\n                <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(miscellaneous.get("delivery_status") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = ( status )) == null ? '' : __t) +
'</option>\n              ';
 }) ;
__p += '\n              </select>\n              </div>\n            </div>\n            \n\n          \t<!-- <div class="form-group">\n              <div class="col-xs-1 visible-xs"></div>\n\t\t\t\t\t\t\t<label for="comments" class="col-md-4 col-xs-4 control-label">Comments</label>\n\t\t\t\t\t\t\t<div class="col-md-6 col-sm-6 col-xs-6">\n\t\t\t\t\t\t\t  <textarea col="30" rows="3" class="form-control" name="comments" id="comments" placeholder="Comments">' +
((__t = ( miscellaneous.get("comments") )) == null ? '' : __t) +
'</textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> -->\t  \n\n            <div class="form-group" id=\'closingReasonFormGroup\' >\n              <div class="col-xs-1 visible-xs"></div>\n              <label for="closing_reason" class="col-md-4 col-xs-4 control-label">Closing Reasons</label>\n              <div class="col-md-8 col-sm-8 col-xs-6">\n                <select  class="form-inline-element input-sm" name="reason_id" id="closing_reasons">\n                  <option value="nil">None</option>\n                  ';
 $.each(collections.reasons,function(index,closingReasonItem){ ;
__p += '\n                  <option value="' +
((__t = (closingReasonItem.id)) == null ? '' : __t) +
'"';
 if(miscellaneous.get("reason_id") == closingReasonItem.id){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = (closingReasonItem.reason)) == null ? '' : __t) +
'</option>\n                  ';
 }); ;
__p += '\n                </select>\n              </div>\n            </div>\n\n\t          <div class="submit_div">\n\t            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_misc">\n\t          </div>\n            <br/><br/><br/>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/multiple_delivery_areas.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row"> \n  <div class="col-xs-12 ">\n    <div class="panel">\n      <div class="panel-body">              \n        <div class="col-sm-6 col-md-7 col-lg-8">\n            <div class="input-group">\n                <span class="input-group-addon btn-primary btn-sm"></span>\n                <input type="text" id="lat_long" value=\'19.1154315, 72.8822285\' class="form-control input-sm" required=\'true\' placeholder="Lat,Long" title="Should contain hypen (-) , Will be something like MA-213">\n            </div>\n        </div>\n\n\n\n        <div class="col-sm-6 col-md-7 col-lg-8">\n            <div class="input-group">\n                <span class="input-group-addon btn-primary btn-sm"></span>\n                <input type="text" id="distance" value=\'1\' class="form-control input-sm" required=\'true\' placeholder="Distance in Kms" title="Should contain hypen (-) , Will be something like MA-213">\n            </div>\n        </div>\n        <div class="col-sm-3 col-md-1 col-lg-1 ">\n            <button  type=\'submit\' class="btn btn-success btn-sm" id="submit_forms"> Submit</a>\n        </div>\n      </div>\n    </div>\n  </div>                                \n</div>\n        <!-- Searched location list -->\n          <div class=\'row\'>\n            <div class=\'col-sm-12\'>\n               <div class="panel">\n                  <div class=\'panel-heading\'>\n                    <h6>Searched Location</h6>\n                  </div>\n                  <div class="panel-body">\n                    <ul class=\'list-group searched-ul\'>\n                    </ul>\n                  </div>\n               </div>\n\n            </div>\n          </div>\n        <!-- Searched location list -->\n\n        \n<div class="row">\n  <div class="col-xs-12">\n    <div id="map-canvas"></div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/new_virtual_restaurant.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-md-6 col-md-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>\n        <h3 class="to_center">Create new Virtual Restaurant</h3>\n        <hr/>\n        <form role="form" class="form-horizontal" id="create_new" method="POST">\n          <!-- render the text type for: form_id -->\n          ' +
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
            pattern : "([a-zA-Z])*([\\-])?([a-zA-Z])+[\\-][1-9]([0-9])*",
            title : "Should contain hypen (-) , Will be something like MA-213 or MUM-MA-213"
          }) )) == null ? '' : __t) +
'\n          <hr/>\n          <div class="to_center">\n            <button type="Create" class="btn btn btn-success">Create</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/office_document.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></secti on>                           \n      <h2 class="to_center">Edit: Office Document</h2>\n      <hr>\n      <div class="row">\n        <form accept-charset="UTF-8" class="form-horizontal" method="post" enctype="multipart/form-data" id="office_document_form">\n          <div class="quick-save pull-right hidden-xs">\n            <button type="submit" class="btn btn-success btn-sm affix" value="Save Changes" id="save_changes_office"><i class="fa fa-save"></i> Quick Save </button>\n          </div>\n          <input type="hidden" value="' +
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
'\n\n          <!-- render the text type for: latitude -->\n          ' +
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
'\n\n          <div class="form-group hidden" id="locality_detect_loader">\n            <div class="col-xs-8 col-xs-offset-4">\n              <i class="fa fa-circle-o-notch fa-spin"></i> <span class="muted">Automatically fetching locality</span>\n            </div>\n          </div>\n\n          <div class="form-group hidden" id="locality_detect_error">\n            <div class="col-xs-8 col-xs-offset-4">\n              <span class="muted text-danger"> Could not fetch the locality. Try checking the coordinates or manually enter the locality & sub-locality</span>\n            </div>\n          </div>\n\n          <!--<div class="form-group adjust-xs">\n            <label for="locality_filter" class="col-md-4 control-label">Locality</label>\n            <div class="col-md-8">\n            <input type="hidden" name="locality_filter" id="locality_filter" ';
 if(office_document.get("locality_id")){ ;
__p += ' value = "' +
((__t = ( get_parent_id(office_document.get('locality_id')) )) == null ? '' : __t) +
'" ';
 } ;
__p += '>\n            </div>\n          </div>-->\n\n          <div class="form-group adjust-xs">\n            <label for="locality_id" class="col-md-4 control-label">Locality</label>\n            <div class="col-md-8">\n              <input type="hidden" id="locality_id" name="locality_id" ';
 if(office_document.get("locality_id")){ ;

 if (get_parent_id(office_document.get('locality_id')) != null) { ;
__p += ' value = "' +
((__t = ( get_parent_id(office_document.get('locality_id')) )) == null ? '' : __t) +
'" ';
 }else{ ;
__p += ' value = "' +
((__t = ( office_document.get('locality_id') )) == null ? '' : __t) +
'" ';
 } ;
__p += ' ';
 } ;
__p += ' >\n            </div>\n          </div>\n\n          ' +
((__t = ( partial('partials_markupText', {
            id: "locality",
            placeholder: "Landmark",
            label: "Restaurant Location (will be displayed on APP)",
            name: "locality",
            value: office_document.get('locality'),
            required: true
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
'\n\n          <hr>\n\n          <!-- Phone numbers for phone_numbers -->\n          <h4 class="to_center">Restaurant Phone Numbers for Menu</h4>\n          <input type="hidden" name="phone_numbers_count" value="' +
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
                number_type: phone_number.number_type,
                sms: false,
                is_present_on_counter: false,
                is_smartphone: false,
                is_verified: false
              })
            )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n\n          <button type="button" class="btn btn-info btn-sm add_new_number">Add new Phone Number</button>\n\n          <hr>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="next_menu_update" class="col-md-4 col-sm-4 col-xs-4 control-label">Next Menu Update</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <select name="next_menu_update" class="form-inline-element input-sm" id="next_menu_update">\n                  <option disabled selected>none</option>\n                ';
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
'\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label" for="automatically_confirm_after_place">Automatically confirm order after placing</label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="automatically_confirm_after_place" ';
 if(office_document.get("automatically_confirm_after_place")){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>                          \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label" for="call_as_user">Call as User</label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="call_as_user" ';
 if(office_document.get("call_as_user")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label" for="tied_up">Tied up?</label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="tied_up" ';
 if(office_document.get("tied_up")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label" for="has_delivery">Has delivery: </label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="has_delivery" ';
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

this["JST"]["app/scripts/templates/outsource_agent.ejs"] = function(obj) {
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
'/profile"><i class="fa fa-edit"></i> Edit</a> \n                      <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/choices"><i class="fa fa-check-square-o" target="_blank"></i> Choices</a>\n                      <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/items"><i class="fa fa-book" target="_blank"></i> Items</a>                                                                                                        \n                    </td>\n                    <td>\n                      ';
 if(get_status(restaurant.get('status')) != 'SUBMITTED') { ;
__p += '\n                        <a class="btn btn-info btn-sm submit" href="javascript:void(0)" target="_blank" id="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'">Submit</a>\n                      ';
 } ;
__p += '            \n                      ';
 if(get_status(restaurant.get('status')) == 'DIFF_ERROR') { ;
__p += '\n                        <a class="btn btn-info btn-sm " href="/central/app/index.html#diff/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/' +
((__t = ( restaurant.get('diff_restaurant_id') )) == null ? '' : __t) +
'" target="_blank">Error Report </a>\n                      ';
 } ;
__p += '                                             \n                    </td>\n                  </tr>\n                ';
 }); ;
__p += '                                                 \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/outsource_head.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-xs-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <h2 class="to_center">Assignments to Agents        \r\n        </h2>\r\n        <hr/>\r\n        <div class="input-group input-group-sm">\r\n          <span class="input-group-addon btn-primary">Filter</span>\r\n          <input id="filter" type="text" class="form-control" placeholder="Type here..." value="' +
((__t = (meta.query)) == null ? '' : __t) +
'">\r\n        </div>\r\n        <br />\r\n        <div class="row">             \r\n          <div class="col-sm-12 text-center">\r\n            <p class="lead stats">\r\n              <span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
'</span>                \r\n            </p>\r\n            <ul class="pagination pagination-sm">\r\n              <li><a id="1" class="page_number">First</a></li>\r\n              <li><a id="previous" class="page_number">«</a></li>\r\n              ';
 var page_num = meta.page?meta.page:1;
                for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \r\n              ';
 } ;
__p += ' \r\n              ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n              <li><a id="next" class="page_number">»</a></li>\r\n              <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n              <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n              <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n            </ul>\r\n            <h5> 20 Restaurants per page </h5>\r\n          </div>\r\n        </div>\r\n        <div class="row">\r\n          <div class="col-xs-12">\r\n            <table class="table general-table" id="index_table">        \r\n              <thead>\r\n                  <tr>\r\n                      <th> # </th>\r\n                      <th>Name</th>\r\n                      <th>Agent(s)</th>\r\n                      <th>Actions</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody class="searchable">\r\n                ';
 _.each(restaurants, function(restaurant) { ;
__p += '\r\n                  <tr class="';
 if(restaurant.get("diff_count") > 1) { ;
__p += 'second_diff';
 } ;
__p += '">\r\n                    <td>  \r\n                      ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\r\n                    </td>\r\n                    <td>\r\n                      <p class="lead">' +
((__t = ( restaurant.get("restaurant_name") )) == null ? '' : __t) +
'\r\n                      <span class="small"># Diff till now : ' +
((__t = ( restaurant.get("diff_count") )) == null ? '' : __t) +
'</span></p>\r\n                    </td>\r\n                    <td>\r\n                      <div class="agents">\r\n                        <form id="diff_' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">\r\n                        ';
 _.each(restaurant.get("agents"), function(agent) { ;
__p += '\r\n                          ' +
((__t = ( get_status_span(agent.status) )) == null ? '' : __t) +
'&nbsp;&nbsp;                            \r\n                          <i class="fa fa-user"></i>&nbsp; ' +
((__t = ( agent.name )) == null ? '' : __t) +
'&nbsp;&nbsp;&nbsp;                            \r\n                          <input type="checkbox" value="' +
((__t = ( agent.restaurant_id )) == null ? '' : __t) +
'" id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'_' +
((__t = ( agent.restaurant_id )) == null ? '' : __t) +
'">\r\n                          <br/><br/>\r\n                        ';
 }) ;
__p += '\r\n                        </form>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <p class="">\r\n                        <a class="btn btn-primary btn-sm diff" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Diff</a>\r\n                        &nbsp;\r\n                        <a class="btn btn-success btn-sm activate" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Completed</a>\r\n                        &nbsp;\r\n                        <a class="btn btn-success btn-sm send_diff" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Send Diff Report</a>\r\n                        &nbsp;\r\n                        ';
 if(user.get_company().toLowerCase() == "tinyowl") { ;
__p += '\r\n                        <a class="btn btn-success btn-sm export" href="javascript:void(0);" data-form-id="' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'" data-overwrite="false">Export</a>\r\n                        &nbsp;\r\n                        ';
 } ;
__p += '\r\n                        <!-- <a class="btn btn-info" href="#/assignments/' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'">Edit</a> -->\r\n                      </p>\r\n                    </td>\r\n                  </tr>\r\n                ';
 }) ;
__p += '\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class="row">             \r\n          <div class="col-sm-12 text-center">\r\n            <p class="lead stats">\r\n              <span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
'</span>                \r\n            </p>\r\n            <ul class="pagination pagination-sm">\r\n              <li><a id="1" class="page_number">First</a></li>\r\n              <li><a id="previous" class="page_number">«</a></li>\r\n              ';
 var page_num = meta.page?meta.page:1;
                for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \r\n              ';
 } ;
__p += ' \r\n              ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n              <li><a id="next" class="page_number">»</a></li>\r\n              <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n              <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n              <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n            </ul>\r\n            <h5> 20 Restaurants per page </h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>    \r\n  </div>\r\n\r\n</div><!-- end row -->\r\n\r\n<div class="modal fade" style="width: 500px; height: 300px; margin-left: 400px;" id="overwriteModal" role="dialog" aria-labelledby="overwriteModalLabel" aria-hidden="true">\r\n  <div class="modal-header">\r\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n    <h4>The restaurant with the Form-id already exists!</h4>\r\n  </div>\r\n  <div class="modal-body" style="background-color: rgb(250, 250, 250);">\r\n    <h6>Do you want to overwrite it\'s menu?</h6>\r\n    <hr/>\r\n    <div>\r\n      <input class="export_restaurant_id" type="hidden" value="">\r\n      <button class="btn btn-success btn-sm export" data-overwrite="true">Overwrite and Export</button>\r\n      <button class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/point_of_sale.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section>\n      <h2 class="to_center">Edit: Point of Sale</h2>\n      <hr>\n      <div class="row">\n        <form class="form-horizontal" id="" method="post" enctype="multipart/form-data">\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="restaurant_app" class="col-md-4 col-xs-4 control-label">Has Restaurant App</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="checkbox" ' +
((__t = ( (model.get('has_restaurant_app') ? 'checked ' : '' ) )) == null ? '' : __t) +
' name=\'has_restaurant_app\' class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="is_app_service_on" class="col-md-4 col-xs-4 control-label">Is App Service ON</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="checkbox" ' +
((__t = ( (model.get('is_app_service_on') ? 'checked ' : '' ) )) == null ? '' : __t) +
'   name=\'is_app_service_on\' class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="username" class="col-md-4 col-xs-4 control-label">Mobile Number</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" placeholder=\'Enter mobile number\'  title=\'Phone number should be 10 digits, like 9876543210\'  pattern="0|([0-9]{10})" required name=\'username\' value="' +
((__t = (model.get('username'))) == null ? '' : __t) +
'" class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="allocation_date" class="col-md-4 col-xs-4 control-label">Allocation Date</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" name=\'allocation_date\' value="' +
((__t = (model.get('allocation_date'))) == null ? '' : __t) +
'"  class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="phone_model" class="col-md-4 col-xs-4 control-label">Phone Model</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" name=\'phone_model\' value="' +
((__t = (model.get('phone_model'))) == null ? '' : __t) +
'"  required class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="is_tinyowls_device" class="col-md-4 col-xs-4 control-label">Is TinyOwl\'s Device</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="checkbox" ' +
((__t = ( (model.get('is_tinyowls_device') ? 'checked ' : '' ) )) == null ? '' : __t) +
'   name=\'is_tinyowls_device\' id=\'is_tinyowls_device\' class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="person_name" class="col-md-4 col-xs-4 control-label">Person Name on Agreement</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" name=\'person_name\' ' +
((__t = ( (model.get('is_tinyowls_device') ? '' : 'disabled' ) )) == null ? '' : __t) +
'  value="' +
((__t = (model.get('person_name'))) == null ? '' : __t) +
'" required class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="imei_no" class="col-md-4 col-xs-4 control-label">IMEI No</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" name=\'imei_no\' ' +
((__t = ( (model.get('is_tinyowls_device') ? '' : 'disabled' ) )) == null ? '' : __t) +
' value="' +
((__t = (model.get('imei_no'))) == null ? '' : __t) +
'"  class="form-control" >\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="sim_no" class="col-md-4 col-xs-4 control-label">SIM No</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" name=\'sim_no\' ' +
((__t = ( (model.get('is_tinyowls_device') ? '' : 'disabled' ) )) == null ? '' : __t) +
' value="' +
((__t = (model.get('sim_no'))) == null ? '' : __t) +
'" class="form-control" >\n            </div>\n          </div>\n          \n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_pos">\n          </div>\n          <br/><br/><br/>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/position.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-xs-offset-2 col-xs-8">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <section id="alerts"></section>\r\n        <h3 class="to_center">  ';
 if(delivery_area) { ;
__p += ' Update Absolute Position  ';
 };
__p += ' ';
 if(!delivery_area) { ;
__p += ' Add new Absolute Position  ';
 };
__p += ' </h3>\r\n        <div class="row"> \r\n          <div class="col-xs-4" style="padding-top:2px;">\r\n          <button class="btn btn-success btn-sm" id="back_to_home"><i class="fa fa-arrow-left"></i> Back to home</button>\r\n          </div>\r\n        </div>  \r\n        <form role="form" class="form-horizontal" id="position_form" method="POST">\r\n          \r\n          ';
if (delivery_area) {;
__p += '\r\n            <input type="hidden" value="' +
((__t = (delivery_area.id)) == null ? '' : __t) +
'" name="id" >\r\n            <input type="hidden" value="' +
((__t = (delivery_area.locality_id)) == null ? '' : __t) +
'" name="locality_id" >\r\n          ';
 } ;
__p += '\r\n\r\n          ';
 if(locality_id) {;
__p += '\r\n            <input type="hidden" value="' +
((__t = (locality_id)) == null ? '' : __t) +
'" name="locality_id" >\r\n          ';
} ;
__p += '\r\n          <div class="form-group">\r\n            <div class="col-xs-1 visible-xs"></div>\r\n           <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm"> * Enter Restaurant</label>\r\n            <div class="col-md-8 col-sm-8 col-xs-8">\r\n              <select id="restaurant_id" name="restaurant_id">\r\n                ';
 _.each(restaurants, function(restaurant){ ;
__p += '\r\n                  ';
 if(delivery_area && restaurant.restaurant_id == delivery_area.restaurant_id){ ;
__p += '\r\n                    <option value="' +
((__t = ( restaurant.restaurant_id )) == null ? '' : __t) +
'" selected>' +
((__t = ( restaurant.name )) == null ? '' : __t) +
' </option>\r\n                  ';
 }else{ ;
__p += '\r\n                    <option value="' +
((__t = ( restaurant.restaurant_id )) == null ? '' : __t) +
'">' +
((__t = ( restaurant.name )) == null ? '' : __t) +
' \r\n                    </option>\r\n                  ';
 } ;
__p += '\r\n                ';
 }) ;
__p += '\r\n              </select>\r\n            </div>\r\n          </div>\r\n          \r\n          ' +
((__t = ( partial('partials_markupText', {
            id: "absolute_position",
            placeholder: "Enter position of the restaurant",
            label: "Position",
            name: "position",
            value: delivery_area ? delivery_area.absolute_position : "" ,
            required: true
          }) )) == null ? '' : __t) +
'\r\n          <hr/>\r\n          <div class="to_center">\r\n            ';
 if(delivery_area){ ;
__p += '\r\n            <button type="Update" class="btn btn btn-success edit_position" id="edit_position_button"> Update</button>\r\n            ';
 } ;
__p += '\r\n            ';
 if(delivery_area==null){ ;
__p += '\r\n            <button type="Create" class="btn btn btn-success" id="create_new_button"> Create</button>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/promotion.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-md-6 col-md-offset-3">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>\n        <h3 class="to_center">  ';
 if(promotion) { ;
__p += ' Update Promotion  ';
 };
__p += ' ';
 if(!promotion) { ;
__p += ' Create new Promotion  ';
 };
__p += ' </h3>\n        <hr/>\n        <form role="form" class="form-horizontal" id="promotion_form" method="POST">\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "name",
            placeholder: "Enter name of the promotion",
            label: "Name",
            name: "name",
            value: promotion ? promotion.name : "" ,
            required: true
          }) )) == null ? '' : __t) +
'\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "description",
            placeholder: "Enter description",
            label: "Description",
            name: "description",
            value: promotion ? promotion.description : "",
            required: false
          }) )) == null ? '' : __t) +
'\n          ' +
((__t = ( partial('partials_markupDate', {
            id1: "start_date",
            id2:"start_time",
            label: "Start Date",
            name: "start_date",
            value1: promotion ? H.getDate(promotion.valid_from) : "",
            value2: promotion ? H.getTime(promotion.valid_from) : "",
            required: true
          }) )) == null ? '' : __t) +
'\n          ' +
((__t = ( partial('partials_markupDate', {
            id1: "end_date",
            id2:"end_time",  
            label: "End Date",
            name: "end_date",
            value1: promotion ? H.getDate(promotion.valid_till) : "",
            value2: promotion ? H.getTime(promotion.valid_till) : "",
            required: true
          }) )) == null ? '' : __t) +
'\n          ' +
((__t = ( partial('partials_markupText', {
            id: "priority",
            placeholder: "Enter priority of the promotion",
            label: "Priority",
            name: "priority",
            value: promotion ? promotion.priority : 1,
            required: false
          }) )) == null ? '' : __t) +
'\n\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">* Promotion type</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <select class="form-control col-md-6" id="type" name="promotion_type">\n                <option value="-1" selected> --Select-- </option>                  \n                  ';
 _.each(collections.promotion_type,function(i,promo_type,j){;
__p += '\n                    <option value="' +
((__t = (i)) == null ? '' : __t) +
'" "';
 if(promotion) { if (promotion.promotion_type == i) { ;
__p += '" selected "';
 } } ;
__p += '" >' +
((__t = (promo_type)) == null ? '' : __t) +
'</option>\n                  ';
});;
__p += '\n              </select>\n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n              <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">* Status</label>\n              <div class="col-md-6 col-sm-6 col-xs-6">\n                <select class="form-control col-md-6" id="status" name="status">\n                  <option value="-1" selected> --Select-- </option>                       \n                    ';
 _.each(collections.status,function(i,stat,j){;
__p += '\n                      ';
if(i==2 || i==3){ ;
__p += '\n                        <option value="' +
((__t = (i)) == null ? '' : __t) +
'" "';
 if(promotion) { if (promotion.status == i) { ;
__p += '" selected "';
 } } ;
__p += '" >' +
((__t = (stat)) == null ? '' : __t) +
'</option>\n                      ';
 } ;
__p += '\n                    ';
});;
__p += '\n                </select> \n              </div>\n          </div>\n\n          ';
if(promotion && !_.isEmpty(promotion.promotion_banner_url)) { ;
__p += '\n           <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">* Promotion Image</label>\n            <div class="col-md-6 col-sm-6 col-xs-6"> \n              <img id="promo_image" src="' +
((__t = ( promotion.promotion_banner_url+"?"+ new Date().H.getTime()/1000 )) == null ? '' : __t) +
'" style="width:200px; height:100px;">\n            </div>\n          </div>\n          ';
 } ;
__p += '\n\n          <div class="form-group" id="restaurants">\n            <div class="col-xs-1 visible-xs"></div>\n            <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm"> * Restaurants</label>\n            <div class="col-md-8 col-sm-8 col-xs-8">\n              <select id="virtual-restaurants" name="restaurant_ids" multiple>\n                ';
 _.each(virtual_restaurants, function(virtual_restaurant){ ;
__p += '\n                  ';
 if(promotion && _.contains(promotion.restaurant_ids, virtual_restaurant.id)){ ;
__p += '\n                    <option value="' +
((__t = ( virtual_restaurant.id )) == null ? '' : __t) +
'" selected>' +
((__t = ( virtual_restaurant.name )) == null ? '' : __t) +
' ' +
((__t = ( "(" )) == null ? '' : __t) +
'   ' +
((__t = ( virtual_restaurant.form_id )) == null ? '' : __t) +
'    ' +
((__t = ( ")" )) == null ? '' : __t) +
' \n                    </option>\n                  ';
 }else{ ;
__p += '\n                    <option value="' +
((__t = ( virtual_restaurant.id )) == null ? '' : __t) +
'">' +
((__t = ( virtual_restaurant.name )) == null ? '' : __t) +
'  ' +
((__t = ( "(" )) == null ? '' : __t) +
'   ' +
((__t = ( virtual_restaurant.form_id )) == null ? '' : __t) +
'    ' +
((__t = ( ")" )) == null ? '' : __t) +
'  \n                    </option>\n                  ';
 } ;
__p += '\n                ';
 }) ;
__p += '\n              </select>\n            </div>\n          </div>\n\n          <div id="item_space"></div>\n  \n          <div class="form-group" id="banners">\n            <div class="col-xs-1 visible-xs"></div>   \n            <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm"> * Banner</label>\n              <input type="file" name="banner" id="banner" class="input-sm col-md-8 col-sm-8 col-xs-8">\n               <button class="btn btn btn-success" id="delete_banner_button" style="margin-left:213px; font-size: 10px;"> Delete Banner</button>\n            </div>\n          </div>\n          <hr/>\n          <div class="to_center">\n            ';
 if(promotion){ ;
__p += '\n            <input type="submit" class="btn btn btn-success edit_promotion submit-form" value="Update"></input>\n            ';
 } ;
__p += '\n            ';
 if(promotion==null){ ;
__p += '\n            <input type="submit" class="btn btn btn-success submit-form" id="create_new_button" value="Create"></input>\n            ';
 } ;
__p += '\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/promotion_item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group" id="item">\r\n  <div class="col-xs-1 visible-xs"></div>\r\n <label  class="col-md-4 col-sm-4 col-xs-4 control-label label-sm"> * Item</label>\r\n  <div class="col-md-8 col-sm-8 col-xs-8">\r\n    <select id="items" name="items" multiple>\r\n      ';
 _.each(items, function(item) {;
__p += '\r\n        <option value="' +
((__t = ( item.id )) == null ? '' : __t) +
'">' +
((__t = ( item.name )) == null ? '' : __t) +
'</option>\r\n        ';
 if(item.id == current_item) { ;
__p += '\r\n          <option value="' +
((__t = ( item.id )) == null ? '' : __t) +
'" selected>' +
((__t = ( item.name )) == null ? '' : __t) +
'</option>\r\n        ';
 } ;
__p += '\r\n      ';
 }) ;
__p += '\r\n    </select>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/promotions.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-lg-12">\r\n    <section class="panel">\r\n        <div class="panel-body"> \r\n          <section id="alerts"></section>                           \r\n            <div class="row">             \r\n                <div class="col-lg-1">\r\n            \r\n                    <h4> Promotions </h4>\r\n                </div>\r\n                <div class="col-lg-4" style="padding-top:2px;">\r\n                    <a class="btn btn-success btn-sm" href="#promotions/new" id="add_new"><i class="fa fa-plus-square"></i> Add a new Promotion</a>\r\n           \r\n                </div>\r\n                  \r\n                <span class="pull-right">\r\n                  <a class="btn btn-primary " href="#restaurants" ><i class="fa fa-cutlery"></i> Restaurants</a>&nbsp;&nbsp;\r\n                </span>   \r\n\r\n                <span class="pull-right">\r\n                  <a class="btn btn-primary " href="#restaurants/virtual" ><i class="fa fa-cutlery"></i> Virtual Restaurants </a>&nbsp;&nbsp;\r\n                </span>                             \r\n            </div>\r\n            <hr/>\r\n\r\n            <div class="row">\r\n              <div class="col-lg-12">\r\n                <table class="table  table-hover general-table">\r\n                  <thead>\r\n                      <tr>\r\n                          <th >Name</th>\r\n                          <th>Description</th>\r\n                          <th>Start Date</th>\r\n                          <th>End Date</th>\r\n                          <th>Type</th>\r\n                          <th>Status</th>\r\n                          <th>Restaurants</th>\r\n                          <th>Actions</th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody class="searchable">\r\n                    ';
 _.each(promotions, function(promotion, i) { ;
__p += '                                     \r\n                      <tr id=\'' +
((__t = ( promotion.get('id') )) == null ? '' : __t) +
'\'> \r\n                        <td>\r\n                          <p class="text-info">\r\n                            ' +
((__t = ( promotion.get("name") )) == null ? '' : __t) +
'\r\n                          </p>\r\n                        </td>\r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( promotion.get("description") )) == null ? '' : __t) +
'\r\n                          </p>                                  \r\n                        </td>\r\n                        \r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( H.getDate(promotion.get("valid_from")) )) == null ? '' : __t) +
'  ' +
((__t = ( H.getTime(promotion.get("valid_from")) )) == null ? '' : __t) +
'\r\n                          </p>                                  \r\n                        </td>\r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( H.getDate(promotion.get("valid_till")) )) == null ? '' : __t) +
'  ' +
((__t = ( H.getTime(promotion.get("valid_till")) )) == null ? '' : __t) +
'\r\n                          </p>                                  \r\n                        </td>\r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( promotion.get("promotion_type") )) == null ? '' : __t) +
'\r\n                          </p>                                  \r\n                        </td>\r\n\r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( get_status_span(promotion.get("status")) )) == null ? '' : __t) +
'\r\n                          </p>                                  \r\n                        </td>\r\n\r\n                         <td>\r\n                            <p class="text-info">\r\n                             \r\n                              <a class="btn btn-info btn-sm" style="width:200px" data-toggle="collapse" data-target="#promotion_' +
((__t = ( promotion.get('id') )) == null ? '' : __t) +
'"><i class="fa fa-file-text"></i> View Restaurants </a>\r\n\r\n\r\n                              <div id="promotion_' +
((__t = ( promotion.get('id') )) == null ? '' : __t) +
'" class="collapse">\r\n                                <ul class="list-group" style="width:200px;">\r\n                                  ';
 _.each(promotion && promotion.get('restaurants'), function(restaurant){ ;
__p += '\r\n                                    <li class="list-group-item">' +
((__t = ( restaurant.restaurant_name  )) == null ? '' : __t) +
'  ' +
((__t = ( "(" )) == null ? '' : __t) +
'   ' +
((__t = ( restaurant.restaurant_form_id )) == null ? '' : __t) +
'    ' +
((__t = ( ")" )) == null ? '' : __t) +
'</li>\r\n                                  ';
 }) ;
__p += '\r\n                                </ul>\r\n                              </div>\r\n                           </p>                                  \r\n                        </td>\r\n                        \r\n                           \r\n                        <td>  \r\n                        <p class="text-info">\r\n                          <a class="btn btn-primary btn-sm" href="#promotions/edit/' +
((__t = ( promotion.get('id') )) == null ? '' : __t) +
'" id="' +
((__t = ( promotion.get('id') )) == null ? '' : __t) +
'" ><i class="fa fa-edit"></i> <span class="hidden-xs">Edit</span></a> \r\n                          <a class="btn btn-danger btn-sm hidden-xs delete"   id="' +
((__t = ( promotion.get('id') )) == null ? '' : __t) +
'"><i class="fa fa-trash-o fa-fw"></i> Delete</a>\r\n                        </p>                                      \r\n                                                                \r\n                        </td>                       \r\n                      </tr>\r\n                    ';
 }); ;
__p += '                                                 \r\n                  </tbody>\r\n                </table>                \r\n              </div>\r\n            </div>\r\n            <hr/>\r\n            \r\n            \r\n        </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/release.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-md-6 col-md-offset-3">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <section id="alerts"></section>\r\n        <h3 class="to_center">  ';
 if(release) { ;
__p += ' Update Release  ';
 };
__p += ' ';
 if(!release) { ;
__p += ' Add new Release  ';
 };
__p += ' </h3>\r\n        <hr/>\r\n\r\n        <form role="form" class="form-horizontal" id="release_form" method="POST">\r\n          <div class="form-group">\r\n            <div class="col-md-2 col-md-offset-1">\r\n              <a class="btn btn-success btn-sm" href="#' +
((__t = ( releaseType=="ios" ? "ios-releases" : "android-releases" )) == null ? '' : __t) +
'"><i class="fa fa-arrow-left"></i> Back to releases </a>\r\n            </div>\r\n          </div>\r\n          <!-- render the text type for: form_id -->\r\n          ' +
((__t = ( partial('partials_markupText', {
            id: "name",
            placeholder: "Enter version of the release",
            label: "Version",
            name: "version",
            value: release ? release.version : "" ,
            required: true
          }) )) == null ? '' : __t) +
'\r\n          <!-- render the text type for: form_id -->\r\n          ' +
((__t = ( partial('partials_markupText', {
            id: "numerical-version",
            placeholder: "Enter numerical version",
            label: "Numerical version",
            name: "numerical_version",
            value: release ? release.numerical_version : "",
            required: true,
            pattern:"[0-9]*",
            title:"Please enter an integer."
          }) )) == null ? '' : __t) +
'\r\n\r\n\r\n          <div class="form-group">\r\n              <label class="col-md-4 control-label" for="base_version" class="control-label">Base Version</label>\r\n            <div class="col-md-6">\r\n              <select class="form-control input-sm" name="base_version">\r\n                <option value="this">' +
((__t = ("This is a base version")) == null ? '' : __t) +
'</option> \r\n                ';
 if(base_version){ ;
__p += '\r\n                  ';
 _.each(base_version,function(version) { ;
__p += '\r\n                    <option value= "' +
((__t = (version)) == null ? '' : __t) +
'" \r\n                    ';
 if(release){  ;
__p += '\r\n                      ' +
((__t = ( release.base_version==version ? "selected" : '' )) == null ? '' : __t) +
'\r\n                    ';
 } ;
__p += '\r\n                    >' +
((__t = (version)) == null ? '' : __t) +
'\r\n                    </option>\r\n                  ';
}); ;
__p += '\r\n                ';
 } ;
__p += '\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class="form-group">\r\n            <div class="col-xs-1 visible-xs"></div>\r\n            <input type="hidden" name="is_deprecated" value="off">\r\n            <label class="col-sm-4 col-xs-4 control-label" for="is_deprecated">Is deprecated ?</label>\r\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\r\n                <div class="checkbox">\r\n                    <label>\r\n                        <input type="checkbox" name="is_deprecated" ';
 if(release && release.is_deprecated){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \r\n                    </label>\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <div class="col-xs-1 visible-xs"></div>\r\n            <input type="hidden" name="is_released" value="off">\r\n            <label class="col-sm-4 col-xs-4 control-label" for="is_released">Is released ?</label>\r\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\r\n                <div class="checkbox">\r\n                    <label>\r\n                        <input type="checkbox" name="is_released" ';
 if(release && release.is_released){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \r\n                    </label>\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n          ';
 if(releaseType=="ios") { ;
__p += '\r\n          ' +
((__t = ( partial('partials_markupText', {
            id: "app_store_url",
            placeholder: "Enter App store url",
            label: "App store url",
            name: "app_store_url",
            value: release ? release.app_store_url : "" ,
            required: false
          }) )) == null ? '' : __t) +
'\r\n          ';
 };
__p += '\r\n\r\n          <div class="form-group">\r\n              <label for="features_added" class="col-md-4 control-label">Features added</label>\r\n              <div class="col-md-6">\r\n                <textarea cols="30" rows="6" class="form-control" name="features_added" id="features_added" placeholder="Enter features of the release">' +
((__t = ( release ? release.features_added : "" )) == null ? '' : __t) +
'</textarea>\r\n              </div>\r\n          </div>\r\n\r\n          \r\n          \r\n          <hr/>\r\n          <div class="to_center">\r\n            ';
 if(release){ ;
__p += '\r\n            <button type="Update" class="btn btn btn-success" id="edit_release_button"> Update</button>\r\n            ';
 } ;
__p += '\r\n            ';
 if(release==null){ ;
__p += '\r\n            <button type="Create" class="btn btn btn-success" id="create_new_button"> Add </button>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/releases.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-lg-12">\r\n    <section class="panel">\r\n        <div class="panel-body"> \r\n          <section id="alerts"></section>                           \r\n            <div class="row">             \r\n                <div class="col-lg-2">\r\n            \r\n                    <h4> ' +
((__t = ( releaseType=="ios" ? "IOS releases" : "Android releases" )) == null ? '' : __t) +
' </h4>\r\n                </div>\r\n                <div class="col-lg-2 col-lg-offset-6" style="padding-top:2px;">\r\n                    <a class="btn btn-success btn-sm" href="#' +
((__t = ( releaseType=="ios" ? "ios-releases" : "android-releases" )) == null ? '' : __t) +
'/new" id="add_new"><i class="fa fa-plus-square"></i> Add a new release</a>\r\n           \r\n                </div>\r\n                <div class="col-lg-2" style="padding-top:2px;">\r\n                    <a class="btn btn-success btn-sm" href="#settings"><i class="fa fa-arrow-left"></i> Settings Panel</a>\r\n           \r\n                </div>\r\n                \r\n                  \r\n                                         \r\n            </div>\r\n            <hr/>\r\n\r\n            <div class="row">\r\n              <div class="col-lg-12">\r\n                <table class="table  table-hover general-table">\r\n                  <thead>\r\n                      <tr>\r\n                          <th>Version</th>\r\n                          <th>Numerical Version</th>\r\n                          <th>Base Version</th>\r\n                          <th>Depricated</th>\r\n                          <th>Released</th>\r\n                          <th>Features</th>\r\n                          <th>Actions</th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody class="searchable">\r\n                    ';
 _.each(releases, function(release, i) { ;
__p += '                                     \r\n                      <tr id=\'' +
((__t = ( release.get('id') )) == null ? '' : __t) +
'\'> \r\n                        <td>\r\n                          <p class="text-info">\r\n                            ' +
((__t = ( release.get("version") )) == null ? '' : __t) +
'\r\n                          </p>\r\n                        </td>\r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( release.get("numerical_version") )) == null ? '' : __t) +
'\r\n                            </p>                                  \r\n                        </td>\r\n\r\n                        <td>\r\n                            <p class="text-info">\r\n                            ' +
((__t = ( release.get("base_version") )) == null ? '' : __t) +
'\r\n                            </p>                                  \r\n                        </td>\r\n                        \r\n                        <td>\r\n                          <p class="text-info">\r\n                            ' +
((__t = ( release.get("is_deprecated") )) == null ? '' : __t) +
'  \r\n                          </p>                                  \r\n                        </td>\r\n\r\n                        <td>\r\n                          <p class="text-info">\r\n                            ' +
((__t = ( release.get("is_released") )) == null ? '' : __t) +
'  \r\n                          </p>                                  \r\n                        </td>                        \r\n\r\n\r\n                         <td>\r\n                            <p class="text-info">\r\n\r\n                              <div id="release' +
((__t = ( release.get('id') )) == null ? '' : __t) +
'" >\r\n                                <ul class="fa-ul" style="width:200px;">\r\n                                  ';
 _.each(release && release.get('features_added'), function(feature){ ;
__p += '\r\n                                    <li><i class="fa-li fa fa-square"></i>' +
((__t = ( feature  )) == null ? '' : __t) +
' </li>\r\n                                  ';
 }) ;
__p += '\r\n                                  ';
  if(release.get('features_added').length ==0) { ;
__p += '\r\n                                      <li><i class="fa-li fa fa-square"></i> No features added to this version </li>\r\n                                  ';
};
__p += '\r\n                                </ul>\r\n                              </div>\r\n                           </p>                                  \r\n                        </td>\r\n                        \r\n                           \r\n                        <td>  \r\n                        <p class="text-info">\r\n                          <a class="btn btn-primary btn-sm" href="#' +
((__t = ( releaseType=="ios" ? "ios-releases" : "android-releases" )) == null ? '' : __t) +
'/edit/' +
((__t = ( release.get('id') )) == null ? '' : __t) +
'" id="' +
((__t = ( release.get('id') )) == null ? '' : __t) +
'" ><i class="fa fa-edit"></i> <span class="hidden-xs">Edit</span></a>\r\n                          <a class="btn btn-danger btn-sm hidden-xs delete"   id="' +
((__t = ( release.get('id') )) == null ? '' : __t) +
'"><i class="fa fa-trash-o fa-fw"></i> Delete</a>\r\n                        </p>                                      \r\n                                                                \r\n                        </td>                       \r\n                      </tr>\r\n                    ';
 }); ;
__p += '                                                 \r\n                  </tbody>\r\n                </table>                \r\n              </div>\r\n            </div>\r\n            <hr/>\r\n            \r\n            \r\n        </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/restaurantForm.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n\n<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12 ">\n    <div class="panel">\n      <div class="panel-body">\n        <section id="alerts"></section>                           \n        <h3 class="to_center">Edit: ' +
((__t = ( restaurant.get('name') )) == null ? '' : __t) +
'</h3>\n        <hr>\n        <div class="row">\n        <form accept-charset="UTF-8" class="form-horizontal" method="post" enctype="multipart/form-data">\n          <div class="quick-save pull-right hidden-xs hidden-sm">\n            <button type="submit" class="btn btn-success btn-sm affix" value="Save Changes" id="save_changes" ><i class="fa fa-save"></i> Quick Save </button>\n          </div>\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id">\n          <!-- render the text type for: form_id -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "form_id",
            placeholder: "Form Id",
            label: "Form Id",
            name: "form_id",
            value: restaurant ? restaurant.get('form_id') : "",
            required: true,
            pattern: "([a-zA-Z])*([\\-])?([a-zA-Z])+[\\-][1-9]([0-9])*",
            title: "Should contain hypen (-) , Will be something like MA-213 or MUM-MA-213"
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: name -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "data_collection_guy_name",
            placeholder: "Data Collection Guy",
            label: "Data Collection Guy",
            name: "data_collection_guy_name",
            value: restaurant ? restaurant.get('data_collection_guy_name') : "",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: name -->\n          ' +
((__t = ( partial('partials_tinyowlRepresentative', {
            id: "tinyowl_representative",
            label: "Tinyowl Representative",
            name: "tinyowl_representative",
            value: restaurant ? restaurant.get('tinyowl_representative') : "",
            representatives: collections.bd_team,
            required: true
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
'\n\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="restaurant_type" class="col-md-4 col-xs-4 control-label">Restaurant Type</label>\n            <div class="col-md-8 col-sm-8 col-xs-6">\n            <select name="restaurant_type" class="form-inline-element input-sm" id="restaurant_type">\n              <option value="-1" selected>none</option>\n                ';
 _.each(collections.restaurant_type, function(i,restaurant_type) { ;
__p += '\n                  <option value="' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if(restaurant.get("restaurant_type") == i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = ( restaurant_type )) == null ? '' : __t) +
'</option>\n                ';
 }) ;
__p += '\n            </select>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="city" class="col-md-4 col-xs-4 control-label">City</label>\n            <div class="col-md-8 col-sm-8 col-xs-6">\n            <select name="city" class="form-inline-element input-sm" id="city">\n              <option value="" selected>none</option>\n                ';
 _.each(collections.cities, function(city) { ;
__p += '\n                  <option value="' +
((__t = ( city )) == null ? '' : __t) +
'" ';
 if(restaurant.get("city") == city){;
__p +=
((__t = ("selected")) == null ? '' : __t);
  } ;
__p += ' >' +
((__t = ( city )) == null ? '' : __t) +
'</option>\n                ';
 }) ;
__p += '\n            </select>\n            </div>\n          </div>\n\n          <hr>\n          ' +
((__t = ( partial('partials_markupNumber', {
            id: "no_of_owners",
            placeholder: "Total number of owners",
            label: "Total number of owners",
            name: "no_of_owners",
            value: restaurant ? restaurant.get('no_of_owners') : 0,
            required: false,
            pattern: "/^[0-9]*$/",
            min: "0"
          }) )) == null ? '' : __t) +
'\n          ' +
((__t = ( partial('partials_markupNumber', {
            id: "no_of_managers",
            placeholder: "Total number of managers",
            label: "Total number of managers",
            name: "no_of_managers",
            value: restaurant ? restaurant.get('no_of_managers') : 0,
            required: false,
            min: "0"
          }) )) == null ? '' : __t) +
'\n          ' +
((__t = ( partial('partials_markupNumber', {
            id: "no_of_general_managers",
            placeholder: "Total number of general managers",
            label: "Total number of general managers",
            name: "no_of_general_managers",
            value: restaurant ? restaurant.get('no_of_general_managers') : 0,
            required: false,
            min: "0"
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n\n          <!-- designation table -->\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <div class="col-md-9 col-xs-9">\n              <input type="hidden" name="rows" id="rows" value="' +
((__t = ( restaurant.get('contact_persons').length )) == null ? '' : __t) +
'">\n              <h4 class="to_center">Contact Persons </h4>\n            </div>\n            <div class="col-md-1 col-sm-1 col-xs-1">\n              <button type="button" class="btn btn-info btn-sm add_new_dsgn pull-right"> <i class="fa fa-user"></i> Add  </button>\n            </div>\n          </div>\n          <hr>\n            <div class="contact_person">\n              ';
 _.each(restaurant.get('contact_persons'), function(who, index) { ;
__p += '\n                ' +
((__t = ( partial('partials_designation', {
                  index: index,
                  who: who,
                  designations: collections.designations,
                  contact_number_types: collections.contact_number_types,
                }) )) == null ? '' : __t) +
'\n              ';
 }); ;
__p += '\n            </div>\n          <hr>\n\n          <!-- Phone numbers for sms -->\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <div class="col-md-9 col-xs-9">\n              <input type="hidden" name="phone_numbers_for_sms_contact_numbers_count" value="' +
((__t = ( restaurant.get('phone_numbers_for_sms').length )) == null ? '' : __t) +
'">\n              <h4 class="to_center">Number  for sending order through  SMS \n              </h4>\n            </div>\n            <div class="col-md-1 col-sm-1 col-xs-1">\n              <button type="button" class="btn btn-info btn-sm add_new_number_sms pull-right"><i class="fa fa-phone fa-lg"></i> Add </button>\n            </div>\n          </div>\n          \n\n          <hr>\n          <div class="add_new_contact_number_sms">\n          ';
 _.each(restaurant.get('phone_numbers_for_sms'), function(phone_number, i) { ;
__p += '\n            ' +
((__t = ( partial('partials_contactNumber', {
                id: phone_number._id,
                markup_hidden_name: "phone_numbers_for_sms_contact_numbers_" + i + "_id",
                markup_hidden_index: "phone_numbers_for_sms_contact_numbers_" + i,
                markup_select_name: "phone_numbers_for_sms_contact_numbers_" + i + "_number_type",
                markup_input_name: "phone_numbers_for_sms_contact_numbers_" + i + "_number",
                markup_to_delete: "phone_numbers_for_sms_contact_numbers_" + i + "_delete",
                i: i,
                number: phone_number.number,
                contact_number_types: collections.contact_number_types,
                number_type: phone_number.number_type,
                sms:true,
                is_present_on_counter: phone_number.is_present_on_counter,
                is_smartphone: phone_number.is_smartphone,
                is_verified: phone_number.is_verified
              })
            )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n        </div>\n\n          \n          <hr>\n          \n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="email" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">Email ID(s) for order forwarding</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="text" class="form-control input-sm" name="email" id="email" placeholder="Email..." value="' +
((__t = (restaurant.get('email'))) == null ? '' : __t) +
'" autocomplete="off"> \n            </div>\n          </div>\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label for="orders_per_day" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">No. Of  Orders  Per day (Average)</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <input type="number" class="form-control input-sm" name="orders_per_day" id="orders_per_day" placeholder="Orders per day" value="' +
((__t = (restaurant.get('orders_per_day'))) == null ? '' : __t) +
'" autocomplete="off"> \n            </div>\n          </div>\n\n          <hr>\n\n          <!-- custom markup: since Jquery plugin breaks the partial -->\n          <div class="form-group adjust-xs">\n            <label for="closed_timing_ids" class="col-md-4 control-label">Closed Timings</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n            <select multiple name="closed_timing_ids" id="closed_timing_ids" class="default-select2">\n            ';
 _.each(collections.closed_timings, function(timing) { ;
__p += '\n              <option ';
 if (H.check_element_exists(restaurant.get("closed_timing_ids"), timing[1])) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( timing[1] )) == null ? '' : __t) +
'">' +
((__t = ( timing[0] )) == null ? '' : __t) +
'</option>\n            ';
 }) ;
__p += '\n            </select>\n            </div>\n          </div>\n          <div class="form-group adjust-xs">\n            <label for="delivery_boys_vehicle" class="col-md-4 control-label">Delivery  boys vehicle</label>\n            <div class="col-md-6 col-sm-6 col-xs-6">\n              <select name="delivery_boys_vehicle" id="delivery_boys_vehicle" class="default-select2" multiple>\n              ';
 _.each(collections.delivery_boys_vehicle, function(i,vehicle) { ;
__p += '\n                <option ';
 if (H.check_element_exists(restaurant.get("delivery_boys_vehicle"),i)) { ;
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
'\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-md-4 col-sm-4 col-xs-3 control-label label-sm">Packaging Charges Type</label>\n\n            <div class="col-md-8 col-sm-8 col-xs-8">\n              <select name="packaging_charges_type" id="packaging_charges_type" class="form-inline-element input-sm">\n                ';
 _.each(collections.packaging_charges_type, function(value, key) { ;
__p += '\n                  <option id="pack" value="' +
((__t = ( value )) == null ? '' : __t) +
'" ';
 if (value == restaurant.get('packaging_charges_type')) { ;
__p += ' selected ';
 } ;
__p += ' >' +
((__t = ( key )) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n              </select>\n            </div>\n          </div>\n\n          <!-- render the text type for: service_tax -->\n          ' +
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
'\n\n          <!-- render the text type for: service_charges -->\n          ' +
((__t = ( partial('partials_markupText', {
            id: "service_charges",
            placeholder: "Service Charges",
            label: "Service Charges (in %)",
            value: restaurant.get('service_charges')?restaurant.get('service_charges'):"0",
            name: "service_charges",
            required: false
          }) )) == null ? '' : __t) +
'\n\n          <!-- render the text type for: commission charges for default -->\n          ' +
((__t = ( partial('partials_markupNumber', {
            id: "service_charges",
            placeholder: "Commission charges (default)",
            label: "Commission charges default (in %)",
            value: (restaurant.get('restaurant_commissions') && restaurant.get('restaurant_commissions')[0]) ? restaurant.get('restaurant_commissions')[0].commission : "0",
            name: "commission_charges_default",
            required: false,
            min: "0",
            step: "0.01"
          }) )) == null ? '' : __t) +
'\n\n         <!-- render the text type for: commission charges for dishes -->\n          ' +
((__t = ( partial('partials_markupNumber', {
            id: "service_charges",
            placeholder: "Commission charges (express)",
            label: "Commission charges express (in %)",
            value: (restaurant.get('restaurant_commissions') && restaurant.get('restaurant_commissions')[1]) ? restaurant.get('restaurant_commissions')[1].commission : "0",
            name: "commission_charges_express",
            required: false,
            min: "0",
            step: "0.01"
          }) )) == null ? '' : __t) +
'\n\n          <hr>\n          <!-- Additional Information - Restaurants with same owner -->\n          <div class="form-group">\n            <div class="row">\n              <div class="col-xs-1 visible-xs"></div>\n              <div class="col-md-9 col-xs-9">\n                <h4 class="to_center">Other Restaurants of the same owner/owners</h4>\n              </div>\n              <div class="col-md-1 col-sm-1 col-xs-1">\n                <button type="button" class="btn btn-info btn-sm additional_info_add pull-right" data-info="restaurants_of_same_owner" data-placeholder="Restaurant name..."><i class="fa fa-plus"></i></button>\n              </div>\n            </div>\n            <br/>\n            <div class="restaurants_of_same_owner">\n            ';
 _.each(restaurant.get('restaurants_of_same_owner'), function (restaurant, i) { ;
__p += '\n              ' +
((__t = ( partial('partials_additional_name_locality', {
                markup_row: 'restaurants_of_same_owner_' + i + '_row',
                markup_id: 'restaurants_of_same_owner_' + i + '_id',
                markup_to_delete: 'restaurants_of_same_owner_' + i + '_to_delete',
                markup_delete: 'restaurants_of_same_owner',
                markup_name: 'restaurants_of_same_owner_' + i + '_name',
                markup_locality: 'restaurants_of_same_owner_' + i + '_locality',
                markup_placeholder: 'Restaurant name...',
                i: i,
                id: restaurant.id,
                name: restaurant.name,
                locality: restaurant.locality
              }) )) == null ? '' : __t) +
'\n            ';
 }) ;
__p += '\n            </div>\n            <input type="hidden" name="restaurants_of_same_owner_count" id="restaurants_of_same_owner_count" value="' +
((__t = ( restaurant.get('restaurants_of_same_owner').length )) == null ? '' : __t) +
'">\n          </div>\n\n          <hr>\n\n          <!-- Additional Information - Societies with most orders -->\n          <div class="form-group">\n            <div class="row">\n              <div class="col-xs-1 visible-xs"></div>\n              <div class="col-md-9 col-xs-9">\n                <h4 class="to_center">Societies with most orders</h4>\n              </div>\n              <div class="col-md-1 col-sm-1 col-xs-1">\n                <button type="button" class="btn btn-info btn-sm additional_info_add pull-right" data-info="societies_with_most_orders" data-placeholder="Society name..."><i class="fa fa-plus"></i></button>\n              </div>\n            </div>\n            <br/>\n            <div class="societies_with_most_orders">\n            ';
 _.each(restaurant.get('societies_with_most_orders'), function (restaurant, i) { ;
__p += '\n              ' +
((__t = ( partial('partials_additional_name_locality', {
                markup_row: 'societies_with_most_orders_' + i + '_row',
                markup_id: 'societies_with_most_orders_' + i + '_id',
                markup_to_delete: 'societies_with_most_orders_' + i + '_to_delete',
                markup_delete: 'societies_with_most_orders',
                markup_name: 'societies_with_most_orders_' + i + '_name',
                markup_locality: 'societies_with_most_orders_' + i + '_locality',
                markup_placeholder: 'Society name...',
                i: i,
                id: restaurant.id,
                name: restaurant.name,
                locality: restaurant.locality
              }) )) == null ? '' : __t) +
'\n            ';
 }) ;
__p += '\n            </div>\n            <input type="hidden" name="societies_with_most_orders_count" id="societies_with_most_orders_count" value="' +
((__t = ( restaurant.get('societies_with_most_orders').length )) == null ? '' : __t) +
'">\n          </div>\n\n          <hr>\n\n          <!-- Additional Information - Officies with most orders -->\n          <div class="form-group">\n            <div class="row">\n              <div class="col-xs-1 visible-xs"></div>\n              <div class="col-md-9 col-xs-9">\n                <h4 class="to_center">Offices with most orders</h4>\n              </div>\n              <div class="col-md-1 col-sm-1 col-xs-1">\n                <button type="button" class="btn btn-info btn-sm additional_info_add pull-right" data-info="officies_with_most_orders" data-placeholder="Office name..."><i class="fa fa-plus"></i></button>\n              </div>\n            </div>\n            <br/>\n            <div class="officies_with_most_orders">\n            ';
 _.each(restaurant.get('officies_with_most_orders'), function (restaurant, i) { ;
__p += '\n              ' +
((__t = ( partial('partials_additional_name_locality', {
                markup_row: 'officies_with_most_orders_' + i + '_row',
                markup_id: 'officies_with_most_orders_' + i + '_id',
                markup_to_delete: 'officies_with_most_orders_' + i + '_to_delete',
                markup_delete: 'officies_with_most_orders',
                markup_name: 'officies_with_most_orders_' + i + '_name',
                markup_locality: 'officies_with_most_orders_' + i + '_locality',
                markup_placeholder: 'Office name...',
                i: i,
                id: restaurant.id,
                name: restaurant.name,
                locality: restaurant.locality
              }) )) == null ? '' : __t) +
'\n            ';
 }) ;
__p += '\n            </div>\n            <input type="hidden" name="officies_with_most_orders_count" id="officies_with_most_orders_count" value="' +
((__t = ( restaurant.get('officies_with_most_orders').length )) == null ? '' : __t) +
'">\n          </div>\n\n          <hr>\n\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label" for="has_delivery">Bill Attached ? </label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="is_bill_attached" ';
 if(restaurant.get("is_bill_attached")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n          <div class="form-group">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label" for="has_delivery">Sodexo accepted in case of COD ? </label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <label>\n                        <input type="checkbox" name="is_sodexo_accepted" ';
 if(restaurant.get("is_sodexo_accepted")){;
__p += ' ' +
((__t = ( "checked" )) == null ? '' : __t) +
' ';
 } ;
__p += ' >                        \n                    </label>\n                </div>\n            </div>\n          </div>\n\n        <hr>\n\n        <div class="submit_div">\n          <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes">\n        </div>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/restaurant_closing_reason.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table class="table">\n  <thead>\n    <th>Reason</th>\n    <th>Message on the App</th>\n  </thead>\n  <tbody>\n    ';
 _.each(reasons,function(item){;
__p += '\n    <tr>\n      <td>' +
((__t = (item.get('reason'))) == null ? '' : __t) +
'</td>\n      <td>' +
((__t = (item.get('message_app'))) == null ? '' : __t) +
'</td>\n    </tr>\n    ';
});;
__p += '\n  </tbody>\n</table>\n<button class="btn btn-success">Add</button>\n<!-- table>thead>th{Reason}+th{Message on the App}^tbody>tr>td*2 -->\n';

}
return __p
};

this["JST"]["app/scripts/templates/restaurant_diff.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<!-- restaurant diff report for infinx -->\n<div class="row">\n  <div class="col-lg-12">\n    <section class="panel">\n        <div class="panel-body">                         \n            <div class="row">             \n                <div class="col-lg-3">\n                    <h4> Restaurant Diff </h4>\n                </div>                          \n            </div>\n        </div>\n    </section>\n  </div>\n</div>\n';
 if(Object.keys(diff_restaurant).length == 0 && diff_timings.length == 0 && diff_menu_items.length == 0  && diff_choices.length ==0) {;
__p += '\n    <div class="row">             \n        <div class="col-lg-3">\n          <h5> No diff found. </h5>\n        </div>                          \n    </div>\n';
 };
__p += '\n<div class="row">\n  <div >\n  </div>\n  ';
 if(Object.keys(diff_restaurant).length > 0) {;
__p += '\n    <div class="col-md-2 tile" >\n      <div class="panel">\n        <span class="label label-danger pull-right">Profile</span><br/>\n        <div class="panel-body">\n          <div class="top-stats-panel">\n            <table class="table  general-table">\n              <thead>\n                <tr>\n                  <th>Name</th>\n                </tr>\n              </thead>\n              <tbody class="searchable">\n                <tr>\n                  <td style="color:red">\n                    ' +
((__t = ( diff_restaurant["Name"] )) == null ? '' : __t) +
'\n                  </td>\n                </tr>\n              </tbody>\n            </table> \n          </div>\n        </div>\n      </div>\n  </div>\n  ';
 } ;
__p += '\n\n  ';
 if(diff_timings.length>0) {;
__p += '\n    <div class="col-md-3 tile" >\n      <div class="panel">\n        <span class="label label-danger pull-right">Timings</span><br/>\n        <div class="panel-body">\n          <div class="top-stats-panel">\n             ';
if(diff_timings[0].ERROR) { ;
__p += '\n              <span style="color:red">Timing ' +
((__t = ( diff_timings[0].ERROR )) == null ? '' : __t) +
'</span>\n            ';
 } else { ;
__p += '\n              <table class="table  general-table">\n                <thead>\n                  <tr>\n                    <th>Name</th>\n                    <th>Start</th>\n                    <th>End</th>\n                  </tr>\n                </thead>\n                <tbody class="searchable">\n                  ';
 _.each(diff_timings, function(timing){ ;
__p += '\n                    <tr>\n                      ';
if(timing.compare_on_error) { ;
__p += '\n                        <td style="color:red">\n                           ' +
((__t = ( timing["Name"] )) == null ? '' : __t) +
' \n                        </td>\n                      ';
} else{ ;
__p += '\n                        <td>\n                           ' +
((__t = ( timing["Name"] )) == null ? '' : __t) +
' \n                        </td>\n                      ';
 };
__p += '\n                      <td style="color:red">\n                        ' +
((__t = ( timing["Start"] ? to_hours(timing["Start"]) : "" )) == null ? '' : __t) +
' \n                      </td>\n                      <td style="color:red">\n                        ' +
((__t = ( timing["End"] ? to_hours(timing["End"]) : "" )) == null ? '' : __t) +
' \n                      </td>\n                    </tr>\n                    ';
}); ;
__p += '\n                </tbody>\n              </table>\n            ';
 } ;
__p += '\n          </div>\n        </div>\n      </div>\n  </div>\n  ';
 } ;
__p += '\n\n';
 if(diff_choices.length>0) { ;
__p += '\n    <div class="col-md-9 tile" >\n      <div class="panel">\n        <span class="label label-danger pull-right">Choices</span><br/>\n        <div class="panel-body">\n          <div class="top-stats-panel">\n            ';
if(diff_choices[0].ERROR) { ;
__p += '\n              <span style="color:red">Choice ' +
((__t = ( diff_choices[0].ERROR )) == null ? '' : __t) +
'</span>\n            ';
 } else { ;
__p += '\n                <table class="table  general-table">\n                  <thead>\n                    <tr>\n                      <th>Label</th>\n                      <th>Name</th>\n                      <th>Description</th>\n                      <th>Min</th>\n                      <th>Max</th>\n                      <th>Label for restaurant</th>\n                      <th>Defaults</th>\n                      <th>Choice Options</th>\n                    </tr>\n                  </thead>\n                  <tbody class="searchable">\n                ';
 _.each(diff_choices, function(choice){ ;
__p += '\n                  <tr>\n                      ';
if(choice.compare_on_error) { ;
__p += '\n                        <td style="color:red">\n                           ' +
((__t = ( choice["Label"] )) == null ? '' : __t) +
' \n                        </td>\n                      ';
} else{ ;
__p += '\n                        <td>\n                           ' +
((__t = ( choice["Label"] )) == null ? '' : __t) +
' \n                        </td>\n                      ';
 };
__p += '\n                      <td style="color:red">\n                        ' +
((__t = ( choice["Name"] )) == null ? '' : __t) +
' \n                      </td>\n                      <td style="color:red">\n                        ' +
((__t = ( choice["Description"] )) == null ? '' : __t) +
' \n                      </td>\n                      <td style="color:red">\n                        ' +
((__t = ( choice["Min"] )) == null ? '' : __t) +
' \n                      </td>\n                      <td style="color:red">\n                        ' +
((__t = ( choice["Max"] )) == null ? '' : __t) +
' \n                      </td>\n                      <td style="color:red">\n                        ' +
((__t = ( choice["Label for restaurant"] )) == null ? '' : __t) +
' \n                      </td>\n                      <td style="color:red">\n                        ';
 if(choice["Defaults"] && choice["Defaults"].length==0) { ;
__p += '\n                          Default mismatched\n                        ';
 } else {;
__p += '\n                        ' +
((__t = ( choice["Defaults"] )) == null ? '' : __t) +
' \n                        ';
 };
__p += '\n                      </td>\n                      <td>\n                        ';
if(choice["Choice Options"] && choice["Choice Options"][0].ERROR) {  ;
__p += '\n                          <span style="color:red">Choices ' +
((__t = ( choice["Choice Options"][0].ERROR )) == null ? '' : __t) +
'</span>\n                        ';
 } else if(choice["Choice Options"]){ ;
__p += '\n                          <table class="table general-table">\n                            <thead>\n                              <tr>\n                                <th>Name</th>\n                                <th>Type</th>\n                                <th>Max</th>\n                                <th>Price</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              ';
 _.each(choice["Choice Options"],function(option) { ;
__p += ' \n                              <tr>\n                                ';
 if(option["compare_on_error"]) {;
__p += '\n                                  <td style="color:red">\n                                    ' +
((__t = ( option["Name"] )) == null ? '' : __t) +
'\n                                  </td>\n                                ';
 }  else {;
__p += '\n                                  <td>\n                                    ' +
((__t = ( option["Name"] )) == null ? '' : __t) +
'\n                                  </td>\n                                ';
 };
__p += '\n                                <td style="color:red">\n                                  ';
 if(option["Veg type"] == "") { ;
__p += '\n                                    Type mismatched\n                                  ';
 } else {;
__p += '\n                                  ' +
((__t = ( option["Veg type"] )) == null ? '' : __t) +
' \n                                  ';
};
__p += '\n                                </td>\n                                <td style="color:red">\n                                  ' +
((__t = ( option["Max number"] )) == null ? '' : __t) +
' \n                                </td>\n                                <td style="color:red">\n                                  ' +
((__t = ( option["Price"] )) == null ? '' : __t) +
' \n                                </td>\n                              ';
 }); ;
__p += '\n                            </tr>\n                            </tbody>\n                          </table>\n                        ';
 } ;
__p += '\n                      </td>\n                  </tr>             \n                ';
}); ;
__p += '\n                </tbody>\n              </table>\n            ';
};
__p += '\n          </div>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n\n \n  ';
 if(diff_menu_items.length>0) { ;
__p += '\n    <div class="col-md-6 tile" >\n      <div class="panel">\n        <span class="label label-danger pull-right">Menu Items</span><br/>\n        <div class="panel-body">\n          <div class="top-stats-panel">\n            ';
if(diff_menu_items[0].ERROR) { ;
__p += '\n              <span style="color:red">Item ' +
((__t = ( diff_menu_items[0].ERROR )) == null ? '' : __t) +
'</span>\n            ';
 } else { ;
__p += '\n                <table class="table general-table">\n                  <thead>\n                    <tr>\n                      <th>Name</th>\n                      <th>Description</th>\n                      <th>APS/APC</th>\n                      <th>Size</th>\n                    </tr>\n                  </thead>\n                  <tbody class="searchable">\n                ';
 _.each(diff_menu_items, function(menu_item){ ;
__p += '\n                  <tr>\n                      ';
if(menu_item.compare_on_error) { ;
__p += '\n                        <td style="color:red">\n                           ' +
((__t = ( menu_item["Name"] )) == null ? '' : __t) +
' \n                        </td>\n                      ';
} else{ ;
__p += '\n                        <td>\n                          ' +
((__t = ( menu_item["Name"] )) == null ? '' : __t) +
' \n                        </td>\n                      ';
 };
__p += '\n                    </td>\n                    <td style="color:red">\n                      ';
 if(menu_item["Description"] == "") { ;
__p += '\n                        Description missing\n                      ';
 } else {;
__p += '\n                        ' +
((__t = ( menu_item["Description"] )) == null ? '' : __t) +
' \n                      ';
};
__p += '\n                    </td>\n                    <td style="color:red">\n                     ' +
((__t = ( menu_item["APS/APC"] )) == null ? '' : __t) +
'\n                    </td>\n                    <td>\n                      ';
if(menu_item["Item Sizes"] && menu_item["Item Sizes"][0].ERROR) {  ;
__p += '\n                        <span style="color:red">Sizes ' +
((__t = ( menu_item["Item Sizes"][0].ERROR )) == null ? '' : __t) +
'</span>\n                      ';
 } else if(menu_item["Item Sizes"]){ ;
__p += '\n                        <table class="table general-table">\n                          <thead>\n                            <tr>\n                              <th>Size</th>\n                              <th>Choice</th>\n                              <th>Choice Label</th>\n                              <th>Prices</th>\n                            </tr>\n                          </thead>\n                          <tbody class="searchable">\n                            ';
 _.each(menu_item["Item Sizes"],function(size) { ;
__p += ' \n                              <tr>\n                                ';
 if(size["compare_on_error"]) {;
__p += '\n                                  <td style="color:red">\n                                    ' +
((__t = ( size["Size"] )) == null ? '' : __t) +
'\n                                  </td>\n                                ';
 }  else {;
__p += '\n                                  <td>\n                                    ' +
((__t = ( size["Size"] )) == null ? '' : __t) +
'\n                                  </td>\n                                ';
 };
__p += '\n\n                                <td style="color:red">\n                                  ';
 if(size["Choices"] == "") { ;
__p += '\n                                    Choice mismatched\n                                  ';
 } else {;
__p += '\n                                    ' +
((__t = ( size["Choices"] )) == null ? '' : __t) +
' \n                                  ';
};
__p += '\n                                </td>\n                                <td style="color:red">\n                                  ';
 if(size["Choice Label"] == "") { ;
__p += '\n                                    Choice mismatched\n                                  ';
 } else {;
__p += '\n                                    ' +
((__t = ( size["Choice Label"] )) == null ? '' : __t) +
' \n                                  ';
};
__p += '\n                                </td>\n                                <td>\n                                  ';
if(size["Item Prices"] && size["Item Prices"][0].ERROR) { ;
__p += '\n                                    <span style="color:red">Prices ' +
((__t = ( size["Item Prices"][0].ERROR )) == null ? '' : __t) +
'</span>\n                                  ';
 } else {;
__p += '\n                                  ';
 _.each(size["Item Prices"],function(price) { ;
__p += ' \n                                    ';
if(price.compare_on_error) { ;
__p += '\n                                      <span style="color:red">\n                                        <li> ' +
((__t = ( price["Timing"] )) == null ? '' : __t) +
' </li>\n                                      </span>\n                                    ';
} else{ ;
__p += '\n                                      <li><span style="color:red">' +
((__t = ( price["Price"] )) == null ? '' : __t) +
'</span> => ' +
((__t = ( price["Timing"] )) == null ? '' : __t) +
' </li>\n                                    ';
 };
__p += '\n                                  ';
 });;
__p += '\n                                  </span>\n                                  ';
 } ;
__p += '\n                                </td>\n                              </tr>\n                           ';
 });;
__p += '\n                           </tbody>\n                          </table>\n                        ';
};
__p += '\n                    </td>\n                  </tr>             \n                ';
}); ;
__p += '\n                </tbody>\n              </table>\n            ';
};
__p += '\n          </div>\n        </div>\n      </div>\n    </div>\n  ';
 } ;
__p += '\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/restaurant_top_navigation.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(restaurant.get("name")){ ;
__p += '\r\n  <div class="row">\r\n    <div class="col-xs-12">\r\n      <div class="panel">\r\n        <div class="panel-body">\r\n          <span class="text-info hidden-xs">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\r\n          <span class="hidden-xs">&nbsp;&nbsp;</span>\r\n          ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\r\n          <span>&nbsp;&nbsp;</span>\r\n          <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\r\n          <span class="hidden-xs">&nbsp;&nbsp;</span>\r\n          <span class="hidden-xs"> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\r\n          <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\r\n          <span class="pull-right">\r\n            ';
 if(menu_stash){ ;
__p += '\r\n                          <button type="button" class="btn btn-warning btn-sm push_menu"> Push Changes </button>\r\n                          <input type="hidden" class="push_menu_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n            ';
 } ;
__p += ' \r\n            ';
 if (restaurant.get("status") != get_status_id("VIRTUAL")) { ;
__p += '\r\n              <a class="btn btn-info btn-sm hidden-xs" href="#restaurants/' +
((__t = (restaurant.get('id'))) == null ? '' : __t) +
'/update_status"><i class="fa fa-refresh"></i> Update Status</a>\r\n            ';
 } ;
__p += '\r\n            <a class="btn btn-primary btn-sm " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Modal -->\r\n  <div class="modal fade" id="logModal" role="dialog" aria-labelledby="logModalLabel" aria-hidden="true">\r\n    <div class="modal-dialog" style="width: 900px">\r\n      <div class="modal-content">\r\n        <div class="modal-header">\r\n          <button type="button" class="close" data-dismiss="modal" aria-hidden="true" title="Close">&times;</button>\r\n          <h4 class="modal-title" id="logModalLabel">Logs for\r\n            <span id="log_name"></span>\r\n            <span id="form_errors" style="display:inline-block; text-align:center;"></span>\r\n          </h4>\r\n        </div>\r\n        <div class="modal-body">\r\n          <!-- modal body -->\r\n          <div id="log_panel">\r\n          </div>\r\n          <!-- end of form body -->\r\n        </div>\r\n        <div class="modal-footer">\r\n          <div id="notification_save"></div>\r\n          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- end modal  -->\r\n';
 } ;


}
return __p
};

this["JST"]["app/scripts/templates/restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row" id="filters_affix">\n  <div class="col-sm-12">\n    <div class="panel">\n      <div class="panel-body">                        \n        <div class="row">             \n          <div class="col-sm-12 col-md-12 col-lg-12">\n               <div class="row">\n                    <div class="col-sm-3">\n                         <div class="input-group">\n                              <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\n                              <input type="text" id="filter" class="form-control input-sm" placeholder="Type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (get_url_parameter("search"))) == null ? '' : __t) +
'">\n                         </div>\n                    </div>\n\n                    <div class="col-sm-2 hidden-xs">\n                         <input type="text" class="form-control input-sm typeahead" id="locality" placeholder="locality" autocomplete="off" data-toggle="tooltip" data-placement="top" title="Locality" value="' +
((__t = (get_url_parameter("locality_id")?get_locality(get_url_parameter("locality_id")):'')) == null ? '' : __t) +
'">\n\n                    </div>\n\n                      <div class="col-sm-2 hidden-xs">\n                              <input type="text" class="form-control input-sm typeahead" id="delivers_in" placeholder="delivers in" autocomplete="off" data-toggle="tooltip" data-placement="top" title="Delivers in" value="' +
((__t = (get_url_parameter("delivers_in")?get_locality_group(get_url_parameter("delivers_in")):'')) == null ? '' : __t) +
'">\n                    </div>\n\n                    <div class="col-sm-5 hidden-xs">\n                         <select id="cuisine" name="cuisine_ids" class="form-control input-sm default-select2"  multiple>\n                          ';
 _.each(collections.cuisines, function(cuisine) { ;
__p += '\n                            <option ';
if ( get_url_parameter("cuisine_ids") && H.check_element_exists(get_url_parameter("cuisine_ids"), cuisine[1])) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( cuisine[1] )) == null ? '' : __t) +
'">' +
((__t = ( cuisine[0] )) == null ? '' : __t) +
'</option>\n                          ';
 }) ;
__p += '\n                        </select>\n                    </div>\n                    \n                  </div>\n\n               <br class="hidden-xs">\n\n               <div class="row">\n                    <div class="col-sm-2 hidden-xs">\n                         <div class="input-group input-group-sm">\n                              <span class="input-group-addon btn-primary"><i class="fa fa-phone"></i> Call as a user</span>\n                              <select class="form-control" id="call_as_user_filter">\n                                  <option value="YES" ';
if(get_url_parameter("call_as_user") == "true"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>YES</option>\n                                  <option value="NO" ';
if(get_url_parameter("call_as_user") =="false"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>NO</option>\n                                  <option value="-1" ';
if(get_url_parameter("call_as_user") == null){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>Both</option>\n                              </select>\n                         </div>\n                    </div>\n\n                    <div class="col-sm-2 hidden-xs">      \n                         <div class="input-group input-group-sm">\n                              <span class="input-group-addon btn-primary"><i class="fa fa-exclamation-circle"></i> Status</span>\n                              <select class="form-control" id="status_filter">\n                                   <option value="-1" selected> All </option>\n                                    ';
 _.each(collections.status,function(i,stat,j){;
__p += '\n                                      ';
if(i<4 || i==11){;
__p += '\n                                        <option value="' +
((__t = (i)) == null ? '' : __t) +
'" ';
if(get_url_parameter("status")==i){;
__p +=
((__t = ("selected")) == null ? '' : __t);
 } ;
__p += '>' +
((__t = (stat)) == null ? '' : __t) +
'</option>\n                                      ';
 } ;
__p += '\n                                    ';
});;
__p += '\n                              </select>\n                         </div>\n                    </div>\n                    <div class="col-sm-2 hidden-xs">\n                         <div class="input-group input-group-sm">\n                              <span class="input-group-addon btn-primary"><i class="fa fa-picture-o"></i> Logo </span>\n                              <select class="form-control" id="has_logo_filter">\n                                  <option value="YES" ';
if(get_url_parameter("has_logo") == "true"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>YES</option>\n                                  <option value="NO" ';
if(get_url_parameter("has_logo") =="false"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>NO</option>\n                                  <option value="-1" ';
if(get_url_parameter("has_logo") == null){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>Both</option>\n                              </select>\n                         </div>\n                    </div>\n                    <div class="col-sm-2 hidden-xs">\n                         <div class="input-group input-group-sm">\n                              <span class="input-group-addon btn-primary"><i class="fa fa-gavel"></i> Push Changes</span>\n                              <select class="form-control" id="has_changes_filter">\n                                  <option value="YES" ';
if(get_url_parameter("has_changes") == "true"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>YES</option>\n                                  <option value="NO" ';
if(get_url_parameter("has_changes") =="false"){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>NO</option>\n                                  <option value="-1" ';
if(get_url_parameter("has_changes") == null){;
__p +=
((__t = ("selected")) == null ? '' : __t);
};
__p += '>Both</option>\n                              </select>\n                         </div>\n                    </div>\n\n                    <div class="col-sm-1">\n                      <button class="btn btn-primary btn-sm" id="clear_filters"><i class="fa fa-times"></i> Filters</button>\n                    </div>\n                    <div class="col-sm-1 dropdown">\n                       <button class="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"><i class="fa fa-plus-square"></i>\n                            Add\n                            <span class="caret"></span>\n                       </button>\n                       <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\n                           <li role="presentation"><a role="menuitem" tabindex="-1" href="#restaurants/new"><i class="fa fa-plus-square"></i> New Restaurant</a></li>\n                           <li role="presentation"><a role="menuitem" tabindex="-1" href="#restaurants/new/virtual"><i class="fa fa-plus-square"></i> New Virtual Restaurant</a></li>\n                       </ul>\n                    </div>\n                    <div class="col-sm-1 dropdown">\n                         <button class="btn btn-info btn-sm dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"><i class="fa fa-file-text"></i>\n                              View\n                              <span class="caret"></span>\n                         </button>\n                         <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">\n                             <li role="presentation"><a role="menuitem" tabindex="-1" href="#restaurants/deleted"><i class="fa fa-file-text"></i> Deleted Restaurants </a></li>\n                             <li role="presentation"><a role="menuitem" tabindex="-1" href="#restaurants/invisible"><i class="fa fa-file-text"></i> Invisible Restaurants</a></li>\n                             <li role="presentation"><a role="menuitem" tabindex="-1" href="#restaurants/virtual"><i class="fa fa-file-text"></i> Virtual Restaurants </a></li>\n                             <li role="presentation"><a role="menuitem" tabindex="-1" href="#promotions"><i class="fa fa-file-text"></i> Promotions </a></li>\n                             <li role="presentation"><a role="menuitem" tabindex="-1" href="#restaurants/tags"><i class="fa fa-pencil-square-o"></i></i> Item Tags </a></li>\n                            <li role="presentation"><a role="menuitem" tabindex="-1" href="#dish_type_tags"><i class="fa fa-pencil-square-o"></i> Dish Type Tags</a></li>\n                         </ul>\n                    </div>\n\n                    <div class="col-sm-1">\n                      <button class="btn btn-info btn-sm" id="dump"><i class="fa fa-download"></i> Dump</button>\n                    </div>\n                    <div id="dump_content" class="col-sm-5 hidden">\n                       <h3 class="text-center" style="margin-top:10px;margin-bottom:10px;">\n                            <i class="fa fa-file-text-o"></i> Dump\n                       </h3>\n                       <hr/>\n                       <div class="row">\n                            <div class="col-sm-8 text-center">\n                                 <p>Address:</p> \n                            </div>\n                             <div class="col-sm-4">\n                                 <input type="checkbox" id="address" checked>\n                             </div>\n                       </div>\n                       <div class="row">\n                            <div class="col-sm-8 text-center">\n                                 <p>Contact Details:</p> \n                            </div>\n                       <div class="col-sm-4">\n                            <input type="checkbox" id="contact_info" checked>\n                       </div>\n                       </div>\n                       <div class="row">\n                            <div class="col-sm-8 text-center">\n                                 <p>Payment Details:</p> \n                            </div>\n                            <div class="col-sm-4">\n                                 <input type="checkbox" id="payment_details" checked>\n                            </div>\n                       </div>\n                       <div class="row">\n                            <div class="col-sm-8 text-center">\n                                 <p>Other Info:</p> \n                            </div>\n                            <div class="col-sm-4">\n                                 <input type="checkbox" id="other_info" checked>\n                            </div>\n                       </div>\n                       <hr/>\n                       <div class="text-center">\n                            <button class="btn btn-primary btn-sm dump_request" id="dump_request"> <i class="fa fa-download"></i> Download</button>\n                            <button class="btn btn-default btn-sm" id="close_dump"><i class="fa fa-times"></i> Close </button>\n                       </div>\n                    </div>\n               </div>    \n          </div>             \n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <div class="col-xs-12">\n    <section class="panel">\n      <div class="panel-body">\n        <div class="row">\n          <div class="col-xs-12 text-center">\n            <p class="lead stats">\n                  <span> Total: <span class=""><strong>' +
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
'</strong></span></span>\n            </p>\n              <ul class="pagination pagination-sm">\n                ';
 var page_num = get_url_parameter("page")? get_url_parameter("page"):1;
                  var start_page = (page_num-7 > 0)? page_num -7 : 1;
                  var total_pages = parseInt(meta.total/20) + 1;
                  var max_pages = _.min([start_page + 15, total_pages]);
                  ;
__p += '\n\n                <li><a id="1" class="page_number">First</a></li>\n                <li><a id="previous" class="page_number">«</a></li>\n                ';

                  for(j=start_page;j<=max_pages;j++){ ;
__p += '\n                    <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>\n                ';
 } ;
__p += '\n\n                <li><a id="next" class="page_number">»</a></li>\n                <li><a id="' +
((__t = (total_pages )) == null ? '' : __t) +
'" class="page_number">Last</a></li>\n                <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\n                <input type="hidden" value="' +
((__t = ( total_pages )) == null ? '' : __t) +
'" id="total_page_num" >\n              </ul>\n              <h5> 20 Restaurants per page </h5>\n            </div>\n          </div>\n          <hr/>\n\n          <div class="row">\n            <div class="col-xs-12">\n              <table class="table table-hover">\n                <thead>\n                    <tr>\n                        <th class=""> # </th>\n                        <th class="hidden-xs"></th>\n                        <th>Name</th>\n                        <th class="hidden-xs">Last updated</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                        <th class="hidden-xs">Menu</th>\n                        <th class="hidden-xs"><a class="hover-link" href="#restaurant/bulk_update"><i class="fa fa-check-square"></i> <span >Bulk update</span></a> </th>\n                    </tr>\n                </thead>\n                <tbody class="searchable">\n                  ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '\n                    <tr>\n                      <td class="">\n                        <p class="text-info">\n                          ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\n                        </p>\n                      </td>\n                      <td class="hidden-xs">\n                        ';
if(restaurant.get("logo")){;
__p += '\n                          <span class="thumbnail_loader "><i class="fa fa-2x fa-circle-o-notch fa-spin"></i></span>\n                          <img src="' +
((__t = (restaurant.get("logo")+"?"+ new Date().H.getTime())) == null ? '' : __t) +
'" width="60" class="logo_thumbnail hidden"/>\n                        ';
};
__p += '\n                      </td>\n                      <td>\n                          <a href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile">';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,40) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\n                          <p class="text-muted">\n                            <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\n                          </p>\n                      </td>\n                      <td class="hidden-xs"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\n\n                      <td><span  class= \'js-status\' data-toggle=\'popover\' title=\'Reason\' data-content="' +
((__t = (restaurant.get('inactive_reason'))) == null ? '' : __t) +
'" >' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</span></td>     \n                      <td>                                        \n                        <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile"><i class="fa fa-edit"></i> <span class="hidden-xs">Edit</span></a> \n                        <a class="btn btn-primary btn-sm hidden-xs" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items"><i class="fa fa-list"></i> Menu</a>\n                        <a class="btn btn-primary btn-sm hidden-xs" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices"><i class="fa fa-check-square-o"></i> Choices</a>\n                        <!-- <a class="btn btn-primary btn-sm hidden-xs" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/choices"><i class="fa fa-check-square-o"></i> Choices BETA</a>\n                        <a class="btn btn-primary btn-sm hidden-xs" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/items"><i class="fa fa-book"></i> Items BETA</a> -->\n                        <div class="btn-group hidden-xs">\n                            <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button"> <span class="caret"></span></button>\n                            <ul role="menu" class="dropdown-menu">\n                                ';
if(restaurant.get("status")){ ;
__p += '\n                                  <li class="' +
((__t = ( (restaurant.get('has_menu_categories') ? '_disabled' : ''))) == null ? '' : __t) +
'" id="copy_restaurant">\n                                    <a class="copy_anchor" href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/copy"><i class="fa fa-copy"></i> Copy</a>\n                                    <input type="hidden" class="copy_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                                  </li>\n                                  <li id="copy_timings">\n                                    <a class="copy_timings_anchor"><i class="fa fa-clock-o"></i> Copy Timings</a>\n                                    <input type="hidden" class="copy_timings_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                                  </li>\n                                  <li id="menu_dump">\n                                    <a class="menu_dump_anchor"><i class="fa fa-download"></i> Download Menu</a>\n                                    <input type="hidden" class="menu_dump_id" value="' +
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
__p += '\n                                <li id="get_logs">\n\n                                    <a  href="#restaurants/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/logs" data-restaurant-id="' +
((__t = (restaurant.get('id'))) == null ? '' : __t) +
'"><i class="fa fa-file"></i> Logs </a>\n                                </li>\n                                <!-- <li id="get_menu">\n                                    <a  href="#menu_timeline/' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'/dish_type_tags" data-restaurant-id="' +
((__t = (restaurant.get('id'))) == null ? '' : __t) +
'"><i class="fa fa-file"></i> Menu </a>-->\n\n                                </li>\n\n                                <li class="' +
((__t = ( (restaurant.get('has_items') ? '_disabled' : ''))) == null ? '' : __t) +
'">\n                                    <a  href="' +
((__t = ( get_menu_timeline_url(restaurant.get('id'),restaurant.get('menu_progress_bar')) )) == null ? '' : __t) +
'" data-restaurant-id="' +
((__t = (restaurant.get('id'))) == null ? '' : __t) +
'"><i class="fa fa-file"></i> Menu Timeline </a>\n                                </li>\n\n                            </ul>\n                        </div>\n                      </td>\n                      <td class="hidden-xs">\n                        ';
 if(restaurant.get("menu_stash")){ ;
__p += '\n                          <button type="button" class="btn btn-warning btn-sm push_menu"> Push Changes </button>\n                          <input type="hidden" class="push_menu_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\n                        ';
 } ;
__p += '\n                      </td>\n                      <td class="hidden-xs">\n                        <a class="btn btn-info btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/update_status"><i class="fa fa-refresh"></i> Update status</a>\n                      </td>\n                    </tr>\n                  ';
 }); ;
__p += '\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <hr/>\n\n      </div>\n    </div>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/search_delivery_areas.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n  <div class="col-xs-12">\n    <form class="form-inline">\n      <div class="form-group">\n        <div class="input-group">\n          <input type="text" name=\'search\' required class="form-control" id="searchText" placeholder="Enter Form-id">\n        </div>\n      </div>\n      <div class="form-group">\n        <input type="number" class="form-control" name=\'limit\'  id="limitText" placeholder="Limit" min="1">\n      </div>\n    \n      <button id=\'btnSearch\' class="btn btn-success">Search</button>\n    </form>\n  </div>\n</div>\n<div class="clearfix"></div>\n  <br>      \n<div class="row">\n  <div class="col-xs-12">\n    <div id="map-canvas"></div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/settings.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n\t<div class="col-xs-8 col-xs-offset-2">\r\n\t\t<div class="panel">\r\n\t    <div class="panel-body">\r\n\t\t\t\t<div class="col-md-12">\r\n\t\t\t\t\t<ul class="nav nav-pills nav-justified" role="tablist" id="myTab">\r\n\t\t\t\t\t  <li class="active" role="" id="global_settings"><a href="#global_settings_panel" role="tab" data-toggle="tab">Global Settings</a></li>\r\n\t\t\t\t\t  <li role="presentation" id="android_settings"><a href="#android_settings_panel" role="tab" data-toggle="tab">Android Settings</a></li>\r\n\t\t\t\t\t  <li role="presentation" id="ios_settings"><a href="#ios_settings_panel" role="tab" data-toggle="tab">iOS settings</a></li>\r\n\t\t\t\t\t  <li role="presentation" id="constant_variables"><a href="#constant_variables_panel" role="tab" data-toggle="tab">Constant Variables</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class="tab-content">\r\n\t\t\t\t\t\t<div role="tabpanel" class="tab-pane fade in active" id="global_settings_panel"></div>\r\n\t\t\t\t\t\t<div role="tabpanel" class="tab-pane fade in" id="android_settings_panel"></div>\r\n\t\t\t\t\t\t<div role="tabpanel" class="tab-pane fade in" id="ios_settings_panel"></div>\r\n\t\t\t\t\t\t<div role="tabpanel" class="tab-pane fade in" id="constant_variables_panel"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/spell_check.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation" class="row" >\n</div>\n\n\n<div class="row">\n  <div class="col-lg-10 col-lg-offset-1">\n    <section class="panel">\n      <div class="panel-body">                        \n        <div class="row">    \n          <div class="col-lg-9">\n            <h2>Spell Check</h2>\n          </div>\n          <div class="col-lg-3"> \n            <div class="col-lg-12"> \n              <a class="btn btn-primary pull-right next" href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/dish_type_tags"><i class="fa fa-sign-out"></i> Next</a>   \n            </div>\n          </div>    \n        </div>                \n      </div>\n    \t<div class="row">\n    \t\t<div class="col-lg-12">\n    \t\t\t<table class="table  table-hover general-table">\n    \t\t\t<colgroup width="250"><colgroup width="150"><colgroup width="400"><colgroup width="150">\n  \t\t\t    <thead>\n  \t\t\t      <tr>\n    \t\t\t\t\t\t<th>Name</th>\n    \t\t\t\t\t\t<th>Mistakes</th>\n    \t\t\t\t\t\t<th>Suggestions</th>\n    \t\t\t\t\t\t<th>Add To Dictionary</th>\n\t\t\t      \t</tr>\n  \t\t\t  \t</thead>\n  \t\t\t  \t<tbody>\n  \t\t\t  \t\t';
 _.each(dictionary,function(data,i){ ;
__p += '\n  \t\t\t  \t\t<tr>\n    \t\t\t\t\t\t<td>\n  \t\t\t\t\t\t\t\t';
 if(data.type=="MenuCategory") {;
__p += '\n  \t\t\t\t\t\t\t\t<button class="btn btn-info" type="button">M</button>\n  \t\t\t\t\t\t\t\t';
 } else { ;
__p += '\n  \t\t\t\t\t\t\t\t<button class="btn btn-info" type="button">I</button>\n  \t\t\t\t\t\t\t\t';
 } ;
__p += '\n  \t\t\t\t\t\t\t\t' +
((__t = ( data.name )) == null ? '' : __t) +
'\n    \t\t\t\t\t\t</td>\n    \t\t\t\t\t\t<td><b>';
 if(data.field == "is_description"){ ;
__p += '\n                <button class="btn btn-success" type="button">D</button>\n                ';
 } ;
__p += '\n                ' +
((__t = ( data.word )) == null ? '' : __t) +
'</b></td>\n    \t\t\t\t\t\t<td>\n    \t\t\t\t\t\t\t';
if(data.suggestions.length) {;
__p += '\n    \t\t\t\t\t            ';
 _.each(data.suggestions,function(suggestion){ ;
__p += '\n    \t\t\t\t\t              <a class=\'js_suggestion btn btn-default btn-sm\' data-word="' +
((__t = (suggestion)) == null ? '' : __t) +
'" style="margin-bottom:1px;"> \n    \t\t\t\t\t                ' +
((__t = ( suggestion )) == null ? '' : __t) +
'\n    \t\t\t\t\t              </a>\n    \t\t\t\t\t            ';
 }) ;
__p += '\n    \t\t\t\t\t            <br/>\n    \t\t\t\t\t          ';
};
__p += '\n    \t\t\t\t\t          <input type="text" class="suggestion_text" style="form-control input-sm"><br><br>\n\n    \t\t\t\t\t          <button name="btn" id="' +
((__t = (data.id)) == null ? '' : __t) +
'" class=\'update_word btn btn-primary btn-sm\' data-mistake-type="' +
((__t = ( data.type)) == null ? '' : __t) +
'" data-restaurant-id="' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'"   data-mistake-id="' +
((__t = ( data.id)) == null ? '' : __t) +
'" data-mistake-word="' +
((__t = ( data.word )) == null ? '' : __t) +
'" data-field-name="' +
((__t = ( data.field )) == null ? '' : __t) +
'">Update Word</button><br>\n  \t\t\t\t\t\t  </td>\n    \t\t\t\t\t\t<td>\t\t\t\t\t\t\t  \t\n    \t\t\t\t\t\t\t<button class="btn btn-success" id="add_dictionary_word" title="Add to Dictionary" type="button" data-mistake-id="' +
((__t = ( data.id)) == null ? '' : __t) +
'" data-mistake-word="' +
((__t = ( data.word )) == null ? '' : __t) +
'">Add</button>\n    \t\t\t\t\t\t</td>\n  \t\t\t  \t\t</tr>\n  \t\t\t  \t\t';
 }) ;
__p += '\n    \t\t\t  </tbody>\n    \t\t\t</table>\n    \t\t</div>\n    \t</div>\n    </section>\n  </div>\n</div>\n\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/status_logs.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="panel">\r\n    <div class="panel-body"> \r\n    \t<ul class="nav nav-pills" role="tablist" id="myTab">\r\n\t\t\t  <li class="active"><a href="#recent" role="tab">Recent</a></li>\r\n\t\t\t  <li><a href="#history" role="tab">Complete Logs</a></li>\t\t\t  \r\n\t\t\t</ul>     \r\n\t\t\t<hr/> \r\n\t\t\t<div class="tab-content">\r\n\t\t\t  <div class="tab-pane fade in active" id="recent">\t\t\t\t\t  \t\r\n\t\t\t\t\t';
 _.each(status_logs, function(status_log, i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(status_log.get("scheduled_update")){;
__p += '\r\n\t\t\t\t\t\t\t';
 if(status_log.get("scheduled_update").status == 1){;
__p += '\r\n\t\t\t\t\t\t\t\t<div class="activity-desk scheduled">\r\n\t\t\t        \t\t<span class="alert-icon pull-left bg-terques"><i class="fa fa-calendar"></i></span>\t\t\t\t<span class="label label-primary pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\t\t\t        \t\t\r\n\t                <h3 class="terques">\r\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\r\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\r\n\t                \t';
 }else{ ;
__p += '\r\n\t                \t\tScheduled Reminder!\r\n\t                \t';
 } ;
__p += '\r\n\t                \t<span class="small"> | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
'</span> </h3><hr class="terques"/>\r\n\t                <h2 class="terques"><i class="fa fa-clock-o"></i> ' +
((__t = ( timeConverter(status_log.get("scheduled_update").scheduled_at) )) == null ? '' : __t) +
' | <span class="small"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span></span></h2>\r\n\t                <button type="button" class="btn btn-danger btn-xs pull-right js_cancel_schedule" data-id="' +
((__t = (status_log.get("scheduled_update").id)) == null ? '' : __t) +
'"><i class="fa fa-times"></i> Cancel</button> \t      \r\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n\t\t\t\t         <input type="hidden" value="' +
((__t = (status_log.get("scheduled_update").id)) == null ? '' : __t) +
'" id="schedule_id"> \r\n\t              </div>\r\n\t\t\t        \t<hr/>\r\n\t\t\t        ';
 } ;
__p += '  \r\n\t\t     \t\t';
 } ;
__p += '\r\n\t\t   \t\t';
 }); ;
__p += '\r\n\t\t   \t\t';
 _.each(_.filter(status_logs, function(status_log,i){ if(i<2) return status_log; }), function(status_log, i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(status_log.get("scheduled_update")){;
__p += '\r\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 2 || status_log.get("scheduled_update").status == 4){ ;
__p += '\r\n\t\t\t        \t<div class="activity-desk">\r\n\t\t\t        \t\t<span class="alert-icon pull-left orange"><i class="fa fa-times"></i></span>\t\r\n\t\t\t\t\t\t\t\t\t<span class="label label-danger pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\r\n\t                <h2 class="red"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n\t                <p>\r\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\r\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\r\n\t                \t';
 }else{ ;
__p += '\r\n\t                \t\tScheduled Reminder!\r\n\t                \t';
 } ;
__p += ' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' \r\n\t                </p>\r\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n\t              </div>\t\t\t        \t\r\n\t\t\t        ';
 } ;
__p += '\t\r\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 3){ ;
__p += '\r\n\t\t\t        \t<div class="activity-desk">\r\n\t\t\t        \t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\r\n\t\t\t\t\t\t\t\t\t<span class="label label-success pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\r\n\t                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n\t                <p>\r\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\r\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\r\n\t                \t';
 }else{ ;
__p += '\r\n\t                \t\tScheduled Reminder!\r\n\t                \t';
 } ;
__p += ' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' \r\n\t                </p>\r\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n\t              </div>\t\t\t        \t\r\n\t\t\t        ';
 } ;
__p += '\t\t        \r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\t\t\t\t\t\t';
 if (status_log.get("previous_status") != status_log.get("new_status") && status_log.get("new_status")){;
__p += '\r\n\t\t\t\t\t\t\t<div class="activity-desk">\r\n\t\t\t\t\t\t\t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\r\n\t\t\t\t\t\t\t\t<span class="label label-success pull-right">COMPLETED</span>\r\n                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n                <p>' +
((__t = (get_status(status_log.get("previous_status")))) == null ? '' : __t) +
' <i class=\'fa fa-arrow-right\'></i> ' +
((__t = (get_status(status_log.get("new_status")))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\r\n                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n              </div>\r\n\t\t\t\t\t\t';
 } ;
__p += '\t\t\t\r\n\t\t\t\t\t';
 }); ;
__p += '\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="tab-pane fade" id="history">\r\n\t\t\t\t\t';
 _.each(status_logs, function(status_log, i) { ;
__p += '\r\n\t\t\t\t\t\t';
 if(status_log.get("scheduled_update")){;
__p += '\t\t\t\t\t\t\t\r\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 2 || status_log.get("scheduled_update").status == 4){ ;
__p += '\r\n\t\t\t        \t<div class="activity-desk">\r\n\t\t\t        \t\t<span class="alert-icon pull-left orange"><i class="fa fa-times"></i></span>\t\r\n\t\t\t\t\t\t\t\t\t<span class="label label-danger pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\r\n\t                <h2 class="red"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n\t                <p>\r\n\t                \t';
 if(get_status(status_log.get("scheduled_update").new_status)){ ;
__p += '\r\n\t                \t\tScheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
'\r\n\t                \t';
 }else{ ;
__p += '\r\n\t                \t\tScheduled Reminder!\r\n\t                \t';
 } ;
__p += ' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
'\r\n\t                </p>\r\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n\t              </div>\t\t\t\t        \t\r\n\t\t\t        ';
 } ;
__p += '\r\n\t\t\t        ';
 if(status_log.get("scheduled_update").status == 3){ ;
__p += '\r\n\t\t\t        \t<div class="activity-desk">\r\n\t\t\t        \t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\r\n\t\t\t\t\t\t\t\t\t<span class="label label-success pull-right">' +
((__t = (get_scheduled_status(status_log.get("scheduled_update").status))) == null ? '' : __t) +
'</span>\r\n\t                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n\t                <p>Scheduled Status : ' +
((__t = (get_status(status_log.get("scheduled_update").new_status))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\r\n\t                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n\t              </div>\t\t\t        \t\r\n\t\t\t        ';
 } ;
__p += '\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\t\t\t\t\t\t';
 if (status_log.get("previous_status") != status_log.get("new_status") && status_log.get("new_status")){;
__p += '\r\n\t\t\t\t\t\t\t<div class="activity-desk">\r\n\t\t\t\t\t\t\t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\r\n\t\t\t\t\t\t\t\t<span class="label label-success pull-right">COMPLETED</span>\r\n                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n                <p>' +
((__t = (get_status(status_log.get("previous_status")))) == null ? '' : __t) +
' <i class=\'fa fa-arrow-right\'></i> ' +
((__t = (get_status(status_log.get("new_status")))) == null ? '' : __t) +
' | <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\r\n                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n              </div>\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\t\t\t\t\t\t';
 if (status_log.get("new_status") == null) {;
__p += '\r\n\t\t\t\t\t\t\t<div class="activity-desk">\r\n\t\t\t\t\t\t\t\t<span class="alert-icon pull-left bg-green"><i class="fa fa-check"></i></span>\t\r\n\t\t\t\t\t\t\t\t<span class="label label-success pull-right">Comment</span>\r\n                <h2 class="purple"><span data-livestamp="' +
((__t = ( status_log.get("created_at") )) == null ? '' : __t) +
'"></span>| <span class="small">' +
((__t = ( timeConverter(status_log.get("created_at")) )) == null ? '' : __t) +
'</span></h2> \r\n                <i class="fa fa-user"></i> ' +
((__t = (status_log.get("user_name"))) == null ? '' : __t) +
' </p>\r\n                <p><i class="fa fa-comment"></i> ' +
((__t = ( status_log.get("comment") )) == null ? '' : __t) +
'</p>\r\n              </div>\r\n\t\t\t\t\t\t';
 } ;
__p += '\r\n\r\n\r\n\t\t   \t\t';
 }); ;
__p += '\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\t\t\r\n       \r\n    </div>\r\n  </div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/tags.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n<div class="row">\n  <div class="col-md-offset-2 col-md-4 col-lg-offset-2 col-lg-4">\n    <div class="input-group">\n      <input type="text" class="form-control"  autofocus="autofocus" placeholder="Enter Tag" required="true" id="newTag"  name="tag">\n      <div class="input-group-btn">\n        <select name="type" class="form-control"  id="tagType">\n          <option value="0" selected>Type</option>\n          ';
_.each(tag_type,function(item){;
__p += '\n          <option value="' +
((__t = (item.value)) == null ? '' : __t) +
'">' +
((__t = (item.tag_type)) == null ? '' : __t) +
'</option>\n          ';
});
__p += '\n        </select>\n        <button class="btn btn-success js-tag-add" type="button">Add Tag</button>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div class="row">\n     ';
_.each(tag_type,function(item){;
__p += '\n          <div class="col-lg-2 col-md-2"><h3>' +
((__t = (item.tag_type)) == null ? '' : __t) +
'</h3>\n             ';
var tag_model = collection.where({tag_type:item.value});
__p += '\n             <ul>\n               ';
_.each(tag_model,function(model){;
__p += '\n               <li>' +
((__t = (model.get('tag'))) == null ? '' : __t) +
'\n                 <i data-id="' +
((__t = (model.get('id'))) == null ? '' : __t) +
'" class="fa fa-pencil-square-o js-tag-edit"></i>\n                 <i data-id="' +
((__t = (model.get('id'))) == null ? '' : __t) +
'" class="fa fa-times  js-tag-delete"></i>\n               </li>\n               ';
});
__p += '\n             </ul>\n          </div><!-- col-lg-2 -->\n    ';
});
__p += '\n</div>\n\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/timing.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation">\n</div>\n\n<div class="row">\n  <!-- form component -->\n  <div class="col-xs-12">\n\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section> \n      <h2 class="to_center">Timings</h2>\n      <hr>\n      <div class="row">\n        <form accept-charset="UTF-8" class="form-inline" id="timing_form" method="post" enctype="multipart/form-data">\n\n          <input type="hidden" value="' +
((__t = ( restaurant.get('id') )) == null ? '' : __t) +
'" name="id" id="restaurant_id">\n          <input type="hidden" name="timing_count" value="' +
((__t = ( timings.length )) == null ? '' : __t) +
'">\n          <table class="table  table-hover general-table" id="timing-table">\n            <thead>\n              <tr>\n                <th>\n                  Name\n                </th>\n                <th>\n                  Type\n                </th>\n                <th>\n                  Start Time\n                </th>\n                <th>\n                  End Time\n                </th>\n                <th>\n                  Action\n                </th>\n              </tr>\n            </thead>\n\n          </hr>\n\n\n          ';
 _.each(timings, function(timing, i) { ;
__p += '\n\n            ' +
((__t = ( partial("partials_timing", {
              i: i,
              timing: timing
            }) )) == null ? '' : __t) +
'\n\n          ';
 }) ;
__p += '\n        </table>\n\n          <button type="button" class="btn btn-info btn-sm add_timing">Add Timing</button>\n\n          <div class="submit_div">\n            <input type="submit" class="btn btn-primary" value="Save Changes" id="save_changes_timings">\n          </div>\n\n        </form>\n      </div>\n      </div>\n    </div><!-- end well -->\n  </div>\n\n</div><!-- end row -->';

}
return __p
};

this["JST"]["app/scripts/templates/update_status.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n  <div class="col-sm-12">\r\n    <div class="panel">\r\n      <div class="panel-body">\r\n        <span class="text-info hidden-xs">#' +
((__t = (restaurant.get("form_id"))) == null ? '' : __t) +
'</span>\r\n        ' +
((__t = (get_status_span(restaurant.get("status")))) == null ? '' : __t) +
'\r\n        <span>&nbsp;&nbsp;</span>\r\n        <span class="lead"> ' +
((__t = (restaurant.get("name"))) == null ? '' : __t) +
'</span>\r\n        <span>&nbsp;&nbsp;</span>\r\n        <span> <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'</span>\r\n        <span>&nbsp;&nbsp;<input type="hidden" id="current_status" value="' +
((__t = (restaurant.get("status"))) == null ? '' : __t) +
'"></span>\r\n        <span>\r\n          <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/profile"><i class="fa fa-edit"></i> Edit</a> \r\n          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" target="_blank"><i class="fa fa-list"></i> Menu</a>\r\n          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>\r\n        </span>\r\n        <span class="pull-right">\r\n          <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="row">\r\n  <div class="col-sm-6">\r\n  ' +
((__t = ( partial("partials_update_status",{
    restaurant_id: restaurant.get('id')
  }) )) == null ? '' : __t) +
'\r\n</div>\r\n  <div class="col-sm-6" id="status_logs">                                                            \r\n      \r\n  </div>\r\n</div>\r\n\r\n<div class="modal fade" style="width: 500px; height: 300px; margin-left: 400px;" id="overrideModal" role="dialog" aria-labelledby="overrideModalLabel" aria-hidden="true">\r\n  <div class="modal-header">\r\n    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n    <h4>A Schdeuled Update already exists!</h4>\r\n  </div>\r\n  <div class="modal-body" style="background-color: rgb(250, 250, 250);">\r\n    <h5 id="modal_content">Do you want to overwrite it?</h5>\r\n    <hr/>\r\n    <div>\r\n      <input class="restaurant_id" type="hidden" value="">\r\n      <button class="btn btn-success btn-sm override" data-override="true">Override</button>\r\n      <button class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n            ';

}
return __p
};

this["JST"]["app/scripts/templates/virtual_restaurants.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n  <div class="col-lg-12">\r\n    <section class="panel">\r\n        <div class="panel-body"> \r\n          <section id="alerts"></section>                           \r\n            <div class="row">             \r\n                <div class="col-lg-2">\r\n                    <div class="input-group hide">\r\n                        <span class="input-group-addon btn-primary btn-sm"><i class="fa fa-search"></i></span>\r\n                        <input type="text" id="filter" class="form-control input-sm" placeholder="type here and hit ENTER to search" autocomplete="off" value="' +
((__t = (meta.search)) == null ? '' : __t) +
'">\r\n                    </div>\r\n                    <h4> Virtual Restaurants </h4>\r\n                </div>\r\n                <div class="col-lg-4">\r\n                    <a class="btn btn-success btn-sm" href="#restaurants/new/virtual"><i class="fa fa-plus-square"></i> Add a new Virtual Restaurant</a>\r\n                </div>\r\n                <span class="pull-right">\r\n                  <a class="btn btn-primary " href="#restaurants"><i class="fa fa-cutlery"></i> Restaurants</a>&nbsp;&nbsp;\r\n                </span>                                \r\n            </div>\r\n            <hr/>\r\n            <div class="row">               \r\n                <p class="lead text-center"><span> Total: ' +
((__t = (meta.total )) == null ? '' : __t) +
' </p>\r\n            </div>&nbsp;\r\n            <div class="row">\r\n              <div class="col-md-12 text-center">\r\n                <ul class="pagination pagination-sm">\r\n                  <li><a id="1" class="page_number">First</a></li>\r\n                  <li><a id="previous" class="page_number">«</a></li>\r\n                  ';
 var page_num = meta.page?meta.page:1;
                    for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                    <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \r\n                  ';
 } ;
__p += ' \r\n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n                  <li><a id="next" class="page_number">»</a></li>\r\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n                </ul>\r\n                <h5> 20 Restaurants per page </h5>\r\n              </div>\r\n            </div>\r\n            <hr/>\r\n            <div class="row">\r\n              <div class="col-lg-12">\r\n                <table class="table  table-hover general-table">\r\n                  <thead>\r\n                      <tr>\r\n                          <th> # </th>\r\n                          <th class="hidden-xs"></th>\r\n                          <th>Name</th>\r\n                          <th class="hidden-phone">Last updated</th>\r\n                          <th>Status</th>\r\n                          <th>Actions</th>\r\n                          <th class="hidden-xs">Menu</th> \r\n                          <th></th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody class="searchable">\r\n                    ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \r\n                      <tr data-locality="' +
((__t = (restaurant.get("locality_id"))) == null ? '' : __t) +
'" data-status="' +
((__t = ( get_status(restaurant.get("status")) )) == null ? '' : __t) +
'" data-call="' +
((__t = (restaurant.get("call_as_user")? 'YES':'NO' )) == null ? '' : __t) +
'"> \r\n                        <td>\r\n                          <p class="text-info">\r\n                            ' +
((__t = ( restaurant.get("form_id") )) == null ? '' : __t) +
'\r\n                          </p>\r\n                        </td>\r\n                        <td class="hidden-xs">\r\n                        ';
if(restaurant.get("logo")){;
__p += '\r\n                          <span class="thumbnail_loader "><i class="fa fa-2x fa-circle-o-notch fa-spin"></i></span>\r\n                          <img src="' +
((__t = (restaurant.get("logo")+"?"+ new Date().H.getTime())) == null ? '' : __t) +
'" width="60" class="logo_thumbnail hidden"/>\r\n                        ';
};
__p += '\r\n                        </td>\r\n                        <td>\r\n                            <a>';
 if (restaurant.get("name") != null) { ;
__p +=
((__t = ( restaurant.get("name").substring(0,25) )) == null ? '' : __t);
 } ;
__p += '</a><br/>\r\n                            <p class="text-muted">\r\n                              <i class="fa fa-map-marker" style="color:#fa8564"></i> ' +
((__t = (get_locality(restaurant.get("locality_id")))) == null ? '' : __t) +
'\r\n                            </p>                                   \r\n                        </td>\r\n                        <td class="hidden-phone"><span data-livestamp="' +
((__t = ( restaurant.get("updated_at") )) == null ? '' : __t) +
'"></span></td>\r\n                        <td>' +
((__t = ( get_status_span(restaurant.get("status")) )) == null ? '' : __t) +
'</td>     \r\n                        <td>                                        \r\n                          <a class="btn btn-primary btn-sm" href="#restaurants/' +
((__t = ( restaurant.get("id") )) == null ? '' : __t) +
'/profile" ><i class="fa fa-edit"></i> Edit</a> \r\n                          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_items" target="_blank"><i class="fa fa-list"></i> Menu</a>\r\n                          <a class="btn btn-primary btn-sm" href="/restaurant/crm/restaurants/' +
((__t = ( restaurant.id )) == null ? '' : __t) +
'/menu_choices" target="_blank"><i class="fa fa-check-square-o"></i> Choices</a>\r\n                          <div class="btn-group">\r\n                              <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle btn-sm" type="button" > <span class="caret"></span></button>\r\n                              <ul role="menu" class="dropdown-menu">\r\n                                <li id="menu_dump">\r\n                                  <a class="menu_dump_anchor"><i class="fa fa-download"></i> Download Menu</a>\r\n                                  <input type="hidden" class="menu_dump_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n                                </li>                          \r\n                              </ul>\r\n                          </div>                                        \r\n                        </td>\r\n                        <td class="hidden-xs">\r\n                          ';
 if(restaurant.get("menu_stash")){ ;
__p += '\r\n                            <button type="button" class="btn btn-warning btn-sm push_menu"> Push Changes </button>\r\n                            <input type="hidden" class="push_menu_id" value="' +
((__t = (restaurant.get("id"))) == null ? '' : __t) +
'">\r\n                          ';
 } ;
__p += '\r\n                        </td>\r\n                      </tr>\r\n                    ';
 }); ;
__p += '                                                 \r\n                  </tbody>\r\n                </table>                \r\n              </div>\r\n            </div>\r\n            <hr/>\r\n            <div class="row">\r\n              <div class="col-md-12 text-center">\r\n                <ul class="pagination pagination-sm">\r\n                  <li><a id="1" class="page_number">First</a></li>\r\n                  <li><a id="previous" class="page_number">«</a></li>\r\n                  ';
 var page_num = meta.page?meta.page:1;
                    for(i=1,j=1;i<=meta.total; i+=20,j++){ ;
__p += '\r\n                    <li ';
if(page_num==j){;
__p += 'class="active"';
};
__p += '><a class="page_number" id="' +
((__t = (j)) == null ? '' : __t) +
'">' +
((__t = (j)) == null ? '' : __t) +
'</a></li>  \r\n                  ';
 } ;
__p += ' \r\n                  ';
 if(meta.total==0){;
__p += '<li class="active"><a class="page_number" id="1">1</a></li>';
 } ;
__p += '                 \r\n                  <li><a id="next" class="page_number">»</a></li>\r\n                  <li><a id="' +
((__t = (j-1)) == null ? '' : __t) +
'" class="page_number">Last</a></li>\r\n                  <input type="hidden" value="' +
((__t = (page_num)) == null ? '' : __t) +
'" id="current_page_num" >\r\n                  <input type="hidden" value="' +
((__t = (j-1)) == null ? '' : __t) +
'" id="total_page_num" >\r\n                </ul>\r\n                <h5> 20 Restaurants per page </h5>\r\n              </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </section>\r\n  </div>\r\n</div>\r\n\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/menu_entry/choice_entry.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation"></div>\n<div class="row main_page">\n\t<div class="col-xs-12">\n\t\t<div class="panel">\n\t\t\t<div class="panel-body">\n\t\t\t\t<section id="alerts"></section>\n\t\t\t\t<h3 class="to_left">Choices for ' +
((__t = ( restaurant_name )) == null ? '' : __t) +
'</h3>\n\t\t\t\t<hr/>\n\t\t\t\t<input type="hidden" id="restaurant_id" value="' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'">\n\n\t\t\t\t<div class="listing_choices">\n          <div class="row">\n            <div class="col-xs-12">\n              <div class="row">\n                <div class="col-xs-3"><label>Sr. No</label></div>\n                <div class="col-xs-3">\n                  <label>Choice</label>\n                </div>\n                <div class="col-xs-3">\n                  <label>Actions</label>\n                </div>\n                <div class="col-xs-2">\n                <label>Options</label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <hr>\n\t\t\t\t\t<input type="hidden" id="last_choice_index" value="' +
((__t = ( (_.isEmpty(choices)) ? 0 : choices.length )) == null ? '' : __t) +
'">\n\n\t\t\t\t\t';
 $.each(choices, function (i, choice) { ;
__p += '\n\t\t\t\t\t\t' +
((__t = ( partial("partials_choice_entry", {
							id: choice.get('id'),
							sr_num: (i + 1),
							name: choice.get('name'),
							label: choice.get('label'),
							label_for_restaurant: choice.get('label_for_restaurant'),
							min: choice.get('min'),
							max: choice.get('max'),
							description: choice.get('description'),
							options: choice.get('options').models,
							defaults: choice.get('defaults'),
							i: i
						}) )) == null ? '' : __t) +
'\n\t\t\t\t\t';
 }) ;
__p += '\n\t\t\t\t</div>\n\n\t\t\t\t<div class="pull-right">\n          <div style="position: fixed; bottom: 300px; right: 50px;">\n\t\t\t\t\t\t<a class="btn btn-primary col-xs-12 btn-sm add_choice"><i class="fa fa-plus"></i></a>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<a class="btn btn-primary col-xs-12 btn-sm save"><i class="fa fa-floppy-o"></i></a>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<a class="btn btn-primary col-xs-12 label-sm total_choices"><badge id="total_choices">' +
((__t = ( (_.isEmpty(choices)) ? 0 : choices.length )) == null ? '' : __t) +
'</badge></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/menu_entry/item_entry.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="top_navigation"></div>\n<div class="row main_page">\n  <div class="col-xs-12">\n    <div class="tile">\n      <div class="panel">\n        <div class="panel-header">\n          <section id="alerts"></section>\n        </div>\n        <div class="panel-body">\n          <div class="row">\n            <h3 class="to_center">Items for ' +
((__t = ( restaurant_name )) == null ? '' : __t) +
'</h3>\n          </div>\n          <hr/>\n          <input type="hidden" id="restaurant_id" value="' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'">\n          <div class="row">\n            <div class="col-xs-4">\n              <!-- <ul>\n                <li>Ctrl + A : Add Item</li>\n                <li>Ctrl + S : Save</li>\n              </ul> -->\n            </div>\n            <div class="col-xs-4 to_center"><p>Click on items to edit...</p></div>\n            <div class="col-xs-4 to_center">\n              <a class="btn btn-primary btn-sm add_item"><i class="fa fa-plus"></i> Add Item</a>\n              <a class="btn btn-primary btn-sm save_items"><i class="fa fa-floppy-o"></i> Save</a>\n              <a class="btn btn-primary label-sm total_items"><badge id="total_items">' +
((__t = ( (_.isEmpty(items)) ? 0 : items.length )) == null ? '' : __t) +
'</badge></a>\n            </div>\n          </div>\n          <hr>\n          <div class="row">\n            <div class="col-xs-offset-1 col-xs-4">\n              <label>Item name | Description</label>\n            </div>\n            <div class="col-xs-offset-3 col-xs-4">\n              <label>Details</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n  </div>\n\n  <div class="listing_items">\n    <input type="hidden" id="item_count" value="' +
((__t = ( (_.isEmpty(items)) ? 0 : items.length )) == null ? '' : __t) +
'">\n    ';
 _.each(items, function (item, i) { ;
__p += '\n      <div id="listing_item_' +
((__t = ( i )) == null ? '' : __t) +
'">\n        ' +
((__t = ( partial('partials_item', {
          i: i,
          sr_num: (i + 1),
          id: item.get('id'),
          name: item.get('name'),
          description: item.get('description'),
          sizes: item.get('sizes'),
          choices_list: choices_list,
          timings_list: timings_list,
          map: map,
          is_item_price_variable: item.get('is_item_price_variable'),
          edit_mode: false,
        }) )) == null ? '' : __t) +
'\n      </div>\n    ';
 }) ;
__p += '\n  </div>\n\n  <div class="pull-right">\n    <div style="position: fixed; bottom: 300px; right: 834px;">\n      <a class="btn btn-primary col-xs-12 btn-sm add_item"><i class="fa fa-plus"></i></a>\n      <br>\n      <a class="btn btn-primary col-xs-12 btn-sm save_items"><i class="fa fa-floppy-o"></i></a>\n      <br>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/add_single_locality.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- <div class=\'row\'>\r\n\t\t<div class=\'col-xs-1\'><input title="Min Delivery Amt" id="min_delivery_amt"></input></div>\r\n\t\t<div class=\'col-xs-1\'><input title="Delivery Charges" id="delivery_charges"></input></div>\r\n\t\t<div class=\'col-xs-1\'><input title="Delivery Time Non Rush Hours (In minutes)" id="non_rush"></input></div>\r\n\t\t<div class=\'col-xs-1\'><input title="Delivery Time Rush hours (In minutes)" id="rush"></input>\r\n\t<button class="btn btn-success btn-sm" id="add-btn" data-polygon-id="' +
((__t = ( polygon_id )) == null ? '' : __t) +
'"></button></div>\r\n<!-- <div class=\'col-sm-3\'><</div>\r\n</div> -->\r\n<style>\r\n\t.params{\r\n\t\twidth:35px;\r\n\t}\r\n</style>\r\n<table style="width:170px;">\r\n<tr>\r\n\t<td>\r\n\t\t<td><input title="Min Delivery Amt" class="params" id="min_delivery_amt"></input></td>\r\n\t\t<td><input title="Delivery Charges" class="params" id="delivery_charges"></input></td>\r\n\t\t<td><input title="Delivery Time Non Rush Hours (In minutes)" class="params" id="non_rush"></input></td>\r\n\t\t<td><input title="Delivery Time Rush hours (In minutes)" class="params" id="rush"></input></td>\r\n\t\t<td><button class="btn btn-success" title="Add Delivery Area" id="add-btn" data-polygon-id="' +
((__t = ( polygon_id )) == null ? '' : __t) +
'"><i class="fa fa-plus"></i></button></td>\r\n\t</td>\r\n</tr>\r\n</table>\r\n<!-- <table style="width:175px;">\r\n\t<tr>\r\n\t\t\t<td><input title="Min Delivery Amt" id="min_delivery_amt"></input></td>\r\n\t\t\t<td>2</td>\r\n\t\t\t<td>3</td>\r\n\t\t\t<td>4</td>\r\n\t\t\t<td><span class="glyphicon glyphicon-plus"></span></td>\r\n\t</tr>\r\n</table> -->';

}
return __p
};

this["JST"]["app/scripts/templates/partials/additional_name_locality.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row" id="' +
((__t = ( markup_row )) == null ? '' : __t) +
'">\n  <div class="row">\n    <input type="hidden" name="' +
((__t = ( markup_to_delete )) == null ? '' : __t) +
'" id="' +
((__t = ( markup_to_delete )) == null ? '' : __t) +
'" value="false">\n    <input type="hidden" name="' +
((__t = ( markup_id )) == null ? '' : __t) +
'" id="' +
((__t = ( markup_id )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n    <div class="form-group">\n      <div class="col-xs-1 visible-xs"></div>\n      <label for="' +
((__t = ( markup_name )) == null ? '' : __t) +
'" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">Name</label>\n      <div class="col-md-5 col-sm-5 col-xs-5">\n        <input type="text" name="' +
((__t = ( markup_name )) == null ? '' : __t) +
'" class="form-control input-sm" id="' +
((__t = ( markup_id )) == null ? '' : __t) +
'" placeholder="' +
((__t = ( markup_placeholder )) == null ? '' : __t) +
'" value="' +
((__t = ( name )) == null ? '' : __t) +
'" autocomplete="off">\n      </div>\n      <div class="col-md-2 col-sm-2 col-xs-2">\n        <a class="btn btn-danger btn-sm additional_info_delete hidden-xs" data-info="' +
((__t = ( markup_delete )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-times"></i></a>\n      </div>\n    </div>\n  </div>\n  <div class="row">\n    <div class="form-group">\n      <div class="col-xs-1 visible-xs"></div>\n      <label for="' +
((__t = ( markup_locality )) == null ? '' : __t) +
'" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">Locality</label>\n      <div class="col-md-5 col-sm-5 col-xs-5">\n        <input type="text" name="' +
((__t = ( markup_locality )) == null ? '' : __t) +
'" class="form-control input-sm" id="' +
((__t = ( markup_id )) == null ? '' : __t) +
'" placeholder="Locality" value="' +
((__t = ( locality )) == null ? '' : __t) +
'" autocomplete="off">\n      </div>\n    </div>\n  </div>\n</div>\n<br>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/alertDanger.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-danger fade in">\r\n    <button data-dismiss="alert" class="close close-sm" type="button">\r\n        <i class="fa fa-times"></i>\r\n    </button>\r\n    <strong>' +
((__t = (message)) == null ? '' : __t) +
'</strong>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/alertSuccess.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="alert alert-success fade in">\r\n    <button data-dismiss="alert" class="close close-sm" type="button">\r\n        <i class="fa fa-times"></i>\r\n    </button>\r\n    <strong>' +
((__t = (message)) == null ? '' : __t) +
'</strong>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/bankAccount.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2 class="to_center">Account Details</h2>\r\n\r\n<div class="form-group">\r\n  <!-- render select type: bank_id -->\r\n  ' +
((__t = ( partial('partials_markupSelect', {
  	id: "bank_id",
  	label: "Bank",
  	collection: collection,
  	name: "restaurant[bank_account_attributes][bank_id]",
  	bank: bank,
  	value: bank.bank_id
  }) )) == null ? '' : __t) +
'\r\n\r\n  <!-- render the text type for: branch -->\r\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "branch",
  	placeholder: "Branch",
  	label: "Branch",
  	value: bank.branch,
  	required: false,
  	name: "restaurant[bank_account_attributes][branch]"
  }) )) == null ? '' : __t) +
'\r\n\r\n  <!-- render the text type for: account_name -->\r\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "account_name",
  	placeholder: "Account Name",
  	label: "Account Name",
  	value: bank.account_name,
  	required: true,
  	name: "restaurant[bank_account_attributes][account_name]"
  }) )) == null ? '' : __t) +
'\r\n\r\n  <!-- render the text type for: account_number -->\r\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "account_number",
  	placeholder: "Account Number",
  	label: "Account Number",
  	value: bank.account_number,
  	required: false,
  	name: "restaurant[bank_account_attributes][account_number]"
  }) )) == null ? '' : __t) +
'\r\n\r\n  <!-- render the text type for: ifsc -->\r\n  ' +
((__t = ( partial('partials_markupText', {
  	id: "ifsc",
  	placeholder: "IFSC",
  	label: "IFSC Code",
  	value: bank.ifsc,
  	required: false,
  	name: "restaurant[bank_account_attributes][ifsc]"
  }) )) == null ? '' : __t) +
'\r\n\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/bulk_update.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\r\n    <div class="col-xs-12" id="sub_listing">\r\n      <table class="table table-hover">\r\n        <thead>\r\n            <tr>\r\n            \t<th class="">Form ID</th>\r\n            \t<th class="">Name</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="searchable">\r\n            ';
 _.each(restaurants, function(restaurant, i) { ;
__p += '                                     \r\n            \t<tr>\r\n            \t\t<td>' +
((__t = ( restaurant.form_id )) == null ? '' : __t) +
'</td>\r\n            \t\t<td>' +
((__t = ( restaurant.name )) == null ? '' : __t) +
'</td>\r\n            \t</tr>\r\n            ';
 }); ;
__p += '                                                 \r\n        </tbody>\r\n    </table>             \r\n</div>\r\n\r\n<div>\r\n    <button class="btn btn-success btn-sm" id="proceed" style="margin-left: 86%;">Proceed</button>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/choice_entry.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row choice_row" id="choice_row_' +
((__t = ( i )) == null ? '' : __t) +
'">\n\t<input type="hidden" id="choice_id_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n\t<div class="col-xs-1"><br><strong id="sr_num_' +
((__t = ( i )) == null ? '' : __t) +
'">' +
((__t = ( sr_num )) == null ? '' : __t) +
'</strong></div>\n\t<br>\n\t<div class="col-xs-5">\n\n\t\t<div class="form-group">\n\t    <label class="col-xs-4 control-label label-sm">Name</label>\n\t    <div class="col-xs-8">\n\t    \t<input class="form-control input-sm col-xs-12 choice_name editing listen_change" id="choice_name_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" type="text" value="' +
((__t = ( (name) ? name : '' )) == null ? '' : __t) +
'" placeholder="Name">\n\t    </div>\n\t  </div>\n\t  <br>\n\n\t  <div class="form-group">\n\t  \t<label class="col-xs-4 control-label label-sm">Label</label>\n\t    <div class="col-xs-8">\n\t    \t<input class="form-control input-sm col-xs-12 choice_label editing listen_change" id="choice_label_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" type="text" value="' +
((__t = ( (label) ? label : '' )) == null ? '' : __t) +
'" placeholder="Label">\n\t    </div>\n\t  </div>\n\t  <br>\n\n\t  <div class="form-group">\n\t    <label class="col-xs-4 control-label label-sm">Restaurant Label</label>\n\t    <div class="col-xs-8">\n\t    \t<input class="form-control input-sm col-xs-12 choice_label_for_restaurant editing listen_change" id="choice_label_for_restaurant_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Restaurant label" type="text" value="' +
((__t = ( (label_for_restaurant) ? label_for_restaurant : '' )) == null ? '' : __t) +
'">\n\t    </div>\n\t  </div>\n\t  <br>\n\n\t  <div class="form-group">\n\t  \t<label class="col-xs-4 control-label label-sm">Min | Max</label>\n\t    <div class="col-xs-4">\n\t    \t<input class="form-control input-sm col-xs-12 choice_min editing listen_change" id="choice_min_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Min" type="number" min="0" value="' +
((__t = ( (_.isNumber(min)) ? min : '' )) == null ? '' : __t) +
'">\n\t    </div>\n\t    <!-- <div class="col-xs-2"></div> -->\n\t    <div class="col-xs-4">\n\t    \t<input class="form-control input-sm col-xs-12 choice_max editing listen_change" id="choice_max_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Max" type="number" min="1" value="' +
((__t = ( (_.isNumber(max)) ? max : '' )) == null ? '' : __t) +
'">\n\t    </div>\n\t  </div>\n\t  <br>\n\n    <div class="form-group">\n    \t<label class="col-xs-4 control-label label-sm">Description</label>\n\t    <div class="col-xs-8">\n\t      <textarea rows="3" cols="100" style="resize: none;" class="form-control input-sm choice_description editing listen_change" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Description" id="choice_description_' +
((__t = ( i )) == null ? '' : __t) +
'">' +
((__t = ( (description) ? description : '' )) == null ? '' : __t) +
'</textarea>\n\t    </div>\n\t  </div>\n  </div>\n\n\t<div class="col-xs-1">\n\t\t<button class="btn btn-info btn-sm add_option" id="add_option_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-plus-square"></i> Option</button>\n\t\t<br><br>\n\t\t<a class="btn btn-danger btn-sm delete_choice" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" id="delete_choice_' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-trash-o"></i> Choice</a>\n\t</div>\n\n\t<div class="col-xs-5" id="listing_options_' +
((__t = ( i )) == null ? '' : __t) +
'">\n\t\t<input type="hidden" id="last_options_index_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( (_.isEmpty(options)) ? 0 : options.length )) == null ? '' : __t) +
'">\n\t\t';
 if (!_.isEmpty(options)) { ;
__p += '\n\t\t\t';
 $.each(options, function (j, option) { ;
__p += '\n\t\t\t\t' +
((__t = ( partial("partials_choice_option", {
					id: option.get('id'),
					name: option.get('name'),
					veg_type: option.get('veg_type'),
					max_number: option.get('max_number'),
					price: option.get('price'),
					default_check: ((_.filter(defaults, function(d) { if (d == option.get('id')) { return true; } })).length > 0) ? true : false,
					j: j,
					i: i
				}) )) == null ? '' : __t) +
'\n\t\t\t';
 }) ;
__p += '\n\t\t';
 } ;
__p += '\n\t</div>\n</div>\n<hr id="choice_hr_' +
((__t = ( i )) == null ? '' : __t) +
'">';

}
return __p
};

this["JST"]["app/scripts/templates/partials/choice_option.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row option_row" style="background-color: rgba(237, 237, 237, 0.55);" id="option_row_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'">\n\t<input type="hidden" id="option_id_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n\t<br>\n\t<div class="col-xs-1"><i class="fa fa-spoon fa-2x"></i></div>\n\t\n\t<div class="col-xs-11">\n\t\t<div class="row">\n\t\t\t<div class="form-group">\n\t\t\t\t<label class="col-xs-2 control-label label-sm">Name</label>\n\t\t\t\t<div class="col-xs-7">\n\t\t\t\t\t<input class="form-control input-sm col-xs-12 editing listen_change" type="text" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" placeholder="Name" id="option_name_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( name )) == null ? '' : __t) +
'">\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-1">\n\t\t\t\t\t<a class="btn btn-danger btn-sm delete_option" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" id="delete_option_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'"><i class="fa fa-trash-o"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-2"></div>\n\t\t\t</div>\n\t\t\t<br>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label class="col-xs-2 control-label label-sm">Max</label>\n\t\t\t\t<div class="col-xs-3">\n\t\t\t\t\t<input type="number" class="form-control input-sm editing listen_change" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" placeholder="Max Number" min="0" id="option_max_number_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( max_number )) == null ? '' : __t) +
'">\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-1">\n\t\t\t\t\t<i class="fa fa-inr" style="margin-top: 9px;"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-3">\n\t\t\t\t\t<input type="number" class="form-control input-sm editing listen_change" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" placeholder="Price" min="0" step="any" id="option_price_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( price )) == null ? '' : __t) +
'">\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-3"></div>\n\t\t\t</div>\n\t\t\t<br>\n\n\t\t\t<div class="form-group">\n\t\t\t\t<label class="col-xs-2 control-label label-sm">Type</label>\n\t\t\t\t<div class="col-xs-3">\n\t\t\t\t\t<select class="option_type editing listen_change" id="option_veg_type_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'">\n\t\t\t\t\t\t';
 $.each(collections.veg_types, function (type) { ;
__p += '\n\t\t\t\t\t\t\t<option value="' +
((__t = ( type )) == null ? '' : __t) +
'" ';
 if (type == veg_type) { ;
__p += ' selected ';
 } ;
__p += '>' +
((__t = ( (type == "NON_VEG") ? "NON VEG" : type )) == null ? '' : __t) +
'</option>\n\t\t\t\t\t\t';
 }) ;
__p += '\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-1">\n\t\t\t\t\t<i class="fa fa-thumb-tack"></i>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-3">\n\t\t\t\t\t<input type="checkbox" class="option_default listen_change" id="option_default_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" ';
 if (default_check) { ;
__p += ' checked ';
 } ;
__p += '>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-3"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<br>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/choice_select.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if (edit_mode) { ;
__p += '\n  <select multiple class="form-control default-select2 input-sm item_choices listen_change" id="item_choices_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-field="choices">\n    ';
 _.each(choices_list, function(choice) {  ;
__p += '\n      <option value="' +
((__t = ( choice.get('id') )) == null ? '' : __t) +
'" ';
 if (_.contains(choices, choice.get('id'))) { ;
__p += ' selected ';
 } ;
__p += '>' +
((__t = ( choice.get('label') )) == null ? '' : __t) +
'</option>\n    ';
 }) ;
__p += '\n  </select>\n';
 } else { ;
__p += '\n  <ul>\n    ';
 _.each(choices, function(choice) { ;
__p += '\n      <li value="' +
((__t = ( choice )) == null ? '' : __t) +
'" >' +
((__t = ( map[choice] )) == null ? '' : __t) +
'</li>\n    ';
 }) ;
__p += '\n  </ul>\n';
 } ;


}
return __p
};

this["JST"]["app/scripts/templates/partials/contactNumber.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n\t<div class="col-xs-1 visible-xs"></div>\n\t<label class="col-md-4 col-sm-4 col-xs-3 control-label label-sm">';
 if(sms) {;
__p += '<i class="fa fa-phone fa-lg"> </i>';
 };
__p += ' Tel No.</label>\n\n\t<div class="col-md-8 col-sm-8 col-xs-8">\n\t\t<input type="hidden" name="' +
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
'" pattern="0|([0-9]{10})" title="Phone number should be 10 digits, like 9920734295 or 2288888888, Else you can leave it empty">\n\n\t\t<input type="hidden" name="' +
((__t = ( markup_to_delete )) == null ? '' : __t) +
'" value="false">\n\n\t\t<a class="btn btn-danger btn-sm to_delete hidden-xs" data-delete-name="' +
((__t = ( markup_to_delete )) == null ? '' : __t) +
'" data-delete-input="' +
((__t = ( markup_input_name )) == null ? '' : __t) +
'">\n\t\t\t<strong>x</strong>\n\t\t</a>\n\t</div>\n</div>\n';
 if(sms) { ;
__p += '\n    <!-- Phone checks -->\n    <div id="sms_checks_' +
((__t = ( i )) == null ? '' : __t) +
'">\n    \t<div class="row">\n        <div class="col-xs-1 visible-xs"></div>\n          <label class="col-sm-4 col-xs-4 control-label">Smart phone? </label>\n          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n            <div class="checkbox">\n              <input type="checkbox" name="phone_numbers_for_sms_contact_numbers_' +
((__t = ( i )) == null ? '' : __t) +
'_is_smart_phone" ';
 if (is_smartphone) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n            </div>\n          </div>\n        </div>\n          <div class="row">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label">Present on counter? </label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <input type="checkbox" name="phone_numbers_for_sms_contact_numbers_' +
((__t = ( i )) == null ? '' : __t) +
'_is_present_on_counter" ';
 if (is_present_on_counter) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n                </div>\n            </div>\n          </div>\n          <div class="row">\n            <div class="col-xs-1 visible-xs"></div>\n            <label class="col-sm-4 col-xs-4 control-label">Verified? </label>\n            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n                <div class="checkbox">\n                    <input type="checkbox" name="phone_numbers_for_sms_contact_numbers_' +
((__t = ( i )) == null ? '' : __t) +
'_is_verified" ';
 if (is_verified) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n                </div>\n            </div>\n        </div>\n      </div>\n  </br>\n';
};
__p += '\n';

}
return __p
};

this["JST"]["app/scripts/templates/partials/deliveryArea.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr class="delivery_area" data-locality="' +
((__t = ( (deliveryArea.get("locality_group_id_delivery_type") == undefined) ? "" : deliveryArea.get("locality_group_id_delivery_type").locality_group_id )) == null ? '' : __t) +
'">\n\t<td>\n\t  \t<input type="hidden" name="locality_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("id") )) == null ? '' : __t) +
'">\n\t  \t<input type="hidden" name="delete_' +
((__t = ( i )) == null ? '' : __t) +
'" value="false">\n\n\t    <select name="locality_group_id_' +
((__t = ( i )) == null ? '' : __t) +
'" id="locality_id_' +
((__t = ( i )) == null ? '' : __t) +
'"  class="locality_select" >\n\t    \t<option value="" selected="selected"></option>\n\t\t    ';
 _.each(localities, function(locality, j) { ;
__p += '\n\t\t    \t<option ';
if (locality.id == ((deliveryArea.get("locality_group_id_delivery_type") == undefined) ? "" : deliveryArea.get("locality_group_id_delivery_type").locality_group_id)) { ;
__p += 'selected="selected" ';
 } ;
__p += ' value="' +
((__t = ( locality.id )) == null ? '' : __t) +
'">' +
((__t = ( locality.name )) == null ? '' : __t) +
'</option>\n\t\t    ';
 }) ;
__p += '\n\t    </select>\n\t</td>\t\n\n\t<td>\n\t\t<input type="text" class="delivery_time_input input-sm form-control" name="min_delivery_amount_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("min_delivery_amount") )) == null ? '' : __t) +
'" required>\n\t</td>\n\n\t<td>\n\t\t<input type="text" class="delivery_time_input form-control input-sm" name="delivery_charges_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("delivery_charges") )) == null ? '' : __t) +
'" required>\n\t</td>\n\n\t<td>\n\t\t<input type="text" class="delivery_time_input input-sm form-control" name="delivery_time_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( to_mins(deliveryArea.get("delivery_time")) )) == null ? '' : __t) +
'" required>\n\t</td>\n\n\t<td>\n\t\t<input type="text" class="delivery_time_input input-sm form-control" name="rush_hour_delivery_time_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( to_mins(deliveryArea.get("rush_hour_delivery_time")) )) == null ? '' : __t) +
'" required>\n\t</td>\n  <td class="hidden-xs">\n  \t<input type="checkbox" name="delivery_type_' +
((__t = ( i )) == null ? '' : __t) +
'" id="delivery_type_id_' +
((__t = ( i )) == null ? '' : __t) +
'" class="delivery_type_select" ';
 if(deliveryArea.get("delivery_type") == 2){;
__p += ' ' +
((__t = ("checked")) == null ? '' : __t);
 } ;
__p += '>\n\t\t<button type="button" id="' +
((__t = ( deliveryArea.get("id") )) == null ? '' : __t) +
'" class="btn btn-danger btn-sm delete_this_locality delete" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-trash fa-lg"></i></button>\n\t</td>\n</tr>\n\n<input type="hidden" name="key_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( deliveryArea.get("key") )) == null ? '' : __t) +
'">\n<input type="hidden" id="timing_count_' +
((__t = ( i )) == null ? '' : __t) +
'" name="timing_count_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( (deliveryArea.get("timings") != undefined) ? deliveryArea.get("timings").length : 0 )) == null ? '' : __t) +
'">\n\n';
 _.each(deliveryArea.get("timings"), function(timing, j) { ;
__p += '\n\t' +
((__t = ( partial("partials_delivery_timings", {
		i: i,
		j: j,
		id: timing["_id"],
		start_time: get_delivery_time(timing["start"]),
		end_time: get_delivery_time(timing["end"])
	}) )) == null ? '' : __t) +
'\n';
 }) ;
__p += '\n\n<tr id="add_timing_' +
((__t = ( i )) == null ? '' : __t) +
'">\n\t<td></td>\n\t<td><button type="button" class="btn btn-info btn-sm add_timing" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'">Add Timing</button></td>\n\t<td></td>\n\t<td></td>\n\t<td></td>\n\t<td></td>\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/delivery_timings.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<tr id="timing_row_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'">\n  <input type="hidden" id="timing_id_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" name="timing_id_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n  <td><label>Timings</label></td>\n  <td><label>Start:</label></td>\n  <td>\n    <input type="text" class="form-control input-sm timing_start_input" name="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" id="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" placeholder="Start" value="' +
((__t = ( start_time )) == null ? '' : __t) +
'" required>\n  </td>\n  <td><label>End:</label></td>\n  <td>\n    <input type="text" class="form-control input-sm timing_end_input" name="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" id="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" placeholder="End" value="' +
((__t = ( end_time )) == null ? '' : __t) +
'" required>\n  </td>\n  <td>\n    <button type="button" class="btn btn-danger btn-sm delete_timing" id="delete_timing_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'"><i class="fa fa-times"></i></button>\n  </td>\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/designation.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div id="designation_row_' +
((__t = ( index )) == null ? '' : __t) +
'">\n\t<div class="form-group" >\n\t\t<div class="col-xs-1 visible-xs"></div>\n\t\t<label for="designation" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm"><i class="fa fa-user"></i>      * Designation</label>\n\t    <div class="col-md-2 col-sm-2 col-xs-2">\n\t    \t<input type="hidden" name="id_' +
((__t = ( index )) == null ? '' : __t) +
'" value="' +
((__t = ( (who != 'undefined') ? who.id : 'new' )) == null ? '' : __t) +
'">\n\t    \t<select name="designation_' +
((__t = ( index )) == null ? '' : __t) +
'" id="designation_' +
((__t = ( index )) == null ? '' : __t) +
'" class="form-inline-element input-sm designation">\n\t\t\t\t<option>other</option>\n\t\t\t\t';
 _.each(designations, function(designation) { ;
__p += '\n\t\t\t\t<option value="' +
((__t = ( designation )) == null ? '' : __t) +
'" "';
 if (designation == who.designation) { ;
__p += '" selected "';
 } ;
__p += '">' +
((__t = ( designation )) == null ? '' : __t) +
'</option>\n\t\t\t\t';
 }); ;
__p += '\n\t\t\t</select>\n\t    </div>\n\t    <div class="col-md-3 col-sm-3 col-xs-3">\n\t\t\t<input type="text" class="form-control input-sm ';
 if ((who != 'undefined') && ((who.designation == 'OWNER') || (who.designation == 'MANAGER') || (who.designation == 'GENERAL MANAGER'))) { ;
__p += ' hidden ';
 } ;
__p += '" name="designation_text_' +
((__t = ( index )) == null ? '' : __t) +
'" id="designation_' +
((__t = ( index )) == null ? '' : __t) +
'_text" value="' +
((__t = ( (who != 'undefined') ? who.designation : '' )) == null ? '' : __t) +
'" placeholder="Designation">\n\t    </div>\n\t\t<div class="col-md-1 col-sm-1 col-xs-1">\n\t\t\t<button class="btn btn-danger btn-sm row_delete label-sm pull-right" data-delete="' +
((__t = ( index )) == null ? '' : __t) +
'">X</button>\n\t\t</div>\n\t</div>\n\n\t' +
((__t = ( partial('partials_markupText', {
	    id: "name_"+index ,
	    placeholder: "Name of the Person",
	    label: "Name of the Person",
	    name: "name_"+index,
	    value:(who != 'undefined') ? who.name : "" ,
	    required:false
	}) )) == null ? '' : __t) +
'\n\n\t<div class="form-group">\n    <div class="col-xs-1 visible-xs"></div>\n    <label class="col-sm-4 col-xs-4 control-label">Point of contact ?</label>\n\t\t<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\n      <div class="checkbox">\n      \t<input type="checkbox" name="designation_is_poc_' +
((__t = ( index )) == null ? '' : __t) +
'" ';
 if (who.is_poc) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n      </div>\n\t\t</div>\n  </div>\n\n\t' +
((__t = ( partial('partials_markupText', {
	    id: "email_" + index ,
	    placeholder: "Email",
	    label: "Email",
	    name: "email_"+index,
	    value:(who != 'undefined') ? who.email : "" ,
	    required:false,
	    type:"email"
	}) )) == null ? '' : __t) +
'\n\n\n\t<div class="form-group">\n      \t<div class="col-xs-1 visible-xs"></div>\n    \t<label class="col-sm-4 col-xs-4 control-label">Email Verified?</label>\n    \t<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\n\t      <div class="checkbox">\n\t        <input type="checkbox" name="designation_is_verified_' +
((__t = ( index )) == null ? '' : __t) +
'" ';
 if (who.is_verified) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n\t      </div>\n    \t</div>\n    </div>\n    <div class="form-group">\n    \t<div class="col-xs-1 visible-xs"></div>\n    \t<label class="col-sm-4 col-xs-4 control-label">Email for order forwarding?</label>\n\t\t<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">\n\t      <div class="checkbox">\n\t      \t<input type="checkbox" name="designation_order_forwarding_' +
((__t = ( index )) == null ? '' : __t) +
'" ';
 if (who.order_forwarding) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n\t      </div>\n\t\t</div>\n    </div>\n    <br>\n\t\n\t <div class="form-group">\n\t\t<input type="hidden" name="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'_contact_numbers_count" value="' +
((__t = ( (who != 'undefined' && who.contact_numbers) ? who.contact_numbers.length : 0 )) == null ? '' : __t) +
'">\n\t\t';
 if (who != 'undefined') { ;
__p += '\n\t\t\t';
 _.each(who.contact_numbers, function(contact_number, i) { ;
__p += '\n\t\t\t\t' +
((__t = ( partial('partials_contactNumber', {
					id: contact_number._id,
					markup_hidden_name: "contacts_" + index + "_contact_numbers_attributes_" + i + "_id",
					markup_hidden_index: "contacts_" + index + "_contact_numbers_attributes_" + i,
					markup_select_name: "contacts_" + index + "_contact_numbers_attributes_" + i + "_number_type",
					markup_input_name: "contacts_" + index + "_contact_numbers_attributes_" + i + "_number",
					markup_to_delete: "contacts_" + index+ "_contact_numbers_attributes_" + i + "_delete",
					i: i,
					number: (contact_number.number == 0) ? "" : contact_number.number,
					contact_number_types: contact_number_types,
					number_type: contact_number.number_type,
					sms: false,
          is_present_on_counter: false,
          is_smartphone: false,
          is_verified: false
				}) )) == null ? '' : __t) +
'\n\t\t\t';
 }) ;
__p += '\n\t\t';
 } ;
__p += '\n\t\t<div class="hidden-xs">\n\t\t\t<button type="button" class="btn btn-info btn-sm add_new_btn" data-whois="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'">Add new Phone Number</button>\n\t\t</div>\n\t\t<input type="hidden" name="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'_delete" id="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'_delete" value="false">\n\t</div>\n</div>\n</br>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/document.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\r\n\t<div class="form-group">\r\n\t\t<label for="docname" class="col-md-4 control-label">Name of the document</label>\r\n\t\t<div class="col-md-6">\r\n\t\t  <input type="text" class="form-control input-sm" name="docname_' +
((__t = (i)) == null ? '' : __t) +
'" id="docname_' +
((__t = (i)) == null ? '' : __t) +
'" placeholder="Enter the name of the document" required>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="form-group">\r\n\t\t<label for="doc" class="col-md-4 control-label">Upload file</label>\r\n\t\t<div class="col-md-4">\r\n\t\t  <input type="file" class="form-control input-sm" name="doc_' +
((__t = (i)) == null ? '' : __t) +
'" id="doc_' +
((__t = (i)) == null ? '' : __t) +
'" required>\r\n\t\t</div>\t\r\n\t\t<div class="col-md-4">\r\n\t\t  <button type="button" class="btn btn-primary btn-sm upload" id="' +
((__t = (i)) == null ? '' : __t) +
'"><i class="fa fa-upload"></i> Upload </button> \r\n\t\t</div>\r\n\t</div>\r\n\t<hr/>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/enter_categorization_tags.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(data,function(p_tag,i) {;
__p += '\n  <div class="row next-level" style="margin-bottom:10px;">\n    <div class="col-sm-2 ">\n      <button type="submit" class="btn btn-info" id="primary_tags_' +
((__t = ( i )) == null ? '' : __t) +
'" style="background-color:#59ace2;border-color:white">' +
((__t = ( p_tag )) == null ? '' : __t) +
'</button>\n    </div>\n    <div class="col-sm-9">\n      <select name="s_tags" class="secondary_tags" id="secondary_tags_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" multiple="multiple">\n        ';
 _.each(_.pairs(l2_tags[p_tag]),function(l2){ ;
__p += '\n        \n          <option value="' +
((__t = ( l2[0] )) == null ? '' : __t) +
'" ';
 if(category[p_tag] && (category[p_tag].indexOf(l2[0]) > -1)){ ;
__p += ' selected ';
} ;
__p += ' >' +
((__t = ( l2[0] )) == null ? '' : __t) +
'</option>\n        ';
 }) ;
__p += '\n      </select>\n    </div>\n  </div>\n';
 }) ;
__p += '\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/partials/info_window.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div style=\'width:200px;\' class=\'text-center row\'>\r\n\t<div class=\'col-sm-12\'>\r\n\t\t<div class=\'row\'>\r\n\t\t\t<div class=\'col-sm-12\'>\r\n\t\t\t\t<h6>' +
((__t = ( polygon_name )) == null ? '' : __t) +
' </h6>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- <div class=\'row\'>\r\n\t\t\t<div class=\'col-sm-12 add-single-locality-div\'>\r\n \t\t\t\t<button class=\'btn btn-warning btn-sm add-single-locality-btn\' data-delivery-id="' +
((__t = ( polygon_id )) == null ? '' : __t) +
'">Add Delivery Area</button>\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</div>\t\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/item.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row item_row ';
 if (!edit_mode) { ;
__p += ' in_display_mode ';
 } ;
__p += '" id="item_row_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" data-item="' +
((__t = ( id )) == null ? '' : __t) +
'">\n<input type="hidden" id="item_id_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n  <div class="col-xs-4 tile">\n    <div class="panel">\n      <div class="panel-heading">\n        <div class="row">\n          <div class="col-xs-1 pull-left"><strong id="sr_num_' +
((__t = ( i )) == null ? '' : __t) +
'">' +
((__t = ( sr_num )) == null ? '' : __t) +
'</strong></div>\n          <div class="col-xs-7">\n            ';
 if (edit_mode) { ;
__p += '\n              <input class="form-control input-sm col-xs-12 item_name listen_change" id="item_name_' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Item name" type="text" value="' +
((__t = ( (name) ? name : '' )) == null ? '' : __t) +
'" data-field="name">\n            ';
 } else { ;
__p += '\n              <p>' +
((__t = ( (name) ? name : '' )) == null ? '' : __t) +
'</p>\n            ';
 } ;
__p += '\n          </div>\n\n          <div class="col-xs-4">\n            ';
 if (edit_mode) { ;
__p += '\n              <button class="btn btn-info btn-sm pull-right add_size" id="add_size_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-plus-square"></i> Size</button>\n              <a class="btn btn-danger btn-sm pull-right delete_item" id="delete_item_' +
((__t = ( i )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-trash-o"></i></a>\n            ';
 } ;
__p += '\n          </div>\n        </div>\n      </div>\n      <div class="panel-body">\n        <div class="row">\n          <div class="col-xs-9">\n            ';
 if (edit_mode) { ;
__p += '\n              <textarea rows="3" cols="100" style="resize: none;" class="form-control input-sm col-xs-5 item_description listen_change" placeholder="Description" id="item_description_' +
((__t = ( i )) == null ? '' : __t) +
'" data-field="description">' +
((__t = ( (description) ? description : '' )) == null ? '' : __t) +
'</textarea>\n            ';
 } else { ;
__p += '\n              <p>' +
((__t = ( (description) ? description : '' )) == null ? '' : __t) +
'</p>\n            ';
 } ;
__p += '\n          </div>\n          <div class="col-xs-3">\n            ';
 if (edit_mode) { ;
__p += '\n              <h6>\n                <input type="checkbox" class="item_aps listen_change" id="item_aps_' +
((__t = ( i )) == null ? '' : __t) +
'" data-field="is_item_price_variable" ';
 if (is_item_price_variable) { ;
__p += ' checked ';
 } ;
__p += '> APS/APC?\n              </h6>\n            ';
 } else if (is_item_price_variable) { ;
__p += '\n              <h6>APC/APS</h6>\n            ';
 } ;
__p += '\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="col-xs-8" id="listing_sizes_' +
((__t = ( i )) == null ? '' : __t) +
'">\n    <input type="hidden" id="size_count_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( (_.isEmpty(sizes)) ? 0 : sizes.models.length )) == null ? '' : __t) +
'">\n    ';
 _.each(sizes.models, function (size, j) { ;
__p += '\n      ' +
((__t = ( partial('partials_item_size', {
        i: i,
        j: j,
        size_name: size.get('size'),
        size_id: size.get('id'),
        choices: size.get('choices'),
        prices: size.get('prices'),
        choices_list: choices_list,
        timings_list: timings_list,
        map: map,
        edit_mode: edit_mode
      }) )) == null ? '' : __t) +
'\n    ';
 }) ;
__p += '\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/item_disable_modal.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<!-- Modal -->\r\n<div class="modal fade" id="itemModal" tabindex="-1" role="dialog" aria-labelledby="itemModalLabel" aria-hidden="true">\r\n  <div class="modal-dialog">\r\n    <div class="modal-content">\r\n      <div class="modal-header">\r\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\r\n        <h4 class="modal-title" id="myModalLabel">Confirm Disable of <span id="modal_item_name"></span>?</h4>\r\n      </div>\r\n      <div class="modal-body">\r\n        <p>Are you sure you want to disable this?\r\n        <br />\r\n        Please add, how long do you want it to be disabled?\r\n        </p>\r\n        <br />\r\n\r\n        <div class="modal_item_disable">\r\n          <form id="modal_item_disabled">\r\n            <select id="modal_item_time_select" class="form-control" style="display: inline-block; width: 20%;">\r\n              <option value="minutes">Minutes</option>\r\n              <option value="hours">Hours</option>\r\n              <option value="days">Days</option>\r\n              <option value="weeks">Weeks</option>\r\n              <option value="months">Months</option>\r\n              <option value="forever">Forever</option>\r\n            </select>\r\n          <input id="modal_item_int_val" class="form-control" style="display: inline-block; width: 20%;" />\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class="modal-footer">\r\n        <button id="modal_item_save_changes" type="button" class="btn btn-primary">Yes</button>\r\n        <button id="modal_item_cancel_disable" type="button" class="btn btn-default" data-dismiss="modal">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/partials/item_modal_sizes.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '  <table id="item_modal_sizes_treetable" class="treetable">\r\n      ';
 _.each(item.get('item_sizes').models, function(size){ ;
__p += '\r\n          ' +
((__t = ( partial('partials_item_size', {size: size, choices: choices, timings: timings}) )) == null ? '' : __t) +
'\r\n      ';
 }) ;
__p += '\r\n  </table>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/item_price.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row" id="price_row_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'_' +
((__t = ( k )) == null ? '' : __t) +
'">\n  <input type="hidden" id="price_id_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'_' +
((__t = ( k )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n  <div class="col-xs-1"><label>Price</label></div>\n  <div class="col-xs-4">\n    ';
 if (edit_mode) { ;
__p += '\n      <input class="form-control input-sm item_price listen_change" id="item_price_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'_' +
((__t = ( k )) == null ? '' : __t) +
'" type="text" value="' +
((__t = ( price )) == null ? '' : __t) +
'" data-field="price">\n    ';
 } else { ;
__p += '\n      <p>' +
((__t = ( price )) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n\n  <div class="col-xs-1"><label>Timing</label></div>\n  <div class="col-xs-4">\n    ';
 if (edit_mode) { ;
__p += '\n      <select class="form-control input-sm item_timings listen_change" id="item_timings_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'_' +
((__t = ( k )) == null ? '' : __t) +
'" data-field="timing_id">\n        <option value="ALL">FOR ALL</option>\n        ';
 _.each(timings_list, function(timing) { ;
__p += '\n          <option value="' +
((__t = ( timing.get('id') )) == null ? '' : __t) +
'" ';
 if (timing_id == timing.get('id')) { ;
__p += ' selected ';
 } ;
__p += '>' +
((__t = ( timing.get('name') )) == null ? '' : __t) +
'</option>\n        ';
 }) ;
__p += '\n      </select>\n    ';
 } else { ;
__p += '\n      <p>' +
((__t = ( map[timing_id] )) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n\n  <div class="col-xs-2">\n    ';
 if (edit_mode) { ;
__p += '\n      <a class="btn btn-danger btn-sm delete_price" id="delete_price_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'_' +
((__t = ( k )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'_' +
((__t = ( k )) == null ? '' : __t) +
'"><i class="fa fa-trash-o"></i></i></a>\n    ';
 } ;
__p += '\n  </div>\n  <br><br>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/item_size.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="col-xs-12 tile size_tile" id="size_tile_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'">\n<input type="hidden" id="size_id_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( size_id )) == null ? '' : __t) +
'">\n  <div class="panel panel-default">\n    <div class="panel-heading">\n      <div class="row">\n        <div class="col-xs-1"><label>Size:</label></div>\n        <div class="col-xs-4">\n          ';
 if (edit_mode) { ;
__p += '\n            <select class="form-control default-select2 item_size editing listen_change" id="item_size_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" name="sizes" data-id="' +
((__t = ( size_id )) == null ? '' : __t) +
'" data-field="size">\n              ';
 _.each(collections.size_lists, function(value, key) { ;
__p += '\n                <option value="' +
((__t = ( value )) == null ? '' : __t) +
'" ';
 if (size_name == value) { ;
__p += ' selected ';
 } ;
__p += '>' +
((__t = ( key )) == null ? '' : __t) +
'</option>\n              ';
 }); ;
__p += '\n            </select>\n          ';
 } else { ;
__p += '\n            <p>' +
((__t = ( map[size_name] )) == null ? '' : __t) +
'</p>\n          ';
 } ;
__p += '\n        </div>\n        <div class="col-xs-1"><label>Choices:</label></div>\n        <div class="col-xs-4">\n          ' +
((__t = ( partial('partials_choice_select', {
            i: i,
            j: j,
            size_id: size_id,
            choices: choices,
            choices_list: choices_list,
            map: map,
            edit_mode: edit_mode,
          }) )) == null ? '' : __t) +
'\n        </div>\n        <div class="col-xs-2">\n          ';
 if (edit_mode) { ;
__p += '\n            <button class="btn btn-success btn-sm pull-right add_price" id="add_price_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'"><i class="fa fa-plus-square"></i> Price</button>\n            <a class="btn btn-danger btn-sm pull-right delete_size" id="delete_size_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'"><i class="fa fa-trash-o"></i></i></a>\n          ';
 } ;
__p += '\n        </div>\n      </div>\n    </div>\n    <div class="panel-body">\n      <div class="row">\n        <div class="col-xs-12" id="listing_prices_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'">\n        <input type="hidden" id="price_count_' +
((__t = ( i )) == null ? '' : __t) +
'_' +
((__t = ( j )) == null ? '' : __t) +
'" value="' +
((__t = ( (_.isEmpty(prices.models)) ? 0 : prices.models.length )) == null ? '' : __t) +
'">\n          ';
 _.each(prices.models, function (price, k) { ;
__p += '\n            ' +
((__t = ( partial('partials_item_price', {
              i: i,
              j: j,
              k: k,
              id: price.get('id'),
              price: price.get('price'),
              timing_id: price.get('timing_id'),
              timings_list: timings_list,
              map: map,
              edit_mode: edit_mode
            }) )) == null ? '' : __t) +
'\n          ';
 }) ;
__p += '\n        </div>\n      </div>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/manager.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="partial_box">\r\n\r\n\t<h4 class="to_center">' +
((__t = ( makeTitle(whois) )) == null ? '' : __t) +
'</h4>\r\n\r\n\t<hr>\r\n\r\n\t<input type="hidden" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_id" value="' +
((__t = ( options ? options._id : "new" )) == null ? '' : __t) +
'">\r\n\r\n\t<div class="form-group">\r\n\t\t<div class="col-xs-1 visible-xs"></div>\r\n\t\t<label for="' +
((__t = ( whois )) == null ? '' : __t) +
'_name" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">Name</label>\r\n\t\t<div class="col-md-6 col-sm-6 col-xs-6">\r\n\t\t  <input type="text" class="form-control input-sm" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_name" id="' +
((__t = ( whois )) == null ? '' : __t) +
'_name" placeholder="Name of the ' +
((__t = ( makeTitle(whois) )) == null ? '' : __t) +
'" value="' +
((__t = ( options ? options.name : "" )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="form-group">\r\n\t\t<div class="col-xs-1 visible-xs"></div>\r\n\t\t<label for="' +
((__t = ( whois )) == null ? '' : __t) +
'_email" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">Email</label>\r\n\t\t<div class="col-md-6 col-sm-6 col-xs-6">\r\n\t\t  <input type="email" class="form-control input-sm" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_email" id="' +
((__t = ( whois )) == null ? '' : __t) +
'_email" placeholder="Email of the ' +
((__t = ( makeTitle(whois) )) == null ? '' : __t) +
'" value="' +
((__t = ( options ? options.email : "" )) == null ? '' : __t) +
'">\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<input type="hidden" name="' +
((__t = ( whois )) == null ? '' : __t) +
'_contact_numbers_count" value="' +
((__t = ( options.contact_numbers.length )) == null ? '' : __t) +
'">\r\n\r\n\t';
 _.each(options.contact_numbers, function(contact_number, i) { ;
__p += '\r\n\t\t' +
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
'\r\n\t';
 }) ;
__p += '\r\n\r\n\t<button type="button" class="btn btn-info btn-sm add_new_btn" data-whois="' +
((__t = ( whois )) == null ? '' : __t) +
'">Add new Phone Number</button>\r\n\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/markupDate.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group">\r\n    <label class="control-label col-md-4">' +
((__t = ( required ? "* " : "")) == null ? '' : __t) +
'' +
((__t = ( label )) == null ? '' : __t) +
'</label>\r\n      <div class="col-md-6">\r\n        <div class="input-group input-sm">\r\n          <span class="input-group-addon input-sm">on</span>\r\n          <input type="text" pattern="\\d{1,2}/\\d{1,2}/\\d{4}" class="form-control input-sm schedule_date" ' +
((__t = ( required ? "required" : "")) == null ? '' : __t) +
' name="schedule_date" id="' +
((__t = ( id1 )) == null ? '' : __t) +
'" placeholder="date" value="' +
((__t = ( value1 )) == null ? '' : __t) +
'">\r\n          <span class="input-group-addon input-sm">at</span>\r\n          <input type="text" pattern="([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}" class="form-control input-sm schedule_time" ' +
((__t = ( required ? "required" : "")) == null ? '' : __t) +
' name="schedule_time" id="' +
((__t = ( id2 )) == null ? '' : __t) +
'" placeholder="time" value="' +
((__t = ( value2 )) == null ? '' : __t) +
'">\r\n    </div>                        \r\n  </div>\r\n</div>   ';

}
return __p
};

this["JST"]["app/scripts/templates/partials/markupNumber.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n  <div class="col-xs-1 visible-xs"></div>\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">' +
((__t = ( required ? "* " : "")) == null ? '' : __t) +
'' +
((__t = ( label )) == null ? '' : __t) +
'</label>\n\t<div class="col-md-6 col-sm-6 col-xs-6">\n\t  <input type="number" class="form-control input-sm" name="' +
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
 if(typeof(step) != "undefined") { ;
__p += ' step="' +
((__t = ( step )) == null ? '' : __t) +
'"';
 } ;
__p += ' ';
 if(typeof(min) != "undefined") { ;
__p += ' min="' +
((__t = ( min )) == null ? '' : __t) +
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

this["JST"]["app/scripts/templates/partials/markupSelect.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\r\n  <div class="col-xs-1 visible-xs"></div>\r\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 col-sm-4 col-xs-4 control-label">' +
((__t = ( label )) == null ? '' : __t) +
'</label>\r\n\t<div class="col-md-8 col-sm-8 col-xs-6">\r\n\t\t<select name="' +
((__t = ( name )) == null ? '' : __t) +
'" id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="form-control input-sm custom_select">\r\n\t\t';
 _.each(collection, function(item) { ;
__p += '\r\n\t\t\t<option ';
 if (value == item[1]) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( item[1] )) == null ? '' : __t) +
'">' +
((__t = ( item[0] )) == null ? '' : __t) +
'</option>\r\n\t\t';
 }) ;
__p += '\r\n\t\t</select>\r\n\t</div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/markupText.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n  <div class="col-xs-1 visible-xs"></div>\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">' +
((__t = ( required ? "* " : "")) == null ? '' : __t) +
'' +
((__t = ( label )) == null ? '' : __t) +
'</label>\n\t<div class="col-md-6 col-sm-6 col-xs-6">\n\t  <input ';
 if(typeof(type) != "undefined") { ;
__p += ' type="' +
((__t = ( type )) == null ? '' : __t) +
'"';
 } else { ;
__p += ' type="text" ';
 } ;
__p += ' class="form-control input-sm" name="' +
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

this["JST"]["app/scripts/templates/partials/markupTextarea.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form-group">\r\n\t<label for="' +
((__t = ( id )) == null ? '' : __t) +
'" class="col-md-4 control-label">' +
((__t = ( label )) == null ? '' : __t) +
'</label>\r\n\t<div class="col-md-8">\r\n\t  <textarea cols="30" rows="3" class="form-control" name="restaurant[' +
((__t = ( id )) == null ? '' : __t) +
']" id="' +
((__t = ( id )) == null ? '' : __t) +
'" placeholder="' +
((__t = ( placeholder )) == null ? '' : __t) +
'">\r\n\t  ' +
((__t = ( value )) == null ? '' : __t) +
'\r\n\t  </textarea>\r\n\t</div>\r\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/menu_categorization.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(l2_tags,function(l1,i){ ;
__p += '\n  <span class="label label-primary tag-label" style="background-color:#59ace2;font-size:11px">\n    ' +
((__t = ( l1[0] )) == null ? '' : __t) +
': <span class="badge" id="" style="background: #59ace2; padding-top: 2px; margin-left: 2px;">' +
((__t = ( l1[1] )) == null ? '' : __t) +
'</span>\n  </span>\n';
 }) ;


}
return __p
};

this["JST"]["app/scripts/templates/partials/order_forwarding_email.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group" id="email_field_' +
((__t = ( i )) == null ? '' : __t) +
'">\n  <input type="hidden" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_to_delete" id="delete_email_' +
((__t = ( i )) == null ? '' : __t) +
'" value="false">\n  <input type="hidden" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_email_id" id="order_email_id_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( id )) == null ? '' : __t) +
'">\n  <div class="col-xs-1 visible-xs"></div>\n  <label class="col-sm-4 col-xs-4 control-label">Email</label>\n  <div class="col-md-6 col-sm-6 col-xs-6" style="width = 377px; !important">\n    <input type="email" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_email" class="form-control input-sm" id="forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Email" value="' +
((__t = ( email )) == null ? '' : __t) +
'" autocomplete="off">\n  </div>\n  <a class="btn btn-danger btn-sm delete_email hidden-xs" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'"><i class="fa fa-times"></i></a>\n\n  <div class="checks_' +
((__t = ( i )) == null ? '' : __t) +
'">\n    <div class="row">\n      <div class="col-xs-1 visible-xs"></div>\n      <label class="col-sm-4 col-xs-4 control-label">Owner</label>\n      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n        <input type="checkbox" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_is_owner" id="is_owner_' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if (owner) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-1 visible-xs"></div>\n      <label class="col-sm-4 col-xs-4 control-label">General Manager</label>\n      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n        <input type="checkbox" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_is_general_manager" id="is_general_manager_' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if (general_manager) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-1 visible-xs"></div>\n      <label class="col-sm-4 col-xs-4 control-label">Manager</label>\n      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n        <input type="checkbox" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_is_manager" id="is_manager_' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if (manager) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-xs-1 visible-xs"></div>\n      <label class="col-sm-4 col-xs-4 control-label">Verified</label>\n      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\n        <input type="checkbox" name="order_forward_email_' +
((__t = ( i )) == null ? '' : __t) +
'_is_verified" id="is_verified_' +
((__t = ( i )) == null ? '' : __t) +
'" ';
 if (verified) { ;
__p += ' checked="true" ';
 } ;
__p += '>\n      </div>\n    </div>\n  </div>\n</div>\n<br>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/profile.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 if(profile != null){ ;
__p += '\r\n  <div>\r\n  \t<p class="pull-right">' +
((__t = ( profile.name )) == null ? '' : __t) +
'<p>\r\n  \t&nbsp;\r\n  \t<button type="button" class="btn btn-sm btn-danger pull-right logout">Logout</button>\r\n  </div>\r\n';
 } ;
__p += '\r\n';

}
return __p
};

this["JST"]["app/scripts/templates/partials/show_categorization.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 _.each(_.pairs(data),function(parent){ ;
__p += '\n  <div class="label label-primary primary_level_tags"id="' +
((__t = ( parent[0] )) == null ? '' : __t) +
'">\n    ' +
((__t = ( parent[0] )) == null ? '' : __t) +
' <br/>\n    ';
 if (parent[1] != null){ ;
__p += '\n      ';
 if(parent[1].length == 1) {;
__p += '\n        ';
 _.each(parent[1],function(child){ ;
__p += ' \n          <div class="badge col-lg-12 second_level_tags">' +
((__t = ( child )) == null ? '' : __t) +
'</div>\n        ';
 }) ;
__p += '\n      ';
 } else if(parent[1].length == 2){ ;
__p += '\n        ';
 _.each(parent[1],function(child){ ;
__p += ' \n          <div class="badge col-lg-6 second_level_tags">' +
((__t = ( child )) == null ? '' : __t) +
'</div>\n        ';
 }) ;
__p += '\n      ';
 }else { ;
__p += '\n        ';
 _.each(parent[1],function(child){ ;
__p += ' \n          <div class="badge col-lg-4 second_level_tags">' +
((__t = ( child )) == null ? '' : __t) +
'</div>\n        ';
 }) ;
__p += '\n      ';
 } ;
__p += '\n    ';
 } ;
__p += '\n  </div>\n';
 }) ;


}
return __p
};

this["JST"]["app/scripts/templates/partials/sidebar.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<!-- sidebar -->\n';
 var roles = _.collect(user.get_roles(), function(x){ return x['name'] });
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
__p += ' \n\n<div id="sidebar" class="nav-collapse">\n  <div class="leftside-navigation">\n    <ul class="sidebar-menu" id="nav-accordion">\n      <li class="';
if(sidebar_active_tab == 'profile'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/profile">Profile\n        <span class="shortcut small text-muted pull-right hidden-xs" style="padding-right:10px">Ctrl&nbsp;+&nbsp;p</span>\n        </a>\n      </li>\n      <li class="';
if(sidebar_active_tab == 'timings'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/timings">Timings\n        <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;m</span>\n        </a>\n      </li>\n      ';
 if(user_type != "outsource"){ ;
__p += '\n      <li class="';
if(sidebar_active_tab == 'delivery_area'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n        <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/deliveryArea">Delivery Areas\n        <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;d</span>\n        </a>\n      </li>\n      ';
 } ;
__p += '\n      ';
 if(user_type != "outsource"){ ;
__p += '\n        <li class="';
if(sidebar_active_tab == 'office_document'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/office_document">Office Document\n          <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;o</span>\n          </a>\n        </li>\n      ';
 } ;
__p += '        \n      ';
 if(user_type != "outsource"){ ;
__p += '\n        <li class="';
if(sidebar_active_tab == 'account_details'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/account_details">Account\n          <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;q</span>\n          </a>\n        </li>\n        <li class="';
if(sidebar_active_tab == 'miscellaneous'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/miscellaneous">Miscellaneous\n          <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;k</span>\n          </a>\n        </li>\n        <li class="';
if(sidebar_active_tab == 'documents'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/documents">Logo & Documents\n          <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;i</span>\n          </a>\n        </li> \n        <li class="';
if(sidebar_active_tab == 'point_of_sale'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id )) == null ? '' : __t) +
'/point_of_sale">Point of Sale\n          <!-- <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;i</span> -->\n          </a>\n        </li>\n        <li class="';
if(sidebar_active_tab == 'fulfilment'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id)) == null ? '' : __t) +
'/fulfilment">Fulfilment\n          <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;f</span>\n          </a>\n        </li>\n        <li class="';
if(sidebar_active_tab == 'campaign_tags'){;
__p +=
((__t = ('active')) == null ? '' : __t);
};
__p += '">\n          <a href="#restaurants/' +
((__t = ( id)) == null ? '' : __t) +
'/campaign_tags">Campaign\n          <span class="shortcut small text-muted pull-right hidden-xs">Ctrl&nbsp;+&nbsp;r</span>\n          </a>\n        </li>\n      ';
 } ;
__p += '\n    </ul>\n  </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/partials/tableRow.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '\n\n\n<div class="form-group">\n\t<hr>\n\t<div class="col-md-1 col-sm-1 hidden-xs">\n\t\t<div style="padding-left: 25px;">\n\t\t\t<button class="btn btn-danger btn-sm row_delete label-sm" data-delete="' +
((__t = ( index )) == null ? '' : __t) +
'">X</button>\n\t\t</div>\n\t</div>\n\t<div class="col-md-2 col-sm-3 col-xs-3">\n\t\t<div class="col-xs-12">\n\t\t\t<input type="hidden" name="id_' +
((__t = ( index )) == null ? '' : __t) +
'" value="new">\n\t\t\t<select name="designation_' +
((__t = ( index )) == null ? '' : __t) +
'" id="designation_' +
((__t = ( index )) == null ? '' : __t) +
'" class="form-inline-element input-sm designation">\n\t\t\t\t<option selected>other</option>\n\t\t\t\t';
 if (names.length > 0) { ;
__p += '\n\t\t\t\t\t';
 _.each(names.split(","), function(person) { ;
__p += '\n\t\t\t\t\t\t<option value="' +
((__t = ( person )) == null ? '' : __t) +
'">' +
((__t = ( person )) == null ? '' : __t) +
'</option>\n\t\t\t\t\t';
 }); ;
__p += '\n\t\t\t\t';
 } ;
__p += '\n\t\t\t</select>\n\t\t\t<div style="width: 147px; margin-top: 15px;">\n\t\t\t\t<input type="text" class="form-control input-sm" name="designation_text_' +
((__t = ( index )) == null ? '' : __t) +
'" id="designation_' +
((__t = ( index )) == null ? '' : __t) +
'_text" value="" placeholder="Enter designation">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="col-md-3 col-sm-3 col-xs-4">\n\t\t<div class="col-xs-12">\n\t\t\t<input type="text" class="form-control input-sm" name="name_' +
((__t = ( index )) == null ? '' : __t) +
'" id="name_' +
((__t = ( index )) == null ? '' : __t) +
'" placeholder="Name of the Person" value="">\n\t\t</div>\n\t</div>\n\t<div class="col-md-6 col-sm-5 col-xs-3 label-sm">\n\t\t<input type="hidden" name="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'_contact_numbers_count" value="1">\n\n\t\t<div class="col-xs-12">\n\t\t\t' +
((__t = ( partial('partials_contactNumber', {
				id: "new",
				markup_hidden_name: "contacts_" + index + "_contact_numbers_attributes_" + 0 + "_id",
				markup_hidden_index: "contacts_" + index + "_contact_numbers_attributes_" + 0,
				markup_select_name: "contacts_" + index + "_contact_numbers_attributes_" + 0 + "_number_type",
				markup_input_name: "contacts_" + index + "_contact_numbers_attributes_" + 0 + "_number",
				markup_to_delete: "contacts_" + index + "_contact_numbers_attributes_" + 0 + "_delete",
				i: 0,
				number: "",
				contact_number_types: contact_number_types,
				number_type: "",
				sms: false,
        is_present_on_counter: false,
        is_smartphone: false,
        is_verified: false
			}) )) == null ? '' : __t) +
'\n\t\t\t<button type="button" class="btn btn-info btn-sm add_new_btn" data-whois="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'">Add new Phone Number</button>\n\t\t</div>\n\t</div>\n\t<input type="hidden" name="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'_delete" id="contacts_' +
((__t = ( index )) == null ? '' : __t) +
'_delete" value="false">\n\t<input type="hidden" name="row_counter" id="row_counter" value="' +
((__t = ( (counter + 1) )) == null ? '' : __t) +
'">\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/timing.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr>\n  <input type="hidden" name="timing_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = ( timing.id )) == null ? '' : __t) +
'">\n\n  <input type="hidden" name="delete_' +
((__t = ( i )) == null ? '' : __t) +
'" value="false">\n  <td>\n    <input type="text" class="form-control input-sm" name="timing_name_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_name_' +
((__t = ( i )) == null ? '' : __t) +
'" value="' +
((__t = (timing.get("name"))) == null ? '' : __t) +
'" placeholder="Name" required>\n  </td>\n  <td>\n    <select name="timing_type_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_type_' +
((__t = ( i )) == null ? '' : __t) +
'" class="timing_type_select" >\n        ';
 _.each(collections.timing_type, function(key, value) { ;
__p += '\n          <option ';
 if (key == timing.get("timing_type")) { ;
__p += 'selected="selected"';
 } ;
__p += ' value="' +
((__t = ( key )) == null ? '' : __t) +
'">' +
((__t = ( value )) == null ? '' : __t) +
'</option>\n        ';
 }) ;
__p += '\n      </select>\n  </td>\n\n  <td>\n    <input type="text" class="form-control input-sm timing_start_input" name="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_start_' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="Start" value="' +
((__t = ( timing.get("start_str") )) == null ? '' : __t) +
'" data-i="' +
((__t = ( i )) == null ? '' : __t) +
'" required>\n  </td>\n  <td>\n    <input type="text" class="form-control input-sm timing_end_input" name="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'" id="timing_end_' +
((__t = ( i )) == null ? '' : __t) +
'" placeholder="End" value="' +
((__t = ( timing.get("end_str") )) == null ? '' : __t) +
'" data-i="' +
((__t = ( i )) == null ? '' : __t) +
'" required>\n  </td>\n  <td>\n    <button type="button" class="btn btn-danger btn-sm delete_timing" data-index="' +
((__t = ( i )) == null ? '' : __t) +
'" data-type="' +
((__t = ( timing.get("timing_type") )) == null ? '' : __t) +
'"><i class="fa fa-times"></i></button>\n  </td>\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/tinyowlRepresentative.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="form-group">\n\t<div class="col-xs-1 visible-xs"></div>\n\t<label class="col-md-4 col-sm-4 col-xs-4 control-label label-sm">' +
((__t = ( label )) == null ? '' : __t) +
'</label>\n\n\t<div class="col-md-6 col-sm-6 col-xs-6">\n\t\t<select name="' +
((__t = ( name )) == null ? '' : __t) +
'" id="' +
((__t = ( id )) == null ? '' : __t) +
'" class="form-inline-element input-sm">\n\t\t\t<option></option>\n\t\t\t';
 _.each(representatives, function(representative) { ;
__p += '\n\t\t\t\t<option value="' +
((__t = ( representative[1] )) == null ? '' : __t) +
'" "';
 if (value == representative[1]) { ;
__p += '" selected "';
 } ;
__p += '">' +
((__t = ( representative[0] )) == null ? '' : __t) +
'</option>\n\t\t\t';
 }); ;
__p += '\n\t\t</select>\n\t</div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/partials/update_status.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div>\n    <div class="panel">\n      <div class="panel-body">\n      <section id="alerts"></section>\n        <form accept-charset="UTF-8" class="form-horizontal" id="update_status_form" method="post">  \n          <input type="hidden" value="' +
((__t = ( restaurant_id )) == null ? '' : __t) +
'" name="id" >\n          <div class="form-group">\n            <label for="status_change" class="col-md-4 control-label">Change Status to: </label>\n            <div class="col-md-8">\n              <select name="status_change" class="form-inline-element input-sm" id="status_change">\n                <option value=null> No Action </option>                \n              </select>\n              <p class="help-block text-info">Will immediately change the status </p>\n            </div>\n          </div>          \n        \n        <div class="well scheduler">\n            <div class="panel-heading" style="background-color:#FFFFFF">\n                <h4 class="panel-title">\n                    <span class="label label-warning label-sm pull-right"> Optional </span>\n                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\n                        <i class="fa fa-calendar"></i> Schedule an action\n                    </a>\n                </h4>\n            </div>\n            <div id="collapseOne" class="panel-collapse collapse in" style="height: auto;">\n                <div class="panel-body">                    \n                    <div class="form-group">\n                      <label class="col-sm-4 control-label col-lg-4" for="automatic"> Automatic?</label>\n                      <div class="col-lg-6">\n                          <div class="checkbox">\n                              <label>\n                                  <input type="checkbox" name="automatic" checked>\n                                  <p class="text-muted"> (Unchecked indicates a Manual Update!) </p>\n                              </label>\n                          </div> \n                      </div>\n                    </div>\n\n                    <div class="form-group">\n                      <label for="new_status" class="col-md-4 control-label">Future Status: </label>\n                      <div class="col-md-8">\n                        <select name="new_status" class="form-inline-element input-sm" id="new_status">\n                          <option value=null> No Action </option>\n                          <option value="2">ACTIVE</option>\n                          <option value="3">INACTIVE</option>\n                        </select>                        \n                      </div>\n                    </div>  \n\n                    <div class="form-group">\n                      <label class="control-label col-md-4">Scheduled Date-Time:</label>\n                      <div class="col-md-6">\n                        <div class="input-group input-sm">\n                          <span class="input-group-addon input-sm">on</span>\n                          <input type="text" class="form-control input-sm schedule_date" name="schedule_date" id="schedule_date" placeholder="date" value="">\n                          <span class="input-group-addon input-sm">at</span>\n                          <input type="text" class="form-control input-sm schedule_time" name="schedule_time" id="schedule_time" placeholder="time" value="">\n                        </div>                        \n                      </div>\n                    </div>                  \n                    \n                    <div class="form-group">\n                      <label class="col-sm-4 control-label col-lg-4" for="keep_notifying"></label>\n                      <div class="col-lg-6">\n                          <div class="checkbox">\n                              <label>\n                                  <input type="checkbox" name="keep_notifying" checked>\n                                  Keep notifying me until an action is taken\n                              </label>\n                          </div> \n                      </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div> \n        <div class="form-group">\n            <label class="col-md-4 control-label">* Comment</label>\n            <div class="col-md-6">\n                <input type="text" class="form-control input-sm" name="comment" required autocomplete="off" >\n            </div>\n        </div>\n        <div class="form-group" id="js-update-status-reason-form-group">\n            <label class="col-md-4 control-label">* Reason</label>\n            <div class="col-md-6">\n                <select class="form-control input-sm" name="reason_id" id="closing_reasons">\n                  <option value="nil">None</option>\n                ';
 $.each(collections.reasons,function(index,closingReasonItem){ ;
__p += '\n                   <option value="' +
((__t = (closingReasonItem.id)) == null ? '' : __t) +
'">' +
((__t = (closingReasonItem.reason)) == null ? '' : __t) +
'</option>\n                ';
 }); ;
__p += '\n                </select>\n            </div>\n        </div>\n        <div class="form-group">\n            <div class="col-lg-offset-4 col-lg-6">\n                <button class="btn btn-success btn-sm" id="update_status" data-override="false">Update</button>\n                <a class="btn btn-danger btn-sm" href="#restaurants">Close</a>\n            </div>\n        </div>\n    </form>\n    </div>\n    </div>                           \n  </div>';

}
return __p
};

this["JST"]["app/scripts/templates/tagging/item_edit_view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr tabindex=\'1\' data-id="' +
((__t = (item.get('id'))) == null ? '' : __t) +
'"> \n  <td class="col-lg-1">\n    ' +
((__t = ( item.get('name') )) == null ? '' : __t) +
'\n    <br>\n  <span class="small text-muted">Sizes: ' +
((__t = ( item.get('sizes').join(','))) == null ? '' : __t) +
'</span>\n  </td>\n  <td class="col-lg-1">\n    ' +
((__t = ( item.get('desc') )) == null ? '' : __t) +
'\n  </td>\n  <td class="col-lg-1">\n    <i title=\'Edit\' alt=\'Edit\' class="fa  fa-check-square-o fa-lg js_done"></i>\n    <i title=\'Copy\' alt=\'Copy\' class="fa fa-copy fa-lg js_copy"></i>\n    <i title=\'Paste\'alt=\'Paste\' class="fa fa-paste fa-lg js_paste"></i>\n  </td>\n  <!-- for each tagtype -->\n  ';
 _.each(tag_types,function(tag_type){ ;
__p += '\n  <td class="col-lg-1">\n    <select type="text" required class="js_tag_select form-control" data-tag-type=\'' +
((__t = (tag_type)) == null ? '' : __t) +
'\' multiple="multiple">\n      ';
 _.each(tags.get(tag_type),function(tag){ ;
__p += '\n      <option value="' +
((__t = (tag)) == null ? '' : __t) +
'">' +
((__t = (tag)) == null ? '' : __t) +
'</option>\n      ';
 }) ;
__p += '\n    </select>   \n  </td> \n  <!--end of for  -->\n  ';
 }) ;
__p += '\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/tagging/item_view.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<tr tabindex=\'1\' data-id="' +
((__t = (item.get('id'))) == null ? '' : __t) +
'">\n  <td class="col-lg-1">' +
((__t = (item.get('name'))) == null ? '' : __t) +
'  <i class=\'mark_icon fa fa-lg\'></i>\n  <br>\n    <span class="small text-muted">Sizes: ' +
((__t = ( item.get('sizes').join(','))) == null ? '' : __t) +
'</span>\n  </td>\n  <td class="col-lg-1">\n    ' +
((__t = ( item.get('desc'))) == null ? '' : __t) +
'\n  </td>\n  <td class="col-lg-1">\n    <!-- <button class=\'js_edit\'><i class="fa fa-copy "></i></button> -->\n    <i title=\'Edit\' alt=\'Edit\' class="fa fa-edit fa-lg js_edit"></i>\n    <i title=\'Copy\' alt=\'Copy\' class="fa fa-copy fa-lg js_copy"></i>\n    <i title=\'Paste\'alt=\'Paste\' class="fa fa-paste fa-lg js_paste"></i>\n    <!-- <button class=\'js_paste\'>P</button> -->\n  </td>\n  <!-- for each tagtype -->\n  ';
_.each(tag_types,function(tag_type){;
__p += '\n  <td class="col-lg-1">\n    ';
var selected_tags = _.intersection(item.get('tags'), tags.get(tag_type)) ;
__p += '\n    <ul class=\'tags-ul\'>  \n      ';
_.each(selected_tags,function(tag){;
__p += '\n      <li>\n        <span title="Remove tag"><i class="tag-remove js_tag_remove fa fa-remove"></i>' +
((__t = (tag)) == null ? '' : __t) +
'</span>\n      </li>\n      ';
});
__p += '\n    </ul>\n  </td>\n  <!--end of for  -->\n  ';
});
__p += '\n</tr>';

}
return __p
};

this["JST"]["app/scripts/templates/tagging/tagging_new.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="row">\n  <div class="col-lg-12">\n    <section class="panel">\n      <div class="panel-body">\n        <div class="row">\n          <div class="col-lg-9">\n            <h2>Item Tagging</h2>\n          </div>\n          <div class="col-lg-3">\n            <div class="col-lg-6">\n              <button id=\'save\' class="btn btn-primary pull-right save" ><i class="fa fa-floppy-o"></i> save</button>\n            </div>\n            <div class="col-lg-6">\n              <a class="btn btn-primary pull-right next" id=\'js_next\' disabled href="#menu_timeline/' +
((__t = (restaurant_id)) == null ? '' : __t) +
'/categorization"><i class="fa fa-sign-out"  ></i> Next</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="row">\n        <div class="col-lg-12">\n          <table class="table table-hover general-table">\n            <thead>\n              <tr>\n                <th>Item</th>\n                <th>Description</th>\n                <th>Action</th>\n                 ';
_.each(tag_types,function(x){;
__p += '\n                 <th>' +
((__t = (x.tag_type)) == null ? '' : __t) +
'</th>\n                 ';
});
__p += '\n              </tr>\n            </thead>\n            <tbody class="searchable" id="itemViews">\n              \n            </tbody>\n          </table>\n        </div>\n      </div>\n      <hr>\n    </section>\n  </div>\n</div>\n<style>\n.tag-remove{\n  padding: 2px;\n}\n.select2-container-multi .select2-choices .select2-search-choice {\nline-height: 1;\nborder-radius: 0px;\nfont-size: 12px;\n}\ntr:focus{\n  color:black;\n  outline: 3px solid #3366FF;\n  outline-offset: -3px;\n}\n.tags-ul>li{\n  margin-top: 1px;\n}\nul.tags-ul li span {\n  color:black;\n  border-radius: 5px;\n  padding: 0 2px;\n}\n.tr-color{\n  background-color: #58D3F7;\n  color:black;\n}\n.tr-color:hover{\n  color:black;\n}\n.open>.dropdown-menu{\nheight: 200px;\noverflow-y: scroll;\n}\n.select2-container{\nwidth: 90%!important;\n}\n</style>\n';

}
return __p
};

this["JST"]["app/scripts/templates/tags/edit_tag.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="input-group">\n    <input type="text" class="form-control "  autofocus required="true" value="' +
((__t = (item.get('tag'))) == null ? '' : __t) +
'"  data-id="' +
((__t = (id)) == null ? '' : __t) +
'" name="update_tag">\n    <select name="type" class="form-control" data-id="' +
((__t = (id)) == null ? '' : __t) +
'">\n          <option value="0">Type</option>\n          ';
_.each(tag_type,function(tag){;
__p += '\n          <option value="' +
((__t = (tag.value)) == null ? '' : __t) +
'" ' +
((__t = ( (item.get('tag_type') == tag.value)? 'selected':'')) == null ? '' : __t) +
'>' +
((__t = (tag.tag_type)) == null ? '' : __t) +
'</option>\n          ';
});
__p += '\n        </select>\n    <span class="input-group-btn"> <button class="btn btn-success js-tag-update" data-id="' +
((__t = (id)) == null ? '' : __t) +
'"  type="button">Update</button>\n   </span>\n </div>\n';

}
return __p
};
