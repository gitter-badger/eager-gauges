window.EagerGauges = {
  init: function(options) {
  	var _gauges = _gauges || [];
	(function() {
		var gauges   = document.createElement('script');
		gauges.type  = 'text/javascript';
		gauges.async = options.asynchronous;
		gauges.id    = 'gauges-tracker';
		gauges.setAttribute('data-site-id', options.id);
		gauges.src = '//secure.gaug.es/track.js';
		var source = document.getElementsByTagName('script')[0];
		source.parentNode.insertBefore(gauges, source);
	})();
  }
};
