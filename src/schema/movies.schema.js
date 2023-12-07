import mongoose from 'mongoose';

const Movies = mongoose.Schema({
    title : String,
    desc : String,
    duration : String,
    movie_actors : String,
    thumbnail : String,
    video : String,
    keywords : String,
    job_id : String,
    active : {
        type:Boolean,
        default:false
    },
    created_At : {
        type:Date,
        default : Date.now
    }
})

const MoviesSchema = mongoose.models.Movie || mongoose.model('Movie',Movies);
export default MoviesSchema;