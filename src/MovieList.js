import React, { Component } from 'react';
import './MovieList.css';

class MovieList extends Component{
	constructor(props){
		super(props);
		this.state = {
			movies:[],
			titleOrder:'asc',
			yearOrder:'asc'
		}
		this.sort = this.sort.bind(this);
	}


	sort(para){
		const { movies } = this.state;
		let { titleOrder, yearOrder } = this.state;
		if(para == 'name'){
			movies.sort((a,b)=>{
				if(titleOrder == 'asc'){
					return a.Title.charCodeAt(0) - b.Title.charCodeAt(0)
				}

				return b.Title.charCodeAt(0) - a.Title.charCodeAt(0)
			})
			titleOrder = titleOrder == 'asc' ? 'dsc' : 'asc';
		}
		else{
			movies.sort((a,b)=>{
				if(yearOrder == 'asc'){
					return a.Year - b.Year
				}

				return b.Year - a.Year;
			})
			yearOrder = yearOrder == 'asc' ? 'dsc' : 'asc';
		}


		this.setState({
			movies,
			titleOrder,
			yearOrder
		});
	}

	componentDidMount(){
	   fetch("https://www.omdbapi.com/?apikey=a567cf6c&s=love&type=movie")
      .then(res => res.json())
      .then((res)=>{
      	this.setState({movies:res.Search});
      })
      .catch()
	}
	render(){
		const { movies } = this.state;
		return ( <div>
				<div className="flex table-header">
					<div>Poster</div>
					<div onClick={()=>this.sort('name')}>
						Title 
						<span className="arrow-up"></span>
						<span className="arrow-down"></span>
					</div>
					<div onClick={()=>this.sort('year')}>
						Year
						<span className="arrow-up"></span>
						<span className="arrow-down"></span>
					</div>
				</div>
				{
					movies.map((mov,i)=>{
						return (
							<div className="flex row" key={i}>
								<div>
									<img src={mov.Poster} className="poster"/>
								</div>
								<div>{mov.Title}</div>
								<div>{mov.Year}</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

export default MovieList;