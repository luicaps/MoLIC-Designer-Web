/**
 * @class example.connection_labeledit.LabelConnection
 * 
 * A simple Connection with a label wehich sticks in the middle of the connection..
 *
 * @author Andreas Herz
 * @extend draw2d.Connection
 */
molic.shape.Breakdown = molic.shape.Utterance.extend({
    
    NAME : "molic.shape.Breakdown",
    
    init:function(attr) {
        this._super(attr);
        this.setDashArray("-.");
    }
});