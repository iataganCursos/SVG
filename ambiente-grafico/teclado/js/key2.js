teclaCaps = true;
teclaNum = true;
teclaScroll = true;

xTecladoCaps = "";
xTecladoNum = "";
xTecladoScroll = "";

Shift = "";
Ctrl = "";
Alt = "";

teclax = "";

document.getElementById('_key').innerHTML = '<span id="_Key1"></span><span id="_Keyz" style="visibility:hidden"></span><span id="_Keyx" style="visibility:hidden"></span><span id="_Keyc" style="visibility:hidden"></span><span id="_Keyv" style="visibility:hidden"></span><span id="_Keyb" style="visibility:hidden"></span><span id="_Keyn" style="visibility:hidden"></span><span id="_Keym" style="visibility:hidden"></span><span id="_Keyvirgula" style="visibility:hidden"></span><span id="_Keyponto" style="visibility:hidden"></span><span id="_Keypontoevirgula" style="visibility:hidden"></span>';

$(document).ready(function () {
    $(document).keydown(teclado1);
    $(document).keyup(teclado2);
})

function teclado1(event) {
    Shift = (event.shiftKey == true) ? "[Shift]" : "";
    Ctrl = (event.ctrlKey == true) ? "[Ctrl]" : "";
    Alt = (event.altKey == true) ? "[Alt]" : "";

    if (event.keyCode == 20 && teclaCaps == true) {
        xTecladoCaps = "[CAPS LOCK]";
        teclaCaps = false;
    } else if (event.keyCode == 20 && teclaCaps == false) {
        xTecladoCaps = "";
        teclaCaps = true;
    }

    if (event.keyCode == 144 && teclaNum == true) {
        xTecladoNum = "[NUM LOCK]";
        teclaNum = false;
    } else if (event.keyCode == 144 && teclaCaps == false) {
        xTecladoNum = "";
        teclaNum = true;
    }

    if (event.keyCode == 145 && teclaScroll == true) {
        xTecladoScroll = "[SCROLL LOCK]";
        teclaScroll = false;
    } else if (event.keyCode == 145 && teclaCaps == false) {
        xTecladoScroll = "";
        teclaScroll = true;
    }
/*
    for (x = 0; x <= 222; x = x + 1) {
        if (event.keyCode == 20 || event.keyCode == 144 || event.keyCode == 145 || event.keyCode == 16 || event.keyCode == 17 || event.keyCode == 18) {} else if (event.keyCode == x) {
            if (x >= 0 && x <= 9) {
                teclax = teclax + " 00" + x;
            } else if (x >= 10 && x <= 99) {
                teclax = teclax + " 0" + x;
            } else if (x >= 100) {
                teclax = teclax + " " + x;
            }
        }
    }
*/
/*
    _teclaz = document.getElementById("_Keyz");
    _teclax = document.getElementById("_Keyx");
	_teclac = document.getElementById("_Keyc");

    document.getElementById('_Keyz').innerHTML = (event.keyCode == 90) ? "[z]" : "";
    document.getElementById('_Keyx').innerHTML = (event.keyCode == 88) ? "[x]" : "";
    document.getElementById('_Keyc').innerHTML = (event.keyCode == 67) ? "[c]" : "";
*/
    if (event.keyCode == Keyz) {
        document.getElementById('_Keyz').innerHTML = "[" + Keyz + "]";
    }
    if (event.keyCode == Keyx) {
        document.getElementById('_Keyx').innerHTML = "[" + Keyx + "]";
    }
    if (event.keyCode == Keyc) {
        document.getElementById('_Keyc').innerHTML = "[" + Keyc + "]";
    }
    if (event.keyCode == Keyv) {
        document.getElementById('_Keyv').innerHTML = "[" + Keyv + "]";
    }
    if (event.keyCode == Keyb) {
        document.getElementById('_Keyb').innerHTML = "[" + Keyb + "]";
    }
    if (event.keyCode == Keyn) {
        document.getElementById('_Keyn').innerHTML = "[" + Keyn + "]";
    }
    if (event.keyCode == Keym) {
        document.getElementById('_Keym').innerHTML = "[" + Keym + "]";
    }
    if (event.keyCode == Keyvirgula) {
        document.getElementById('_Keyvirgula').innerHTML = "[" + Keyvirgula + "]";
    }
    if (event.keyCode == Keyponto) {
        document.getElementById('_Keyponto').innerHTML = "[" + Keyponto + "]";
    }
    if (event.keyCode == Keypontoevirgula) {
        document.getElementById('_Keypontoevirgula').innerHTML = "[" + Keypontoevirgula + "]";
    }

    teclax = document.getElementById('_Keyz').innerHTML + document.getElementById('_Keyx').innerHTML + document.getElementById('_Keyc').innerHTML + document.getElementById('_Keyv').innerHTML + document.getElementById('_Keyb').innerHTML + document.getElementById('_Keyn').innerHTML + document.getElementById('_Keym').innerHTML + document.getElementById('_Keyvirgula').innerHTML + document.getElementById('_Keyponto').innerHTML + document.getElementById('_Keypontoevirgula').innerHTML;

    tecla = "[" + event.keyCode + "]";

    sTeclado = xTecladoCaps + xTecladoNum + xTecladoScroll + Shift + Ctrl + Alt + tecla + "(" + teclax + ")";

    $("#_Key1").text(sTeclado);

}

