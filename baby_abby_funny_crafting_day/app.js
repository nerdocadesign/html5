var Phaser,game,level,pageNo,thumbCount,firstTime,bgmusic,isMuted,i,j,sno,sno1,sname,setFilenaming,adViewCount,loadState1,loadState2,loadState3,loadState4,loadState5,loadState6,loadState7,loadState8,loadState9,loadState10,loadState11,loadState12,loadState13,loadState14,loadState15,loadState16,loadState17,loadFinish,canvas,exportCanvasAsPNG;(function(){function _0x127B4(){return _0x12629}function _0x12765(_0x125DA,_0x12629){return _0x125DA== _0x12629}function _0x12803(){return document}function _0x126C7(_0x125DA,_0x12629){return _0x125DA+ _0x12629}function _0x12716(_0x125DA,_0x12629){return _0x125DA< _0x12629}var _0x125DA=["\x74\x68\x65\x47\x61\x6D\x65","\x62\x6F\x6F\x74","\x70\x72\x65\x6C\x6F\x61\x64","\x73\x65\x74\x74\x69\x6E\x67\x66\x69\x6C\x65","\x74\x69\x74\x6C\x65\x73\x63\x72\x65\x65\x6E","\x6C\x65\x76\x65\x6C\x73\x65\x6C\x65\x63\x74","\x6C\x65\x76\x65\x6C\x31","\x6C\x65\x76\x65\x6C\x32","\x6C\x65\x76\x65\x6C\x33","\x6C\x65\x76\x65\x6C\x34","\x6C\x65\x76\x65\x6C\x34\x5F\x31","\x6C\x65\x76\x65\x6C\x34\x5F\x32","\x6C\x65\x76\x65\x6C\x34\x5F\x33","\x6C\x65\x76\x65\x6C\x35","\x6C\x65\x76\x65\x6C\x35\x5F\x31","\x6C\x65\x76\x65\x6C\x35\x5F\x32","\x6C\x65\x76\x65\x6C\x35\x5F\x33","\x73\x74\x6F\x72\x79\x6C\x69\x6E\x65","\x74\x68\x75\x6D\x62","\x65\x6E\x64\x73\x63\x72\x65\x65\x6E","\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67","\x61","\x3A"];if(_0x12629== _0x125DA[14]){_0x12629(0,false,null,null,0)};function _0x12678(){var _0x12629={};for(var _0x125DA=0;_0x12716(_0x125DA,arguments.length);_0x125DA+= 2){_0x12629[arguments[_0x125DA]]= arguments[_0x126C7(_0x125DA,1)]};return _0x12629}function _0x12629(_0x1298E,_0x12A2C,_0x126C7){var _0x1293F={},_0x129DD={},_0x12716={};_0x1293F._= _0x12A2C;var _0x12678=_0x12803().getElementById(_0x1298E);var _0x12A7B=_0x125DA[20];_0x129DD._= _0x126C7;;_0x12716._= _0x12803().createElement(_0x125DA[21]);;_0x12852(_0x12716,_0x1293F);_0x128A1(_0x12716,_0x129DD);if(_0x12765(_0x12629,0)){_0x127B4()(1);_0x128F0()}else {_0x12716._.dataset.downloadurl= [_0x12A7B,_0x12716._.download,_0x12716._.href].join(_0x125DA[22])};_0x12803().body.appendChild(_0x12716._);_0x12716._.click();_0x12803().body.removeChild(_0x12716._)}if(!_0x125DA){_0x12629= true}else {exportCanvasAsPNG= _0x12629};game=  new Phaser.Game(800,600,Phaser.AUTO,_0x125DA[0]);if(_0x12629== true){return}else {level= 1};if(_0x12629=== 1){return};pageNo= 0;thumbCount= 0;if(!_0x12629){return};firstTime= true;isMuted= false;i= 0;if(_0x12629== 0){return};j= 0;sno= 0;sno1= 0;if(_0x12629== 1){_0x12629();(function(){_0x12629= 1})()};adViewCount= 0;loadState1= false;loadState2= false;loadState3= false;if(!_0x12629){_0x12629();return};loadState4= false;loadState5= false;loadState6= false;loadState7= false;loadState8= false;loadState9= false;if(_0x12629== _0x125DA[19]){return};loadState10= false;if(!_0x12629){return};loadState11= false;if(!_0x125DA){(function(){_0x12629= null})();return};loadState12= false;loadState13= false;loadState14= false;if(!_0x125DA){return}else {loadState15= false};if(!_0x12629){return};loadState16= false;loadState17= false;if(_0x12629=== false){(function(){_0x12629= 1})();return}else {loadFinish= false};game.state.add(_0x125DA[1],bootState);game.state.add(_0x125DA[2],Preload);game.state.add(_0x125DA[3],setFilenaming);game.state.add(_0x125DA[4],titlescreen);game.state.add(_0x125DA[5],LevelSelect);game.state.add(_0x125DA[6],level1);game.state.add(_0x125DA[7],level2);game.state.add(_0x125DA[8],level3);game.state.add(_0x125DA[9],level4);game.state.add(_0x125DA[10],level4_1);game.state.add(_0x125DA[11],level4_2);game.state.add(_0x125DA[12],level4_3);game.state.add(_0x125DA[13],level5);if(_0x12629=== null){return};game.state.add(_0x125DA[14],level5_1);game.state.add(_0x125DA[15],level5_2);game.state.add(_0x125DA[16],level5_3);game.state.add(_0x125DA[17],storyline);if(!_0x12629){return};game.state.add(_0x125DA[18],thumb);game.state.add(_0x125DA[19],endscreen);game.state.start(_0x125DA[1]);function _0x12852(_0x125DA,_0x12629){_0x125DA._.download= _0x12629._}function _0x128A1(_0x125DA,_0x12629){_0x125DA._.href= _0x12629._}function _0x128F0(){_0x12629= false}})()