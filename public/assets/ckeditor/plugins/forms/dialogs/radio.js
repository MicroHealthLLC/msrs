CKEDITOR.dialog.add("radio",function(a){return{title:a.lang.forms.checkboxAndRadio.radioTitle,minWidth:350,minHeight:140,onShow:function(){delete this.radioButton;var e=this.getParentEditor().getSelection().getSelectedElement();e&&"input"==e.getName()&&"radio"==e.getAttribute("type")&&(this.radioButton=e,this.setupContent(e))},onOk:function(){var e,t=this.radioButton;t||((t=(e=this.getParentEditor()).document.createElement("input")).setAttribute("type","radio"),e.insertElement(t)),this.commitContent({element:t})},contents:[{id:"info",label:a.lang.forms.checkboxAndRadio.radioTitle,title:a.lang.forms.checkboxAndRadio.radioTitle,elements:[{id:"name",type:"text",label:a.lang.common.name,"default":"",accessKey:"N",setup:function(e){this.setValue(e.data("cke-saved-name")||e.getAttribute("name")||"")},commit:function(e){e=e.element,this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"value",type:"text",label:a.lang.forms.checkboxAndRadio.value,"default":"",accessKey:"V",setup:function(e){this.setValue(e.getAttribute("value")||"")},commit:function(e){e=e.element,this.getValue()?e.setAttribute("value",this.getValue()):e.removeAttribute("value")}},{id:"checked",type:"checkbox",label:a.lang.forms.checkboxAndRadio.selected,"default":"",accessKey:"S",value:"checked",setup:function(e){this.setValue(e.getAttribute("checked"))},commit:function(e){var t=e.element;if(CKEDITOR.env.ie){var i=t.getAttribute("checked"),n=!!this.getValue();i!=n&&(i=CKEDITOR.dom.element.createFromHtml('<input type="radio"'+(n?' checked="checked"':"")+"></input>",a.document),t.copyAttributes(i,{type:1,checked:1}),i.replace(t),n&&i.setAttribute("checked","checked"),a.getSelection().selectElement(i),e.element=i)}else e=this.getValue(),CKEDITOR.env.webkit&&(t.$.checked=e),e?t.setAttribute("checked","checked"):t.removeAttribute("checked")}},{id:"required",type:"checkbox",label:a.lang.forms.checkboxAndRadio.required,"default":"",accessKey:"Q",value:"required",setup:function(e){this.setValue(e.getAttribute("required"))},commit:function(e){e=e.element,this.getValue()?e.setAttribute("required","required"):e.removeAttribute("required")}}]}]}});