var naslov = new _lib('.naslov');
console.log(naslov.el[0].innerHTML);
naslov.ubaciElement(0, 'p', 'naslov', 'ubaceniNaslov', 'Ubacio sam ovaj paragraf preko prototype funckije lib objekta.');
naslov.prikazi(0);

localStorage.setItem('racunarstvo', 'http://racunarstvo.vuv.hr');
localStorage.setItem('loomen', 'http://loomen.vsmti.hr');
localStorage.setItem('imagine', 'http://e5.onthehub.com/d.ashx?s=ui4qkso06k');
localStorage.setItem('studentski_dom', 'http://studom.vsmti.hr');
localStorage.setItem('office365', 'https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail');

var footerUl = new _lib('.footer-navigation');

for(var i = 0; i < localStorage.length; i++){
    footerUl.ubaciElement(0, 'li', '', localStorage.key(i) , '');
    var liTag = new _lib(`#${localStorage.key(i)}`);
    liTag.ubaciElement(0, 'a', '', '', localStorage.key(i));
    var atag = new _lib(`#${localStorage.key(i)} a`);
    atag.dodajAtribut('href', localStorage.getItem(localStorage.key(i)));
}