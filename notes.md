- Create a repository
- intialize the repository
- node_modules, package.json ,package-lock.json
- Install express
- create a server
- Listen to port to 3000
- write request handler for different requests 
- install nodemon and update scripts inside the package.json
  - node src/app.js  ---- start
  - nodemon src/app.js  ---- dev

what are dependencies
what is the use of "-g"
difference between caret ^ and tilde ~.

------------------------------------------------
 - intialize git
- .gitignore
- create a remote repo on github
- push the all code to remote origin 
  -------------------------------------
   - play with routes and routes extensions /hello ,/hello/2 etc
   - order of the code matters a lot
-----------------------------------------------
- install postman and make workplace/ collection > make API calls
- write logic to handle different HTTP methods GET,POST ,DELETE etc
- explore routing and use of + ,* ,() ,? in routing
- use of regex in routes /a/ , /.*fly$/.
- how to read query params and how to do dynamic routing.

- Multiple route handlers and play with the code.
- next()
play with next function and errors along with res.send();
- app.use("/route",rH1,rH2,rH3,[rH4,rH5],rH6)
- what is middleware?
- how express handles the request behind the scenes.
- difference between app.use and app.all
- make a dummy auth middleware  for admin
- make a dummy auth middleware for all user routes except /user/login 
- error handling using wildcarD AS  app.use("/",(error,req,res,next)=>{})
        
