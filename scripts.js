function countDown() {
  let currentdDate = new Date(); 
  let finalDay = new Date(2023, 11, 14, 16, 30, 0, 0);
  let difference = finalDay - currentdDate;
  let remainingDays = Math.floor(difference/86400000)
  let remainingHours = Math.floor(difference%(remainingDays*86400000)/3600000);
  let remainingMinutes = Math.floor((difference-(remainingDays*86400000)-(remainingHours*3600000))/60000);
  let remainingSeconds = Math.floor((difference-(remainingDays*86400000)-(remainingHours*3600000)-(remainingMinutes*60000))/1000);
  let remainingMilliSeconds = Math.floor((difference-(remainingDays*86400000)-(remainingHours*3600000)-(remainingMinutes*60000)-(remainingSeconds*1000)));
  document.getElementById("countdown").innerHTML = `${remainingDays}D:${remainingHours}H:${remainingMinutes}M:${remainingSeconds}S`;
}

setInterval(countDown, 1000);