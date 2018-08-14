## Server for Anguar-Mentoring tasks

##### Setup

1) npm install
2) open http://localhost:3000/

##### Server API

1) http://localhost:3000/user -> all users;
2) http://localhost:3000/users/auth?user=string&password=string -> fake token;
3) http://localhost:3000/users/userInfo?token=5b5e11385809b1e033edea91 -> 
    {
        "id": string,
        "name": string,
        "password": string
    }
4) http://localhost:3000/courses -> all courses
5) http://localhost:3000/courses?start=number&count=number&q=string -> courses for pagination
6) POST http://localhost:3000/courses -> add course
7) http://localhost:3000/courses -> all courses
8) GET http://localhost:3000/courses/:id -> get course by id
9) post http://localhost:3000/courses/:id -> update course
10) DELETE http://localhost:3000/courses/:id -> delete course by id
