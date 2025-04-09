import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  imports: [IonHeader, IonTitle, IonToolbar],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
