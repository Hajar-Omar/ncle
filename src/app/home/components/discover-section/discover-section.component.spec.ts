import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscoverSectionComponent } from './discover-section.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DiscoverSectionComponent', () => {
  let component: DiscoverSectionComponent;
  let fixture: ComponentFixture<DiscoverSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscoverSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
