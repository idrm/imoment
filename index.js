var moment = require('moment');

var IMoment = function(m) {
	this._m = m;
};

var m = moment();

var mproto = Object.getPrototypeOf(m);

var name;
var i;

for (name in mproto) {
	(function(name) {
		var fn = m[name];
		IMoment.prototype[name] = function () {
			var m = this._m;
			if (arguments.length > 0 || (name === 'utc' || name === 'local'))
				m = m.clone();
			var args = [];
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg instanceof IMoment)
					args.push(arg._m);
				else
					args.push(arg);
			}
			var r = fn.apply(m, args);
			if (moment.isMoment(r))
				return new IMoment(r);
			else
				return r;
		}
	})(name);
}

function imoment() {
	if (arguments.length === 0) {
		var now = moment();
		return new IMoment(now);
	} else
		return new IMoment(moment.apply(this, arguments));
};

var statics = ['min', 'max', 'utc', 'unix'];
for (i = 0; i < statics.length; i++) {
	var name = statics[i];
	imoment[name] = function() {
		var args = [];
		for (var j = 0; j < arguments.length; j++) {
			var arg = arguments[j];
			if (imoment.isMoment(arg))
				arg = arg._m;
			args.push(arg);
		}
		var r = moment[name].apply(this, args);
		if (moment.isMoment(r))
			return new IMoment(r);
		else
			return r;
	};
}

module.exports = imoment;