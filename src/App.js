import React, { Component } from 'react';
import './App.css';




class App extends Component {
//function App() {

  constructor(props) {
    super(props);
    this.state = {
      productos: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/productos/')
      .then((response) => {
        return response.json()
      })
      .then((prod) => {
        this.setState({ productos: prod })
      })    
  } 


  render() {
    return (
      <div>
        <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>                    
          </tr>
        </thead>
        <tbody>  
          {this.state.productos.map(producto => {
            return (
              <tr key={producto.codigo}>
                <td>{producto.codigo}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
      </div>
    );
  }

}

export default App;
