import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Blog from './components/blog';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      link: '',
      critical: '',
      date: '',
      error: null
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="navbar">        
          Some really cool stuff is going to be on here
          </div>
            <a href="#hello"> going down to about me</a>
            <a href='#hi'>goig down to the other about me</a>
        </div>


      <a className='button is-primary'>Some button</a>

      <div className="container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a leo id leo tristique elementum cursus sit amet est. Donec malesuada metus est, et sodales nibh congue vitae. Ut consequat nisi dui, in ullamcorper urna venenatis ac. Fusce auctor nulla sed turpis tincidunt, quis rhoncus sem ultricies. Donec a turpis eget libero scelerisque tincidunt. In pretium mattis dapibus. Pellentesque ac luctus lacus. Proin eu feugiat nunc, ut imperdiet lacus. Fusce malesuada at eros id vehicula. Nunc tempus justo id metus sagittis, ut scelerisque elit dapibus.

        Donec feugiat non eros et facilisis. Vivamus porta tellus nisl. Aenean posuere dictum ultrices. Pellentesque vestibulum metus sit amet ipsum semper ultrices. Integer massa ex, molestie gravida dui in, hendrerit porta erat. Pellentesque malesuada hendrerit justo eget porta. Suspendisse nec leo pretium, convallis dui in, scelerisque lectus. Sed aliquet dapibus diam ac interdum. Sed sodales mauris quis sem posuere pellentesque. Vivamus elementum, nisi et fermentum maximus, arcu tellus fermentum tellus, at bibendum nisl massa interdum nibh. Nullam quis lectus sed ligula ullamcorper fermentum. Nullam dignissim lacinia metus a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        
        Maecenas eleifend at nisl ac consectetur. Aliquam id tellus nulla. Duis commodo a nulla ac lacinia. Mauris ultrices lectus urna, eu efficitur dolor suscipit at. Proin eu massa a metus sagittis pulvinar vulputate vel ligula. Cras est odio, pharetra sit amet elementum quis, facilisis quis velit. Vestibulum consectetur nunc at sagittis sollicitudin. Phasellus eleifend, metus ac mollis vehicula, diam lectus egestas urna, hendrerit tincidunt nisl mauris in nisi. Etiam sit amet neque arcu. Phasellus a est venenatis odio vulputate eleifend. Maecenas velit ante, eleifend eget rutrum eget, condimentum et quam. Nunc consequat massa id fermentum blandit. Suspendisse at nibh pharetra, molestie urna ac, aliquet mi. Maecenas ornare lobortis orci id euismod. Integer nisl purus, tempor ac sapien vitae, volutpat viverra urna.
        
        Curabitur lacinia congue eleifend. Nullam ultrices, elit ac aliquet ornare, sem nulla elementum metus, non luctus nisl turpis eu lacus. Aenean consequat efficitur nunc, id molestie quam vulputate a. Integer laoreet molestie erat, quis consequat nulla ultrices sit amet. Ut a justo quis nisi fermentum pharetra. Nam nunc elit, interdum tempus maximus non, pharetra ac mi. Cras sit amet ultrices enim, vel faucibus ipsum. Proin vitae urna consectetur, sagittis enim non, imperdiet neque. Aenean aliquam laoreet pretium.
        
        Suspendisse potenti. Donec mollis eros risus, sed commodo ipsum porttitor sit amet. Cras felis erat, maximus vel consequat in, pretium molestie urna. Nullam fermentum tristique facilisis. Nullam neque sem, congue nec ipsum sed, mattis mollis nisi. Ut eu quam id neque maximus varius et finibus dolor. Nam tincidunt nisl vel tellus porta feugiat. In eu augue ut massa pretium venenatis nec ac quam. Morbi convallis eros vel lacinia consequat. Aenean volutpat justo leo, dapibus imperdiet dui molestie id. Curabitur orci nibh, imperdiet sit amet accumsan nec, vestibulum eget sem. Nullam eu est vitae urna lobortis aliquam. 



Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a leo id leo tristique elementum cursus sit amet est. Donec malesuada metus est, et sodales nibh congue vitae. Ut consequat nisi dui, in ullamcorper urna venenatis ac. Fusce auctor nulla sed turpis tincidunt, quis rhoncus sem ultricies. Donec a turpis eget libero scelerisque tincidunt. In pretium mattis dapibus. Pellentesque ac luctus lacus. Proin eu feugiat nunc, ut imperdiet lacus. Fusce malesuada at eros id vehicula. Nunc tempus justo id metus sagittis, ut scelerisque elit dapibus.

