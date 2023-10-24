import { Component } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  images = [
    {
      url: 'image1.png',
      alt: 'Image 1',
      description: 'It is 1st image'
    },
    {
      url: 'image2.png',
      alt: 'Image 2',
      description: 'It is 2nd image'
    },
    {
      url: 'image3.png',
      alt: 'Image 3',
      description: 'It is 3rd image'
    },
    {
      url: 'image4.png',
      alt: 'Image 4',
      description: 'It is 4th image'
    }
  ];
}
