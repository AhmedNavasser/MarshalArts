using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DomainModel
{
    public class Exhibition
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required(ErrorMessage = "فیلد عنوان الزامی است")]
        [Display(Name = "عنوان")]
        public string Title { get; set; }

        [Display(Name = "توضیحات")]
        public string Description { get; set; }

        public virtual ICollection<Image> Images { get; set; }

        public Exhibition()
        {
            Images = new List<Image>();
        }
    }



    public class Image
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public Guid ImageId { get; set; }
        public string ImagePath { get; set; }

        public Image()
        {
            ImageId = Guid.NewGuid();
        }
    }

}
