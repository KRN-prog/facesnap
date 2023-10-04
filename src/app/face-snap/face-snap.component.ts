import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap
  buttonText!: string
  isLiked!: boolean

  ngOnInit(): void {
    this.buttonText = "Like"
    this.isLiked = false
  }
  
  addOnLike() {
    switch (this.buttonText) {
      case "Like":
        this.faceSnap.like++
        this.buttonText = "Unlike"
        this.isLiked = true
        break;
      
      default:
        this.faceSnap.like--
        this.buttonText = "Like"
        this.isLiked = true
        break;
    }
  }
}
