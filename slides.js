
 
var SlideList1 = ['img/wiggins_family.jpg', 'img/wiggins_dam2.jpg', 'img/wiggins_graduate.jpg', 'img/wiggins_labbench.jpg', 'img/wiggins_pibbles.jpg'];
var SlideShow1 = new SlideShow(SlideList1, 'slide1', 5000, "SlideShow1");
var SlideList2 = ['img/desi1.jpg', 'img/desi2.jpg', 'img/desi3.jpg', 'img/desi4.jpg', 'img/desi5.jpg'];
var SlideShow2 = new SlideShow(SlideList2, 'slide2', 5000, "SlideShow2");
var SlideList3 = ['img/claudia1.jpeg', 'img/claudia2.jpeg', 'img/claudia3.jpeg'];
var SlideShow3 = new SlideShow(SlideList3, 'slide3', 5000, "SlideShow3");
var SlideList4 = ['img/Mapesgeneticsphotos.png'];
var SlideShow4 = new SlideShow(SlideList4, 'slide4', 5000, "SlideShow4");


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

window.onLoad = SlideShow1.play(); SlideShow2.play(); SlideShow3.play(); SlideShow4.play();
