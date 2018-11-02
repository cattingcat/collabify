namespace Collabify.Dal.DalCore

module MongoCrud =

    open System.Threading.Tasks
    open MongoDB.Bson
    open MongoDB.Driver
    open MongoDB.Driver.Builders
    
    [<Literal>]
    let ConnectionString = "mongodb://adolf:hitler1488@ds227469.mlab.com:27469/mognotestdb"
    
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
    
    // Find by Id 
    let findById ( id : BsonObjectId ) = 
        testCollection.Find( fun x -> x.Id = id ).ToEnumerable() 
    
    // Find by Name 
    let findByName ( title : string ) = 
        testCollection.Find( fun x -> x.Title = title ).ToEnumerable() 
    
    // Find by Name and Id
    let findByNameAndId ( id : BsonObjectId ) ( title : string ) =
        testCollection.Find( fun x -> x.Id = id && x.Title = title ).ToEnumerable()
        
    // Update
    
    // Update one
    let update ( td : TaskData) =
        let filter = Builders<TaskData>.Filter.Eq((fun x -> x.Id), td.Id)
        let updateDefinition = Builders<TaskData>.Update.Set((fun x -> x), td)
        testCollection.UpdateOne(filter, updateDefinition)
    
    // Delete
    
    // Delete by id
    let deleteById ( id : BsonObjectId) =
        testCollection.DeleteOne(fun x -> x.Id = id)

    // Delete all        
    let deleteAll =
        testCollection.DeleteMany(Builders.Filter.Empty)
    
    // some testing
    let id = new BsonObjectId(ObjectId.GenerateNewId())
    let task: TaskData = { Id = id; Title = "Title1"; Body = "SomeBody1"; }

    [<EntryPoint>]
    let main args =
        printfn "creating"
        create task
        printfn "Title: %s, Body: %s" task.Title task.Body
        
        printfn "getting"
        let task: TaskData = findById id |> Seq.head
        printfn "Title: %s, Body: %s" task.Title task.Body
        
        printfn "findall"
        
        0