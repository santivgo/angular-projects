define(["exports"],function(_exports){Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.iapManager=_exports.fullscreenManager=_exports.fileRepository=_exports.cameraUpload=_exports.appStorage=_exports.appLogger=_exports.appHost=_exports.apiClientFactory=void 0,_exports.initialize=function(services){services.appStorage&&(_exports.appStorage=services.appStorage);services.appHost&&(_exports.appHost=services.appHost);services.fullscreenManager&&(_exports.fullscreenManager=services.fullscreenManager);services.shell&&(_exports.shell=services.shell);services.iapManager&&(_exports.iapManager=services.iapManager);services.wakeOnLan&&(_exports.wakeOnLan=services.wakeOnLan);services.serverDiscovery&&(_exports.serverDiscovery=services.serverDiscovery);services.fileRepository&&(_exports.fileRepository=services.fileRepository);services.itemRepository&&(_exports.itemRepository=services.itemRepository);services.transferManager&&(_exports.transferManager=services.transferManager);services.userActionRepository&&(_exports.userActionRepository=services.userActionRepository);services.localSync&&(_exports.localSync=services.localSync);services.cameraUpload&&(_exports.cameraUpload=services.cameraUpload);services.apiClientFactory&&(_exports.apiClientFactory=services.apiClientFactory);services.appLogger&&(_exports.appLogger=services.appLogger)},_exports.wakeOnLan=_exports.userActionRepository=_exports.transferManager=_exports.shell=_exports.serverDiscovery=_exports.localSync=_exports.itemRepository=void 0});