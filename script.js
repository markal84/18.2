var movies = [
    {
      id: 1,  
      title: 'Harry Potter',
      desc: 'Kid sorcerer movie',
      img: 'potter.jpg'
    },
    {
      id: 2,  
      title: 'Lion king',
      desc: 'Movie about lion king',
      img: 'lion_king.jpg'
    },
    {
      id: 3,
      title: 'Predator',
      desc: 'Great movie',
      img: 'predator.jpg'  
    },
    {
      id: 4,
      title: 'Terminator 2',
      desc: 'Another great movie',
      img: 'terminator.jpg'  
    }
  ];

/*var moviesElements = movies.map(function(movie){
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img',{src: movie.img})
    );
});  

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Movie list'),
        React.createElement('ul', {}, moviesElements)
    );

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Movie list'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Kid sorcerer movie')
            ),
            React.createElement('li', {}, 
                React.createElement('h2', {}, 'Lion king'),
                React.createElement('p', {}, 'Movie about lion king')
            )
        )
    ); */

  var Movie = React.createClass({
      propTypes: {
          movie: React.PropTypes.object.isRequired
      },
      render: function () {
          return (
              React.createElement('li', {key: this.props.movie.id},
                  React.createElement(MovieTitle, {movie: this.props.movie}),
                  React.createElement(MovieDescription, {movie: this.props.movie}),
                  React.createElement(MoviePoster, {movie: this.props.movie})
              )
          )
      }
  });

  var MovieTitle = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('h2', {}, this.props.movie.title)
        );
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            React.createElement('p', {}, this.props.movie.desc)
        );
    }
});

var MoviePoster = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function (){
        return (
            React.createElement('img', {src: this.props.movie.img, height: 150, width: 150})
        )
    }

});  
  
var moviesElements = movies.map(function (movie) {
    return (
        React.createElement(Movie, {key: movie.id, movie: movie})
    )
});  

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
