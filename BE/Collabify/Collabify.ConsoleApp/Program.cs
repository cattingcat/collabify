using System;
using System.Linq;
using Neo4j.Driver.V1;

namespace Collabify.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var server = "bolt://hobby-chgobhinbgiagbkemdonfcbl.dbs.graphenedb.com:24786";
            var user = "admin";
            var password = "b.cDl4271RdV33.7UHpqUHznmdQoNi1";

            using (IDriver driver = GraphDatabase.Driver(server, AuthTokens.Basic(user, password)))
            {
                var session = driver.Session();

                var greeting = session.WriteTransaction(tx =>
                {
                    var result = tx.Run("CREATE (a:Greeting) " +
                                        "SET a.message = $message " +
                                        "RETURN a.message + ', from node ' + id(a)",
                        new {message = "qwe"});
                    
                    
                    return result.Single()[0].As<string>();
                });
                
                Console.WriteLine(greeting);
            }

        }
    }
}