const movieService = require("../services/movie.service");

// POST /api/movies
exports.createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET /api/films/:category
exports.getMoviesByCategory = async (req, res) => {
  try {
    const movies = await movieService.getMoviesByCategory(req.params.category); 
    res.json(movies);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET /api/movie/:path
exports.getMovieByPath = async (req, res) => {
  try {
    const movie = await movieService.getMovieByPath(req.params.path); // ✅
    res.json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// PUT /api/movies/:id
exports.updateMovie = async (req, res) => {
  try {
    const movie = await movieService.updateMovie(req.params.id, req.body); // ✅
    res.json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /api/movies/:id
exports.deleteMovie = async (req, res) => {
  try {
    await movieService.deleteMovie(req.params.id); // ✅
    res.json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
