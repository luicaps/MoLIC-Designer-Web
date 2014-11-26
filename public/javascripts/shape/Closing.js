/*****************************************
 * Library is under GPL License (GPL)
 * Author: luicaps
 ****************************************/
/**
 * @class draw2d.shape.state.End
 * 
 * @extends draw2d.shape.basic.Circle
 */
molic.shape.Closing = draw2d.shape.basic.Circle.extend({

    NAME : "molic.shape.Closing",

    DEFAULT_COLOR : new draw2d.util.Color("#ffffff"),

    init: function(attr, setter, getter ) {
        this.innerCircle = new draw2d.shape.basic.Circle(20);
        this._super(attr);
        
        this.northPort = this.createPort("hybrid", new draw2d.layout.locator.TopLocator(this));
        this.northPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.northPort));
        /*this.southPort = this.createPort("hybrid", new draw2d.layout.locator.BottomLocator(this));
        this.southPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.southPort));
        this.leftPort = this.createPort("hybrid", new draw2d.layout.locator.LeftLocator(this));
        this.leftPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.leftPort));
        this.rightPort = this.createPort("hybrid", new draw2d.layout.locator.RightLocator(this));
        this.rightPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.rightPort));*/

        this.setDimension(35, 35);
        this.setBackgroundColor(this.DEFAULT_COLOR);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.setStroke(1);
        this.setColor("#000000");

        this.innerCircle.setStroke(2);
        this.innerCircle.setBackgroundColor("#000000");
        this.add(this.innerCircle, new draw2d.layout.locator.CenterLocator());
    },
 
    /**
     * @inheritdoc
     */
    setDimension: function(w, h) {
        this._super(w,h);
        this.innerCircle.setDimension(this.getWidth()-12,this.getHeight()-12);
    }
});
