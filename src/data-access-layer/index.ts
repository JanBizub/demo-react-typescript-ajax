import * as request from 'superagent'

export module DogsDao {
    export let getDogs = ( apiUrl: string,
                           successCallback: ( data: any ) => void,
                           errorCallback: ( err: any ) => void ) => {
        request.get( apiUrl )
            .end( ( err, res ) => {
                if ( err || !res.ok ) {
                    errorCallback( err )
                }
                else {
                    let dogsTransformed = Object.keys( res.body.message ).map( ( key ) => key )
                    successCallback( dogsTransformed )
                }
            } )
    }
}