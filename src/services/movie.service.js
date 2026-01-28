const movieRepository = require("../repositories/movie.repository");

const allowedCategories = [
  "phim-moi",
  "phim-hay",
  "phim-hot",
  "anime-moi",
  "phim-chieu-rap",
  "phim-han",
  "anime",
  "sieu-nhan"
];

// Tạo phim
exports.createMovie = async (data) => {
  return movieRepository.createMovie(data);
};

// Lấy phim theo category (cho carousel)
exports.getMoviesByCategory = async (category) => {
  if (!allowedCategories.includes(category)) {
    throw new Error("Invalid category");
  }

  return movieRepository.findByCategory(category);
};

// Lấy chi tiết phim theo slug
exports.getMovieByPath = async (path) => {
  const movie = await movieRepository.findByPath(path);
  if (!movie) throw new Error("Movie not found");

  return movie;
};

// Cập nhật thông tin phim
exports.updateMovie = async (id, data) => {
  const movie = await movieRepository.updateMovieById(id, data);
  if (!movie) throw new Error("Movie not found");

  return movie;
};

// Xoá phim
exports.deleteMovie = async (id) => {
  const movie = await movieRepository.deleteMovieById(id);
  if (!movie) throw new Error("Movie not found");

  return movie;
};
