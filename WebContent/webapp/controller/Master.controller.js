sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.tcs.ShoppingApp.controller.Master", {
		onInit: function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
		},
		onListItemPress:function(oEvent){
			///Grabs the custom tag element data and attaches it the route. 
			var sCategoryID = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			this._oRouter.navTo("productMaster", {
				CategoryID: sCategoryID
			});
		}
	});
});