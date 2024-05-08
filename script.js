window.addEventListener("DOMContentLoaded", (event) => {

    let startTime = new Date().getTime();
    let intervalId = setInterval(updateDisplay, 1000);

    function updateDisplay() {
      const currentTime = new Date().getTime();
      const elapsedTime = new Date(currentTime - startTime);
      const minutes = pad(elapsedTime.getUTCMinutes());
      const seconds = pad(elapsedTime.getUTCSeconds());
      let minString = document.getElementById("minute")
      let secString = document.getElementById("second")
      minString.innerHTML = minutes
      secString.innerHTML = seconds
    }
    function pad(value) {
      return value < 10 ? '0' + value : value;
    }

    const block4221 = document.getElementById("b4221");
    block4221.addEventListener('click', () => {
        document.getElementById("b4221").style.opacity = "0"
    });
    const block4231 = document.getElementById("b4231");
    block4231.addEventListener('click', () => {
        document.getElementById("b4231").style.opacity = "0"
    });
    const block4232 = document.getElementById("b4232");
    block4232.addEventListener('click', () => {
        document.getElementById("b4232").style.opacity = "0"
    });
    const block4241 = document.getElementById("b4241");
    block4241.addEventListener('click', () => {
        document.getElementById("b4241").style.opacity = "0"
    });
    const block4291 = document.getElementById("b4291");
    block4291.addEventListener('click', () => {
        document.getElementById("b4291").style.opacity = "0"
    });
    const block4301 = document.getElementById("b4301");
    block4301.addEventListener('click', () => {
        document.getElementById("b4301").style.opacity = "0"
    });
    const block4302 = document.getElementById("b4302");
    block4302.addEventListener('click', () => {
        document.getElementById("b4302").style.opacity = "0"
    });
    const block4303 = document.getElementById("b4303");
    block4303.addEventListener('click', () => {
        document.getElementById("b4303").style.opacity = "0"
    });
    const block5011 = document.getElementById("b5011");
    block5011.addEventListener('click', () => {
        document.getElementById("b5011").style.opacity = "0"
    });
    const block5041 = document.getElementById("b5041");
    block5041.addEventListener('click', () => {
        document.getElementById("b5041").style.opacity = "0"
    });
    const block5061 = document.getElementById("b5061");
    block5061.addEventListener('click', () => {
        document.getElementById("b5061").style.opacity = "0"
    });
    const block5062 = document.getElementById("b5062");
    block5062.addEventListener('click', () => {
        document.getElementById("b5062").style.opacity = "0"
    });
    const block5071 = document.getElementById("b5071");
    block5071.addEventListener('click', () => {
        document.getElementById("b5071").style.opacity = "0"
    });
    const block5072 = document.getElementById("b5072");
    block5072.addEventListener('click', () => {
        document.getElementById("b5072").style.opacity = "0"
    });
    const block5073 = document.getElementById("b5073");
    block5073.addEventListener('click', () => {
        document.getElementById("b5073").style.opacity = "0"
    });
    const block5081 = document.getElementById("b5081");
    block5081.addEventListener('click', () => {
        document.getElementById("b5081").style.opacity = "0"
    });

    let diceroll1 = document.getElementById('switch1');
    diceroll1.addEventListener('mouseover', rollfunc);
    diceroll1.addEventListener('mouseout', stopfunc);
    let diceroll2 = document.getElementById('switch2');
    diceroll2.addEventListener('mouseover', rollfunc);
    diceroll2.addEventListener('mouseout', stopfunc);
    function rollfunc(){
        console.log("rolling")
        diceroll1.style.transform = "rotate(" + (0) + "deg)";
        diceroll2.style.transform = "rotate(" + (0) + "deg)";
        diceroll1.style.transition = (0.5) + "s" + " ease-in-out"
        diceroll2.style.transition = (0.5) + "s" + " ease-in-out"
    }
    function stopfunc(){
        console.log("stopping")
        diceroll1.style.transform = "rotate(" + (45) + "deg)";
        diceroll2.style.transform = "rotate(" + (-45) + "deg)";
        diceroll1.style.transition = (0.5) + "s"
        diceroll2.style.transition = (0.5) + "s"
    }
});
