import { Component } from '@angular/core';
import { MasterListService } from '../services/photo.service';

@Component({
  selector: 'app-masterlist',
  templateUrl: 'masterlist.page.html',
  styleUrls: ['masterlist.page.scss'],
})
export class MasterListPage {
  constructor(private masterListService: MasterListService) {}

  public items: any;

  ngOnInit() {
    this.masterListService.getMasterList().subscribe((res) => {
      console.log('loaded');
      this.items = res.results;
      console.log('this.item', this.items);
    });
  }
}
