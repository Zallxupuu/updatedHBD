const giftBox = document.querySelector(".container-gift-box");

const style = document.createElement("style");
style.innerHTML = `
@keyframes up {
    from    {transform:translateY(0);}
    to  {
        transform:translateY(-30px);
        opacity:0;
        }
}
        
@keyframes fade-out {
from{opacity:100;}
to{
opacity:0;
transform:translateY(20px);
}
}`;


document.head.appendChild(style);


giftBox.addEventListener("click", () => {
    const mumsic = document.querySelector(".music")

    mumsic.play()

  const giftCap = document.querySelector(".gift-cap");
  const ribbon = document.querySelector(".ribbon");
  const message = document.querySelector(".pesan");
  const info = document.querySelector(".info");
  const giftBody = document.querySelector(".gift-body");

  info.style.animation = "fade-out 1s";
  setTimeout(() => {
    info.remove();
  }, 900);
  ribbon.style.animation = "up 2s ease-in-out";
  giftCap.style.animation = "up 2s ease-in-out";

  setTimeout(() => {
    ribbon.style.visibility = "hidden";
    giftCap.style.visibility = "hidden";
    giftBody.style.animation = "fade-out 1.5s ease";
    setTimeout(() => {
        giftBody.style.visibility = "hidden";
    }, 2000);

    setInterval(()=>{
        if ((giftBody.style.visibility = "hidden")) {
            message.style.animation = "slide-up 2s ease";
            message.style.visibility = "visible";
        }
    }, 1400)
  }, 1900);
});

window.addEventListener("load", () => {
  const canvas = document.getElementById("confetti");

  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  myConfetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 },
  });
});
