sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("com.tcs.ShoppingApp.controller.ProductDetail", {
		onInit: function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
			this._oRouter.getRoute("productDetail").attachPatternMatched(this._onDetailMatched, this);
		},
		_onDetailMatched: function(oEvent){
			///Gets a reference to the product ID from the Argument in the route
			this._rowId = oEvent.getParameter("arguments").ProductID;
			/// Uses the product ID as the path to retrieve the correct object from the model
			var sObjectPath = "/Products(" + this._rowId +")"; 
			// Gets a reference to the apps model
			var oModel = this.getView().getModel("northWind");
			/// sets the model to the specified model 
			this.getView().setModel(oModel);
			/// Gets a reference to the view and binds the current product to the view
			var oView = this.getView().bindElement(sObjectPath); 
		}
	});
});