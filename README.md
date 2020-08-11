# Back-end

## TODO LIST

Base URL:

https://todoappo.herokuapp.com/

## Authentication

### Register USER

#### USER 
**[POST]** `/auth/user/register`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must be unique         |
| `password` | String | Yes      |                        |

_example:_

```
{
  username: "Bob",
  password: "pass123"
}
```

#### RESPONSE

##### 201 (Created)

```
{
    "newUser": "User has been registered succesfully..",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3Rpbmd0aGlzMSIsImlhdCI6MTU5NzEwNTAzMywiZXhwIjoxNTk3MTI2NjMzfQ.pXMzDoQpnC-o_KkBPx2erqlPaPklJjl5uoR3AUvSK74"
}
```

### Login DINER

**[POST]** `/auth/user/login`

#### REQUEST

##### Body

| name       | type   | required | description            |
| ---------- | ------ | -------- | ---------------------- |
| `username` | String | Yes      | Must exist in database |
| `password` | String | Yes      | Must exist in database |

_example:_

```
{
  username: "Bob",
  password: "pass123"
}
```

#### RESPONSE

##### 200 (OK)

```
{
    "message": "Welcome to the TodoAppo Bob",
    "id": 1,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiQm9iIiwiaWF0IjoxNTk3MTA0OTc5LCJleHAiOjE1OTcxMjY1Nzl9.BDH_sZd2Y2Z3AB9LfQt6E0zQ31FQ3wB-MgW_kNzPzDc"
}
```

## Users 

### UPDATE USER

**[PUT]** `/api/user/:id`


##### URL Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in operator   |

_example:_

```
{

  "username": "bob1",
  "password": "passwerd"
}
```
#### RESPONSE

##### 200 (OK)

```
{
  "id": 1,
  "username": "bob1",
  "password": "passwerd"
}
```
### DELETE Operator

**[DELETE]** `/api/user/:id`


##### URL Parameters

| name | type    | required | description            |
| ---- | ------- | -------- | ---------------------- |
| `id` | Integer | Yes      | ID of logged in operator   |


#### RESPONSE

##### 200 (OK)

```
{
  "Removed": 1
}
```