Donec feugiat non eros et facilisis. Vivamus porta tellus nisl. Aenean posuere dictum ultrices. Pellentesque vestibulum metus sit amet ipsum semper ultrices. Integer massa ex, molestie gravida dui in, hendrerit porta erat. Pellentesque malesuada hendrerit justo eget porta. Suspendisse nec leo pretium, convallis dui in, scelerisque lectus. Sed aliquet dapibus diam ac interdum. Sed sodales mauris quis sem posuere pellentesque. Vivamus elementum, nisi et fermentum maximus, arcu tellus fermentum tellus, at bibendum nisl massa interdum nibh. Nullam quis lectus sed ligula ullamcorper fermentum. Nullam dignissim lacinia metus a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Maecenas eleifend at nisl ac consectetur. Aliquam id tellus nulla. Duis commodo a nulla ac lacinia. Mauris ultrices lectus urna, eu efficitur dolor suscipit at. Proin eu massa a metus sagittis pulvinar vulputate vel ligula. Cras est odio, pharetra sit amet elementum quis, facilisis quis velit. Vestibulum consectetur nunc at sagittis sollicitudin. Phasellus eleifend, metus ac mollis vehicula, diam lectus egestas urna, hendrerit tincidunt nisl mauris in nisi. Etiam sit amet neque arcu. Phasellus a est venenatis odio vulputate eleifend. Maecenas velit ante, eleifend eget rutrum eget, condimentum et quam. Nunc consequat massa id fermentum blandit. Suspendisse at nibh pharetra, molestie urna ac, aliquet mi. Maecenas ornare lobortis orci id euismod. Integer nisl purus, tempor ac sapien vitae, volutpat viverra urna.

Curabitur lacinia congue eleifend. Nullam ultrices, elit ac aliquet ornare, sem nulla elementum metus, non luctus nisl turpis eu lacus. Aenean consequat efficitur nunc, id molestie quam vulputate a. Integer laoreet molestie erat, quis consequat nulla ultrices sit amet. Ut a justo quis nisi fermentum pharetra. Nam nunc elit, interdum tempus maximus non, pharetra ac mi. Cras sit amet ultrices enim, vel faucibus ipsum. Proin vitae urna consectetur, sagittis enim non, imperdiet neque. Aenean aliquam laoreet pretium.

Suspendisse potenti. Donec mollis eros risus, sed commodo ipsum porttitor sit amet. Cras felis erat, maximus vel consequat in, pretium molestie urna. Nullam fermentum tristique facilisis. Nullam neque sem, congue nec ipsum sed, mattis mollis nisi. Ut eu quam id neque maximus varius et finibus dolor. Nam tincidunt nisl vel tellus porta feugiat. In eu augue ut massa pretium venenatis nec ac quam. Morbi convallis eros vel lacinia consequat. Aenean volutpat justo leo, dapibus imperdiet dui molestie id. Curabitur orci nibh, imperdiet sit amet accumsan nec, vestibulum eget sem. Nullam eu est vitae urna lobortis aliquam. 
      </div>

      <div id="hello">Hello from the other side</div>
      <div id="hi">
        <Blog/>
      </div>
    </div>

    );
  }
}

export default App;
