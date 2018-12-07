sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller){
	"use strict"; 
	return Controller.extend("tcs.com.ShoppingApp.controller.FeaturedProducts", {
		onInit: function(){
			this._oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
			this.tilesCreated = false; 
		}, 
		onBeforeRendering:function(){
			//Get the array from the model for featured products
			const products = this.getView().getModel("featured").oData.products;
			
			var featuredProducts = this.getRandomSet(products);
			
			var oModel = new sap.ui.model.json.JSONModel({
				products: featuredProducts
			});
			
			this.getView().setModel(oModel, "featuredProducts");
			if(!this.tilesCreated){
				this.makeTiles(featuredProducts);
				this.tilesCreated = true; 
			}
		},
		getRandomSet:function(products){
			///Create an empty array to push into
			const randomSet = []; 
			//Products 1-4
			randomSet.push(products[Math.floor(Math.random() * 4)]);
			//Products 5-8
			randomSet.push(products[Math.floor(Math.random() * 4) + 4]);
			//Products 9-12
			randomSet.push(products[Math.floor(Math.random() * 4) + 8]);
			//Products 13-16
			randomSet.push(products[Math.floor(Math.random() * 4) + 12]);
			//Products 17-20
			randomSet.push(products[Math.floor(Math.random() * 4) + 16]);

			return randomSet;
		}, 
		makeTiles:function(arr){
			const oTileContainer = this.getView().byId("tileContainer");
			
			for(let i=0; i < arr.length; i++){
				const oTile = new sap.m.GenericTile({
					header: arr[i].ProductName,
					subheader: "ProductID: " + arr[i].ProductID,
					tileContent: [
						new sap.m.TileContent({
							content:[
								new sap.m.ImageContent({
									src:  arr[i].uri
								})
							], 
							footer: "Price: " + arr[i].Price
						})
					]
				});
				oTile.attachPress(this.onTilePress);
				oTileContainer.addContent(oTile);
				
			}
		}, 
		onTilePress:function(){
			console.log("Tile Was Pressed");
		}, 
		onCarouselPress:function(){
			console.log("Carousel Was Pressed");
		}
	})	
});