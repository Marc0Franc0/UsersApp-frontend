import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModifyUserComponent } from './form-modify-user.component';

describe('FormModifyUserComponent', () => {
  let component: FormModifyUserComponent;
  let fixture: ComponentFixture<FormModifyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormModifyUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormModifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
