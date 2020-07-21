// const { v4: uuidv4 } = require('uuid');
var express = require("express")
var path = require("path");
const fs = require("fs")
var app = express();
var connection = require('../config/connection');
var PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// console.log(uuidv4());



 app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "public/index.html"));
 })

 app.get("/notes", function(req,res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
 })



app.get("/api/notes", function(req,res){
    try{
        connection.query("SELECT * FROM  note")
        .then(results => {
          res.send(results)
          console.log(results.length)
          
        })
        .catch(err => console.log(err))
    
   
    }
    catch(error)
    {
        res.send(error);
    }
})



app.post("/api/notes",function(req,res){
   
    try{
       
            const noteRequest = req.body;
            console.log(noteRequest);          
             
    
                    connection.query(
                        "INSERT INTO note SET ?",
                        {
                          
                            title: noteRequest.title,
                            n_text: noteRequest.n_text
                            
                        },               
                        
                        
                        function(err) {
                          if (err) throw err;
                          else
                          {
                         
                          res.redirect("/notes")
                          }
                         
                        }
                        
                          
                      );              
    
                        
            
    
    }
    catch(error)
    {
       console.log(error);
    }
    
    })
    
    app.delete("/api/notes/:id", function(req, res) {
        
        
        connection.query(
            'DELETE FROM note WHERE id=?',[req.params.id],(err,rows,fields)=>{
                if(!err)
                res.send("delete successfully")
                else
                console.log(err)

                
            }
            
                      
    
        );
        
    })
        
    
    app.listen(PORT, function() {
        console.log(`Listening on Port ${PORT}`)
    })
    
    