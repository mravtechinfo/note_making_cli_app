

const chalk = require('chalk')
const notes = require('./notes.js')
const yargs=require('yargs')


//Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        
        notes.addNote(argv.title,argv.body)
        
    }
})


//Ceate Remove Command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'

        }
    },
    
    
    handler(argv){
       notes.removeNote(argv.title)
    }
})

//Creating a list command

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }

})

//Creating a Read Command

yargs.command({
    command: 'read',
    describe: 'Read your notes',    
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
     //Below parameter fucntion is giving us the output
     yargs.parse()
