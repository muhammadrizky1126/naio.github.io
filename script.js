document.addEventListener('DOMContentLoaded', function () {
     // Set the target date for the countdown (January 1, 2024 00:00:00)
     const targetDate = new Date('2024-07-26T00:00:00');
   
     function updateCountdown() {
       const currentDate = new Date();
       const timeDifference = targetDate - currentDate;
   
       if (timeDifference > 0) {
         const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
         const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
   
         document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
       } else {
         document.getElementById('countdown').innerText = 'Happy New Year!';
       }
     }
   
     // Update countdown every second
     setInterval(updateCountdown, 1000);
   
     // Initial update
     updateCountdown();
   });
   