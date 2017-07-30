﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Ministry
    {
        public int MinistryID { get; set; }
        public string ImageSource { get; set; }
        public string MinistryName { get; set; }
        public int MemberID { get; set; }

        public virtual Member Member { get; set; }
    }
}