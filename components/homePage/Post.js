import React from 'react'
import { Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

var Post = React.createClass({
	render: function() {
		var imageSection = {
			marginTop: '80px'
		}

		var ColStyle = {
			marginBottom: '20px'
		}

		var sectionHeader = {
			marginTop: '0',
			marginBottom: '40px',
			textAlign: 'center',
			textTransform: 'uppercase',
			color: '#F76663',
			fontSize: '62px'
		}

		var blogImage = {
			height: '250px',
			width: '100%',
			float: 'left',
			marginBottom: '15px'
		}

		var imageKicker = {
			textTransform: 'uppercase',
			textAlign: 'center',
			fontSize: '32px',
			color: '#F76663'
		}

		return (
			<section style={imageSection}>
					<Col lg={12}>
						<h1 className="colorInteraction" style={sectionHeader}>Recent Blog Post</h1>
						<Col md={3} style={ColStyle}>
	              <img style={blogImage} src="http://www.topgear.com/sites/default/files/styles/16x9_1536w/public/images/big-read/header-image/2016/10/ba4d47c89006ad0d42a173ec361cb0e0/li3501158row_5419.jpg?itok=9hN1jLoD.jpg" />
	              <LinkContainer to={{pathname:'/Blog/Posts/NissanGTR'}}>
	                <a><h3 className="colorInteraction" style={imageKicker}>Nissan GTR</h3></a>
	              </LinkContainer>
	          </Col>
	          <Col md={3} style={ColStyle}>
	            <img style={blogImage} src="http://images.carandbike.com/car-images/gallery/volvo/xc90/exterior/volvo-xc90-forn-side-view.jpg" />
	            <LinkContainer to={{pathname:'/Blog/Posts/VolvoXC90'}}>
	              <a><h3 className="colorInteraction" style={imageKicker}>Volvo XC90</h3></a>
	            </LinkContainer>
	          </Col>
	          <Col md={3} style={ColStyle}>
	            <img style={blogImage} src="http://images.car.bauercdn.com/pagefiles/4601/tesla_model_s.jpg" />
	            <LinkContainer to={{pathname:'/Blog/Posts/TeslaModelS'}}>
	              <a><h3 className="colorInteraction" style={imageKicker}>Tesla Model S</h3></a>
	            </LinkContainer>
	          </Col>
						<Col md={3} style={ColStyle}>
	            <img style={blogImage} src="http://mercedes-amg-gt.mercedes-benz.com/en_COM/assets/img/content/highlights/dynamics/highlights_dynamics_03/dynamic_mercedes_amg_gt_3.jpg" />
	            <LinkContainer to={{pathname:'/Blog/Posts/BenzAMGGT'}}>
	              <a><h3 className="colorInteraction" style={imageKicker}>Benz AMG GT</h3></a>
	            </LinkContainer>
	          </Col>
					</Col>
			</section>
		);
	}
});

export default Post;
