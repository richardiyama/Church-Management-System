﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Accountant
    {
        public int AccountantID { get; set; }
        public int MemberID { get; set; }
        public virtual Member Member { get; set; }

        public virtual ICollection<Message> Message { get; set; }
    }
}