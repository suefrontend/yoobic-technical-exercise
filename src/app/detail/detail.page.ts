import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MasterListService } from '../services/masterlist.service';

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

  public item: any;

  ngOnInit(): void {
    this.getMaster();
  }

  getMaster(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.masterListService
      .getMaster(id)
      .subscribe((detail) => (this.item = detail));
  }

  goBack(): void {
    this.location.back();
  }
}
