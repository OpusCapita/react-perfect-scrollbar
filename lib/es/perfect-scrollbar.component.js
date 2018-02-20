var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-underscore-dangle, react/no-unused-prop-types, react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import './perfect-scrollbar.component.scss';

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

    this.ps = new PerfectScrollbar(this._container, this.props.option);
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

    return React.createElement(
      'div',
      { className: 'oc-scrollbar-container ' + className, ref: this.handleRef },
      children
    );
  };

  return ScrollBar;
}(React.PureComponent), _class.defaultProps = {
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
export { ScrollBar as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGVyZmVjdFNjcm9sbGJhciIsImhhbmRsZXJOYW1lQnlFdmVudCIsIk9iamVjdCIsImZyZWV6ZSIsIlNjcm9sbEJhciIsInByb3BzIiwiaGFuZGxlUmVmIiwicmVmIiwiX2NvbnRhaW5lciIsImNvbnRhaW5lclJlZiIsIl9oYW5kbGVyQnlFdmVudCIsIk1hcCIsImNvbXBvbmVudERpZE1vdW50IiwicHMiLCJvcHRpb24iLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImNhbGxiYWNrIiwiaGFuZGxlciIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJ1cGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwiZGVzdHJveSIsInNldFNjcm9sbFRvcCIsInRvcCIsInNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInJlbmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsIm9uU2Nyb2xsWSIsIm9uU2Nyb2xsWCIsIm9uU2Nyb2xsVXAiLCJvblNjcm9sbERvd24iLCJvblNjcm9sbExlZnQiLCJvblNjcm9sbFJpZ2h0Iiwib25ZUmVhY2hTdGFydCIsIm9uWVJlYWNoRW5kIiwib25YUmVhY2hTdGFydCIsIm9uWFJlYWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsWUFBMUI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixtQkFBN0I7QUFDQSxPQUFPLDZDQUFQO0FBQ0EsT0FBTyxvQ0FBUDs7QUFFQSxJQUFNQyxxQkFBcUI7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QyxFQUF1RCxLQUFLLEtBQUsvQixTQUFqRTtBQUNHOEI7QUFESCxLQURGO0FBS0QsRzs7O0VBbEdvQ3RDLE1BQU13QyxhLFVBa0JwQ0MsWSxHQUFlO0FBQ3BCRixhQUFXLEVBRFM7QUFFcEJ2QixVQUFRMEIsU0FGWTtBQUdwQi9CLGdCQUFjLHdCQUFNLENBQUcsQ0FISDtBQUlwQmdDLGFBQVdELFNBSlM7QUFLcEJFLGFBQVdGLFNBTFM7QUFNcEJHLGNBQVlILFNBTlE7QUFPcEJJLGdCQUFjSixTQVBNO0FBUXBCSyxnQkFBY0wsU0FSTTtBQVNwQk0saUJBQWVOLFNBVEs7QUFVcEJPLGlCQUFlUCxTQVZLO0FBV3BCUSxlQUFhUixTQVhPO0FBWXBCUyxpQkFBZVQsU0FaSztBQWFwQlUsZUFBYVY7QUFiTyxDO1NBbEJIcEMsUyIsImZpbGUiOiJwZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgcmVhY3Qvbm8tdW51c2VkLXByb3AtdHlwZXMsIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdwZXJmZWN0LXNjcm9sbGJhcic7XG5pbXBvcnQgJ3BlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MnO1xuaW1wb3J0ICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC5zY3NzJztcblxuY29uc3QgaGFuZGxlck5hbWVCeUV2ZW50ID0ge1xuICAncHMtc2Nyb2xsLXknOiAnb25TY3JvbGxZJyxcbiAgJ3BzLXNjcm9sbC14JzogJ29uU2Nyb2xsWCcsXG4gICdwcy1zY3JvbGwtdXAnOiAnb25TY3JvbGxVcCcsXG4gICdwcy1zY3JvbGwtZG93bic6ICdvblNjcm9sbERvd24nLFxuICAncHMtc2Nyb2xsLWxlZnQnOiAnb25TY3JvbGxMZWZ0JyxcbiAgJ3BzLXNjcm9sbC1yaWdodCc6ICdvblNjcm9sbFJpZ2h0JyxcbiAgJ3BzLXktcmVhY2gtc3RhcnQnOiAnb25ZUmVhY2hTdGFydCcsXG4gICdwcy15LXJlYWNoLWVuZCc6ICdvbllSZWFjaEVuZCcsXG4gICdwcy14LXJlYWNoLXN0YXJ0JzogJ29uWFJlYWNoU3RhcnQnLFxuICAncHMteC1yZWFjaC1lbmQnOiAnb25YUmVhY2hFbmQnLFxufTtcbk9iamVjdC5mcmVlemUoaGFuZGxlck5hbWVCeUV2ZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb250YWluZXJSZWY6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsWTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxYOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbFVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbERvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsTGVmdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxSaWdodDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25ZUmVhY2hTdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25ZUmVhY2hFbmQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWFJlYWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWFJlYWNoRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgb3B0aW9uOiB1bmRlZmluZWQsXG4gICAgY29udGFpbmVyUmVmOiAoKSA9PiB7IH0sXG4gICAgb25TY3JvbGxZOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxYOiB1bmRlZmluZWQsXG4gICAgb25TY3JvbGxVcDogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsRG93bjogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsTGVmdDogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsUmlnaHQ6IHVuZGVmaW5lZCxcbiAgICBvbllSZWFjaFN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb25ZUmVhY2hFbmQ6IHVuZGVmaW5lZCxcbiAgICBvblhSZWFjaFN0YXJ0OiB1bmRlZmluZWQsXG4gICAgb25YUmVhY2hFbmQ6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2hhbmRsZXJCeUV2ZW50ID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcyA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKHRoaXMuX2NvbnRhaW5lciwgdGhpcy5wcm9wcy5vcHRpb24pO1xuICAgIC8vIGhvb2sgdXAgZXZlbnRzXG4gICAgT2JqZWN0LmtleXMoaGFuZGxlck5hbWVCeUV2ZW50KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5wcm9wc1toYW5kbGVyTmFtZUJ5RXZlbnRba2V5XV07XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9ICgpID0+IGNhbGxiYWNrKHRoaXMuX2NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJCeUV2ZW50LnNldChrZXksIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihrZXksIGhhbmRsZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnBzLnVwZGF0ZSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gdW5ob29rIHVwIGV2ZW5zXG4gICAgT2JqZWN0LmtleXModGhpcy5faGFuZGxlckJ5RXZlbnQpLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKGtleSwgdmFsdWUsIGZhbHNlKTtcbiAgICB9KTtcbiAgICB0aGlzLl9oYW5kbGVyQnlFdmVudC5jbGVhcigpO1xuICAgIHRoaXMucHMuZGVzdHJveSh0aGlzLl9jb250YWluZXIpO1xuICB9XG5cbiAgLy8gbWV0aG9kcyBjYW4gYmUgaW52b2tlZCBieSBvdXRzaWRlXG4gIHNldFNjcm9sbFRvcCh0b3ApIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIuc2Nyb2xsVG9wID0gdG9wO1xuICAgICAgdGhpcy5wcy51cGRhdGUodGhpcy5fY29udGFpbmVyKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNldFNjcm9sbExlZnQobGVmdCkge1xuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5zY3JvbGxMZWZ0ID0gbGVmdDtcbiAgICAgIHRoaXMucHMudXBkYXRlKHRoaXMuX2NvbnRhaW5lcik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBoYW5kbGVSZWYgPSAocmVmKSA9PiB7XG4gICAgdGhpcy5fY29udGFpbmVyID0gcmVmO1xuICAgIHRoaXMucHJvcHMuY29udGFpbmVyUmVmKHJlZik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3NOYW1lIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YG9jLXNjcm9sbGJhci1jb250YWluZXIgJHtjbGFzc05hbWV9YH0gcmVmPXt0aGlzLmhhbmRsZVJlZn0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==