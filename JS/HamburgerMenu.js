addEventListener("resize", (event) => {
    let width = screen.width;
    let header = document.getElementsByTagName('header')[0];
    if (width < 1440){
        header.style.height = "100px";
        header.style.width = "100px";
        header.innerHTML = '<section class="bar"><i class="fa-solid fa-bars"></i></section>';
        let bar = document.getElementsByClassName('bar')[0];
        header.addEventListener("click" , (event) => {
            width = screen.width;
            if (width < 1440){
                if (header.style.width != "500px"){
                    header.style.height = "100%";
                    header.style.width = "500px";
                    header.innerHTML = `<section class="bar"><i class="fa-solid fa-bars"></i></section><section class="logo"><a href="index.html"><img src="images/DBDlogo.png" alt="logo"></a></section>
                    <nav>
                    <section class="item"><a href="DeadByDaylight-Killers.html">KILLERS</a></section>
                    <section class="item"><a href="DeadByDaylight-Survivors.html">SURVIVORS</a></section>
                    <section class="item"><a href="DeadByDaylight-Realms.html">REALMS</a></section>
                    <section class="purchase"><a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/" target="_blank">PURCHASE</a></section>
                    </nav>`;
                    const BigBar = header.animate([
                        {
                            height: '100px',
                            width: '100px'
                        },
                        {
                            height: '50%',
                            width: '250px'
                        },
                        {
                            height: '100%',
                            width: '500px'
                        }
                        ], {
                        duration: 1500,
                        easing: "ease",
                    });
                }
                else{
                header.style.height = "100px";
                header.style.width = "100px";
                bar.style.height = "100%";
                header.innerHTML = '<section class="bar"><i class="fa-solid fa-bars"></i></section>';
                const SmallBar = header.animate([
                    {
                        height: '100%',
                        width: '500px'
                    },
                    {
                        height: '50%',
                        width: '250px'
                    },
                    {
                        height: '100px',
                        width: '100px'
                    }
                    ], {
                    duration: 1500, // 1.5s,
                    easing: "ease",
                });
            }            
        }
        })
    }
    else{
        header.style.height = "100px";
        header.style.width = "1440px";
        header.innerHTML = `<section class="logo"><a href="index.html"><img src="images/DBDlogo.png" alt="logo"></a></section>
        <nav>
        <section class="item"><a href="DeadByDaylight-Killers.html">KILLERS</a></section>
        <section class="item"><a href="DeadByDaylight-Survivors.html">SURVIVORS</a></section>
        <section class="item"><a href="DeadByDaylight-Realms.html">REALMS</a></section>
        <section class="purchase"><a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/" target="_blank">PURCHASE</a></section>
        </nav>`;
    }
});
addEventListener("load", (event) => {
    let width = screen.width;
    let header = document.getElementsByTagName('header')[0];
    if (width < 1440){
        header.style.height = "100px";
        header.style.width = "100px";
        header.innerHTML = '<section class="bar"><i class="fa-solid fa-bars"></i></section>';
        header.addEventListener("click" , (event) => { // animation
            width = screen.width;
            if (width < 1440){
                
                if (header.style.width != "500px"){
                    header.style.height = "100%";
                    header.style.width = "500px";
                    header.innerHTML = `<section class="bar"><i class="fa-solid fa-bars"></i></section><section class="logo"><a href="index.html"><img src="images/DBDlogo.png" alt="logo"></a></section>
                    <nav>
                    <section class="item"><a href="DeadByDaylight-Killers.html">KILLERS</a></section>
                    <section class="item"><a href="DeadByDaylight-Survivors.html">SURVIVORS</a></section>
                    <section class="item"><a href="DeadByDaylight-Realms.html">REALMS</a></section>
                    <section class="purchase"><a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/" target="_blank">PURCHASE</a></section>
                    </nav>`;
                    let bar = document.getElementsByClassName('bar')[0];
                    bar.style.height = "15%";
                    const BigBar = header.animate([
                        {
                            height: '100px',
                            width: '100px'
                        },
                        {
                            height: '50%',
                            width: '250px'
                        },
                        {
                            height: '100%',
                            width: '500px'
                        }
                        ], {
                        duration: 1000,
                        easing: "ease",
                    });
                }
                else{
                    header.style.height = "100px";
                    header.style.width = "100px";
                    header.innerHTML = '<section class="bar"><i class="fa-solid fa-bars"></i></section>';
                    const SmallBar = header.animate([
                        {
                            height: '100%',
                            width: '500px'
                        },
                        {
                            height: '50%',
                            width: '250px'
                        },
                        {
                            height: '100px',
                            width: '100px'
                        }
                        ], {
                        duration: 1000,
                        easing: "ease",
                    });
                }            
            }
        })
    }
    else{
        header.style.height = "100px";
        header.style.width = "1440px";
        header.innerHTML = `<section class="logo"><a href="index.html"><img src="images/DBDlogo.png" alt="logo"></a></section>
        <nav>
        <section class="item"><a href="DeadByDaylight-Killers.html">KILLERS</a></section>
        <section class="item"><a href="DeadByDaylight-Survivors.html">SURVIVORS</a></section>
        <section class="item"><a href="DeadByDaylight-Realms.html">REALMS</a></section>
        <section class="purchase"><a href="https://store.steampowered.com/app/381210/Dead_by_Daylight/" target="_blank">PURCHASE</a></section>
        </nav>`;
    }
});
