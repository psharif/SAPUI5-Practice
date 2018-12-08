sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.tcs.ShoppingApp.controller.main", {
		onInit: function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
		},
		navToShop:function(oEvent){
			///Grabs the custom tag element data and attaches it the route. 
			this._oRouter.navTo("main");
		},
		navToAccounts:function(oEvent){
			this._oRouter.navTo("accountDetail");
		}
	});
});