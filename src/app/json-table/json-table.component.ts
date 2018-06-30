import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Sort } from '@angular/material';

//intercae of data structure from json
export interface City {
  id: number,
  city: string,
  start_date: string,
  end_date: string,
  price: string,
  status: string,
  color: string
}

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.less']
})
export class JsonTableComponent implements OnInit{

  jsonData: Array<City> = [];
  origData: Array<City> = [];
  fullData: Array<City> = [];
  lastSort: Sort;

  filterDateFrom: string = "";
  filterDateTo: string = "";
  activeFilter: Boolean = false;

  activePage: number = 1;
  pageSize: number = 50;

  constructor(private http: HttpClient) {}
  //init of class
  ngOnInit(){
    this.getJSON().subscribe(data => {
      this.jsonData, this.origData = data.slice(0,this.pageSize);
      this.fullData = data;
      this.initSortHeader()
    });
  }
  //disable the date filter 
  unfilterTable(){
    this.activeFilter = false;
    this.activePage = 1;
    this.ngOnInit();
  }
  //control of date fitler
  filterTable(){
    let date_from = new Date(this.filterDateFrom);
    let date_to = new Date(this.filterDateTo);
    //filter determing the date 
    var filtered = this.fullData.filter((city: object)=>{
      var start = new Date(city['start_date']);
      var end = new Date(city['end_date']);
      //dates compare
      return (date_from < start && end < date_to);
    });
    this.activePage = 1;
    this.jsonData = filtered;
    this.activeFilter = true;
  }
  //request for json data
  getJSON(): Observable<any> {
    return this.http.get("./assets/data/data.json");
  }
  //control if next page is avaiable
  isNextPage(): Boolean{
    return (this.activePage * this.pageSize) < this.fullData.length;
  }
  //loading nect page of results
  addJsonPage(){
    this.activePage++;
    this.jsonData, this.origData = this.fullData.slice(0,this.activePage*this.pageSize);
    this.initSortHeader()
  }
  //reinitalization of material sorted header
  initSortHeader(){
    let defSort: Sort = {active:"",direction:""};
    if(this.lastSort){
      defSort = this.lastSort;
    }
    this.sortData(defSort);
  }
  //sort data function for material sorted header
  sortData(sort: Sort) {
    this.lastSort = sort;
    let data = this.origData.slice();
    if(this.activeFilter){
      data = this.jsonData;
    }
    if ((!sort.active || sort.direction === '')) {
      this.jsonData = data;
      return;
    }
    //sorting data with right filter
    this.jsonData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'city': return this.compare(a.city, b.city, isAsc);
        case 'start_date': return this.compareDate(a.start_date,b.start_date,isAsc);
        case 'end_date': return  this.compareDate(a.end_date,b.end_date,isAsc);
        case 'price': return this.compare(a.price, b.price, isAsc);
        case 'status': return this.compare(a.status, b.status, isAsc);
        case 'color': return this.compare(a.color, b.color, isAsc);
        default: return 0;
      }
    });
  }
  //compare as string
  compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  //compare as date
  compareDate(a,b,isAsc){
    return (new Date(a) < new Date(b)? -1 : 1) * (isAsc ? 1 : -1);
  }

}
