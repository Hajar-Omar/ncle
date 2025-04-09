import { Component, OnInit } from '@angular/core';
import { IonText, IonNavLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-footer',
  imports: [IonText, IonNavLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
