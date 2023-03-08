import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyContactComponent } from './form-modify-contact.component';

describe('FormModifyContactComponent', () => {
  let component: FormModifyContactComponent;
  let fixture: ComponentFixture<FormModifyContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModifyContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModifyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
