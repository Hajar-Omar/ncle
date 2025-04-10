import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main-section',
  imports: [IonButton, RouterLink],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
})
export class MainSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
