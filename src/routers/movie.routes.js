const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller");

// Tạo phim
router.post("/movies", movieController.createMovie);

// Lấy phim theo category (carousel)
router.get("/films/:category", movieController.getMoviesByCategory);

// Lấy chi tiết phim theo slug (path)
router.get("/movie/:path", movieController.getMovieByPath);

// Cập nhật phim
router.put("/movies/:id", movieController.updateMovie);

// Xoá phim
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;
