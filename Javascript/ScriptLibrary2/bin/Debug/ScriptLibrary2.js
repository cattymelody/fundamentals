// ScriptLibrary2.js
(function(){
Type.registerNamespace('ScriptLibrary2');ScriptLibrary2.Euclid=function(){}
ScriptLibrary2.Euclid.prototype={GCD:function(x,y){while(!!x&&!!y){if(x>y){x%=y;}else{x%=y;}}if(!x){return y;}else{return x;}}}
ScriptLibrary2.Euclid.registerClass('ScriptLibrary2.Euclid');})();// This script was generated using Script# v0.7.4.0
