import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APPANGULARS';
  body : string='If you still have the old code alias in your .bash_profile (or equivalent) from an early VS Code version, remove it and replace it by executing the Shell Command: Install';
  courses= ['Angular', 'Symfony', 'React','Laravel']
  viewCourses="Angular"
  courses1;
  trackCourse(index, course){
    return course ? course.id: undefined;
  }
  loadCourse(){

    this.courses1 = [
      {id:1, title:"Laravel"},
      {id:2, title:"Angular"},
      {id:3, title:"React"},
      {id:4, title:"VueJS"},
      {id:5, title:"Symfony"}
  ]
  }

  addCourse(){
    this.courses1.push({id: 6, title: "AdonisJS"});
  }
  removeCourse(course){
    let index= this.courses1.indexOf(course);
    this.courses1.splice(index, 1);
  }
  editCourse(course){
    course.title="UPDATED";
  }

  myFunction(){}
  onFavoriteChanged(args){
    console.log('Favorite changed : ', args);
  }
  post = {
    title: "lorem ipsum",
    isFavorite :true
  }
  personne = {
    nom : 'Khalid FADIL',
    tel : '0640311475',
    adresse : {
      ville : 'Khénifra',
      code : 54010
    }
  }
}
