'use strict';

exports.handler = function( event, context, callback ) {
    
    if( (event.name === 'Richard') || (event.name === 'rhyatt' ) ) {
        
        return callback( null, { valid: true } );
    }
    
    callback( new Error( 'unknown name' ) );
};
