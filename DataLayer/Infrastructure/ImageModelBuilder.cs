using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using DomainModel;

namespace DataLayer.Infrastructure
{
    public class ImageModelBuilder : ComplexTypeConfiguration<Image>
    {
        public ImageModelBuilder()
        {
            Property(p => p.ImageContent).HasColumnName("ImageContent").HasColumnType("varbinary").IsMaxLength();
        }
    }
}
