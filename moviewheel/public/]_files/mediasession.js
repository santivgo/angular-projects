define(["./../common/playback/playbackmanager.js","./../emby-apiclient/connectionmanager.js","./../emby-apiclient/events.js","./../common/itemmanager/itemmanager.js"],function(_playbackmanager,_connectionmanager,_events,_itemmanager){var currentPlayer;function pushImageUrl(item,height,list){var imageOptions={height:height},item=function(item,options){return"Episode"!==item.Type?null:((options=options||{}).type=options.type||"Primary","Primary"===options.type&&item.SeriesPrimaryImageTag?(options.tag=item.SeriesPrimaryImageTag,_connectionmanager.default.getApiClient(item).getImageUrl(item.SeriesId,options)):"Thumb"===options.type&&item.ParentThumbImageTag?(options.tag=item.ParentThumbImageTag,_connectionmanager.default.getApiClient(item).getImageUrl(item.ParentThumbItemId,options)):null)}(item,imageOptions)||function(item,options){return(options=options||{}).type=options.type||"Primary",item.ImageTags&&item.ImageTags[options.type]?(options.tag=item.ImageTags[options.type],_connectionmanager.default.getApiClient(item).getImageUrl(item.Id,options)):item.AlbumId&&item.AlbumPrimaryImageTag?(options.tag=item.AlbumPrimaryImageTag,_connectionmanager.default.getApiClient(item).getImageUrl(item.AlbumId,options)):null}(item,imageOptions);item&&list.push({src:item,sizes:height+"x"+height})}function updatePlayerState(player,state){var albumArtist,artist,album,itemId,duration,currentTime,title,item=state.NowPlayingItem;!item||"Video"!==item.MediaType&&"Audio"!==item.MediaType?hideMediaControls():(title=_itemmanager.default.getDisplayName(item,{}),item.AlbumArtists&&item.AlbumArtists[0]&&(albumArtist=item.AlbumArtists[0].Name),item.ArtistItems?item.ArtistItems.length&&(artist=item.ArtistItems[0].Name):artist=item.SeriesName,album=item.Album||"",itemId=item.Id,duration=parseInt(item.RunTimeTicks?item.RunTimeTicks/1e4:0),state=state.PlayState||{},currentTime=parseInt(state.PositionTicks?state.PositionTicks/1e4:0),state=state.IsPaused||!1,title={title:title,album:album,artwork:function(item){var list=[];return pushImageUrl(item,96,list),pushImageUrl(item,128,list),pushImageUrl(item,192,list),pushImageUrl(item,256,list),pushImageUrl(item,384,list),pushImageUrl(item,512,list),list}(item),currentTime:currentTime,duration:duration,paused:state,itemId:itemId,mediaType:item.MediaType,trackNumber:item.IndexNumber},artist&&(title.artist=artist),albumArtist&&(title.albumArtist=albumArtist),navigator.mediaSession.metadata=new MediaMetadata(title))}function onGeneralEvent(e){updatePlayerState(0,_playbackmanager.default.getPlayerState(this),e.type)}function onStateChanged(e,state){updatePlayerState(0,state)}function onPlaybackStart(e,state){updatePlayerState(0,state,e.type)}function onPlaybackStopped(e,state){state.NextMediaType||hideMediaControls()}function hideMediaControls(){navigator.mediaSession.metadata=null}function bindToPlayer(player){currentPlayer&&(_events.default.off(currentPlayer,"playbackstart",onPlaybackStart),_events.default.off(currentPlayer,"playbackstop",onPlaybackStopped),_events.default.off(currentPlayer,"unpause",onGeneralEvent),_events.default.off(currentPlayer,"pause",onGeneralEvent),_events.default.off(currentPlayer,"statechange",onStateChanged),_events.default.off(currentPlayer,"timeupdate",onGeneralEvent),currentPlayer=null,hideMediaControls()),player&&(currentPlayer=player,updatePlayerState(0,_playbackmanager.default.getPlayerState(player)),_events.default.on(currentPlayer,"playbackstart",onPlaybackStart),_events.default.on(currentPlayer,"playbackstop",onPlaybackStopped),_events.default.on(currentPlayer,"unpause",onGeneralEvent),_events.default.on(currentPlayer,"pause",onGeneralEvent),_events.default.on(currentPlayer,"statechange",onStateChanged),_events.default.on(currentPlayer,"timeupdate",onGeneralEvent))}function execute(name){_playbackmanager.default[name](currentPlayer)}navigator.mediaSession.setActionHandler("previoustrack",function(){execute("previousTrack")}),navigator.mediaSession.setActionHandler("nexttrack",function(){execute("nextTrack")}),navigator.mediaSession.setActionHandler("play",function(){execute("unpause")}),navigator.mediaSession.setActionHandler("pause",function(){execute("pause")});try{navigator.mediaSession.setActionHandler("stop",function(){_playbackmanager.default.isPairing()||execute("stop")})}catch(err){console.log(err)}try{navigator.mediaSession.setActionHandler("seekto",function(data){data.fastSeek||(data=1e3*data.seekTime*1e4,_playbackmanager.default.seek(data,currentPlayer))})}catch(err){console.log(err)}navigator.mediaSession.setActionHandler("seekbackward",function(){execute("rewind")}),navigator.mediaSession.setActionHandler("seekforward",function(){execute("fastForward")}),_events.default.on(_playbackmanager.default,"playerchange",function(){bindToPlayer(_playbackmanager.default.getCurrentPlayer())}),bindToPlayer(_playbackmanager.default.getCurrentPlayer())});