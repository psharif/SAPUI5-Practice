sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.tcs.ShoppingApp.controller.AccountMaster", {
		onInit:function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
		},
		onShowAccountDetail:function(oEvent){
			this._oRouter.navTo("accountDetail");
		},
		onShowOrderDetail:function(oEvent){
			this._oRouter.navTo("orderDetail");
		},
		onShowStatsDetail:function(oEvent){
			this._oRouter.navTo("statsDetail");
		}
	});
});