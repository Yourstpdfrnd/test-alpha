    const bannerOne = document.querySelector('.hero__banner-img_game-1');
    const bannerTwo = document.querySelector('.hero__banner-img_game-2');
    const bannerThree = document.querySelector('.hero__banner-img_game-3');
    const bannerFour = document.querySelector('.hero__banner-img_game-4');
    const bannerFive = document.querySelector('.hero__banner-img_game-5');
    const bannerSix = document.querySelector('.hero__banner-img_game-6');
    const bannerSeven = document.querySelector('.hero__banner-img_game-7');
    const bannerEight = document.querySelector('.hero__banner-img_game-8');
    const bannerNine = document.querySelector('.hero__banner-img_game-9');

    $('.hero__banner').on('mousemove', startRotate);
    $('.hero__banner').on('mouseout', stopRotate);

    function startRotate(event){
        const cardItem = this.querySelector('.hero__banner-wrapper');
        const halfH = cardItem.offsetHeight/2;
        const halfW = cardItem.offsetWidth/2;
        cardItem.style.transform = 'rotateX(' + -(event.offsetY - halfH)/20 + 'deg) rotateY(' + (event.offsetX - halfW)/20 + 'deg)';
        bannerOne.style.top = '108px';
        bannerOne.style.left = '5px';
        bannerTwo.style.top = '225px';
        bannerTwo.style.left = '15px';
        bannerThree.style.top = '400px';
        bannerThree.style.left = '135px';
        bannerFour.style.top = '310px';
        bannerFour.style.left = '266px';
        bannerFive.style.top = '560px';
        bannerFive.style.left = '330px';
        bannerSix.style.top = '105px';
        bannerSix.style.left = '170px';
        bannerSeven.style.top = '-5px';
        bannerSeven.style.left = '15px';
        bannerEight.style.top = '-24px';
        bannerEight.style.left = '265px';
        bannerNine.style.top = '550px';
        bannerNine.style.left = '20px';
      
    }

    function stopRotate(event){
        const cardItem = this.querySelector('.hero__banner-wrapper');
        cardItem.style.transform = 'rotate(0)';
        bannerOne.style.top = '100px';
        bannerOne.style.left = '-23px';
        bannerTwo.style.top = '215px';
        bannerTwo.style.left = '0px';
        bannerThree.style.top = '350px';
        bannerThree.style.left  = '100px';
        bannerFour.style.top = '260px';
        bannerFour.style.left = '255px';
        bannerFive.style.top = '470px';
        bannerFive.style.left = '300px';
        bannerSix.style.top = '90px';
        bannerSix.style.left = '120px';
        bannerSeven.style.top = '0';
        bannerSeven.style.left = '0';
        bannerEight.style.top = '-14px';
        bannerEight.style.left = '245px';
        bannerNine.style.top = '505px';
        bannerNine.style.left = '0px';
       
    }