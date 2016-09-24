angular.module('starter.services', [])
.service('CharacterSvc', function($cordovaSQLLite){

    this.create = function(name){
        return {
            name: name,
            fate: 0,
            persona: 0,
            deed: 0
        };
    }
    
    this.insert = function(character){
        var query = "INSERT INTO character (name, fate, persona, deed) VALUES (?,?,?,?)";
        $cordovaSQLLite.execute(db, query, [character.name, character.fate, character.persona, character.deed]).then(function(res) {
            console.log("INSERT IT -> " + res.insertId);
        }, function (err) {
            console.error(err);
        });
    }

    this.get = function(){
        var query = "SELECT * FROM character";
        $cordovaSQLLite.execute(db, query, []).then(function(res){
            if(res.rows.length > 0) {
                console.log("SELECTED -> " + res.rows.item(0));
            } else {
                console.log("No results found");
            }
        }, function (err) {
            console.error(err);
        })
    }
});