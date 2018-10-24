using System;
using System.Linq;
using Neo4j.Driver.V1;

namespace Collabify.ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var server = new Uri("bolt://54.236.30.56:35231");
            //var serverHttps = "https://hobby-chgobhinbgiagbkemdonfcbl.dbs.graphenedb.com:24780/db/data/";
            var user = "neo4j";
            var password = "reason-slash-match";
            
            
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