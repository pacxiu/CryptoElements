import React, { Component } from 'react';

import ElementCard from '../partials/cards/ElementCard';
import ScientistCard from '../partials/cards/ScientistCard';
import SpecialCard from '../partials/cards/SpecialCard';
import PeriodicTableCard from '../partials/cards/PeriodicTableCard';

import { LoaderMarket } from '../partials/Loader';
import { ComingSoon } from './static/NotFound';

import ReactPaginate from 'react-paginate';

class Laboratory extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contractElements: this.props.elements.length,
			contractScientists: this.props.scientists.length,
			contractSpecials: this.props.specials.length,
			marketItemsPerPage: 12,
			pageCount: 1,
			offset: 0,
			marketItemType: this.props.marketItemType,
			sortType: "price",
			sortDirection: "descending"
		};

		this.handlePagination = this.handlePagination.bind(this);
		this.handleDataArray = this.handleDataArray.bind(this);
		this.renderMarketplace = this.renderMarketplace.bind(this);
		this.handleSortType = this.handleSortType.bind(this);
		this.handleSortDirection = this.handleSortDirection.bind(this);
		this.sortHelper = this.sortHelper.bind(this);
		this.updatePagination = this.updatePagination.bind(this);
	}

	componentDidMount() {
		this.props.getContractTokens();
		this.updatePagination();
		window.scrollTo(0,0);
	}

	handlePagination(data) {
		this.setState({ offset: data.selected });
		window.scrollTo(0,0);
	}

	handleDataArray(e) {
		e.preventDefault();
		const marketItemType = e.target.getAttribute("data-market");
		this.setState({ marketItemType }, this.updatePagination);
	}

	handleSortType(e) {
		this.setState({ sortType: e.target.value });
	}

	handleSortDirection(e) {
		this.setState({ sortDirection: e.target.value });
	}

	sortHelper(a, b) {
		if ( this.state.sortDirection === "ascending" ) {
			return a[this.state.sortType] - b[this.state.sortType];
		} else {
			return b[this.state.sortType] - a[this.state.sortType];
		}	
	}

	updatePagination() {
		const { loading, contractElements, contractScientists, contractSpecials, marketItemsPerPage } = this.state

		this.setState({ offset: 0 });

		if (loading) { return; }

		switch(this.state.marketItemType) {
  			case "element":
  				this.setState({ pageCount: Math.max(Math.ceil(contractElements / marketItemsPerPage), 1) });
  				break;
  			case "scientist":
  				this.setState({ pageCount: Math.max(Math.ceil(contractScientists / marketItemsPerPage), 1) });
  				break;
  			case "special":
  				this.setState({ pageCount: Math.max(Math.ceil(contractSpecials / marketItemsPerPage), 1) });
  				break;
  			default:
  				this.setState({ pageCount: 1 });
  				break;
  		}
	}

	renderMarketplace() {
		const { elements, scientists, specials, contract, account, web3, owner, buyToken } = this.props;
  		const { offset, marketItemsPerPage, marketItemType } = this.state;
  		const startingItem = offset * marketItemsPerPage;

  		let marketItems;
  		let marketItemsSorted;
  		let marketItemsVisible;
  		let marketItemsJSX;

  		switch(marketItemType) {
  			case "element":
		  		marketItems = elements.slice(0, this.state.contractElements);
		  		marketItemsSorted = marketItems.sort( (a, b) => this.sortHelper(a, b));
		  		// displaying only X items, visible on page with pagination
			  	marketItemsVisible = marketItemsSorted.slice(startingItem, startingItem + marketItemsPerPage);
			  	marketItemsJSX = marketItemsVisible.map((element, index) => {
					return (
						<ElementCard key={startingItem + index} {...{ element, contract, account, web3, owner, buyToken }} />			
					);
			  	});

			  	break;
			case "scientist":
				marketItems = scientists.slice(0, this.state.contractScientists);
		  		marketItemsSorted = marketItems.sort( (a, b) => this.sortHelper(a, b));
		  		// displaying only X items, visible on page with pagination
			  	marketItemsVisible = marketItemsSorted.slice(startingItem, startingItem + marketItemsPerPage);

			  	marketItemsJSX = marketItemsVisible.map((scientist, index) => {
					return (
						<ScientistCard key={index} {...{ scientist, contract, account, web3, owner, buyToken }} />	
					);
			  	});

				break;
			case "special":
				marketItems = specials.slice(0, this.state.contractSpecials);
		  		marketItemsSorted = marketItems.sort( (a, b) => this.sortHelper(a, b));
		  		// displaying only X items, visible on page with pagination
			  	marketItemsVisible = marketItemsSorted.slice(startingItem, startingItem + marketItemsPerPage);

			  	marketItemsJSX = marketItemsVisible.map((special, index) => {
					return (
						<SpecialCard key={index} {...{ special, contract, account, web3, owner, buyToken }} />	
					);
			  	});
				break;
			default: 
				if ( this.props.checkPeriodic === true && this.props.periodic.length === 0) {
					marketItemsJSX = "";
					break;				
				} else {
					marketItemsJSX = <PeriodicTableCard {...{ contract, account, web3, owner, buyToken }} />; 
				}				
				break;
  		}

	  	return (
			<div className="cards-container"> { marketItemsJSX } </div>	
	  	);
	}

	shouldComponentUpdate(nextProps) {
		const { elements, scientists, specials } = nextProps.tokensLoaded;

		if ( nextProps.elements.length !== this.state.contractElements ) {
  			this.setState({ contractElements: nextProps.elements.length });
  		}

  		if ( nextProps.scientists.length !== this.state.contractScientists ) {
  			this.setState({ contractScientists: nextProps.scientists.length });
  		}

  		// if ( nextProps.specials.length !== this.state.contractSpecials ) {
  		// 	this.setState({ contractSpecials: nextProps.specials.length });
  		// }

		if ( !elements || !scientists || !specials ) {
  			return false;
  		}

  		return true;
	}

  	render() {
  		const { sortType, sortDirection } = this.state;	
  		const marketPlaceItems = this.renderMarketplace();

  		const { elements, scientists, specials } = this.props.tokensLoaded;

  		if ( !elements || !scientists || !specials ) {
  			return (
  				<div className="container">
					<LoaderMarket/>
  				</div>			
  			)
  		}

	    return (
	      	<div className="container u-overflow">	
				<div id="filters">
					<div className="filters-market">
						<p>Choose cards:</p>
						<a className={`btn --inverted ${(this.state.marketItemType === "element" ? "is-active" : "")}`} data-market="element" href="" onClick={this.handleDataArray} >Elements</a>
						<a className={`btn --inverted ${(this.state.marketItemType === "scientist" ? "is-active" : "")}`} data-market="scientist" href="" onClick={this.handleDataArray} >Scientists</a>
						<a className={`btn --inverted ${(this.state.marketItemType === "periodic" ? "is-active" : "")}`} data-market="periodic" href="" onClick={this.handleDataArray} >Periodic Table</a>
						<a className={`btn --inverted ${(this.state.marketItemType === "special" ? "is-active" : "")}`} data-market="special" href="" onClick={this.handleDataArray} >Special</a>
					</div>

					<div className="filters-sort u-text-center">
						<p>Sort items by:</p>

						<select className="btn --primary --inverted" defaultValue={sortType} name="" id="filter-type" onChange={this.handleSortType}>
							<option value="id">Id</option>
							<option value="price">Price</option>
						</select> 

						<select className="btn --primary --inverted" defaultValue={sortDirection} name="" id="filter-direction" onChange={this.handleSortDirection}>
							<option value="ascending">Ascending</option>
							<option value="descending">Descending</option>
						</select>
					</div>			
				</div>

				{ marketPlaceItems }

				<div id="pagination-container">
		    		<ReactPaginate previousLabel={"prev"}
                       nextLabel={"next"}
                       breakLabel={"..."}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={1}
                       pageRangeDisplayed={2}
                       onPageChange={this.handlePagination}
                       forcePage={this.state.offset}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
                </div>
	    	</div>
	    );
  	}
}

export default Laboratory;