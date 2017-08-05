using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class ChurchAdministrationsContextDB : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx
    
        public ChurchAdministrationsContextDB() : base("name=ChurchAdministrationsContextDB")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Member> Members { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Ministry> Ministries { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Group> Groups { get; set; }
    }
}
