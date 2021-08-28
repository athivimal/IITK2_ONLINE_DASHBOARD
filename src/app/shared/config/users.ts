import { Injectable } from "@angular/core";
@Injectable()
export class Users {
    public userList = [
        {
            id: "1",
            username: "KRISHTEC",
            name: 'Krish',
            password: "krishteccbe",
            company: "Krish tec",
            contact: "1234567890",
            email: "abc@gmail.com",
            role: "Admin",
            device: "Ammeter",
            chart: ['Animated gauge', 'Pictorial chart'],
            input: "3A"
        },
        {
            id: "2",
            username: "Veera",
            name: "Veerapandian",
            password: "veera",
            company: "Krish Tec",
            contact: "1234567890",
            email: "abc@gmail.com",
            role: "User",
            device: "Voltmeter",
            chart: ['Animated gauge', 'Pictorial chart'],
            input: "5V"
        }
    ]
}
