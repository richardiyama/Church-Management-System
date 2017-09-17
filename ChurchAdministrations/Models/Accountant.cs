using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Accountant
    {
        public int AccountantID { get; set; }

        public string Photo { get; set; }
        public string StaffMemberName { get; set; }
        public string StaffMemberEmail { get; set; }
        public string MobileNo { get; set; }

        public int MemberID { get; set; }
        public Member Member { get; set; }

        public virtual ICollection<Message> Message { get; set; }
    }
}