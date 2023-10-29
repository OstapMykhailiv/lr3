let rpt = document.getElementById('rpt');
let rpr = document.getElementById('rpr');
let rpb = document.getElementById('rpb');
let rpl = document.getElementById('rpl');

let tpt = document.getElementById('tpt');
let tpr = document.getElementById('tpr');
let tpb = document.getElementById('tpb');
let tpl = document.getElementById('tpl');

let block1 = document.getElementById('padding-block-outside');

tpt.value = rpt.value;
tpr.value = rpr.value;
tpb.value = rpb.value;
tpl.value = rpl.value;


function generatePadding(){
    block1.style.padding = rpt.value + "px " + rpr.value + "px " + rpb.value + "px " + rpl.value + "px "
    codeOutput[1].innerText = `padding: ${rpt.value}px ${rpr.value}px ${rpb.value}px ${rpl.value}px;`
    tpt.value = `${rpt.value}px`
    tpr.value = `${rpr.value}px`
    tpb.value = `${rpb.value}px`
    tpl.value = `${rpl.value}px`
}







