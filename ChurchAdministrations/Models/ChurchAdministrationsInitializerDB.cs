using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class ChurchAdministrationsInitializerDB : System.Data.Entity.DropCreateDatabaseAlways<ChurchAdministrationsContextDB>
    {
        protected override void Seed(ChurchAdministrationsContextDB context)
        {
           

            context.Members.Add(new Member
            {
                Name = "Richard Iyama",
                Username = "richardiyama",
                Password = "JAVA4real2002",


                ConfirmPassword = "JAVA4real2002",


                Email = "richardiyama@yahoo.com",

                Gender = "Male",

                MobileNo = "08084188687",

               
                DateOfBirth = Convert.ToDateTime(@"16/03/1987", System.Globalization.CultureInfo.GetCultureInfo("hi-IN").DateTimeFormat),

                MaritalStatus = "Married",

                MemberType = "Volunteer",
                Occupation = "Software Developer",

                Education = "Computer Science",

                GroupName = "Youth",

                MinistryName = "Youth",

                BaptistDate = Convert.ToDateTime(@"22/11/1998", System.Globalization.CultureInfo.GetCultureInfo("hi-IN").DateTimeFormat),

            City = "Ikeja",

                Address = "Oregun Lagos",
                Image = "1.jpg"
            

            });
            context.Groups.Add(new Group {  GroupName = "Youth",
        ImageSource = "2.jpg"
    });
            context.Ministries.Add(new Ministry
            {
                MinistryName = "Youth",
                ImageSource = "2.jpg"
            });
            base.Seed(context);
        }
    }
}