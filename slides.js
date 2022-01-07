
 
var SlideList1 = ['img/wiggins_dam.jpg', 'img/wiggins_graduate.jpg', 'img/wiggins_labbench.jpg'];
var SlideShow1 = new SlideShow(SlideList1, 'slide1', 5000, "SlideShow1");
var SlideList2 = ['img/leone_loki.jpg', 'img/leone_xmas.jpg', 'img/leone_potter.jpg'];
var SlideShow2 = new SlideShow(SlideList2, 'slide2', 5000, "SlideShow2");

function SlideShow(slideList, image, speed, name)
    {
        this.slideList = slideList;
        this.image = image;
        this.speed = speed;
        this.name = name;
        this.current = 0;
        this.timer = 0;
}
            
function switchImage(imgName, imgSrc)
    {
        if (document.images)
    {
        if (imgSrc != "none")
    {
        document.images[imgName].src = imgSrc;
    }
  }
}
            
SlideShow.prototype.play = SlideShow_play;
    function SlideShow_play()
    {
    with(this)
    {
    if(current++ == slideList.length-1) current = 0;
            switchImage(image, slideList[current]);
            clearTimeout(timer);
            timer = setTimeout(name+'.play()', speed);
  }
}

window.onLoad=SlideShow1.play();SlideShow2.play();
