// ==UserScript==
// @name         Zombsroyale.io AIMBOT - Zombsroyaleio Hacks - Best Zombsroyale Cheat 2019
// @description  Zombsroyaleio Mods Features: Aimbot, Change Scope, Auto Heal, Fast Loot, Bunny Hop
// @namespace    iomods.org
// @author       iomods.org
// @version      1.1
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/zombsroyaleio.user.js
// @downloadURL  https://iomods.org/mods/zombsroyaleio.user.js
// @copyright    2018, AlekPet (https://github.com/AlekPet)
// @match        *://zombsroyale.io/*
// @run-at document-end
// @grant GM_setValue
// @grant GM_getValue
// @grant GM_addStyle
// @grant GM_getResourceText
// @require https://code.jquery.com/jquery-3.1.0.min.js
// @resource scopes https://github.com/AlekPet/Change-the-scope-to-surviv.io/raw/master/assets/json/scopes.json
// ==/UserScript==

GM_addStyle(`
.mPanel_cur {
position: fixed;
top: 5%;
left: 50%;
background: #dadada;
max-width: 650px;
width: 650px;
z-index: 4;
border: 1px solid silver;
box-shadow: 2px 2px 5px #847b7b;
margin-left: -325px;
text-align: center;
display: none;
}
.mPanel_cur_title {
background: silver;
font: bold 1em monospace;
padding: 5px;
color: white;
text-shadow: 1px 1px 3px darkblue;
border-bottom: 1px dotted white;
user-select: none;
}
.mPanel_cur_title > div{
float:right;
}
.mPanel_cur_title > div:hover {
color: #d1fffb;
}
.table_box{
display: table
}
.table_box > div{
display: table-cell
}
.rightPanel_options{
text-shadow: 1px 1px 3px darkgreen;
background: linear-gradient(to right, #62a965,#0e2f0e);
color: #ffffff;
border-left: 1px dotted white;
padding: 5px;
}
.rightPanel_options_title {
background: linear-gradient(#69e815,#3f7703);
color: white;
padding: 2px 0;
user-select: none;
}
.rightPanel_options_inside {
border: 1px solid;
width: 150px;
overflow-y: auto;
}
.mPanel_cur_list_box {
background: #ffffff;
width: 80%;
}
.optionFiels {
border-top: 1px dotted;
}
ul.list_cur {
padding: 0;
margin: 0;
height: 550px;
width: 480px;
overflow-y: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
}
.list_cur > li {
/*min-width: 88px;
min-height: 88px;
max-height: 120px;
width: 88px;
height: 88px;
overflow: hidden;*/
}
.list_cur > .element_cur_cont {
list-style: none;
display: inline-block;
padding: 5px;
text-align: center;
border: 1px dotted silver;
margin: 5px;
cursor: pointer;
vertical-align: top;
background: linear-gradient(to right bottom, silver,white);
flex: 1 0 88px;
}
.element_cur_cont:hover {
background: linear-gradient(#00ffff75,#dbff005c);
}
.acive_cursor{
background: linear-gradient(#00ffff75,#dbff005c) !important;
}
.element_cur_title {
color: black;
text-shadow: 1px 1px 3px darkgrey;
word-wrap: break-word;
font-size: 0.8em;
}
.mPanel_cur_foot {
background: #757574;
padding: 3px;
border-top: 1px dotted white;
color: antiquewhite;
text-shadow: 1px 1px 3px darkgreen;
}
.infoBlock {
float: right;
}
.infoBlock>a{
font-size: 0.6em;
margin-top: 4px;
padding: 2px;
text-decoration:none;
}
.cur_sel_button_box {
display: inline-block;
}
.cur_button {
border: 1px solid silver;
padding: 3px;
font-size: 0.7em;
cursor: pointer;
user-select: none;
display: inline-block;
margin-left:10px;
}
.add_cur{
background: linear-gradient(#b3b766,#07b994);
color:white
}
.add_cur:hover{
background: linear-gradient(#e7f134,#00ffca);
color: #424242;
}
.create_cur {
background: linear-gradient(#b3b766,#07b994);
color: white;
}
.create_cur {
background: linear-gradient(#ff8a00,#ff6161);
color: white;
}
.del_cur{
display:none;
background:linear-gradient(#b76666,#b90776);
}
.del_cur:hover{
background: linear-gradient(#c12b2b,#d89cc1) !important;
color: white;
}
.checkbox_del_cur {
}
.checkbox_edit_cur {
font-size: 0.6em;
vertical-align: text-top;
background: limegreen;
border: 0;
color: white;
border-radius: 4px;
text-shadow: 1px 1px 3px black;
cursor:pointer;
}
.checkbox_edit_cur:hover {
background: #ff9b00;
}
.zomb_btn-red {
background: rgb(175, 80, 80);
border-bottom: 2px solid rgb(122, 56, 56);
box-shadow: rgb(122, 56, 56) 0px -2px inset;
color: #fff;
cursor: pointer;
font-size: 12px;
position: fixed;
text-shadow: 0 1px 2px rgba(0,0,0,.25);
top: 50%;
right: 0;
display: block;
opacity: 0.7;
transform: translate(0, -20px) rotateZ(-90deg);
transform-origin: bottom right;
height: 25px;
width: 105px;
line-height: 20px;
border: 0;
border-radius: 5px;
box-sizing: border-box;
margin-bottom: 8px;
text-align: center;
text-decoration: none;
z-index:999;
}
.zomb_btn-darken:active, .zomb_btn-darken:hover {
color: inherit;
-webkit-filter: brightness(80%);
filter: brightness(80%);
transition: all .25s ease;
}
.makeCursor_form {
position: fixed;
top: 20%;
left: 50%;
width: 350px;
margin-left: -180px;
border: 1px solid silver;
background: #dadada;
display: none;
box-shadow: 3px 3px 5px silver;
z-index: 5;
}
.makeCursor_form_title {
background: darkgrey;
color: white;
text-shadow: 1px 1px 3px darkolivegreen;
padding: 3px;
border-bottom: 1px dotted;
font: bold 1em monospace;
}
.makeCursor_form_title > div {
float: right;
cursor: pointer;
}
.makeCursor_form_title > div:hover {
color: #d1fffb;
}
.maleCursor_form_body input {
width: 80%;
margin: 5px;
padding: 2px;
border: 1px dotted #04fbc6;
}
.maleCursor_form_body > .form_field{

}
.maleCursor_form_body span {
color: #635e5e;
font: normal 1em monospace;
}
.maleCursor_form_foot {
padding: 5px;
background: whitesmoke;
}
.cur_preview {
border: 1px dotted #0d6b57;
width: 50%;
margin: 10px auto;
padding: 5px;
background: floralwhite;
}
.cur_preview > p {
background: #b7b2b2;
padding: 0px;
margin: 0;
color: white;
}
.cur_preview > img {
margin: 10px;
}
.drawSelf {
font-size: 0.9em;
padding: 3px;
background: #b5c5c3;
}
.drawSelf > a{
font-size: 0.9em;
}
.cur_overlay {
background: #000000cc;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 5;
display:none;
}
img#image_aim {
position: absolute;
z-index: 6;
}
.colorchange_cur {
width: 20px;
height: 20px;
background: radial-gradient(red,orange,yellow,green,cyan,blue,purple);
border-radius: 10px;
display: inline-block;
margin-right: 2px;
transition: 1s all;
}
.colorchange_cur:hover {
background: radial-gradient(purple,blue,cyan,green,yellow,orange,red);
}
.colorChangeButtons{
width: 70px;
margin: 2px;
}
#setChangeColor {
background: linear-gradient(#669ab7,#0773b9);
margin-top: 10px;
}
#setChangeColor:hover {
background: linear-gradient(#00a4ff,#043656);
}
#setDefaultChangeColor {
background: linear-gradient(#b76666,#b90707);
}
#setDefaultChangeColor:hover {
background: linear-gradient(#ff0000,#5f0303);
}
.canvasColor{
width: 128px;
height: 128px;
border: 1px dotted;
margin: 0 auto;
display: table;
}
.canvasColor>div{
display: table-cell;
vertical-align: middle;
}
.font_8{
font-size: 0.8em;
}
.font_7{
font-size: 0.7em;
}
.font_6{
font-size: 0.6em;
}
`);

