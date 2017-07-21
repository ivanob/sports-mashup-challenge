# sports-mashup-challenge

### How to run the application locally
```
npm install
node index.js index -k KEYWORD_TO_SEARCH
```
### Example of execution
```
node index.js index -k football
```

### Configuration
You need to create a folder 'config' with the file 'default.toml' inside in the root directory of the project.
The content of this file would be the following (replacing it with your credentials):
```
[github]
oauthtoken='...'
limitprojects=10
[twitter]
consumerKey='...'
consumerSecret="..."
accessToken="..."
accessTokenSecret="..."
callBackUrl="callback"
limittweets=10
```
