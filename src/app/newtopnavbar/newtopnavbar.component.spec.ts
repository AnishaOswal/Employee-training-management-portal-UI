import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtopnavbarComponent } from './newtopnavbar.component';

describe('NewtopnavbarComponent', () => {
  let component: NewtopnavbarComponent;
  let fixture: ComponentFixture<NewtopnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtopnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtopnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
