import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  widthCard = '304px';
  backgroundColorCard = 'rgba(72, 137, 248, 0.1)';
  borderRadiusCard = '4px';
  borderCard = '0.446429px solid #4889F8';
  heightCard = '250px';


  borderRadiusImage = '4px';
  heightImage = '210px';
  widthImage = '290px';
  backgroundColorImage = 'linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(72, 137, 248, 0.1)';
  borderImage = '0.446429px solid #4889F8';

  colorText = '#4889F8';
  fontSizeText = '12px';
  lineHeightText = '16px';
  fontWeightText = '600';

  emptyImageUrl = 'assets/images/emptyImageUploader.png';
  // imagesArray = ['assets/images/dummyImage.png', 'assets/images/dummyImage.png', 'assets/images/dummyImage.png']
  imagesArray = []
  constructor() { }

  ngOnInit(): void {
  }

  onFileDropped(event: any){
    let target = event.target as HTMLInputElement;
    let files = target.files as any;
    this.postApiFile(files[0]);
  }

  postApiFile(file: any){
    console.log(file);

    // api for file uploading
  }
}
