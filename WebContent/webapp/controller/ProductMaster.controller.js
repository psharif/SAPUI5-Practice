sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.tcs.ShoppingApp.controller.ProductMaster", {
		onInit: function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
			this._oRouter.getRoute("productMaster").attachPatternMatched(this._onDetailMatched, this);
		},
		_onDetailMatched: function(oEvent){
			///Gets a reference to the product ID from the Argument in the route
			this._rowId = oEvent.getParameter("arguments").CategoryID;
			//Filters the list for product Master Page for any products that match the category id. 
			var oList = this.getView().byId("productList");
			var oFilterCategory = new sap.ui.model.Filter("CategoryID", sap.ui.model.FilterOperator.EQ, this._rowId);
			oList.getBinding("items").filter(oFilterCategory);
		},
		onNavPress: function(){
			this._oRouter.navTo("featured");
		}, 
		onListItemPress:function(oEvent){
			///Grabs the custom tag element data and attaches it the route. 
			var sProductID = oEvent.getParameter("listItem").getCustomData()[0].getValue();
			this._oRouter.navTo("productDetail", {
				CategoryID: this._rowId, 
				ProductID: sProductID
			});
		}
	});
});