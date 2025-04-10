import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonCol,
  IonGrid,
  IonRow,
  IonImg,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-discover-section',
  imports: [IonGrid, IonRow, IonCol, RouterLink, IonImg, IonButton],
  templateUrl: './discover-section.component.html',
  styleUrls: ['./discover-section.component.scss'],
})
export class DiscoverSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
