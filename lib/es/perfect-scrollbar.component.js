var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable no-underscore-dangle, react/no-unused-prop-types, react/forbid-prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import PerfectScrollbar from 'perfect-scrollbar';
import 'classlist-polyfill';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiUGVyZmVjdFNjcm9sbGJhciIsImhhbmRsZXJOYW1lQnlFdmVudCIsIk9iamVjdCIsImZyZWV6ZSIsIlNjcm9sbEJhciIsInByb3BzIiwiaGFuZGxlUmVmIiwicmVmIiwiX2NvbnRhaW5lciIsImNvbnRhaW5lclJlZiIsIl9oYW5kbGVyQnlFdmVudCIsIk1hcCIsImNvbXBvbmVudERpZE1vdW50IiwicHMiLCJvcHRpb24iLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImNhbGxiYWNrIiwiaGFuZGxlciIsInNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnREaWRVcGRhdGUiLCJ1cGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInZhbHVlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsZWFyIiwiZGVzdHJveSIsInNldFNjcm9sbFRvcCIsInRvcCIsInNjcm9sbFRvcCIsInNldFNjcm9sbExlZnQiLCJsZWZ0Iiwic2Nyb2xsTGVmdCIsInJlbmRlciIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsIm9uU2Nyb2xsWSIsIm9uU2Nyb2xsWCIsIm9uU2Nyb2xsVXAiLCJvblNjcm9sbERvd24iLCJvblNjcm9sbExlZnQiLCJvblNjcm9sbFJpZ2h0Iiwib25ZUmVhY2hTdGFydCIsIm9uWVJlYWNoRW5kIiwib25YUmVhY2hTdGFydCIsIm9uWFJlYWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0EsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsWUFBMUI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixtQkFBN0I7QUFDQSxPQUFPLG9CQUFQO0FBQ0EsT0FBTyw2Q0FBUDtBQUNBLE9BQU8sb0NBQVA7O0FB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QUFLLHVDQUFxQ0EsU0FBMUMsRUFBdUQsS0FBSyxLQUFLL0IsU0FBakU7QUFDRzhCO0FBREgsS0FERjtBQUtELEc7OztFQWxHb0N0QyxNQUFNd0MsYSxVQWtCcENDLFksR0FBZTtBQUNwQkYsYUFBVyxFQURTO0FBRXBCdkIsVUFBUTBCLFNBRlk7QUFHcEIvQixnQkFBYyx3QkFBTSxDQUFHLENBSEg7QUFJcEJnQyxhQUFXRCxTQUpTO0FBS3BCRSxhQUFXRixTQUxTO0FBTXBCRyxjQUFZSCxTQU5RO0FBT3BCSSxnQkFBY0osU0FQTTtBQVFwQkssZ0JBQWNMLFNBUk07QUFTcEJNLGlCQUFlTixTQVRLO0FBVXBCTyxpQkFBZVAsU0FWSztBQVdwQlEsZUFBYVIsU0FYTztBQVlwQlMsaUJBQWVULFNBWks7QUFhcEJVLGVBQWFWO0FBYk8sQztTQWxCSHBDLFMiLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzLCByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAncGVyZmVjdC1zY3JvbGxiYXInO1xuaW1wb3J0ICdjbGFzc2xpc3QtcG9seWZpbGwnO1xuaW1wb3J0ICdwZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJztcbmltcG9ydCAnLi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuc2Nzcyc7XG5cbmNvbnN0IGhhbmRsZXJOYW1lQnlFdmVudCA9IHtcbiAgJ3BzLXNjcm9sbC15JzogJ29uU2Nyb2xsWScsXG4gICdwcy1zY3JvbGwteCc6ICdvblNjcm9sbFgnLFxuICAncHMtc2Nyb2xsLXVwJzogJ29uU2Nyb2xsVXAnLFxuICAncHMtc2Nyb2xsLWRvd24nOiAnb25TY3JvbGxEb3duJyxcbiAgJ3BzLXNjcm9sbC1sZWZ0JzogJ29uU2Nyb2xsTGVmdCcsXG4gICdwcy1zY3JvbGwtcmlnaHQnOiAnb25TY3JvbGxSaWdodCcsXG4gICdwcy15LXJlYWNoLXN0YXJ0JzogJ29uWVJlYWNoU3RhcnQnLFxuICAncHMteS1yZWFjaC1lbmQnOiAnb25ZUmVhY2hFbmQnLFxuICAncHMteC1yZWFjaC1zdGFydCc6ICdvblhSZWFjaFN0YXJ0JyxcbiAgJ3BzLXgtcmVhY2gtZW5kJzogJ29uWFJlYWNoRW5kJyxcbn07XG5PYmplY3QuZnJlZXplKGhhbmRsZXJOYW1lQnlFdmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbEJhciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY29udGFpbmVyUmVmOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbFk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsWDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxVcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TY3JvbGxEb3duOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNjcm9sbExlZnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2Nyb2xsUmlnaHQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWVJlYWNoU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uWVJlYWNoRW5kOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblhSZWFjaFN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblhSZWFjaEVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG9wdGlvbjogdW5kZWZpbmVkLFxuICAgIGNvbnRhaW5lclJlZjogKCkgPT4geyB9LFxuICAgIG9uU2Nyb2xsWTogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsWDogdW5kZWZpbmVkLFxuICAgIG9uU2Nyb2xsVXA6IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbERvd246IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbExlZnQ6IHVuZGVmaW5lZCxcbiAgICBvblNjcm9sbFJpZ2h0OiB1bmRlZmluZWQsXG4gICAgb25ZUmVhY2hTdGFydDogdW5kZWZpbmVkLFxuICAgIG9uWVJlYWNoRW5kOiB1bmRlZmluZWQsXG4gICAgb25YUmVhY2hTdGFydDogdW5kZWZpbmVkLFxuICAgIG9uWFJlYWNoRW5kOiB1bmRlZmluZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9oYW5kbGVyQnlFdmVudCA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcih0aGlzLl9jb250YWluZXIsIHRoaXMucHJvcHMub3B0aW9uKTtcbiAgICAvLyBob29rIHVwIGV2ZW50c1xuICAgIE9iamVjdC5rZXlzKGhhbmRsZXJOYW1lQnlFdmVudCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IHRoaXMucHJvcHNbaGFuZGxlck5hbWVCeUV2ZW50W2tleV1dO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBjYWxsYmFjayh0aGlzLl9jb250YWluZXIpO1xuICAgICAgICB0aGlzLl9oYW5kbGVyQnlFdmVudC5zZXQoa2V5LCBoYW5kbGVyKTtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5wcy51cGRhdGUodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIHVuaG9vayB1cCBldmVuc1xuICAgIE9iamVjdC5rZXlzKHRoaXMuX2hhbmRsZXJCeUV2ZW50KS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICB0aGlzLl9jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihrZXksIHZhbHVlLCBmYWxzZSk7XG4gICAgfSk7XG4gICAgdGhpcy5faGFuZGxlckJ5RXZlbnQuY2xlYXIoKTtcbiAgICB0aGlzLnBzLmRlc3Ryb3kodGhpcy5fY29udGFpbmVyKTtcbiAgfVxuXG4gIC8vIG1ldGhvZHMgY2FuIGJlIGludm9rZWQgYnkgb3V0c2lkZVxuICBzZXRTY3JvbGxUb3AodG9wKSB7XG4gICAgaWYgKHRoaXMuX2NvbnRhaW5lcikge1xuICAgICAgdGhpcy5fY29udGFpbmVyLnNjcm9sbFRvcCA9IHRvcDtcbiAgICAgIHRoaXMucHMudXBkYXRlKHRoaXMuX2NvbnRhaW5lcik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZXRTY3JvbGxMZWZ0KGxlZnQpIHtcbiAgICBpZiAodGhpcy5fY29udGFpbmVyKSB7XG4gICAgICB0aGlzLl9jb250YWluZXIuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICB0aGlzLnBzLnVwZGF0ZSh0aGlzLl9jb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlUmVmID0gKHJlZikgPT4ge1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IHJlZjtcbiAgICB0aGlzLnByb3BzLmNvbnRhaW5lclJlZihyZWYpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BvYy1zY3JvbGxiYXItY29udGFpbmVyICR7Y2xhc3NOYW1lfWB9IHJlZj17dGhpcy5oYW5kbGVSZWZ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=