# AngularGridSample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

This is a try to simplify the sample from https://www.ag-grid.com/best-angular-2-data-grid/?framework=all#gsc.tab=0


	ng new ag-angular-grid-sample --skip-tests
	cd ag-angular-grid-sample
	npm i ag-grid --save
	npm i ag-grid-angular --save
	ng generate component my-grid-application

* src/app/app.component.html

      <app-my-grid-application></app-my-grid-application>

* src/app/my-grid-application/my-grid-application.component.ts

      import {Component} from "@angular/core";
      import {GridOptions} from "ag-grid";

      @Component({
          selector: 'app-my-grid-application',
          templateUrl: './my-grid-application.component.html'
      })
      export class MyGridApplicationComponent {
          private gridOptions: GridOptions;

          constructor() {
              this.gridOptions = {};
              this.gridOptions.columnDefs = [
                  {
                      headerName: "ID",
                      field: "id",
                      width: 100
                  },
                  {
                      headerName: "Value",
                      field: "value",
                      width: 100
                  },
              ];
              this.gridOptions.rowData = [
                  {id: 5, value: 10},
                  {id: 10, value: 15},
                  {id: 15, value: 20}
              ]
          }
      }

* src/app/my-grid-application/my-grid-application.component.html

      <div style="width: 200px;">
          <ag-grid-angular #agGrid style="width: 100%; height: 200px;" class="ag-fresh"
                       [gridOptions]="gridOptions">
          </ag-grid-angular>
      </div>

* src/app/app.module.ts

      import {BrowserModule} from "@angular/platform-browser";
      import {NgModule} from "@angular/core";
      import {AgGridModule} from "ag-grid-angular/main";

      import {AppComponent} from "./app.component";
      import {MyGridApplicationComponent} from "./my-grid-application/my-grid-application.component";

      @NgModule({
          declarations: [
              AppComponent,
              MyGridApplicationComponent
          ],
          imports: [
              BrowserModule,
              AgGridModule.withComponents([])
          ],
          providers: [],
          bootstrap: [AppComponent]
      })
      export class AppModule {}

* style.css

      @import "../node_modules/ag-grid/dist/styles/ag-grid.css";
      @import "../node_modules/ag-grid/dist/styles/theme-fresh.css";

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
