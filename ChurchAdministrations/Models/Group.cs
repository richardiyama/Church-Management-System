using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Group
    {
        public int GroupID { get; set; }
        public string GroupName { get; set; }
        public string ImageSource { get; set; }

        public virtual ICollection<Member> Member { get; set; }
        public virtual ICollection<Service> Service { get; set; }

    }
}