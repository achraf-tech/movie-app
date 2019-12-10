import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MovieCard from "./components/moviecard";
import matrix from "./images/matrix.jpg";
import inception from "./images/inception.jpg";
import troubles from "./images/en eaux troubles.jpg";
import fast from "./images/fast and furious.jpg";
import sicario from "./images/sicario.jpg";
import terminator from "./images/terminator.jpg";
import AddMovie from "./components/addmovie";
import Delaymovie from "./delaymovie";




const Moviedelay = Delaymovie(MovieCard);

let movies = [
  { title: "THE MATRIX", img: matrix, rating: 4 },
  { title: "THE EAUX", img:  troubles , rating: 5 },
  { title: "FAST & FURIOUS", img: fast, rating: 2 },
  { title: "INCEPTION", img: inception, rating: 5 },
  { title: "THE EMOJI MOVIE", img: sicario, rating: 1 },
  { title: "TERMINATOR", img: terminator, rating: 3 }
];

class App extends Component {
  state = {
    movies,
    formclosed: true,
    Loading: true
  };
  ratingsearch = rating => {
    console.log(rating, this.state.movies);
    this.setState({
      movies: movies.filter(e => e.rating >= rating)
    });
  };
  namesearch = name => {
    name
      ? this.setState({
          movies: movies.filter(e =>
            e.title.toLowerCase().includes(name.toLowerCase())
          )
        })
      : this.setState({ movies });
  };
  addmovie = (name, img, rating) => {
    return name && img && rating
      ? (movies.push({
          title: name.toUpperCase(),
          img,
          rating: Number(rating)
        }),
        this.setState({ movies }),
        console.log(movies))
      : null;
  };
  closeform = close => {
    this.setState({ formclosed: close });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ Loading: false });
    }, 3000);
  }

  render() {
    return (
      
      <div className="App w-75 m-auto text-secondary">
        <Navbar
          srating={rating => this.ratingsearch(rating)}
          sname={name => this.namesearch(name)}
          closed={close => this.closeform(close)}
        />
<div className='movieliste'>
        <Moviedelay Loading={this.state.Loading} movies={this.state.movies} />
        <AddMovie
          addmovie={(name, img, rating) => this.addmovie(name, img, rating)}
          closed={close => this.closeform(close)}
          formclosed={this.state.formclosed}
        />
        </div>
      </div>
      
    );
  }
}

export default App;
