setInterval(ChangeImage, 5000);

const battleForKurundanImages = [
    "https://img.itch.zone/aW1hZ2UvMTEwMDg3Mi82MzU1MTA2LnBuZw==/347x500/4FJV7t.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMDg3Mi82MzU1MTA4LnBuZw==/347x500/VCTMAb.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMDg3Mi82MzU1MTA3LnBuZw==/347x500/apHIY3.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMDg3Mi82MzU1MTA5LnBuZw==/347x500/rnp%2BgD.png"
];

const criticalPathImages = [
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1NzExLnBuZw==/347x500/EGb9zF.png",
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1NzE2LnBuZw==/347x500/tvTnSg.png",
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1NzEyLnBuZw==/347x500/82YVlf.png",
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1NzEzLnBuZw==/347x500/9Iv0bm.png",
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1NzE1LnBuZw==/347x500/VN476n.png",
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1ODM4LnBuZw==/347x500/P9PIwc.png",
    "https://img.itch.zone/aW1hZ2UvMTM4MzAwNi84MDU1ODM5LnBuZw==/347x500/3fulk9.png"
];

const projectEImages = [
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzg1LnBuZw==/347x500/u%2Bv6%2Fc.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzg0LnBuZw==/347x500/yiDLdY.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzg4LnBuZw==/347x500/fPDeVg.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzg3LnBuZw==/347x500/%2FhI3%2BP.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzg2LnBuZw==/347x500/5Y2nPn.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzg5LnBuZw==/347x500/DIx8Zm.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyMzk1LnBuZw==/347x500/nWs8mD.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyNDAwLnBuZw==/347x500/PIwffx.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyNDA4LnBuZw==/347x500/mGEMjB.png",
    "https://img.itch.zone/aW1hZ2UvMTYyNjM3Ni85NTUyNDIzLnBuZw==/347x500/eObMFM.png"
];

const aspargoKnightImages = [
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjU1LnBuZw==/347x500/w%2BNS6Q.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjU2LnBuZw==/347x500/sH5I9L.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjYxLnBuZw==/347x500/vNNjlV.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjU4LnBuZw==/347x500/mHPZEV.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjYwLnBuZw==/347x500/cCFzC8.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjU3LnBuZw==/347x500/ntmQTq.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjU5LnBuZw==/347x500/IvRpGP.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjYzLnBuZw==/347x500/UfbIpK.png",
    "https://img.itch.zone/aW1hZ2UvMTAwOTIwNi81NzQ5NjYyLnBuZw==/347x500/1E1Aq%2F.png"
];

const singularityImages = [
    "https://img.itch.zone/aW1hZ2UvMTMwOTI2My83NjMyMTYwLnBuZw==/347x500/mcDXP1.png",
    "https://img.itch.zone/aW1hZ2UvMTMwOTI2My83NjMyMTYxLnBuZw==/347x500/M1NaMb.png",
    "https://img.itch.zone/aW1hZ2UvMTMwOTI2My83NjMyMTYzLnBuZw==/347x500/rS4slc.png",
    "https://img.itch.zone/aW1hZ2UvMTMwOTI2My83NjMyMTY0LnBuZw==/347x500/xS3Hjj.png",
    "https://img.itch.zone/aW1hZ2UvMTMwOTI2My83NjMyMTYyLnBuZw==/347x500/HEdlOz.png"
];

const allNaturalImages = [
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTMwLnBuZw==/347x500/wNKtiG.png",
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTMxLnBuZw==/347x500/Io7uEA.png",
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTM0LnBuZw==/347x500/PWUP%2Bq.png",
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTM2LnBuZw==/347x500/xJNlU4.png",
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTMyLnBuZw==/347x500/hQj1TI.png",
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTMzLnBuZw==/347x500/m2Um%2FU.png",
    "https://img.itch.zone/aW1hZ2UvMTA1MTQzMC82MDEzOTM1LnBuZw==/347x500/fXx4oz.png"
];

const callOfPetsImages = [
    "https://img.itch.zone/aW1hZ2UvMTY4MTI5OC85OTAxNzM0LnBuZw==/347x500/wAcDbH.png",
    "https://img.itch.zone/aW1hZ2UvMTY4MTI5OC85OTAxNzQ0LnBuZw==/347x500/Dlm0YF.png",
    "https://img.itch.zone/aW1hZ2UvMTY4MTI5OC85OTAxNzg5LnBuZw==/347x500/bRkZMx.png",
    "https://img.itch.zone/aW1hZ2UvMTY4MTI5OC85OTAxNzM2LnBuZw==/347x500/8GV6lQ.png",
    "https://img.itch.zone/aW1hZ2UvMTY4MTI5OC85OTAxNzIxLnBuZw==/347x500/126wsb.png"
];

let currentImageIndex = 0;
let switcher = 0;

let images = []
if(document.URL.includes("projecte.html"))
{
    images = projectEImages;
}
else if(document.URL.includes("battleforkurundan.html"))
{
    images = battleForKurundanImages;
}
else if(document.URL.includes("criticalpath.html"))
{
    images = criticalPathImages;
}
else if(document.URL.includes("aspargoknight.html"))
{
    images = aspargoKnightImages;
}
else if(document.URL.includes("singularity.html"))
{
    images = singularityImages;
}
else if(document.URL.includes("allnatural.html"))
{
    images = allNaturalImages;
}
else if(document.URL.includes("callofpets.html"))
{
    images = callOfPetsImages;
}

function ChangeImage() {
    if(currentImageIndex === images.length - 1) currentImageIndex = 0;
    else currentImageIndex++;

    if(switcher === 0) {
        document.getElementById("backgroundImg").src = images[currentImageIndex];
        document.getElementById("backgroundImg2").classList.remove("fadeOut");
        document.getElementById("backgroundImg2").classList.add("fadeIn");
        document.getElementById("backgroundImg").classList.remove("fadeIn");
        document.getElementById("backgroundImg").classList.add("fadeOut");
    } else {
        document.getElementById("backgroundImg2").src = images[currentImageIndex];
        document.getElementById("backgroundImg").classList.remove("fadeOut");
        document.getElementById("backgroundImg").classList.add("fadeIn");
        document.getElementById("backgroundImg2").classList.remove("fadeIn");
        document.getElementById("backgroundImg2").classList.add("fadeOut");
    }

    if(switcher === 0) switcher = 1;
    else switcher = 0;
}
