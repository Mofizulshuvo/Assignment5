
const heartbtn = document.getElementsByClassName('fa-heart');
let heart_count = document.getElementById('heart-count').innerText;
let heartcount = parseInt(heart_count);
for (let i = 0; i < heartbtn.length; i++) {
    heartbtn[i].addEventListener('click', function () {
        heartcount++;
        document.getElementById('heart-count').innerText = heartcount;
    });
}



let copies = 0;
const copybtn = document.getElementsByClassName('copy');
for (let i = 0; i < copybtn.length; i++) {
    copybtn[i].addEventListener('click', function () {
        const x = this.closest('div').parentElement.querySelector(".number").innerText;
        navigator.clipboard.writeText(x);
        alert(`copied ${x}`);
        copies++;
        document.getElementById('copies').innerText = copies;
    });
}


let coincount = parseInt(document.getElementById('coin-count').innerText);

let callbtn = document.getElementsByClassName('call');

for (let i = 0; i < callbtn.length; i++) {
    callbtn[i].addEventListener('click', function () {
        if (coincount >= 20) {
            let title = this.closest('div').parentElement.querySelector(".title").innerText;
            let number = this.closest('div').parentElement.querySelector(".number").innerText;
            alert(`calling -${title} -${number} `);
            coincount = coincount - 20;
            document.getElementById('coin-count').innerText = coincount;

            let call_history = document.querySelector('.inner-div ');
            let call_item = document.createElement('div');
            let time = new Date();
            let time_string = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
            call_item.innerHTML =
                `
                    <div class="items bg-[#FAFAFA] flex justify-between items-center mt-[10px]  p-[10px] rounded-[5px] shadow-md"> 
                        <div>
                            <h2 class="font-bold">${title}</h2>
                            <p>${number}</p>
                        </div>
                        <span class="call-time w-2/5 text-end bg-[#FAFAFA]  ">${time_string}</span>

                    </div> 
                `;

            call_history.appendChild(call_item);

        }
        else {
            alert(`Not enough coin! Call not possible.Minimum 20 coins required.`);
        }
    });

}

let clearbtn=document.getElementById('clear');
clearbtn.addEventListener('click',function(){
    let item=document.getElementsByClassName('items');
    for(let i=item.length-1;i=>0.;i--)
    {
        item[i].remove();
    }

});