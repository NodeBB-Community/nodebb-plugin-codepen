'use strict';

(function (module) {
	const codepen = {};
	const embed = '<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="$2" data-preview="true" data-user="$1" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"></p>';
	const pen = /<a href="(?:https?:\/\/)?codepen\.io\/(.+)\/pen\/([\w\-_]+)".+?<\/a>/g;

	codepen.parse = function (data, callback) {
		if (!data || !data.postData || !data.postData.content) {
			return callback(null, data);
		}
		if (data.postData.content.match(pen)) {
			data.postData.content = data.postData.content.replace(pen, embed);
		}

		callback(null, data);
	};

	codepen.addEmbedScript = (scripts) => {
		scripts.push('https://cpwebassets.codepen.io/assets/embed/ei.js');

		return scripts;
	};

	module.exports = codepen;
}(module));
