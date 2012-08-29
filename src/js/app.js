
require({
	"paths" : {
		"troopjs-bundle": "lib/troopjs-bundle/dist/troopjs-bundle",
		"troopjs-core": "lib/troopjs-bundle/src/lib/troopjs-core",
        "troopjs-jquery" : "lib/troopjs-bundle/src/lib/troopjs-jquery/src",
		"jquery": "../_shared/jquery/1.8/jquery.min",
		"less": "../_shared/less/1.3.0/less.min"
	},
    "deps": [ "troopjs-bundle" ]
}, ["require", "jquery", "less", "troopjs-bundle", "troopjs-jquery/weave"], function Deps (parentRequire, $) {

    	$('#helloworld').weave();

});