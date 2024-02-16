import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedViewComponent } from './published-view.component';

describe('PublishedViewComponent', () => {
  let component: PublishedViewComponent;
  let fixture: ComponentFixture<PublishedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
