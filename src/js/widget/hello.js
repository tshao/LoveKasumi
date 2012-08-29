
define(["troopjs-core/component/widget", "jquery"], function HelloModule (Widget, $) {
	
	return Widget.extend({
		"dom/click": function onClick (topic, $event) {
			alert('clicked');
		}
	});

});

