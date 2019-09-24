import React, { Component } from "react";
import Textfield from './Textfield'
import Dropdown from './Dropdown'

class Flexi extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        // console.log(name,value);

        this.setState({
            [name]: value,
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.onFlexiSubmit(this.state)
    }


    render() {
        const { config } = this.props;

        let { item } = config

        // console.log(config)
        // console.log(config[1].values)
        let dropdowns = config[1].values;
        let text = config[0].type;

        let drop = config[1].type;

        let SampleArry = [];
        let count = config.length;
        for (let i = 0; i < count; i++) {
            // debugger
            if (config[i].type == "TextField") {
                SampleArry.push("Textfield")
            } else {
                SampleArry.push("DropDown")
            }

        }

        // console.log(SampleArry)        

        return (
            <div className="App">
                <h1>Hello Flexi</h1>

                <form>

                    {SampleArry.map((data, index) => (

                        (data == "Textfield") ? <Textfield values={config[index].name} handleChange={this.handleChange} />
                            : <Dropdown handleChange={this.handleChange} dropdowns={config[index].values} name={config[index].name} />
                    ))}


                    {/* { (item.type == "TextField") ? <Textfield handleChange={this.handleChange} /> :<Dropdown handleChange={this.handleChange} dropdowns={config} /> } */}

                    {/* { (item.type == "Dropdown") ? <Dropdown handleChange={this.handleChange} dropdowns={config} /> : "" } */}

                    <button onClick={this.submitForm}>Submit</button>

                </form>

            </div>
        );
    }
}

export default Flexi;