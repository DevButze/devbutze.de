var componentPrototype = require('componentPrototype'),
    ClassToggler;

/**
 * ClassToggler
 * @description Toggles a class on a target element on click.
 * @constructor
 */
ClassToggler = componentPrototype.extend({
    /**
     * initialize
     * @description Initializes the module.
     * @param el {HTMLElement} The Element on which the event listener will be mounted.
     * @param dataset {Object} The configuration objectfor the Component.
     * @returns {ClassToggler}
     */
    initialize: function(el, dataset) {
        'use strict';

        this.el = el;
        this.target = document.querySelectorAll(dataset.target);
        this.set('class', dataset.class || 'active');

        this.el.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();

            this.toggleClass();
        }.bind(this));

        return this;
    },

    /**
     * toggleClass
     * @description Toggles the class on the target element.
     * @returns {ClassToggler}
     */
    toggleClass: function() {
        'use strict';

        this.el.classList.toggle('active');
        this.target[0].classList.toggle(this.get('class'));

        return this;
    }
});

module.exports = ClassToggler;