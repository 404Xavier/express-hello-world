const express = require( "express" );
const app = express();
const port = process.env.PORT || 3001;

app.get( "/api/test", ( req, res ) => {
  res.status( 200 ).send( {
    message: 'I return JSON',
    name: 'John'
  } );
} );

app.listen( port, () => console.log( `Example app listening on port ${ port }!` ) );


