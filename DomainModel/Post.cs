using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.Mvc;

namespace DomainModel
{
    public class Post
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PostId { get; set; }
        [Required(ErrorMessage = "فیلد عنوان الزامی است")]
        [Display(Name = "عنوان پست")]
        public string PostTitle { get; set; }
        [Display(Name = "محتوا")]
        [AllowHtml]
        public string Content { get; set; }
        [DataType(DataType.Date)]
        [Display(Name = "تاریخ نشر")]
        public string PublishDate { get; set; }
    }
}
