YUI.add("moodle-atto_menutab-button",function(t,o){t.namespace("M.atto_menutab").Button=t.Base.create("button",t.M.editor_atto.EditorPlugin,[],{initializer:function(){this.get("host").editor.ancestor("body#page-mod-label-mod.format-menutab")&&this.addButton({title:"tab",icon:"i/folder",callback:this._changeStyle,buttonName:"tab"})},_changeStyle:function(t,o){document.execCommand("formatBlock",!1,"<h2>"),this.markUpdated()}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});