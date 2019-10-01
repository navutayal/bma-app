import { Injectable } from '@angular/core';

@Injectable()
export class PageTitleService {

    // tslint:disable-next-line: variable-name
    private _title = '';

    get title(): string { return this._title; }

    set title(title: string) { this._title = title; }
}
