import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigParams } from '../models/config-params';


@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { 

  }

  setupParams(config: ConfigParams): HttpParams {
      let httpParams = new HttpParams();

      httpParams = httpParams.set("_page", config.page.toString());
      httpParams = httpParams.set("_limit", config.limit.toString());

      if(config.search) {
        httpParams = httpParams.set("q", config.search);
      } 

      httpParams = httpParams.set("_sort", "date");

      return httpParams;
  }
}
