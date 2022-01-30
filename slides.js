
 
var SlideList1 = ['img/wiggins_family.jpg', 'img/wiggins_dam2.jpg', 'img/wiggins_graduate.jpg', 'img/wiggins_labbench.jpg', 'img/wiggins_pibbles.jpg'];
var SlideShow1 = new SlideShow(SlideList1, 'slide1', 5000, "SlideShow1");
var SlideList2 = ['img/leone_loki.jpg', 'img/leone_xmas.jpg', 'img/leone_potter.jpg'];
var SlideShow2 = new SlideShow(SlideList2, 'slide2', 5000, "SlideShow2");
var SlideList3 = ['img/spresser_pupper1.jpg', 'img/spresser_pupper2.jpg', 'img/spresser_field.jpg'];
var SlideShow3 = new SlideShow(SlideList3, 'slide3', 5000, "SlideShow3");
var SlideList4 = ['img/hood_library.jpg', 'img/hood_medal.jpg', 'img/hood_rainbow.jpg'];
var SlideShow4 = new SlideShow(SlideList4, 'slide4', 5000, "SlideShow4");
var SlideList5 = ['img/hood_library.jpg', 'img/hood_medal.jpg', 'img/hood_rainbow.jpg'];
var SlideShow5 = new SlideShow(SlideList5, 'slide5', 5000, "SlideShow5");

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

window.onLoad = SlideShow1.play(); SlideShow2.play(); SlideShow3.play(); SlideShow5.play();
