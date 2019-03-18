import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {

  handleSubmit =(e)=> {
    e.preventDefault();
    const bird= this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = '';
  };

  render() {
    const {BirdStore} = this.props;

    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className='form-group col'>
            <h2 className='col-6'>You have {BirdStore.birdCount} birds.</h2>
            <input className='col-6'type='text' placeholder='enter bird' ref={input => this.bird=input}/>
            <button className="btn btn-primary">add bird</button>
          </div>
            <ul>{BirdStore.birds.map(bird=>(
                <li key={bird}>{bird}</li>
            ))}
            </ul>
        </form>
      </div>
    );
  }
}

export default App;
