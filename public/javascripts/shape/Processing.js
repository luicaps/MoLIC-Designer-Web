/**
 * @class draw2d.shape.pert.Activity
 * 
 * @extends draw2d.shape.layout.VerticalLayout
 */
molic.shape.Processing = draw2d.shape.basic.Rectangle.extend({

    NAME : "molic.shape.Processing",

    DEFAULT_COLOR : new draw2d.util.Color("#000000"),

    init: function(attr, setter, getter ) {
        this._super(attr);

        this.northPort = this.createPort("input", new draw2d.layout.locator.TopLocator(this));
        this.northPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.northPort));

        this.setDimension(25, 25);
        this.setBackgroundColor(this.DEFAULT_COLOR);
        this.installEditPolicy(new draw2d.policy.figure.AntSelectionFeedbackPolicy());

        this.setStroke(0);
    }
});