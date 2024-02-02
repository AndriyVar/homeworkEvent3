'use strict'

class  Gallery {
    constructor() {
        this.imageList = document.querySelector('.image__list');
        this.fullPicture = document.querySelector('.full__picture img');
        
        this.imageList.addEventListener('click', this.transferImages.bind(this));
    }
  
    transferImages(event) {
        const clickedImg = event.target.closest('img');
    
        if (clickedImg) {
            const src = clickedImg.getAttribute('src');
            this.fullPicture.setAttribute('src', src);
        }
    }

    init() {
        this.generateFullImage();
    }
}