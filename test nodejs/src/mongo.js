import mongoose from 'mongoose';
const db = mongoose.connection;

mongoose.connect('mongodb://localhost/28017/data/db');

// const movieSchema = new mongoose.Schema({
//     title: {type: String}
//     , rating: String
//     , releaseYear: Number
//     , hasCreditCookie: Boolean
// });
//
// const Movie = mongoose.model('Movie', movieSchema);

console.log(mongoose);

class Blacklist extends mongoose.Schema {
    constructor() {
        super({
            type: String,
            ip: String,
            details: String,
            reason: String
        })
    }
}

const model = mongoose.model('Blacklist', new Blacklist());

export { model };

// export default class Mongo {
//     constructor() {
//         this.save = this.saveToBase();
//         this.save = this.getAll();
//     }
//     saveToBase(item) {
//         let movie = new Movie({
//             title: item.title
//             , rating: item.rating
//             , releaseYear: item.releaseYear
//             , hasCreditCookie: item.hasCreditCookie
//         });
//
//         movie.save(function(err, thor) {
//             if (err) return console.error(err);
//             return true;
//         });
//
//         movieSchema.pre("save", function(next) {
//             const self = this;
//             Movie.findOne({title : this.title}, 'title', function(err, results) {
//                 if(err) {
//                     next(err);
//                 } else if(results) {
//                     console.warn('results', results);
//                     self.invalidate("title", "title must be unique");
//                     next(new Error("title must be unique"));
//                 } else {
//                     console.log(next);
//                     next();
//                 }
//             });
//         });
//     }
//     getAll() {
//         Movie.find({}, function(err, movies) {
//             let movieMap = {};
//
//             movies.forEach(function(movie) {
//                 movieMap[movie.title] = movie;
//             });
//
//             return movieMap;
//         });
//     }
// }