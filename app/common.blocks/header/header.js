
function onTuch(){
    if( device.mobile() || device.tablet() || device.ios() || device.ipad() || device.iphone() ||   device.ipod() || device.android()) {
        $('#scroller').kinetic({
	        x: false,
	        cursor: false,
	        filterTarget: function(target, e){
	        
	           if (!/down|start/.test(e.type))
	           {
	            return !(/area|a|input/i.test(target.tagName));
	        }
	        
    }
    });
    } 
}

onTuch();


