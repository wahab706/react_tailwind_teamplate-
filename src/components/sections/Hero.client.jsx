import banner1 from '../../assets/banner1.webp'

export default function Hero() {


    return (
        <section className="gird ">
            <section className="relative h-99 bg-blue bg-no-repeat bg-cover bg-center small-banner"
                style={{ backgroundImage: `url(${banner1})` }} >
                <div className="absolute justify-center flex flex-col left-0 right-0 
               md:bottom-24 lg:bottom-18 xl:bottom-10 m-auto small-banner-text">
                    <h1 className="text-white text-center sm:text-4xl 2xl:text-5xl" >
                        Shopify
                        <span className='ml-2 font-semibold text-pink' id='text' ></span>
                        <div className='console-underscore text-pink' id='console'>&#124;</div>
                    </h1>
                    <p className="text-white text-center mt-4 sm:text-lg xl:text-xl">
                        Watch us rock your world with our Shopify capabilities
                    </p>
                    <button className="text-white bg-parrot uppercase justify-center 
                    mt-5 mx-auto rounded-md  hover:delay-200 hover:ease-in-out"
                         >
                        Request a free quote
                    </button>
                </div>
            </section>
        </section >
    );
}

consoleText(['Experts', 'Designers', 'Developers', 'Marketers'], 'text');

function consoleText(words, id) {
    var color = ['#e7277c'];
    // var visible = true;
    // var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;


    window.setInterval(function () {
        var target = document.getElementById(id)
        target.setAttribute('style', 'color:' + color[0])

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = color.shift();
                color.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + color[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        }
        else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    // window.setInterval(function () {
    //     if (visible === true) {
    //         con.className = "console-underscore hidden text-pink"
    //         visible = false;

    //     } else {
    //         con.className = "console-underscore text-pink"

    //         visible = true;
    //     }
    // }, 400)
}


