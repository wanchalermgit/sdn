import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

declare const google: any;
declare var $: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

@Component({
  selector: 'app-sdn-home',
  templateUrl: './sdn-home.component.html',
  styleUrls: ['./sdn-home.component.css']
})
export class SdnHomeComponent implements OnInit {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;


  constructor(private element: ElementRef) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit(): void {
    const myLatlng = new google.maps.LatLng(16.762162, 100.215040);
    const mapOptions = {
      zoom: 17,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var image = {
      url: '/assets/img/new_logo.png'
    };
    const Marker = new google.maps.Marker({
      position: myLatlng,
      title: 'ด่านแถวบ้าน',
      map: map,
      animation: google.maps.Animation.BOUNCE
    });
    const infoWindow = new google.maps.InfoWindow({
      content: '<div><b style="font-size: 1.3rem;"><img src="/assets/img/siren-light.gif" style="width: 22px;" />[ขาเข้าเมือง] ด่านตรงข้ามโรงแรมเดอะเรสท์</b> <hr /><p style="text-indent: 1.4rem;" >ประชาชนที่มาจากอำเภอบางกระทุ่ม ท่าโพธิ์ วังน้ำคู้ วัดพริก งิ้วงาม สามารถใช้เส้นทางผ่านหน้าวัดจุฬามณีเพื่อเข้าเมืองพิษณุโลกได้</p></div>'
    });
    // To add the marker to the map, call setMap();
    // Marker.setMap(map);
    infoWindow.open(map, Marker);

    /*
    *   เกี่ยวกับ Navbar
    */
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    const body = document.getElementsByTagName('body')[0];
    // body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
  }

  sidebarToggle() {
    var toggleButton = this.toggleButton;
    var body = document.getElementsByTagName('body')[0];
    var sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible == false) {
      setTimeout(function () {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }

}
