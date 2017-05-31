const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnalyticsSchema = new Schema({
  ip: String,
  user: Number,
  url: String,
  createdAt: { type: Date, default: Date.now }
});

AnalyticsSchema.statics = {
  list: (options, cb) => {
    const criteria = options.criteria || {};
    this.find(criteria)
      .populate('user', 'name username provider')
      .sort({'createdAt': -1})
      .limit(options.perPage)
      .skip(options.perPage * options.page)
      .exec(cb);
    }
};

mongoose.model('Analytics', AnalyticsSchema);
