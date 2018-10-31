namespace Collabify.Dal.DalCore

module MongoCrud =

    open MongoDB.Bson
    open MongoDB.Driver
    open MongoDB.Driver.Builders
    
    [<Literal>]
    let ConnectionString = "mongodb://hippoproject:project0areowned@ds227469.mlab.com:27469/mognotestdb"
    
    [<Literal>]
    let DbName = "mognotestdb"
    
    [<Literal>]
    let CollectionName = "Tasks"
    
    type TaskData = { Id : BsonObjectId; Title : string; Body: string; } 
    
    let client         = MongoClient(ConnectionString)
    let db             = client.GetDatabase(DbName)
    let testCollection = db.GetCollection<TaskData>(CollectionName)
    
    // Create 
    
    // Single Creation
    let public create ( task : TaskData ) = 
        testCollection.InsertOne( task )
    
    // Multiple Creation
    let createMany ( tasks : TaskData list ) =
        testCollection.InsertMany( tasks )
        
    // Read 
    
    // Read Based On Id 
    let readOnId ( id : BsonObjectId ) = 
        testCollection.Find( fun x -> x.Id = id ).ToEnumerable() 
    
    // Read Based On Name 
    let readOnName ( title : string ) = 
        testCollection.Find( fun x -> x.Title = title ).ToEnumerable() 
    
    // Read Based On Name and Id
    let readOnNameAndId ( id : BsonObjectId ) ( title : string ) =
        testCollection.Find( fun x -> x.Id = id && x.Title = title ).ToEnumerable() 