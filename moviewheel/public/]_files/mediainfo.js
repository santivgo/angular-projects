define(["exports","./../common/datetime.js","./../common/globalize.js","./../common/textencoding.js","./../common/itemhelper.js","./../common/itemmanager/itemmanager.js","./../approuter.js","./../emby-elements/emby-button/emby-button.js","./../common/dataformatter.js","./../browser.js"],function(_exports,_datetime,_globalize,_textencoding,_itemhelper,_itemmanager,_approuter,_embyButton,_dataformatter,_browser){Object.defineProperty(_exports,"__esModule",{value:!0}),_exports.default=void 0,require(["material-icons","css!modules/mediainfo/mediainfo.css","programStyles"]);var IconSvg={};function getAirTimeText(item,showAirDateTime,showAirEndTime){var date,airTimeText="";return item.StartDate&&(date=new Date(Date.parse(item.StartDate)+(item.PrePaddingSeconds||0)),showAirDateTime&&(airTimeText+=_datetime.default.toLocaleDateString(date,{weekday:"short",month:"short",day:"numeric"})+" "),airTimeText+=_datetime.default.getDisplayTime(date),item.EndDate)&&showAirEndTime&&(date=new Date(Date.parse(item.EndDate)+(item.PostPaddingSeconds||0)),airTimeText+=" &ndash; "+_datetime.default.getDisplayTime(date)),airTimeText}function getProgramInfoHtml(item,options){var name,dummyChannel,html="",miscInfo=[];if(options.programIndicator&&(item.IsLive?miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Live"),"mediaInfoProgramAttribute liveTvProgram")):item.IsPremiere?miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Premiere"),"mediaInfoProgramAttribute premiereTvProgram")):item.IsNew?miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("AttributeNew"),"mediaInfoProgramAttribute newTvProgram")):item.IsRepeat&&miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Repeat"),"mediaInfoProgramAttribute repeatTvProgram"))),item.StartDate&&!1!==options.programTime)try{miscInfo.push(getAirTimeText(item,!0,!0))}catch(e){console.log("Error parsing date: "+item.StartDate)}return item.ChannelName&&!1!==options.channelName&&(dummyChannel={ServerId:item.ServerId,Type:"TvChannel",Name:item.ChannelName,Id:item.ChannelId,Number:item.Number,ChannelNumber:item.ChannelNumber},name=_itemmanager.default.getDisplayName(dummyChannel,{}),options.interactive&&item.ChannelId?miscInfo.push({html:'<a is="emby-linkbutton" style="font-weight:inherit;" class="button-link button-link-color-inherit mediaInfoItem" href="'+_approuter.default.getRouteUrl(dummyChannel)+'">'+name+"</a>"}):miscInfo.push(name)),item.OfficialRating&&options.officialRating&&miscInfo.push(getBorderMediaInfoItem(item.OfficialRating)),options.timerIndicator&&(dummyChannel=function(item){var status,itemType=item.Type;if("SeriesTimer"===itemType)return'<i class="md-icon md-icon-fill mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon">&#xe062;</i>';if(item.TimerId||item.SeriesTimerId)status=item.Status||"Cancelled";else{if("Timer"!==itemType)return"";status=item.Status}return item.SeriesTimerId?"Cancelled"!==status?'<i class="md-icon md-icon-fill mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon">&#xe062;</i>':'<i class="md-icon md-icon-fill mediaInfoItem mediaInfoIconItem">&#xe062;</i>':'<i class="md-icon md-icon-fill mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon">&#xe061;</i>'}(item))&&miscInfo.push({html:dummyChannel}),html+=miscInfo.map(getMediaInfoItem).join("")}function getShadedMediaInfoItem(text,itemClass){itemClass=("mediaInfoItem-shaded "+(itemClass||"")).trim();return _browser.default.android||(itemClass+=" flex align-items-center"),{html:'<div class="mediaInfoItem '+itemClass+'"><span class="mediaInfoItem-shaded-text">'+text+"</span></div>"}}function getBorderMediaInfoItem(text,itemClass){itemClass=("mediaInfoItem-border "+(itemClass||"")).trim();return _browser.default.android,{html:'<div class="mediaInfoItem '+itemClass+'"><span class="">'+text+"</span></div>"}}function addMediaIcons(item,options,miscInfo){var mediaStreams=(null==(_options$mediaSource=options.mediaSource)?void 0:_options$mediaSource.MediaStreams)||item.MediaStreams||[],_options$mediaSource=[];if(!1!==options.mediaInfoIcons)for(var i=0,length=mediaStreams.length;i<length;i++)mediaStreams[i].Type;if(item.Video3DFormat&&_options$mediaSource.push(getBorderMediaInfoItem(_globalize.default.translate("3D")).html),!1!==options.mediaInfoIcons&&!function(mediaStreams,icons){for(var i=0,length=mediaStreams.length;i<length;i++){var stream=mediaStreams[i];if("Audio"===stream.Type&&"dts"===(stream.Codec||"").toLowerCase())if("dts-hd ma"===(stream.Profile||"").toLowerCase()){if(IconSvg.dtshdma)return icons.push(IconSvg.dtshdma)}else if(IconSvg.dts)return icons.push(IconSvg.dts)}}(mediaStreams,_options$mediaSource),!1!==options.subtitles){for(var hasSDHSubtitles,hasSubtitles=item.HasSubtitles,_i=0,_length=mediaStreams.length;_i<_length;_i++){var _stream=mediaStreams[_i];if("Subtitle"===_stream.Type&&(hasSubtitles=!0,_stream.IsHearingImpaired)){hasSDHSubtitles=!0;break}}hasSubtitles&&_options$mediaSource.push(getBorderMediaInfoItem("CC").html),hasSDHSubtitles&&_options$mediaSource.push(getBorderMediaInfoItem("SDH").html)}_options$mediaSource.length&&miscInfo.push({html:'<div class="mediaInfoItems mediaInfoItems-condensed align-self-center">'+_options$mediaSource.join("")+"</div>"})}function getMediaInfoHtml(item,options){var showFolderRuntime,miscInfo=[],itemType=(options=options||{},item.Type);switch(itemType){case"MusicAlbum":case"MusicArtist":case"Playlist":case"MusicGenre":case"BoxSet":showFolderRuntime=!0}if(!1!==options.CommunityRating&&item.CommunityRating&&"RemoteSubtitle"!==item.Type&&(starHtml=getStarIconsHtml(item))&&miscInfo.push({html:starHtml}),item.CriticRating&&!1!==options.criticRating&&(starHtml=getCriticRating(item))&&miscInfo.push({html:starHtml}),("Episode"===itemType||"Recording"===itemType&&item.SeriesId||"Photo"===item.MediaType)&&!1!==options.originalAirDate&&item.PremiereDate)try{date=new Date(Date.parse(item.PremiereDate)),text=_datetime.default.toLocaleDateString(date,{month:"short",day:"numeric",year:"numeric"}),miscInfo.push(text)}catch(e){console.log("Error parsing date: "+item.PremiereDate)}if("SeriesTimer"===itemType&&(item.RecordAnyTime?miscInfo.push(_globalize.default.translate("Anytime")):item.StartDate&&miscInfo.push(_datetime.default.getDisplayTime(item.StartDate)),item.RecordAnyChannel||null==(starHtml=item.ChannelIds)||!starHtml.length?miscInfo.push(_globalize.default.translate("AllChannels")):miscInfo.push(item.ChannelName||_globalize.default.translate("OneChannel"))),!1!==options.year&&item.ProductionYear&&"Series"===itemType)if("Continuing"===item.Status)miscInfo.push(_globalize.default.translate("SeriesYearToPresent",item.ProductionYear));else if(item.ProductionYear){if(text=item.ProductionYear,item.EndDate)try{var endYear=new Date(Date.parse(item.EndDate)).getFullYear();endYear!==item.ProductionYear&&(text+=" &ndash; "+endYear)}catch(e){console.log("Error parsing date: "+item.EndDate)}miscInfo.push(text)}if("Series"===itemType&&(starHtml="",item.Studios&&item.Studios.length&&(endYear=item.Studios[0],starHtml&&(starHtml+=" on "),starHtml+='<a style="font-weight:inherit;" class="button-link button-link-color-inherit" is="emby-linkbutton" href="'+_approuter.default.getRouteUrl({Name:endYear.Name,Type:"Studio",ServerId:item.ServerId,Id:endYear.Id})+'">'+endYear.Name+"</a>"),starHtml)&&miscInfo.push(starHtml),!1!==options.programIndicator&&(item.IsLive?miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Live"),"mediaInfoProgramAttribute liveTvProgram")):item.IsPremiere?miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Premiere"),"mediaInfoProgramAttribute premiereTvProgram")):item.IsNew?miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("AttributeNew"),"mediaInfoProgramAttribute newTvProgram")):item.IsRepeat&&miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Repeat"),"mediaInfoProgramAttribute repeatTvProgram"))),"Program"===itemType)if((item.IsSeries||item.EpisodeTitle)&&!1!==options.episodeTitle)(text=_itemmanager.default.getDisplayName(item,{includeIndexNumber:options.episodeTitleIndexNumber}))&&miscInfo.push(text);else if(item.IsMovie&&item.ProductionYear&&!1!==options.originalAirDate)miscInfo.push(item.ProductionYear);else if(item.PremiereDate&&!1!==options.originalAirDate)try{date=new Date(Date.parse(item.PremiereDate)),text=_globalize.default.translate("OriginalAirDateValue",_datetime.default.toLocaleDateString(date,{month:"short",day:"numeric",year:"numeric"})),miscInfo.push(text)}catch(e){console.log("Error parsing date: "+item.PremiereDate)}else item.ProductionYear&&miscInfo.push(item.ProductionYear);if(!1!==options.year&&"Series"!==itemType&&("Episode"!==itemType||!item.PremiereDate)&&"Person"!==itemType&&"Photo"!==item.MediaType&&"Program"!==itemType&&"Season"!==itemType)if(item.ProductionYear)miscInfo.push(item.ProductionYear);else if(item.PremiereDate)try{text=new Date(Date.parse(item.PremiereDate)).getFullYear(),miscInfo.push(text)}catch(e){console.log("Error parsing date: "+item.PremiereDate)}var starHtml=(null==(endYear=options.mediaSource)?void 0:endYear.RunTimeTicks)||item.RunTimeTicks,text=("Series"===itemType||"Program"===itemType||showFolderRuntime||!1===options.runtime||starHtml&&miscInfo.push("Audio"===itemType?_datetime.default.getDisplayRunningTime(starHtml):_datetime.default.getHumanReadableRuntime(starHtml)),showFolderRuntime&&((date=item.SongCount||item.ChildCount)&&miscInfo.push("BoxSet"===itemType?1===date?_globalize.default.translate("ValueOneItem"):_globalize.default.translate("ItemCount",date):1===date?_globalize.default.translate("OneTrack"):_globalize.default.translate("TrackCount",date)),starHtml)&&"Playlist"===itemType&&miscInfo.push(_datetime.default.getHumanReadableRuntime(starHtml)),"Series"===itemType&&item.ChildCount&&(1===item.ChildCount?miscInfo.push(_globalize.default.translate("OneSeason")):miscInfo.push(_globalize.default.translate("NumberSeasonsValue",item.ChildCount))),"Photo"===item.MediaType&&item.Width&&item.Height&&miscInfo.push(item.Width+"x"+item.Height),options.container&&item.Container&&miscInfo.push(item.Container.toUpperCase()),item.Bitrate||item.BitRate),date=(options.bitrate&&text&&miscInfo.push(_dataformatter.default.bitrateToString(text)),"RemoteSubtitle"===itemType&&(item.IsHashMatch&&miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("HashMatch"))),item.IsForced&&miscInfo.push(getShadedMediaInfoItem(_globalize.default.translate("Forced"))),item.IsHearingImpaired&&miscInfo.push(getShadedMediaInfoItem("SDH")),null!=item.DownloadCount)&&miscInfo.push(_globalize.default.translate("DownloadsValue",item.DownloadCount)),item.OfficialRating&&!1!==options.officialRating&&miscInfo.push(getBorderMediaInfoItem(item.OfficialRating)),options.genres&&(endYear=function(item,options){var type,context=options.context,genres=(item.GenreItems||[]).slice(0),genreLimit=options.genreLimit;switch(null!=(genreLimit=null==genreLimit?1:genreLimit)&&genres.length>genreLimit&&(genres.length=genreLimit),context){case"games":type="GameGenre";break;case"music":type="MusicGenre";break;default:type="Genre"}return genreLimit=options.genreConcat||", ",options=(options=genres.map(function(p){return'<a class="button-link button-link-color-inherit" is="emby-linkbutton" style="font-weight:inherit;" href="'+_approuter.default.getRouteUrl({Name:p.Name,Type:type,ServerId:item.ServerId,Id:p.Id},{context:context})+'">'+_textencoding.default.htmlEncode(p.Name)+"</a>"}).join(genreLimit))&&'<div class="mediaInfoItem" style="white-space:normal;">'+options+"</div>"}(item,options))&&miscInfo.push({html:endYear}),addMediaIcons(item,options,miscInfo),miscInfo.map(getMediaInfoItem).join(""));return options.dateAdded&&_itemhelper.default.enableDateAddedDisplay(item)&&(starHtml=new Date(Date.parse(item.DateCreated)),date+=getMediaInfoItem(_globalize.default.translate("AddedOnValue",_datetime.default.toLocaleDateString(starHtml,{month:"short",day:"numeric",year:"numeric"})))),!1!==options.endsAt&&(text=getEndsAt(item,options.mediaSource))&&(date+=getMediaInfoItem(text,("endsAt "+(options.endsAtClass||"")).trim())),date}function getEndsAt(item,mediaSource){if((mediaSource=mediaSource||item,"Video"===item.MediaType&&mediaSource.RunTimeTicks)&&(!item.StartDate&&"Program"!==item.Type))return item=item.UserData&&item.UserData.PlaybackPositionTicks||0,getEndsAtFromPosition(mediaSource.RunTimeTicks,item);return null}function getEndsAtFromPosition(runtimeTicks,positionTicks,includeText){runtimeTicks=Date.now()+(runtimeTicks-(positionTicks||0))/1e4,runtimeTicks=new Date(runtimeTicks),positionTicks=_datetime.default.getDisplayTime(runtimeTicks);return!1===includeText?positionTicks:_globalize.default.translate("EndsAtValue",positionTicks)}function getMediaInfoItem(m,cssClass){cssClass="string"==typeof cssClass?cssClass+" mediaInfoItem":"mediaInfoItem";var mediaInfoText=m;if("string"!=typeof m&&"number"!=typeof m){if(m.html)return m.html;mediaInfoText=m.text,cssClass+=" "+m.cssClass}return'<div class="'+cssClass+'">'+mediaInfoText+"</div>"}function getCriticRating(item,options){var outerClass="mediaInfoItem mediaInfoCriticRating";return options&&options.outerClass&&(outerClass+=" "+options.outerClass),'<div class="'+outerClass+'"><div class="mediaInfoCriticRatingImage '+(60<=item.CriticRating?"mediaInfoCriticRatingFresh":"mediaInfoCriticRatingRotten")+'"></div>'+item.CriticRating+"%</div>"}function getStarIconsHtml(item,options){var outerClass,html="",item=item.CommunityRating;return item&&(outerClass="starRatingContainer mediaInfoItem",options&&options.outerClass&&(outerClass+=" "+options.outerClass),html=(html=html+'<div class="'+outerClass+'"><i class="md-icon md-icon-fill starIcon">&#xe838;</i>')+_dataformatter.default.numberToString(item,1)+"</div>"),html}function fillPrimaryMediaInfo(elem,item,options){var html=getPrimaryMediaInfoHtml(item,options);(elem.innerHTML=html)?elem.classList.remove("hide"):elem.classList.add("hide"),afterFill(elem,item,options)}function afterFill(elem,item,options){!1!==options.endsAt&&(elem=elem.querySelector(".endsAt"))&&!function(elem,item,mediaSource){var interval=setInterval(function(){document.body.contains(elem)?elem.innerHTML=getEndsAt(item,mediaSource):clearInterval(interval)},6e4)}(elem,item,options.mediaSource)}function getPrimaryMediaInfoHtml(item,options){return null==(options=options||{}).interactive&&(options.interactive=!1),getMediaInfoHtml(item,options)}function getSecondaryMediaInfoHtml(item,options){null==(options=options||{}).interactive&&(options.interactive=!1);var itemType=item.Type;return"Program"===itemType||"Timer"===itemType||"Recording"===itemType?getProgramInfoHtml(item,options):""}function createAttribute(label,value,className){return'<div class="'+(className=(className=className?className+" ":"")+" flex"+" mediaStreamAttribute")+'"><span class="mediaInfoAttributeLabel">'+label+'</span><span class="mediaInfoAttributeValue secondaryText">'+value+"</span></div>"}_exports.default={getMediaInfoHtml:getPrimaryMediaInfoHtml,fill:fillPrimaryMediaInfo,getEndsAt:getEndsAt,getEndsAtFromPosition:getEndsAtFromPosition,getPrimaryMediaInfoHtml:getPrimaryMediaInfoHtml,getSecondaryMediaInfoHtml:getSecondaryMediaInfoHtml,fillPrimaryMediaInfo:fillPrimaryMediaInfo,fillSecondaryMediaInfo:function(elem,item,options){var html=getSecondaryMediaInfoHtml(item,options);(elem.innerHTML=html)?elem.classList.remove("hide"):elem.classList.add("hide"),afterFill(elem,item,options)},getResolutionText:_dataformatter.default.getResolutionText,pushMediaStreamLines:function(stream,options,lines,icon){var streamType=stream.StreamType,streamTypeLocalizationKey="EmbeddedImage"===streamType?"Image":streamType,streamTypeLocalizationKey=("Lyrics"===stream.SubtitleType&&(streamTypeLocalizationKey="Lyrics"),_globalize.default.translate(streamTypeLocalizationKey));lines.push('<h3 style="margin: .6em 0 .8em;" class="flex align-items-center">'+(streamTypeLocalizationKey=icon?'<i class="md-icon autortl mediaStreamTypeIcon">'+icon+"</i>"+streamTypeLocalizationKey:streamTypeLocalizationKey)+"</h3>"),stream.DisplayTitle&&lines.push(createAttribute(_globalize.default.translate("Title"),stream.DisplayTitle)),stream.Title&&stream.Title!==stream.DisplayTitle&&lines.push(createAttribute(_globalize.default.translate("HeaderEmbeddedTitle"),stream.Title)),(stream.DisplayLanguage||stream.Language)&&"Video"!==streamType&&lines.push(createAttribute(_globalize.default.translate("Language"),stream.DisplayLanguage||stream.Language)),stream.Codec&&lines.push(createAttribute(_globalize.default.translate("Codec"),stream.Codec.toUpperCase())),"DolbyVision"===stream.ExtendedVideoType&&stream.ExtendedVideoSubTypeDescription&&lines.push(createAttribute(_globalize.default.translate("DolbyProfile"),stream.ExtendedVideoSubTypeDescription)),stream.CodecTag&&lines.push(createAttribute(_globalize.default.translate("HeaderCodecTag"),stream.CodecTag)),stream.Profile&&lines.push(createAttribute(_globalize.default.translate("Profile"),stream.Profile)),stream.Level&&lines.push(createAttribute(_globalize.default.translate("Level"),stream.Level)),(stream.Width||stream.Height)&&lines.push(createAttribute(_globalize.default.translate("Resolution"),stream.Width+"x"+stream.Height)),stream.AspectRatio&&"mjpeg"!==stream.Codec&&lines.push(createAttribute(_globalize.default.translate("HeaderAspectRatio"),stream.AspectRatio)),"Video"===streamType&&lines.push(createAttribute(_globalize.default.translate("Interlaced"),stream.IsInterlaced?_globalize.default.translate("Yes"):_globalize.default.translate("No"))),(stream.AverageFrameRate||stream.RealFrameRate)&&lines.push(createAttribute(_globalize.default.translate("Framerate"),_dataformatter.default.numberToString(stream.AverageFrameRate||stream.RealFrameRate,3))),stream.ChannelLayout&&lines.push(createAttribute(_globalize.default.translate("Layout"),stream.ChannelLayout)),stream.Channels&&lines.push(createAttribute(_globalize.default.translate("Channels"),stream.Channels+" ch")),stream.BitRate&&"mjpeg"!==stream.Codec&&lines.push(createAttribute(_globalize.default.translate("Bitrate"),_dataformatter.default.bitrateToString(stream.BitRate))),stream.SampleRate&&lines.push(createAttribute(_globalize.default.translate("HeaderSampleRate"),_dataformatter.default.numberToString(stream.SampleRate)+" Hz")),stream.VideoRange&&"SDR"!==stream.VideoRange&&lines.push(createAttribute(_globalize.default.translate("HeaderVideoRange"),stream.VideoRange)),stream.ColorPrimaries&&lines.push(createAttribute(_globalize.default.translate("HeaderColorPrimaries"),stream.ColorPrimaries)),stream.ColorSpace&&lines.push(createAttribute(_globalize.default.translate("HeaderColorSpace"),stream.ColorSpace)),stream.ColorTransfer&&lines.push(createAttribute(_globalize.default.translate("HeaderColorTransfer"),stream.ColorTransfer)),stream.BitDepth&&lines.push(createAttribute(_globalize.default.translate("HeaderBitDepth"),stream.BitDepth+" bit")),stream.PixelFormat&&lines.push(createAttribute(_globalize.default.translate("HeaderPixelFormat"),stream.PixelFormat)),stream.RefFrames&&lines.push(createAttribute(_globalize.default.translate("HeaderReferenceFrames"),stream.RefFrames)),stream.Rotation&&lines.push(createAttribute(_globalize.default.translate("Rotation"),stream.Rotation)),"Video"!==streamType&&"Attachment"!==streamType&&"Data"!==streamType&&lines.push(createAttribute(_globalize.default.translate("Default"),stream.IsDefault?_globalize.default.translate("Yes"):_globalize.default.translate("No"))),"Subtitle"===streamType&&("Lyrics"!==stream.SubtitleType&&(lines.push(createAttribute(_globalize.default.translate("Forced"),stream.IsForced?_globalize.default.translate("Yes"):_globalize.default.translate("No"))),null!=stream.IsHearingImpaired)&&lines.push(createAttribute(_globalize.default.translate("HearingImpaired"),stream.IsHearingImpaired?_globalize.default.translate("Yes"):_globalize.default.translate("No"))),lines.push(createAttribute(_globalize.default.translate("External"),stream.IsExternal?_globalize.default.translate("Yes"):_globalize.default.translate("No")))),stream.IsExternal&&stream.Path&&lines.push(createAttribute(_globalize.default.translate("File"),function(stream){return(stream=stream.Path.split("/").join("\\").split("\\"))[stream.length-1]}(stream)))},getCommunityRating:getStarIconsHtml,getCriticRating:getCriticRating,bitrateToString:_dataformatter.default.bitrateToString,sizeToString:_dataformatter.default.sizeToString,getAirTimeText:getAirTimeText}});