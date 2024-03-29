import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWatchComponent } from './user-watch.component';

describe('UserWatchComponent', () => {
  let component: UserWatchComponent;
  let fixture: ComponentFixture<UserWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
