import { Component, OnInit, ElementRef, OnDestroy, OnChanges, Input, SimpleChange } from '@angular/core';

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

  @Input() locationData: any;


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
      content: '<div><b class="kanit-font" style="font-size: 1.3rem;"><img src="https://www.tony-dev.com/sdn/assets/img/siren-light.gif" style="width: 22px;" /> [ขาเข้าเมือง] ด่านตรงข้ามโรงแรมเดอะเรสท์</b> <hr /><p class="kanit-font" style="text-indent: 2.2rem;" >ประชาชนที่มาจากอำเภอบางกระทุ่ม ท่าโพธิ์ วังน้ำคู้ วัดพริก งิ้วงาม สามารถใช้เส้นทางผ่านหน้าวัดจุฬามณีเพื่อเข้าเมืองพิษณุโลกได้</p></div>'
    });
    // To add the marker to the map, call setMap();
    // Marker.setMap(map);
    infoWindow.open(map, Marker);
    Marker.addListener('click', () => {
      infoWindow.open(map, Marker);
    });

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

  setCheckpointMap(positionData: {id: number, name: string, lat: number, lng: number, description: string, note: string, type: string}) {
    const myLatlng = new google.maps.LatLng(positionData.lat, positionData.lng);
    const mapOptions = {
      zoom: 17,
      center: myLatlng,
      scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
    };
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const Marker = new google.maps.Marker({
      position: myLatlng,
      title: positionData.name,
      map: map,
      animation: google.maps.Animation.BOUNCE
    });
    const infoWindow = new google.maps.InfoWindow({
      content: '<div><b class="kanit-font" style="font-size: 1.3rem;"><img src="https://www.tony-dev.com/sdn/assets/img/siren-light.gif" style="width: 22px;" /> [' + positionData.type + '] ' + positionData.name + '</b> <hr /><p class="kanit-font" style="text-indent: 2.2rem;" >ประชาชนที่มาจากอำเภอบางกระทุ่ม ท่าโพธิ์ วังน้ำคู้ วัดพริก งิ้วงาม สามารถใช้เส้นทางผ่านหน้าวัดจุฬามณีเพื่อเข้าเมืองพิษณุโลกได้</p></div>'
    });
    // To add the marker to the map, call setMap();
    // Marker.setMap(map);
    infoWindow.open(map, Marker);
    Marker.addListener('click', () => {
      infoWindow.open(map, Marker);
    });
  }

  ngOnChanges(changeData: SimpleChange) {
    console.log('event data change: ', changeData['locationData']);
    console.log('event data change: ', changeData['locationData'].currentValue);
    this.setCheckpointMap(changeData['locationData'].currentValue);
  }

}
