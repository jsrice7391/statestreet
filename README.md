# Transaction Table
This is a table that is built to show a large table of transactions and be able to filter on them. Each transation contains a link that goes to a different rendered component using React-Router-Dom.

This app can be viwed live here: 

[THE APP LIVE ON AWS](http://appforthestatestreet.s3-website-us-east-1.amazonaws.com/ "The App")


## Key Tools Used
- React Router
- React 16
- React-Bootstrap 
- AWS S3 Bucket
- AWS CLI
- Create-React-App

###Key points
I chose to make my application within React. When I build my React applications, I tend to organize my SRC folder such that all of my stateful componentns are within a "pages" folder and all of my stateless componenents are in a folder called "stateless." 

Within the package.json I created a custom method in which I can run 
```
yarn build-and-deploy
```
This will run the build process for my React app and then it will deploy it to the AWS bucket that I specify.

### Future Dev
Use ReDux to hold the transactions and be able to make components connect to Redux providers or the React Context API. 





