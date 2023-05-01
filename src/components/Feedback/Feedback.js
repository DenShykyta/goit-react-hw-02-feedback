import { Component } from "react";
import './Feedback.css';

class FeedBack extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    // handleIncrementGood = (event) => {
    //     this.setState((prevState) => {
    //         return {
            
    //         }
    //     })
    // };
    handleIncrementGood = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    };
    handleIncrementNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    };
    handleIncrementBad = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((total, number) => { return total + number }, 0);
    };
    countPositiveFeedbackPercentage = () => {
        // щоб округлити число до другої цифри після десяткової крапки, ми можемо помножити число на 100, викликати функцію округлення і потім поділити його назад. Але так як нам треба відсотки, то на 100 не ділимо
        return (Math.round((this.state.good / this.countTotalFeedback()) * 100));
    };

    render() {
        return (
            // const { good, neutral, bad } = this.state;
            <div className='feedback'>
                <h1 className='feedback__title'>Please leave feedback</h1>
                <button type='button' className='feedback__btn' name='good' onClick={this.handleIncrementGood}>Good</button>
                <button type='button' className='feedback__btn' onClick={this.handleIncrementNeutral}>Neutral</button>
                <button type='button' className='feedback__btn' onClick={this.handleIncrementBad}>Bad</button>
                <h2 className="stat__title">Statistics</h2>
                <p className="stat__item">Good: {this.state.good} </p>
                <p className="stat__item">Neutral: {this.state.neutral}</p>
                <p className="stat__item">Bad: {this.state.bad}</p>
                <p className="stat__item">Total: {this.countTotalFeedback()}</p>
                <p className="stat__item">Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>

            </div>
        )
        
    }
}

export default FeedBack;