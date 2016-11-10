import React from 'react';

// Import sub-components
import Form from './Children/Saved';
import Results from './Children/Search';

import helpers from './utils/helpers.js';

	render(){
		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h2 className="text-center">NYT Articles!</h2>
						<p className="text-center"><em>Enter an article.</em></p>
					</div>

					<div className="col-md-6">
					
						<Form setTerm={this.setTerm}/>

					</div>

					<div className="col-md-6">
				
						<Results address={this.state.results} />

					</div>

				</div>

			</div>
		)		
	}

}

// Export the componen back for use in other files
export default Main;