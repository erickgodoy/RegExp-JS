jQuery.fn.extend({
     resaltar: function (busqueda, claseCSSbusqueda) {
          let regex = new RegExp("(<[^>]*>)|(" + busqueda.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1") + ')', 'ig');
          let nuevoHtml = this.html(this.html().replace(regex, function (a, b, c) {
               return (a.charAt(0) == "<") ? a : "<span class=\"" + claseCSSbusqueda + "\">" + c + "</span>";
          }));
          return nuevoHtml;
     }
});

jQuery.fn.extend({
     highlight: function (reg) {
          let nuevoHtml = this.html(this.html().replace(reg, '<span style="background-color: yellow; color: #000">$1</span>'));
          return nuevoHtml;
     }
});

function Buscar() {
     let cad = $("#texto1").html();
     let Reg = $("#cajaTexto1").val();
     let palabra = "(^" + Reg + "\\W" + "\|" + "\\W" + Reg + "\\W)";
     let exp = new RegExp(palabra, "gi");
     $("#texto1").highlight(exp);
     let res = cad.match(exp);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
     } else {
          alertify.error('No Encontrado', 10);
     }
}

function BuscarNumTelef() {
     let cad = $("#texto2").html();
     let Reg = /(\d\W(\d{3}|\W\d{3}\W)\W\d{3}\W\d{4}(\W(x|ext)\d{4}|)|\d{11})/g;
     let res = cad.match(Reg);
     $("#texto2").highlight(Reg);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
     } else {
          alertify.error('No Encontrado', 10);
     }
}

function BuscarCorreo() {
     let cad = $("#texto3").html();
     let Reg = /(\w+(\W|@)[a-zA-Z]+\.(com|c|es|org)(\.(pe)|))/g;
     let res = cad.match(Reg);
     $("#texto3").highlight(Reg);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
          // for(i=0;i<res.length;i++){  alertify.success(res[i],15);}
     } else {
          alertify.error('No Encontrado', 10);
     }
}


function BuscarURL() {
     let cad = $("#texto4").html();
     let Reg = /((https:\/\/|http:\/\/|)www.\w+(\.edu\.pe|\.gob|\.com|)\/?(\w+\?..\w+|\w+(\.\w+|)|))/g;
     let res = cad.match(Reg);
     $("#texto4").highlight(Reg);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
     } else {
          alertify.error('No Encontrado', 10);
     }
}


function BuscarInicio() {
     let cad = $("#texto5").html();
     let Reg = $("#cajaTexto5").val();
     let palabra = "(" + Reg + "([a-z]?)+)";
     let exp = new RegExp(palabra, "gi");
     $("#texto5").highlight(exp);
     let res = cad.match(exp);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
     } else {
          alertify.error('No Encontrado', 10);
     }
}

function BuscarFinal() {
     let cad = $("#texto6").html();
     let Reg = $("#cajaTexto6").val();
     let palabra = "(([a-z]?)+" + Reg + "( ))";
     let exp = new RegExp(palabra, "gi");
     $("#texto6").highlight(exp);
     let res = cad.match(exp);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
     } else {
          alertify.error('No Encontrado', 10);
     }
}



function BuscarNumDecimal() {
     let cad = $("#texto7").html();
     let palabra = /([^\w](\d+|)((\.(\d+\d+| ))))/g;
     $("#texto7").highlight(palabra);
     let res = cad.match(palabra);
     if (res != null) {
          alertify.success('Encontrado: ' + (res.length) + ' veces', 10);
     } else {
          alertify.error('No Encontrado', 10);
     }
}