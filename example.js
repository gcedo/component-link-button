'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

exports['default'] = _react2['default'].createElement(
  'div',
  { style: { padding: '20px' } },
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { href: 'http://www.economist.com' },
      'Load more'
    )
  ),
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { disabled: true, href: 'http://www.economist.com' },
      'I am disabled'
    )
  ),
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { shadow: true, href: 'http://www.economist.com' },
      'I have a shadow'
    )
  ),
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { shadow: true, icon: { icon: 'facebook', size: '28px' },
        href: 'http://www.economist.com'
      },
      'I have an icon'
    )
  ),
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { unstyled: true, icon: {
          icon: 'video' },
        href: 'http://www.economist.com'
      },
      'Unstyled with icon'
    )
  ),
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { icon: {
          icon: 'video',
          color: 'honolulu',
          'useBackground': true },
        href: 'http://www.economist.com'
      },
      'Use icon as background'
    )
  ),
  _react2['default'].createElement(
    'p',
    null,
    _react2['default'].createElement(
      _index2['default'],
      { icon: { icon: 'facebook', size: '56px', rounded: true },
        href: 'http://www.economist.com',
        i13nModel: {
          action: 'click',
          element: 'facebook link'
        }
      },
      'I have an bigger icon and I\'m tracked'
    )
  )
);
module.exports = exports['default'];