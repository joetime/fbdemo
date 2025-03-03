
function initGame (mongoose) {
    
    var gameSchema = new mongoose.Schema({
        //_id: (autogenerated)
        
        weekNumber: String,
        homeAbbr: String,
        awayAbbr: String,
        kickoff: Date,
        
        homeTeam: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Team'
        },
        awayTeam: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Team'
        },
        
        homeScore: Number,
        awayScore: Number,
        
        spread: Number,
        
        favorite: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Team'
        },
        
        winnerWithSpread: {
            type: mongoose.Schema.Types.ObjectId, ref: 'Team'
        },
        
        deleted: Boolean
    });
    
    return gameSchema;
}

module.exports.initGame = initGame;