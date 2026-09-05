/* =========================
   OPEN THE WEBSITE
   ========================= */

function openHeart() {

    const openingScreen =
        document.getElementById("openingScreen");

    const mainContent =
        document.getElementById("mainContent");

    const photos =
        document.querySelectorAll(".photo-card");


    openingScreen.classList.add("hide");


    setTimeout(function () {

        openingScreen.style.display = "none";

        mainContent.classList.add("show");


        setTimeout(function () {

            photos.forEach(function (photo, index) {

                setTimeout(function () {

                    photo.classList.add("visible");

                }, index * 500);

            });

        }, 500);

    }, 800);
}


/* =========================
   SECRET MESSAGE
   ========================= */

function openSecret() {

    const secretOverlay =
        document.getElementById("secretOverlay");

    secretOverlay.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeSecret() {

    const secretOverlay =
        document.getElementById("secretOverlay");

    secretOverlay.classList.remove("show");

    document.body.style.overflow = "";
}


/* =========================
   FINAL TYPING SURPRISE
   ========================= */

let typingStarted = false;

let typingTimer;


/* =========================
   OPEN FINAL SURPRISE
   ========================= */

function openFinalSurprise() {

    const finalOverlay =
        document.getElementById("finalOverlay");

    const typingText =
        document.getElementById("typingText");

    const finalHeart =
        document.getElementById("typingFinalHeart");


    if (!finalOverlay) {

        console.log("Final overlay not found!");

        return;

    }


    // Show final screen
    finalOverlay.classList.add("show");

    document.body.style.overflow = "hidden";


    // Reset typing
    clearTimeout(typingTimer);

    typingText.textContent = "";

    finalHeart.classList.remove("show");

    typingStarted = false;


    // Start typing after the card appears
    setTimeout(function () {

        startTyping();

    }, 1000);

}


/* =========================
   TYPING EFFECT
   ========================= */

function startTyping() {

    if (typingStarted) {
        return;
    }


    typingStarted = true;


    const typingText =
        document.getElementById("typingText");


    const message = `Happy 5th Monthsary, Loveyyy. 💗

Five months with you have given me so many memories, so much happiness, and so many reasons to be grateful that I found you.

Thank you for being part of my life, for making ordinary moments feel special, and for being someone I can laugh with, and dream with.

I know five months may only be the beginning, but I hope this is just the start of many more months, years, adventures, and memories together.

No matter how many pictures we take, songs we share, or memories we make, I know there will always be another moment with you that I'll want to keep forever.

You are someone very special to me, bebe ko. I hope that you will always remember that no matter what happen.

And if there's one thing I want you to remember from this little website...

it's this:

I LOVE YOU BEBEEEEE. ❤️

Five months down...

hopefully moreeeeeeeee to go. 💗

Always yours,
Sam (mapagmahal at ikaw lang ang mahal)`;


    let index = 0;


    function typeCharacter() {

        if (index < message.length) {

            typingText.textContent +=
                message.charAt(index);

            index++;


            // Slightly different typing speed
            let speed = 35;


            // Pause longer after punctuation
            if (
                message.charAt(index - 1) === "." ||
                message.charAt(index - 1) === "!" ||
                message.charAt(index - 1) === "?"
            ) {

                speed = 250;

            }


            // Pause for line breaks
            if (
                message.charAt(index - 1) === "\n"
            ) {

                speed = 400;

            }


            typingTimer =
                setTimeout(
                    typeCharacter,
                    speed
                );


        } else {

            // Typing finished
            showFinalHeart();

        }

    }


    typeCharacter();

}


/* =========================
   SHOW FINAL HEART
   ========================= */

function showFinalHeart() {

    const finalHeart =
        document.getElementById("typingFinalHeart");


    setTimeout(function () {

        finalHeart.classList.add("show");

    }, 500);

}


/* =========================
   CLOSE FINAL SURPRISE
   ========================= */

function closeFinalSurprise() {

    const finalOverlay =
        document.getElementById("finalOverlay");


    clearTimeout(typingTimer);


    finalOverlay.classList.remove("show");


    document.body.style.overflow = "";


    typingStarted = false;

}


/* =========================
   ESC KEY
   ========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeSecret();

            closeFinalSurprise();

        }

    }
);