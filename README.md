# MongoDB---Simple-CRUD

## My(VRCaakeShop) HerokuApp link 
https://vrcakeshop.herokuapp.com/

https://vrcakeshop.herokuapp.com/display


## first create Heroku account 

>>in project changes make at index.js file

exp.listen(process.env.PORT || 8000, () => console.log("server running ${port}!"));

>>create a procfile and write in it 

web: node index.js(your app.js file or server.js file or index.js file).

>>make channges at package.json file add this lines

"engines": {
        "npm": "6.14.15",
        "node": "14.18.0"
    },
    
    "scripts": {

        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "node index.js"
    },
    
## write this command at terminal in your project

>> cd SimpleCrud_MongoDB

    heroku login -i 
    
    write your heroku email and password
    
>> now use git

    git init
    
    git add .
    
    git commit -m "for erro"
    
>> create heroku app from cmd

    heroku create vrcakeshop(heroku app name)
    
>> now push your mongoDB app on heroku

    git push heroku master(master or main)
    
>> go to heroku website 

    refresh your heroku page and go to settings
    
    and click on button Reveal Config vars
    
    Here add enviromental variables like ::
    
    key : value pair
    
    mongourl : connection string  (paste both from .env file)
    
    click on Add button and Refresh page
    
>> start heroku
 
    heroku restart
    
>> open Heroku
>> 
    heroku open
    
## your heroku app is ready

>> you can open your app throug heroku website 

    just go to your app and click on open button

