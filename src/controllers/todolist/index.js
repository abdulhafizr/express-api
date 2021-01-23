const store = require('./controller/store');
const index = require('./controller/index');
const update = require('./controller/update');
const show = require('./controller/show');
const destroy = require('./controller/destroy');

module.exports.store = store;
module.exports.index = index;
module.exports.update = update;
module.exports.show = show;
module.exports.destroy = destroy;
