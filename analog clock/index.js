setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
 
    hourhand.style.transform = `rotate(${hrotation}deg)`;
    minutehand.style.transform = `rotate(${mrotation}deg)`;
    secondshand.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// calaculation
// HOURSHAND
// hours in clock hourshand rotates 360deg for a 12hours so 360/12 = 30deg for one hour
    //    1hour=60min  so 30/60= 1/2 deg for one minute then for m min its m/s so hours hand rotaion is
    //    30*h + m/2 for h hours

// MINUNTEHAND
// minuteshand 1hour = 60min and hands rotate 360deg for 1hour 
// so 360/60=6  6deg for 1 minute
// minutehand= 6*m for m minutes

// SECONDSHAND
// 1min = 60s and hand rotates 360deg for 1min
// so 360/60=6  6deg for 1 sec
// sechand = 6*s for s seconds


        