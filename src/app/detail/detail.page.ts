import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMaster();
  }
  public item: any;

  getMaster(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id', id);
    this.masterListService
      .getMaster(id)
      .subscribe((target) => (this.item = target));
  }

  goBack(): void {
    this.location.back();
  }
}
