using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ChurchAdministrations.Models
{ 
    
    public class Member
    {

        public int MemberID { get; set; }



        public string Name { get; set; }
        public string Username { get; set; }
        
      
        public string Password { get; set; }

       
        public string ConfirmPassword { get; set; }


        public string Email { get; set; }

 
        public string Gender { get; set; }

        public string MobileNo { get; set; }


        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateOfBirth { get; set; }
        
        public string MaritalStatus { get; set; }

        public string MemberType { get; set; }
        public string Occupation { get; set; }

        public string Education { get; set; }

     
        


        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime BaptistDate { get; set; }

        public string City { get; set; }
       
        public string Address { get; set; }
        public string Image { get; set; }

        public int MinistryID { get; set; }

        public virtual Ministry Ministry { get; set; }
        public virtual Group Group { get; set; }

        public virtual ICollection<Pledge> Pledge { get; set; }
        public virtual ICollection<SellGift> SellGift { get; set; }
        public virtual ICollection<Accountant> Accountant { get; set; }

        public int GroupID { get; set; }

        



    }

    
}