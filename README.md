# Case Study: Mobile Engineering

## Context

In this challenge, you will implement a basic React Native application that displays the list of users of one of our customers and allows us to get some details for each of them on a different view. You will need to add to the app a navigation bar to present the list of users and the app settings. In the settings view, you will allow the user to change the language of the entire app.

## Your tasks

The app consists of 3 pages/views that need to be developed.

## Develop the Main View

- The main page of the app loaded after the splash screen.
- It should be presented after clicking on the “Users” nav button.
- The users (image, name, and email) can be gathered from the following endpoint:
[https://reqres.in/api/users](https://reqres.in/api/users)

```
{
  "page": 1,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
  "data": [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    ...
   ]
}
```

- The user should be able to go back to the previous step

![Mobile Case Study.drawio (1).png](Case%20Study%20e8713/Mobile_Case_Study.drawio_(1).png)

## Develop the Details View

- It’s presented after tapping/selecting a user in the Main View.
- The selected user profile details can be fetched using the following endpoint:
[https://reqres.in/api/users/2](https://reqres.in/api/users/2)

```
{
  "data": {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  "support": {
    "url": "https://reqres.in/#support-heading",
    "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
  }
}
```

- The active localization/internationalization profile should be applied to this view on all the title fields.

![Mobile Case Study.drawio (2).png](Case%20Study%20e8713/Mobile_Case_Study.drawio_(2).png)

## Develop the Settings View

- It should be presented after clicking on the “Settings” nav button.
- The user should be able to choose between at least 2 languages.
- The entire application should be presented in the selected language

![Mobile Case Study.drawio (3).png](Case%20Study%20e8713/Mobile_Case_Study.drawio_(3).png)

## Ensure the following Application Flow

![Mobile Case Study.drawio.png](Case%20Study%20e8713/Mobile_Case_Study.drawio.png)

## Bonus task

- Adjust the navigator such that the navigation bar disappears when accessing the Details child view (focused mode).
- Add some tests

## Constraints

- Use React Native
- Provide the code in a GitHub repository
