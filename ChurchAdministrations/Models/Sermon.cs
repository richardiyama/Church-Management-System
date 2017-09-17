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
        public string SermonTitle { get; set; }
        public string SermonType { get; set; }
        public string FileSource { get; set; }
        public string Status { get; set; }
    }
}