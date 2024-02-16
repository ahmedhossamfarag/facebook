import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendViewComponent } from './friend-view.component';

describe('FriendViewComponent', () => {
  let component: FriendViewComponent;
  let fixture: ComponentFixture<FriendViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FriendViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
