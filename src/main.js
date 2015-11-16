import _ from 'lodash';

const filenames = [
  'css/less',
  'js/babel',
  'js/coffeescript',
  'js/typescript',
  'inline-html-ng'
];

module.exports = _.map(filenames, (x) => require('./' + x).default);
