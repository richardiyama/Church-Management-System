using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Sermon
    {
        public int SermonID { get; set; }
        public string Description { get; set; }
        public string SermonContent { get; set; }
        public string Status { get; set; }
    }
}