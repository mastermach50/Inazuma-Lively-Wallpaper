function livelyPropertyListener(name, val)
{
    if (name =="sessionMargin") {
        document.getElementsByTagName("session")[0].style.marginLeft = `${val}vw`;
    }

    if (name =="bgMargin") {
        document.getElementById("bgVideo").style.marginLeft = `${val}%`;
    }

    if (name =="bgVideo") {
        document.getElementsByTagName("video")[0].src =  val ;
    }

    if (name =="clockColor") {
        document.documentElement.style.setProperty('--clock-color', val);
    }

    if (name =="clockShadowColor") {
        document.documentElement.style.setProperty('--clock-shadow-color', val);
    }

}