import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <header>
	<div className="header-top-bar">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-6">
					<ul className="top-bar-info list-inline-item pl-0 mb-0">
						<li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2"></i>support@novena.com</a></li>
						<li className="list-inline-item"><i className="icofont-location-pin mr-2"></i>Address Ta-134/A, New York, USA </li>
					</ul>
				</div>
				<div className="col-lg-6">
					<div className="text-lg-right top-right-bar mt-2 mt-lg-0">
						<a href="tel:+23-345-67890">
							<span>Call Now : </span>
							<span className="h4">823-4565-13456</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav className="navbar navbar-expand-lg navigation" id="navbar">
		<div className="container">
			<a className="navbar-brand" href="index.html">
				<img src="images/logo.png" alt="" className="img-fluid"/>
			</a>

			<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain"
				aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
				<span className="icofont-navigation-menu"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarmain">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
					<li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
					<li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/department">Departmrnts</Link></li>

					<li className="nav-item dropdown">
						<Link className="nav-link dropdown-toggle" to="/doctors" id="dropdown03" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Doctors <i className="icofont-thin-down"></i></Link>
						<ul className="dropdown-menu" aria-labelledby="dropdown03">
							<li><Link className="dropdown-item" to="/doctors">Doctors</Link></li>
							<li><Link className="dropdown-item" to="doctor-single.html">Doctor Single</Link></li>
							<li><Link className="dropdown-item" to="appoinment.html">Appoinment</Link></li>

							<li className="dropdown dropdown-submenu dropleft">
								<Link className="dropdown-item dropdown-toggle" to="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</Link>
			
								<ul className="dropdown-menu" aria-labelledby="dropdown0501">
									<li><Link className="dropdown-item" to="index.html">Submenu 01</Link></li>
									<li><Link className="dropdown-item" to="index.html">Submenu 02</Link></li>
								</ul>
							</li>
						</ul>
					</li>

					<li className="nav-item dropdown">
						<Link className="nav-link dropdown-toggle" to="/blog" id="dropdown05" data-toggle="dropdown"
							aria-haspopup="true" aria-expanded="false">Blog <i className="icofont-thin-down"></i></Link>
						<ul className="dropdown-menu" aria-labelledby="dropdown05">
							<li><Link className="dropdown-item" to="/blog">Blog with Sidebar</Link></li>
							<li><Link className="dropdown-item" to="blog-single.html">Blog Single</Link></li>
						</ul>
					</li>
					<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
				</ul>
			</div>
		</div>
	</nav>
</header>
    </>
  )
}

export default Navbar