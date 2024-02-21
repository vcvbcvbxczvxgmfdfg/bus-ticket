
function getSeat(elemenId) {
    const element = document.getElementById(elemenId)
    return element
}
function seatleft() {
    let seatleft = document.getElementById('seatleft').innerText(seat)

    const selets = document.getElementById('seat').getElementsByTagName('li')
    if (selets.onclick === 'click') {


    }
}
function green(elementId) {
    const green = document.getElementById(elementId).getElementsByTagName('li')

    for (const gree of green) {
        gree.addEventListener('click', function () {

            
            gree.style.backgroundColor = 'green'
            const correntSeatelement = document.getElementById('seatleft')
            const correntSeattext = correntSeatelement.innerText
            const correntSeat = parseInt(correntSeattext)
            const newSeatleft = correntSeat - 1;
            correntSeatelement.innerText = newSeatleft
            const currentmoneyelement = document.getElementById('ticked-totalmoney')
            const currentmoneytext = currentmoneyelement.innerText
            const money = parseFloat(currentmoneytext);

            const newmoney = money + 550;
            const showmoney=currentmoneyelement.innerText = (newmoney);
            document.getElementById('Grand-total').innerText = (showmoney)
          
            const getvalue = document.getElementById('cuppon').addEventListener('keyup', function (event) {
                const inputtext = event.target.value
                if((inputtext==="NEW15")||(inputtext==="Couple 20")){
                    const apply=document.getElementById('apply')
                    apply.removeAttribute('disabled')

                    document.getElementById('apply').addEventListener('click',function(){
                        if (inputtext === "NEW15") {
                            
                            const discount = newdiscount(parseFloat(showmoney));
                            const grandTotal = document.getElementById('Grand-total').innerText = (discount);
                        }else if (inputtext==='Couple 20') {
                            const Couplediscount = couplediscount(currentmoneytext)
                            const grandTotal = document.getElementById('Grand-total').innerText = (Couplediscount);
                        }
                        else{
                            return  document.getElementById('Grand-total').innerText = (newmoney)
                        }
                    
                    })
                }

                


            })
            document.getElementById('phone-number').addEventListener('keyup',function(event){
                const nextBtn=document.getElementById('Next');
                const text =event.target.value
                
                if(text ==="01"){
                    nextBtn.removeAttribute('disabled')

                }


                
            })




            const bookedseat = document.getElementById('Booked-Seat').innerText
            const changeseat = parseInt(bookedseat) + 1;
            setbookedseat = document.getElementById('Booked-Seat').innerText = (changeseat)


            

            document.getElementById('phone-number').addEventListener('keyup',function(event){
                const text = event.target.value;
                
                
                
                

            })
        })



    }

}




function newdiscount(elementId) {
    const discount = elementId * 15 / 100;
    const mainmoney=elementId-discount
    return mainmoney

}
function couplediscount(elementId) {
    const discount = elementId * 20 / 100;
    const mainmoney=elementId-discount
    return mainmoney

}




function appendseat(elementId){
    const table =document.getElementById('Serial')
    const setHtml=document.createElement('tr')

    
}
green('seat')
seatleft()


