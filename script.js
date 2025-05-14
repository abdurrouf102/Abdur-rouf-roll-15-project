
//   watch start

  
  function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format

    const timeStr = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    const dateStr = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    document.getElementById("clockTime").textContent = timeStr;
    document.getElementById("clockDate").textContent = dateStr;
  }

  setInterval(updateClock, 1000);
  updateClock(); // initial call


//   watch end