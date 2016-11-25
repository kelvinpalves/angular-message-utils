(function () {
	'use strict';

	angular
		.module('core.utils')
		.factory('messageUtils', messageUtils);

	messageUtils.$inject = ['DefaultMessage', 'MessageType', 'toastr']

	function messageUtils(DefaultMessage, MessageType, toastr) {
		var service = {
			feedMessage: feedMessage
		};

		initToastr();

		return service;

		function feedDefault(executed) {
			if (executed) {
				toastr[MessageType.SUCCESS](DefaultMessage.SUCCESS);
			} else {
				toastr[MessageType.ERROR](DefaultMessage.ERROR);
			}
		}

		function feedMessage(response) {
			var data = response.data || {};
			
			if (angular.equals({}, data)) {
				toastr[MessageType.ERROR](DefaultMessage.EMPTY_DATA);
				return;
			} 

			var message = data.message || [];

			if (message.length > 0) {
				angular.forEach(message, function (value, key) {
					toastr[value[0].toLowerCase()](value[1]);
				});
			} else {
				var executed = typeof data.executed === 'boolean' ? data.executed : false;
				feedDefault(executed);
			}
		}

		function initToastr() {
			toastr.options.timeOut = 3000;
			toastr.options.closeButton = true;
	        toastr.options.positionClass = 'toast-bottom-right';
	        toastr.options.preventDuplicates = true;
		}
	}

})();