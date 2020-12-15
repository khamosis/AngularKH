import { Component } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
    selector: 'courses',
    template:`
        <h1 [style.color]="isActive ? 'blue' : 'red'">{{title}}</h1>
        <h1 [textContent] ="title"></h1>
        <img src="{{image}}" alt="{{title}}">
        <img [src]= "image" [alt]="title">
        <div (click)="onClickDiv()">
        <button (click)="onClick($event)" class="btn btn-primary">My button</button>
        </div>
        <input [(ngModel)]="email" type="text" (keyup.enter)="onKeyUp()">
        <p>{{email}}</p>

        <div class="container">
            <ul class="list-group">
            <li class="list-group-item">Titre : {{course.Titre | lowercase | uppercase}}</li>
            <li class="list-group-item">Avis : {{course.Avis | number: '2.2-2'}}</li>
            <li class="list-group-item">Participants : {{course.Participants}}</li>
            <li class="list-group-item">Prix : {{course.Prix | currency:'CAD' : 'symbol' : '3.1-1'}}</li>
            <li class="list-group-item">PublicationDate : {{course.PublicationDate | date}}</li>
            </ul>
        </div>
        `
})
export class CoursesComponent {
    isActive= true;
    title = "La liste de mes cours";
    image = "https://www.sitedetout.com/wp-content/uploads/2018/05/angular.png";
    courses;
    email : string;
    course ={
        Titre : 'Formation Complète sur Angular',
        Avis : '4.976',
        Participants : 135,
        Prix : 950.38,
        PublicationDate : new Date
    }

    onClick($event){
        $event.stopPropagation();
        console.log('button clicked', $event);
    }
    onClickDiv(){
        console.log('Div is clicked');
    }
    onKeyUp(){
        
        console.log(this.email);
    }
    constructor(coursesService: CoursesService){

        this.courses= coursesService.getCourses();
    }

    getTitle(){
        return this.title;
    }

}