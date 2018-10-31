using System;
using System.Linq;
using Collabify.Dal.DalCore;
using Neo4j.Driver.V1;

namespace Collabify.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var server = new Uri("bolt://34.227.93.73:33839");
            var user = "neo4j";
            var password = "appeals-windlasses-tone";
            
            var query = 
                "MATCH (u:Troll) "+
                "RETURN u.screen_name as screen_name "+
                "LIMIT 500";

            using (IDriver driver = GraphDatabase.Driver(server, AuthTokens.Basic(user, password)))
            {
                var session = driver.Session();

                var res = session.Run(query);
                foreach (var key in res.Keys)
                {
                    Console.WriteLine(key);
                }
                Console.WriteLine(res);
            }

        }
    }
}