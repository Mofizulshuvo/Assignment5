function updateLocalTime(){
    const now=new Date();
    const options={hour:'2-digits',minute:'2-digit',second:'2-digit'};
    document.getElementsByClassName('call-time').textContent=now.toLocaleTimeString([],options);
    
}

updateLocalTime();