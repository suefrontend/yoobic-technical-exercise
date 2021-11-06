import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MasterListPage } from './masterlist.page';

describe('MasterListPage', () => {
  let component: MasterListPage;
  let fixture: ComponentFixture<MasterListPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MasterListPage],
        imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
      }).compileComponents();

      fixture = TestBed.createComponent(MasterListPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
