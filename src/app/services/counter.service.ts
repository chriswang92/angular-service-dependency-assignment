import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class CounterService {
    total: number;
    inactiveUserCount: number = 2;
    activeUserCount: number = 2;
    // constructor() {
    //     this.inactiveUserCount;
    //     this.activeUserCount;
    // }

    incrementActiveToInactive() {
        this.activeUserCount --;
        this.inactiveUserCount ++;
    }
    incrementInactiveToActive() {
        this.activeUserCount ++;
        this.inactiveUserCount --;
    }
}