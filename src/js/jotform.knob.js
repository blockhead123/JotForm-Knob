var label = JFCustomWidget.getQueryString('QuestionLabel');
//subscribing ready event and implementing widget related code inside callback function
//is the best practice while developing widgets
JFCustomWidget.subscribe("ready", function(){

    // knob parameters
    var c_fgColor = JFCustomWidget.getQueryString("fgColor");
    var c_bgColor = JFCustomWidget.getQueryString("bgColor");
    var c_max = JFCustomWidget.getQueryString("max");
    var c_min = JFCustomWidget.getQueryString("min");
    var c_width = JFCustomWidget.getQueryString("width");
    var c_fColor = JFCustomWidget.getQueryString("fColor");

    // knob handling
    (function( $ ) {
        $(".dial").knob({
            max: c_max,
            min: c_min,
            bgColor: c_bgColor,
            fgColor: c_fgColor,
            width: c_width,
            inputColor: c_fColor
        });
    }( jQuery ));

    //subscribe to form submit event
    JFCustomWidget.subscribe("submit", function(){
        var msg = {
            //you should valid attribute to data for JotForm
            //to be able to use youw widget as required
            valid: true,
            value: document.getElementById('dial').value
        }
        // send value to JotForm
        JFCustomWidget.sendSubmit(msg);
    });
});
