using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DomainModel
{
    public class User
    {
        [Key]
        [Required(ErrorMessage = "این فیلد الزامی است")]
        [Display(Name = "نام کاربری")]
        public String  UserName { get; set; }
        [Required(ErrorMessage = "این فیلد الزامی است")]
        [MinLength(6 , ErrorMessage = "کمترین طول رمز 6 کاراکتر می باشد")]
        [Display(Name = "رمز عبور")]
        public string Password { get; set; }
    }
}
