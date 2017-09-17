using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
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
        }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Accountant> Accountants { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Member> Members { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Activity> Activities { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.ActivityCategory> ActivityCategories { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Group> Groups { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Venue> Venues { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Admin> Admins { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Attendance> Attendances { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Ministry> Ministries { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Expense> Expenses { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Income> Incomes { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Message> Messages { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Pastoral> Pastorals { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Pledge> Pledges { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.SellGift> SellGifts { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.SpiritualGift> SpiritualGifts { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Sermon> Sermons { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Service> Services { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Song> Songs { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Transaction> Transactions { get; set; }

        public System.Data.Entity.DbSet<ChurchAdministrations.Models.Donation> Donations { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<ManyToManyCascadeDeleteConvention>();
            modelBuilder.Conventions.Remove<OneToManyCascadeDeleteConvention>();
        }
    }
}
