import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MasterListService } from '../services/photo.service';

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.page.html',
  styleUrls: ['detail.page.scss'],
})
export class DetailPage {
  constructor(
    private route: ActivatedRoute,
    private masterListService: MasterListService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMaster();
  }
  public item: any;

  getMaster(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.masterListService
      .getMaster(id)
      .subscribe((target) => (this.item = target));
  }
}
