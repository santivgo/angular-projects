define(["exports","./events.js","./../common/servicelocator.js"],function(_exports,_events,_servicelocator){Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0;var StorageKey="servercredentials3";function normalizeCredentialsObject(credentials){credentials.Servers||(credentials.Servers=[])}function stringEqualsIgnoreCase(str1,str2){return(str1||"").toLowerCase()===(str2||"").toLowerCase()}function Credentials(){}Credentials.prototype.clear=function(){this._credentials=null,_servicelocator.appStorage.removeItem(StorageKey)},Credentials.prototype.credentials=function(data){var json;return data&&function(instance,data){var json=JSON.stringify(data);json!==(_servicelocator.appStorage.getItem(StorageKey)||"{}")&&(normalizeCredentialsObject(data),instance._credentials=data,_servicelocator.appStorage.setItem(StorageKey,json),_events.default.trigger(instance,"credentialsupdated",[{credentials:data,credentialsJson:json}]))}(this,data),(data=this)._credentials||(json=_servicelocator.appStorage.getItem(StorageKey)||"{}",console.log("credentials initialized with: ".concat(json)),normalizeCredentialsObject(json=JSON.parse(json)),data._credentials=json),this._credentials},Credentials.prototype.addOrUpdateServer=function(list,server,serverUrlToMatch){var existing,changed,dateLastAccessed;if(server.Id||serverUrlToMatch)return server.Id?existing=list.filter(function(_ref){return _ref.Id===server.Id})[0]:serverUrlToMatch&&(existing=list.filter(function(s){return stringEqualsIgnoreCase(s.ManualAddress,serverUrlToMatch)||stringEqualsIgnoreCase(s.LocalAddress,serverUrlToMatch)||stringEqualsIgnoreCase(s.RemoteAddress,serverUrlToMatch)})[0]),existing?(changed=!1,dateLastAccessed=Math.max(existing.DateLastAccessed||0,server.DateLastAccessed||0),server.DateLastAccessed!==dateLastAccessed&&(changed=!0,existing.DateLastAccessed=dateLastAccessed),!server.AccessToken&&!server.UserId||server.AccessToken===existing.AccessToken&&server.UserId===existing.UserId||(changed=!0,existing.AccessToken=server.AccessToken,existing.UserId=server.UserId),server.ExchangeToken&&server.ExchangeToken!==existing.ExchangeToken&&(changed=!0,existing.ExchangeToken=server.ExchangeToken),server.RemoteAddress&&server.RemoteAddress!==existing.RemoteAddress&&(changed=!0,existing.RemoteAddress=server.RemoteAddress),server.ManualAddress&&server.ManualAddress!==existing.ManualAddress&&(changed=!0,existing.ManualAddress=server.ManualAddress),null!=server.ManualAddressOnly&&server.ManualAddressOnly!==existing.ManualAddressOnly&&(changed=!0,existing.ManualAddressOnly=server.ManualAddressOnly),null!=server.IsLocalServer&&server.IsLocalServer!==existing.IsLocalServer&&(changed=!0,existing.IsLocalServer=server.IsLocalServer),server.LocalAddress&&server.LocalAddress!==existing.LocalAddress&&(changed=!0,existing.LocalAddress=server.LocalAddress),server.Name&&server.Name!==existing.Name&&(changed=!0,existing.Name=server.Name),server.Users&&(changed||JSON.stringify(existing.Users||[])!==JSON.stringify(server.Users)&&(changed=!0),existing.Users=server.Users),server.WakeOnLanInfos&&(changed||JSON.stringify(existing.WakeOnLanInfos||[])!==JSON.stringify(server.WakeOnLanInfos)&&(changed=!0),existing.WakeOnLanInfos=server.WakeOnLanInfos),null!=server.LastConnectionMode&&server.LastConnectionMode!==existing.LastConnectionMode&&(changed=!0,existing.LastConnectionMode=server.LastConnectionMode),server.ConnectServerId&&server.ConnectServerId!==existing.ConnectServerId&&(changed=!0,existing.ConnectServerId=server.ConnectServerId),existing):(list.push(server),!0);throw new Error("Server.Id cannot be null or empty")};_exports.default=new Credentials});