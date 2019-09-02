class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addHandler = this.addHandler.bind(this);
        this.subtractHandler = this.subtractHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        const num = localStorage.getItem('count');
        const count = parseInt(num,10);

        if(!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(prevState) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count',this.state.count);
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
               <h1>Counter: {this.state.count}</h1>
               <button onClick={this.addHandler}>+1</button>
               <button onClick={this.subtractHandler}>-1</button>
               <button onClick={this.resetHandler}>Reset</button>
           </div>
        )
    }
}


ReactDOM.render(<Counter count={0} />,document.getElementById('app'));