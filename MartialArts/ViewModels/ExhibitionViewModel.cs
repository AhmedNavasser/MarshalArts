using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DomainModel;

namespace MartialArts.ViewModels
{
    public class ExhibitionViewModel
    {
        public IEnumerable<Exhibition> Exhibitions { get; set; }
        public Exhibition Exhibition { get; set; }

        public ExhibitionViewModel()
        {
            Exhibition = new Exhibition();
        }
    }
}