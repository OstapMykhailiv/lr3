let tab;
let tabContent;

window.onload = function (){
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

let rtl = document.getElementById('rtl');
let rtr = document.getElementById('rtr');
let rbr = document.getElementById('rbr');
let rbl = document.getElementById('rbl');

let ttl = document.getElementById('ttl');
let ttr = document.getElementById('ttr');
let tbr = document.getElementById('tbr');
let tbl = document.getElementById('tbl');

let block = document.getElementById('radius-block');

ttl.value = rtl.value;
ttr.value = rtr.value;
tbr.value = rbr.value;
tbl.value = rbl.value;

let codeOutput = document.getElementsByClassName('code-output')
console.log(codeOutput)

function hideTabsContent(a){
    for (let i=a; i<tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick=function (event){
    let target = event.target;
    if (target.className==='tab'){
        for (let i=0; i<tab.length; i++){
            if (target === tab[i]){
                showTabsContent(i);
                break
            }
        }
    }
}
function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')){
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show')
    }
}

function generateRadius(){
    block.style.borderRadius = rtl.value + "px " + rtr.value + "px " + rbr.value + "px " + rbl.value + "px "
    codeOutput[0].innerText = `border-radius: ${rtl.value}px ${rtr.value}px ${rbr.value}px ${rbl.value}px;`
    ttl.value = `${rtl.value}px`
    ttr.value = `${rtr.value}px`
    tbr.value = `${rbr.value}px`
    tbl.value = `${rbl.value}px`
}







