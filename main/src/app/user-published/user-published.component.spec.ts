import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPublishedComponent } from './user-published.component';

describe('UserPublishedComponent', () => {
  let component: UserPublishedComponent;
  let fixture: ComponentFixture<UserPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPublishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
