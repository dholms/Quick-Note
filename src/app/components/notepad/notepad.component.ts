import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {

  notes:Note[];
  currNote:Note;

  constructor() {
    this.notes = [];
    this.loadNotes();
    if(this.notes.length == 0){
      this.newNote();
    }
    this.currNote=this.notes[0];
  }

  ngOnInit() {
  }

  loadNotes(){
    this.notes = JSON.parse(localStorage.getItem("notes"));
    if(!this.notes){
      this.notes = [];
    }
  }

  saveNotes(){
    localStorage.setItem("notes",JSON.stringify(this.notes));
  }

  selectNote(note){
    this.currNote = note;
  }

  updateNote(event){
    this.currNote.time = new Date();
    this.saveNotes();
  }

  formatDate(date){
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date(date);
    let datestring = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
    return datestring;
  }

  newNote(){
    this.notes.push({
      title:"New Note",
      body:"",
      time: new Date(),
    });
    this.saveNotes();
  }

  deleteNote(){
    for(let i=0; i < this.notes.length; i++){
      if(this.notes[i] == this.currNote){
        this.notes.splice(i, 1);
      }
    }
    if(this.notes.length > 0){
      this.currNote = this.notes[0];
    }
    this.saveNotes();
  }
}

interface Note{
  title:string,
  body:string,
  time:Date
}
