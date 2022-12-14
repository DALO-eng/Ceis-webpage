import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import daygridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [daygridPlugin],
    locale: 'es',
    headerToolbar: {
      start: 'title', // will normally be on the left. if RTL, will be on the right
      center: '',
      end: 'prev,next',
    },
    events: [
      {
        title: 'Cumpleaños Daniel',
        start: '2022-12-09',
        end: '2022-12-11',
        url: 'https://fullcalendar.io/docs/event-parsing',
      },
      { title: 'Tech Fest', date: '2022-12-14' },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
