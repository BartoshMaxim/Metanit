import { Injectable } from '@angular/core';
import { Phone } from "./phone";
import { LogService } from './log.service';

@Injectable()
export class DataService {

    private data: Phone[] = [new Phone("Apple IPhone 4", 4000), new Phone("Apple IPhone 5", 7000), new Phone("Apple IPhone 6", 10000)];

    constructor(private logService: LogService){}

    getData(): Phone[] {
        this.logService.write("операция получения данных");
        return this.data;
    }

    addData(name: string, price: number) {
        this.data.push(new Phone(name, price));
        this.logService.write("операция добавления данных");
    }
}