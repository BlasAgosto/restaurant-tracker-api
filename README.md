# Restaurant Tracker App

This is the frontend repo for our full stack image upload application. This app uses MongoDB as a database and integrates AWS for image storage, allowing users to upload photos with additional information and then access those photos from their thumbnails.

## Links 
- [Deployed App](https://glacial-atoll-96940.herokuapp.com/)
- [Frontend Repo](https://github.com/BlasAgosto/restaurant-tracker-client)

### Technologies Used

Frontend:
- React
- JavaScript
- Node.js

Backend:
- Express.js
- MongoDB
- Mongoose

## API

### Authentication

| HTTP Method | URL Path      | Action |
|--------|--------------------|-------------|
| POST   | `/sign-up`          | sign-up    |
| POST   | `/sign-in`          | sign-in    |
| PATCH  | `/change-password/` | change password  |
| DELETE | `/sign-out/`        | sign-out   |

### Restaurant Tracking

| HTTP Method   | URL Path        | Action |
|--------|------------------------|-------------------|
| POST   | `/add-rests`             | creates a restaurant |
| GET   | `/your-rests`             | shows all created restaurants from signed in user   |
| GET   | `/`             | shows all created restaurants from all users    |
| PATCH  | `/your-rests` | updates restaurant details  |
| DELETE | `/your-rests`        | deletes created restaurant   |

## Planning

In preparation for work on this app, our team planned out wire-frames, entity relationship diagrams, and user stories which can be found below.

### Wire-frame
![Image Upload App Wire-frame](https://i.imgur.com/yaCjVyY.png "Image Upload App Wire-frame")

### Entity Relationship Diagram (ERD)
![Image Upload App ERD](https://i.imgur.com/vlAC77B.png "Image Upload App ERD")

### User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a restaurant with information.
- As a signed in user, I would like to update the name and impression of the restaurant.
- As a signed in user, I would like to see all my restaurants.
- As a signed in user, I would like to delete a restaurant experience I've created.
- As a signed in user, I would like to see the following data for any restaurant: 
  - name
  - impression
  - rating
  - worthy for particular groups of people

## Future Updates

- Styling and UI improvements
- Filter function that sorts by tags


## About Me

Thanks for dropping by! Currently am a software engineering students studying in General Assembly's full-time software engineering program. 

If you'd like to checkout more of my work, visit our links below!

**Blas Agosto**
- [GitHub](https://github.com/BlasAgosto)
- [LinkedIn](https://www.linkedin.com/in/blasagosto/)


#### *Cheers!*