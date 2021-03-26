# Kanban Board
Kanban Board is an application to create and edit tasks based on your needs to keep you organized.

List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /googleLogin`
- `GET /tasks`
- `GET /tasks/id`
- `PUT /tasks/id`
- `POST /tasks`
- `PATCH /tasks/id`
- `DELETE /tasks/id`

&nbsp;

Tech Stack used to build this app :
* Node JS
* Express JS framework
* PostgreSQL
* Bcryptjs
* Cors
* Axios
* Google-auth-library
* Jsonwebtoken
* Sequelize

Dev Dependancy
* Dotenv


&nbsp;

## Global Responses
> These responses are applied globally on all endpoints

_Response (500 - Internal server error)_
```
{
  "message": "Internal server error"
}
```

_Response (400 - Bad request)_
```
{
  "message": "Invalid email or password"
}
```

_Response (401 - Unauthorized)_
```
{
  "message": "Unauthorized"
}
```

&nbsp;

## RESTful endpoints
### POST /register

> Register user

_Request Body_
```
{
    'email': 'string',
    'password': 'string'
}
```
_Response (201 - Created)_
```
 {
    'msg': 'Register success'
 }
```


### POST /login

> Login user

_Request Body_
```
{
    'email': 'string',
    'password': 'string'
}
```

_Response (200)_
```
 {
    'access_token': 'string'
 }
```


---
### POST /googleLogin

> Login user via Google

_Request Body_
```
{
    'email': 'string'
}
```

_Response (201 - Created)_
```
 {
    'id': 'integer',
    'email': 'string',
    'access_token': 'string'
 }
```

---
### GET /tasks

> Get all tasks

_Request Header_
```
{
  'access_token': 'access_token'
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
 {
    'Task': {
        "id": 'integer',
        "title": 'string',
        "category": 'string',
        "userId": 'integer',
        "due_date": 'date'
    }
 }
```

---
### GET /tasks/id

> Get tasks by id

_Request Header_
```
{
  'access_token': 'access_token'
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
 {
    'Task': {
        "id": 'integer',
        "title": 'string',
        "category": 'string',
        "userId": 'integer',
        "due_date": 'date'
    }
 }
```

---
### POST /tasks

> Create new task

_Request Header_
```
{
  'access_token': 'access_token'
}
```

_Request Body_
```
{
  "title": 'string',
  "category": 'string',
  "userId": 'integer'
}

```

_Response (201 - Created)_
```
{
    'Task': {
        "id": 'integer',
        "title": 'string',
        "category": 'string',
        "userId": 'integer',
        "due_date": 'date'
    }
}
```

---
### PUT /tasks/id

> Edit existing task

_Request Header_
```
{
  'access_token': 'access_token'
}
```

_Request Body_
```
{
  "title": 'string',
  "category": 'string',
  "userId": 'integer'
}

```

_Response (200)_
```
{
    'Task': {
        "id": 'integer',
        "title": 'string',
        "category": 'string',
        "userId": 'integer',
        "due_date": 'date'
    }
}
```

---
### PATCH /tasks/id

> Update status task

_Request Header_
```
{
  'access_token': 'access_token'
}
```

_Request Body_
```
{
  "status": 'string'
}

```

_Response (200)_
```
{
    'Task': {
        "id": 'integer',
        "title": 'string',
        "category": 'string',
        "userId": 'integer',
        "due_date": 'date'
    }
}
```

### DELETE /tasks/id

> Delete task by id

_Request Header_
```
{
  'access_token': 'access_token'
}
```

_Request Body_
```
not needed
```

_Response (200)_
```
 OK
```
