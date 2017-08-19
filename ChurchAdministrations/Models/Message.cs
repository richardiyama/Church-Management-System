using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Message
    {
        public int MessageID { get; set; }
        public string Subject { get; set; }
        public string Description { get; set; }

        public virtual Member Member { get; set; }
        public int MemberID { get; set; }
        public virtual Accountant Accountant { get; set; }
        public int AccountantID { get; set; }

    }
}