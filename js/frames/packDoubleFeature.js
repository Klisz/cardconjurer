//Create objects for common properties across available frames
var masks = [{src:'/img/frames/m15/regular/m15MaskPinline.png', name:'Pinline'}, {src:'/img/frames/m15/regular/m15MaskTitle.png', name:'Title'}, {src:'/img/frames/m15/regular/m15MaskType.png', name:'Type'}, {src:'/img/frames/m15/regular/m15MaskRules.png', name:'Rules'}, {src:'/img/frames/m15/regular/m15MaskFrame.png', name:'Frame'}, {src:'/img/frames/m15/regular/m15MaskBorder.png', name:'Border'}];
var bounds = {x:1555/2010, y:2492/2814, width:353/2010, height:179/2814};
var crownBounds = {x:0, y:0, width:1, height:341/2814};
//defines available frames
availableFrames = [
	{name:'White Frame', src:'/img/frames/doubleFeature/w.png', masks:masks},
	{name:'Blue Frame', src:'/img/frames/doubleFeature/u.png', masks:masks},
	{name:'Black Frame', src:'/img/frames/doubleFeature/b.png', masks:masks},
	{name:'Red Frame', src:'/img/frames/doubleFeature/r.png', masks:masks},
	{name:'Green Frame', src:'/img/frames/doubleFeature/g.png', masks:masks},
	{name:'Multicolored Frame', src:'/img/frames/doubleFeature/m.png', masks:masks},
	{name:'Artifact Frame', src:'/img/frames/doubleFeature/a.png', masks:masks},
	{name:'Land Frame', src:'/img/frames/doubleFeature/l.png', masks:masks},

	{name:'White Power/Toughness', src:'/img/frames/doubleFeature/pt/w.png', bounds:bounds},
	{name:'Blue Power/Toughness', src:'/img/frames/doubleFeature/pt/u.png', bounds:bounds},
	{name:'Black Power/Toughness', src:'/img/frames/doubleFeature/pt/b.png', bounds:bounds},
	{name:'Red Power/Toughness', src:'/img/frames/doubleFeature/pt/r.png', bounds:bounds},
	{name:'Green Power/Toughness', src:'/img/frames/doubleFeature/pt/g.png', bounds:bounds},
	{name:'Multicolored Power/Toughness', src:'/img/frames/doubleFeature/pt/m.png', bounds:bounds},
	{name:'Artifact Power/Toughness', src:'/img/frames/doubleFeature/pt/a.png', bounds:bounds},
	{name:'Land Power/Toughness', src:'/img/frames/doubleFeature/pt/l.png', bounds:bounds},

	{name:'White Land Frame', src:'/img/frames/doubleFeature/wl.png', masks:masks},
	{name:'Blue Land Frame', src:'/img/frames/doubleFeature/ul.png', masks:masks},
	{name:'Black Land Frame', src:'/img/frames/doubleFeature/bl.png', masks:masks},
	{name:'Red Land Frame', src:'/img/frames/doubleFeature/rl.png', masks:masks},
	{name:'Green Land Frame', src:'/img/frames/doubleFeature/gl.png', masks:masks},
	{name:'Multicolored Land Frame', src:'/img/frames/doubleFeature/ml.png', masks:masks},	

	{name:'White Legend Crown', src:'/img/frames/doubleFeature/crowns/w.png', bounds:crownBounds},
	{name:'Blue Legend Crown', src:'/img/frames/doubleFeature/crowns/u.png', bounds:crownBounds},
	{name:'Black Legend Crown', src:'/img/frames/doubleFeature/crowns/b.png', bounds:crownBounds},
	{name:'Red Legend Crown', src:'/img/frames/doubleFeature/crowns/r.png', bounds:crownBounds},
	{name:'Green Legend Crown', src:'/img/frames/doubleFeature/crowns/g.png', bounds:crownBounds},
	{name:'Multicolored Legend Crown', src:'/img/frames/doubleFeature/crowns/m.png', bounds:crownBounds},
	{name:'Artifact Legend Crown', src:'/img/frames/doubleFeature/crowns/a.png', bounds:crownBounds},
	{name:'Land Legend Crown', src:'/img/frames/doubleFeature/crowns/l.png', bounds:crownBounds}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = false;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = async function() {
	//resets things so that every frame doesn't have to
	await resetCardIrregularities();
	//sets card version
	card.version = 'm15DBL';
	//art bounds
	card.artBounds = {x:0.0767, y:0.1129, width:0.8476, height:0.4429};
	autoFitArt();
	//set symbol bounds
	card.setSymbolBounds = {x:0.9213, y:0.5910, width:0.12, height:0.0410, vertical:'center', horizontal: 'right'};
	resetSetSymbol();
	//watermark bounds
	card.watermarkBounds = {x:0.5, y:0.7762, width:0.75, height:0.2305};
	resetWatermark();
	//text
	loadTextOptions({
		mana: {name:'Mana Cost', text:'', y:0.0613, width:0.9292, height:71/2100, oneLine:true, size:71/1638, align:'right', shadowX:-0.001, shadowY:0.0029, manaCost:true, manaSpacing:0},
		title: {name:'Title', text:'', x:0.0854, y:0.0522, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0381, color:'white'},
		type: {name:'Type', text:'', x:0.0854, y:0.5664, width:0.8292, height:0.0543, oneLine:true, font:'belerenb', size:0.0324, color:'white'},
		rules: {name:'Rules Text', text:'', x:0.086, y:0.6303, width:0.828, height:0.2875, size:0.0362, color:'white'},
		pt: {name:'Power/Toughness', text:'', x:0.7928, y:0.902, width:0.1367, height:0.0372, size:0.0372, font:'belerenbsc', oneLine:true, align:'center', color:'white'}
	});
	notify('You can now make the art grayscale in the art tab!');
}
//loads available frames
loadFramePack();