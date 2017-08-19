using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChurchAdministrations.Models
{
    public class Song
    {
        public int SongID { get; set; }
        public string SongCategory { get; set; }
        public string SongName { get; set; }
        public string Description { get; set; }
        public string SongFile { get; set; }
    }
}