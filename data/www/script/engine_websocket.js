/* ========================================================================    
 *
 * engine_socket.js
 * ----------------------
 *
 *  Web socket functions for the engine
 *
 * ======================================================================== */
//============================================================================
//
//Web socket functions
//
//============================================================================
VASIR_ENGINE.WEB_SOCKET = {
    _socket: undefined,
    functions: {
        'init': undefined,
        'heart_beat': undefined
    }
}

//============================================================================
//
//Init function
//
//============================================================================
VASIR_ENGINE.WEB_SOCKET.functions.init = function(){
    //Call the heartbeat function
    VASIR_ENGINE.WEB_SOCKET.functions.game_state_heart_beat();
}
//============================================================================
//
//Heartbeat function
//
//============================================================================
VASIR_ENGINE.WEB_SOCKET.functions.game_state_heart_beat = function(){
    //Setup the socket object
    VASIR_ENGINE.WEB_SOCKET._socket = io.connect('http://' + 
        VASIR_ENGINE._HOST_NAME + ':1337');
    socket = VASIR_ENGINE.WEB_SOCKET._socket;

    socket.on('connect', function (res) {
        VASIR_ENGINE.functions.update_log({
            'message': 'WebSocket connected successfully',
            'style': 'success'});
    });
    socket.on('message', function (res) {
        VASIR_ENGINE.functions.update_game_state(res);
    });
}
