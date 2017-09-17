using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Admin
    {
        public int AdminID { get; set; }
        public int MemberID { get; set; }
        public Member Member { get; set; }
    }
}