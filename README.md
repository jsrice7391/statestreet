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

### Key points
I chose to make my application within React. When I build my React applications, I tend to organize my SRC folder such that all of my stateful componentns are within a "pages" folder and all of my stateless componenents are in a folder called "stateless." 

Within the package.json I created a custom method in which I can run 
```
yarn build-and-deploy
```
This will run the build process for my React app and then it will deploy it to the AWS bucket that I specify.

### Running the Application
1. Open a Command Line (Windows) or a Terminal (MacOS and linux) and set the current directory to a folder you wish to run this application.
2. Clone this repository to your computer using:
```
git clone https://github.com/jsrice7391/statestreet.git
```
This wiill create a local folder that will have the application inside of it.
3. Change the directory into the new folder, install the dependencies (packages) and run the application.
```
cd statestreet
npm install
npm start
```
If you have used React before, you can run the application with Yarn.
```
cd statestreet
yarn install
yarn start
```
4. Enjoy the app!




### Future Dev
Use ReDux to hold the transactions and be able to make components connect to Redux providers or the React Context API. 





