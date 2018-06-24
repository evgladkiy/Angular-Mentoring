import { Component, OnInit } from '@angular/core';

import { Course } from './../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.less'],
})
export class CourseListComponent {

  public courses: Course[] = [
      [
          {
              "_id": "5b2fe37cec2d7b6d260c7dd4",
              "author": "Bruce Burch",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-21T01:06:24",
              "duration": 24,
              "description": "Excepteur culpa adipisicing sunt ut proident est proident esse irure aute. Ipsum veniam voluptate enim consequat ut consectetur Lorem. Sit quis veniam culpa veniam occaecat exercitation elit consectetur. Esse consequat consectetur ipsum qui tempor quis.\r\n",
              "title": "cupidatat cillum aute reprehenderit laborum sint"
          },
          {
              "_id": "5b2fe37c5599f0d880855dde",
              "author": "Juliette Cochran",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-25T09:59:24",
              "duration": 267,
              "description": "Amet amet proident duis deserunt in occaecat. Ullamco culpa elit sit culpa ullamco magna fugiat non tempor eu magna. Duis amet anim cillum nostrud voluptate incididunt. Proident nostrud sint aute fugiat ex.\r\nNon esse non fugiat labore eu proident dolore Lorem elit. Labore officia elit et elit adipisicing est anim quis qui et id consequat est. Sit irure id fugiat irure do eu labore eiusmod in dolor occaecat in proident. Duis sint nulla excepteur nostrud enim laboris cillum anim consequat duis. Eu et sint reprehenderit Lorem pariatur laborum. Nulla Lorem occaecat do aliquip et eiusmod id. Lorem commodo ad pariatur ea ut anim mollit ex.\r\nEiusmod proident aliqua sit ullamco dolor elit anim commodo incididunt. Do ea nulla non reprehenderit sint eiusmod et ipsum ex labore eiusmod in. Ut ad reprehenderit est ullamco culpa ipsum anim reprehenderit.\r\n",
              "title": "consequat minim fugiat magna esse magna ipsum mollit sint"
          },
          {
              "_id": "5b2fe37c8c5ca891d2428f1e",
              "author": "Patty Gay",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-14T11:56:22",
              "duration": 111,
              "description": "Laboris consequat reprehenderit duis in ea laboris dolore. Nisi id laboris commodo incididunt do ullamco minim. Sit veniam mollit quis cupidatat consectetur dolore esse fugiat aliquip sunt. Elit exercitation nisi irure in ipsum dolore.\r\nQuis sit dolor adipisicing nulla tempor duis reprehenderit ut magna pariatur magna ullamco reprehenderit. Tempor deserunt ad reprehenderit occaecat esse labore veniam velit veniam proident. Elit eiusmod tempor cillum incididunt elit veniam laborum. Dolor id consequat culpa non exercitation quis esse dolore qui voluptate cupidatat deserunt occaecat.\r\nAliquip consequat esse proident anim anim cupidatat. Commodo anim est magna occaecat ea officia laborum culpa fugiat duis qui. Dolor irure commodo culpa occaecat incididunt do et reprehenderit. Magna nostrud reprehenderit pariatur veniam id. Ipsum anim pariatur eu amet qui duis ut mollit anim tempor et dolore. Incididunt tempor amet amet occaecat anim cupidatat esse.\r\n",
              "title": "occaecat sint adipisicing labore consequat excepteur elit esse ullamco consectetur"
          },
          {
              "_id": "5b2fe37c1f042cea7d823c91",
              "author": "Pauline Turner",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-04-15T04:18:00",
              "duration": 92,
              "description": "Aute aliquip elit irure duis mollit ipsum minim. Minim voluptate ipsum velit adipisicing exercitation labore cillum proident ad reprehenderit. Cillum nostrud dolor sunt adipisicing dolore veniam aliquip sint. Aliqua elit nostrud et deserunt velit consequat ut ex exercitation. Laboris tempor ad sit amet enim exercitation ullamco tempor veniam ullamco ex. Adipisicing fugiat excepteur ut cupidatat tempor veniam. Minim ipsum ad esse incididunt in culpa fugiat nulla in aliquip non ea culpa minim.\r\nIn ut fugiat proident aute exercitation cillum proident sunt nostrud aliqua anim qui irure. Aute ipsum ex aliquip esse consequat ea. Id aliqua officia tempor labore do ipsum veniam pariatur deserunt labore. Consectetur sint minim incididunt ullamco officia consequat proident enim id et irure. Amet ea labore in commodo duis qui.\r\nAnim fugiat velit aute qui nisi laborum. Cillum aliquip labore elit ut consectetur. Elit do officia laboris mollit sint exercitation est ex duis ex dolor laboris. Adipisicing minim commodo irure ad elit qui velit veniam exercitation ex non ipsum commodo officia.\r\n",
              "title": "velit cupidatat veniam sunt pariatur tempor consectetur cillum dolor"
          },
          {
              "_id": "5b2fe37cf359cda3e50d5e89",
              "author": "Cassie Cantrell",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-29T03:50:00",
              "duration": 94,
              "description": "Esse amet in cupidatat irure anim sint. Id id occaecat Lorem Lorem Lorem consequat sit irure do. Eiusmod eiusmod labore deserunt quis amet magna dolore culpa dolore fugiat do incididunt exercitation. Tempor occaecat aliquip non non laboris dolore in ut. Cillum nulla in laborum nulla pariatur exercitation nostrud culpa aliquip proident sint.\r\nAliqua sit enim est eu exercitation aliquip occaecat tempor officia ullamco. Minim exercitation culpa duis cillum irure voluptate. Id ex culpa eu culpa irure cupidatat pariatur mollit exercitation fugiat in et velit aliquip. Elit cupidatat commodo aliquip est sunt anim eu incididunt cillum consectetur in. Proident velit voluptate cillum duis est quis. Laborum duis exercitation labore veniam mollit in in deserunt amet ea labore.\r\nAnim adipisicing officia in consequat reprehenderit laborum. Deserunt exercitation culpa Lorem sit eu dolore culpa fugiat cillum magna. Nostrud labore dolore dolore dolor do dolore qui sunt irure magna. Laboris cillum ullamco nostrud aute fugiat do ex fugiat voluptate do commodo officia.\r\n",
              "title": "sint irure aute veniam eu"
          },
          {
              "_id": "5b2fe37c41276c92f5976eb2",
              "author": "Tillman Hardin",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-13T04:21:21",
              "duration": 53,
              "description": "Labore nisi Lorem ad commodo. Officia ullamco in est amet. Ad sit minim tempor et nostrud cupidatat voluptate. Enim commodo cillum elit mollit anim aute sunt ut in et sint. Nisi labore excepteur tempor Lorem laborum. Eiusmod ut ea magna duis occaecat id laborum exercitation reprehenderit labore laborum.\r\n",
              "title": "eu excepteur cillum nisi consectetur ex sint nisi est amet"
          },
          {
              "_id": "5b2fe37c133af30c19470694",
              "author": "Mayra Noel",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-04T10:03:33",
              "duration": 267,
              "description": "Sit laboris ipsum in adipisicing do minim reprehenderit ut. Amet occaecat fugiat veniam non mollit est tempor sit minim tempor deserunt laborum sunt. Laborum fugiat ipsum amet ut. Pariatur commodo quis ad ea do. Ex ullamco excepteur ipsum tempor irure id aliquip. Excepteur in magna cillum ex sint culpa nostrud voluptate anim esse nulla nisi.\r\nReprehenderit ex sit eu proident cillum quis ipsum dolore laboris. Ad reprehenderit reprehenderit aliqua veniam. Non ut irure consequat magna. Deserunt esse do minim officia Lorem enim sit veniam est non sint dolor fugiat. Ea proident esse labore consequat ipsum consequat commodo excepteur sunt aute laborum in Lorem.\r\nPariatur esse esse sit esse laboris ullamco eu occaecat labore. Ea do dolor consectetur anim fugiat occaecat dolore aliqua. Deserunt proident non culpa et pariatur cillum enim sint cupidatat nostrud adipisicing. Et consectetur ullamco enim magna amet mollit Lorem irure do nostrud.\r\n",
              "title": "quis exercitation ad sunt consequat amet cupidatat anim"
          },
          {
              "_id": "5b2fe37caed2bf07f4cea8c9",
              "author": "Mavis Downs",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-06-08T09:10:42",
              "duration": 140,
              "description": "Aliqua enim exercitation veniam pariatur officia est deserunt qui tempor elit aliqua ut. Consequat duis laborum exercitation reprehenderit magna ut ipsum quis reprehenderit mollit et labore excepteur nulla. Consequat elit qui in fugiat ea anim id ex dolor deserunt non ipsum. Dolor consequat sit fugiat cillum nulla Lorem. Do mollit in consequat ad reprehenderit aute laborum deserunt est sint aliqua officia proident.\r\nLaboris ut ullamco dolore elit dolor. Laboris nostrud velit non est amet qui. Consectetur pariatur cupidatat amet aliquip occaecat laborum occaecat ullamco eiusmod Lorem ullamco laboris. Culpa adipisicing laborum dolore deserunt ullamco commodo. Aliqua sint consectetur est anim ad.\r\nProident pariatur consectetur cillum deserunt commodo dolor consectetur proident et ullamco ex. Ea labore aute est quis occaecat excepteur. Lorem quis in consequat labore. Aute fugiat mollit in laborum et est do esse. Proident esse in mollit irure Lorem. Magna commodo nisi incididunt occaecat dolore.\r\n",
              "title": "labore dolor dolore irure occaecat qui aliquip"
          },
          {
              "_id": "5b2fe37ce92f97ec6eb4b577",
              "author": "Latoya Hale",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-06-08T09:01:03",
              "duration": 111,
              "description": "Mollit nisi duis consequat aliqua fugiat officia duis nisi tempor nostrud eiusmod magna proident. Minim deserunt qui nulla deserunt ullamco cupidatat sint reprehenderit cillum commodo minim in commodo consectetur. Excepteur mollit sint nostrud ipsum.\r\nExcepteur excepteur aliqua dolor et veniam. Nulla laboris officia do id dolore non. Et commodo id est nostrud. Ad et ex mollit excepteur reprehenderit amet minim laborum exercitation id et. Deserunt commodo culpa cillum qui deserunt reprehenderit aliqua labore nostrud occaecat labore. Commodo qui dolor consequat ipsum ad.\r\nCillum fugiat tempor amet magna in velit. Amet deserunt laborum aliquip dolore dolor et. Sint et aliqua commodo consectetur deserunt mollit aute. Laborum qui esse enim sint proident excepteur irure. Nostrud irure Lorem voluptate deserunt sunt Lorem laboris.\r\n",
              "title": "incididunt est culpa esse tempor esse aute"
          },
          {
              "_id": "5b2fe37c0c4b1d02dc59b1bc",
              "author": "Lester Knox",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-06-15T12:30:48",
              "duration": 247,
              "description": "Tempor duis aliqua officia enim consectetur non commodo aliquip incididunt aute. Consequat cupidatat aliqua commodo id officia deserunt magna magna. Eiusmod culpa enim ipsum duis est reprehenderit dolore non id amet sint pariatur ad. Magna culpa magna quis elit sunt minim mollit laborum veniam laborum aute irure ad ut. Pariatur sunt mollit eiusmod non magna magna aute fugiat proident anim anim sit labore.\r\nQuis eu elit consequat et voluptate Lorem minim sunt et sunt nulla. Aute enim reprehenderit enim aliquip id incididunt. Veniam esse sunt ea duis aute proident incididunt nostrud. Aliqua consectetur cupidatat ullamco commodo proident minim occaecat culpa ullamco magna ullamco do sint.\r\n",
              "title": "voluptate qui ut exercitation irure veniam pariatur"
          },
          {
              "_id": "5b2fe37c2bb5544fcb8265c4",
              "author": "Shauna Huffman",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-04-17T01:36:16",
              "duration": 49,
              "description": "Duis esse tempor duis sit nisi consectetur Lorem id esse voluptate dolore ut esse quis. Reprehenderit elit quis anim exercitation labore nostrud amet labore tempor dolore sint sunt. Cupidatat nostrud reprehenderit voluptate sunt. Commodo consectetur esse Lorem voluptate voluptate nulla quis ex nulla. Aliquip fugiat id consequat reprehenderit cillum dolore. Magna non pariatur dolore Lorem excepteur excepteur ad sint voluptate in. Aute fugiat laboris ut adipisicing quis deserunt occaecat.\r\nIncididunt mollit enim tempor occaecat in Lorem ex. Cupidatat commodo sit laborum do amet id. Id ex reprehenderit dolore Lorem.\r\n",
              "title": "laboris do eiusmod exercitation deserunt occaecat"
          },
          {
              "_id": "5b2fe37c7910364436183426",
              "author": "Angel Owen",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-06-15T02:39:32",
              "duration": 196,
              "description": "Adipisicing sint nostrud qui qui consectetur sit voluptate amet fugiat pariatur voluptate elit tempor ullamco. Officia anim ullamco et Lorem anim veniam enim. Ut sint eiusmod aliquip incididunt duis excepteur quis. Elit sint quis anim ipsum sit aliquip elit adipisicing labore cillum adipisicing consequat tempor ex. Incididunt dolore in incididunt pariatur sit excepteur eu laborum aliquip pariatur ex nostrud nisi. Velit proident deserunt duis pariatur quis.\r\nAute fugiat consequat sit mollit commodo Lorem laboris nisi officia nostrud dolore eu ex. Voluptate nisi velit enim ut sunt fugiat labore eiusmod culpa sit elit ullamco ipsum. Mollit officia ullamco quis est. Sint cillum do est culpa eiusmod deserunt laborum laborum labore. Ex sit excepteur fugiat et deserunt. Ex ipsum quis nisi ea et duis fugiat nulla do dolor proident veniam magna enim. Ea dolor dolore minim magna laboris irure exercitation qui et ex elit.\r\n",
              "title": "eiusmod incididunt exercitation"
          },
          {
              "_id": "5b2fe37c3be02a73f0be5caf",
              "author": "Sharpe Wagner",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-28T04:02:30",
              "duration": 174,
              "description": "Aliquip laborum laboris voluptate eu consectetur qui. Excepteur anim ea eu fugiat est sint. Excepteur nostrud cillum incididunt anim ex officia laborum enim ea minim. Qui aute voluptate laborum esse sint sit. Eiusmod minim exercitation irure ullamco cupidatat veniam quis esse pariatur nisi. Incididunt dolor occaecat labore tempor non aute nulla culpa commodo.\r\nDeserunt ea anim culpa qui ullamco minim ea esse. Consequat amet sint laboris ea. Culpa consequat laboris enim dolore qui. Cillum elit mollit incididunt occaecat pariatur ea dolor pariatur.\r\n",
              "title": "ullamco esse eiusmod"
          },
          {
              "_id": "5b2fe37cb1f77f507d8b6da7",
              "author": "Hutchinson Taylor",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-05-28T08:11:29",
              "duration": 270,
              "description": "Ea veniam labore do non velit officia deserunt reprehenderit. Deserunt do duis exercitation mollit Lorem reprehenderit est excepteur. Irure mollit est reprehenderit amet commodo velit do eu culpa. Duis fugiat commodo exercitation eiusmod cillum velit consectetur do in ea consectetur. In amet irure aute ut ut exercitation ut irure dolore reprehenderit culpa ut. In exercitation deserunt voluptate dolor nisi dolore nisi elit.\r\nVelit enim magna incididunt culpa dolor commodo ullamco sint cupidatat exercitation dolor cillum in exercitation. Ullamco excepteur non id id sint est. Do commodo mollit eiusmod non nostrud irure sint. Proident commodo aliquip esse ad magna eiusmod quis sunt. Nulla occaecat non anim qui ex veniam elit duis eu.\r\nCillum ipsum duis ullamco Lorem esse est officia anim. Sit aliquip est nostrud est elit proident sint. Occaecat enim magna dolor sunt laboris ad elit commodo enim id qui nisi mollit adipisicing. Id adipisicing laborum minim sunt id exercitation. Dolore velit ut cupidatat esse eu dolore ipsum. Do laboris duis laboris pariatur voluptate consectetur consequat laborum occaecat sit laboris ipsum nisi. Ut non consequat sint magna cupidatat.\r\n",
              "title": "aliquip fugiat non elit cupidatat laboris laboris mollit irure minim"
          },
          {
              "_id": "5b2fe37cec1a5da9e084d4de",
              "author": "Deana Ingram",
              "img": "http://placehold.it/640x320",
              "creationDate": "2018-04-25T06:53:57",
              "duration": 113,
              "description": "Labore in nostrud est qui cillum non ut id excepteur in sint. Exercitation sit nulla voluptate eiusmod qui excepteur eiusmod ea duis do sint eiusmod. Culpa magna proident reprehenderit ea deserunt id non velit aliquip. Fugiat aliquip commodo et quis excepteur consequat mollit id incididunt labore quis irure ea. Elit veniam magna nisi sit enim do. Dolor esse incididunt voluptate anim nulla anim cupidatat aliquip culpa non aliqua sit mollit. Et esse exercitation excepteur ex labore est officia enim consectetur.\r\nEiusmod enim qui pariatur irure do labore enim. Do veniam et pariatur eiusmod minim cillum. In proident exercitation cupidatat ea nisi consequat laborum ea commodo aliquip. Deserunt tempor excepteur velit elit cupidatat. Sunt ut proident tempor irure sunt cupidatat nulla mollit deserunt. Qui aliqua commodo dolore consequat occaecat anim Lorem cillum. Ipsum reprehenderit voluptate enim et magna id aute laboris velit ipsum duis ut.\r\nCommodo dolor culpa occaecat non id cillum velit anim fugiat. Ipsum velit quis labore nulla cupidatat voluptate. Consequat esse qui enim enim cillum esse enim commodo dolore non. Do aute enim aliqua nulla Lorem laborum mollit. Tempor deserunt id occaecat enim sit. Fugiat in aliquip tempor ad sunt.\r\n",
              "title": "anim esse officia"
          }
      ]
  ];

  constructor() { }

}
