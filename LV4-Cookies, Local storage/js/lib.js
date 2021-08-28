function _lib(selector){
    this.selector = selector;
    this.el = document.querySelectorAll(this.selector);
}

_lib.prototype.ubaciElement = function (elementindex, elementName, elementClass, elementId, elementInnerText){
    if(isEmptyOrSpaces(elementName)){
        throw 'Morate specifirati ime elementa.';
    }else{
        var newElement = document.createElement(elementName);
        if(!isEmptyOrSpaces(elementClass)) newElement.setAttribute('class', elementClass);
        if(!isEmptyOrSpaces(elementId)) newElement.setAttribute('id', elementId);
        if(!isEmptyOrSpaces(elementInnerText)) newElement.innerHTML = elementInnerText;
        this.el[elementindex].appendChild(newElement);
    }
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

_lib.prototype.dodajKlasu = function (className){
    this.el.forEach(function(element){
        element.setAttribute('class', className);
    });
}
_lib.prototype.dodajAtribut = function (attributeName, attributeValue){
    this.el.forEach(function(element){
        element.setAttribute(attributeName, attributeValue);
    });
}
_lib.prototype.prikazi = function (indexOfElement){
    this.el[indexOfElement].setAttribute('style', 'visibility:visible;')
}
_lib.prototype.sakrij = function (indexOfElement){
    this.el[indexOfElement].setAttribute('style', 'visibility:hidden;')
}