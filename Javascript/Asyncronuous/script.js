/* javascript asyncronous  function */

/* setTimeout method */

// setTimeout(function , delay , parameter1 , parameter2 , .....)

/* setTimeout(
    function () {
        
    } ,delaytime
) */

{
  //   function print() {
  //     console.log("hello harsh");
  //   }
  //   setTimeout(print, 1000);
}

{
  //   setTimeout(() => {
  //     console.log("hey harsh");
  //   }, 1000);
}

{
//   let datetimes = new Date().toLocaleTimeString();

//   function time(date) {
//     console.log(`Current Time ${date}`);
//   }

//   time(datetimes);

//   setInterval(time, 3000);
}

{
    const updateTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        console.log(`Current Time: ${currentTime}`);
      };
      
      updateTime();
      setInterval(updateTime, 3000);
}
