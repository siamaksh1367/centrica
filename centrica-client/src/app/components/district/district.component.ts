import { Component } from '@angular/core';
import { DistrictModel } from 'src/app/models/DistrictModel';
import { DistrictService } from 'src/app/services/district.service';
@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
})
export class DistrictComponent {
  constructor(private service: DistrictService) {}

  allDistricts: DistrictModel[] = [];
  ngOnInit() {
    this.service
      .getAllDistrict()
      .subscribe((x: DistrictModel[]) => (this.allDistricts = x));
  }
}
