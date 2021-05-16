import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'TodoDragDrop';
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  todos = [];
  displayedColumns: string[] = ['name', 'description', 'edit'];

  constructor(private dataService:DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getTodos()
    .subscribe((data:any)=>{
      console.log(data);
      
      this.todos = data.element;
     
      
    })
  }

onEditClick(element:any){
    this.router.navigate(["edit", element._id]);
  }

  ngDoCheck(){

  }

  ngAfterContentChecked(){
    //Explain later
  }

  ngAfterViewInit(){
    
  }
  ngAfterViewChecked(){
    
  }
  ngOnDestroy(){

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
