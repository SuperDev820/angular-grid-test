import {Component} from "@angular/core";
import {GridOptions} from "ag-grid";

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})

export class MyGridApplicationComponent {
    public mygridOptions: GridOptions;

    constructor() {
        this.mygridOptions = {
		enableFilter: true,
		enableSorting: true,
		enableColResize: true,
		onGridReady: function($event) { $event.api.sizeColumnsToFit(); }
	};
        this.mygridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id"
            },
            {
                headerName: "Value",
                field: "value",
		editable: true
            }
        ];
        this.mygridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }
}

