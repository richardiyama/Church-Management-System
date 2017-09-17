using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class ActivityCategory
    {
        public int ActivityCategoryID { get; set;}
        public string ActivityCategoryName { get; set; }
        public virtual ICollection<Activity> Activity { get; set; }
    }
}