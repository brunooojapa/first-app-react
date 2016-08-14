import React, { Component } from 'react';
import Header from './tpl/Header';
import Footer from './tpl/Footer';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
          <div className="jumbotron">
            <h1>Home</h1>
            <p className="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
          </div>
          <div className="row marketing">
            <div className="col-lg-6">
              <h4>Subheading</h4>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

              <h4>Subheading</h4>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

              <h4>Subheading</h4>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>

            <div className="col-lg-6">
              <h4>Subheading</h4>
              <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

              <h4>Subheading</h4>
              <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

              <h4>Subheading</h4>
              <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
}

export default Home;