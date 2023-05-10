# Bonface Masira

Create a new simple Angular 2+ application. This application should include two pages

a. Page one - A search input field and a table with collections for farmers.

b. Page two - A chart page showing the collections over a period of time.

To reduce load on the API, the front-end should wait for the user to stop typing before making an API request.

Collections must be retrieved by using fake REST API (https://github.com/typicode/json-server). You can find db.json file in the repository.

The search input can be used to filter collections by collection code. Search field validation:

Collection code must include at least three identical letters, regardless of order. i.e. collection codes "aaa", "aa2a" and "zz222z" are valid, while "aabbcc" is not.

Treat the project as if it would go in production when you are done. So please make sure to use best practices and unit test the application where necessary, It will also be important to think about the application structure, maintainability, readability, and code quality.

If there are any points that are not clear from this task, you can make assumptions. Assumption that are vital to the understanding of the solution can be written down in an .md file.

Handing in

Please do all the work in a branch develop, and open a Pull request from develop to main when you are done.
