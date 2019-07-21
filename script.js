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

var moviesElements = movies.map(function(movie){
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

/*var element = 
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

ReactDOM.render(element, document.getElementById('app'));
