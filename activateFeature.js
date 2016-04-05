function activateFeature(){
		//get contextr of newly created site
		var clientContext = new SP.ClientContext($site_url); 
		
		web = clientContext.get_web();

		//Activate Features
		ActivateWebFeature(web);
		function ActivateWebFeature(web){
			//trinedy branding feature GUID
			var guid = new SP.Guid('{3729dbcf-53df-43ff-beef-aa1b8d201288}');
			var featDefinition = web.get_features().add(guid, true, SP.FeatureDefinitionScope.farm);
		}
}
