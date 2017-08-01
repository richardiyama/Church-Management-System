using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Member
    {

        public int MemberID { get; set; }



        public string Name { get; set; }

        
        public string Email { get; set; }

 
        public string Gender { get; set; }

        public string MobileNo { get; set; }

   
        public DateTime DateOfBirth { get; set; }
        
        public string MaritalStatus { get; set; }

        public string MemberType { get; set; }
        public string Occupation { get; set; }

        public string Education { get; set; }

   
        public DateTime BaptistDate { get; set; }

        public string City { get; set; }
       
        public string Address { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Group> Groups { get; set; }

        public virtual ICollection<Ministry> Ministries { get; set; }



    }

    
}