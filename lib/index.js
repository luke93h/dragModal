'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modal = require('antd/lib/modal');

var _modal2 = _interopRequireDefault(_modal);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dragm = require('./dragm');

var _dragm2 = _interopRequireDefault(_dragm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import styles from 'antd/lib/modal/style'


var BuildTitle = function (_React$Component) {
  _inherits(BuildTitle, _React$Component);

  function BuildTitle() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BuildTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BuildTitle.__proto__ || Object.getPrototypeOf(BuildTitle)).call.apply(_ref, [this].concat(args))), _this), _this.updateTransform = function (position, tx, ty) {
      var checkedData = _this.checkBorder(position, tx, ty);
      _this.modalDom.style.transform = 'translate(' + checkedData.tx + 'px,' + checkedData.ty + 'px)';
      return checkedData;
    }, _this.checkBorder = function (position, tx, ty) {
      var rect = _this.modalDom.querySelector('.ant-modal-content').getBoundingClientRect();
      var width = rect.width;
      var saveDistance = _this.props.saveDistance;

      var result = { tx: tx, ty: ty };
      if (position.initX + tx < -(width - saveDistance)) {
        result.tx = -(width - saveDistance) - position.initX;
      }
      if (position.initX + tx > document.documentElement.clientWidth - saveDistance) {
        result.tx = document.documentElement.clientWidth - saveDistance - position.initX;
      }
      if (position.initY + ty < 0) {
        result.ty = -position.initY;
      }
      if (position.initY + ty > document.documentElement.clientHeight - saveDistance) {
        result.ty = document.documentElement.clientHeight - saveDistance - position.initY;
      }
      return result;
    }, _this.getDom = function (titleDom) {
      if (!titleDom) return;
      _this.modalDom = (0, _dragm.getModalWrapperNode)(titleDom, 'ant-modal-wrap');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BuildTitle, [{
    key: 'render',
    value: function render() {
      var title = this.props.title;

      return _react2.default.createElement(
        _dragm2.default,
        {
          updateTransform: this.updateTransform,
          getDom: this.getDom
        },
        _react2.default.createElement(
          'div',
          null,
          title
        )
      );
    }
  }]);

  return BuildTitle;
}(_react2.default.Component);

var DragModal = function (_Component) {
  _inherits(DragModal, _Component);

  function DragModal(props) {
    _classCallCheck(this, DragModal);

    var _this2 = _possibleConstructorReturn(this, (DragModal.__proto__ || Object.getPrototypeOf(DragModal)).call(this, props));

    _this2.state = {
      transform: ''
    };
    return _this2;
  }

  _createClass(DragModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$title = _props.title,
          title = _props$title === undefined ? '' : _props$title,
          _props$saveDistance = _props.saveDistance,
          saveDistance = _props$saveDistance === undefined ? 80 : _props$saveDistance,
          props = _objectWithoutProperties(_props, ['title', 'saveDistance']);

      return _react2.default.createElement(_modal2.default, _extends({}, props, {
        title: _react2.default.createElement(BuildTitle, {
          title: title,
          saveDistance: saveDistance
        })
      }));
    }
  }]);

  return DragModal;
}(_react.Component);

Object.assign(DragModal, _modal2.default);
exports.default = DragModal;