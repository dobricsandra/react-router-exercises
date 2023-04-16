Current setup of app is:

1. You have different pages in pages folder. Each page should be connected to different route. Do that in routes/routes.js file.
2. Routes have different accessibility settings that should be checked for in RouteGuard.jsx file:
   - AdminHomepage (/admin) is a private route visible only to logged in user. "LOGOUT" button that logs out the user and redirects him to the login screen should be added.
   - Login (/login) is a public route visible only to not logged in users. If logged in user is trying to access it, he should be redirected to AdminHomepage and should not be able to come back via browser's back button to the login screen.
   - NotFoundPage (/not-found) and WelcomePage (/) are public routes accessible at any time to both logged in and not logged in user.
3. There is a request to dummy backend that logs in the user and returns the token.