(function() {
    'use strict';
    const cursorList = JSON.parse(GM_getResourceText('scopes')).scopes || [{name:"Scope 1",cururl:"http://www.rw-designer.com/cursor-view/101646.png",active:false},
                                                                           {name:"Scope 2",cururl:"http://www.rw-designer.com/cursor-view/111928.png",active:false},
                                                                           {name:"Scope 3",cururl:"http://www.rw-designer.com/cursor-view/111937.png",active:false},
                                                                           {name:"Scope 4",cururl:"http://www.rw-designer.com/cursor-view/78056.png",active:false},
                                                                           {name:"Scope 5",cururl:"http://www.rw-designer.com/cursor-view/97540.gif",active:false},
                                                                           {name:"Scope 6",cururl:"https://image.flaticon.com/icons/png/128/487/487009.png",active:false}],
          lang = {
              ru:{
                  form_title: "Выбор прицела",
                  addCrosshair: "Добавить прицел",
                  editCrosshair: "Правка",
                  editComplete: "Прицел был отредактирован!",
                  editEditApply: "Применить изменения",
                  delCrosshair: "Удалить прицел(ы)?",
                  delComplete: "Прицел(ы) были удалены!",
                  selectCrosshair: "Выбрать: ",
                  scopeName: "Название прицела (необяз.)",
                  scopeLink: "Ссылка прицела (png,gif,jpg,cur,base64)",
                  errorName: "Внимание:\nПоле имени не задано, будет использовано случайное название!\nНазвание: ",
                  errorLinkEmpty: "Поле ссылки пустое!",
                  errorLink: "Поле ссылки указано неверно!",
                  errorImage: "Размер изображения больше 128x128 px, или равно 0x0 px, или не определенно!",
                  errorAdd: "Сообщение:\nПрицел не был добавлен из-за неверно заданных параметров!",
                  addComplete: "Сообщение:\nПрицел был успешно добавлен!",
                  name: "Название: ",
                  link: "Ссылка: ",
                  preview: "Предпросмотр",
                  drawSelf: "Нарисовать свой ",
                  drawSelfInstructions: "File > New\nSet size <= 128px\nРисуем прицел\nSave as data URL\nКопиуем код и вставляем в поле Ссылки",
                  scopeSite: "Еще прицелы",
                  createScope: "Создать прицел",
                  alertMesImage: ["Внимание:\nРазмер изображения ","Максимально допустимый размер изображения 128x128px!\nИначе работать не будет!\nПроверить прицел можно, если навести на рисунок..."],
                  selectScope: "Выбрать прицел",
                  form_close: "Закрыть",
                  resetDefault: "Загрузить стандартные",
                  resetDefaultCompete: "Стандартные прицелы были загружены!",
                  resetQuestion: "Вы действительно хотите загрузить стандартные прицелы?\nВсе ваши добавленные прицелы, буду удалены?",
                  resetQuestionFisrt: "Загрузить стандартный набор прицелов?",
                  laserColor: "Цвет луча:\nПо умолчанию: red",
                  laserWidth: "Толщина луча:\nПо умолчанию: 2",
                  laserParmDotted: "Параметры пунктира:\nПо умолчанию: 5,15",
                  laserDottedOn: "Включить пунктир?",
                  rightOptionsTitle: "Опции",
                  selectAll: "Выбрать все",
                  deselectAll: "Убрать выделение",
                  buttonInGame: "Кнопка в игре",
                  buttonInGameInfo: "Показывать кнопку \"Выбрать прицел\" в игре",
                  laserSaveSetting:"Сохранить настройки лазера?",
                  laser: "Лазер",
                  changeColor: "Изменить цвет/размер",
                  applyColor: "Применить",
                  applyColorHint: "Применить выбранный цвет и размер",
                  resetColor: "Сбросить",
                  resetColorHint: "Установить значение по умолчанию",
                  resetColorAnswer:"Сбросить настройки цвета и размера?",
                  not_selected: "Не выбран",
                  input_colors: ["Красный","Зеленый","Синий"],
                  error_ChangeColor: "Выберите прицел, для редактирования цвета и размера!\nНажмите на радужный кружок, возле прицелов!",
                  scopeSize: "Размер",
                  donate: ["Поддержка","Поддержать автора"]
              },
              en:{
                  form_title: "Select scope",
                  addCrosshair: "Add scope",
                  editCrosshair: "Edit",
                  editComplete: "The scope was edited!",
                  editEditApply: "Apply changes",
                  delCrosshair: "Remove scope(s)?",
                  delComplete: "The scope(s) have been removed!",
                  selectCrosshair: "Select: ",
                  scopeName: "Name for the sight (opt.)",
                  scopeLink: "Sight link (png,gif,jpg,cur,base64)",
                  errorName: "Warning:\nthe name field is not set, a random name will be used!\nName: ",
                  errorLinkEmpty: "The link Field is empty!",
                  errorLink: "The link Field is incorrect!",
                  errorImage: "The image Size is greater than 128x128 px, or equal to 0x0 px, or indefinite!",
                  errorAdd: "Message:\nThe sight was not added due to incorrect parameters!",
                  addComplete: "Message:\nSight was successfully added!",
                  name: "Name: ",
                  link: "Link: ",
                  preview: "Preview",
                  drawSelf: "Draw your own ",
                  drawSelfInstructions: "File > New\nSet size <= 128px\nPaint on canvas\nSave as data URL\nCopy code and past in the Link",
                  scopeSite: "More sights",
                  createScope: "Create sight",
                  alertMesImage: ["Attention:\nImage Size", "The maximum image size is 128x128px!\nOtherwise it will not work!\nIt is possible to check the sight if you look at the picture ..."],
                  selectScope: "Select scope",
                  form_close: "Close",
                  resetDefault: "Load default",
                  resetDefaultCompete: "Standard scopes have been loaded!",
                  resetQuestion: "Do you really want to load standard scopes?\nAll your added scopes will be deleted?",
                  resetQuestionFisrt: "Download the standard set of sights?",
                  laserColor: "Beam color:\nDefault: red",
                  laserWidth: "Beam width:\nDefault: 2",
                  laserParmDotted: "Dashed Parameters:\nDefault: 5,15",
                  laserDottedOn: "Enable dotted line?",
                  rightOptionsTitle: "Options",
                  selectAll: "Select All",
                  deselectAll: "Deselect All",
                  buttonInGame: "Button in the game",
                  buttonInGameInfo: "Show the \"Select Sight\" button in the game",
                  laserSaveSetting: "Save laser settings?",
                  laser: "Laser",
                  changeColor: "Change color/size",
                  applyColor: "Apply",
                  applyColorHint: "Apply selected color and size",
                  resetColor: "Reset",
                  resetColorHint: "Reset to default",
                  resetColorAnswer:"Do you want to reset the color and size settings?",
                  not_selected: "Not selected",
                  input_colors: ["Red", "Green", "Blue"],
                  error_ChangeColor: "Select the scope, to edit the color and size!\nClick on the rainbow circle, near the scopes!",
                  scopeSize: "Size",
                  donate: ["Donate","Donate to the author"]
              }
          },

          debug = false,

          myVersion = GM_info.script.version,

          defaultCursorImage = "https://github.com/AlekPet/Change-the-scope-to-surviv.io/raw/master/assets/images/default.png",

          nav_platform = window.navigator.platform.toLowerCase(),
          os_var = nav_platform.indexOf("win") > -1 ? "win" : nav_platform.indexOf("mac") ? "mac" : "other"

    var ObjSaveCursors = null, language = 'en-US',
        selLang = lang.en,

        current_game = location.href.includes("zombsroyale.io")?"zombsroyale":"surviv"

    language = window.navigator.userLanguage || window.navigator.language

    if(language.includes("ru")) selLang = lang.ru
    if(debug) console.log("Язык:", language, selLang)

    function loadStorage(){
        let ObjSaveCursors_tmp = GM_getValue('ObjSaveCursors');

        ObjSaveCursors = (ObjSaveCursors_tmp) ? JSON.parse(GM_getValue('ObjSaveCursors')) : {
            options: {
                firstRun: true,
                buttonShow: true,
                laserSetting:{enabled:false, color:"red", width: 2, dotted: {enabled: false, lines:"5,15"}}
            },
            cursorList:{},
            currentActive:null
        };
        // Доп. поля опций, если нет
        if(ObjSaveCursors.hasOwnProperty("options")){
            if(!ObjSaveCursors.options.hasOwnProperty("buttonShow")) ObjSaveCursors.options.buttonShow = true
            if(!ObjSaveCursors.options.hasOwnProperty("laserSetting")){
                ObjSaveCursors.options.laserSetting = {enabled:false, color:"red", width: 2, dotted: {enabled: false, lines:"5,15"}}
            }
        }

        if(debug) console.log(ObjSaveCursors)
        return (ObjSaveCursors.hasOwnProperty("options") && ObjSaveCursors.options.firstRun)?true:false
    }

    function saveToStorage(){
        try{
            var save_data = JSON.stringify(ObjSaveCursors);

            if(save_data.length>0 && save_data !== null && save_data !=="" && save_data !== undefined){
                GM_setValue('ObjSaveCursors', save_data);
                if(debug) console.log("Сохраненно: ",ObjSaveCursors);
            }
        }catch(e){
            console.log(e);
        }
    }

    function imageSizes(imgCur){
        let img = $("<img>")
        .one('load', function(){
            return {x:this.naturalWidth/2, y: this.naturalHeight/2}
        })
        .one('error', function(){
            return null
        }).attr('src',imgCur)
        }

    function setGameCursor(urlCur){
            // zombsroyale.io
            let x = document.getElementById("#canvas"),
                las = document.getElementById("linebetas")
            $(x).css({cursor:urlCur,transform:"scale(1.42857) !important"})
            $(las).css({cursor:urlCur,transform:"scale(1.42857) !important",position:"absolute",top:0,left:0})
    }

    function setCursor(cur = "crosshair", imgInside = null){
        if(debug) console.log(cur,imgInside)

        let urlCur = null
        if(cur == "crosshair" || imgInside == null){
            if(debug) console.log('Равен: ', cur)
            urlCur = cur
        } else {
            let x = imgInside.naturalWidth/2,
                y = imgInside.naturalHeight/2,

                set_cursor = cur.change_color && cur.change_color.src_new ? cur.change_color.src_new : cur.cururl

            urlCur = 'url("'+set_cursor+'") '+x+' '+y+', crosshair'

            if(debug) console.log('Применяем:', urlCur)
        }
        setGameCursor(urlCur)
    }

    function imageCursorAim(){
        if(this.checked){
            let imagecheckActive = returnActive(),
                imagesrc = imagecheckActive != null && imagecheckActive.length ? imagecheckActive[0].cururl: defaultCursorImage,
                $img = $("<img>").one('load', function(){

                    $(this).data('coord',{x:this.width/2, y: this.height/2})

                }).attr({'src':imagesrc,'id':'image_aim'})
            $("body").append($img)

            $(document).mousemove(function(event) {
                let imgData = $img.data('coord')
                if(typeof imgData.x == 'number'){
                    let x=event.pageX+1,//-imgData.x-1,
                        y=event.pageY+1//-imgData.y-1

                    $img.css({
                        "top": y + "px",
                        "left": x +"px"
                    });
                }
            })

        } else {
            $(document).off('mousemove')
            $("#image_aim").remove()
            $(document).mousemove = null
        }
    }

    function loadDefaultScopes(firststart = false){
        if(confirm(!firststart?selLang.resetQuestion:selLang.resetQuestionFisrt)){
            let fileScopes = GM_getResourceText('scopes')
            if(fileScopes.length){
                let convertJSON = JSON.parse(fileScopes).scopes
                if(ObjSaveCursors.hasOwnProperty("cursorList")){
                    ObjSaveCursors.cursorList = convertJSON;
                    saveToStorage()
                    alert(selLang.resetDefaultCompete)
                    updatePanel()
                }
            }
        }
    }

    function makeCnavas(){
            let canvas = document.getElementById("linebetas"),
                cvs = document.getElementById("#canvas"),
                ctx
            if(!canvas){
                canvas = document.createElement('canvas')
                canvas.setAttribute("style", "display:none;position:absolute;top:0;left:0;transform:scale(1.42857) !important;")
                canvas.id="linebetas"
                canvas.width=1920
                canvas.height=531
                cvs.parentNode.insertBefore(canvas, cvs.nextSibling)
            }
            if(canvas.getContext('2d')){
                ctx = canvas.getContext('2d')
                return {ctx: ctx, canvas: canvas, cvs: cvs}
            }
        return null
    }

    function betaLine(color = "red", widthLine = 2, dotted = null){
        let params = makeCnavas()
        if(params){
            $(document).mousemove(function(event){
                let w = params.canvas.width,
                    h = params.canvas.height
                $(params.canvas).attr({'width': params.cvs.width, 'height': params.cvs.height})
                params.ctx.beginPath()
                if(dotted != null) params.ctx.setLineDash(dotted);
                params.ctx.strokeStyle=color
                params.ctx.lineWidth=widthLine
                params.ctx.moveTo(w/2,h/2)

                let posXY = current_game == "zombsroyale" ? {x:event.pageX/1.42857, y:event.pageY/1.42857} : {x:event.pageX, y:event.pageY}

                os_var == "win" ? params.ctx.lineTo(posXY.x, posXY.y) : os_var == "mac" ? params.ctx.lineTo(2*posXY.x, 2*posXY.y) : params.ctx.lineTo(posXY.x, posXY.y)
                params.ctx.stroke();
            })
        }
    }

    function selectAllScopes(){
        let selectedClass = this.className == 'selectedall' ? true : false

        this.innerText = selectedClass ? selLang.deselectAll : selLang.selectAll

        $(".list_cur input.checkbox_del_cur").each(function(){
            this.checked = selectedClass
        })
        $(".checkbox_del_cur:checked").length ? $(".del_cur").fadeIn('slow').css("display","inline-block").text(`Удалить [${$(".checkbox_del_cur:checked").length}]`):$(".del_cur").fadeOut('slow')
    }

    // zombsroyale.io
    function checkCursorStartup(){
        if(debug) console.log("Game state:",game.currentGameState)
        //if(document.getElementsByTagName("canvas")[0].style.cursor.indexOf("data:image/cur") != -1){
        let states = ["MainMenu","Dead","loading","UiLoadingOverlay","UiGameOver","UiSpectator","VideoAd"]
        if(game.currentGameState && states.indexOf(game.currentGameState)<0){
            $("#linebetas").show()
            // $(".zomb_btn-red").show()
        } else {
            $("#linebetas").hide()
        }
    }

    function makeMenuButton(firststart = false){

        setTimeout(function() {
//tanitim belgeseli
var colorize,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "IOGAMESLIST.ORG", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "SLITHERE.COM" || value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET") { colorize = true; } else { colorize = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
if(colorize == false){ministyler = "color:white;font-size:12px;padding:3px;";} else {ministyler = "color:yellow;font-size:12px;padding:3px;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+'</a> - ';
}

//genel isimlendirme ve ayarlar
 this.settings = {
            feature1: "Show FPS",
            feature2: "Aimbot",
            feature3: "Firebot",
            feature4: "Auto Heal",
            feature5: "Scope Mode",
            feature6: "Extra Speed",
            feature7: "Show Players",
            feature8: "Better Movements",
            feature9: "Extra Features+",
            feature10: "Adblock Plus+",
            feature11: "Zoom In/Out",
            feature12: "Rainbow BG",
            feature13: "Change BG",
     l1: "slithere.com",
     l2: "krunkerio.net",
     l3: "krunkerio.org",
     l4: "zombsroyaleio.org",
     l5: "survivio.info",
     l6: "skribbl-io.net",
     l7: "mope-io.net",
     l8: "moomooioplay.com",
     l9: "shellshockio.org",
     l10: "iogameslist.org",
     l11: "shellshockio.org",
     l12: "diepioplay.com",
     l13: "diepioplay.org",
     string: "<a style=\"padding-right: 12px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 12px;\"></a>",
     buttonpadder: "padding-left: 2px;",
     locationer: "location=yes,scrollbars=yes,status=yes,height=570,width=520",
     locationer2: "location=yes,scrollbars=yes,status=yes,left=800,height=570,width=520",
	 optionstyler: "font-weight:bold;color:black;font-size:14px;",
     optionstyler2: "font-weight:bold;color:black;font-size:14px;",
     optionstyler3: "color:black;font-size:11px;",
     facebooker: '<div id="fb-root" style="display: inline-block;"></div><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v3.2"></script><div class="fb-like" style="display: inline-block;" data-href="https://facebook.com/slitherecom" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>',
     youtuber: "<script src=\"https://apis.google.com/js/platform.js\"></script><div class=\"g-ytsubscribe\" data-channelid=\"UCy6xGaMhm74YeHMDGgEr7kg\" data-layout=\"default\" style=\"display: inline-block;\" data-count=\"default\"></div>",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     tablostyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(255, 255, 255, 0.3);",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
  	 imagelist: '<a href="https://instagram.com/aecicekdagi" target="_blank"><img src="https://iomods.org/mods/instagram.jpg"></a> <a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg"></a> <a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg"></a></br>',
 };

//degisenkisimlar
$('.mPanel_cur').append('<div style="'+this.settings.formstyle+'"><div class="option1"></div>'+this.settings.imagelist+''+this.settings.youtuber+''+this.settings.facebooker+'</div>');
$('.list_cur').prepend('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l1+'" target="blank">'+this.settings.feature1+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\'http://'+this.settings.l1+'\', \'_blank\', \''+this.settings.locationer+'\');" checked></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l2+'" target="blank">'+this.settings.feature2+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l2+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l3+'" target="blank">'+this.settings.feature3+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l3+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l4+'" target="blank">'+this.settings.feature4+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l4+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l5+'" target="blank">'+this.settings.feature5+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l5+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l6+'" target="blank">'+this.settings.feature6+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l6+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l7+'" target="blank">'+this.settings.feature7+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l7+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l8+'" target="blank">'+this.settings.feature8+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l8+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l9+'" target="blank">'+this.settings.feature9+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l9+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l10+'" target="blank">'+this.settings.feature10+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l10+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l12+'" target="blank">'+this.settings.feature12+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\'http://'+this.settings.l12+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l13+'" target="blank">'+this.settings.feature13+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\'http://'+this.settings.l13+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option7"></div>');
$('.option6').on('change', '.renkcont', function() { colorfulmod(); });
$('.option6').on('change', '.bgcont', function() { changebackground(); });
$('.option7').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l11+'" target="blank">'+this.settings.feature11+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\'http://'+this.settings.l11+'\', \'_blank\', \''+this.settings.locationer2+'\');"> <output style="'+this.settings.optionstyler2+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.settings.optionstyler3+'" href="http://'+this.settings.l11+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option7').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.settings.liststyler+'">'+text+'</div>');
    }, 0);

 let $openSelectCur = null
            // zombsroyale.io
            $openSelectCur = $('<h2><a class="zomb_btn-red zomb_btn-darken zomb_menu-option">ACTIVATE HACKS</a></h2>').click(function(){
                if(firststart && ObjSaveCursors.options.firstRun) {
                    if(debug) console.log("Прицелы не найдены, загрузить стандартные!")
                    loadDefaultScopes(firststart)

                    ObjSaveCursors.options.firstRun = false
                    saveToStorage()
                }
                $(".mPanel_cur").fadeToggle('slow')
            })
            $openSelectCur.insertAfter(".canvas-loading")
            setInterval(checkCursorStartup, 1000);
    }

    function makePanel(firststart){
        let $mPanel = $("<div class='mPanel_cur'>"+
                        "<div class='mPanel_cur_title'>"+selLang.form_title+"  v"+myVersion+"<div style='cursor:pointer;' title='"+selLang.form_close+"'>X</div></div>"+
                        "<div class='table_box'>"+
                        "<div class='mPanel_cur_list_box'><ul class='list_cur'></ul></div>"+
                        "<div class='rightPanel_options'>"+
                        "<div class='rightPanel_options_inside'>"+
                        "<div class='rightPanel_options_title'>"+selLang.rightOptionsTitle+"</div>"+
                        "<div class='optionFiels'><a href='javascript:void(0)' title='"+selLang.selectAll+"' id='selectAlltScopes' style='color: cyan !important;font-size: 0.6em;text-decoration: none;'>"+selLang.selectAll+"</a></div>"+
                        "<div class='optionFiels'><a href='javascript:void(0)' title='"+selLang.resetDefault+"' id='resetDefaultScopes' style='color: cyan !important;font-size: 0.6em;text-decoration: none;'>"+selLang.resetDefault+"</a></div>"+
                        "<div class='optionFiels font_7'>"+selLang.buttonInGame+": <input type='checkbox'"+(ObjSaveCursors.options.buttonShow?"checked":"")+" title='"+selLang.buttonInGameInfo+"' id='buttin_scope_in_game'></div>"+
                        "<div class='optionFiels'>"+selLang.laser+": <input type='checkbox' title='"+selLang.laser+"' id='LineLaser' "+(ObjSaveCursors.options.laserSetting.enabled?"checked":"")+ "></div>"+
                        "<div class='optionFiels' style='margin-top: 20%;'><div class='font_8'>"+selLang.changeColor+"</div>"+
                        "<div class='colorRange'>"+
                        "<div class='canvasColor'><div><canvas id='canvasChangeColor' style='width:auto;height:auto;'></canvas></div></div>"+
                        "<span style='color:red;'>"+selLang.input_colors[0].charAt(0)+"</span>:<input type='range' max='255' min='0' class='rangeColors' style='width: 100px;' value='0' title='"+selLang.input_colors[0]+"'><br>"+
                        "<span style='color:green;'>"+selLang.input_colors[1].charAt(0)+"</span>:<input type='range' max='255' min='0' class='rangeColors' style='width: 100px;' value='0' title='"+selLang.input_colors[1]+"'><br>"+
                        "<span style='color:blue;'>"+selLang.input_colors[2].charAt(0)+"</span>:<input type='range' max='255' min='0' class='rangeColors' style='width: 100px;' value='0' title='"+selLang.input_colors[2]+"'><br>"+
                        "<div>"+
                        "<span style='color:pink;'>"+selLang.scopeSize+":</span><br><input type='range' id='rangeSize' max='128' min='1' step='1' style='width: 100px;' value='0' title='Size scope'><br><span id='rangeSizeValue'>0x0</span>"+
                        "</div>"+
                        "<div id='setChangeColor' class='cur_button colorChangeButtons' title='"+selLang.applyColorHint+"'>"+selLang.applyColor+"</div>"+
                        "<div id='setDefaultChangeColor' class='cur_button colorChangeButtons' title='"+selLang.resetColorHint+"'>"+selLang.resetColor+"</div>"+
                        "</div>"+
                        "</div>"+
                        "<div class='optionFiels'><span style='display: none'>Image aim:<input type='checkbox' id='mouseimgaim' /></span></div>"+
                        "</div>"+
                        "</div>"+
                        "</div>"+
                        "<div class='mPanel_cur_foot'>"+
                        "<div class='cur_sel_button_box'></div>"+
                        "<div class='infoBlock'>"+
                        "<a id=\"fps\" class=\"fps\"></a>"+
                        "</div>"+
                        "</div>"+
                        "</div>"),
            $cur_overlay = $("<div class='cur_overlay'>"),
            closeX = $($mPanel).find(".mPanel_cur_title > div").click(function(){
                $mPanel.fadeOut()
            }),
            bInG = $($mPanel).find("#buttin_scope_in_game").change(function(){
                if(ObjSaveCursors.hasOwnProperty("options") && ObjSaveCursors.options.hasOwnProperty("buttonShow")){
                    ObjSaveCursors.options.buttonShow = this.checked
                    saveToStorage();
                    if(debug) console.log('Показывать кнопку в игре:',this.checked)
                    $("#buttonInGame").css("display", this.checked ? "block" : "none")
                }
            }),
            $LineLaser = $($mPanel).find("#LineLaser").change(function(){

                if(this.checked){
                    let laserSetting = ObjSaveCursors.options.laserSetting,
                        ls_color = laserSetting.color || "red",
                        ls_width = laserSetting.width || "2",
                        ls_dotted_lines = laserSetting.dotted.lines || "5,15",

                        color = prompt(selLang.laserColor, ls_color),
                        widthLine = prompt(selLang.laserWidth, ls_width),
                        dotted_enabled = false,
                        dotted = (dotted_enabled = confirm(selLang.laserDottedOn)) ? prompt(selLang.laserParmDotted, ls_dotted_lines) : null

                    // Save setting
                    if(confirm(selLang.laserSaveSetting)){
                        if(ObjSaveCursors.hasOwnProperty("options") && ObjSaveCursors.options.hasOwnProperty("laserSetting")){
                            ObjSaveCursors.options.laserSetting = {enabled:this.checked, color:color, width: widthLine, dotted: {enabled: dotted_enabled, lines:dotted}}
                            saveToStorage();
                        }
                    }

                    if(dotted != null) dotted = dotted.split(',')

                    betaLine(color,widthLine,dotted)
                } else {
                    ObjSaveCursors.options.laserSetting.enabled = this.checked
                    saveToStorage();
                    $("#linebetas").remove()
                }
            }),
            $selectAll = $($mPanel).find("#selectAlltScopes").click(function(){
                $(this).toggleClass("selectedall")
                selectAllScopes.call(this);
            }),
            resetDefaultScopes = $($mPanel).find("#resetDefaultScopes").click(loadDefaultScopes),
            $addCursor = $("<div class='cur_button add_cur'>").attr('title',selLang.addCrosshair).text(selLang.addCrosshair).click(makeFormAddCursor),
            $delCursor = $("<div class='cur_button del_cur'>").attr('title',selLang.delCrosshair).text(selLang.addCrosshair).click(delCursor),
            $cur_sel_button_box = $($mPanel).find(".cur_sel_button_box").append($addCursor,$delCursor),
            $mouseimgaim = $($mPanel).find("#mouseimgaim").change(function(){
                imageCursorAim.call(this)
            })

        if($LineLaser.is(":checked")){
            let laserSetting = ObjSaveCursors.options.laserSetting,
                ls_color = laserSetting.color || "red",
                ls_width = laserSetting.width || "2",
                ls_dotted_enabled = laserSetting.dotted.enabled || false,
                ls_dotted_lines = laserSetting.dotted.lines || "5,15"

            ls_dotted_lines =(ls_dotted_enabled && ls_dotted_lines != null)?ls_dotted_lines.split(','):null

            betaLine(ls_color,ls_width,ls_dotted_lines)
        }

        $mPanel.append($cur_overlay);
        $("body").append($mPanel)
    }

    //fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
$('.mPanel_cur').css('background-color',''+changecolor+'');
    $('.list_cur').css('background-color',''+changecolor+'');
        $('.rightPanel_options').css('background-color',''+changecolor+'');
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["#0085ff"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
                $(".mPanel_cur").css("background-color",selectedcolor);
            $(".list_cur").css("background-color",selectedcolor);
           $(".rightPanel_options").css("background-color",selectedcolor);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}

    function updatePanel(firststart = false){
        let ListBox = $(".mPanel_cur_list_box > ul").empty(),
            activeTrue = false,

            divDef = $("<li class='element_cur_cont'>").attr('title',"Default").click(function(){
                $(".list_cur > li.acive_cursor").removeClass("acive_cursor")
                $(this).addClass("acive_cursor")
                checkActive(null)
                setCursor("crosshair")
                saveToStorage()
            }),
            divDefTitle = $("<span class='element_cur_title'>").text("Default"),
            divDefImg = $("<img width='48'>").attr("src", defaultCursorImage),
            divDefImgBox = $("<div class='element_cur_title'>").append(divDefImg)

        divDef.append(divDefImgBox,divDefTitle)
        $(ListBox).append(divDef)

        $.each(ObjSaveCursors.cursorList, function(index, el){
            let self = el,
                divCont = $("<li class='element_cur_cont'>").attr('title',selLang.selectCrosshair+self.name).click(function(){
                    let imgInside = $(this).find("img").get(0)
                    $(".list_cur > li.acive_cursor").removeClass("acive_cursor")
                    $(this).addClass("acive_cursor")
                    checkActive(self)
                    setCursor(self, imgInside)
                    saveToStorage()
                }),
                divTitle = $("<span class='element_cur_title'>").text(self.name.length>15?self.name.substr(0,12)+"...":self.name),
                divImg = $("<img width='48'>").one('load',function(){
                    $(this).css("cursor","url("+this.src+")"+this.naturalWidth/2+" "+this.naturalHeight/2+", default")
                }).attr("src", self.change_color ? self.change_color.src_new : self.cururl),
                divImgBox = $("<div class='element_cur_title'>").append(divImg),
                delCheck = $("<input class='checkbox_del_cur' type='checkbox' title='Удаление'>").click(function(event){
                    event.stopPropagation();
                }),
                editButton = $("<input type='button' class='checkbox_edit_cur' value='"+selLang.editCrosshair+"' title='"+selLang.editCrosshair+"'>").click(function(event){
                    event.stopPropagation();
                    makeFormAddCursor(false, {element: self, index: index})
                })

            if(/^data:image/i.test(self.cururl)){
                let colorChange = $("<div class='colorchange_cur' title='"+selLang.changeColor+"'>").click(function(event){
                    event.stopPropagation();
                    changeColor({element: self, img: divImg, index: index})
                })

                divCont.append($("<p style='margin: 0;padding: 0;border-bottom: 1px dotted silver;'>").append(colorChange,editButton,delCheck),divImgBox,divTitle)
            } else {
                divCont.append($("<p style='margin: 0;padding: 0;border-bottom: 1px dotted silver;'>").append(editButton,delCheck),divImgBox,divTitle)
            }
            $(ListBox).append(divCont)

            if(self.active){
                activeTrue = true
                $(divCont).addClass("acive_cursor")

                divImg.one('load', function(){
                    setCursor(self, this)
                }).one('error', function(){
                    setCursor()
                })
            }
        })

        if(firststart || !activeTrue){
            $(".element_cur_cont:eq(0)").addClass("acive_cursor")
            setCursor("crosshair")
        }

        $(".checkbox_del_cur").on("change",function(){
            $(".checkbox_del_cur:checked").length ? $(".del_cur").fadeIn('slow').css("display","inline-block").text(`Удалить [${$(".checkbox_del_cur:checked").length}]`):$(".del_cur").fadeOut('slow')
        })
    }

    function defaultValueForm(elem){
        $(elem).find("#name_scope,#link_scope,#previewName,#previewImg").each(function(){
            switch(this.id){
                case 'name_scope':
                case 'link_scope': this.value = ''
                    break;
                case 'previewName': this.innerText='Default'
                    break;
                case 'previewImg': this.src = defaultCursorImage
                    break;
            }
        })
        $(".cur_preview").css('cursor','crosshair')
    }

    function ImgSizeData(img, val){
        $(img).one('load', function(){
            const w = this.naturalWidth,
                  h = this.naturalHeight
            if(w>128 || h>128) alert(selLang.alertMesImage[0]+w+"px x "+h+"px!\n"+selLang.alertMesImage[1])
            $(".cur_preview").css('cursor','url('+this.src+'), not-allowed')
            if(this.src !== defaultCursorImage) $(this).data("sizes", {w:w, h:h});
            else $(this).data("sizes", {w:null, h:null})
        }).one('error', function(){
            this.src = defaultCursorImage
            $(".cur_preview").css('cursor','crosshair')
        }).attr('src', val)
    }

    function makeFormAddCursor(editmake = false, params = null){
        let $makeCurForm = $(".makeCursor_form"),
            $cur_overlay = $(".cur_overlay")

        if($makeCurForm.length == 0){
            $makeCurForm = $("<div class='makeCursor_form'>")
            let htmlInner = "<div class='makeCursor_form_title'><span>"+selLang.addCrosshair+"</span><div title='"+selLang.form_close+"'>X</div></div>"+
                "<div class='maleCursor_form_body'>"+
                "<div class='form_field'><span>"+selLang.name+"</span><input type='text' id='name_scope' value='' maxlength='100' placeholder='"+selLang.scopeName+"'></div>"+
                "<div class='form_field'><span>"+selLang.link+"</span><input type='text' id='link_scope' value='' placeholder='"+selLang.scopeLink+"'></div>"+
                "<div class='cur_preview'><p>"+selLang.preview+"</p><img id='previewImg' src='"+defaultCursorImage+"' width='45'><div style='word-break: break-all;' id='previewName'>Default</div></div>"+
                "<div class='drawSelf' title='"+selLang.drawSelfInstructions+"'>"+selLang.drawSelf+"<a target='_blank' href='http://viliusle.github.io/miniPaint/' style='color:blue'>miniPaint</a><br>"+
                "<a target='_blank' title='"+selLang.scopeSite+"' style='color:red' href='https://thenounproject.com/search/?q=crosshairs'>"+selLang.scopeSite+"</a></div>"+
                "</div>"+
                "<div class='maleCursor_form_foot'>"+
                "<div class='cur_button create_cur' id='createCursor' title='"+selLang.createScope+"'>"+selLang.createScope+"</div>"+
                "</div>"

            $makeCurForm.html(htmlInner)

            $(".mPanel_cur").append($makeCurForm)

            $(".makeCursor_form_title > div").click(function(){
                $makeCurForm.fadeOut('slow', function(){
                    $cur_overlay.fadeOut('slow', function(){
                        defaultValueForm($makeCurForm)
                    })
                })
            })

            $("#name_scope").on('input', function(){
                $("#previewName").text($(this).val())
            })
            $("#link_scope").on('input', function(){
                let val = $(this).val().trim()
                ImgSizeData("#previewImg", val)
            })
        }
        // Show form
        $cur_overlay.fadeIn('slow', function(){
            if(editmake){
                $(".makeCursor_form_title > span").text(selLang.addCrosshair)
                $("#createCursor").text(selLang.createScope).off().click(function(){
                    add_edit_Cursor()
                })
            } else {
                $(".makeCursor_form_title > span").text(selLang.editCrosshair)

                $makeCurForm.find("#name_scope").val(params.element.name)
                $makeCurForm.find("#link_scope").val(params.element.cururl)
                ImgSizeData("#previewImg", params.element.cururl)

                $("#createCursor").text(selLang.editEditApply).off().click(function(){
                    if(params !== null && Object.keys(params).length) add_edit_Cursor(params)
                })
            }
            $makeCurForm.fadeIn('fast')
        })
    }

    function add_edit_Cursor(parametri = null){
        let $makeCurForm = $(".makeCursor_form"),
            $cursorName = $makeCurForm.find("#name_scope"),
            $cursorUrl = $makeCurForm.find("#link_scope"),
            $cur_overlay = $(".cur_overlay"),

            $previewImg = $makeCurForm.find("#previewImg")

        let cursorNameVal = $cursorName.val(),
            cursorUrlVal = $cursorUrl.val(),
            errors = false

        if(/^\s*$/i.test(cursorNameVal)){
            cursorNameVal="Croshair_"+Math.floor(Math.random()*10000)
            $cursorName.val(cursorNameVal)
            alert(selLang.errorName+cursorNameVal)
        }

        if(/^\s*$/i.test(cursorUrlVal)){
            alert(selLang.errorLinkEmpty)
            errors = true
        }

        if(!/(?:^https?:\/\/.*\.(?:png|jpg|jpeg|gif|cur|tiff)$|^data:image)/i.test(cursorUrlVal)){
            alert(selLang.errorLink)
            errors = true
        }

        if(!errors){
            const w = $previewImg.data("sizes").w || 0,
                  h = $previewImg.data("sizes").h || 0

            if(w>128 || h>128 || w == 0 || h == 0 || w == null || h == null){
                alert(selLang.errorImage)
                errors = true
            }
        }

        if(errors){
            alert(selLang.errorAdd)
            return
        }

        if(ObjSaveCursors.hasOwnProperty("cursorList")){
            let ovetMessage = selLang.addComplete
            if(parametri == null){
                ObjSaveCursors.cursorList.push({name:cursorNameVal, cururl:cursorUrlVal, active:false})
            } else {
                if(Object.keys(ObjSaveCursors.cursorList).length && Object.keys(parametri).length){
                    ObjSaveCursors.cursorList[parametri.index] = {name:cursorNameVal, cururl:cursorUrlVal, active:false}
                    ovetMessage = selLang.editComplete
                } else return
            }

            saveToStorage()

            $makeCurForm.fadeOut('slow', function(){
                $cur_overlay.fadeOut('slow', function(){
                    defaultValueForm($makeCurForm)
                })
            })

            updatePanel()
            alert(ovetMessage)

        }
    }

    function returnActive(){
        let activetrue = null
        if(ObjSaveCursors.hasOwnProperty("cursorList") && Object.keys(ObjSaveCursors.cursorList).length){
            activetrue = ObjSaveCursors.cursorList.filter((ix,elem)=>{
                return ix.active == true
            })
            return activetrue
        }
    }

    function checkActive(el){
        if(ObjSaveCursors.hasOwnProperty("cursorList") && Object.keys(ObjSaveCursors.cursorList).length){
            ObjSaveCursors.cursorList.map((ix,elem)=>{
                ix.active = false
                return ix.active
            })
            if(el !== null ) el.active = true
        }
    }

    function delCursor(){
        if(confirm(selLang.delCrosshair)){
            let arr_delete_cursors = []
            $(".list_cur").find("input[type=checkbox]").each(function(index,eleme){
                if($(this).is(':checked')){
                    arr_delete_cursors.push(index);
                }
            });
            arr_delete_cursors = arr_delete_cursors.reverse();
            for(var k in arr_delete_cursors){
                ObjSaveCursors.cursorList.splice(arr_delete_cursors[k],1);
            }
            saveToStorage()
            $(".del_cur").fadeOut('slow')
            updatePanel()
            alert(selLang.delComplete)
        }
    }

    function resize(valS){
        let canvas = document.getElementById("canvasChangeColor"),
            ctx = canvas.getContext("2d")

        $("<img>").one("load", function() {
            var oc = document.createElement('canvas'),
                octx = oc.getContext('2d');

            if(this.naturalWidth >= this.naturalHeight){
                canvas.width = valS;
                canvas.height = canvas.width * this.naturalHeight / this.naturalWidth;
            } else if(this.naturalWidth < this.naturalHeight){
                canvas.width = canvas.height * this.naturalWidth / this.naturalHeight;
                canvas.height = valS;
            }
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
            $("#rangeSizeValue").text(canvas.width+"x"+canvas.height)
        }).attr('src', $("#canvasChangeColor").data("imagesrc"))
    }

    function setSizeParams(can){
        $("#rangeSize").val(can.width >= can.height ? can.width : can.height)
        $("#rangeSizeValue").text(can.width+"x"+can.height)
    }

    function setColorsScope(){
        let can = document.getElementById("canvasChangeColor"),
            ctx = can.getContext("2d"),
            imgData = ctx.getImageData(0, 0, can.width, can.height),
            eli = document.getElementsByClassName("rangeColors"),
            r = parseInt(eli[0].value),
            g = parseInt(eli[1].value),
            b = parseInt(eli[2].value),
            a = 255

        for (var i = 0; i < imgData.data.length; i += 4) {

            imgData.data[i] = r; //r
            imgData.data[i + 1] = g; //g
            imgData.data[i + 2] = b; //b
            //imgData.data[i + 3] = a; // alpha
        }
        ctx.putImageData(imgData, 0, 0);
        $.data(can, "imagesrc", can.toDataURL("image/png"))
    }

    function setChangeColor(params){
        const eli = document.getElementsByClassName("rangeColors"),
              size = parseInt(document.getElementById("rangeSize").value),
              r=parseInt(eli[0].value),
              g=parseInt(eli[1].value),
              b=parseInt(eli[2].value),
              a = 255,
              canvas = document.getElementById("canvasChangeColor")

        if(Object.keys(ObjSaveCursors.cursorList[params.index]).length && canvas){
            if(!ObjSaveCursors.cursorList[params.index].hasOwnProperty('change_color')){
                ObjSaveCursors.cursorList[params.index].change_color = {colors:{r:r,g:g,b:b,a:a,size:size}, src_new: canvas.toDataURL("image/png")}
            } else {
                ObjSaveCursors.cursorList[params.index].change_color = {colors:{r:r,g:g,b:b,a:a,size:size}, src_new: canvas.toDataURL("image/png")}
            }
            if(debug) console.log("Цвета:",ObjSaveCursors.cursorList[params.index]);
            saveToStorage();
            updatePanel();
        } else alert("Object not found, or canvas not isset!");
    }

    function setDefaultCursorColors(params){
        if(params.element.hasOwnProperty("change_color") && Object.keys(params.element.change_color).length && params.element.change_color.hasOwnProperty("src_new")){
            if(confirm(selLang.resetColorAnswer)){
                delete ObjSaveCursors.cursorList[params.index].change_color
                saveToStorage();
                updatePanel();
                new Array().slice.call(document.getElementsByClassName("rangeColors")).forEach(function(el){el.value = 0})
                params.img.attr('src',params.element.cururl)
                changeColor(params)
            }
        }
    }

    function changeColor(params = null){
        let can, ctx,img

        can = document.getElementById("canvasChangeColor")
        ctx = can.getContext("2d")

        if(params != null && Object.keys(params).length){

            if(params.element.change_color && Object.keys(params.element.change_color.colors).length){
                let colors = params.element.change_color.colors,
                    a = colors.a,
                    inptuts_colors = document.getElementsByClassName("rangeColors")
                inptuts_colors[0].value = colors.r
                inptuts_colors[1].value = colors.g
                inptuts_colors[2].value = colors.b
                $("#rangeSize").data("sizeval",colors.size)
            } else {
                new Array().slice.call(document.getElementsByClassName("rangeColors")).forEach(function(el){el.value = 0})
            }

            img = new Image()
            img.onload = function() {
                can.width = this.naturalWidth
                can.height = this.naturalHeight
                ctx.drawImage(this, 0, 0)

                $.data(can, "imagesrc", this.src)
                setSizeParams(can)
            }
            img.src = params.img.attr('src')

            $("#setChangeColor").off().click(setChangeColor.bind(ctx, params))
            $("#setDefaultChangeColor").off().click(setDefaultCursorColors.bind(ctx, params))

        } else {
            can.width = 80
            can.height = 80
            ctx.font="10px Georgia";
            ctx.textAlign="center";
            ctx.fillStyle = "white";
            ctx.fillText(selLang.not_selected.toUpperCase(),can.width/2,can.height/2);

            let eli = document.getElementsByClassName("rangeColors")
            for (let i = 0; i < eli.length; i++) {
                eli[i].addEventListener("input", setColorsScope)
            }

            // Size
            $("#rangeSize").on("input", function(){
                resize(this.value)
            })

            $("#setChangeColor").add($("#setDefaultChangeColor")).off().click(function(){
                alert(selLang.error_ChangeColor)
            })
        }
    }

    function init(){
        let firststart = false;
        if(loadStorage()){
            firststart = true
            if(debug) console.log("Первый запуск!", firststart)
        }
        makeMenuButton(firststart)
        makePanel()
        updatePanel(firststart)
        changeColor()
    }
    init()
})();
