using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace _10_project_SendDataPOST_.Controllers
{
    public class ValuesController : ApiController
    {
        public IHttpActionResult Post([FromBody]User user)
        {
            if (user != null)
                user.Age += 10;

            return Json(user, new Newtonsoft.Json.JsonSerializerSettings
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });
        }
    }
    public class User
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
