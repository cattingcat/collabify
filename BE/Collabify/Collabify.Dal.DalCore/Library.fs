namespace Collabify.Dal.DalCore

module SomeProcess =
    open MongoCrud
    open MongoDB.Bson
    
    let task: TaskData = { Id = new BsonObjectId(ObjectId.GenerateNewId()); Title = "Titly"; Body = "SomeBody"; }
    
    MongoCrud.create task