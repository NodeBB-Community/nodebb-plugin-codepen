'use strict';

/* globals __CPEmbed */

require(['hooks'], (hooks) => {
	hooks.on('action:topic.loaded', () => {
		if (__CPEmbed) {	// do nothing if codepen lib not loaded yet
			__CPEmbed();
		}
	});
});
