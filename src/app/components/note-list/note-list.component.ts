import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  @Input() notes:Note[];
  @Input() currNote:Note;

  @Output() onNotePicked: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  formatDate(date){
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date(date);
    let datestring = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    return datestring;
  }

  formatTitle(title){
    if(title.trim().length < 1){
      return "Untitled"
    }else{
      return title;
    }
  }

  selectNote(note){
    this.onNotePicked.emit(note);
  }

  newNote(){
    this.onNotePicked.emit({
      title:"",
      body:"",
      time: new Date(),
      id: ""      
    })
  }

}
