# Proof of concept Typescript

## STUDENTS ENTITY

<li>POST/students</li>
<li>GET/students</li>
<li>DELETE/students/:id</li>
<li>PUT/students/:id</li>
<br/>

## POST/students

Body
```json
{
  "name": "Joana",
  "email": "joana@email.com",
  "register": "20239996",
  "graduation": "Computer Science",
  "age": 23,
  "isActive": true
}
```
## GET/students

### Query strings
    GET/students?course=Computer Science

## DELETE/students/:id

    DELETE/students/5

## PUT/students/:id

Body
```json
{
  "name": "Joana Edited",
  "email": "joana@email.com",
  "register": "20239996",
  "graduation": "Computer Science",
  "age": 23,
  "isActive": true
}
```

    PUT/students/5
