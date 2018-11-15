import React, { Component } from 'react';

export default class Privacy extends Component {
	render() {
		return (
			<div id="privacy" className="container --thiner static-container">
				<h1 className="u-accent-primary">Privacy Policy</h1>

				<p>The smart contracts and the site are referred to in this Policy as the "dApp". By using the dApp, you agree that we can collect, use, disclose, and process your information according to the following Policy. This Policy only applies to the dApp, and not to any other websites, products or services you may be able to access or link to via the dApp.</p>

				<h1 className="u-accent-primary">What we collect</h1>
				<p>We log the email address if you provide such as well as the address of your Ethereum wallet. Every time you use the dApp, we collect some very basic analytics, such as the type of device you’re using, what time you logged in, your IP address, the operating system of the device you’re using, and similar data. In order to record this data, third-party providers such as Facebook, Google Analytics, and similar may use cookies or pixels. This is a standard procedure with today’s technology, but you can go to your browser and remove or reject these cookies and other identifiers to avoid this; however, in some cases, this may limit the functionality of the dApp.</p>

				<h1 className="u-accent-primary">What we don't collect</h1>
				<p>When you use dApp, we do not collect any other personal information outside of what is outlined in this policy. The only time we would have, and record, any other personal information is if you fill out a form with the information on our site, provide written feedback with your name, or talk to us on social media sites or via email. The only payment information we retain is your Ethereum wallet address – no credit cards or bank account numbers are kept.</p>

				<h1 className="u-accent-primary">How we use collected information</h1>
				<p>Any information we collect is used to enhance dApp for you and provide you with the best experience possible. This includes:
				</p>

				<ul>
					<li>Analyzing trends in the application so we can provide the services and functionality you want</li>
					<li>Personalizing your experience in the application;</li>
					<li>If you provide some contact info we will can contact you to send you technical notices, updates, confirmations for sales, and information regarding security issues. Send you promotional offers. Respond to any questions, comments, or support issues.</li>
				</ul>

				<h1 className="u-accent-primary">How we don't use collected information</h1>
				<p>We do not share any information that directly identifies you with any third party, except in the following limited cases:
				</p>
				
				<ul>
					<li>If required to comply with applicable law or regulation, or to comply with law enforcement;</li>
					<li>To respond to claims and/or legal process;</li>
					<li>To prevent behavior that is (or we think may be) illegal or unethical</li>
					<li>With your consent, or at your request or direction;</li>
					<li>For any other reason as outlined in this Policy;</li>
				</ul>
				
				<h1 className="u-accent-primary">Minor age accounts (children)</h1>
				<p>Any person under the age of 13 is not allowed to create an account in the dApp or provide us with any personal information in any form. If you are the parent or guardian of a child under the age of 13 and you believe that your child has provided us with any personal information or set up an account with us without your knowledge, please contact us at contact@cryptoelements.org so we can delete the information. If we discover that there is a minor under the age of 13 using our dApp, we will remove that information from our database immediately.</p>


				<h1 className="u-accent-primary">Contact Us</h1>
				<p>Do you have any questions or requests due to this Policy? Feel free to contact us at contact@cryptoelements.org.</p>
			</div>
		);
	}
}
