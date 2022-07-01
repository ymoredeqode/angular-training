import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

interface POST {
  id: string;
  body: string;
  titile: string;
}

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.css'],
})
export class PaginatedTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource!: MatTableDataSource<unknown>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  // startIndex = 0;
  // limit = 5;

  // pageSize = 2;
  // pageOptions = [2, 4, 6];
  // // totalDataLength = this.limit;
  // totalDataLength = 100;
  // event: any;

  //

  // getPageDetails(event: { pageIndex: number; pageSize: number }) {
  //   console.log(event, 'event');
  //   this.event = event;
  //   this.fetchPost();
  // }

  // ngOnInit(): void {
  //   console.log('ng oninit');
  //   this.fetchPost();
  // }

  // fetchPost = () => {
  //   fetch(
  //     `https://jsonplaceholder.typicode.com/posts?_start=${this.startIndex}&_limit=${this.limit}`
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       // this.totalDataLength = json.length + this.limit;
  //       this.dataSource = new MatTableDataSource(json);
  //       console.log(this.dataSource);
  //       if (this.dataSource) this.dataSource.paginator = this.paginator;
  //     });
  // };

  ELEMENT_DATA: POST[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    //Load initial data
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    let URL = `https://jsonplaceholder.typicode.com/posts?_start=${this.currentPage}&_limit=${this.pageSize}`;

    fetch(URL)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data)
          this.dataSource.data = data;
          setTimeout(() => {
            this.paginator.pageIndex = this.currentPage;
            this.paginator.length = data.count;
          });
          this.isLoading = false;
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        }
      );
  }

  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }
}
