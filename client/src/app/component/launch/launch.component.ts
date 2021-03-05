import { Component, OnInit } from '@angular/core';

import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

import * as _moment from 'moment';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  begin = "";
  end = "";
  event = "";

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value

  constructor() { }

  ngOnInit() {

    this.value = 'after the fact';
    this.begin = _moment().format('YYYYMMDD[T]HHmmss');
    this.end = _moment().format('YYYYMMDD[T]HHmmss');
    // this.generateCodeData();
  }

  open() {
    // this.event = QrCodeHelper.makeEvent('dffd',this.begin, this.end);
    // let yy = QrCodeHelper.makeSMS('sddsd', 'ssddsds');
  }

}
