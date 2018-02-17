'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp; /* eslint-disable no-underscore-dangle, react/no-unused-prop-types, react/forbid-prop-types */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _perfectScrollbar = require('perfect-scrollbar');

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

require('perfect-scrollbar/css/perfect-scrollbar.css');

require('./perfect-scrollbar.component.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar = (_temp = _class = function (_React$PureComponent) {
  _inherits(ScrollBar, _React$PureComponent);

  function ScrollBar(props) {
    _classCallCheck(this, ScrollBar);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.handleRef = function (ref) {
      _this._container = ref;
      _this.props.containerRef(ref);
    };

    _this._handlerByEvent = new Map();
    return _this;
  }

  ScrollBar.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.ps = new _perfectScrollbar2.default(this._container, this.props.option);
    // hook up events
    Object.keys(handlerNameByEvent).forEach(function (key) {
      var callback = _this2.props[handlerNameByEvent[key]];
      if (callback) {
        var handler = function handler() {
          return callback(_this2._container);
        };
        _this2._handlerByEvent.set(key, handler);
        _this2._container.addEventListener(key, handler, false);
      }
    });
  };

  ScrollBar.prototype.componentDidUpdate = function componentDidUpdate() {
    this.ps.update(this._container);
  };

  ScrollBar.prototype.componentWillUnmount = function componentWillUnmount() {
    var _this3 = this;

    // unhook up evens
    Object.keys(this._handlerByEvent).forEach(function (value, key) {
      _this3._container.removeEventListener(key, value, false);
    });
    this._handlerByEvent.clear();
    this.ps.destroy(this._container);
  };

  // methods can be invoked by outside


  ScrollBar.prototype.setScrollTop = function setScrollTop(top) {
    if (this._container) {
      this._container.scrollTop = top;
      this.ps.update(this._container);

      return true;
    }
    return false;
  };

  ScrollBar.prototype.setScrollLeft = function setScrollLeft(left) {
    if (this._container) {
      this._container.scrollLeft = left;
      this.ps.update(this._container);

      return true;
    }
    return false;
  };

  ScrollBar.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className;

    return _react2.default.createElement(
      'div',
      { className: 'oc-scrollbar-container ' + className, ref: this.handleRef },
      children
    );
  };

  return ScrollBar;
}(_react2.default.PureComponent), _class.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined
}, _temp);
exports.default = ScrollBar;