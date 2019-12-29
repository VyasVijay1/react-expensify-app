'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleClickone = _this.handleClickone.bind(_this);
        _this.handleClickTwo = _this.handleClickTwo.bind(_this);
        _this.handleClickThree = _this.handleClickThree.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var stringcount = localStorage.getItem('count');
            var count = parseInt(stringcount, 10);
            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            //console.log('t: ' + prevState.count)
            if (prevState.count !== this.state.count) {
                //console.log('2')
                localStorage.setItem('count', this.state.count);
            }
        }
    }, {
        key: 'handleClickone',
        value: function handleClickone() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'handleClickTwo',
        value: function handleClickTwo() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: 'handleClickThree',
        value: function handleClickThree() {
            this.setState(function () {
                return { count: 0 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleClickone },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleClickTwo },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleClickThree },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, { count: -10 }), document.getElementById('app'));

// class Counter extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleAddOne = this.handleAddOne.bind(this)
//         this.handleAddTwo = this.handleAddTwo.bind(this)
//         this.handleAddThree = this.handleAddThree.bind(this)
//         this.state = {
//             count: 0
//         }
//     }
// handleAddOne(){
//     this.setState((prevState) => {
//         return {
//             count: prevState.count + 1
//         }        
//     })
//     console.log('Handle one clicked: ' + this.state.count)
// }
// handleAddTwo(){
//     this.setState((prevState) => {
//         return {           
//                 count: prevState.count -1  
//         }         
//     }

//     )
//     console.log('prevState.count: ' + this.count)
// }
// handleAddThree(){
//     this.setState(() => {
//             return {
//                count:0
//             }
//         }
//         )
//     console.log('Handle Three clicked')
// }
//     render(){
//         return(
//             <div>
//                 <h1>Counter: {this.state.count} </h1>
//                 <button onClick={this.handleAddOne}>+1</button>
//                 <button onClick={this.handleAddTwo}>-1</button>
//                 <button onClick={this.handleAddThree}>reset</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Counter/>, document.getElementById('app'))
