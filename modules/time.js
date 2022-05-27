const daytime = document.querySelector('.date p');
const currenttime=()=> {
    const today = new Date();
    const montharr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = today.getMonth();
    month = montharr[month];
    const date = `${month} ${today.getDate()} ${today.getFullYear()}`;
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
    const dateTime = `${date} ${time}`;
    daytime.textContent = dateTime;
  }

  export default currenttime