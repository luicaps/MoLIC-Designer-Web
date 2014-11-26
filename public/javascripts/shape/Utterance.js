/**
 * @class example.connection_labeledit.LabelConnection
 * 
 * A simple Connection with a label wehich sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */
molic.shape.Utterance = draw2d.Connection.extend({

    NAME : "molic.shape.Utterance",

    init:function(attr) {
        this._super(attr);

        // Create any Draw2D figure as decoration for the connection
        //
        this.utterance = new draw2d.shape.basic.Label({
            text:"d: Transition",
            color:null,
            fontColor:"#000000",
            bgColor:"#ffffff"
        });
 
        // add the new decoration to the connection with a position locator.
        //
        this.add(this.utterance, new draw2d.layout.locator.ManhattanMidpointLocator());

        // Register a label editor with a dialog
        //
        this.utterance.installEditor(new draw2d.ui.LabelInplaceEditor());

        var arrow = new draw2d.decoration.connection.ArrowDecorator(8,8);
        arrow.setBackgroundColor("#000000");
        this.setTargetDecorator(arrow);

        this.attr({
            router:new draw2d.layout.connection.InteractiveManhattanConnectionRouter(),
            outlineStroke:0,
            stroke:2
        });
    },
 
    /**
     * @method
     * Set the text to show if the state shape
     * 
     * @param {String} text
     */
    setUtterance: function (text) {
        this.utterance.setText(text);
        return this;
    },
 
 
    /**
     * @method
     * Return the label of the shape
     * 
     */
    getUtterance: function () {
        return this.utterance.getText();
    }
});