import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterListService } from '../services/photo.service';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
	constructor(private masterListService: MasterListService) {}

	ngOnInit() {
		this.masterListService.getMasterList();
	}
}
