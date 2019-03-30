using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ConsumeWebService.Models
{
    public class Post
    {

        // this class is for testing a web api
        // see https://jsonplaceholder.typicode.com/post

        public int UserId { get; set; }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}
