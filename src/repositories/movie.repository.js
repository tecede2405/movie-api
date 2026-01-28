const Movie = require("../models/movie.model");

// Tạo phim
exports.createMovie = (data) => {
  return Movie.create(data);
};

// Lấy phim theo category + sắp xếp thứ tự
exports.findByCategory = (category) => {
  return Movie.find({ category })
    .sort({ order: 1, createdAt: -1 })
    .maxTimeMS(5000); 
};

// Lấy phim theo slug (path)
exports.findByPath = (path) => {
  return Movie.findOne({ path });
};

// Cập nhật phim theo ID
exports.updateMovieById = (id, data) => {
  return Movie.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

// Xoá phim theo ID
exports.deleteMovieById = (id) => {
  return Movie.findByIdAndDelete(id);
};