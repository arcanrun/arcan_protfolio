
function onTuch(){
    if( device.mobile() || device.tablet() || device.ios() || device.ipad() || device.iphone() ||   device.ipod() || device.android()) {
        $('#scroller').kinetic({
        x: false,
        cursor: false
    });
    } 
}

onTuch();

