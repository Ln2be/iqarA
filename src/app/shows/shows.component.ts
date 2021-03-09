import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllService } from '../all.service';
import * as L from 'leaflet';


@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  posts:any
  location = {
    lat:'',
    lng:''
  }
  constructor(
    private route:ActivatedRoute,
    private service:AllService
  ) { }

  ngOnInit(): void {
    var params = this.route.params
    params.forEach(param=>{
      this.location.lat = param["lat"]
      this.location.lng = param["lng"]

      // delete param.lat
      // delete param.lng

      var queryString = Object.keys(param).map(key => key + '=' + param[key]).join('&');
      console.log(queryString)
      this.service.get('?'+queryString).subscribe(posts=>{
        this.posts=posts
        this.service.log(posts)
      },
      error=>this.service.log(error)
      )
    })
  }

  getDistance(lat:any, lng:any){
    var mPoint = L.latLng(lat, lng)
    var oPoint = L.latLng(+this.location.lat, +this.location.lng)
    var distance = mPoint.distanceTo(oPoint)
    return Math.floor(distance)+' م'
  }

}
