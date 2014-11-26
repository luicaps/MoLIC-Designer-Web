/*****************************************
 * Library is under GPL License (GPL)
 * Copyright (c) 2012 Andreas Herz
 ****************************************/
/**
 * @class draw2d.shape.state.State
 * 
 * @extends draw2d.shape.layout.VerticalLayout
 */
molic.shape.Ubiquitous = draw2d.shape.layout.VerticalLayout.extend({

    NAME: "molic.shape.Ubiquitous",

    init: function(attr, setter, getter ) {
        this._super(attr);

        this.northPort = this.createPort("hybrid", new draw2d.layout.locator.TopLocator(this));
        this.northPort.setConnectionAnchor(new draw2d.layout.anchor.ChopboxConnectionAnchor(this.northPort));

        this.setBackgroundColor("#ecf0f1");

        // UI representation
        this.setStroke(2);
        this.setColor("#bdc3c7");
        this.setRadius(3); 
        this.setDimension(100, 40);
    }
});