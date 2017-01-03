using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MarbleAPI.Models;

namespace MarbleAPI.Controllers
{
    public class MarbleController : ApiController
    {
        static public List<Marble> bagOfMarbles = new List<Marble>()
        {
            new Marble {Id = 0, color = "red" },
            new Marble {Id = 1, color = "blue" },
            new Marble {Id = 2, color = "green" },
            new Marble {Id = 3, color = "orange" },
            new Marble {Id = 4, color = "yellow" },
            new Marble {Id = 5, color = "purple" },
        };

        [HttpGet]
        public IHttpActionResult Get(Marble randomMarble)
        {
            if (randomMarble == null)
            {
                return Ok(bagOfMarbles);
            }
            else
            {
                return Ok(randomMarble);
            }
        }
        [HttpPost]
        public IHttpActionResult Add(Marble marble)
        {
            marble.Id = bagOfMarbles.Last().Id + 1; //how to do in jquery
            bagOfMarbles.Add(marble);
            return Ok(bagOfMarbles);
        }


    }
}
