import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HowItWorks extends Component {
	render() {
		return (
			<div className="container --thiner static-container">
				<h1 className="u-accent-primary">How it works</h1>

				<p>Every available Element, Scientist and Periodic Table card collectibles are visible on the Ethereum Blockchain as smart contracts. If you buy it, you own it. As they exist on Ethereum Blockchain they can only be acquired using Ether.</p>

				<p>CryptoElements works similarly to a token or a coin and can only be owned by one individual. They are non-fungible token <span className="u-accent-secondary">ERC&nbsp;721</span> that is indivisible and unique!</p>

				<p>You can acquire any available card on the <Link to="/laboratory" className="linker">Laboratory</Link>. Anyone else can also purchase your owned cards as long as they pay you the new price calculated from the <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x67123afd93dd99c2b7587ea506843bfd9485d95e" className="linker">Smart&nbsp;Contract</a> after you acquired the collectible card previously. However as an owner of a card you can change price of obtained card that is not bigger that current price and not less than starting price of such collectible.</p>

				<p>If you were owner of purchased collectible you get 96% of selling price. Then the owner of Periodic Table card, gets 1% of each transaction occuring in this dApp. Also owner of Scientist card, who discovered Element, if such exists for given Element, is rewarded with 1%.</p>

				<p>The rest of selling price is considered as dev fee. Depending on transaction type it is equal to:</p>
				<ul>
					<li>2% : for transaction of Element with existing Scientist</li>
					<li>3% : for transaction of Element without Scientist or Scientist</li>
					<li>4% : for transaction of Periodic Table</li>
				</ul>

				<p>The price increase is hard coded into the <a target="_blank" rel="noopener noreferrer" href="https://etherscan.io/address/0x67123afd93dd99c2b7587ea506843bfd9485d95e" className="linker">Smart&nbsp;Contract</a> and follow model shown below:</p>

				<table id="levels-table">
					<thead>
						<tr>
							<th>Value Increase Levels</th>
							<th>Price Range</th>
							<th>Price Increase</th>
							<th>Dev Cut</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Level 1</td>
							<td>0.005 ETH - 0.05 ETH</td>
							<td>100%</td>
							<td>2-4%</td>
						</tr>

						<tr>
							<td>Level 2</td>
							<td>0.05 ETH - 0.75 ETH</td>
							<td>50%</td>
							<td>2-4%</td>
						</tr>

						<tr>
							<td>Level 3</td>
							<td>0.75 ETH - 3 ETH</td>
							<td>30%</td>
							<td>2-4%</td>
						</tr>

						<tr>
							<td>Level 4</td>
							<td>3 ETH - </td>
							<td>15%</td>
							<td>2-4%</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
