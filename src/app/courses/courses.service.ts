import { Injectable } from '@angular/core';

import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

    private courses: Course[] = [
        {
            _id: '5b2fe37cec2d7b6d260c7dd4',
            author: 'Bruce Burch',
            img: 'https://loremflickr.com/400/200?random=1',
            creationDate: new Date('2018-05-21T01:06:24'),
            duration: 24,
            // tslint:disable-next-line:max-line-length
            description: 'Excepteur culpa adipisicing sunt ut proident est proident esse irure aute. Ipsum veniam voluptate enim consequat ut consectetur Lorem. Sit quis veniam culpa veniam occaecat exercitation elit consectetur.\r\n',
            title: 'cupidatat cillum aute reprehenderit laborum sint',
        },
        {
            _id: '5b2fe37c5599f0d880855dde',
            author: 'Juliette Cochran',
            img: 'https://loremflickr.com/400/200?random=2',
            creationDate: new Date('2018-05-25T09:59:24'),
            duration: 267,
            // tslint:disable-next-line:max-line-length
            description: 'Amet amet proident duis deserunt in occaecat. Ullamco culpa elit sit culpa ullamco magna fugiat non tempor eu magna. Duis amet anim cillum nostrud voluptate incididunt. Proident nostrud sint aute fugiat ex.\r\nNon esse non fugiat labore eu proident dolore Lorem elit. Labore officia elit et elit adipisicing est anim quis qui et id consequat est. Sit irure id fugiat irure do eu labore eiusmod in dolor occaecat in proident. Duis sint nulla excepteur nostrud enim laboris cillum anim consequat duis. Eu et sint reprehenderit Lorem pariatur laborum. Nulla Lorem occaecat do aliquip et eiusmod id. Lorem commodo ad pariatur ea ut anim mollit ex.\r\nEiusmod proident aliqua sit ullamco dolor elit anim commodo incididunt. Do ea nulla non reprehenderit sint eiusmod et ipsum ex labore eiusmod in. Ut ad reprehenderit est ullamco culpa ipsum anim reprehenderit.\r\n',
            title: 'consequat minim fugiat magna esse magna ipsum mollit sint',
        },
        {
            _id: '5b2fe37c8c5ca891d2428f1e',
            author: 'Patty Gay',
            img: 'https://loremflickr.com/400/200?random=3',
            creationDate: new Date('2018-05-14T11:56:22'),
            duration: 111,
            // tslint:disable-next-line:max-line-length
            description: 'Laboris consequat reprehenderit duis in ea laboris dolore. Nisi id laboris commodo incididunt do ullamco minim. Sit veniam mollit quis cupidatat consectetur dolore esse fugiat aliquip sunt. Elit exercitation nisi irure in ipsum dolore.\r\nQuis sit dolor adipisicing nulla tempor duis reprehenderit ut magna pariatur magna ullamco reprehenderit. Tempor deserunt ad reprehenderit occaecat esse labore veniam velit veniam proident. Elit eiusmod tempor cillum incididunt elit veniam laborum. Dolor id consequat culpa non exercitation quis esse dolore qui voluptate cupidatat deserunt occaecat.\r\nAliquip consequat esse proident anim anim cupidatat. Commodo anim est magna occaecat ea officia laborum culpa fugiat duis qui. Dolor irure commodo culpa occaecat incididunt do et reprehenderit. Magna nostrud reprehenderit pariatur veniam id. Ipsum anim pariatur eu amet qui duis ut mollit anim tempor et dolore. Incididunt tempor amet amet occaecat anim cupidatat esse.\r\n',
            title: 'occaecat sint adipisicing labore consequat excepteur elit esse ullamco consectetur',
        },
        {
            _id: '5b2fe37c1f042cea7d823c91',
            author: 'Pauline Turner',
            img: 'https://loremflickr.com/400/200?random=4',
            creationDate: new Date('2018-04-15T04:18:00'),
            duration: 92,
            // tslint:disable-next-line:max-line-length
            description: 'Aute aliquip elit irure duis mollit ipsum minim. Minim voluptate ipsum velit adipisicing exercitation labore cillum proident ad reprehenderit. Cillum nostrud dolor sunt adipisicing dolore veniam aliquip sint. Aliqua elit nostrud et deserunt velit consequat ut ex exercitation. Laboris tempor ad sit amet enim exercitation ullamco tempor veniam ullamco ex. Adipisicing fugiat excepteur ut cupidatat tempor veniam. Minim ipsum ad esse incididunt in culpa fugiat nulla in aliquip non ea culpa minim.\r\nIn ut fugiat proident aute exercitation cillum proident sunt nostrud aliqua anim qui irure. Aute ipsum ex aliquip esse consequat ea. Id aliqua officia tempor labore do ipsum veniam pariatur deserunt labore. Consectetur sint minim incididunt ullamco officia consequat proident enim id et irure. Amet ea labore in commodo duis qui.\r\nAnim fugiat velit aute qui nisi laborum. Cillum aliquip labore elit ut consectetur. Elit do officia laboris mollit.\r\n',
            title: 'velit cupidatat veniam sunt pariatur tempor consectetur cillum dolor',
        },
        {
            _id: '5b2fe37cf359cda3e50d5e89',
            author: 'Cassie Cantrell',
            img: 'https://loremflickr.com/400/200?random=5',
            creationDate: new Date('2018-05-29T03:50:00'),
            duration: 94,
            // tslint:disable-next-line:max-line-length
            description: 'Esse amet in cupidatat irure anim sint. Id id occaecat Lorem Lorem Lorem consequat sit irure do. Eiusmod eiusmod labore deserunt quis amet magna dolore culpa dolore fugiat do incididunt exercitation. Tempor occaecat aliquip non non laboris dolore in ut. Cillum nulla in laborum nulla pariatur exercitation nostrud culpa aliquip proident sint.\r\nAliqua sit enim est eu exercitation aliquip occaecat tempor officia ullamco. Minim exercitation culpa duis cillum irure voluptate. Id ex culpa eu culpa irure cupidatat pariatur mollit exercitation fugiat in et velit aliquip.\r\n',
            title: 'sint irure aute veniam eu',
        },
        {
            _id: '5b2fe37c41276c92f5976eb2',
            author: 'Tillman Hardin',
            img: 'https://loremflickr.com/400/200?random=6',
            creationDate: new Date('2018-05-13T04:21:21'),
            duration: 53,
            // tslint:disable-next-line:max-line-length
            description: 'Labore nisi Lorem ad commodo. Officia ullamco in est amet. Ad sit minim tempor et nostrud cupidatat voluptate. Enim commodo cillum elit mollit anim aute sunt ut in et sint. Nisi labore excepteur tempor Lorem laborum. Eiusmod ut ea magna duis occaecat id laborum exercitation reprehenderit labore laborum.\r\n',
            title: 'eu excepteur cillum nisi consectetur ex sint nisi est amet',
        },
    ];

    constructor() {
    }

    getCourses(): Course[] {
        return this.courses;
    }

    getCourseById(id: string): Course {
      const desiredCourse: Course = this.courses.find(course => course._id === id);

      return desiredCourse ? desiredCourse : null;
    }

    deleteCourse(id: string): Course {
      const courseToDeleteIndex: number = this.courses.findIndex(course => course._id === id);
      let courseToDelete: Course = null;

      if (courseToDeleteIndex >= 0) {
        courseToDelete = this.courses[courseToDeleteIndex];
        this.courses = this.courses.filter(course => course._id !== id);
      }

      return courseToDelete;
    }
}
