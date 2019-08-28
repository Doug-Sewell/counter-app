class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addHandler = this.addHandler.bind(this);
        this.subtractHandler = this.subtractHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.state = {
            count:props.count
        }
    }

    addHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            }
        });
    }

    subtractHandler() {
        this.setState((prevState) => {
            return {
                count:prevState.count-1
            }
        })
    }

    resetHandler() {
        this.setState(() => {
            return {
                count:0
            }
        });
    }
    
    render() {
        return(
           <div>
               <h1>Counter: {this.state.count?this.state.count:Counter.defaultProps.count}</h1>
               <button onClick={this.addHandler}>+1</button>
               <button onClick={this.subtractHandler}>-1</button>
               <button onClick={this.resetHandler}>Reset</button>
           </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={0} />,document.getElementById('app'));