function teclado2(event) {

    Shift = (event.shiftKey == true) ? " [Shift] " : "";
    Ctrl = (event.ctrlKey == true) ? " [Ctrl] " : "";
    Alt = (event.altKey == true) ? " [Alt] " : "";
/*
    _teclaz = document.getElementById("_Keyz");
    _teclax = document.getElementById("_Keyx");
	_teclac = document.getElementById("_Keyc");

    document.getElementById('_Keyz').innerHTML = (event.keyCode == 90) ? "[z]" : "";
    document.getElementById('_Keyx').innerHTML = (event.keyCode == 88) ? "[x]" : "";
    document.getElementById('_Keyc').innerHTML = (event.keyCode == 67) ? "[c]" : "";
*/

    if (event.keyCode == Keyz) {
        document.getElementById('_Keyz').innerHTML = "";
    }
    if (event.keyCode == Keyx) {
        document.getElementById('_Keyx').innerHTML = "";
    }
    if (event.keyCode == Keyc) {
        document.getElementById('_Keyc').innerHTML = "";
    }
    if (event.keyCode == Keyv) {
        document.getElementById('_Keyv').innerHTML = "";
    }
    if (event.keyCode == Keyb) {
        document.getElementById('_Keyb').innerHTML = "";
    }
    if (event.keyCode == Keyn) {
        document.getElementById('_Keyn').innerHTML = "";
    }
    if (event.keyCode == Keym) {
        document.getElementById('_Keym').innerHTML = "";
    }
    if (event.keyCode == Keyvirgula) {
        document.getElementById('_Keyvirgula').innerHTML = "";
    }
    if (event.keyCode == Keyponto) {
        document.getElementById('_Keyponto').innerHTML = "";
    }
    if (event.keyCode == Keypontoevirgula) {
        document.getElementById('_Keypontoevirgula').innerHTML = "";
    }

    teclax = document.getElementById('_Keyz').innerHTML + document.getElementById('_Keyx').innerHTML + document.getElementById('_Keyc').innerHTML + document.getElementById('_Keyv').innerHTML + document.getElementById('_Keyb').innerHTML + document.getElementById('_Keyn').innerHTML + document.getElementById('_Keym').innerHTML + document.getElementById('_Keyvirgula').innerHTML + document.getElementById('_Keyponto').innerHTML + document.getElementById('_Keypontoevirgula').innerHTML;

    tecla = "";

    sTeclado = xTecladoCaps + xTecladoNum + xTecladoScroll + Shift + Ctrl + Alt + tecla + "(" + teclax + ")";

    $("#_Key1").text(sTeclado);
}