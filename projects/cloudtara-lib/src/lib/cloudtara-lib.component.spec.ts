import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudtaraLibComponent } from './cloudtara-lib.component';

describe('CloudtaraLibComponent', () => {
  let component: CloudtaraLibComponent;
  let fixture: ComponentFixture<CloudtaraLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudtaraLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudtaraLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
