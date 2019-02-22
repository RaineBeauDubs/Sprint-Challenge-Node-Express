*Mention two parts of Express that you learned about this week.

Express contains both regular and error-handling middleware. Regular middleware runs when the application is working and functioning normally. When there is an error, however, regular middleware gets turned off and error-handling middleware steps up to… well, handle errors.


*Describe Middleware?

Middleware are functions that take in “our homies” request and response, do their thing, and then return the response or call anymore middleware you may have set up.


*Describe a Resource?

A resource is the data that is housed inside of a database.


*What can the API return to help clients know if a request was successful?

The client receives a status code, which then points them to whether or not the request was a success or failure and may provide some information as to why.


*How can we partition our application into sub-applications?

We can do this with Express Routers. These are basically miniature Express applications that exist inside of a larger Express application and can have their own middleware and routing within.