import { Component } from '@angular/core';
import { MasterListService } from '../services/masterlist.service';

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
      this.items = res.results;
    });
  }
}
