const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String, // ảnh poster lớn
    },

    thumb: {
      type: String, // ảnh thumbnail
    },

    path: {
      type: String, // dùng cho slug URL: /phim/avatar-lua-va-tro-tan
      required: true,
      lowercase: true,
      trim: true,
    },

    time: {
      type: String, 
      // ví dụ: "198 phút" hoặc "24 phút/tập"
    },

    episode_current: {
      type: String,
      // ví dụ: "Hoàn Tất (12/12)" hoặc "Tập 5"
    },

    content: {
      type: String, // mô tả phim
    },

    lang: {
      type: String, // Vietsub, Lồng tiếng...
    },

    category: {
      type: String,
      required: true,
      enum: [
        "phim-moi",
        "phim-hay",
        "phim-hot",
        "anime-moi",
        "phim-chieu-rap",
        "phim-han",
        "sieu-nhan",
        "anime"
      ]
      // dùng để filter API: /api/movies?category=phim-hot
    },
    order: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
