window.onload = (() => {
    showContent();
    homeContent();
    sessionStorage["mobile_headerOpened"] = 0;
    var viewportWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (viewportWidth < "482") {
    };
})

function hideContent() {
    var contentId = document.getElementById("content");
    contentId.style.opacity = "0";
    setTimeout(() => {
        contentId.style.display = "none";
    }, 200);
}
function showContent() {
    var contentId = document.getElementById("content");
    contentId.style.display = "unset";
    setTimeout(() => {
        contentId.style.opacity = "1";
    }, 1);
}

function homeContent() {
    hideContent();
    sessionStorage["mobile_headerOpened"] = 0;
    setTimeout(() => {
        document.getElementById("content").innerHTML = `
<pre>
  Hi! I'm <b>UnitedCatdom</b>, but also known as <b>CuteBlade</b>.
  I'm a Gamer, YouTuber, Programmist and Game Developer.

  In Gaming section, My favorite titles are:
  • Minecraft
  • Krunker
  • Farming Simulator (all series tbh)
  • Grand Theft Auto (San Andreas, IV)
  • Team Fortress (2, Classic)
  • osu!
  • Tanki Online
  • Call of Duty
  • Euro Truck Simulator 2
  • Tom Clancy's Rainbow Six Siege

  As YouTuber, My main channel is:
    <iframe ng-non-bindable="" frameborder="0" hspace="0" marginheight="0" marginwidth="0" scrolling="no" style="position: static; top: 0px; width: 173px; margin: 0px; border-style: none; left: 0px; visibility: visible; height: 48px;" tabindex="0" vspace="0" width="100%" id="I0_1633880790906" name="I0_1633880790906" src="https://www.youtube.com/subscribe_embed?usegapi=1&amp;channel=UCA3-ksO9eaTo-xYN07Ek7Ww&amp;channelid=UCA3-ksO9eaTo-xYN07Ek7Ww&amp;layout=full&amp;theme=default&amp;origin=https%3A%2F%2Fstatic.parastorage.com&amp;gsrc=3p&amp;ic=1&amp;jsh=m%3B%2F_%2Fscs%2Fapps-static%2F_%2Fjs%2Fk%3Doz.gapi.pl.jJRqSNVmAJU.O%2Fam%3DAQ%2Fd%3D1%2Frs%3DAGLTcCPh6WSzxuHMZuU9oWslm-AuNlW2ew%2Fm%3D__features__#_methods=onPlusOne%2C_ready%2C_close%2C_open%2C_resizeMe%2C_renderstart%2Concircled%2Cdrefresh%2Cerefresh%2Conload&amp;id=I0_1633880790906&amp;_gfid=I0_1633880790906&amp;parent=https%3A%2F%2Fstatic.parastorage.com&amp;pfname=&amp;rpctoken=72964349" data-gapiattached="true"></iframe>

  Continuing, as Programist I love JavaScript language. I even create games in JS!
  See more info about games on my <b>Itch.io</b> page. See link in <button onclick="projectsContent()">projects</button> section.

  My PC specs, if someone's curious:
  • CPU - <u>Intel® Core™ i3-2120</u>
  • RAM - <u>4GB</u>
  • GPU - <u>Intel® HD Graphics™ 2000</u>
  • Storage - <u>HDD 500GB | SSD 120GB</u>
  • OS - <u>KDE Neon Linux</u>

  My laptop specs:
  • CPU - <u>Intel® Core™ i3-3217U</u>
  • RAM - <u>8GB</u>
  • GPU - <u>Intel® HD Graphics™ 4000</u>
  • Storage - <u>HDD 320GB</u>
  • OS - <u>KDE Neon Linux</u>






</pre>
<iframe src="https://discord.com/widget?id=860257568718323732&theme=dark" id="discordEmbed" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    `;
    showContent();
    }, 200);

}
function projectsContent() {
    hideContent();
    sessionStorage["mobile_headerOpened"] = 0;
    setTimeout(() => {
        document.getElementById("content").innerHTML = `
<pre>
  Here's list of almost all my projects:
  <a href="https://github.com/CuteBladeYT" target="_blank">Github: <img src="./assets/images/ZZZ_ICON_github.png" class="socialImg"></a>
  • <b>Amperior</b>, the biggest project I ever made with My Studio. <a href="https://github.com/CuteBladeYT/Amperior" target="_blank"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a> <a href="https://unitedcatdom.wixsite.com/amperior"><img src="./assets/images/ZZZ_ICON_website.png" class="projectsIcon"></a>
  • <b>uGame</b>, simple Batch game I made for fun and learning purposes. <a href="https://github.com/CuteBladeYT/uGame" target="_blank"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a>
  • <b>Train Rails</b>, second biggest project I ever made. Text-Based interactive story. <a href="https://github.com/CuteBladeYT/Train-Rails" target="_blank"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a> <a href="https://unitedcatdom.itch.io/train-rails"><img src="./assets/images/ZZZ_ICON_itch.svg" class="projectsIcon"></a>
  • <b>spotDL-SDA</b>, Spotify Track downloader application written in Batch. Uses FFMPEG and spotDL libraries. <a href="https://github.com/CuteBladeYT/spotDL-SDA" target="_blank"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a>
  • <b>CSS</b>, some CSS projects for popular web services. Mainly just theme changer. <a href="https://github.com/CuteBladeYT/CSS-Projects" target="_blank"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a>
  • <b>DSMS License</b>, my own License for Softwares or other projects. <a href="https://github.com/CuteBladeYT/DSMS-License/blob/main/README.md" target="_blank"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a>
  • <b>JavaScripts</b>, random JavaScript projects I made. <a href="https://github.com/CuteBladeYT/JavaScripts"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a>
  • <b>Batch Projects</b>, same as JavaScripts, but with Batch. <a href="https://github.com/CuteBladeYT/Batch-Projects"><img src="./assets/images/ZZZ_ICON_github.png" class="projectsIcon"></a>
</pre>
    `;
    showContent();
    }, 200);
}
function socialsContent() {
    hideContent();
    sessionStorage["mobile_headerOpened"] = 0;
    setTimeout(() => {
        document.getElementById("content").innerHTML = `
<pre>
  My socials :)
  • <a href="https://discord.com/users/540104316103688193/" target="_blank">Discord <img src="./assets/images/ZZZ_ICON_discord.png" class="socialImg"></a>
  • <a href="https://www.youtube.com/channel/UCA3-ksO9eaTo-xYN07Ek7Ww/" target="_blank">YouTube <img src="./assets/images/ZZZ_ICON_youtube.png" class="socialImg"></a>
  • <a href="https://twitter.com/blade_cute/" target="_blank">Twitter <img src="./assets/images/ZZZ_ICON_twitter.png" class="socialImg"></a>
  • <a href="https://www.instagram.com/unitedcatdom/" target="_blank">Instagram <img src="./assets/images/ZZZ_ICON_instagram.png" class="socialImg"></a>
  • <a href="https://www.twitch.tv/cuteblade_" target="_blank">Twitch <img src="./assets/images/ZZZ_ICON_twitch.png" class="socialImg"></a>
  • <a href="https://unitedcatdom.itch.io/" target="_blank">Itch.io <img src="./assets/images/ZZZ_ICON_itch.svg" class="socialImg"></a>
  • <a href="https://github.com/CuteBladeYT" target="_blank">Github <img src="./assets/images/ZZZ_ICON_github.png" class="socialImg"></a>
</pre>
<iframe src="https://discord.com/widget?id=860257568718323732&theme=dark" id="discordEmbed" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    `;
    showContent();
    }, 200);
    
}

function mobile_headerButtons() {
    var mobile_headerOpened = parseFloat(sessionStorage["mobile_headerOpened"]);
    var header_buttons = document.getElementById("header_buttons");
    var header_buttons_innerHTML = header_buttons.innerHTML;
    var contentElement = document.getElementById("content");
    if (mobile_headerOpened == 0) {
        hideContent();
        sessionStorage["mobile_headerOpened"] = 1;
        setTimeout(() => {
            contentElement.innerHTML = header_buttons_innerHTML;
            showContent();
        }, 200);
    } else if (mobile_headerOpened == 1) {
        sessionStorage["mobile_headerOpened"] = 0;
        homeContent();
    }
}