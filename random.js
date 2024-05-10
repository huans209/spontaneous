window.addEventListener("DOMContentLoaded", (event) => {

    let startTime = new Date().getTime();
    let intervalId = setInterval(updateDisplay, 1000);

    function updateDisplay() {
      const currentTime = new Date().getTime();
      const elapsedTime = new Date(currentTime - startTime);
      const minutes = pad(elapsedTime.getUTCMinutes());
      const seconds = pad(elapsedTime.getUTCSeconds());
      let minString = document.getElementById("minuter")
      let secString = document.getElementById("secondr")
      minString.innerHTML = minutes
      secString.innerHTML = seconds
    }
    function pad(value) {
      return value < 10 ? '0' + value : value;
    }

    let clickcount = 0

    window.setTimeout(func4221, (Math.random()*5000+1000));
    function func4221(){
        let genr4221 = document.createElement("r4221");
        genr4221.classList.add("r4221")
        rtop4221 = (Math.random()*75 + 5) + "vh";
        rleft4221 = (Math.random()*64 + 5) + "vw";
        genr4221.style.top = rtop4221;
        genr4221.style.left = rleft4221;
        document.querySelector('body').appendChild(genr4221) 
        genr4221.innerHTML = "00 : 30 : 00"
        genr4221.addEventListener('click', () => { 
            document.querySelector("r4221").style.opacity = "0"
            let label4221 = document.createElement("l4221");
            label4221.classList.add("l4221")
            label4221.style.top = rtop4221;
            label4221.style.left = rleft4221;
            document.querySelector('body').appendChild(label4221) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4221.innerHTML = minutes + " : " + seconds;
            removeEventListener('click', genr4221.addEventListener)
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4231, (Math.random()*4000+6500));
    function func4231(){
        let genr4231 = document.createElement("r4231");
        genr4231.classList.add("r4231")
        rtop4231 = (Math.random()*75 + 5) + "vh";
        rleft4231 = (Math.random()*64 + 5) + "vw";
        genr4231.style.top = rtop4231;
        genr4231.style.left = rleft4231;
        document.querySelector('body').appendChild(genr4231) 
        genr4231.innerHTML = "01 : 00 : 00"
        genr4231.addEventListener('click', () => {
            document.querySelector("r4231").style.opacity = "0"
            let label4231 = document.createElement("l4231");
            label4231.classList.add("l4231")
            label4231.style.top = rtop4231;
            label4231.style.left = rleft4231;
            document.querySelector('body').appendChild(label4231) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4231.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4232, (Math.random()*5000+1000));
    function func4232(){
        let genr4232 = document.createElement("r4232");
        genr4232.classList.add("r4232")
        rtop4232 = (Math.random()*75 + 5) + "vh";
        rleft4232 = (Math.random()*64 + 5) + "vw";
        genr4232.style.top = rtop4232;
        genr4232.style.left = rleft4232;
        document.querySelector('body').appendChild(genr4232) 
        genr4232.innerHTML = "00 : 30 : 00"
        genr4232.addEventListener('click', () => {
            document.querySelector("r4232").style.opacity = "0"
            let label4232 = document.createElement("l4232");
            label4232.classList.add("l4232")
            label4232.style.top = rtop4232;
            label4232.style.left = rleft4232;
            document.querySelector('body').appendChild(label4232) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4232.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4241, (Math.random()*5000+1000));
    function func4241(){
        let genr4241 = document.createElement("r4241");
        genr4241.classList.add("r4241")
        rtop4241 = (Math.random()*75 + 5) + "vh";
        rleft4241 = (Math.random()*64 + 5) + "vw";
        genr4241.style.top = rtop4241;
        genr4241.style.left = rleft4241;
        document.querySelector('body').appendChild(genr4241) 
        genr4241.innerHTML = "00 : 45 : 00"
        genr4241.addEventListener('click', () => {
            document.querySelector("r4241").style.opacity = "0"
            let label4241 = document.createElement("l4241");
            label4241.classList.add("l4241")
            label4241.style.top = rtop4241;
            label4241.style.left = rleft4241;
            document.querySelector('body').appendChild(label4241) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4241.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4291, (Math.random()*4000+6500));
    function func4291(){
        let genr4291 = document.createElement("r4291");
        genr4291.classList.add("r4291")
        rtop4291 = (Math.random()*75 + 5) + "vh";
        rleft4291 = (Math.random()*64 + 5) + "vw";
        genr4291.style.top = rtop4291;
        genr4291.style.left = rleft4291;
        document.querySelector('body').appendChild(genr4291) 
        genr4291.innerHTML = "00 : 45 : 00"
        genr4291.addEventListener('click', () => {
            document.querySelector("r4291").style.opacity = "0"
            let label4291 = document.createElement("l4291");
            label4291.classList.add("l4291")
            label4291.style.top = rtop4291;
            label4291.style.left = rleft4291;
            document.querySelector('body').appendChild(label4291) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4291.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4301, (Math.random()*3000+10500));
    function func4301(){
        let genr4301 = document.createElement("r4301");
        genr4301.classList.add("r4301")
        rtop4301 = (Math.random()*75 + 5) + "vh";
        rleft4301 = (Math.random()*64 + 5) + "vw";
        genr4301.style.top = rtop4301;
        genr4301.style.left = rleft4301;
        document.querySelector('body').appendChild(genr4301)
        genr4301.innerHTML = "01 : 15 : 00"
        genr4301.addEventListener('click', () => {
            document.querySelector("r4301").style.opacity = "0"
            let label4301 = document.createElement("l4301");
            label4301.classList.add("l4301")
            label4301.style.top = rtop4301;
            label4301.style.left = rleft4301;
            document.querySelector('body').appendChild(label4301) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4301.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4302, (Math.random()*4000+6500));
    function func4302(){
        let genr4302 = document.createElement("r4302");
        genr4302.classList.add("r4302")
        rtop4302 = (Math.random()*75 + 5) + "vh";
        rleft4302 = (Math.random()*64 + 5) + "vw";
        genr4302.style.top = rtop4302;
        genr4302.style.left = rleft4302;
        document.querySelector('body').appendChild(genr4302) 
        genr4302.innerHTML = "00 : 30 : 00"
        genr4302.addEventListener('click', () => {
            document.querySelector("r4302").style.opacity = "0"
            let label4302 = document.createElement("l4302");
            label4302.classList.add("l4302")
            label4302.style.top = rtop4302;
            label4302.style.left = rleft4302;
            document.querySelector('body').appendChild(label4302) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4302.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func4303, (Math.random()*5000+1000));
    function func4303(){
        let genr4303 = document.createElement("r4303");
        genr4303.classList.add("r4303")
        rtop4303 = (Math.random()*75 + 5) + "vh";
        rleft4303 = (Math.random()*64 + 5) + "vw";
        genr4303.style.top = rtop4303;
        genr4303.style.left = rleft4303;
        document.querySelector('body').appendChild(genr4303)
        genr4303.innerHTML = "01 : 00 : 00"
        genr4303.addEventListener('click', () => {
            document.querySelector("r4303").style.opacity = "0"
            let label4303 = document.createElement("l4303");
            label4303.classList.add("l4303")
            label4303.style.top = rtop4303;
            label4303.style.left = rleft4303;
            document.querySelector('body').appendChild(label4303) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label4303.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5011, (Math.random()*4000+6500));
    function func5011(){
        let genr5011 = document.createElement("r5011");
        genr5011.classList.add("r5011")
        rtop5011 = (Math.random()*75 + 5) + "vh";
        rleft5011 = (Math.random()*64 + 5) + "vw";
        genr5011.style.top = rtop5011;
        genr5011.style.left = rleft5011;
        document.querySelector('body').appendChild(genr5011) 
        genr5011.innerHTML = "01 : 15 : 00" 
        genr5011.addEventListener('click', () => {
            document.querySelector("r5011").style.opacity = "0"
            let label5011 = document.createElement("l5011");
            label5011.classList.add("l5011")
            label5011.style.top = rtop5011;
            label5011.style.left = rleft5011;
            document.querySelector('body').appendChild(label5011) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5011.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5041, (Math.random()*4000+6500));
    function func5041(){
        let genr5041 = document.createElement("r5041");
        genr5041.classList.add("r5041")
        rtop5041 = (Math.random()*75 + 5) + "vh";
        rleft5041 = (Math.random()*64 + 5) + "vw";
        genr5041.style.top = rtop5041;
        genr5041.style.left = rleft5041;
        document.querySelector('body').appendChild(genr5041) 
        genr5041.innerHTML = "00 : 45 : 00"
        genr5041.addEventListener('click', () => {
            document.querySelector("r5041").style.opacity = "0"
            let label5041 = document.createElement("l5041");
            label5041.classList.add("l5041")
            label5041.style.top = rtop5041;
            label5041.style.left = rleft5041;
            document.querySelector('body').appendChild(label5041) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5041.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5061, (Math.random()*4000+6500));
    function func5061(){
        let genr5061 = document.createElement("r5061");
        genr5061.classList.add("r5061")
        rtop5061 = (Math.random()*75 + 5) + "vh";
        rleft5061 = (Math.random()*64 + 5) + "vw";
        genr5061.style.top = rtop5061;
        genr5061.style.left = rleft5061;
        document.querySelector('body').appendChild(genr5061)
        genr5061.innerHTML = "01 : 45 : 00"
        genr5061.addEventListener('click', () => {
            document.querySelector("r5061").style.opacity = "0"
            let label5061 = document.createElement("l5061");
            label5061.classList.add("l5061")
            label5061.style.top = rtop5061;
            label5061.style.left = rleft5061;
            document.querySelector('body').appendChild(label5061) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5061.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5062, (Math.random()*3000+10500));
    function func5062(){
        let genr5062 = document.createElement("r5062");
        genr5062.classList.add("r5062")
        rtop5062 = (Math.random()*75 + 5) + "vh";
        rleft5062 = (Math.random()*64 + 5) + "vw";
        genr5062.style.top = rtop5062;
        genr5062.style.left = rleft5062;
        document.querySelector('body').appendChild(genr5062) 
        genr5062.innerHTML = "02 : 00 : 00" 
        genr5062.addEventListener('click', () => {
            document.querySelector("r5062").style.opacity = "0"
            let label5062 = document.createElement("l5062");
            label5062.classList.add("l5062")
            label5062.style.top = rtop5062;
            label5062.style.left = rleft5062;
            document.querySelector('body').appendChild(label5062) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5062.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5071, (Math.random()*3000+10500));
    function func5071(){
        let genr5071 = document.createElement("r5071");
        genr5071.classList.add("r5071")
        rtop5071 = (Math.random()*75 + 5) + "vh";
        rleft5071 = (Math.random()*64 + 5) + "vw";
        genr5071.style.top = rtop5071;
        genr5071.style.left = rleft5071;
        document.querySelector('body').appendChild(genr5071)
        genr5071.innerHTML = "02 : 30 : 00" 
        genr5071.addEventListener('click', () => {
            document.querySelector("r5071").style.opacity = "0"
            let label5071 = document.createElement("l5071");
            label5071.classList.add("l5071")
            label5071.style.top = rtop5071;
            label5071.style.left = rleft5071;
            document.querySelector('body').appendChild(label5071) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5071.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5072, (Math.random()*3000+10500));
    function func5072(){
        let genr5072 = document.createElement("r5072");
        genr5072.classList.add("r5072")
        rtop5072 = (Math.random()*75 + 5) + "vh";
        rleft5072 = (Math.random()*64 + 5) + "vw";
        genr5072.style.top = rtop5072;
        genr5072.style.left = rleft5072;
        document.querySelector('body').appendChild(genr5072) 
        genr5072.innerHTML = "01 : 30 : 00" 
        genr5072.addEventListener('click', () => {
            document.querySelector("r5072").style.opacity = "0"
            let label5072 = document.createElement("l5072");
            label5072.classList.add("l5072")
            label5072.style.top = rtop5072;
            label5072.style.left = rleft5072;
            document.querySelector('body').appendChild(label5072) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5072.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5073, (Math.random()*3000+10500));
    function func5073(){
        let genr5073 = document.createElement("r5073");
        genr5073.classList.add("r5073")
        rtop5073 = (Math.random()*75 + 5) + "vh";
        rleft5073 = (Math.random()*64 + 5) + "vw";
        genr5073.style.top = rtop5073;
        genr5073.style.left = rleft5073;
        document.querySelector('body').appendChild(genr5073) 
        genr5073.innerHTML = "01 : 15 : 00" 
        genr5073.addEventListener('click', () => {
            document.querySelector("r5073").style.opacity = "0"
            let label5073 = document.createElement("l5073");
            label5073.classList.add("l5073")
            label5073.style.top = rtop5073;
            label5073.style.left = rleft5073;
            document.querySelector('body').appendChild(label5073) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5073.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5081, (Math.random()*3000+10500));
    function func5081(){
        let genr5081 = document.createElement("r5081");
        genr5081.classList.add("r5081")
        rtop5081 = (Math.random()*75 + 5) + "vh";
        rleft5081 = (Math.random()*64 + 5) + "vw";
        genr5081.style.top = rtop5081;
        genr5081.style.left = rleft5081;
        document.querySelector('body').appendChild(genr5081) 
        genr5081.innerHTML = "02 : 45 : 00" 
        genr5081.addEventListener('click', () => {
            document.querySelector("r5081").style.opacity = "0"
            let label5081 = document.createElement("l5081");
            label5081.classList.add("l5081")
            label5081.style.top = rtop5081;
            label5081.style.left = rleft5081;
            document.querySelector('body').appendChild(label5081) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5081.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5082, (Math.random()*3000+10500));
    function func5082(){
        let genr5082 = document.createElement("r5082");
        genr5082.classList.add("r5082")
        rtop5082 = (Math.random()*75 + 5) + "vh";
        rleft5082 = (Math.random()*64 + 5) + "vw";
        genr5082.style.top = rtop5082;
        genr5082.style.left = rleft5082;
        document.querySelector('body').appendChild(genr5082) 
        genr5082.innerHTML = "02 : 15 : 00" 
        genr5082.addEventListener('click', () => {
            document.querySelector("r5082").style.opacity = "0"
            let label5082 = document.createElement("l5082");
            label5082.classList.add("l5082")
            label5082.style.top = rtop5082;
            label5082.style.left = rleft5082;
            document.querySelector('body').appendChild(label5082) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5082.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
    window.setTimeout(func5083, (Math.random()*3000+10500));
    function func5083(){
        let genr5083 = document.createElement("r5083");
        genr5083.classList.add("r5083")
        rtop5083 = (Math.random()*75 + 5) + "vh";
        rleft5083 = (Math.random()*64 + 5) + "vw";
        genr5083.style.top = rtop5083;
        genr5083.style.left = rleft5083;
        document.querySelector('body').appendChild(genr5083) 
        genr5083.innerHTML = "02 : 45 : 00" 
        genr5083.addEventListener('click', () => {
            document.querySelector("r5083").style.opacity = "0"
            let label5083 = document.createElement("l5083");
            label5083.classList.add("l5083")
            label5083.style.top = rtop5083;
            label5083.style.left = rleft5083;
            document.querySelector('body').appendChild(label5083) 
            const minutes = pad(new Date(new Date().getTime() - startTime).getUTCMinutes());
            const seconds = pad(new Date(new Date().getTime() - startTime).getUTCSeconds());
            label5083.innerHTML = minutes + " : " + seconds;
            clickcount++
            if (clickcount == 18){
                let placebrowse = document.createElement("browser");
                placebrowse.classList.add("browser")
                document.querySelector('body').appendChild(placebrowse) 
                placebrowse.innerHTML = "Browse: 00 : " + minutes + " : " + seconds
                let placebuild = document.createElement("buildr");
                placebuild.classList.add("buildr")
                document.querySelector('body').appendChild(placebuild) 
                placebuild.innerHTML = "Build: 25 : 00 : 00"
            }
        }, {once : true});
    }
});