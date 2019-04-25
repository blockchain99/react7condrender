*  sending props to child component:
  * https://www.robinwieruch.de/react-pass-props-to-component/
  * https://www.robinwieruch.de/javascript-fundamentals-react-requirements/

### Materialize CSS
1) materializecss.com/cards.html
2) https://materializecss.com/getting-started.html

* instead of CDN (cut & paste code ), I use npm way asf. 
* client$ npm install --save materialize-css@next
3) webpack : 
4) Add belows in client/public/index.html
```
 <!--Import Google Icon Font-->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<!-- Compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">

<body>
      <!--JavaScript at end of body for optimized loading-->
      <script type="text/javascript" src="js/materialize.min.js"></script>
</body>
```
### git push source code:
    1) github push :
    • server$git status   $git add --all (incl subdir) 
    • $ git add . (file in only current current ro792,3701ot dir)
    • $ git commit -m “dkakdk”
    •  server$ git remote add origin 
      https://github.com/blockchain99/FullstackWebNodeJSReactExpressMongo.git
    • $git push -u origin master  → error →$ git push  -f origin master 
    1) changes an existing remote repository URL.
       1) $ git reomte -v
       2) $ git remote set-url --push <old_url> <new_url>
       3) $ git remote set-url --delete <current_url>
       4) $ git remote set-url --add <new_url>
