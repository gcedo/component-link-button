'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = Button;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

/* eslint-disable id-match */
/* eslint-disable  react/display-name */

var _reactI13n = require('react-i13n');

var defaultPreventer = function defaultPreventer(ev) {
  ev.preventDefault();
};

function Button(props) {
  var className = props.className;
  var children = props.children;
  var disabled = props.disabled;
  var shadow = props.shadow;
  var icon = props.icon;
  var unstyled = props.unstyled;
  var i13nModel = props.i13nModel;

  var extraClassNames = className ? className.split(/\s+/g) : [];
  var onClick = props.onClick;
  if (!unstyled) {
    extraClassNames.push('link-button--styled');
  }
  if (disabled === true) {
    onClick = defaultPreventer;
    extraClassNames.push('link-button--disabled');
  }
  if (shadow === true) {
    extraClassNames.push('link-button--shadow');
  }
  var content = children;
  var linkProps = _extends({}, props);

  if (icon) {
    extraClassNames.push('link-button--icon');
    extraClassNames.push('link-button-icon--' + icon.icon);
    if (icon.className) {
      extraClassNames.push(icon.className);
    }
    if (icon.color) {
      extraClassNames.push('icon--' + icon.icon + '-' + icon.color);
    }
    if (!icon.useBackground) {
      content = _react2['default'].createElement(
        'span',
        { className: 'link-button__group' },
        _react2['default'].createElement(_economistComponentIcon2['default'], _extends({}, icon, { key: 'link-button__icon' })),
        _react2['default'].createElement(
          'span',
          { className: 'link-button__text', key: 'link-button__text' },
          content
        )
      );
    } else {
      extraClassNames.push('link-button--icon-background');
      linkProps.style = { backgroundRepeat: 'no-repeat' };
    }
    // We don't want this prop spreaded on <a> tag.
    delete linkProps.icon;
  }

  linkProps.role = "button";
  linkProps.onClick = onClick;
  linkProps.className = ['link-button'].concat(extraClassNames).join(' ');

  if (props.i13nModel) {
    var I13nLink = _reactI13n.createI13nNode('a', {
      isLeafNode: true,
      bindClickEvent: true,
      follow: true
    });
    return _react2['default'].createElement(
      I13nLink,
      linkProps,
      content
    );
  } else {
    return _react2['default'].createElement(
      'a',
      linkProps,
      content
    );
  }
}

Button.propTypes = {
  href: _react2['default'].PropTypes.string.isRequired,
  className: _react2['default'].PropTypes.string,
  children: _react2['default'].PropTypes.node,
  onClick: _react2['default'].PropTypes.func,
  disabled: _react2['default'].PropTypes.bool,
  shadow: _react2['default'].PropTypes.bool,
  unstyled: _react2['default'].PropTypes.bool,
  icon: _react2['default'].PropTypes.object,
  i13nModel: _react2['default'].PropTypes.object
};
module.exports = exports['default'];