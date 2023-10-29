let rpst = document.getElementById('rpst');
//let rpsr = document.getElementById('rpsr');
//let rpsb = document.getElementById('rpsb');
let rpsl = document.getElementById('rpsl');

let tpst = document.getElementById('tpst');
//let tpsr = document.getElementById('tpsr');
//let tpsb = document.getElementById('tpsb');
let tpsl = document.getElementById('tpsl');

let block2 = document.getElementById('position-block-inside');

tpst.value = rpst.value;
//tpsr.value = rpsr.value;
//tpsb.value = rpsb.value;
tpsl.value = rpsl.value;

let select = document.getElementById(`select-position`)
select.addEventListener("change", ()=>{
    block2.style.position = select.value
})
function generatePosition(){
    block2.style.top = rpst.value + "px "
    //block2.style.bottom = rpsb.value + "px "
    //block2.style.right = rpsr.value + "px "
    block2.style.left = rpsl.value + "px "
    codeOutput[2].innerText = `postion:${select.value}; top: ${rpst.value}px; left: ${rpsl.value}px;`

    tpst.value = `${rpst.value}px`
    //tpsr.value = `${rpsr.value}px`
    //tpsb.value = `${rpsb.value}px`
    tpsl.value = `${rpsl.value}px`
}







