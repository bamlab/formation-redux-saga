import React, { Component } from 'react';

// this is common page : the subsequent page will render
// at the page of { this.prop.children }
class App extends Component {
  render() {
    return (
			<main className="wrapper">
				<nav className="navigation">
      		<section className="container">
						<div className="navigation-title">
							<h1 className="title">Formation Redux-Saga</h1>
						</div>
					</section>
				</nav>
				<section className="container" style={{ minHeight: 'calc(100vh - 80px)' }}>
					{ this.props.children }
				</section>
				<footer className="footer">
					<section className="container">
						<p>
							Written / adapted with ♥ by Tycho Tatitscheff. Licensed under the MIT License.
							<br />
							Credit milligram for the CSS, design and base DOM.
						</p>
					</section>
				</footer>
      </main>
    );
  }
}

export default App;
