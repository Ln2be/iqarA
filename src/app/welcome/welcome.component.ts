import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { icon } from "leaflet";
import { AllService } from "../all.service";
declare var L:any; 

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class WelcomeComponent implements OnInit {


  data = [
    {
      type: "Feature",
      properties: {
        name: "كرفور مدريد",
      },
      geometry: {
        type: "Point",
        coordinates: [18.079, -15.9656],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مجمغ البيت",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0774, -15.9594],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور لكبيد",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0764, -15.9558],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور تنسويلم",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0737, -15.9457],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "سوق ول الحسن",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0696, -15.9185],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "جامع الهدى",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0687, -15.9092],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور انبيت عشرة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0672, -15.898],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "وقفة توجنين",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0666, -15.8943],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مسجد ول انويكظ",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0642, -15.8852],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور الدايات اثلاثة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0449, -15.9737],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور ناصي",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0578, -15.9746],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور المعرض",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0605, -15.9732],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كتينة المدرعات",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0663, -15.9708],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور الرابع و العشرين",
      },
      geometry: {
        type: "Point",
        coordinates: [18.071, -15.9357],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "اصويلة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0699, -15.9259],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "اتاك الخير",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0622, -15.9386],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة كيفة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0617, -15.9223],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة شهرزاد",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0595, -15.9458],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور ادرار",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0452, -15.9307],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مجمع السلام",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0495, -15.9596],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة الدعاة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.043, -15.9554],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الشيارة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0506, -15.9406],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور مسجد النور",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0385, -15.9625],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "حي الحرس",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0675, -15.9632],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ام القصر",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0715, -15.9572],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الداية عشرين",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0666, -15.9494],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مستشفى الصداقة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0637, -15.9576],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور الداية 6",
      },
      geometry: {
        type: "Point",
        coordinates: [18.052, -15.9656],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور الداية 11",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0561, -15.961],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ليزين الخظرة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0742, -15.9673],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "سوف عثمان",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0699, -15.9692],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Carafour Yero Sarr",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0663, -15.9831],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور بداه",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0591, -15.9945],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Hotel Koumbi Saleh",
      },
      geometry: {
        type: "Point",
        coordinates: [18.07, -15.9995],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Hotel Ikrama",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0783, -16.0015],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "اتحادية الصيد التقليدي",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1022, -16.0201],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Epicerie Malika",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1019, -16.0124],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ُEpicerie jaune",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0915, -16.0095],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الخارجية",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1122, -15.9888],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "PETRO DIS",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1239, -15.9829],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "king pharma",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1245, -16.0025],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "حمام النيل",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1195, -16.0],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "pharmacie bienvenue",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1122, -16.0],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "playground park",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1287, -15.9959],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "big market",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1079, -15.9988],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور اميرة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1037, -15.9978],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "سفارة امريكا",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0981, -15.9958],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "المستشفى الوطني",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0869, -15.9869],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "سوق العاصمة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0866, -15.9801],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "موريتانيا الوان",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0812, -15.976],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مستشفى الشيخ زايد",
      },
      geometry: {
        type: "Point",
        coordinates: [18.075, -15.9351],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الوطنية للالبان",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0836, -15.9196],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مزارع النعناع",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0767, -15.9037],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة الرضى",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0778, -15.9135],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور المقاومة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1084, -15.9221],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ملعب دار النعيم",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1023, -15.9232],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بتيك جمبو",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1014, -15.9276],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مجمع الصفا",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0974, -15.9308],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة المسافر",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1377, -15.9213],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مجمع الطينطان",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1521, -15.9282],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة تمبدغة",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1395, -15.9383],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "الخامعة اللبنانية",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1193, -15.9668],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "بقالة 27 رمضان",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1185, -15.9605],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "المستشفى العسكري",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1098, -15.9523],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور ول اماه",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0989, -15.9583],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "ادارة ماتل",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1066, -15.9669],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "القصر الرئاسي",
      },
      geometry: {
        type: "Point",
        coordinates: [18.096, -15.9716],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "سفارة فرنسا",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0951, -15.9845],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "عيادة الشفاء",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1005, -15.9844],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "موريسانتر",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1078, -15.973],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور SNDE",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1182, -15.9751],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "اتاك الخير",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1273, -15.9634],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور الصكوك",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1278, -15.9381],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور عزيز",
      },
      geometry: {
        type: "Point",
        coordinates: [18.119, -15.9368],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور الحي الساكن",
      },
      geometry: {
        type: "Point",
        coordinates: [18.1241, -15.9327],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور ول ابادو",
      },
      geometry: {
        type: "Point",
        coordinates: [18.115, -15.9202],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مفوضية دار النعيم 2",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0835, -15.9436],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "فيراح الديك",
      },
      geometry: {
        type: "Point",
        coordinates: [17.9925, -15.9751],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مسجد التوبة (الدعاة)",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0057, -15.9769],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور بقالة عزيز",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0037, -15.9598],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "مستشفى برحيل 16",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0143, -15.959],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور قندهار",
      },
      geometry: {
        type: "Point",
        coordinates: [18.03, -15.9607],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور المختار",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0321, -15.9517],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور عبدالله",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0221, -15.9328],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "عيادة الرضوان",
      },
      geometry: {
        type: "Point",
        coordinates: [18.0356, -15.9289],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "كرفور ديمي",
      },
      geometry: {
        type: "Point",
        coordinates: [18.042, -15.9458],
      },
    },
  ];

  inIfo = {
    kind: "",
    location: {
      lat: 0,
      lng: 0,
    },
  };

  searchForm = {
    ne: {
      lat: 0,
      lng: 0,
    },
    sw: {
      lat: 0,
      lng: 0,
    },
  };

  private map: any;

  constructor(private service: AllService, private router: Router) {}

  ngOnInit(): void {
    var user = this.service.getUser();
    // this.router.navigate(['/mposts', {password:user, search:'latest'}])
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [18.07908049761971, -15.965237617492678],
      zoom: 14,
    });

    var greenIcon = L.icon({
      iconUrl: "assets/house.png",
      shadowUrl: "assets/house_shadow.png",

      // iconSize:     [30, 30], // size of the icon
      // shadowSize:   [30, 30], // size of the shadow
      // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    var states = [{
      "type": "Feature",
      "properties": {"party": "Republican"},
      "geometry": {
          "type": "Polygon",
          "coordinatess": [[
              [-104.05, 48.99],
              [-97.22,  48.98],
              [-96.58,  45.94],
              [-104.03, 45.94],
              [-104.05, 48.99]
          ]]
      }
  }, {
      "type": "Feature",
      "properties": {"party": "Democrat"},
      "geometry": {
          "type": "Polygon",
          "coordinatess": [[
              [-109.05, 41.00],
              [-102.06, 40.99],
              [-102.03, 36.99],
              [-109.04, 36.99],
              [-109.05, 41.00]
          ]]
      }
  }];
  var dataOne = {
    "type": "Feature",
    "properties": {
      "name": "كرفور مدريد",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [18.079, -15.9656],
    },
  }
  
    L.geoJSON(dataOne, {
      pointToLayer: function(geo, latlng) {
        var myIcon = L.divIcon({className: 'my-div', html:'hello'})
        return L.marker(latlng, {icon: myIcon})
      }
      }).addTo(this.map)

    var theMarker = {};
    var theCircle: L.Circle;
    this.map.on("click", (e: any) => {
      if (theMarker != undefined) {
        this.map.removeLayer(theMarker);
      }
      if (theCircle != undefined) {
        this.map.removeLayer(theCircle);
      }

      theMarker = L.marker(e.latlng, {
        icon: greenIcon,
        alt: "I",
        draggable: true,
      })
        .on("dragend", (e) => {
          this.inIfo.location = e.target._latlng;
        })
        .addTo(this.map);

      theCircle = L.circle(e.latlng, { radius: 500 }).addTo(this.map);

      this.searchForm.ne = theCircle.getBounds().getNorthEast();
      this.searchForm.sw = theCircle.getBounds().getSouthWest();

      // console.log(theCircle.getBounds()._northEast)
      this.inIfo.location = e.latlng;
    });

    const tiles: any = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  search() {
    const NE = this.searchForm.ne;
    const SW = this.searchForm.sw;

    var lats = NE.lat > SW.lat ? [NE.lat, SW.lat] : [SW.lat, NE.lat];
    var lngs = NE.lng > SW.lng ? [NE.lng, SW.lng] : [SW.lng, NE.lng];

    this.router.navigate([
      "/mposts",
      {
        lat: this.inIfo.location.lat,
        lng: this.inIfo.location.lng,
        kind: this.inIfo.kind,
        lat1: lats[0],
        lat2: lats[1],
        lng1: lngs[0],
        lng2: lngs[1],
      },
    ]);
  }

  get diagnostic() {
    return JSON.stringify(this.inIfo);
  }
}
