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

    let clickcount = 0

    window.setTimeout(func4221, 3500);
    function func4221(){
        let place4221 = document.createElement("b4221");
        place4221.classList.add("b4221")
        document.querySelector('body').appendChild(place4221) 
        place4221.innerHTML = "00 : 30 : 00"
        place4221.addEventListener('click', () => {
            document.querySelector("b4221").style.opacity = "0"
            let stamp4221 = document.createElement("s4221");
            stamp4221.classList.add("s4221")
            document.querySelector('body').appendChild(stamp4221) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4221.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4231, 4000);
    function func4231(){
        let place4231 = document.createElement("b4231");
        place4231.classList.add("b4231")
        document.querySelector('body').appendChild(place4231) 
        place4231.innerHTML = "01 : 00 : 00"
        place4231.addEventListener('click', () => {
            document.querySelector("b4231").style.opacity = "0"
            let stamp4231 = document.createElement("s4231");
            stamp4231.classList.add("s4231")
            document.querySelector('body').appendChild(stamp4231) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4231.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4232, 4500);
    function func4232(){
        let place4232 = document.createElement("b4232");
        place4232.classList.add("b4232")
        document.querySelector('body').appendChild(place4232) 
        place4232.innerHTML = "00 : 30 : 00"
        place4232.addEventListener('click', () => {
            document.querySelector("b4232").style.opacity = "0"
            let stamp4232 = document.createElement("s4232");
            stamp4232.classList.add("s4232")
            document.querySelector('body').appendChild(stamp4232) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4232.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4241, 5000);
    function func4241(){
        let place4241 = document.createElement("b4241");
        place4241.classList.add("b4241")
        document.querySelector('body').appendChild(place4241) 
        place4241.innerHTML = "00 : 45 : 00"
        place4241.addEventListener('click', () => {
            document.querySelector("b4241").style.opacity = "0"
            let stamp4241 = document.createElement("s4241");
            stamp4241.classList.add("s4241")
            document.querySelector('body').appendChild(stamp4241) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4241.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4291, 6000);
    function func4291(){
        let place4291 = document.createElement("b4291");
        place4291.classList.add("b4291")
        document.querySelector('body').appendChild(place4291) 
        place4291.innerHTML = "00 : 45 : 00"
        place4291.addEventListener('click', () => {
            document.querySelector("b4291").style.opacity = "0"
            let stamp4291 = document.createElement("s4291");
            stamp4291.classList.add("s4291")
            document.querySelector('body').appendChild(stamp4291) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4291.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4301, 6333);
    function func4301(){
        let place4301 = document.createElement("b4301");
        place4301.classList.add("b4301")
        document.querySelector('body').appendChild(place4301) 
        place4301.innerHTML = "01 : 15 : 00"
        place4301.addEventListener('click', () => {
            document.querySelector("b4301").style.opacity = "0"
            let stamp4301 = document.createElement("s4301");
            stamp4301.classList.add("s4301")
            document.querySelector('body').appendChild(stamp4301) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4301.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4302, 6666);
    function func4302(){
        let place4302 = document.createElement("b4302");
        place4302.classList.add("b4302")
        document.querySelector('body').appendChild(place4302) 
        place4302.innerHTML = "00 : 30 : 00"
        place4302.addEventListener('click', () => {
            document.querySelector("b4302").style.opacity = "0"
            let stamp4302 = document.createElement("s4302");
            stamp4302.classList.add("s4302")
            document.querySelector('body').appendChild(stamp4302) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4302.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4303, 7000);
    function func4303(){
        let place4303 = document.createElement("b4303");
        place4303.classList.add("b4303")
        document.querySelector('body').appendChild(place4303) 
        place4303.innerHTML = "01 : 00 : 00"
        place4303.addEventListener('click', () => {
            document.querySelector("b4303").style.opacity = "0"
            let stamp4303 = document.createElement("s4303");
            stamp4303.classList.add("s4303")
            document.querySelector('body').appendChild(stamp4303) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp4303.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5011, 7333);
    function func5011(){
        let place5011 = document.createElement("b5011");
        place5011.classList.add("b5011")
        document.querySelector('body').appendChild(place5011)
        place5011.innerHTML = "01 : 15 : 00" 
        place5011.addEventListener('click', () => {
            document.querySelector("b5011").style.opacity = "0"
            let stamp5011 = document.createElement("s5011");
            stamp5011.classList.add("s5011")
            document.querySelector('body').appendChild(stamp5011) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5011.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5041, 7666);
    function func5041(){
        let place5041 = document.createElement("b5041");
        place5041.classList.add("b5041")
        document.querySelector('body').appendChild(place5041) 
        place5041.innerHTML = "00 : 45 : 00"
        place5041.addEventListener('click', () => {
            document.querySelector("b5041").style.opacity = "0"
            let stamp5041 = document.createElement("s5041");
            stamp5041.classList.add("s5041")
            document.querySelector('body').appendChild(stamp5041) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5041.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5061, 8000);
    function func5061(){
        let place5061 = document.createElement("b5061");
        place5061.classList.add("b5061")
        document.querySelector('body').appendChild(place5061) 
        place5061.innerHTML = "01 : 45 : 00"
        place5061.addEventListener('click', () => {
            document.querySelector("b5061").style.opacity = "0"
            let stamp5061 = document.createElement("s5061");
            stamp5061.classList.add("s5061")
            document.querySelector('body').appendChild(stamp5061) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5061.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5062, 8250);
    function func5062(){
        let place5062 = document.createElement("b5062");
        place5062.classList.add("b5062")
        document.querySelector('body').appendChild(place5062)
        place5062.innerHTML = "02 : 00 : 00" 
        place5062.addEventListener('click', () => {
            document.querySelector("b5062").style.opacity = "0"
            let stamp5062 = document.createElement("s5062");
            stamp5062.classList.add("s5062")
            document.querySelector('body').appendChild(stamp5062) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5062.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5071, 8500);
    function func5071(){
        let place5071 = document.createElement("b5071");
        place5071.classList.add("b5071")
        document.querySelector('body').appendChild(place5071) 
        place5071.innerHTML = "02 : 30 : 00" 
        place5071.addEventListener('click', () => {
            document.querySelector("b5071").style.opacity = "0"
            let stamp5071 = document.createElement("s5071");
            stamp5071.classList.add("s5071")
            document.querySelector('body').appendChild(stamp5071) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5071.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5072, 8750);
    function func5072(){
        let place5072 = document.createElement("b5072");
        place5072.classList.add("b5072")
        document.querySelector('body').appendChild(place5072) 
        place5072.innerHTML = "01 : 30 : 00" 
        place5072.addEventListener('click', () => {
            document.querySelector("b5072").style.opacity = "0"
            let stamp5072 = document.createElement("s5072");
            stamp5072.classList.add("s5072")
            document.querySelector('body').appendChild(stamp5072) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5072.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5073, 9000);
    function func5073(){
        let place5073 = document.createElement("b5073");
        place5073.classList.add("b5073")
        document.querySelector('body').appendChild(place5073) 
        place5073.innerHTML = "01 : 15 : 00" 
        place5073.addEventListener('click', () => {
            document.querySelector("b5073").style.opacity = "0"
            let stamp5073 = document.createElement("s5073");
            stamp5073.classList.add("s5073")
            document.querySelector('body').appendChild(stamp5073) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5073.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5081, 9250);
    function func5081(){
        let place5081 = document.createElement("b5081");
        place5081.classList.add("b5081")
        document.querySelector('body').appendChild(place5081) 
        place5081.innerHTML = "02 : 45 : 00" 
        place5081.addEventListener('click', () => {
            document.querySelector("b5081").style.opacity = "0"
            let stamp5081 = document.createElement("s5081");
            stamp5081.classList.add("s5081")
            document.querySelector('body').appendChild(stamp5081) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5081.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5082, 9500);
    function func5082(){
        let place5082 = document.createElement("b5082");
        place5082.classList.add("b5082")
        document.querySelector('body').appendChild(place5082) 
        place5082.innerHTML = "02 : 15 : 00" 
        place5082.addEventListener('click', () => {
            document.querySelector("b5082").style.opacity = "0"
            let stamp5082 = document.createElement("s5082");
            stamp5082.classList.add("s5082")
            document.querySelector('body').appendChild(stamp5082) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5082.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5083, 9750);
    function func5083(){
        let place5083 = document.createElement("b5083");
        place5083.classList.add("b5083")
        document.querySelector('body').appendChild(place5083) 
        place5083.innerHTML = "02 : 45 : 00" 
        place5083.addEventListener('click', () => {
            document.querySelector("b5083").style.opacity = "0"
            let stamp5083 = document.createElement("s5083");
            stamp5083.classList.add("s5083")
            document.querySelector('body').appendChild(stamp5083) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            stamp5083.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browse");
                placebrowse.classList.add("browse")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("build");
                placebuild.classList.add("build")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }

    let diceroll1 = document.getElementById('switch1');
    diceroll1.addEventListener('mouseover', rollfunc);
    diceroll1.addEventListener('mouseout', stopfunc);
    let diceroll2 = document.getElementById('switch2');
    diceroll2.addEventListener('mouseover', rollfunc);
    diceroll2.addEventListener('mouseout', stopfunc);
    function rollfunc(){
        diceroll1.style.transform = "rotate(" + (0) + "deg)";
        diceroll2.style.transform = "rotate(" + (0) + "deg)";
        diceroll1.style.transition = (0.5) + "s" + " ease-in-out"
        diceroll2.style.transition = (0.5) + "s" + " ease-in-out"
    }
    function stopfunc(){
        diceroll1.style.transform = "rotate(" + (45) + "deg)";
        diceroll2.style.transform = "rotate(" + (-45) + "deg)";
        diceroll1.style.transition = (0.5) + "s"
        diceroll2.style.transition = (0.5) + "s"
    }
});
