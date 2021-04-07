import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  carDetails:CarDetail[]=[];
  brands:Brand[]=[];
  currentBrand:Brand;
  dataLoaded = false;

  constructor(private carService:CarService, private activatedRoute:ActivatedRoute,
    private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands()
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandName"]){
        this.getCarsByBrand(params["brandName"])
      }else{
        this.getCarDetails()
      }
    })

  }

 getCarDetails(){
   this.carService.getCarDetails().subscribe(response=>{
     this.carDetails = response.data
       this.dataLoaded = true;
   })
  }

  getCarsByBrand(brandName:string){
    this.carService.getCarsByBrand(brandName).subscribe(response=>{
      this.carDetails = response.data
      this.dataLoaded = true;
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
      this.dataLoaded = true;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }


}
