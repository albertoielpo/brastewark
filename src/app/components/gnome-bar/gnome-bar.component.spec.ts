import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeBarComponent } from './gnome-bar.component';

describe('GnomeBarComponent', () => {
  let component: GnomeBarComponent;
  let fixture: ComponentFixture<GnomeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnomeBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
