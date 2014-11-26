var example = {
    command: {},
    shape: {},
    dialog : {}
};
var molic = {shape: {}};
/**
 * @class draw2d.shape.pert.Activity
 * 
 * @extends draw2d.shape.layout.VerticalLayout
 */
molic.shape.Opening = draw2d.shape.basic.Circle.extend({

    NAME : "molic.shape.Opening",

    DEFAULT_COLOR : new draw2d.util.Color("#000000"),

    init: function(attr, setter, getter ) {
        this._super(attr);

        var northPort = this.createPort("hybrid", new draw2d.layout.locator.TopLocator(this));
        this.northPort = northPort;
        this.northPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.northPort));

        this.northPort.getConnectionDirection = function(conn, relatedPort){ 
            return northPort.getParent().getBoundingBox().getDirection(relatedPort.getAbsolutePosition());
        };

        this.setDimension(35, 35);
        this.setBackgroundColor(this.DEFAULT_COLOR);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());
        this.setStroke(0);
    }
});