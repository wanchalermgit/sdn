import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdnHomeComponent } from './sdn-home.component';

describe('SdnHomeComponent', () => {
  let component: SdnHomeComponent;
  let fixture: ComponentFixture<SdnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdnHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
