import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoLocalStorageComponent } from './crypto-local-storage.component';

describe('CryptoLocalStorageComponent', () => {
  let component: CryptoLocalStorageComponent;
  let fixture: ComponentFixture<CryptoLocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoLocalStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
