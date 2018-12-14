const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const categoryJson = require('./category.json');
const categoriesJson = require('./categories.json');
    
app.set('view engine' , 'ejs');
app.use(express.static('./public'));

app.route('/')
   .get( (req, res) => {
      res.render('index');
   })

app.route('/api/category')
   .get( (req, res) => {
        res.json( categoryJson );
   });

app.route('/api/categories/id=:id')
    .get( (req , res) => {
       let answer;
       let dataError = 'No data found';

       categoriesJson.forEach(element => {
         if(req.params.id  === String(element.id)) {
            answer = element;
         }
       });
       answer !== undefined ? res.send(answer) : res.send(dataError);
    });


app.get('*' , (req , res) => {
   res.status(404).send('Get the fuck out ');
})

 app.listen(port, () => console.log(`Listening on port ${port}`));
